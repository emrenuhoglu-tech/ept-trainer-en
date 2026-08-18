// Drill scorecard 2.0 — localStorage. ONE entry PER concept (consolidated).
// Intervals widen with success (wrong+1 / half+2 / correct 3→7→14→30). due is DYNAMICALLY
// capped to the next target event day (events.ts nextEvent) — no fixed past date, so when no
// event is pending spaced repetition works fully. Severity + confidence + mastery.
import { KARNE_SEED } from "../data/karne_seed";
import { load, save, peek } from "./storage";
import { localIsoDay as isoDay } from "./date";
import { nextEvent } from "../data/events";

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
const CORRUPT_KEY = "karne:corrupt-backup"; // corrupt data is backed up here, never seed-overwritten

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
  icm: "ICM",
  "icm-cover": "ICM cover",
  multiway: "Multiway",
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

// due cap = next target event day (retrieval concentrates before the event). No event, or it
// fell to today/past → NO cap → intervals (3/7/14/30) widen naturally.
function dueCap(): string {
  return nextEvent(isoDay(0))?.start ?? "";
}

export function capDue(iso: string): string {
  const cap = dueCap();
  if (!cap || cap <= isoDay(0)) return iso; // no cap / fell to today → don't clip
  return iso > cap ? cap : iso;
}

// Widening interval on correct; high-severity misses get pulled to the next day.
// streak 1/2/3/4+ → 3/7/14/30 days (30 = saglam maintenance review).
export function computeDue(sonuc: Sonuc, streak: number, severity?: Severity): string {
  if (sonuc === "wrong") return capDue(isoDay(1));
  if (sonuc === "half") return capDue(isoDay(severity === "tournament_life" ? 1 : 2));
  const steps = [3, 7, 14, 30];
  const off = steps[Math.min(Math.max(streak, 1) - 1, steps.length - 1)];
  return capDue(isoDay(off));
}

export function computeMastery(streak: number, correctDays: string[]): Mastery {
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

// Normalize a v2 record over fresh() — fill missing/broken fields (if correctDays is not an
// array it becomes []; otherwise upsert's .includes crashes → white screen).
function normalizeEntry(r: Record<string, unknown>): KarneEntry {
  const kavram = String(r.kavram || r.id || "kök-hata");
  const cd = (r as { correctDays?: unknown }).correctDays;
  return {
    ...fresh(kavram),
    ...(r as Partial<KarneEntry>),
    id: kavram,
    kavram,
    correctDays: Array.isArray(cd) ? (cd as string[]) : [],
    reps: typeof r.reps === "number" ? (r.reps as number) : 0,
    streak: typeof r.streak === "number" ? (r.streak as number) : 0,
    due: capDue(String(r.due || isoDay(0))),
  };
}

// CONSOLIDATE legacy (v1, many-rows-per-concept) data by concept.
export function migrate(rows: Record<string, unknown>[]): KarneEntry[] {
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
  const raw = peek(KEY);
  if (raw !== null) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = undefined;
    }
    if (Array.isArray(parsed) && parsed.length) {
      const rows = parsed as Record<string, unknown>[];
      // v2 (has a reps field)? Normalize either way.
      const out =
        typeof rows[0].reps === "number" ? rows.map(normalizeEntry) : migrate(rows);
      save(KEY, out);
      return out;
    }
    // Key exists but is corrupt (parse error / not an array / non-empty): BACK UP the raw
    // value, NEVER silently seed over it (a half-written record = months of lost data).
    if (raw.trim() && !(Array.isArray(parsed) && parsed.length === 0)) {
      save(CORRUPT_KEY, raw);
    }
  }
  const seeded = migrate(KARNE_SEED as unknown as Record<string, unknown>[]);
  save(KEY, seeded);
  return seeded;
}

function upsert(
  kavram: string,
  patch: { soru_ozeti: string; sonuc: Sonuc; not?: string; severity?: Severity; confidence?: number },
  opts?: { resetConfidence?: boolean },
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
  // A Review self-grade carries no fresh confidence; passing the stale 0.95 through inflates
  // calibration → reset it (calibration should only count answer-moment confident records).
  e.confidence = opts?.resetConfidence ? undefined : patch.confidence ?? e.confidence;
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

// Review loop — updates in place by concept (id = kavram). It's a self-grade, so it resets
// confidence (see upsert resetConfidence).
export function reviewEntry(id: string, sonuc: Sonuc): void {
  const e = loadKarne().find((x) => x.id === id || x.kavram === id);
  if (!e) return;
  upsert(e.kavram, { soru_ozeti: e.soru_ozeti, sonuc, not: e.not, severity: e.severity }, { resetConfidence: true });
}

const SEV_RANK: Record<Severity, number> = { tournament_life: 0, major: 1, minor: 2 };

// due-arrived concepts. saglam concepts return for a 30-day maintenance review when their due
// comes (not permanently removed — otherwise knowledge decays while the scorecard shows green).
export function dueEntries(): KarneEntry[] {
  const today = isoDay(0);
  return loadKarne()
    .filter((e) => e.due <= today)
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
interface JournalRow { day: string; el: string; aksiyon: string; gerekce?: string; guven?: number }
export function journalForModel(): string {
  const rows = load<JournalRow[]>("journal", []);
  if (!rows.length) return "";
  const days = [...new Set(rows.map((r) => r.day))].sort().slice(-2); // last 2 days
  const recent = rows.filter((r) => days.includes(r.day)).slice(0, 6);
  if (!recent.length) return "";
  return (
    "\n\nRecent hands he brought from the table (next-day seed — re-ask these spots in a new guise):\n" +
    recent
      .map((r) => {
        const g = typeof r.guven === "number" ? ` [${Math.round(r.guven * 100)}% confidence]` : "";
        return `- [${r.day}] ${r.el} → ${r.aksiyon}${r.gerekce ? " (" + r.gerekce + ")" : ""}${g}`;
      })
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
