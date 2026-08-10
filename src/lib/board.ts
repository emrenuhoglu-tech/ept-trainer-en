// Board texture/draw analysis — objective card math (not GTO interpretation).
// Computes only from cards with a known suit; skips hand codes / hidden cards.

const RVAL: Record<string, number> = {
  A: 14, K: 13, Q: 12, J: 11, T: 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2,
};
const SUIT_SYM: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };

export interface Chip {
  label: string;
  wet: boolean; // wet (flush/connected) → amber; dry → neutral
}

export function boardTexture(spec: string): Chip[] {
  const cards = spec
    .trim()
    .split(/[\s,]+/)
    .map((t) => t.match(/^([AKQJT2-9])([shdc])$/i))
    .filter(Boolean)
    .map((m) => ({ r: RVAL[m![1].toUpperCase()], s: m![2].toLowerCase() }));
  if (cards.length < 3) return [];

  const chips: Chip[] = [];

  // suit texture
  const bySuit: Record<string, number> = {};
  for (const c of cards) bySuit[c.s] = (bySuit[c.s] || 0) + 1;
  const [topSuit, topCount] = Object.entries(bySuit).sort((a, b) => b[1] - a[1])[0];
  if (topCount >= 3) chips.push({ label: `three ${SUIT_SYM[topSuit]} — flush board`, wet: true });
  else if (topCount === 2) chips.push({ label: `two ${SUIT_SYM[topSuit]} — flush draw`, wet: true });
  else chips.push({ label: "rainbow", wet: false });

  // paired
  const rc: Record<number, number> = {};
  for (const c of cards) rc[c.r] = (rc[c.r] || 0) + 1;
  if (Object.values(rc).some((n) => n >= 2)) chips.push({ label: "paired", wet: false });

  // connectivity (straights): is the rank span narrow?
  const ranks = [...new Set(cards.map((c) => c.r))].sort((a, b) => a - b);
  const span = ranks[ranks.length - 1] - ranks[0];
  if (span <= 4) chips.push({ label: "connected — straighty", wet: true });
  else if (span >= 7) chips.push({ label: "dry", wet: false });

  return chips;
}
