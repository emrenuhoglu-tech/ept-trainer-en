## Chapter 15 — PLO Tournament Layer: Stack Mode, SPR, Multiway

*★ v5. B8 gives mindset + hand selection but had no depth/tournament dimension. Critical contradiction: the Quick Reference's "below 30bb go to Chapter 5" and B5's "3-bet = JAM" doctrine cannot be executed at POT-LIMIT. The €25K PLO HR is a separate event (~18% of the budget); this chapter closes that contradiction.*

### 15.0 Why a separate layer

B5's NLH jam/fold reflex is invalid in PLO: at pot-limit there is no "jam", only a max pot-raise; and because equities run close, the fold-equity doctrine (B0 c.11) weakens in PLO. So "30bb PLO" ≠ "30bb NLH".

### 15.1 PLO stack modes

| Mode | Difference from NLH | Character |
|---|---|---|
| **60bb+** | Implied odds at their ceiling; rundown/double-suited value at its peak | Standard PLO |
| **25–60bb** | B5 INVALID — no jam, pot-raise instead | Nut-focused; bare AA doesn't play postflop — its value is in the pre-commit (3-bet → SPR≤1) |
| **<25bb** | Pot-raise → the remaining stack goes in automatically on the flop | This counts as a "jam"; pick your range accordingly |

**Rule:** In short PLO, pot-raise = commit. Pick your range assuming "the stack goes in on the flop": double-suited rundowns, strong AAxx; CUT everything with a dangler.

### 15.2 Pot geometry and the commit threshold

B8 says "two pot bets = stack in the middle" (a warning) but didn't give the mechanics. In PLO the "bloated pot" forms two streets earlier than in NLH; know the commit decision BEFORE the pot bloats.

| SPR (on the flop) | CAN stack off | Cannot |
|---|---|---|
| **< 2** | Nuts + strong redraw (nut set + FD, wrap + nut FD) | Bare AA (postflop), one-way hands |
| **2–4** | Nut made hand, strong combo draw | Second nuts, non-nut draws |
| **> 4** | High-nut-potential hands — build street by street | Non-nut completed hand (a trap) |

**Exception:** If YOU bloated the pot preflop (3-bet pot → SPR≤1), a bare AA overpair is a commit — that's not the root error, it's a preflop equity decision. What's forbidden is a one-pair stack-off in a POSTFLOP-bloated pot.

Hand-class thresholds rest on B8 doctrine ("no nut potential, no big pot"); the SPR band edges (2/4) included, exact boundaries are a starting skeleton — *(calibrate)*.

> **In PLO the commit decision is made not on the flop, but on the street where you bloat the pot.** (B8.1: the mechanical form of "two pot bets = stack in the middle".)

### 15.3 Out counting — raw vs nut

In PLO raw outs mislead; the stack-off threshold is measured in NUT outs. "Wrap + FD: 13+ outs" is dangerous without discounting — if half of the 13 outs are non-nut, it's not a real weapon but a trap. B8's "real weapon" label REMAINS valid for the NUT-FD wrap — the rule here only ties the stack-off threshold to the nut-out count.

