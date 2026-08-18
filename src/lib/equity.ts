// Lokal Monte-Carlo equity — NESNEL kart matematiği (GTO yorumu değil, board.ts sınıfı).
// Sim el bitiminde showdown olduysa (villain_cards biliniyor) hero'nun all-in anındaki
// equity'sini gösterir. Yalnız NLH (2+2 hole); PLO ilk sürümde kapsam dışı → null.

interface Card { r: number; s: number } // r: 2..14, s: 0..3
const RANKS = "23456789TJQKA";

function parseCards(spec: string): Card[] {
  const toks = (spec || "").replace(/[^0-9TJQKAshdc]/gi, " ").trim().split(/\s+/).filter(Boolean);
  const cards: Card[] = [];
  for (const t of toks) {
    for (let i = 0; i + 1 < t.length; i += 2) {
      const r = RANKS.indexOf(t[i].toUpperCase());
      const s = "shdc".indexOf(t[i + 1].toLowerCase());
      if (r >= 0 && s >= 0) cards.push({ r: r + 2, s });
    }
  }
  return cards;
}

// 5 kartlık el skoru — aynı kategori içinde tie-break doğru sıralanır (katLarge*... kodlaması).
function score5(cards: Card[]): number {
  const rs = cards.map((c) => c.r).sort((a, b) => b - a);
  const flush = cards.every((c) => c.s === cards[0].s);
  const uniq = [...new Set(rs)];
  let straightHigh = 0;
  if (uniq.length === 5) {
    if (rs[0] - rs[4] === 4) straightHigh = rs[0];
    else if (rs[0] === 14 && rs[1] === 5 && rs[4] === 2) straightHigh = 5; // tekerlek (A-2-3-4-5)
  }
  const cnt = new Map<number, number>();
  for (const r of rs) cnt.set(r, (cnt.get(r) || 0) + 1);
  const groups = [...cnt.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  const counts = groups.map((g) => g[1]);
  const ranks = groups.map((g) => g[0]);

  let cat: number;
  if (flush && straightHigh) cat = 8;
  else if (counts[0] === 4) cat = 7;
  else if (counts[0] === 3 && counts[1] === 2) cat = 6;
  else if (flush) cat = 5;
  else if (straightHigh) cat = 4;
  else if (counts[0] === 3) cat = 3;
  else if (counts[0] === 2 && counts[1] === 2) cat = 2;
  else if (counts[0] === 2) cat = 1;
  else cat = 0;

  const tb = cat === 8 || cat === 4 ? [straightHigh] : ranks;
  let val = cat;
  for (let i = 0; i < 5; i++) val = val * 16 + (tb[i] || 0);
  return val;
}

// 7 karttan en iyi 5'i (21 kombinasyon = 2 kart at).
function best7(cards: Card[]): number {
  let best = -1;
  for (let a = 0; a < 7; a++)
    for (let b = a + 1; b < 7; b++) {
      const five = cards.filter((_, i) => i !== a && i !== b);
      const sc = score5(five);
      if (sc > best) best = sc;
    }
  return best;
}

/** Hero'nun villain'a karşı equity'si (0..1). NLH değilse veya kart eksikse null. */
export function equityVs(
  heroSpec: string,
  villainSpec: string,
  boardSpec: string,
  samples = 2000,
): number | null {
  const hero = parseCards(heroSpec);
  const villain = parseCards(villainSpec);
  const board = parseCards(boardSpec);
  if (hero.length !== 2 || villain.length !== 2 || board.length > 5) return null;

  const key = (c: Card) => c.r * 4 + c.s;
  const used = new Set([...hero, ...villain, ...board].map(key));
  const deck: Card[] = [];
  for (let r = 2; r <= 14; r++) for (let s = 0; s < 4; s++) if (!used.has(r * 4 + s)) deck.push({ r, s });

  const runs = board.length === 5 ? 1 : samples;
  let win = 0;
  let tie = 0;
  for (let n = 0; n < runs; n++) {
    const b = board.slice();
    const chosen = new Set<number>();
    while (b.length < 5) {
      const i = Math.floor(Math.random() * deck.length);
      if (chosen.has(i)) continue;
      chosen.add(i);
      b.push(deck[i]);
    }
    const h = best7([...hero, ...b]);
    const v = best7([...villain, ...b]);
    if (h > v) win++;
    else if (h === v) tie++;
  }
  return (win + tie / 2) / runs;
}
