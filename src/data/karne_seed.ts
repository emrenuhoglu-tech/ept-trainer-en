// Drill scorecard seed data. Loaded into localStorage on first launch (see lib/karne.ts).
// due is computed there: wrong +1 day, half +2, correct +5.
// NOTE: these are PERSONAL leak records derived from Emre's sessions (NOT book doctrine)
// — they tie back to the book's rules, but their source is personal performance.

export interface KarneSeedItem {
  id: string;
  kavram: string;
  soru_ozeti: string;
  sonuc: "wrong" | "half" | "correct";
  not: string;
}

export const KARNE_SEED: KarneSeedItem[] = [
  {
    id: "S1-value-boyut",
    kavram: "boyut",
    soru_ozeti: "River value sizing with AK top pair on a dry board",
    sonuc: "half",
    not: "Fold read was right; should have been 1/3 pot instead of half",
  },
  {
    id: "S2-ak-stack-call",
    kavram: "kök-hata",
    soru_ozeti: "AK top pair in a 3-bet pot, calling a stack lead on a paired river",
    sonuc: "wrong",
    not: "Passive-to-aggressive switch + paired river = value",
  },
  {
    id: "S4-kjo-xr",
    kavram: "blof-secimi",
    soru_ozeti: "Check-raising KJo gutshot on a T94 board",
    sonuc: "wrong",
    not: "Board ownership ≠ hand class; a gutshot isn't connectivity, and showdown value doesn't get turned into a bluff",
  },
  {
    id: "S5-aa-fold-erken",
    kavram: "kök-hata",
    soru_ozeti: "Folding AA to a flop check-raise on a T94 board",
    sonuc: "wrong",
    not: "Overcorrection; call early streets, fold once the story completes",
  },
  {
    id: "S6-jt-60bb",
    kavram: "3bet-aralik",
    soru_ozeti: "60bb in the CO with JTs vs an LJ reg open — never answered",
    sonuc: "wrong",
    not: "Postponed three times; MUST be asked in the first session",
  },
];

// The first question of the first drill session MUST be this one (S6). Shown as a fixed
// question client-side; not model-dependent, so it's guaranteed.
export const FIRST_QUESTION =
  "60bb, a reg opens from the LJ, you're in the CO with JTs. 3-bet, call, or fold? And why not the other two?";
