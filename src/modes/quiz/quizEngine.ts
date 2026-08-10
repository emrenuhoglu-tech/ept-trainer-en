// Range Quiz engine — FULLY offline, faithful to the book. The correct answer is derived
// from rangeGroups() (i.e. content/poker_pocket_book_v5.md 4.3); no hand is ever invented.
import { rangeGroups } from "../../content/curriculum";
import { parseRange, cellCode } from "../../lib/handgrid";

export type QAction = "3bet" | "call" | "fold";

export interface Question {
  opener: string; // "UTG", "LJ/HJ"...
  position: string; // "CO", "BTN"...
  hand: string; // "A5s"
  correct: QAction;
  value: string; // reveal grid
  blof: string;
  flat: string; // reveal grid (flat)
  note: string; // short explanation (based on the book)
}

// The 169 hand codes (built once)
const ALL: string[] = [];
for (let r = 0; r < 13; r++) for (let c = 0; c < 13; c++) ALL.push(cellCode(r, c));

// Compile the group's flat text: drop the "Flat ...:" label; strip depth-CONDITIONAL sentences
// (150bb+/200bb+ "... is added") and the "and all/most ..." prose tail that can't be expanded
// onto the grid — keep the 100bb base list. No hand beyond the book is invented; conditional/prose
// items are not turned into cells, they stay as notes.
export function flatText(flats: string[]): string {
  return flats
    .map((f) => {
      let body = f.includes(":") ? f.slice(f.indexOf(":") + 1) : f;
      body = body
        .split(/\.\s+/)
        .filter((sent) => !/\d{2,3}\s*bb|\bif\b|\badd\b/i.test(sent))
        .join(". ");
      return body.replace(/\s+and\s+(all|most)\b.*$/i, "").trim();
    })
    .filter(Boolean)
    .join(", ");
}

// Resolve from its label which positions a flat line covers in the book:
// "IP only"/"IP (CO/BTN)" → CO,BTN; "BTN flat" → BTN; "SB flat"/"BB flat" → that blind.
export function flatScope(label: string): string[] {
  const l = label.toLowerCase();
  if (l.includes("bb flat")) return ["BB"];
  if (l.includes("sb flat")) return ["SB"];
  if (l.includes("btn flat")) return ["BTN"];
  if (l.includes("co/btn") || /\bip\b/.test(l)) return ["CO", "BTN"];
  return ["CO", "BTN"]; // unlabeled "Flat:" → in the book the flat concept belongs to IP (Section 4.4)
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function nextQuestion(weak?: { opener: string; position: string }[]): Question | null {
  const groups = rangeGroups().filter((g) => g.table && g.table.rows.length > 0);
  if (!groups.length) return null;

  let g = pick(groups);
  let row = pick(g.table.rows);

  // adaptive: with 55% probability steer toward a weak (opener, position) pair
  if (weak && weak.length && Math.random() < 0.55) {
    const w = pick(weak);
    const mg = groups.find((x) => x.opener === w.opener);
    const mr = mg?.table.rows.find((r) => r[0] === w.position);
    if (mg && mr) {
      g = mg;
      row = mr;
    }
  }
  const [position, value, blof] = row;

  const mix = new Set<string>();
  const v = parseRange(value || "", mix);
  const b = parseRange(blof || "");
  const set3 = new Set<string>([...v.cells, ...mix, ...b.cells]);

  // In the book, flat lists are scoped by position (IP only / CO-BTN / BTN / SB / BB).
  // Blindly applying the group's flat to every row would grade SB/BB as a wrong "call"
  // (book: SB flat = losing position, 3-bet or fold). Take only the lines covering this position.
  const applicableFlats = g.flats.filter((fl) => flatScope(fl).includes(position));
  const ft = flatText(applicableFlats);
  const f = parseRange(ft);
  const setFlat = new Set<string>([...f.cells].filter((c) => !set3.has(c)));

  // A prose flat like "BB flat: very wide" doesn't expand onto the grid. There the fold pool would
  // mistakenly grade the book's wide flat hands as "fold" → don't generate fold questions (3-bet/bluff only).
  // Test the RAW flat text: flatText strips tails like "…and all 65s+ suited connectors" before parse,
  // so testing ft would miss them and mis-grade them fold (CO→BTN).
  const flatWide = /\b(wide|all|most|every)\b/i.test(applicableFlats.join(" "));

  const pool3 = [...set3];
  const poolFlat = [...setFlat];
  const poolFold = flatWide ? [] : ALL.filter((c) => !set3.has(c) && !setFlat.has(c));

  // weighted category pick (skip empty pools)
  const bag: QAction[] = [];
  if (pool3.length) bag.push("3bet", "3bet", "3bet");
  if (poolFlat.length) bag.push("call", "call");
  if (poolFold.length) bag.push("fold", "fold");
  const cat = pick(bag);

  const hand =
    cat === "3bet" ? pick(pool3) : cat === "call" ? pick(poolFlat) : pick(poolFold);

  const note =
    cat === "3bet"
      ? set3.has(hand) && mix.has(hand)
        ? "Mix (sometimes 3-bet) — marked as a mix on the book's value row."
        : b.cells.has(hand) && !v.cells.has(hand)
          ? "Bluff 3-bet — on the book's bluff row."
          : "Value 3-bet — on the book's value row."
      : cat === "call"
        ? "Flat / call — on the book's flat list for this open."
        : "Outside the 3-bet range — not on the flat list either → fold.";

  return { opener: g.opener, position, hand, correct: cat, value, blof, flat: ft, note };
}

export const ACTION_LABEL: Record<QAction, string> = {
  "3bet": "3-bet",
  call: "Call",
  fold: "Fold",
};
