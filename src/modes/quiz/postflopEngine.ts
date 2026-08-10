// Turn & River decision drill — FULLY offline, faithful to the book. Every correct answer is a
// cell from Chapter 6 (draws on the turn) or Chapter 11 (turn discipline / river execution). The
// book gives sizes only as (calibrate); we therefore drill DIRECTION, and — where the book marks
// it — whether a bet is for VALUE or a BLUFF. Read-dependent cells ("careful — SPR", "both are
// legitimate", "borderline", "thin bet / check-call") are SKIPPED, not turned into a made-up
// answer — the same doctrine as the preflop drills.
import {
  turnBarrelMatrix,
  drawTurnMatrix,
  riverBluffCatch,
  riverThinValue,
  badRiverCatalog,
  type MdTable,
} from "../../content/curriculum";

// A bet is never anonymous: the book marks each one as value (overpair/TPGK/thin value) or a
// bluff (air+blocker barrel, semi-bluff draw). That distinction is the spine of this drill.
export type PostflopAction =
  | "betvalue"
  | "betbluff"
  | "check"
  | "checkcall"
  | "checkfold"
  | "call"
  | "fold";
export type PostflopStreet = "turn" | "river";

export interface PostflopQuestion {
  kavram: string;
  street: PostflopStreet;
  headline: string;
  prompt: string;
  answers: PostflopAction[];
  answerLabels?: Partial<Record<PostflopAction, string>>;
  correct: PostflopAction;
  note: string;
  table: MdTable | null;
  catalog?: string[];
  highlightRow?: number;
  source: string;
}

export const POSTFLOP_LABEL: Record<PostflopAction, string> = {
  betvalue: "Value bet",
  betbluff: "Bluff bet",
  check: "Check",
  checkcall: "Check-call",
  checkfold: "Check-fold",
  call: "Call",
  fold: "Fold",
};

// --- Cell → direction classifiers. classify* return a RAW direction; a "bet" is resolved into
// value vs bluff by the row (betType). Return null for read-dependent cells (skip = no drill).
// Tokens cover both the EN and TR books so the two engines can't silently diverge.

type RawDir = "bet" | "check" | "checkcall" | "checkfold";

/** A bet from the air+blocker row is a bluff barrel; every other betting hand is value.
 *  Word-bounded: bare /air/ would match "Overp-air" and "Top p-air" and mis-tag value bets. */
export function betType(rowLabel: string): PostflopAction {
  return /\bair\b|\bhava\b|blocker|bloker/i.test(rowLabel) ? "betbluff" : "betvalue";
}

function classifyTurn(cell: string): RawDir | null {
  const c = cell.toLowerCase();
  if (/\bspr\b|careful|dikkat/.test(c)) return null; // SPR-dependent → not a crisp direction
  if (/reduce size|boyut düşür/.test(c)) return null; // "check / reduce size" = two-way (check OR smaller bet) → skip
  if (/check-call/.test(c)) return "checkcall";
  if (/check-fold/.test(c)) return "checkfold";
  if (/give up|bırak/.test(c)) return "checkfold"; // giving up the bluff = check-fold
  if (/barrel|bet/.test(c)) return "bet"; // "Thin bet", "Bet (controlled)", "Barrel candidate"
  if (/check/.test(c)) return "check";
  return null;
}

function classifyDraw(cell: string): "bet" | "check" | null {
  const c = cell.toLowerCase();
  if (/both|ikisi de|meşru/.test(c)) return null; // "both are legitimate / ikisi de meşru" → read call
  // NB: JS lowercases Turkish "İ" to "i"+combining-dot, so "meşru" (dotless-safe) is the reliable TR token.
  if (/bet/.test(c)) return "bet";
  if (/check/.test(c)) return "check";
  return null;
}

function classifyRiver(cell: string): "call" | "fold" | null {
  const c = cell.toLowerCase();
  if (/borderline|sınırda/.test(c)) return null; // "blockers decide" → skip the borderline pole
  if (/fold/.test(c)) return "fold";
  if (/call/.test(c)) return "call";
  return null;
}

