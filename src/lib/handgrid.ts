// 13x13 poker hand grid + a parser that FAITHFULLY converts the book's notation into cells.
// RULE: only generate the hands the text EXPLICITLY states. Don't expand vague/prose phrases
// ("all suited connectors", "most broadways") — return them as notes.

export const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"] as const;
export type Rank = (typeof RANKS)[number];
const IDX: Record<string, number> = Object.fromEntries(RANKS.map((r, i) => [r, i]));

export type Category = "value" | "blof" | "mix" | "flat";

// Canonical code of a cell: "AA" | "AKs" | "AKo"
export function cellCode(row: number, col: number): string {
  const hi = RANKS[Math.min(row, col)];
  const lo = RANKS[Math.max(row, col)];
  if (row === col) return `${hi}${lo}`; // pair
  if (row < col) return `${hi}${lo}s`; // suited = upper-right triangle
  return `${hi}${lo}o`; // offsuit = lower-left triangle
}

// "AK" -> hi+lo normalize
function norm2(a: string, b: string): [string, string] {
  return IDX[a] <= IDX[b] ? [a, b] : [b, a];
}

// Expand a single token into cell codes. Returns null if unresolvable (caller sends it to notes).
function expandToken(tokRaw: string): string[] | null {
  const tok = tokRaw.trim().replace(/[–—]/g, "-").replace(/\s+/g, "");
  if (!tok) return [];
  const R = "[AKQJT98765432]";

  // Pair +   88+
  let m = tok.match(new RegExp(`^(${R})\\1\\+$`));
  if (m) {
    const out: string[] = [];
    for (let i = 0; i <= IDX[m[1]]; i++) out.push(`${RANKS[i]}${RANKS[i]}`);
    return out;
  }
  // Pair range   TT-77
  m = tok.match(new RegExp(`^(${R})\\1-(${R})\\2$`));
  if (m) {
    const [a, b] = [IDX[m[1]], IDX[m[2]]];
    const out: string[] = [];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) out.push(`${RANKS[i]}${RANKS[i]}`);
    return out;
  }
  // Single pair   AA
  m = tok.match(new RegExp(`^(${R})\\1$`));
  if (m) return [`${m[1]}${m[1]}`];

  // Suited/offsuit +   AQs+  ATo+  KTs+
  m = tok.match(new RegExp(`^(${R})(${R})(s|o)\\+$`));
  if (m) {
    const [x, y, suf] = [m[1], m[2], m[3]];
    if (IDX[x] >= IDX[y]) return null; // x must be the higher rank
    const out: string[] = [];
    for (let k = IDX[x] + 1; k <= IDX[y]; k++) out.push(`${x}${RANKS[k]}${suf}`);
    return out;
  }
  // Suited/offsuit range   A5s-A2s   K9s-K7s
  m = tok.match(new RegExp(`^(${R})(${R})(s|o)-(${R})(${R})(s|o)$`));
  if (m) {
    const [x1, y1, s1, x2, y2, s2] = [m[1], m[2], m[3], m[4], m[5], m[6]];
    if (x1 !== x2 || s1 !== s2) return null;
    const out: string[] = [];
    for (let k = Math.min(IDX[y1], IDX[y2]); k <= Math.max(IDX[y1], IDX[y2]); k++)
      out.push(`${x1}${RANKS[k]}${s1}`);
    return out;
  }
  // Single suited/offsuit   AKs  AKo
  m = tok.match(new RegExp(`^(${R})(${R})(s|o)$`));
  if (m) {
    const [hi, lo] = norm2(m[1], m[2]);
    return [`${hi}${lo}${m[3]}`];
  }
  return null; // vague/prose → notes
}

export interface ParsedRange {
  cells: Set<string>;
  notes: string[]; // prose that can't be printed on the grid ("all suited connectors" etc.)
}

// Expands text like "QQ+, AKs, AKo (JJ mixed), A5s".
// Hands marked "mixed" are split out as mix (written to mixOut).
export function parseRange(text: string, mixOut?: Set<string>): ParsedRange {
  const cells = new Set<string>();
  const notes: string[] = [];
  if (!text) return { cells, notes };

  let s = text.trim();
  const R = "[AKQJT98765432]";

  // "HAND (mixed)"  → HAND mix
  s = s.replace(new RegExp(`(${R}${R}[so]?)\\s*\\(\\s*mixed\\s*\\)`, "gi"), (_m, h) => {
    expandToken(h)?.forEach((c) => mixOut?.add(c));
    return " ";
  });
  // "(HAND mixed)" → HAND mix
  s = s.replace(new RegExp(`\\(\\s*(${R}${R}?[so]?)\\s*mixed\\s*\\)`, "gi"), (_m, h) => {
    expandToken(h)?.forEach((c) => mixOut?.add(c));
    return " ";
  });
  // drop all remaining parentheses (explanatory text)
  s = s.replace(/\([^)]*\)/g, " ");

  for (const partRaw of s.split(",")) {
    const part = partRaw.trim().replace(/\.$/, "");
    if (!part || /^(none|yok|—|-)$/i.test(part)) continue;
    const ex = expandToken(part);
    if (ex) ex.forEach((c) => cells.add(c));
    else if (/[a-zçğıöşü]/i.test(part) && part.length > 3) notes.push(part); // prose
    else if (part.length > 1) notes.push(part); // unrecognized short token — kept as a note for fidelity
  }
  return { cells, notes };
}
