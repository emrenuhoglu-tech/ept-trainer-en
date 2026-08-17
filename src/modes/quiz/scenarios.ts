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
  // === Chapter 17 — WSOP Online ME Day 2 (special-module drills, S1-S10 + S-T1-5) ===
  {
    q: "You opened AA from the CO with a 52 BB stack. The 48 BB reg on the BTN 3-bet, you 4-bet, he called. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. You c-bet 1/3 pot and your opponent RAISED. You're thinking 'AA + SPR 1.3 = I'm already committed'. Your action?",
    options: ["All-in — AA + SPR 1.3, you're already committed; don't give the draws a free card", "Fold — the pot is past 40 BB, one-pair alarm; no stack race with AA against a raising range on T♠ 9♠ 8♣", "Call, and continue against every barrel on the turn — your pot odds force the call", "Small re-raise — get information, put your opponent to the test"],
    correct: 1,
    explain:
      "MW.9 root error: once the pot is past 40 BB, one pair (even AA) = alarm; the default is pot control + bluff-catcher, not a stack race. MW.6: 'the pot got big, I'm committed' is a root error — a low SPR is NOT a reason to be committed. On a wet board like T♠ 9♠ 8♣ the raising range is weighted toward sets/straights/combo draws; AA is just one pair here.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "KK in the BB with 34 BB. A tight-passive player with 38 BB opened from the HJ, you 3-bet, he called. Flop Q-J-T rainbow; you c-bet, he called. Turn 9♦ (board Q-J-T-9). You're thinking 'let me check-raise all-in and take back the initiative'. The correct line?",
    options: ["Check-raise all-in — you have the K-high straight, take back the initiative", "Big bet — protect your straight, don't give a free card", "Check-fold — a tight-passive player definitely has AK", "Check-call, re-evaluate on the river — every K chops with you, AK beats you; the tight-passive player's continuing range is exactly this zone"],
    correct: 3,
    explain:
      "MW.9 root-error guardrail: the check-raise all-in impulse (the KTo lesson) — the correct line is check-call-then-evaluate. On Q-J-T-9 you have the K-high straight with KK, but every bare K chops and AK beats you with the broadway; an all-in only gets action from hands that beat you or chop. MW.9 chop mechanics: re-read the board on the turn/river.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "25 players left to the bubble, your stack is 41 BB. The chip leader (140 BB), who covers you, has opened from the BTN for the 3rd time in a row. You hold QQ in the BB. What's your plan, and if your 3-bet gets jammed on, is there a call?",
    options: ["3-bet (value); if a jam comes, FOLD — on the bubble against a covering stack the full-stack range is ~KK+; QQ doesn't meet the ICM-adjusted threshold against a {KK+, AK} jam", "3-bet and call the jam — QQ is never folded on the bubble, the guy is opening for the 3rd time in a row", "Just call — 3-betting against a cover is completely off-limits, keep the pot small", "Fold — play no pots with the chip leader, stay away from him"],
    correct: 0,
    explain:
      "MW.9 ICM thresholds: QQ gets ~40% equity against the cover's {KK+, AK} jam; with a 6–10% bubble ICM premium the required ~48–50% → FOLD. MW.8: 'On the bubble against a cover, even QQ may not be a 4-bet-call'; the practical full-stack rule is KK+. QQ is still a value 3-bet (MW.4: 99+ from the BB, target the over-active reg); the mistake isn't the 3-bet, it's calling the jam. Completely avoiding the cover isn't a strategy either (MW.9B).",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "You're deep ITM. You're playing TT in position in a 3-bet pot. On the 8-6-2 rainbow flop your c-bet got check-called; the turn 8 (board 8-6-2-8) went check-check. The river came an A and your opponent led out with a POT-sized DONK bet. You're thinking 'I had an overpair, the A is just a scare card'. Your decision?",
    options: ["Call — the A is a scare card, TT is still ahead of eights and below", "Raise all-in — punish the bluff, force weak Ax to fold", "Fold — overpair + bad river + BIG bet; a pot-sized donk is polarized and no hand worse than yours bets this size", "Call — your pot odds are ~33%, the opponent bluffs often enough"],
    correct: 2,
    explain:
      "MW.6 river discipline: overpair + bad river → check-call a small bet, fold to a BIG bet. The A is the worst card for TT and a pot-sized donk is a polarized range (MW.9 online adjustment: overbet/pot polarized = bluff-catcher math); the 'scare card' rationalization is from the MW.9 root-error family. Deep ITM, per MW.8, ICM > chip-EV, which makes the fold even clearer.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "You're in the BB with 47 BB; you called the BTN's open with A9o. Board A-9-4 with two hearts: you check-raised, he called. The turn 6♥ completed the flush; you bet, your opponent RAISED. You're saying 'I have two pair, I'm safe'. Your decision?",
    options: ["3-bet all-in — two pair is ahead, charge the draws", "Call the raise once — two pair is now just a bluff-catcher (+4 outs to a boat); if you don't improve on the river, fold to a big bet, no stack race", "Call, then call every river bet too — the pot got big, you're committed now", "Fold — once the flush completes, two pair is instantly trash"],
    correct: 1,
    explain:
      "MW.6/MW.9: on the flush-completing 6♥ turn, a raise from an opponent who called your check-raise is weighted heavily toward a completed flush — two pair is not 'safe', it turns into a bluff-catcher. The correct line is call-then-evaluate, not escalation (the MW.9 check-raise all-in impulse lesson); a jam pays off made hands, not draws. And 'the pot got big, I'm committed' is the root error from MW.6.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "56 BB, Phase 1 (bubble far away). You opened A9s from the HJ; the 48 BB reg on the BTN 3-bet to ~3x (you'll be OOP postflop). Your action?",
    options: ["Call — a suited ace, you take a flop even out of position", "4-bet bluff — you have the A blocker, test the reg", "Jam — break the reg's 3-bet", "Fold — the OOP continuing range vs a 3-bet is narrow: KK+ 4-bet, QQ/AK mixed, JJ–TT/AQs call; A9s is outside it"],
    correct: 3,
    explain:
      "MW.5: when your open faces a 3-bet OOP, the range tightens — KK+ 4-bet, QQ/AK mixed, JJ–TT/AQs call, everything else folds; A9s is in 'everything else'. The 4-bet bluff arsenal is limited to A5s–A4s and low-frequency. Calling is exactly the danger MW.9B warns about: calling a 3-bet and entering a bloated pot with a weak hand.",
    source: "Chapter 17",
    kavram: "3bet-aralik",
  },
  {
    q: "You're in the CO with 66 and a 38 BB stack (Mode B); it's folded to you. Do you open? If you open, what's your plan against the BB's ~4x 3-bet?",
    options: ["Open (the CO range is 44+, 66 is standard), fold to the 3-bet — in Mode B flat calls tighten, set-mine math breaks down", "Open, call the 3-bet — if you hit a set you win a stack", "Don't open — at 38 BB small pairs drop out of the opening range", "Open, jam over the 3-bet — at 38 BB the commit threshold is already crossed"],
    correct: 0,
    explain:
      "MW.7 Mode B (30–45 BB): the open range holds (MW.3 CO 26% = includes 44+) but flat calls tighten — set-mining breaks down and the commit threshold in a 3-bet pot is close; calling with 66 creates a planless bloated pot. The correct plan: open, fold to the 3-bet. Jamming is a transition error that imports Mode C/D thresholds to 38 BB (MW.9B).",
    source: "Chapter 17",
    kavram: "stack-modu",
  },
  {
    q: "40 players left to the bubble. You're on the BTN with KQo; the 130 BB chip leader who covers you is in the BB, and it's folded to you. What do you do?",
    options: ["Fold — you don't open pots against a cover, stay away from him", "Open and call the 3-bet — KQo is too pretty a hand to let go", "Open (2.1–2.3x) — KQo opens even in a one-notch-tightened BTN range; but fold to the cover's 3-bet", "Limp — see a cheap flop, don't provoke the cover"],
    correct: 2,
    explain:
      "MW.8 Phase 2: the only brake against covers is playing 'one notch tighter'; MW.9B: 'running away from the cover isn't a strategy'. KQo is a clear open even in the tightened version of the MW.3 BTN 40–44% range. The real discipline comes when the 3-bet arrives: MW.6 — offsuit broadways (KQo, AJo) are trash against a 3-bet, 'the most expensive pretty-looking hand'; against a cover's 3-bet you continue one notch tighter still. There is no limp in MW.3.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "Phase 2, your stack is 60 BB. The 22 BB stack in the SB opened; you hold A5s in the BB (you'll be IP postflop). The most profitable line?",
    options: ["Call — play A5s cheaply with position", "Fold — a bluff 3-bet burns against a short stack", "Jam right away — force the 22 BB to fold instantly", "3-bet — the essence of Phase 2 is crushing the 15–25 BB stacks; A5s is the ideal pressure hand with its A blocker + playability; mostly fold if a jam comes"],
    correct: 3,
    explain:
      "MW.8 Phase 2: the most profitable phase — 3-bet pressure on opens from 15–25 BB stacks is the main profit source, and 22 BB is right in the target zone (MW.4's 'bluffs burn' ban is for UNDER 20 BB). MW.9B: pressure bluffs are limited to blocker hands like A5s/K9s — A5s is the textbook candidate. If a jam comes, your 60 BB stack doesn't race; fold unless the price fits.",
    source: "Chapter 17",
    kavram: "blof-secimi",
  },
  {
    q: "You're OOP in a 3-bet pot holding QQ (overpair). Flop 9-7-5 with two spades; you checked, your opponent bet POT. What's your flop/turn/river plan?",
    options: ["Raise the flop — protect the overpair from draws, stack off if it comes to that", "Call the flop; fold if the turn completes a spade/straight and a big barrel comes; on the river call a small bet, fold to a big bet — turn the overpair into a bluff-catcher", "Call the flop, then call every street — QQ is premium, the pot's already big", "Fold the flop — an overpair isn't enough against a pot bet"],
    correct: 1,
    explain:
      "MW.9: in a bloated pot past 40 BB, one pair (QQ) = alarm; the default is pot control + bluff-catcher, not a stack race. The street plan comes from MW.6: big turn barrel + a flush/straight-completing card → one pair is done; on the river check-call a small bet, check-fold to a big bet. Calling every street is the 'pot got big, I'm committed' root error.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "The money just started (Phase 3), first hand ITM. The 9 BB stack UTG jammed; you hold ATo in the HJ and there are 3 big stacks behind you. Is there a call?",
    options: ["Call — ATo is well ahead of a 9 BB kamikaze jam", "Isolation re-jam — shut out the players behind, get heads-up with the short stack", "Fold — the first 3–4 hands of Phase 3 are played tight; kamikaze jams are called with premiums, ATo is not a premium and you have 3 big stacks behind", "Call — the pot odds justify a call with almost any two cards"],
    correct: 2,
    explain:
      "MW.8 Phase 3: play 3–4 hands tight when the money starts — short stacks fire kamikaze jams and these are called ONLY with premiums; ATo is not a premium. The 3 big stacks behind who might wake up make the equation even worse. A call that looks profitable in chip-EV is the typical mistake that breaks phase discipline (ICM > chip-EV).",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "You hold KK (overpair). The flop was T-8-4 with two clubs and your c-bet got called. The turn J♣ made the board T-8-4-J and completed the club flush; your opponent fired a 3/4-pot second barrel. What's your criterion for continuing?",
    options: ["Call — an overpair can take one more barrel, we'll see the river", "Raise — test the flush", "All-in — protect KK, push the draws out", "Fold — big turn barrel + flush-completing board means one pair is done; continuing is only considered with an exceptional reason like the K♣ blocker"],
    correct: 3,
    explain:
      "MW.6 turn discipline: 'big turn barrel + board completing a four-straight/flush → one pair is done.' A 3/4-pot second barrel falls squarely inside this definition and KK is one pair on this board → default fold. Continuing is the birthplace of the MW.9 root error of 'a stack race with one pair in a bloated pot'; a raise/all-in pays off completed hands.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
  {
    q: "You're in Mode D: 17 BB, first in from the BTN, holding A7o. Jam, open-fold, or fold?",
    options: ["Open 2.1x and fold to a 3-bet — preserve your stack", "Jam — in Mode D part of the BTN opening range goes in as a direct jam; A7o is in the near-Nash jam range, and if you open you're stuck in a jam-or-fold dilemma against a 3-bet", "Fold — A7o gets dominated, don't take risks with 17 BB", "Open 2.1x and call a 3-bet — we see a flop with the A blocker"],
    correct: 1,
    explain:
      "MW.7 Mode D (12–20 BB): part of the opening from the SB/BTN is a DIRECT jam and the range is near Nash — A7o from the BTN at 17 BB is in this class. If you open, the rule is clear: jam or fold against a 3-bet — both are bad with A7o (a dominated race or burning equity). Folding is the passive face of the MW.9B '20 BB panic-jam/freeze' transition error.",
    source: "Chapter 17",
    kavram: "stack-modu",
  },
  {
    q: "Deep ITM, 3 tables left. An opponent with a stack EQUAL to yours (45 BB) opened from the CO; you hold AQo in the SB. What's your 3-bet size, and your plan if a 4-bet comes?",
    options: ["Standard OOP 3.8–4.2x 3-bet; fold to a 4-bet — deep ITM there's no stack race with AQo against an equal stack ('run from the equals')", "Small 3x 3-bet — keep it cheap; call the 4-bet", "Flat call — keep the pot small from the SB", "4x 3-bet, jam over a 4-bet — accept the flip with AQo's blockers"],
    correct: 0,
    explain:
      "MW.4B sizing rule: OOP (SB) 3-bet 3.8–4.2x — a small OOP 3-bet gives a cheap call and creates a planless bloated OOP pot (the birthplace of the root error). MW.4: NO flat from the SB, 3-bet or fold; AQo is a value 3-bet against a CO open. Continuing against a 4-bet is KK+-cored per MW.5, and MW.8 Phase 4 'run from the equals' + MW.6 'a flip against an equal stack = last resort' → fold AQo.",
    source: "Chapter 17",
    kavram: "boyut",
  },
  {
    q: "We're on the river; you hold AA and the pot is badly bloated. Board 2-4-5-9-6. Your opponent checked to you and you close the action. Is there a bet; if so, what size and what's the target hand?",
    options: ["Pot bet — get AA paid off; Ax and overpairs call", "Overbet jam — look polarized, get two pairs to pay off", "No bet, check back — the answer to 'which worse hand pays me off?' is empty; the hands that would call a bet (straights, sets, two pairs) beat you", "1/3-pot thin value — KK/QQ-type hands pay"],
    correct: 2,
    explain:
      "MW.9 root-error guardrail: 'AA river jam: if no worse hand pays, the jam is worthless — check.' The MW.6 river rule asks the same single question. On 2-4-5-9-6 every 3 and every 7-8 makes a straight; in a bloated pot the range that gives your bet action is weighted toward the region that beats you, and worse hands just fold. MW.9: one pair in a bloated pot = pot control, not a place to generate value.",
    source: "Chapter 17",
    kavram: "kök-hata",
  },
];

export function randomScenario(): Scenario {
  return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
}