**Rule:** For stack-offs, count NUT outs, not raw outs. *(Example hand: to be worked in when a case arrives from Emre's own PLO play — nothing made up.)*

*NOTE: A position-based PLO open/3-bet chart was DELIBERATELY not written — Emre has no PLO execution data, and a generic chart de-calibrates. This layer is calibrated class-by-class in drills.*

*Root-error link: B0 c.10 ("bare AA in PLO = one pair") extended to draws and depth — a pot bloated with a non-nut hand is the PLO form of the root error.*

---

### 15.4 The PLO-6 version of the root error


*(Source: Emre's $10/$20 6-card 5-max cash data, 2,100 hands — the execution data 15.3 was waiting for.)*

The NLH root error: misclassifying one pair (AA included) in a bloated pot. In PLO-6 the same error shows up in three shapes: (1) **turn fold** — calling the flop with a pair/weak draw, then folding to a turn pot bet; (2) **river non-nut call** — paying off with a non-nut straight / low flush / bottom straight; (3) **naked AA / top-two stack-off** — 4-betting AA and pot-c-betting deep-stacked, or jamming top-two into a 3-way check-raise. What the three share: hand strength is read on the flop and never updated on the turn/river. In a six-card game each villain holds an average of fifteen two-card combinations; a hand that's "good" on the flop is rarely still good on the turn.

**Rule:** in PLO-6 there is no medium hand. A hand is either the nuts (or has a nut redraw), or it doesn't put chips into a bloated pot. Folding on the turn and calling with a non-nut on the river are two faces of the same error.

### 15.5 Seven leaks, seven rules (PLO-6 cash)


| # | Leak | Rule |
|---|---|---|
| L1 | 3-bet call → flop call → turn fold | Calling a 3-bet = nut potential only: AAxx, KK ds, connected 4+ rundown+suit. A dangler hand folds. Before a flop call, ask "on which turn card do I continue?" — no concrete answer means no call either. |
| L2 | Preflop width (CO/BB open) | CO range = UTG + 10% (not BTN — three players behind you, that's where the 3-bet comes from). No call from the BB: 3-bet or fold; the reason has to be hand strength, not "I don't want to play OOP." |
| L3 | Fighting the 4-bet/5-bet war without AA | At 100bb, a 4-bet ≈ AA. Against a 4-bet, KKxx / an A-rundown: call or fold, not a 5-bet. 5-bet jam only with AAxx. |
| L4 | A redraw-less nut = call | Don't put a deep stack in on the turn with a bare nut straight and no redraw in a 6-card game; the villain is holding almost the exact same straight plus a redraw nearly every time. "If the villain holds the same hand, what do I win?" → if the answer is "nothing," call. |
| L5 | Naked AA at a deep stack | Once the stack passes 300bb, AA comes out of the 4-bet and moves to a call; no pot c-bet on the flop in a 3-bet pot. Better: at 300bb, leave the table and sit down 100bb at a new one. |
| L6 | River non-nut call | On the river, a non-nut vs. a pot bet = fold. Calling needs both conditions at once: (1) the villain has a concrete bluff range, (2) your hand beats that range. "Maybe he's bluffing" is not a range. |
| L7 | Your own card kills your own out | If your hand holds a triple/quad card, it drops a class: AAA is not AA, it's one pair. On a monotone flop, no barrel with a pair and no flush. |

The common math of the seven leaks is 15.4: all of them come from freezing hand strength on the flop and never updating it on the turn/river — this is the PLO form of the root error.

### 15.6 The PLO-6 pre-table checklist


Nine lines before you sit: (1) opening — UTG tight, CO = UTG + 10%, BTN wide, no dangler hand opens from UTG/CO; (2) calling a 3-bet only with AAxx / KK ds / connected rundown; (3) 5-betting a 4-bet only with AAxx; (4) BB: no call, 3-bet or fold; (5) a turn plan before a flop call — no answer to "which card do I continue on?" means fold; (6) a redraw-less nut on the turn = call, a redraw is required to raise; (7) non-nut vs. a river pot bet = fold; (8) a triple card in your hand = one class down; (9) stack > 300bb: AA drops to a call, no c-bet, preferably switch tables. Session rule: keep late-night closing time fixed, two big losses in a row = a fifteen-minute break (see B16.5).

*Root-error link: the extension of B0 c.10 ("naked AA in PLO = one pair") to draws and depth — a pot bloated with a non-nut hand is the PLO form of the root error.*

### 15.2-EK The value plan is built backward from the river — the street multiplier


Villain continues against every pot-size bet with roughly half his range; so the hand you bet on the turn goes to the river against villain's strongest half. The multiplier is unforgiving: if you're firing pot on two streets, your beaten share on the turn should be roughly half the river threshold — a hand that "looks good" on the turn can fall below the line on the river after the multiplier. In PLO, a hand that can mostly get two streets of value bets the turn; one that can't checks and takes its value on the river — don't carry over NLH's thin-turn-bet habit. Like the commit decision, the value plan is also built backward, before the pot bloats.

**Rule:** Do the multiplier before betting the turn: "once villain folds half, am I still clearly ahead on the river?" — if no, check the turn.

### 15.2-EK-2 Equity picks frequency, polarity picks sizing, position picks shape


Postflop aggression has three distinct sources, and each governs a different decision: an equity edge (your range being stronger than villain's) increases bet FREQUENCY — small size, wide range; a polarity edge (having more nut density than villain) increases SIZE — low frequency, big size. Equity dominates at low SPR (as streets run out, villain has no chance left to catch up); polarity dominates as SPR rises (as the opportunity to apply pressure across multiple streets grows). A positional edge, meanwhile, polarizes neither frequency nor size but the SHAPE of your range — on the river especially, the IP player bets either value or bluff, and mostly takes medium strength to showdown.

**Rule:** At low SPR trust equity (frequent and small); at high SPR trust polarity (rare and big).

### 15.3-EK Even when pot odds look sufficient, ask whether you can actually realize that equity


15.3 draws the raw-vs-nut out distinction; there's an additional axis on top of it: even when your hand's equity looks like it covers the pot odds, whether you can actually realize that equity on later streets is a separate check. In spots where villain fires big on the flop and can strip you off your equity with a jam on most later streets (especially in deep/high-SPR single-raised pots; in a 3-bet pot SPR≤1 already makes the flop call a commit — the 15.2 Exception — and there the question isn't realization but whether 15.3's nut-out threshold is cleared), raw equity percentage loses its meaning — because your probability of seeing the river is low independent of your mathematical equity.

**Rule:** Even when pot odds look sufficient, don't call in a deep/high-SPR pot without asking "how many streets from now can I actually realize this equity"; at SPR≤1 (a 3-bet pot) this question drops away — there the flop call already buys every street, but the threshold is still 15.3's nut-out count.

### 15.3-EK-2 Two pair's value scales with how many straights are live on the board


The value-bet quality of the same two pair hand differs sharply depending on how many distinct straight combinations are already possible on the board. On a board where only one straight line is open, villain rarely holds two pair, so two pair bets wide for value. On a board with multiple straight lines open (highly connected), villain's two pair and straight combination count explodes; the same two pair now only bets with the strongest-redraw combos, and checks the weak ones.

**Rule:** Don't count two pair as the same quality on every board — count how many straight lines are open on the board, and raise your value threshold as the count grows.

### 15.4-EK Build your value base from the hand you can actually reach


Don't blindly apply the "ideal" hand template (nut + redraw) for a check-raise or bluff — first check which hand classes your preflop range can actually carry to this point. On some boards the "ideal" template is structurally absent from your range: if all the premium combinations already went into a preflop 3-bet/4-bet, your postflop check-raise value base drops one notch — but only WITHIN the nut classes: instead of nut+redraw, the best nut class your range can actually build on that board (a set, two pair with the nut flush draw, a combination carrying a nut redraw) becomes your value base, and your bluff base widens to match. The base does NOT drop below the nut class — down to top pair/overpair: per 15.4 there's no medium hand in PLO-6, and a check-raise is exactly the action that produces a bloated pot. If your range carries no nut class at all on that board, don't try to construct a value check-raise — give up the line. This is one layer above the root error (not updating hand strength street by street): read hand strength not just against the board, but against what your own range can actually carry to that board.

**Rule:** Make your value base the best NUT class your range can actually carry to that point — not the "ideal" value hand; if the base would drop below nuts, there is no value check-raise.

### 15.5-EK "Theoretically never a fold" is not a guarantee — especially on blocker-heavy rivers


15.5 L6 says a non-nut river call requires villain to have a concrete bluffing range; there's a further layer beneath that. A hand being "never a fold" according to the solver rests on the assumption that villain bluffs at GTO frequency. Real opponents, especially on rivers where they depend on their own blockers (the tendency to bluff only when they hold a "clean" card themselves), systematically under-bluff — meaning the very spots labeled "never foldable," the ones most dependent on blockers, are in practice the spots most exploited from underneath (where calling loses money because villain bluffs too little).

**Rule:** Don't treat "theoretically never a fold" as a guarantee — on blocker-heavy river spots, separately interrogate the real opponent's actual bluff frequency.

### 15.5-EK-2 OOP overuses check-call with top pair/overpair


On a board where a bet comes in, the OOP player reflexively continues with a hand that only carries top pair or overpair (no second dimension — no nut redraw, no two-pair/set potential) by check-calling; check-call is the overused, EV-losing middle path in this class. In PLO-6 the correct answer is fold: per 15.4, a hand that isn't a nut and carries no nut redraw doesn't put chips into a bloated pot, and check-raise is exactly the action that produces a bloated pot — a one-dimensional overpair can be neither a value check-raise base (see 15.4-EK) nor a good bluff (it burns its own showdown value while only folding out worse). A check-raise only comes onto the table once the hand gains a second dimension — carries a nut redraw, i.e. stops being a "one-dimensional top pair." This distinction also holds in four-card PLO, but it's sharper in six-card: in PLO-6 the two-pair/set density is much higher, so "top pair/overpair" falls to a lower class than the four-card intuition expects — hold the check-call threshold tighter accordingly.

**Rule:** No reflex check-call with a one-dimensional top pair/overpair — the default in PLO-6 is fold; check-raise exists only if the hand carries a nut redraw.

### 15.6-EK Read villain's leak on two axes, shift your range on that axis


What to track once you sit down is which DIRECTION villain deviates in — not a closed list of profiles, but two independent axes. The first is villain's betting range: a player who reflexively fires thin value bets with certain hand categories just because they're easy to play has a weak betting range, so the call value of your marginal hands INCREASES — lower your call threshold. This loosening operates above the base, it doesn't punch through the base: per L6 / 15.6-(7), the requirement that villain have a concrete bluffing range for a non-nut call against a pot bet on the river doesn't go away. The second is villain's reaction to check-raises: against someone who doesn't believe check-raises / over-calls them, keep your own check-raise value-heavy and lower your bluff ratio; against someone who over-folds to check-raises, increase your bluff check-raise frequency. Don't mix the two axes — your call threshold looks at villain's BET range, your bluff check-raise frequency looks at villain's fold rate to a RAISE; don't carry a justification from one to the other.

**Rule:** Don't slot villain into a ready-made profile list; lower your call threshold as his betting range weakens (the river non-nut base still applies), increase your bluff check-raise as his fold rate to a raise rises.

### 15.6-EK-2 Being fast on a borderline hand beats being right


A hand you sit stuck on for a long time deciding bet-or-check, by definition, carries similar EV on both lines — burning minutes on it doesn't pay, it just drains bandwidth. Standard opening sizes, c-bet sizes, and routine class decisions should be automatic before you even sit down; save your mind at the table for reading villain and counting frequencies. Automated routine has one more side benefit: it's the one thing that doesn't break down when you're tired or on tilt.

**Rule:** Pick fast and move on for a borderline hand; save your thinking budget for decisions where the EV genuinely diverges.

### 15.7 Flop c-bet: value, texture, and simplification


Board texture and hand class are the two main axes of the flop c-bet decision; the nine principles below cover size selection, the value/bluff balance, and practical simplification.

- **Size follows from value.** Start your flop c-bet plan from value, not bluffs: which hands want to put money in for how many streets on this board — their preference determines the size; bluffs adapt to the chosen size. Don't pick a size because "cheap for my bluffs" — if you have no hand that value-bets that size, you don't have a range at that size either. If the solver piles bet-or-check heavily onto one side in a spot (~80-90%, *calibrate*), round to the full range (shrinking the size a notch if needed); if it mixes two sizes at similar frequencies, mostly simplify to one big size. **Rule:** Build the value range first; the value hands pick the size — when in doubt, simplify to one big size.

- **Board texture is the main axis.** The flop c-bet decision starts not from your hand's strength but from whether the board is static or dynamic. On dry, poorly-connected boards you can bet almost your entire range with a single size — since villain's range is weak too, your value threshold drops. As the board gets wetter, both your value-betting threshold and your bluff-betting threshold rise together: a "good but not nut" hand and a weak draw both fall to check. **Rule:** As the board gets wetter, your value AND bluff thresholds rise together — not just the value threshold.

- **The three-street test.** Even if you're the best hand right now on the flop, if your probability of continuing to bet value on the turn and river is low (a redraw-less medium-strength hand), it goes into your check-back range — building a big pot and then getting stuck with a hand you can't bet is worse than realizing the same equity inside a small pot. Test question: "if my card comes, will I be happy or sorry that I bet the flop?" If the answer is "doesn't really matter, I can't bet anyway," the hand is a check-back candidate. **Rule:** Choose your flop bet by "can this hand keep betting across three streets" — not "am I winning right now."

- **Sometimes check back the nuts, then represent them later.** If the board's nuts have a high probability of staying the nuts through the river (paired, monotone, dry ace-high), you need to check back the actual nuts on the flop as part of your range — otherwise your range becomes transparent and villain reads you and plays extra aggressively. There's a cost: you have to occasionally actually represent that checked-back nut hand by raising on the river, or you fall into a "never attacks after checking back" pattern and get read. **Rule:** The cost of checking back the nuts is sometimes actually representing them aggressively later — otherwise the balance stays fake.

- **Polarize on a static board.** This point is the paired/monotone exception to the "board texture is the main axis" point above — that point targets a disconnected-rainbow dry board (like K-8-3r), this one targets a different kind of staticness. The more static the board (paired, monotone, flush/straight impossible), the less your top tier gets caught by villain compared to your lower tiers — your lower tier should be less willing to build the pot, your top tier should bet big without hesitation. The practical result: on a static (paired/monotone) board, polarizing your range as "mostly check, top tier bets big" instead of "almost everyone bets small" pays better. **Rule:** As the board gets more static, split your range into two — mostly check, your strongest bets big; don't wander in the middle.

- **Which blocker, not "do I have one."** When picking a hand for a c-bet bluff, the question isn't just "do I have a blocker" but "which blocker." A card that blocks the top of villain's continuing range (nut draw, nut made hand) is worth far more than a low card that just blocks volume — blocking the top both reduces the hands villain calls/raises most often and eats less of your own hand's equity. **Rule:** When choosing a bluff, ask "which category of range does it block the top of" — not "do I have a blocker."

- **Pure strategy at extreme frequencies.** If a hand class's betting frequency on a board is very high or very low (example threshold ~70/30, *calibrate*), in practice bet your whole range or check your whole range on that board — the lost value is small, but you eliminate the risk of splitting your range wrong. This simplification is especially valuable across multiple tables or a long session; the real loss doesn't come from a frequency error, it comes from building a mixed range unevenly. **Rule:** If the betting frequency on a board is clearly high or clearly low, round it to pure bet or pure check on that board — wandering in the middle produces more mistakes.

- **In an unbalanceable spot, take villain at face value.** Some turn/river spots are excessively mixed even for a solver — in these kinds of spots, human opponents almost never actually play a mixed strategy; they're there with the single hand category that picks that line. Use the same logic on reading villain that you use to simplify your own strategy. **Rule:** In spots that are impossible for a human to balance, villain's bet is usually exactly the hand it represents — sharpen your read accordingly.

- **Betting eagerness depends on the tier above it.** A hand's eagerness to bet depends not just on its own strength but on which tier sits ABOVE it in your range. On a board where a flush is possible, a set's and a straight's eagerness to bet drops, because villain's folding range is already dead against a flush, and the remaining calling range is losing equity against a flush; on a dry board where a flush is impossible, the same set/straight bets much more eagerly, because now they're the top tier. **Rule:** A hand's eagerness to bet the flop is determined not by its own strength, but by the tier sitting above it in your range.

### 15.8 Defending against the c-bet: call, check-raise, float


OOP's toolkit against a c-bet — the continuing threshold, check-raise width, and float — is shaped less by individual hand strength than by board texture and villain's continuing range.

- **The defense threshold shifts with draw density.** Your continuing threshold against a c-bet depends not on your hand's absolute strength but on how many better continuing candidates your range has on that board. On a draw-rich board, since your range is full of open-enders and combo draws, scraps like pair + gutshot fold; on a draw-poor board, the same category is the backbone of your defense. The same logic applies to range advantage: the advantaged side plays the same categories more aggressively at the margin, the disadvantaged side gives up earlier. **Rule:** Don't ask "would I call with this hand," ask "how many continuing candidates better than me does this board give me"; the threshold shifts with the texture.

- **Board determines check-raise width.** The width of your (OOP) check-raise range depends far more on the board's texture than on your hand. On monotone and high-card paired boards (like K-K-x, A-A-x), the correct check-raise range shrinks to nearly zero — whatever the nuts are on the flop is generally still the nuts on the river, and IP mostly holds the range/nut advantage. On dry, one-way straight boards the range stays narrow: almost only nuts plus a few sets. On dynamic, draw-heavy two-tone boards and on low/medium-card paired boards, the range legitimately widens to include both value and bluffs. **Rule:** Decide whether to build a check-raise range from board texture first — dry/high-paired/monotone → narrow or zero, dynamic/draw-heavy → wide.

- **Slow-play your most invulnerable value.** Check-raising your most invulnerable, least-exploitable value hand is usually the wrong direction — these hands earn more via check-call, because a raise folds out the second-best hands that would pay you. The check-raise should come from medium-strength value that actually needs protection (second/third set) — but protection only works if the redraw is close to the nuts: the closer the redraw is to the nuts, the more legitimate the check-raise (i.e. the stack-off); if the redraw is weak or dominated, the same hand drops to check-call, and to fold if needed, because raising puts you into a bloated pot against exactly the villain holding the same hand with a better redraw. **Rule:** Slow-play your most invulnerable value hand; reserve the check-raise for medium-value hands that need protection but carry a near-nut redraw — don't raise with a dominated redraw, check-call instead.

- **Don't raise a hand you couldn't call with.** *(PLO-6-adapted — because in six-card almost every hand carries some backup equity nearly all the time, a genuine zero-equity bluff candidate is even rarer than in four-card; the rule therefore becomes more binding in PLO-6.)* When deciding which weak hand to pick for a bluff check-raise, first ask: "Could I also have played this hand as a check-call?" If the answer is no, it usually isn't a raise either — a healthy raising range comes almost entirely from the same pool as the calling range. Since almost every combination in a six-card hand carries some redraw, a hand "too weak to call but good enough to raise" is even rarer than in four-card. **Rule:** Think twice before bluff-raising a hand you couldn't call with — this is a tighter boundary in PLO-6 than in four-card.

- **Weigh the blocker against the continuing range.** When deciding which weak hand to pick for a check-raise bluff, ask not "which card blocks the hand villain would fold" but "which card blocks the hand villain would continue with (call/raise)." An extra suited card or extra combo in your hand is usually valuable not so much for raw equity as for narrowing villain's calling range. **Rule:** When choosing a bluff, weigh the blocker against villain's continuing range, not his folding range.

- **The float opportunity depends on board texture.** In a 3-bet pot, how often OOP checks on the flop (creating a float opportunity) shifts sharply with board texture, and a single question decides the axis: does the board fit OOP's (the 3-bettor's) range? Dry, high-card, static boards are the center of the 3-bet range (AAxx/KKxx/broadway-heavy) — OOP bets there with almost his entire range, and IP's float area narrows. Connected, low/medium-card boards hit the caller's rundowns; OOP checks far more often there, and that's where the float area actually grows. A flush-completing board is an example of the same mechanism, not an exception: OOP also bets often there, because as the 3-bettor he has an equity ceiling coming from higher suited-combo density — the board still fits OOP's range, so the float area still stays narrow. **Rule:** Set your expectation for the float area by how BADLY the board fits OOP's 3-bet range — wide on connected/low-card boards; narrow on dry-high and flush-completing boards.

### 15.8-EK The blocker picks value/bluff in a float, not raw strength


**Value/bluff selection starts with the blocker question first.** Which hand you pick as value and which as bluff in a float bet revolves almost entirely around the blocker: between two hands of the same raw strength, the one that blocks villain's nut/second-nut combination bets, the one that doesn't checks. This holds even at strong hands (a blocking top pair bets, a non-blocking top pair mostly checks) — raw strength alone isn't a sufficient filter. **Rule:** When choosing which of two equal-raw-strength hands to float, first ask "am I blocking the combination villain continues with" — put raw strength second.

### 15.8-EK-3 The bet-check-bet line has its own bluff budget


**The bet-check-bet line has its own bluff budget.** The number of bluffs you put into a bet-flop, check-turn, then attack-again (bet-check-bet) line is naturally low, because this line reads as if it comes from a narrow set of real hands ("I bet the flop but gave up on the turn"). If you stuff too many bluffs into this line, it loses credibility and an experienced villain calls or raises you often. **Rule:** Cap the number of bluffs in the bet-check-bet line by the number of combinations you actually play that line with for value too — the line carries its own budget, think of it separately from your overall bluff frequency.

### 15.8-EK-4 Spend the weak backdoor now, save the nut backdoor


**Spend the weak backdoor now, save the nut backdoor.** If you have two comparable backdoors (flush draws) in your hand — one going to the nuts, the other weak — spend the weak one as bluff fuel on the flop, and check back the one going to the nuts. Reason: when a turn/river comes that completes the flush, having genuine nut combinations in your check-back range makes that range credible and keeps villain from stacking off wide; spending the weak backdoor on the flop doesn't break this protection, because even if that card had completed, it would have been a second-class hand anyway. **Rule:** Save the backdoor that goes to the nuts of the two, burn the weak one now — don't lump the two together and pick randomly.

### 15.8-EK-5 On a paired board, trips: unblock first, then kicker


**On a paired board, trips: "unblock" first, then kicker.** *(plo6-adapted)* On a high paired board (K-K-x, Q-Q-x), when choosing which trips to bet, look at what it blocks before you look at the kicker's raw strength: the hands that will pay off a value bet are villain's continuing overpairs (AA/KK), so a kicker that does NOT hold those cards — i.e., does NOT block villain's continuing range — is better; if the kicker takes their call away from them, the bet gets paid off less. This is the value side of 15.8's blocker rule: with a bluff you want to block villain's continuing range, with value it's the opposite. In PLO-6 ask this question but don't ignore the kicker entirely: because the number of combinations per player rises with six cards, villain hits trips matching the board pair noticeably more often than in four-card, so the kicker war is a real risk. The kicker threshold required to bet *(calibrate)*. **Rule:** When choosing which trips to bet, first ask "does my kicker block villain's continuing AA/KK overpairs" — pick the one that doesn't; in PLO-6 also factor in the chance of a kicker war, don't ignore the kicker entirely.

### 15.8-EK-6 The rank of the board pair is inversely proportional to aggression


**The rank of the board pair is inversely proportional to aggression.** On paired boards (like 6-6-x, Q-Q-x), IP's float aggression is inversely proportional to the rank of the pair on the board: the lower the pair, the lower the chance villain holds trips matching that pair and the weaker their range, so IP can be aggressive with almost their entire range. As the pair gets higher, the chance villain connects to that card (especially from the AA/KK range that always continues preflop) rises, IP's betting frequency drops and selectivity increases. **Rule:** The lower the rank of the board pair, the wider you go on the float; as the rank rises, tighten up.

### 15.8-EK-7 Bet the hand under redraw threat, hold back when the threat is low


**Bet the hand under redraw threat, hold back when the threat is low.** On flush and straight boards, sets and two pair mostly get bet because they're under redraw threat from a straight or flush draw arriving on the turn — if it hits, their risk of dropping to "second class" is high. Completed flushes get held back more often on these boards, because they rarely get worse; a hand with low future-deterioration risk gets little return from betting it immediately, so it can sometimes be held back and evaluated on a later street. **Rule:** Bet now the hand that carries future redraw-losing risk; sometimes hold back the low-risk hand.

### 15.8-EK-8 Bet often against the population but don't go thin — the two don't go together


**Bet often against the population, but don't go thin — the two don't go together.** In float spots (especially on flush and low straight boards), theory recommends a very thin value bet, but real opponents, after floating the flop, generally check-call with a thicker and less balanced range. This means you can't go as thin on the river as theory suggests, but you can bet more often than theory on the flop/turn, because most opponents don't defend enough in these spots. **Rule:** In these spots, bet often against theory, but don't go as thin as theory implies on the river — don't apply both at once.

### 15.8-EK-9 With only a weak blocker, delay the bluff to a later street


**With only a weak blocker, delay the bluff to a later street.** For hands carrying only a single weak blocker (like a low flush card) with no other equity, it's generally cheaper to check the flop and delay the first bluff to the turn or river rather than bet immediately: if you lack the strength to carry two streets on the flop, rather than firing a bluff on one street and getting folded on, it's more reliable to enter a one-shot bluff on a later street where villain's range has narrowed further. **Rule:** With only a weak blocker and no extra equity, make the bluff on a later street, not on the flop.

### 15.9 The probe opportunity — when villain checks the flop, the pot is yours


When villain in position checks the flop instead of c-betting, he's partly capped his range; this is where OOP earns the right to bet on the turn (the "probe"). On a dynamic board (no straight, no flush, no pair — top set is nuts), play the probe with a single big size (around pot): these boards have a lot of draws to chase, and both value and semi-bluffs want to keep continuing expensively; adding a small size doesn't add anything meaningful to EV but makes execution harder. As the board's nut structure locks up (as a straight/flush/pair arrives), frequency and size change — choose the board class first, then the hand.

**Rule:** Start your probe strategy from the board class, not the hand: dynamic board = single big size; locked board = separate plan.

### 15.9-EK Not the sizing scheme — the hands you put into it


If you bet the same value-bluff range for a third-pot instead of a pot-size bet, the math collapses: the small bet gives villain massive pot odds, the same number of bluffs is now a huge overbluff, and villain punishes you by calling with everything. Different sizing schemes produce similar EV to each other; the real difference is putting the hand that size can carry into each size. Small size belongs to "combo" hands that dominate villain's folds; big size belongs to polarized value + bluffs.

**Rule:** Which sizing scheme you pick is secondary — you must rebuild each size's value threshold and bluff ratio to match that size.

### 15.9-EK-2 The probe threshold moves with the turn card


The same hand takes different action on a different turn card. If the turn is an overcard that hits the range of villain who checked the flop, your value threshold rises: a two-pair class you comfortably bet on a low turn drops to check-call on an overcard turn. If the turn hits your side (a low card that doesn't connect to villain's check-back), the threshold drops and frequency rises. The same logic applies on defense too: on overcard turns villain fires a delayed c-bet more often and generally with a smaller size — on those cards, after your check, you also lower your absolute-strength threshold and defend with weaker hands. What widens defense is frequency, not size: as size grows, the defense percentage narrows.

**Rule:** In a probe decision the first question isn't the hand: "whose range did this turn card strengthen?"

### 15.9-EK-3 The two-street value test — pot-pot math


The range that calls your bet is stronger than the range before the bet; after two big bets, the nut ratio in villain's continuing range is several times what it started at. This is why, on a board with straight potential, a set can't go pot-pot: once you've pot-bet the turn and pot-bet the river too, you're now mostly paying off a straight. Hands like this either take two streets with a small size or stop at one street with a big size. Before firing a bet, classify the hand by street: "how many streets of value can this hand get at what size?" The exact location of the thresholds moves with the format *(calibrate)*.

**Rule:** Define the value threshold by street: a hand that can't go pot-pot either shrinks its size or goes quiet after one street.

### 15.9-EK-4 The probe check-raise — dry nuts bet, nuts with a redraw check-raise


In a probe spot, split your strong hands in two: a set/two pair with no extra equity mostly bets (take its value now; bad rivers will demote the hand), a set with a redraw or combo draw goes to check-raise. The invisible benefit of this is range protection: if your check-raise range has no hand that catches the board pairing, you're capped on pairing rivers and villain crushes you by pot-betting every pairing card. Build your check-raise bluffs with the same symmetry: add pair+draw and non-flush high-card bluffs so you have coverage on every river after a check-raise.

**Rule:** Bet the dry nuts, check-raise the nuts with a redraw — and keep a hand in your check-raise range that catches pairing rivers.

### 15.9-EK-5 An out's value is whether it's bettable when it arrives


In a probe decision with a weak two pair, the raw out count misleads: most of your "improvement" outs are cards you can't bet even when they arrive — they lock up the board or hit villain's range better. The concrete question before betting: "on which river cards can I fire the second bet?" If the answer is roughly fewer than a handful of cards, the hand is a check-call, not a bet. This is the mirror image of 15.5 L1: there a turn plan was required for a call, here a river plan is required for a bet.

**Rule:** Justify your probe value bet with the number of bettable rivers — if you'll go quiet when the out arrives, go quiet now too.

### 15.9-EK-6 Flush + straight on the same board — play polar, the straight doesn't bet


If the board has both a flush and more than one straight, the probe goes polar: the value range is essentially flushes, bluffs line up around them, a single big size is enough. The straight has no reason to bet — it draws dead against the flush, and it already crushes everything except the flush and a higher straight, so the hands that pay it off are almost only hands that beat it. Two pair has no reason either. Your frequency drops and you go passive; that's not weakness, it's the geometry the board imposes. The small size only comes back if the flush arrived fresh on the turn AND you have the set/two pair advantage — this is the field version of range advantage and nut advantage not being the same thing.

**Rule:** On a flush + multi-straight board, probe = flushes + bluffs, single big size; the straight and two pair sit on check.

### 15.9-EK-7 The number of straights that arrive picks the bluff


If only one straight arrives on the turn, the board still plays dynamic: pick your bluffs by equity (draws), blocker is secondary — villain rarely holds that straight. If three straights arrive, the equation flips: your value range is straights, so your bluffs need to carry a straight blocker too. On rainbow and dry boards you have to dig for the bluff — a gutshot plus future river blockers is enough material; failing to find a bluff on these boards makes your range value-heavy and gives villain a free fold. Don't forget the single-street bluff either: betting the turn and giving up on a river where your blockers get worse is a legitimate line.

**Rule:** One straight = equity bluff, three straights = blocker bluff; on a dry board, dig for the bluff — if you can't find one, you're value-heavy.

### 15.9-EK-8 Your probe range is the mirror of your check range


If you move every medium-strength hand into the probe, your check range stays trash + trap-free; villain crushes this with a delayed c-bet and you're forced to fold after every check. When choosing your probe, write both lists at the same time: the ones that go to bet and the ones that stay on check and defend. Deliberately leave strong hands in the check range — both check-call and check-raise material; without them you get read as "check = weak."

**Rule:** When choosing your probe, look at what you're leaving on check: if no defensible hand remains in your check range, you're probing too much.

### 15.9-EK-9 Continue with almost everything against a small probe


When you're in position and face a small (around third-pot) probe, your fold threshold is very low: at the pot odds given, pair, gutshot, overcard — nearly all of it continues; the only hands that fold are the barest ones *(calibrate)*. Don't get uneasy asking "if I'm calling this wide, how will I ever punish a bluff" — a small bet is already an equity push, not a bluff, and you respond with almost all of your equity too. Against a big probe, though, it's normal to fold extra into OOP's polarized range — leave behind the blocker-poor bluff-catchers.

**Rule:** As probe size shrinks, defense widens: against a small bet, folding is the exception; against a big bet, it's discipline.

### 15.9-EK-10 Raising a probe narrows villain's range to the hands that beat you


Raising a probe with a draw looks appealing — you fold out better draws — but the flip side of the coin: the calling range is now concentrated in hands that beat you, and you've pushed villain's dominated bluffs out of the pot. Plain call is usually superior: it keeps bluffs in and carries your position to the river. Reserve the raise for two classes: (1) value + strong redraw, (2) a semi-bluff with a key blocker that hits villain's value range. Raise-folding a medium draw without a blocker is the composite of two mistakes: you overpay, and even in the best case you've chased off a bluff.

**Rule:** Against a probe, raise is the exception and call is the default: raise comes either with value plus a redraw, or with a key blocker.

### 15.9-EK-11 Against a polarized bet, the blocker chooses the call, not hand strength


When villain's line tells a polarized range (probe-pot, pot-pot and the like), most of what you hold is a bluff-catcher, and card selection — not absolute hand strength — decides which one you call with. The good call: a hand that blocks villain's value combos and doesn't block his bluff candidates. The worst call: a hand that blocks villain's bluffs — even though it feels like "I'm at the top of my range." A third condition on top of 15.5 L6's two: a bluff range exists, you beat it, AND you don't block it.

**Rule:** When choosing a bluff-catcher, the question isn't "how strong is my hand" but "which cards am I holding."

### 15.9-EK-12 A read that lowers the thin-value bar also widens the bluffs


The read "villain has no nut, I can raise with the second/third nut" is a half-decision on its own: if you widen the value range while leaving the bluff range fixed, your line reads value-heavy and only the hands that beat you pay you off. The read applies symmetrically — if it licenses thin value, it should also raise your bluff count in the same spot. The reverse also holds: a single showdown doesn't overturn a read. If villain shows up bluffing with his best bluff combo, that doesn't mean "so he bluffs" — it means "so he bluffs with the right combos"; your underbluff read stands.

**Rule:** Every read that lowers the value threshold should also raise the bluff count; don't change a read on a single showdown.

### 15.9-EK-13 The over-fold insurance — not a hundred percent, roughly four-fifths


Even when you read "villain can't have a bluff in this spot," don't fold your entire range; keep the top slice with the best blockers in the calling range and settle for folding roughly four-fifths *(calibrate)*. Two reasons: if the read is wrong, your loss stays capped; and the hands you call test the read by reaching showdown — a player who always folds never learns he was wrong. Over a long session, that information is itself EV.

**Rule:** Even on an underbluff read, keep your range's best calls alive: cap the over-fold, and buy the information.

### 15.9-EK-14 If you only lose to a check-raise, bet — but lower the size


When villain checks on the river after a probe, two questions: am I beating his check-call range, or do I only lose to a check-raise? A hand that beats all of his check-calls is usually a bet — checking out of fear of "getting raised" is giving away free equity from the hands that would pay you. The second rule balances this: if the range you're value-betting is wider than the range that can call that same bet, you're inviting villain to slow-play and check-raise you; in these spots lower the size (half pot) — but not to deter him, for the cost: a small bet gets check-raised MORE OFTEN (bluff-raises get cheap, and a small size already announces a wide/capped range), but when the raise comes you pay less for it and can continue with more of your range.

**Rule:** If you beat the check-calls, bet; but if your value range is wider than the calling range, shrink the size — a small bet gets raised more often, but the raise punishes you less when it comes.

### 15.10 Resolve the mix with categories, not with a dice roll


If the solver mixes a hand class 60% bet / 40% check on the turn, don't try to imitate that combo by combo — you won't hit the frequency and you'll burn bandwidth at the table. Split the class by side-equity instead: route the nut-redraw versions (nut flush draw, nut open-ender) to check and check-raise, and bet the naked or non-nut-draw versions. You'll land on roughly the right frequency on your own, the class is represented on both lines, and you'll know in one second at the table what each combo is doing. The same pattern works across probe, delayed c-bet, and check-raise ranges alike.

**Rule:** Turn the frequency mix into a category: the nut-redraw slice checks (-raises), the rest bets — no dice, no memorization.

### 15.10-EK Pick one size, don't try to balance two sizes at the table


Even when there's theoretically a small EV difference between two different bet sizes in a turn/river spot (e.g. half pot + pot), executing both at once without confusing which hand goes to which size is hard in practice and carries the risk of accidentally exposing your hand. Picking one size costs a small theoretical EV loss but frees your mental capacity for hand reading and villain profiling. If the usage ratio of the two sizes in a spot is very lopsided (one is only a small slice of the other), dropping the minority size entirely and moving to one size is a reasonable simplification.

**Rule:** Instead of trying to balance two sizes in real time at the moment of decision, assign the spot a single default size in advance.

### 15.10-EK-2 A draw-heavy board raises the threshold, not the need for protection


As a board gets more draw-heavy, the extra equity that hands like a weak two pair or a medium one pair need to bet goes up — not down. The common reflex is "the board is wet, I need to protect my hand, bet"; but as the board gets more draw-heavy, villain's range also polarizes toward the nuts or a strong draw, and your medium-quality hand's relative edge against a bet gets thinner. In six-card PLO this effect is more pronounced than in four-card, because more combinations reach a nut or a nut draw.

**Rule:** As the board gets more draw-heavy, the "medium-good" hand's check range widens and its betting range narrows — notice that this moves opposite to the protection reflex.

### 15.10-EK-3 The purpose of slow-play isn't catching a personal bluff, it's protecting your range


The real function of leaving a portion of a hand class's strong combos to check-back isn't "catching a bluff on the river" — it's stopping villain from making a thin value-raise or value-bet on later streets with combos BELOW that hand class. The combo that checks back protects your entire range, not just itself. This is why, when splitting a class into bet/check, it's more correct to route to check not the STRONGEST combos, but the ones that GAIN THE LEAST from betting (that lose the least EV when checked) — this way the value density of the betting range is preserved.

**Rule:** Choose the combo that checks back by the question "which one gains the least from betting," not "which one is strongest."

### 15.10-EK-4 Find the thin-value threshold by counting, not by feel


The practical way to tell whether a borderline hand (weak two pair, thin trips, etc.) can be value-bet for a given size is to roughly count how many combinations beat you in the range villain calls that size with — what matters is your relative ranking within villain's CALLING range, not absolute hand strength. As the size shrinks, villain calls wider, and this threshold gets more sensitive; the exact percentages vary by table *(calibrate)*, but the method is fixed: first list what villain calls that size with, then see where your own hand ranks in that list.

**Rule:** Make the thin-value decision with the question "where do I rank in villain's range that calls this size," not "is my hand strong."

### 15.10-EK-5 Range advantage changes with street order — a flop read doesn't carry over automatically


When the same board texture completes in a different order (did the nut arrive on the turn, or the river), which side holds the range/nut advantage can change fundamentally — the read of who's ahead on the flop doesn't carry over automatically to the next street, it has to be recalculated on every street. In six-card PLO this swing is more violent than in four-card: a completing card spawns far more new nut combinations in both sides' ranges, because the number of two-card combinations selectable out of six cards is many times greater than out of four. This is why carrying the assumption "I was ahead on the flop" into the turn/river is a particularly risky habit in six-card.

**Rule:** Ask "who holds the range advantage right now" from scratch on every new card — even the ranking itself can flip from one street to the next.

### 15.10-EK-6 Choose the size by which tier you're ahead in, not your range's average strength


The choice of bet size shouldn't rest only on "is my range strong overall" but on "in WHICH TIER of my range do I actually have the edge." If you're even with villain at the top, over the nuts, but you have a big edge in the middle tier (one pair, weak two pair), choosing a small-single size instead of a big/polarized size protects that middle tier and converts it into value; going to a big size only picks the size the nuts want and fails to put the middle tier's edge on the table. In six-card PLO the nut tier is already more crowded than in four-card, so skipping the question "which tier am I actually ahead in" and going straight to a big size is a mistake carried over from four-card habit.

**Rule:** Choose the size by which tier you actually have the edge in, not your range's average strength.

### 15.11 On an unexpected line, which hand is really there


If villain takes an "unexpected" aggressive line (like a bet in a spot that theoretically has no lead/check-raise range), first set your own hand aside and ask "which hand class actually WANTS to take this line." The answer is almost always one of two extremes: either pure air (a hand that sees it can't win anything and says "let me try") or one narrow value combo; the middle tier (medium-strength hands that could check-raise but didn't) is nearly empty, because those hands already prefer the normal line (check-raise, bet value twice).

**Rule:** When you see villain take a line he "shouldn't" take, don't count your own hand — count the hand classes that would actually choose that line; if the count is low, tighten your fold threshold.

### 15.11-EK Value grows, bluffs don't — the river underbluff mechanism


When a river card completes a large part of the board (multiple straights/flushes arrive), intuition says "now everyone bluffs," but the reality is usually the opposite. The reason: the value range grows proportionally off that card, but the number of BLUFF candidates doesn't grow at the same rate — being a bluff candidate requires both "my hand is now worthless" and "I must have plausibly arrived at this hand on earlier streets" at once, and that's a rare intersection. The result: the value:bluff ratio that pot odds demand can't be hit, and the spot is structurally underbluffed. In six-card the combination pool is richer, so this squeeze may ease somewhat, but the mechanism stays the same *(calibrate)*.

**Rule:** Suppress the reflex to raise your bluffing frequency on a "lots completed" river — count separately whether the value range grew proportionally and whether the bluff candidate count ACTUALLY grew.

### 15.11-EK-2 When linearity collapses, the blocker takes over


There are two methods for choosing a river bluff: linearity ("I'm at the bottom of my range, I have no showdown value, so I bluff") and blocker selection ("which combo cuts villain's calling range the most"). Linearity only works if it's actually possible for villain to reach this river with a hand that has no showdown value; if villain almost always arrives with at least something like a pair/gutshot, linear logic collapses and the selection must shift entirely to the blocker. In six-card games even the bottom of the range carries showdown value more often, so blocker-first selection is needed more often than in four-card.

**Rule:** Before choosing a bluff, ask: "Can villain actually arrive at this river with a hand that has zero showdown value?" If the answer is no, make the blocker the selection criterion instead of the bottom of the range.

### 15.11-EK-3 Calling the turn while banking on a future blocker — the fallacy test


On the flop, a blocker can justify a call because there are still multiple streets ahead and that blocker carries the value of a future bluffing opportunity. On the turn (with only one card left) this logic collapses: think of the hand as if it did NOT hold the blocker card — if the call is a clear fold without it, it's a fold with the blocker too. The blocker's "maybe I'll bluff with this on the river" potential is not big enough to make the turn call +EV on its own; this distinction is even sharper in the six-card game, because a single card's blocking power holds a smaller share of a fifteen-combo range than it does in the four-card game.

**Rule:** On a call decision with only one street left, ask "would I still call without this blocker" — if no, fold with the blocker too.

### 15.11-EK-4 Resisting the trap urge with a no-redraw nut


When you catch the nuts with no redraw on the turn (e.g. a bare straight, no additional draw), the urge to "set a trap — play small and lure villain into an aggressive mistake" is tempting, but it's usually wrong. Reason: other parts of your range already hold check-raise/slowplay hands — this hand doesn't need to sacrifice itself to fill that gap — and since there's no redraw, there's nothing extra to win on a later street. But don't skip the PLO-6 note: the question here isn't "does villain pay now or later" — the real risk branch is a raise from a villain holding the same straight WITH a redraw, and the loss on that branch is asymmetric (a chop at best, the wrong side of a freeroll at worst). So don't trap — bet, but with a size that doesn't bloat the pot to stack-off dimensions; if a raise comes and you have no redraw, don't continue (15.5-L4: "in the six-card game, don't get stacks deep with a bare nut straight and no redraw on the turn"; 15.6-(6): "a no-redraw nut on the turn = call, a redraw is required to raise").

**Rule:** With a no-redraw nut plus a check-raise range that's already stocked elsewhere, don't try to trap — bet, but not at stack-off size; if raised with no redraw, don't continue. Find your trapping inventory somewhere else in your range.

### 15.11-EK-5 Sizing sets next street's blocker window


Choosing a small size on the turn isn't just "take less risk today" — by keeping the SPR high, it keeps blocker-based maneuvering (thin value, selective bluffs) alive on the river. If you bet big on the turn and drop the SPR, the river is usually left with jam/fold as the only option, and the fine-tuning power of blockers is lost. The decision to "bet small with this hand across two streets" is often the strategic choice that "lets my range's nuts still maneuver on the river," not something explained only by the strength of the hand in front of you right now.

**Rule:** When choosing your turn size, look not only at today's hand but also at the question "how much blocker-usable room does this size leave me on the river."

### 15.11-EK-6 On the river, "what percent do I beat" picks the bet


On the river against a pot bet, villain continues with roughly half his range; the arithmetic of this means a pot-size value bet needs, as a baseline, to beat roughly three-quarters of villain's range — in practice raise risk and blockers squeeze that threshold even tighter (calibrate). Work the count backwards: starting from the top class and counting down, ask "what percent, in total, are the hands that beat me?"; a rough estimate is enough, the point is not to fire pot far past the threshold. As you approach the threshold, a small size becomes higher-EV than pot; but if you never use a small size on this line, stay at pot so as not to give away your hand — if the hand can still bet at all, the size alone doesn't shrink. In the six-card game villain reaches the nuts far more often, so the same absolute hand strength loses more often; recalibrate the thresholds against PLO-6 frequencies.

**Rule:** Bet big when comfortably ahead, shrink as you approach the threshold (if that size exists in your scheme), check once you've crossed it.

### 15.11-EK-7 On a checked-down river, IP picks bluffs from the bottom of its range, OOP from blockers


On the river after a checked-down hand or a missed turn c-bet, position changes the bluff-selection logic. The in-position player generally picks bluffs from the VERY BOTTOM of his range (the hand with the lowest absolute showdown value), because the OOP range facing him is wide and mostly air — folding out a wide range in bulk is the priority. OOP, on the other hand, picks bluffs by blocker quality, because real showdown value sits inside his check-call range, and pushing out villain's specific value combos requires the right blocker. When this distinction is missed, OOP also picks bluffs by IP logic (by absolute hand strength alone), and a hand that holds a blocker gets wasted.

**Rule:** On an IP river bluff, ask "which is my weakest hand"; on an OOP river bluff, ask "which is my best blocker" — the two are not the same question.

### 15.11-EK-8 "Never bluffs" is a warning for a bluff-raise, not a reason


A check-raise bluff's profitability doesn't come from beating villain's bluffs — it comes from being able to fold villain's VALUE hand. The logic "villain never bluffs here, so I can't call, might as well turn it into a raise" backfires: if villain genuinely never bluffs, this is a WORSE spot for a bluff-raise — folding out hands that were already going to lose to you (his bluffs) contributes nothing to you, all of your gain depends on being able to break his real value hand, and a villain who "never bluffs" usually doesn't let go of his value either.

**Rule:** Make the bluff-raise decision based on whether villain will fold his value hand, not on how often villain bluffs.

### 15.11-EK-9 When splitting a hand class, write the blocker combo to check, the blocker-less combo to bet


When splitting a borderline hand class in two (bet or check) — here "blocker" means a card that removes combos from villain's VALUE/calling range — putting the combos that carry that blocker into the CHECK (check-call) range and the ones without it into the BET range is a balancing shortcut. The logic looks backwards but works: the blocker-holding combo is a better bluff-catcher in a check-call, because you're the one holding villain's value combos — when he bets, the value share left in his range shrinks and the bluff share grows relatively. (The gain doesn't come from villain "playing wider" against your specific combo; villain doesn't know which combo you hold, the gain comes purely from the composition of his range.) The combo without the blocker gets paid more often, since it unblocks villain's calling range — write that one to bet; the rationale is calling frequency, not fold-inducing power. This split applies within a made-hand class where the distinction has already been made; bluff selection is governed by 15.11-EK-7 / EK-12.

**Rule:** When splitting the same made-hand class, write the combo that blocks villain's value/calling range to check-call (a better bluff-catcher), and the one that doesn't to bet (gets paid more often) — not the intuitive opposite.

### 15.11-EK-10 A value-bet blocker blocks villain's hand; a bluff-raise blocker unblocks villain's bluff


When value betting, you want to block the combos in villain's range that beat/chop you. But when bluff-raising (a check-raise bluff), the logic reverses: block villain's VALUE combos, but where possible UNBLOCK villain's BLUFF combos — because blocking a bluff of his that was already going to fold gains you nothing, it only reduces the chance that more folding bluff combos remain in his hand. The real profit comes from getting him to fold the value combos he holds.

**Rule:** On a value bet, block the hands that beat you; on a bluff-raise, block villain's value but leave his bluffs unblocked.

### 15.11-EK-11 River donk architecture — a test of IP's value comfort


The basic question that determines whether OOP (out of position) leads (donks) into the river isn't "is my hand strong" — it's "can IP (in position), on this river, still comfortably fire a value bet with his TYPICAL value hands (a set, top pair, etc.)?" If IP can still bet, OOP doesn't need to lead — check-call is enough, because value will come from the other side anyway. But if the river card DEVALUES IP's value hands (a third flush card arrives, or the board pairs and the set advantage shifts to OOP), IP becomes reluctant to fire his own value, and it's exactly in that gap that OOP's lead range gains EV.

**Rule:** Build your river lead range not on your own hand strength, but on whether that river still lets IP fire his typical value hands — if IP is still comfortable, there's no need to lead.

### 15.11-EK-12 The blocker-direction test carries over to a river bet/raise


The test used for a preflop squeeze — "does this card remove combos from villain's CALL range or his FOLD range" — carries over identically to picking a river bet/raise. If the card in a bluff/raise candidate's hand removes hands that villain was already going to fold (his FOLD range), that card doesn't strengthen the bluff — it just grows the paying share left in his range. The card you actually want is one that removes combos from villain's PAYING/value range; ask this before asking "which flush/straight am I blocking."

**Rule:** When picking a river bluff/raise, first ask "does this blocker remove combos from villain's FOLD or his CALL range" — removing from his call strengthens the bluff, removing from his fold weakens it.

### 15.12 Why multiway betting frequency and size shrink


In multiway pots, betting frequency and size both shrink because as the number of villains rises, the hand-strength threshold required for a "profitable bet" rises too — with more ranges simultaneously able to beat you, the odds that an average hand is good enough to bet drop. A small size partly solves this: as size shrinks, it becomes possible for weaker hands to fire the bet +EV too, and that raises betting FREQUENCY — high frequency, in turn, puts every villain in between into a "sandwich" at the same time and lets you collect cheap equity. Result: in multiway pots, a small-size + high-frequency combination generally collects more of the pot share than big-size + low-frequency.

**Rule:** Lowering your bet size in multiway isn't weakness — it's the tool for raising frequency and squeezing every villain at once; think small-and-often instead of big-and-rare.

### 15.12-EK The sandwich effect — individual folds rise, total fold equity falls


In multiway pots, the first player to act's bet/raise forces every villain in between to fold under threat from both sides at once — the one BEHIND him (who hasn't decided yet) and the one IN FRONT of him (who has already acted but is still committed to the pot) — this is called the sandwich effect. That's why EACH VILLAIN INDIVIDUALLY folds more often: because two villains share the responsibility of folding each other out, even a hand that would call comfortably heads-up can fall below the fold threshold in a multiway pot. But this does NOT mean "bluff more in multiway": for the bluff to hold, ALL of them have to fold AT THE SAME TIME, so total fold equity is LOWER than it is heads-up (two villains × 60% individual fold ≈ 36% total). Because equities run close in PLO (15.0: "the fold-equity doctrine weakens in PLO"), the gap widens further. What the sandwich effect gives you isn't bluffing frequency, it's bluff SELECTIVITY: who (the most squeezed villain, with the narrowest continuing range) to pressure and with what size. Range advantage and nut advantage are separate things here too.

**Rule:** When acting first in a multiway pot, calculate the PRODUCT of individual fold frequencies, not the frequencies themselves — total fold equity is lower than heads-up; the sandwich is a reason to choose who/what size to pressure, not to raise bluffing frequency.

### 15.13 In a 3-bet multiway pot, the player in the middle bets least


When a preflop 3-bet gets two (or more) callers, postflop the first player to act generally has a WIDE check range: donk-leads are close to nonexistent, medium-strength hands check without bloating the pot, and the nuts are held back there for a check-raise too. So that check isn't a weakness signal — it's nearly the entire range. Against this wide check, the player caught IN THE MIDDLE (the 3-bettor, with a caller still behind him) is structurally the one who bets least: the range in front of him is holding a check-raise inside it, the caller behind him is still live, and since a 3-bet pot already runs at a low SPR (15.2: "3-bet pot → SPR≤1"), bloating the pot with a medium hand commits him against his own interest — in PLO-6 a medium hand doesn't put chips into a bloated pot (15.4). The bet mostly comes from whoever acts last (in position).

**Rule:** In a 3-bet multiway pot, if you're the player "in the middle," by default you're the one who bets least — the check in front of you isn't weakness (the whole range is in there, check-raise included); demand an extra reason to bet (blocker + equity), "I 3-bet" alone isn't enough.

### 15.13-EK Sandwich-call danger — +EV heads-up, -EV multiway


A call against a villain's shove that computes as +EV, even slim +EV, heads-up is a completely different decision while a third player is still to act. The reason is NOT chip asymmetry: the amount you're risking is the same call on either branch, and if the third player also comes in, his chips get added to the pot, so you win MORE when you win, not less. The reason is range: the villain who overcalls you has a range that is narrow, strong, and correlated with yours (in PLO you're often drawing to the same nuts, and on top of that your cards remove each other's outs), meaning your equity share in the three-way pot drops below even the ~1/3 threshold that's already lowered by dead money. "Minority equity" alone isn't disqualifying — roughly 33% with roughly equal contribution is enough in a three-way pot; what disqualifies it is the correlated-strong overcall range. In a tournament, bustout/ICM adds the real asymmetry on top of this: if you're eliminated, you lose the rest of your run too. That's why, while a third player is still to act, the call/shove threshold has to be held noticeably tighter than the heads-up threshold.

**Rule:** When deciding whether to call a shove, ask "is a third player still going to act" before the equity math — if he's live, tighten the threshold noticeably from the heads-up one; the reason isn't the chips you're risking, it's that the overcall range is narrow/strong and correlated with yours, plus bustout/ICM.

### 15.13-EK-2 In a dry side pot, don't hide the nuts — play big


When a villain is all-in and a "dry" (no extra money added) side pot forms between the remaining two players, playing slow (setting a trap) with the nut hand at a low SPR generally doesn't work. Reason: for the side-pot villain to beat you with a bluff, he has to get past both the all-in player's hand and your hand at the same time — a double condition that rarely holds up on a single bluffing line. So in a dry side pot at low SPR, playing big generally brings more EV than hiding the nuts; a hiding plan only makes sense if the SPR is high and the side-pot villain genuinely has room to maneuver.

**Rule:** In a dry side pot at low SPR, don't hide the nuts — since villain's hand has to get past two hands at once to beat you, playing big is almost always better.

*Root-error link: B0 c.10 ("bare AA in PLO = one pair") extended to draws and depth — a pot bloated with a non-nut hand is the PLO form of the root error.*

