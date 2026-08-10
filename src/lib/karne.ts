// Drill scorecard 2.0 — localStorage. ONE entry PER concept (consolidated).
// Intervals widen with success (wrong+1 / half+2 / correct 3→7→14), back-planned from
// EPT Day-1 (2026-08-16) so nothing lands past Aug 14. Severity + confidence + mastery.
import { KARNE_SEED } from "../data/karne_seed";
import { load, save } from "./storage";

export type Sonuc = "wrong" | "half" | "correct";
export type Severity = "minor" | "major" | "tournament_life";
export type Mastery = "gorundu" | "asina" | "yetkin" | "saglam";

export interface KarneEntry {
  id: string; // = kavram (consolidated)
  kavram: string;
  soru_ozeti: string; // latest
  sonuc: Sonuc; // latest
  not?: string;
  severity?: Severity;
  confidence?: number; // last confidence (0.6 / 0.8 / 0.95)
  streak: number; // consecutive correct
  reps: number; // total attempts
  correctDays: string[]; // distinct days answered correctly (for mastery)
  tarih: string;
  due: string;
  mastery: Mastery;
}

const KEY = "karne";
const DUE_CAP = "2026-08-14"; // no review is scheduled past this (last retrieval before Day-1)

// DISPLAY-ONLY labels for the internal `kavram` concept slugs. The slugs stay the
// stored/compared ids (recordResult, review, model prompt); this only prettifies the chips.
// Unknown slugs fall back to a de-hyphenated form.
export const CONCEPT_LABEL: Record<string, string> = {
  "kök-hata": "Root error",
  "stack-modu": "Stack mode",
  "3bet-aralik": "3-bet range",
  "blof-secimi": "Bluff selection",
  draw: "Draw",
  plo: "PLO",
  boyut: "Sizing",
  "25-30bb-değer": "25–30bb value",
  "25-30bb-fold": "25–30bb fold",
  "3bet-jam": "3-bet jam",
  "4bet-cevap": "4-bet response",
  "aldatıcı-eller": "Deceptive hands",
  "blöf-kriter": "Bluff criteria",
  "board-sahipliği": "Board ownership",
  "canlı-value": "Live value",
  chop: "Chop",
  coldcall: "Coldcall",
  icm: "ICM",
  "jam-call": "Jam call",
  "kime-blöf": "Who to bluff",
  "kqo-vaka": "KQo case",
  "oop-sıkı": "OOP tight",
  "orta-çift-30bb": "Medium pair 30bb",
  "plo-aa": "PLO AA",
  "rakip-okuma": "Villain read",
  squeeze: "Squeeze",
  "suited-connector-fold": "Suited connector fold",
  "suited-tuzağı": "Suited trap",
  "turn-fold-equity": "Turn fold equity",
};

export function conceptLabel(kavram: string): string {
  return CONCEPT_LABEL[kavram] ?? kavram.replace(/-/g, " ");
}

function isoDay(plusDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + plusDays);
  return d.toISOString().slice(0, 10);
}

function capDue(iso: string): string {
  return iso > DUE_CAP ? DUE_CAP : iso;
}

// Widening interval on correct; high-severity misses get pulled to the next day.
function computeDue(sonuc: Sonuc, streak: number, severity?: Severity): string {
  if (sonuc === "wrong") return capDue(isoDay(1));
  if (sonuc === "half") return capDue(isoDay(severity === "tournament_life" ? 1 : 2));
  const steps = [3, 7, 14];
  const off = steps[Math.min(Math.max(streak, 1) - 1, steps.length - 1)];
  return capDue(isoDay(off));
}

function computeMastery(streak: number, correctDays: string[]): Mastery {
  const days = new Set(correctDays).size;
  if (streak >= 3 && days >= 3) return "saglam";
  if (streak >= 2 && days >= 2) return "yetkin";
  if (streak >= 1) return "asina";
  return "gorundu";
}

function fresh(kavram: string, base?: Partial<KarneEntry>): KarneEntry {
  return {
    id: kavram,
    kavram,
    soru_ozeti: "",
    sonuc: "wrong",
    streak: 0,
    reps: 0,
    correctDays: [],
    tarih: isoDay(0),
    due: isoDay(0),
    mastery: "gorundu",
    ...base,
  };
}

// CONSOLIDATE legacy (v1, many-rows-per-concept) data by concept.
function migrate(rows: Record<string, unknown>[]): KarneEntry[] {
  const byK = new Map<string, KarneEntry>();
  for (const r of rows) {
    const kavram = String(r.kavram || "kök-hata");
    const cur = byK.get(kavram) || fresh(kavram);
    cur.reps += 1;
    cur.soru_ozeti = String(r.soru_ozeti || cur.soru_ozeti);
    cur.sonuc = (r.sonuc as Sonuc) || cur.sonuc;
    cur.not = (r.not as string) || cur.not;
    cur.tarih = String(r.tarih || cur.tarih);
    cur.due = capDue(String(r.due || cur.due));
    byK.set(kavram, cur);
  }
  return [...byK.values()];
}

