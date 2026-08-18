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
      "No weaker hand calls the all-in: every other ten outkicks you, boats are ahead. On this runout your trips are a bluff-catcher → check-call. Raising folds out the bluffs and only gets called by hands that beat you (sentence 2). Your actual bustout (B7 Case 4).",
    source: "Chapter 7 / Case 4",
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
      "MW.9 ICM thresholds: QQ gets ~40% equity against the cover's {KK+, AK} jam; with a 6–10% bubble ICM premium the required ~48–50% → FOLD. MW.8: 'On the bubble against a cover, even QQ may not be a 4-bet-call'; the practical full-stack rule is KK+. QQ is still a value 3-bet (MW.4: 99+ from the BB, target the over-active reg); the mistake isn't the 3-bet, it's calling the jam. Completely avoiding the cover isn't a strategy either (MW.9B). (17.4 'don't 3-bet a cover' means BLUFF 3-bet; a value 3-bet — QQ, continue KK+ vs a jam — is free.)",
    source: "Chapter 17 / 17.4",
    kavram: "icm-cover",
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
    kavram: "icm-cover",
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
  // === Chapter 11–16 scenarios (v5 tournament-winning chapters; answers taken verbatim from book tables) ===
  {
    q: "You're in a 3-bet pot (SPR ~2.5) with the overpair KK. The flop comes and your one pair still looks best. You think 'bloated pot, I'm committed'. What is the book's measure of a 'bloated pot'?",
    options: ["Number of bets — a 3-bet pot is bloated", "SPR (stack ÷ pot); SPR 1–4 = bluff-catcher, do NOT start a big pot", "Effective stack — 100bb+ is deep", "Board texture — wet is bloated"],
    correct: 1,
    explain:
      "B11.0: 'When deep, SPR — not the number of bets — defines a bloated pot.' In the SPR 1–4 band one pair is a bluff-catcher — don't start a big pot. Read SPR first, then assign the role; SPR<1 commit, SPR>8 thin value is available but a pot that gets re-raised suddenly drops to 1–4.",
    source: "Chapter 11.0",
    kavram: "kök-hata",
  },
  {
    q: "The river comes, you hold a strong one pair (overpair). Your opponent fires OVER pot (an overbet). Your decision?",
    options: ["Call — an overpair is a bluff-catcher, an overbet still has bluffs", "Fold — an overbet is polarized (nuts or air); one pair folds, only a bluff-catcher holding a blocker calls", "Raise — push the polarized range to bluff", "Depends — look at the board"],
    correct: 1,
    explain:
      "B11.2: 'As the size grows the opponent's range shifts toward value; read an overbet as polarized, and one pair clarifies from bluff-catcher to FOLD. Only a bluff-catcher holding a blocker calls.' The panic hero-call is the mistake here (Case 1).",
    source: "Chapter 11.2",
    kavram: "kök-hata",
  },
  {
    q: "River on a dry board, you have top pair good kicker. You're against a rec/station (never folds) type and it's checked to you. Is there a bet?",
    options: ["Check — go to showdown, thin value is risky", "Small value BET — the answer to 'which worse hand pays?' EXISTS (the rec pays); missed thin value is lost chips", "Pot bet — maximum value", "Get ready for a check-raise"],
    correct: 1,
    explain:
      "B11.3: 'If someone pays, THIN value BET.' The filter runs positive: if 'which worse hand pays me?' has an answer (a rec/station pays), bet — even thin. In the rec-heavy Main, missed thin value is a direct chip loss.",
    source: "Chapter 11.3",
    kavram: "boyut",
  },
  {
    q: "You have an overpair, the pot is bloated. On the river the board 2-4-5 gets a 6 (2-4-5-6). Your opponent fires a big bet. In the book's 'bad river' catalog, what class is this card and what's your decision?",
    options: ["Neutral card — call", "Bad river (completes straight/set); check-fold to a big pot, JAM NEVER — the jam is value only if a worse hand pays", "Scare card — raise", "Small value bet"],
    correct: 1,
    explain:
      "B11.4 bad-river catalog: 'fourth low card / straight completer' (2-4-5 with a 6 → trips, straight, set all beat you). On these cards: check-call a small pot, check-fold a big one; JAM NEVER. (Case 3.)",
    source: "Chapter 11.4",
    kavram: "kök-hata",
  },
  {
    q: "Hard bubble. A big stack that COVERS you fires a wide BvB jam (~22bb effective), you hold A9s. Call?",
    options: ["Call — A9s suited, ahead enough even on the bubble", "Fold — cover + bubble: CALL = 88+/AJs+/AQo; A9s is reverse-dominated, fold it along with KQs", "Do the jamming yourself — take the initiative", "Depends"],
    correct: 1,
    explain:
      "B12.1 Emre calibration (2026-08-10): hard bubble + a wide jam that covers you, ~22bb → CALL = 88+ · AJs+ · AQo; fold A9s/KQs. Driver: cover + bubble = if you lose you bust for €0, the marginal edge isn't worth tournament life (A9s reverse-dominated). The FIRST question isn't 'is it the bubble' but 'am I covered'.",
    source: "Chapter 12.1",
    kavram: "icm-cover",
  },
  {
    q: "Bubble, you're in the BB with 22bb. A short stack that does NOT cover you (shorter than you; you don't bust if you lose) fires a wide 13bb BTN jam; you hold KTo. Your reflex is 'range too weak, fold'. The right play?",
    options: ["Fold — KTo is trash on the bubble", "Call — if you are NOT covered the line is much wider; KTo gets ~54% vs the wide 13bb jam, ~44% needed", "Re-jam over the jam", "Only call premiums"],
    correct: 1,
    explain:
      "B12.1 drill addendum (2026-08-10): the sticky half of the leak is the fold reflex on the NOT-covered side. If you're not covered (the jammer is shorter), A9s and KTo are a CALL — KTo ~54% vs the required ~44%. Cue: 'before folding to a jam, am I covered? If no, the call is much wider than you think.'",
    source: "Chapter 12.1",
    kavram: "icm-cover",
  },
  {
    q: "FT, everyone has locked each other up (no shorter stack at the table, you're effectively the shortest, <15bb). Your 'tighten under ICM' reflex kicks in. The right play?",
    options: ["Tighten — ICM always tightens", "WIDEN — when everyone is locked up nobody wants to pay you off; 'tighten generally' is actively wrong in this band", "Fold along, wait for busts", "Only jam premiums"],
    correct: 1,
    explain:
      "B12.5 short-stack ICM exception: '⚠ tighten under ICM is NOT always right. When everyone is locked up the short stack's correct play is to WIDEN — nobody wants to pay you off.' 12.2: 'you're effectively the shortest → widen your jam range, don't fold along.'",
    source: "Chapter 12.5 / 12.2",
    kavram: "icm",
  },
  {
    q: "Bubble, you're the big (covering) stack. There's a locked-up mid stack and a few shorts at the table. Who is your most profitable target?",
    options: ["The short stacks — easy folds", "The locked-up mid stack — the most profitable target at the table; widen opens + 3-bet pressure", "The other big stack — most chips at stake", "Nobody — wait on the bubble"],
    correct: 1,
    explain:
      "B12.4 bubble hunting map: 'the locked-up mid stack is the most profitable target at the table.' As the big stack, plunder it (widen opens + 3-bet pressure). The bubble isn't defense — if you're on the RIGHT side it's the tournament's highest chip-EV window.",
    source: "Chapter 12.4",
    kavram: "icm",
  },
  {
    q: "You have top pair in a 3+ way (multiway) pot, several players saw the flop. Your HU reflex says value. What's the book's multiway rule?",
    options: ["Value bet — top pair is always value", "Drops a class → check / pot control; each extra player in a multiway raises the value bar", "Fold — top pair is trash multiway", "Overbet — clear the crowd"],
    correct: 1,
    explain:
      "B13.1 HU→3+ way transition: multiway, top pair 'drops a class → check/pot control.' B13.0: 'each extra player RAISES the value bar.' C-bet frequency collapses (only strong value + a real nut-draw).",
    source: "Chapter 13.1",
    kavram: "multiway",
  },
  {
    q: "You're thinking of bluffing in a multiway pot; you hold a good blocker. How many ways can the pot be for the bluff to still be legit? (the book's 4th criterion)",
    options: ["Even 4+ way — a blocker is enough", "3-way: nut-blocker semi-bluff only; 4+ way: NO bluff; a single station kills the bluff", "Standard bluff in any multiway", "Bluff only HU"],
    correct: 1,
    explain:
      "B13.3 fourth criterion: 'number of opponents = number of doors the bluff must get through.' HU=three criteria, 3-way=nut-blocker semi-bluff only, 4+ way=NONE. 'Multiway pot (whoever it is)' is added to the B1.4 'who not to bluff' list.",
    source: "Chapter 13.3",
    kavram: "multiway",
  },
  {
    q: "You're in the 40–60bb band (the bridge band), considering a 3-bet. What's the book's bluff-3-bet direction?",
    options: ["Widen the bluffs — there's depth", "NEARLY CUT the bluffs — nobody folds live; the hand you 3-bet must be able to continue vs a 4-bet/jam", "Standard B4 range — unchanged", "Suited connectors only as bluffs"],
    correct: 1,
    explain:
      "B14.1: '40–60bb: NEARLY CUT the bluffs — nobody folds live.' Rule: the hand you 3-bet must be able to continue vs a 4-bet/jam; if it can't, flat (IP/BB) or fold. The '3-bet then fold' structure weakens below 60bb and ends at 40bb (commit).",
    source: "Chapter 14.1",
    kavram: "3bet-aralik",
  },
  {
    q: "€25K PLO HR, you have 30bb and naked AA. Your NLH reflex says 'under 30bb → Chapter 5 → 3-bet = JAM'. Does that hold in PLO?",
    options: ["Yes — 30bb is the jam band in any game", "No — in PLO B5 is INVALID: no jam, there's a pot-raise; naked AA doesn't play postflop, its value is in pre-commit (3-bet→SPR≤1)", "Fold — you don't play AA at 30bb PLO", "Limp-call"],
    correct: 1,
    explain:
      "B15.1/15.0: 'B5's NLH jam/fold reflex is invalid in PLO — in pot-limit there's no jam, only a max pot-raise.' In 25–60bb PLO naked AA doesn't play postflop; its value is in pre-commit (3-bet → SPR≤1). '30bb PLO ≠ 30bb NLH.'",
    source: "Chapter 15.1 / 15.0",
    kavram: "plo",
  },
  {
    q: "Short PLO (<25bb), you made a pot-raise. What does that mean?",
    options: ["A standard raise — the continue decision on the flop is separate", "Pot-raise = COMMIT: the remaining stack goes in automatically on the flop; pick your range assuming 'the stack goes in on the flop', cut everything with a dangler", "An info raise — it's cheap", "Be ready to fold"],
    correct: 1,
    explain:
      "B15.1: 'In short PLO a pot-raise = commit. Pick your range assuming the stack goes in on the flop: double-suited rundowns, strong AAxx; CUT everything with a dangler.' B15.2: in PLO the commit decision is made on the street you bloat the pot, not on the flop.",
    source: "Chapter 15.1 / 15.2",
    kavram: "plo",
  },
  {
    q: "You busted SHR Day 1, 5 minutes have passed, mild tilt. Does an immediate re-entry (a second bullet into the same event) make sense?",
    options: ["Yes — get in now, don't lose momentum", "No — mandatory 20-min wait, fill in the decision card; SHR has NO re-entry (max 1 bullet); an automatic re-entry under tilt = the bankroll-scale root error", "Switch to another event", "End the day, decide tomorrow"],
    correct: 1,
    explain:
      "B16.1: 'The single most expensive decision of the series is the re-entry made in the 5 minutes after busting.' Mandatory wait: bustout → 20 min away from the table → fill in the decision card. SHR max 1 bullet (no re-entry); an automatic re-entry under tilt = treating a single bullet as value in a bloated 'series investment'.",
    source: "Chapter 16.1",
    kavram: "kök-hata",
  },
  {
    q: "End-of-day autopsy: you played a hand by the book's rule but lost (correct jam, bad result). Tomorrow, in that spot, do you change your range?",
    options: ["Yes — if I lost something was wrong, tighten", "No — 'followed the rule + lost' = correct decision, bad result; the RANGE DOESN'T CHANGE (else you'd wreck the B4-B5 tables mid-SHR)", "Depends — look at the result", "Widen the range — be more aggressive"],
    correct: 1,
    explain:
      "B16.3 autopsy rule: 'Followed + lost → log it as correct decision/bad result in the case book, the RANGE DOESN'T CHANGE.' This filter protects calibration: correct jams lose often in the SHR; without the filter you'd wreck the careful tables mid-tournament. (Valid only if you actually FOLLOWED the rule — not a self-exoneration door.)",
    source: "Chapter 16.3",
    kavram: "kök-hata",
  },
];

export function randomScenario(): Scenario {
  return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
}