function classifyThin(cell: string): "betvalue" | "checkcall" | null {
  const c = cell.toLowerCase();
  if (/check-call/.test(c) && /\bbet\b/.test(c)) return null; // "thin bet / check-call" → borderline, skip
  // \bbet\b so "…the reg pays with better" (a crisp check-call cell) isn't swallowed by "bet" in "better".
  if (/check-call/.test(c)) return "checkcall";
  if (/value|bet/.test(c)) return "betvalue";
  return null;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- Generators. Each returns null if its table is missing or has no crisp cell.

function qTurnBarrel(): PostflopQuestion | null {
  const t = turnBarrelMatrix();
  if (!t || t.rows.length === 0) return null;
  const crisp: { r: number; c: number; a: PostflopAction }[] = [];
  for (let r = 0; r < t.rows.length; r++)
    for (let c = 1; c < t.headers.length; c++) {
      const raw = classifyTurn(t.rows[r][c] || "");
      if (!raw) continue;
      crisp.push({ r, c, a: raw === "bet" ? betType(t.rows[r][0]) : raw });
    }
  if (!crisp.length) return null;
  const p = pick(crisp);
  const isBet = p.a === "betvalue" || p.a === "betbluff";
  const why = isBet
    ? p.a === "betbluff"
      ? "air + a blocker = a BLUFF barrel (bluff selection: Ch 1)."
      : "a VALUE bet — state your river plan before you fire."
    : "pot control — don't grow a pot you can't profitably finish.";
  return {
    kavram: "postflop:turn:barrel",
    street: "turn",
    headline: `Turn — 3-bet pot. Your hand class: ${t.rows[p.r][0]}. The turn card is: ${t.headers[p.c]}.`,
    prompt: "Second barrel — what do you do?",
    answers: ["betvalue", "betbluff", "check", "checkcall", "checkfold"],
    correct: p.a,
    note: `Book 11.1: "${t.rows[p.r][p.c]}" — ${why}`,
    table: t,
    highlightRow: p.r,
    source: "11.1",
  };
}

function qDrawTurn(): PostflopQuestion | null {
  const t = drawTurnMatrix();
  if (!t) return null;
  const crisp = t.rows
    .map((row, i) => ({ i, a: classifyDraw(row[1] || "") }))
    .filter((x): x is { i: number; a: "bet" | "check" } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  // A draw is not made yet — betting it is a SEMI-BLUFF, never value.
  const correct: PostflopAction = p.a === "bet" ? "betbluff" : "check";
  return {
    kavram: "postflop:turn:draw",
    street: "turn",
    headline: `Turn — you're on a ${t.rows[p.i][0]}. Villain is a REG (not a station) and the board fits your range.`,
    prompt: "Bet the draw, or check?",
    answers: ["betvalue", "betbluff", "check"],
    correct,
    note: `Book 6.2: "${t.rows[p.i][1]}" — ${t.rows[p.i][2]}. Betting a draw is a semi-bluff: you win by a fold OR by completing (6.1) — it is never a value bet.`,
    table: t,
    highlightRow: p.i,
    source: "6.2",
  };
}

function qRiverSize(): PostflopQuestion | null {
  const t = riverBluffCatch();
  if (!t) return null;
  const last = t.headers.length - 1;
  const crisp = t.rows
    .map((row, i) => ({ i, a: classifyRiver(row[last] || "") }))
    .filter((x): x is { i: number; a: "call" | "fold" } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:river:bluffcatch",
    street: "river",
    headline: `River — you hold ONE PAIR (a bluff-catcher). Villain bets ${t.rows[p.i][0]}.`,
    prompt: "Call, or fold?",
    answers: ["call", "fold"],
    correct: p.a,
    note: `Book 11.2: as the size grows, villain's range shifts toward value and one pair resolves from bluff-catcher into a fold. An overbet reads as polarized — nuts or air.`,
    table: t,
    highlightRow: p.i,
    source: "11.2",
  };
}

function qThinValue(): PostflopQuestion | null {
  const t = riverThinValue();
  if (!t || t.rows.length === 0) return null;
  const crisp: { r: number; c: number; a: PostflopAction }[] = [];
  for (let r = 0; r < t.rows.length; r++)
    for (let c = 1; c < t.headers.length; c++) {
      const a = classifyThin(t.rows[r][c] || "");
      if (a) crisp.push({ r, c, a });
    }
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:river:thinvalue",
    street: "river",
    headline: `River — you have ${t.rows[p.r][0]}. Villain type: ${t.headers[p.c]}. It checks to you.`,
    prompt: "Thin value bet, or check-call?",
    answers: ["betvalue", "checkcall"],
    correct: p.a,
    note: `Book 11.3: if "which hand weaker than mine pays?" HAS an answer — however thin — BET it. In the rec-heavy Main, missed thin value is direct chip loss.`,
    table: t,
    highlightRow: p.r,
    source: "11.3",
  };
}

function qBadRiver(): PostflopQuestion | null {
  const items = badRiverCatalog();
  if (!items.length) return null;
  const item = pick(items);
  return {
    kavram: "postflop:river:badcard",
    street: "river",
    headline: `You have an overpair. You value-bet the flop and turn. River brings: ${item}. Villain checks.`,
    prompt: "Jam the rest for value?",
    answers: ["betvalue", "check"],
    answerLabels: { betvalue: "Jam (value)", check: "Check (no jam)" },
    correct: "check",
    note: `Book 11.4: jamming here CLAIMS value, but no weaker hand pays → it is not value. NEVER jam — on a bad river, check-call in a small pot, check-fold in a big pot.`,
    table: null,
    catalog: items,
    source: "11.4",
  };
}

const TURN_GENS = [qTurnBarrel, qDrawTurn];
const RIVER_GENS = [qRiverSize, qThinValue, qBadRiver];

/** Build one postflop question for the chosen street ("all" mixes turn + river). */
export function postflopQuestion(street: "all" | PostflopStreet): PostflopQuestion | null {
  const gens =
    street === "turn" ? TURN_GENS : street === "river" ? RIVER_GENS : [...TURN_GENS, ...RIVER_GENS];
  // shuffle then take the first that yields (so a missing table doesn't dead-end the drill)
  for (const g of [...gens].sort(() => Math.random() - 0.5)) {
    const q = g();
    if (q) return q;
  }
  return null;
}