export function loadKarne(): KarneEntry[] {
  const existing = load<Record<string, unknown>[] | null>(KEY, null);
  if (existing && existing.length) {
    // v2 (has a reps field)? if not, migrate.
    if (typeof existing[0].reps === "number") return existing as unknown as KarneEntry[];
    const migrated = migrate(existing);
    save(KEY, migrated);
    return migrated;
  }
  const seeded = migrate(KARNE_SEED as unknown as Record<string, unknown>[]);
  save(KEY, seeded);
  return seeded;
}

function upsert(
  kavram: string,
  patch: { soru_ozeti: string; sonuc: Sonuc; not?: string; severity?: Severity; confidence?: number },
): void {
  const k = loadKarne();
  let e = k.find((x) => x.kavram === kavram);
  if (!e) {
    e = fresh(kavram);
    k.push(e);
  }
  e.reps += 1;
  e.soru_ozeti = patch.soru_ozeti;
  e.sonuc = patch.sonuc;
  e.not = patch.not ?? e.not;
  e.severity = patch.severity ?? e.severity;
  e.confidence = patch.confidence ?? e.confidence;
  e.streak = patch.sonuc === "correct" ? e.streak + 1 : 0;
  if (patch.sonuc === "correct") {
    const today = isoDay(0);
    if (!e.correctDays.includes(today)) e.correctDays.push(today);
  }
  e.tarih = isoDay(0);
  e.due = computeDue(patch.sonuc, e.streak, e.severity);
  e.mastery = computeMastery(e.streak, e.correctDays);
  save(KEY, k);
}

export function recordResult(r: {
  kavram: string;
  soru_ozeti: string;
  sonuc: Sonuc;
  not?: string;
  severity?: Severity;
  confidence?: number;
}): void {
  upsert(r.kavram, r);
}

// Review loop — updates in place by concept (id = kavram).
export function reviewEntry(id: string, sonuc: Sonuc): void {
  const e = loadKarne().find((x) => x.id === id || x.kavram === id);
  if (!e) return;
  upsert(e.kavram, { soru_ozeti: e.soru_ozeti, sonuc, not: e.not, severity: e.severity });
}

const SEV_RANK: Record<Severity, number> = { tournament_life: 0, major: 1, minor: 2 };

export function dueEntries(): KarneEntry[] {
  const today = isoDay(0);
  return loadKarne()
    .filter((e) => e.due <= today && e.mastery !== "saglam")
    .sort(
      (a, b) =>
        (SEV_RANK[a.severity ?? "minor"] - SEV_RANK[b.severity ?? "minor"]) ||
        a.due.localeCompare(b.due),
    );
}

// Confident-but-wrong: most dangerous (tournament-ending) mistakes first.
export function confidentWrong(): KarneEntry[] {
  return loadKarne()
    .filter((e) => e.sonuc === "wrong" && (e.confidence ?? 0) >= 0.8)
    .sort((a, b) => SEV_RANK[a.severity ?? "minor"] - SEV_RANK[b.severity ?? "minor"]);
}

// Calibration: actual hit rate on high-confidence (≥80%) answers.
export function calibration(): { high: number; hit: number } | null {
  const k = loadKarne().filter((e) => (e.confidence ?? 0) >= 0.8 && e.reps > 0);
  if (!k.length) return null;
  const hit = k.filter((e) => e.sonuc === "correct").length;
  return { high: k.length, hit };
}

export function masteryCounts(): Record<Mastery, number> {
  const out: Record<Mastery, number> = { gorundu: 0, asina: 0, yetkin: 0, saglam: 0 };
  for (const e of loadKarne()) out[e.mastery]++;
  return out;
}

// Last 2 days of hands from the decision journal (cornerman) — fed into drill/sim as the
// "next-day seed" (the book's Chapter 9 protocol: hands from the table become cases). Only
// Emre's own hands; evaluation stays in the book-based LLM prompt. Empty if no records.
interface JournalRow { day: string; el: string; aksiyon: string; gerekce?: string }
export function journalForModel(): string {
  const rows = load<JournalRow[]>("journal", []);
  if (!rows.length) return "";
  const days = [...new Set(rows.map((r) => r.day))].sort().slice(-2); // last 2 days
  const recent = rows.filter((r) => days.includes(r.day)).slice(0, 6);
  if (!recent.length) return "";
  return (
    "\n\nRecent hands he brought from the table (next-day seed — re-ask these spots in a new guise):\n" +
    recent
      .map((r) => `- [${r.day}] ${r.el} → ${r.aksiyon}${r.gerekce ? " (" + r.gerekce + ")" : ""}`)
      .join("\n")
  );
}

// Short scorecard text sent to the model: due + severity + confidence hints.
export function karneForModel(): string {
  const due = dueEntries();
  const list = (due.length ? due : loadKarne()).slice(0, 10);
  if (!list.length) return "(scorecard empty)";
  return list
    .map((e) => {
      const sev = e.severity === "tournament_life" ? " ⚠tournament_life" : "";
      const conf = (e.confidence ?? 0) >= 0.8 && e.sonuc === "wrong" ? " (confident-but-wrong)" : "";
      return `- [${e.sonuc}${sev}${conf}] ${e.kavram}: ${e.soru_ozeti}${e.not ? " — " + e.not : ""} (due ${e.due})`;
    })
    .join("\n");
}
