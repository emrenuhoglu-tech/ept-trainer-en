// Distractor rationales: one line per WRONG option, "why this loses".
// Shown under the scenario on reveal → every miss becomes a micro-lesson.
// Key = the scenario's q text (same key the seen-map uses). Array is aligned to options;
// the correct index is "" (empty) — the UI never shows it. Content is compressed from each
// scenario's own explain (no new claims); passed adversarial verify.
// Coverage: Chapter 17 (WSOP ME Day-2) + Chapter 2.1 (KQo) + Chapters 11–16 (v5) multi-option scenarios.
export const WHY_WRONG: Record<string, string[]> = {
  "You opened AA from the CO with a 52 BB stack. The 48 BB reg on the BTN 3-bet, you 4-bet, he called. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. You c-bet 1/3 pot and your opponent RAISED. You're thinking 'AA + SPR 1.3 = I'm already committed'. Your action?":
    [
      "Low SPR isn't a reason to commit (MW.6); on the wet T98 board the raising range is sets/straights/combo-draws — AA is one pair.",
      "",
      "Pot odds don't tie one pair to a bloated pot; call-call drift is the MW.6 'pot got big, I'm committed' root error.",
      "An info raise just bloats the pot without a clear answer; on a wet board the right line is pot control/fold, not testing.",
    ],
  "KK in the BB with 34 BB. A tight-passive player with 38 BB opened from the HJ, you 3-bet, he called. Flop Q-J-T rainbow; you c-bet, he called. Turn 9♦ (board Q-J-T-9). You're thinking 'let me check-raise all-in and take back the initiative'. The correct line?":
    [
      "Every bare K chops with you and AK beats you; an all-in only gets action from hands that beat or chop you.",
      "Protection is pointless — the board is four to a straight; a bet only collects calls from hands that beat you (AK) or chop (Kx), and folds out the weak ones.",
      "Over-fold: you throw away the chop with every K and the weak value; the line is check-call, not a blind fold.",
      "",
    ],
  "25 players left to the bubble, your stack is 41 BB. The chip leader (140 BB), who covers you, has opened from the BTN for the 3rd time in a row. You hold QQ in the BB. What's your plan, and if your 3-bet gets jammed on, is there a call?":
    [
      "",
      "QQ has ~40% vs the {KK+,AK} jam; the bubble premium raises the required threshold to ~48-50%, and QQ falls below it → calling the jam is ICM-negative.",
      "What's banned is the BLUFF 3-bet (17.4); QQ is a value 3-bet, and flatting only spills value against the over-active reg.",
      "Fully running from the cover isn't a strategy (MW.9B); folding QQ's value hand on the bubble burns chips.",
    ],
  "You're deep ITM. You're playing TT in position in a 3-bet pot. On the 8-6-2 rainbow flop your c-bet got check-called; the turn 8 (board 8-6-2-8) went check-check. The river came an A and your opponent led out with a POT-sized DONK bet. You're thinking 'I had an overpair, the A is just a scare card'. Your decision?":
    [
      "The 'A is a scare card' rationalization is the MW.9 root error; a pot-sized donk is polarized and no hand worse than yours bets this size.",
      "Raising a bluff-catch spot only gets called by hands that beat you and folds out the bluffs — self-inflicted damage.",
      "",
      "A pot-sized donk range doesn't hold enough bluffs; overbet/pot sizing = bluff-catcher math, the ~33% is a trap.",
    ],
  "You're in the BB with 47 BB; you called the BTN's open with A9o. Board A-9-4 with two hearts: you check-raised, he called. The turn 6♥ completed the flush; you bet, your opponent RAISED. You're saying 'I have two pair, I'm safe'. Your decision?":
    [
      "The 6♥ completed the flush; a jam pays a made flush, not a draw — two pair is now a bluff-catcher.",
      "",
      "'The pot got big, I'm committed' is the MW.6 root error; if you don't improve, fold to a big river bet, not a blind call.",
      "Over-fold: you have outs to a boat and the raise also contains bluffs/weak two pair — one call is right, not instant surrender.",
    ],
  "56 BB, Phase 1 (bubble far away). You opened A9s from the HJ; the 48 BB reg on the BTN 3-bet to ~3x (you'll be OOP postflop). Your action?":
    [
      "Calling a 3-bet OOP drags you into a bloated pot with a weak hand (the MW.9B danger); A9s isn't in the OOP continuing range.",
      "The 4-bet bluff arsenal is limited to A5s-A4s and low-frequency; A9s is neither value nor bluff.",
      "At this depth an A9s jam is overkill; it burns equity against the reg's KK+ core, and fold equity isn't enough either.",
      "",
    ],
  "You're in the CO with 66 and a 38 BB stack (Mode B); it's folded to you. Do you open? If you open, what's your plan against the BB's ~4x 3-bet?":
    [
      "",
      "In Mode B flat calls tighten and set-mine math breaks; calling with 66 creates a planless bloated pot.",
      "The CO range is 44+ (MW.3); 66 is a standard open, and folding leaves clear profit behind.",
      "A jam at 38BB imports the Mode C/D threshold upward (MW.9B); 66 doesn't beat the calling range.",
    ],
  "40 players left to the bubble. You're on the BTN with KQo; the 130 BB chip leader who covers you is in the BB, and it's folded to you. What do you do?":
    [
      "Running from the cover isn't a strategy (MW.9B); KQo is a clear open even in the tightened BTN range.",
      "Offsuit broadway is trash against a 3-bet (MW.6) — 'the most expensive pretty-looking hand'; calling burns ICM against a cover.",
      "",
      "There's no limp in MW.3; it surrenders the initiative and gifts the cover a free realization.",
    ],
  "Phase 2, your stack is 60 BB. The 22 BB stack in the SB opened; you hold A5s in the BB (you'll be IP postflop). The most profitable line?":
    [
      "The essence of Phase 2 is crushing 15-25BB; flatting drops the pressure and wastes A5s's fold equity.",
      "The 'bluffs burn' ban is for UNDER 20BB; 22BB is right in the target, A5s is the ideal blocker pressure hand.",
      "Jamming a 60BB stack is overkill; 3-bet pressure is far more profitable, a jam burns equity to a call.",
      "",
    ],
  "You're OOP in a 3-bet pot holding QQ (overpair). Flop 9-7-5 with two spades; you checked, your opponent bet POT. What's your flop/turn/river plan?":
    [
      "One pair in a pot past 40BB is an alarm (MW.9); raising puts QQ in a stack race, and fear of draws isn't a reason to commit.",
      "",
      "'The pot got big, I'm committed' is the root error; on a turn scare + big barrel one pair is done, not a blind call.",
      "Over-fold: SPR isn't at commit yet, the overpair calls the flop as a bluff-catcher, it doesn't give up immediately.",
    ],
  "The money just started (Phase 3), first hand ITM. The 9 BB stack UTG jammed; you hold ATo in the HJ and there are 3 big stacks behind you. Is there a call?":
    [
      "It looks profitable in chip-EV, but Phase 3 discipline is ICM>chip-EV; a kamikaze jam is met only with premiums.",
      "A re-jam doesn't always shut out the 3 big stacks behind; you get stuck to a waking premium with ATo.",
      "",
      "Pot odds are chip-EV logic; when the money starts the phase premium pulls the calling threshold up to premiums.",
    ],
  "You hold KK (overpair). The flop was T-8-4 with two clubs and your c-bet got called. The turn J♣ made the board T-8-4-J and completed the club flush; your opponent fired a 3/4-pot second barrel. What's your criterion for continuing?":
    [
      "Big turn barrel + a flush-completing board means one pair is done (MW.6); drifting into a call breeds the root error.",
      "A raise only gets action from a completed flush and folds out the weak ones — not a test, self-inflicted damage.",
      "Protection is too late: the flush already came; a jam pays made hands, and KK is one pair on this board.",
      "",
    ],
  "You're in Mode D: 17 BB, first in from the BTN, holding A7o. Jam, open-fold, or fold?":
    [
      "Open-folding at 17BB burns equity; in Mode D part of the BTN opening is a direct jam, and A7o is in that class.",
      "",
      "Folding is the passive face of the MW.9B '20BB freeze' transition error; A7o is in the near-Nash jam range.",
      "There's no calling a 3-bet at 17BB: in Mode D the post-open rule is jam-or-fold, a call is a planless commit.",
    ],
  "Deep ITM, 3 tables left. An opponent with a stack EQUAL to yours (45 BB) opened from the CO; you hold AQo in the SB. What's your 3-bet size, and your plan if a 4-bet comes?":
    [
      "",
      "A small OOP 3-bet gives a cheap call → a planless bloated OOP pot (the birthplace of the root error); calling the 4-bet is worse.",
      "NO flat from the SB (MW.4): 3-bet or fold; flatting opens an OOP pot you can't realize.",
      "Deep ITM a flip against an equal stack is a last resort (MW.6 / Phase 4 'run from the equals'); an AQo jam is expensive under ICM.",
    ],
  "We're on the river; you hold AA and the pot is badly bloated. Board 2-4-5-9-6. Your opponent checked to you and you close the action. Is there a bet; if so, what size and what's the target hand?":
    [
      "The answer to 'which worse hand pays me?' is empty; whoever calls a bet (straight/set/two pair) already beats you.",
      "In a bloated pot a jam only gets action from the range that beats you; worse hands just fold.",
      "",
      "On 2-4-5-9-6 the overpair range is sparse; there's no weak hand to pay thin value, the bet generates no value.",
    ],
  "42bb, a HJ reg (~22%) opens, you're in the CO with KQo. Decision?":
    [
      "3-bet turns KQo into a bluff, but the reg's continuing range (AQ/AK/QQ+) dominates KQo — no value, weak fold equity.",
      "Call: raw ~45% equity can't be realized; the best flops (K→AK, Q→AQ) are the most expensive traps.",
      "",
    ],
  "You're in a 3-bet pot (SPR ~2.5) with the overpair KK. The flop comes and your one pair still looks best. You think 'bloated pot, I'm committed'. What is the book's measure of a 'bloated pot'?":
    [
      "Number of bets doesn't define bloat (B11.0); at low SPR even one 3-bet is commit, at high SPR even many bets aren't.",
      "",
      "Effective stack alone isn't it; the real measure is stack÷pot (SPR) — even deep, if SPR is low you're committed.",
      "Board texture affects the role (value/bluff-catch) but isn't the 'bloated pot' measure; the measure is SPR.",
    ],
  "The river comes, you hold a strong one pair (overpair). Your opponent fires OVER pot (an overbet). Your decision?":
    [
      "An overbet is polarized (nuts or air); only a bluff-catcher holding a blocker calls, a naked overpair folds — the panic hero-call is the B11.2 mistake.",
      "",
      "Raising doesn't force the polarized range to bluff — value already calls/jams, air already folds; self-inflicted damage.",
      "It's not 'depends': an overbet size is polarized by definition, the decision is clear.",
    ],
  "River on a dry board, you have top pair good kicker. You're against a rec/station (never folds) type and it's checked to you. Is there a bet?":
    [
      "Checking misses value: 'which worse hand pays?' HAS an answer (the rec pays) — missed thin value is a direct chip loss.",
      "",
      "Pot bet is too much: this is top-pair thin value; a big size only gets paid by hands that beat you and folds out the payers.",
      "Check-raise is planless: it's checked to you, YOU are the value-betting side; waiting to check-raise leaves value behind.",
    ],
  "You have an overpair, the pot is bloated. On the river the board 2-4-5 gets a 6 (2-4-5-6). Your opponent fires a big bet. In the book's 'bad river' catalog, what class is this card and what's your decision?":
    [
      "The card isn't neutral: 2-4-5 with a 6 completes straight/set/trips (B11.4 catalog) — a call here is a bluff-catcher trap.",
      "",
      "Raising as if it's a 'scare card' gets called by the completed hands that beat you — from the root-error family.",
      "No small value bet: no worse hand pays on this bad river, it's not a place to make value.",
    ],
  "Hard bubble. A big stack that COVERS you fires a wide BvB jam (~22bb effective), you hold A9s. Call?":
    [
      "On a cover + bubble, CALL = 88+/AJs+/AQo; A9s is below that threshold and reverse-dominated — the 'suited is ahead' fallacy.",
      "",
      "You can't do the jamming: the villain ALREADY jammed, the decision is call/fold; the 'initiative' option isn't in this spot.",
      "It's not 'depends': the first question is 'am I covered' — yes → a firm threshold (88+/AJs+/AQo), and A9s is outside it.",
    ],
  "Bubble, you're in the BB with 22bb. A short stack that does NOT cover you (shorter than you; you don't bust if you lose) fires a wide 13bb BTN jam; you hold KTo. Your reflex is 'range too weak, fold'. The right play?":
    [
      "The fold reflex is the sticky half of the leak: if you're NOT covered (the jammer is shorter) KTo gets ~54% and needs ~44% → call.",
      "",
      "No re-jam: the villain is already all-in; the decision is only call or fold.",
      "Only-premiums is too tight: even KTo is a profitable call vs an uncovered short-stack jam, waiting for premiums leaves EV behind.",
    ],
  "FT, everyone has locked each other up (no shorter stack at the table, you're effectively the shortest, <15bb). Your 'tighten under ICM' reflex kicks in. The right play?":
    [
      "'ICM always tightens' is wrong (B12.5); when everyone is locked up nobody wants to pay you → widen.",
      "",
      "Folding along to wait for busts is blinding out; when you're the shortest you must widen your jam range, not die passively.",
      "Only-premiums is too tight: when nobody wants to pay, a wide jam collects chips on fold equity.",
    ],
  "Bubble, you're the big (covering) stack. There's a locked-up mid stack and a few shorts at the table. Who is your most profitable target?":
    [
      "The short stacks are already in jam/fold mode — the least pressure-able group; the real target is the locked-up mid stack.",
      "",
      "The other big stack is the only player who can seriously hurt you — clashing with it is risky; the profitable target is the locked-up mid stack.",
      "Waiting on the bubble, when you're on the RIGHT side, misses the highest chip-EV window.",
    ],
  "You have top pair in a 3+ way (multiway) pot, several players saw the flop. Your HU reflex says value. What's the book's multiway rule?":
    [
      "'Top pair is always value' is false (B13.1); each extra player in a multiway raises the value bar → it drops a class.",
      "",
      "Fold is too much: top pair isn't trash, pot-control/check preserves showdown value.",
      "Overbet is backwards: multiway the value bar is high, an overbet only gets paid by hands that beat you and bloats the pot.",
    ],
  "You're thinking of bluffing in a multiway pot; you hold a good blocker. How many ways can the pot be for the bluff to still be legit? (the book's 4th criterion)":
    [
      "4+ way NO bluff (B13.3): a blocker alone isn't enough, too many doors for the bluff to get through.",
      "",
      "'Standard bluff in any multiway' is wrong: HU=three criteria, 3-way=nut-blocker only, 4+=none.",
      "HU-only is too tight: a nut-blocker semi-bluff is still legit 3-way; the bluff only ends at 4+ way.",
    ],
  "You're in the 40–60bb band (the bridge band), considering a 3-bet. What's the book's bluff-3-bet direction?":
    [
      "'There's depth, widen' is wrong (B14.1): at 40-60bb nobody folds live, a bluff 3-bet burns.",
      "",
      "Thinking the standard B4 range is unchanged is a leak: in this band the 3-bet nears commit and the bluff part collapses.",
      "Suited-connector bluffs are exactly the hand that's cut: it can't continue vs a 4-bet/jam, not suitable in this band.",
    ],
  "You busted SHR Day 1, 5 minutes have passed, mild tilt. Does an immediate re-entry (a second bullet into the same event) make sense?":
    [
      "'Get in now' is the series' most expensive decision (B16.1): SHR is one bullet, deciding under tilt = the bankroll-scale root error.",
      "",
      "'Switch to another event' is also a tilt decision; first the mandatory 20-min + decision card, event choice after.",
      "The rule is 20-min + a decision card; waiting the day/tomorrow isn't a disciplined process either, it's avoidance.",
    ],
  "End-of-day autopsy: you played a hand by the book's rule but lost (correct jam, bad result). Tomorrow, in that spot, do you change your range?":
    [
      "'If I lost it was wrong' is the result fallacy (B16.3): followed+lost = correct decision/bad result, the range doesn't change.",
      "",
      "'Look at the result' is exactly what's banned: the score is set by the rule, not the result; correct jams lose often in the SHR.",
      "Widening is also a result reaction: if you followed the rule the table is right, don't wreck B4-B5 over one bad result.",
    ],
};
