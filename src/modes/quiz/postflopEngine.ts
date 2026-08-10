// Turn & River decision drill — FULLY offline, faithful to the book. Every correct answer is a
// cell from Chapter 6 (draws on the turn) or Chapter 11 (turn discipline / river execution). The
// book gives sizes only as (calibrate); we therefore drill DIRECTION (bet/check/call/fold), never
// a size. Cells that are read-dependent ("careful — SPR", "both are legitimate", "borderline")
// are SKIPPED, not turned into a made-up answer — the same doctrine as the preflop drills.
import {
  turnBarrelMatrix,
  drawTurnMatrix,
  riverBluffCatch,
  badRiverCatalog,
  type MdTable,
} from "../../content/curriculum";

export type PostflopAction = "bet" | "check" | "checkcall" | "checkfold" | "call" | "fold";
export type PostflopStreet = "turn" | "river";

export interface PostflopQuestion {
  kavram: string;
  street: PostflopStreet;
  headline: string; // the scenario
  prompt: string; // the question
  answers: PostflopAction[];
  answerLabels?: Partial<Record<PostflopAction, string>>; // per-question overrides (e.g. "Jam")
  correct: PostflopAction;
  note: string; // book cell text / rule (reveal)
  table: MdTable | null; // source table (reveal)
  catalog?: string[]; // source list (reveal, when there is no table)
  highlightRow?: number;
  source: string; // book section, e.g. "11.1"
}

export const POSTFLOP_LABEL: Record<PostflopAction, string> = {
  bet: "Bet / Barrel",
  check: "Check",
  checkcall: "Check-call",
  checkfold: "Check-fold",
  call: "Call",
  fold: "Fold",
};

// --- Cell → direction classifiers. Return null for read-dependent cells (skip = no drill).
// Tokens cover both the EN and TR books so the two engines can't silently diverge.

function classifyTurn(cell: string): PostflopAction | null {
  const c = cell.toLowerCase();
  if (/\bspr\b|careful|dikkat/.test(c)) return null; // SPR-dependent → not a crisp direction
  if (/check-call/.test(c)) return "checkcall";
  if (/check-fold/.test(c)) return "checkfold";
  if (/give up|bırak/.test(c)) return "checkfold"; // giving up the bluff = check-fold
  if (/barrel|bet/.test(c)) return "bet"; // "Thin bet", "Bet (controlled)", "Barrel candidate"
  if (/check/.test(c)) return "check";
  return null;
}

function classifyDraw(cell: string): PostflopAction | null {
  const c = cell.toLowerCase();
  if (/both|ikisi de|meşru/.test(c)) return null; // "both are legitimate / ikisi de meşru" → read call
  // NB: JS lowercases Turkish "İ" to "i"+combining-dot, so "meşru" (dotless-safe) is the reliable TR token.
  if (/bet/.test(c)) return "bet";
  if (/check/.test(c)) return "check";
  return null;
}

function classifyRiver(cell: string): PostflopAction | null {
  const c = cell.toLowerCase();
  if (/borderline|sınırda/.test(c)) return null; // "blockers decide" → skip the borderline pole
  if (/fold/.test(c)) return "fold";
  if (/call/.test(c)) return "call";
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
      const a = classifyTurn(t.rows[r][c] || "");
      if (a) crisp.push({ r, c, a });
    }
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:turn:barrel",
    street: "turn",
    headline: `Turn — 3-bet pot. Your hand class: ${t.rows[p.r][0]}. The turn card is: ${t.headers[p.c]}.`,
    prompt: "Second barrel — what do you do?",
    answers: ["bet", "check", "checkcall", "checkfold"],
    correct: p.a,
    note: `Book 11.1: "${t.rows[p.r][p.c]}". Before firing, state your river plan — every chip you put in shrinks your check-fold luxury on a bad river.`,
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
    .filter((x): x is { i: number; a: PostflopAction } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:turn:draw",
    street: "turn",
    headline: `Turn — you're on a ${t.rows[p.i][0]}. Villain is a REG (not a station) and the board fits your range.`,
    prompt: "Bet the draw, or check?",
    answers: ["bet", "check"],
    correct: p.a,
    note: `Book 6.2: "${t.rows[p.i][1]}" — ${t.rows[p.i][2]}.`,
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
    .filter((x): x is { i: number; a: PostflopAction } => x.a !== null);
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

function qBadRiver(): PostflopQuestion | null {
  const items = badRiverCatalog();
  if (!items.length) return null;
  const item = pick(items);
  return {
    kavram: "postflop:river:badcard",
    street: "river",
    headline: `You have an overpair. You value-bet the flop and turn. River brings: ${item}. Villain checks.`,
    prompt: "Jam the rest for value?",
    answers: ["bet", "check"],
    answerLabels: { bet: "Jam (value)", check: "Check (no jam)" },
    correct: "check",
    note: `Book 11.4: NEVER jam here — jam value exists only if a hand weaker than yours will pay. On a bad river, check-call in a small pot, check-fold in a big pot.`,
    table: null,
    catalog: items,
    source: "11.4",
  };
}

const TURN_GENS = [qTurnBarrel, qDrawTurn];
const RIVER_GENS = [qRiverSize, qBadRiver];

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
