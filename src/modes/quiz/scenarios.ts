// Scenario questions — tests the ENTIRE book. Every question and answer is taken
// from the book's own wording (no invented GTO); the correct option is the book's decision.
export interface Scenario {
  q: string;
  options: string[];
  correct: number;
  explain: string;
  source: string;
  kavram: string;
}

export const SCENARIOS: Scenario[] = [
  {
    q: "You hold AA in a bloated pot and a bad river hits; no hand weaker than yours will pay you off. Jam?",
    options: ["Jam — value", "Check — the jam isn't value"],
    correct: 1,
    explain: "If no weaker hand will pay you off on the river, the jam isn't value. This is exactly where the root mistake lives.",
    source: "Chapter 0 / 7",
    kavram: "kök-hata",
  },
  {
    q: "One pair in a bloated pot (3-bet pot / ~40% of your stack in the middle). What if you fire a thin value bet to 'look weak' and push your opponent into bluffing the river?",
    options: ["Thin bet — pushes them into a bluff", "Check — call a small pot, fold to a big one"],
    correct: 1,
    explain:
      "One pair in a bloated pot is a bluff-catcher (sentence 1). Sentence 2: on a bad river, check-call a small pot, check-fold a big one — no bet. A thin bet folds out the very bluffs you want to catch; check-call is already the bluff-inducing line.",
    source: "Chapter 0.1 / 0.2",
    kavram: "kök-hata",
  },
  {
    q: "Top pair on a wet board (KTo), you're OOP, opponent fires a cbet. Check-raise all-in?",
    options: ["Check-raise all-in", "Check-call, reassess later"],
    correct: 1,
    explain:
      "Check-call. Top pair on a wet board is not a big-pot starter; check-raise all-in runs you into flatted hands like QQ. (Case 2 — a real bustout.)",
    source: "Chapter 7 / Case 2",
    kavram: "kök-hata",
  },
  {
    q: "T6s in the BB, you call a BTN min-raise. Flop A-T-3, call 1/3 pot. Turn 5 goes check-check. River T (board A-T-3-5-T) → trip tens, kicker 6. You check, BTN fires a thin bet. Check-raise all-in?",
    options: ["Check-raise all-in", "Check-call — bluff-catcher"],
    correct: 1,
    explain:
      "No weaker hand calls the all-in: every other ten outkicks you, boats are ahead. On this runout your trips are a bluff-catcher → check-call. Raising folds out the bluffs and only gets called by hands that beat you (sentence 2). Your actual bustout — the exact mirror of Case 2.",
    source: "Chapter 0.2 / Case 2",
    kavram: "kök-hata",
  },
  {
    q: "The board is choppy and your opponent moves all-in. Is their hand a chopping hand?",
    options: ["Yes, they're playing for the chop", "No — chops don't jam"],
    correct: 1,
    explain: "Chops don't jam; the opponent has removed chopping hands from their range — a jam is a hand that beats you.",
    source: "Chapter 0 / 1",
    kavram: "chop",
  },
  {
    q: "Which three criteria make a hand bluff fuel?",
    options: ["Blocker, connectivity, board ownership", "Suited, high card, position"],
    correct: 0,
    explain: "Three criteria: blocker, connectivity, board ownership. Missing one? That's not a bluff, that's lost chips.",
    source: "Chapter 1.1",
    kavram: "blöf-kriter",
  },
  {
    q: "J2s (suited). Bluff fuel?",
    options: ["Yes — it's suited", "No — no blocker, no connectivity"],
    correct: 1,
    explain: "Suited deceives. What you want is connectivity and blockers; J2s is weak on both, with bottom-flush risk on top.",
    source: "Chapter 1.2",
    kavram: "suited-tuzağı",
  },
  {
    q: "On which board do you check-raise bluff?",
    options: ["T98 — your board", "A-K-7 dry — their board"],
    correct: 0,
    explain: "Check-raise bluff on boards that smash YOUR range (T98, 765). On dry A-K, just call.",
    source: "Chapter 1.3",
    kavram: "board-sahipliği",
  },
  {
    q: "What do you do against a station / rec type (never folds)?",
    options: ["Bluff", "Value bet — they don't fold"],
    correct: 1,
    explain: "Bluffing a player who doesn't fold is burning money; if your hand is good make them pay, if it isn't don't try.",
    source: "Chapter 1.4",
    kavram: "kime-blöf",
  },
  {
    q: "JTs, KQ, KJ, 97s — what is these hands' role?",
    options: ["Big-pot starter (3-bet / stack-off)", "Open / flat / BB-defend"],
    correct: 1,
    explain: "Deceptive middling hands: small-pot winners, big-pot losers. Never big-pot starters.",
    source: "Chapter 2",
    kavram: "aldatıcı-eller",
  },
  {
    q: "42bb, a HJ reg (~22%) opens, you're in the CO with KQo. Decision?",
    options: ["3-bet", "Call", "Fold"],
    correct: 2,
    explain: "Fold. Raw equity is ~45% but you can't realize it; the best flops are the most expensive traps (K→AK, Q→AQ).",
    source: "Chapter 2.1",
    kavram: "kqo-vaka",
  },
  {
    q: "What's the FIRST question to ask before every hand?",
    options: ["What's my hand?", "What stack mode am I in?"],
    correct: 1,
    explain: "Mode first, range second. The same hand in a different mode is a different hand.",
    source: "Chapter 3",
    kavram: "stack-modu",
  },
  {
    q: "28bb, you hold 88. How do you play it?",
    options: ["Post-flop set-mining", "Jam or fold"],
    correct: 1,
    explain: "Below 30bb, middling pairs are jam-or-fold; miss the set and there's no stack left to continue, hit it and you can't get paid in full.",
    source: "Chapter 3.1",
    kavram: "orta-çift-30bb",
  },
  {
    q: "Bubble, big stacks on your left. Your opening range?",
    options: ["Widen it", "Tighten it — they 3-bet you with impunity"],
    correct: 1,
    explain: "Big stacks on your left? Tighten up. 30bb on the bubble ≠ 30bb on Day 1.",
    source: "Chapter 3.2",
    kavram: "icm",
  },
  {
    q: "In a live tournament, where does the profit really come from?",
    options: ["Bluff 3-bets", "Wider value 3-bets"],
    correct: 1,
    explain: "The live field rarely folds to 3-bets; cut the bluffs, widen the value 3-bets.",
    source: "Chapter 4.1",
    kavram: "canlı-value",
  },
  {
    q: "Live, someone 4-bets you and you hold AK. What do you do?",
    options: ["Auto 5-bet", "Take it seriously — live 4-bet bluffs don't exist"],
    correct: 1,
    explain: "Live, a 4-bet is almost always the real thing; take it seriously with QQ and below — AK is not an auto 5-bet.",
    source: "Chapter 4.1 / 4.5",
    kavram: "4bet-cevap",
  },
  {
    q: "One of the three coldcall conditions (position, depth, an opponent who pays off) is missing. Flat?",
    options: ["Flat anyway", "Don't flat"],
    correct: 1,
    explain: "If all three don't hold at once, don't flat; either bump it to a 3-bet or let it go.",
    source: "Chapter 4.4",
    kavram: "coldcall",
  },
  {
    q: "Someone opens, someone else calls (a coldcaller). Your most profitable move?",
    options: ["Flat", "Squeeze"],
    correct: 1,
    explain: "The coldcaller's range is tight but weak: it can't 4-bet and folds most of the time. The squeeze is the most profitable move.",
    source: "Chapter 4.6",
    kavram: "squeeze",
  },
  {
    q: "How should your OOP 3-bet range compare to your IP range?",
    options: ["Wider", "Noticeably tighter"],
    correct: 1,
    explain: "OOP in a bloated pot, one pair is a bluff-catcher; that's why OOP ranges are noticeably tighter.",
    source: "Chapter 0.8 / 4.0",
    kavram: "oop-sıkı",
  },
  {
    q: "You have a draw on the turn, facing a station (never folds). Semi-bluff bet?",
    options: ["Bet — make them fold", "Check — free card"],
    correct: 1,
    explain: "The station doesn't fold; the semi-bluff burns money. Check, see a free river, hit your draw for free.",
    source: "Chapter 6",
    kavram: "turn-fold-equity",
  },
  {
    q: "In PLO, what does naked AA (no nut potential) resemble?",
    options: ["A monster", "One pair in NLH — doesn't play a big pot"],
    correct: 1,
    explain: "Naked AA in PLO is one pair in NLH. Without nut potential the hand doesn't play a big pot.",
    source: "Chapter 0.10 / 8",
    kavram: "plo-aa",
  },
  {
    q: "In the 25–30bb band, where does the value really come from?",
    options: ["Completing draws (implied odds)", "Fold equity"],
    correct: 1,
    explain:
      "In this band, value comes from fold equity. The hand you want isn't one that can improve — it's one that's already good: an ace, broadway, a pair.",
    source: "Chapter 5.0 / 0.11",
    kavram: "25-30bb-değer",
  },
  {
    q: "28bb, you want to 3-bet. What's the structure?",
    options: ["3-bet and be ready to fold", "3-bet = jam (commit)"],
    correct: 1,
    explain:
      "In this band a 3-bet means commit; there's no '3-bet then fold' — it's straight all-in. There's no flat in this band either.",
    source: "Chapter 5.2",
    kavram: "3bet-jam",
  },
  {
    q: "28bb, you're in the SB with T9s, BTN opens, it's 40K to call. Decision?",
    options: ["Call", "Fold"],
    correct: 1,
    explain:
      "Fold — flatting from the SB is a losing position, and at 28bb the implied-odds engine doesn't run. (GGMasters field case)",
    source: "Chapter 5.5",
    kavram: "25-30bb-fold",
  },
  {
    q: "28bb, you hold 87s (suited connector). Decision?",
    options: ["Play it in the right spot", "Auto fold"],
    correct: 1,
    explain:
      "In this band every suited connector is an unconditional fold; their engine (implied odds) isn't running.",
    source: "Chapter 5.4",
    kavram: "suited-connector-fold",
  },
  {
    q: "28bb, you're facing a jam. What's your calling floor?",
    options: ["Wide: most broadways", "99+, AJs+, AQo+"],
    correct: 1,
    explain:
      "Against a jam, call with 99+, AJs+, AQo+; anything below is not a call — either you're the one jamming, or you fold.",
    source: "Chapter 5.3",
    kavram: "jam-call",
  },
  {
    q: "You've seen the chip leader fold to a jam once. Your jamming range against them?",
    options: ["Tighten it", "Widen it"],
    correct: 1,
    explain:
      "The profile that opens wide and folds to jams is the most profitable target in this band; widen your jamming range against them.",
    source: "Chapter 5.6",
    kavram: "rakip-okuma",
  },
];

export function randomScenario(): Scenario {
  return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
}
