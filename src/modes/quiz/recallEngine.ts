// Range Recall engine — FULLY offline, faithful to the book. Two axes:
// depth × (opener / position). Only the book's CONCRETE bands are drilled:
// 100bb+ (Chapter 4: 3-bet/call, 4-bet response, squeeze) and 25–30bb (Chapter 5:
// open, jam, call vs jam). 40–100bb and <25bb are directional in the book (no hand
// lists) → NO drill. Correct answers are ALWAYS derived from the curriculum getters;
// no hand is ever invented.
import {
  rangeGroups,
  fourBetRanges,
  squeezeRange,
  openRanges,
  jamRanges,
  jamCallRange,
} from "../../content/curriculum";
import { parseRange, cellCode } from "../../lib/handgrid";
import { flatText, flatScope } from "./quizEngine";
import { load, save } from "../../lib/storage";

export type RecallDepth = "derin" | "kisa";
export type RecallAction = "3bet" | "4bet" | "squeeze" | "acis" | "jam" | "jamcall";
export type RecallAnswer = "3bet" | "call" | "fold" | "4bet" | "value" | "blof" | "acis" | "jam";

export const DEPTH_ACTIONS: Record<RecallDepth, RecallAction[]> = {
  derin: ["3bet", "4bet", "squeeze"],
  kisa: ["acis", "jam", "jamcall"],
};

export interface RecallSel {
  depth: RecallDepth;
  action: RecallAction;
  openerIdx: number; // 3bet: rangeGroups; acis: openRanges; jam: jamRanges index
  posIdx: number; // 3bet only: row within the group (hero position)
}

export interface RecallQuestion {
  kavram: string; // parseable key: recall:derin:UTG→BTN, recall:kisa:jam→... etc.
  hand: string;
  correct: RecallAnswer;
  answers: RecallAnswer[]; // buttons to render
  value: string; // reveal grid inputs — book text verbatim
  blof: string;
  flat: string;
  note: string; // short explanation based on the book
}

// The 169 hand codes (built once)
const ALL: string[] = [];
for (let r = 0; r < 13; r++) for (let c = 0; c < 13; c++) ALL.push(cellCode(r, c));

// Anti-memorization (ScenarioQuiz's seen-map pattern): pick the least-shown hand per spot.
const SEEN_KEY = "recall:seen";
type SeenMap = Record<string, number>;
function pickLeastSeen(kavram: string, pool: string[]): string {
  const seen = load<SeenMap>(SEEN_KEY, {});
  const count = (h: string) => seen[`${kavram}|${h}`] ?? 0;
  const min = Math.min(...pool.map(count));
  const fresh = pool.filter((h) => count(h) === min);
  const hand = fresh[Math.floor(Math.random() * fresh.length)];
  seen[`${kavram}|${hand}`] = count(hand) + 1;
  save(SEEN_KEY, seen);
  return hand;
}

interface Cat {
  cat: RecallAnswer;
  pool: string[];
  w: number;
}

// Weighted category pick (quizEngine's 3:2:2 pattern) — empty pools are skipped.
function weighted(cats: Cat[]): Cat | null {
  const avail = cats.filter((c) => c.pool.length > 0);
  if (!avail.length) return null;
  const bag: Cat[] = [];
  for (const c of avail) for (let i = 0; i < c.w; i++) bag.push(c);
  return bag[Math.floor(Math.random() * bag.length)];
}

// Fold-pool FIDELITY guard: if the range carries un-parseable prose notes, hands covered
// by that prose could be mislabeled "fold" → generate no fold questions. The single safe
// exception is "all A-x" (Section 5.1 BTN): non-ace hands are still certain folds.
function safeFoldPool(taken: Set<string>, notes: string[]): string[] {
  const rest = ALL.filter((c) => !taken.has(c));
  if (!notes.length) return rest;
  if (notes.every((n) => /\bA[-–]?x\b/i.test(n))) return rest.filter((c) => c[0] !== "A");
  return [];
}

// ---- 100bb+ · 3-bet / call / fold (Section 4.3) — pool construction identical to quizEngine ----
function q3bet(sel: RecallSel): RecallQuestion | null {
  const groups = rangeGroups().filter((g) => g.table && g.table.rows.length > 0);
  if (!groups.length) return null;
  const g = groups[Math.min(sel.openerIdx, groups.length - 1)];
  const row = g.table.rows[Math.min(sel.posIdx, g.table.rows.length - 1)];
  const [position, value, blof] = row;

  const mix = new Set<string>();
  const v = parseRange(value || "", mix);
  const b = parseRange(blof || "");
  const set3 = new Set<string>([...v.cells, ...mix, ...b.cells]);
  const applicableFlats = g.flats.filter((fl) => flatScope(fl).includes(position));
  const ft = flatText(applicableFlats);
  const f = parseRange(ft);
  const setFlat = new Set<string>([...f.cells].filter((c) => !set3.has(c)));
  // A wide-prose flat (e.g. "…and all 65s+ suited connectors") can't be gridded and is stripped
  // by flatText → its hands would wrongly fall into the fold pool. Suppress fold when the raw flat
  // text carries a wide marker. Also, for opens where the BB has no separate flat list (UTG/LJ-HJ/CO→BB)
  // the book says "BB flat is very wide" → suppress fold (don't tag JJ/TT/AQs as 'fold').
  // Same guard as quizEngine.buildPools — fidelity.
  const flatWide =
    (position === "BB" && applicableFlats.length === 0) ||
    /\b(wide|all|most|every)\b/i.test(applicableFlats.join(" "));
  const poolFold = flatWide ? [] : ALL.filter((c) => !set3.has(c) && !setFlat.has(c));

  const kavram = `recall:derin:${g.opener}→${position}`;
  const c = weighted([
    { cat: "3bet", pool: [...set3], w: 3 },
    { cat: "call", pool: [...setFlat], w: 2 },
    { cat: "fold", pool: poolFold, w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "3bet"
      ? mix.has(hand)
        ? "Mix (sometimes 3-bet) — marked as a mix on the book's value row."
        : b.cells.has(hand) && !v.cells.has(hand)
          ? "Bluff 3-bet — on the book's bluff row."
          : "Value 3-bet — on the book's value row."
      : c.cat === "call"
        ? "Flat / call — on the book's flat list for this open."
        : "Outside the 3-bet range — not on the flat list either → fold.";
  return { kavram, hand, correct: c.cat, answers: ["3bet", "call", "fold"], value, blof, flat: ft, note };
}

// ---- 100bb+ · Your response to a 3-bet: 4-bet / call / fold (Section 4.5) ----
function q4bet(): RecallQuestion | null {
  const fb = fourBetRanges();
  if (!fb) return null;
  const mix = new Set<string>();
  const v = parseRange(fb.value, mix);
  const b = parseRange(fb.blof);
  const set4 = new Set<string>([...v.cells, ...mix, ...b.cells]);
  const fl = parseRange(fb.flat);
  const setFlat = new Set<string>([...fl.cells].filter((c) => !set4.has(c)));
  // Fold: ONLY the hands the book's fold row names explicitly (between ":" and "—").
  // The pool is never widened to 169 — 100bb+ opening ranges are not charted in the book;
  // the "you opened" premise doesn't support an arbitrary hand.
  const seg = fb.foldNote.split("—")[0];
  const foldTxt = seg.includes(":") ? seg.slice(seg.indexOf(":") + 1) : "";
  const setFold = new Set<string>(
    [...parseRange(foldTxt).cells].filter((c) => !set4.has(c) && !setFlat.has(c)),
  );

  const kavram = "recall:derin:4bet";
  const c = weighted([
    { cat: "4bet", pool: [...set4], w: 3 },
    { cat: "call", pool: [...setFlat], w: 2 },
    { cat: "fold", pool: [...setFold], w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "4bet"
      ? mix.has(hand)
        ? "Mixed — yes vs a late-position 3-bet, no vs UTG (Section 4.5)."
        : b.cells.has(hand) && !v.cells.has(hand)
          ? "Bluff 4-bet — VERY rare live (Section 4.5)."
          : "4-bet value — on the book's 4.5 table."
      : c.cat === "call"
        ? "Flat — in the book with the IP + 150bb+ condition (Section 4.5)."
        : "On the book's fold row: OOP offsuit broadways are trash vs a 3-bet (Section 4.5).";
  return {
    kavram,
    hand,
    correct: c.cat,
    answers: ["4bet", "call", "fold"],
    value: fb.value,
    blof: fb.blof,
    flat: fb.flat,
    note,
  };
}

// ---- 100bb+ · Squeeze: value or bluff? (Section 4.6) ----
// The book gives NO fold/coldcall list in 4.6 → no fold questions are generated (fidelity).
// Drill: recall whether the hand sits on the book's VALUE list or its BLUFF list.
function qSqueeze(): RecallQuestion | null {
  const sq = squeezeRange();
  if (!sq) return null;
  const v = parseRange(sq.value);
  const b = parseRange(sq.blof);
  const poolB = [...b.cells].filter((c) => !v.cells.has(c));
  const kavram = "recall:derin:squeeze";
  const c = weighted([
    { cat: "value", pool: [...v.cells], w: 1 },
    { cat: "blof", pool: poolB, w: 1 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "value"
      ? "On the squeeze VALUE list (Section 4.6) · size 4.5× IP, 5×+ from the blinds."
      : "On the squeeze BLUFF list — blocker + playability (Section 4.6).";
  return {
    kavram,
    hand,
    correct: c.cat,
    answers: ["value", "blof"],
    value: sq.value,
    blof: sq.blof,
    flat: "",
    note,
  };
}

// ---- 25–30bb · Opening: open / fold (Section 5.1) ----
function qOpen(sel: RecallSel): RecallQuestion | null {
  const rows = openRanges();
  if (!rows.length) return null;
  const r = rows[Math.min(sel.openerIdx, rows.length - 1)];
  const p = parseRange(r.range);
  if (!p.cells.size) return null;
  const kavram = `recall:kisa:acis→${r.position}`;
  const c = weighted([
    { cat: "acis", pool: [...p.cells], w: 3 },
    { cat: "fold", pool: safeFoldPool(p.cells, p.notes), w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "acis"
      ? "In this position's 25–30bb opening range (Section 5.1) · size 2–2.2×."
      : "Outside the opening range (Section 5.1) → fold.";
  return { kavram, hand, correct: c.cat, answers: ["acis", "fold"], value: r.range, blof: "", flat: "", note };
}

// ---- 25–30bb · Vs an open: jam / fold (Section 5.2 — NO FLATTING in this band) ----
function qJam(sel: RecallSel): RecallQuestion | null {
  const rows = jamRanges();
  if (!rows.length) return null;
  const r = rows[Math.min(sel.openerIdx, rows.length - 1)];
  const p = parseRange(r.range);
  if (!p.cells.size) return null;
  const kavram = `recall:kisa:jam→${r.vs}`;
  const c = weighted([
    { cat: "jam", pool: [...p.cells], w: 3 },
    { cat: "fold", pool: safeFoldPool(p.cells, p.notes), w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "jam"
      ? "In the jam range (Section 5.2) — in this band 3-bet = commit, straight all-in."
      : "Outside the jam range — and no flatting in this band (Section 5.2) → fold.";
  return { kavram, hand, correct: c.cat, answers: ["jam", "fold"], value: r.range, blof: "", flat: "", note };
}

// ---- 25–30bb · Vs a jam: call / fold (Section 5.3) ----
function qJamCall(): RecallQuestion | null {
  const jc = jamCallRange();
  if (!jc) return null;
  const p = parseRange(jc);
  if (!p.cells.size) return null;
  const kavram = "recall:kisa:jamcall";
  const c = weighted([
    { cat: "call", pool: [...p.cells], w: 3 },
    { cat: "fold", pool: safeFoldPool(p.cells, p.notes), w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "call"
      ? "Inside the call-vs-jam boundary (Section 5.3)."
      : "Below the boundary is not a call at 28bb — either you make the jam yourself or you fold (Section 5.3).";
  return { kavram, hand, correct: c.cat, answers: ["call", "fold"], value: jc, blof: "", flat: "", note };
}

export function recallQuestion(sel: RecallSel): RecallQuestion | null {
  if (sel.depth === "derin") {
    if (sel.action === "4bet") return q4bet();
    if (sel.action === "squeeze") return qSqueeze();
    return q3bet(sel);
  }
  if (sel.action === "jam") return qJam(sel);
  if (sel.action === "jamcall") return qJamCall();
  return qOpen(sel);
}
