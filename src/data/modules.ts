// Modules — structured by hand. The TABLE content of slides comes from the curriculum,
// content/poker_cep_kitabi_v4.md; no poker VALUES are hand-written here.
// narration = coach commentary (NOT a read-aloud of the slide): conversational, second person,
// 4-8 minutes per module. Content comes from the doc; only recast into spoken language.

import type { Visual } from "../components/SlideVisual";

export interface SlideTableRef {
  section: string;
  sub?: string;
  caption?: string;
}

export interface Slide {
  title: string;
  bullets?: string[];
  table?: SlideTableRef;
  rangeMatrix?: boolean;
  ruleBox?: string;
  visuals?: Visual[]; // declarative visuals (card/board/range/video)
  narration: string;
}

export interface Module {
  id: string;
  title: string;
  chapter: string;
  minutes: number;
  slides: Slide[];
}

export const modules: Module[] = [
  {
    id: "M1",
    title: "The root error",
    chapter: "Chapter 0 + Chapter 7",
    minutes: 6,
    slides: [
      {
        title: "What the root error is",
        bullets: [
          "One pair in a bloated pot is a bluff-catcher — AA included.",
          "If no worse hand will pay you off on the river, jamming is not value.",
          "Chops don't jam.",
        ],
        ruleBox:
          "One pair in a bloated pot is a bluff-catcher — AA included. That's your root error; all three bustouts came from it.",
        visuals: [{ kind: "hand", cards: "AA", label: "One pair — AA included" }],
        narration:
          "This module revolves around a single mistake, because the thing that busted you three times was always the same. We call it the root error. Here's its sentence: one pair, in a bloated pot, is a bluff-catcher — aces included. Meaning: when there's a lot of money in the pot and all you hold is one pair, that hand is no longer played for value — it's played only to catch your opponent's bluffs. Burn this in: holding aces doesn't automatically make your hand a monster in a bloated pot; the bigger the pot, the more likely your opponent has you beat. The second sentence is the river leg of the same idea: if no hand worse than yours will pay you off on the river, a jam — an all-in — is not value. A value bet, by definition, gets a worse hand to pay you; if no worse hand will call, your all-in only invites the strong hands — the ones that beat you. The third sentence is a reading shortcut: chops don't jam. When the board plays toward a split and your opponent moves all-in, that player has already removed the chopping hand from their range — the hand they're jamming isn't the chop, it's the hand that beats you. Now let's watch how these three sentences lose money at the table, in three real cases.",
      },
      {
        title: "Case 1 — A4s river call",
        bullets: [
          "$50K High Roller, WSOP 2026.",
          "You read the chop mechanic correctly — and skipped one filter.",
          "Chops don't jam — seeing the mechanic isn't enough.",
        ],
        visuals: [{ kind: "hand", cards: "A4s", label: "Your hand" }],
        narration:
          "The first case: a fifty-thousand-dollar high roller. The board is open to a split — the chop mechanic is on the table. And you actually read that mechanic correctly — you spotted the possibility of a chop. But you skipped one filter, made the hero call, and paid it off. The filter you skipped: chops don't jam. If your opponent moved all-in on you, they've removed the chopping hand from their range — nobody shoves a whole stack with a hand that splits, because splitting just means getting your money back; it isn't worth the risk. So their jam isn't coming from the chopping hand — it's coming from a hand that beats you. The rule that falls out of this: seeing a mechanic correctly is not enough on its own. 'The board can chop' is half the job. The other half: is your opponent's move consistent with that mechanic? If a chop is live and your opponent checks, the chop is meaningful. But if a chop is live and your opponent jams, the jam itself is telling you the chop has left the table. Read the move together with the mechanic.",
      },
      {
        title: "Case 2 — KTo top pair check-raise all-in",
        bullets: [
          "$10K 6-Handed. Wet board, check-raise all-in with top pair.",
          "Villain called with the QQ they had flatted.",
          "The right line: check-call, then reassess.",
        ],
        visuals: [
          { kind: "hand", cards: "KTo", label: "Your hand (top pair)" },
          { kind: "hand", cards: "QQ", label: "Villain (flatted)" },
        ],
        narration:
          "The second case: a ten-thousand-dollar six-handed event. A wet board — a texture full of connections and draws. You have top pair — say you flopped a king with king-ten — and you check-raised all-in. Villain paid you off with the queens they had flatted preflop, and you busted. What was the right play? Check-call, then reassess street by street. Top pair on a wet board is not a big-pot starter. Why? Because when you push the whole stack in, the range that calls you is better than you. Weak hands, bluffs, and draws don't call an all-in — they fold; only sets, bigger pairs, and completed hands pay you. So the moment you're the one starting the stack-off, you've turned your hand into a bluff-catcher while playing it as if it were value. The rule: one pair is not stack-off fuel. The road to a bloated pot quietly demotes your hand's class; you're still looking at top pair, but as the pot has grown, that hand has become a bluff-catcher. Paying one off is one thing; starting it is another.",
      },
      {
        title: "Case 3 — AA river jam",
        bullets: [
          "PokerOK $108 Mystery Bounty, July 2026.",
          "Board 2-4-5, river 6. Your hand AA, villain 66.",
          "Flop and turn value were right — the jam on the bad river 6 was wrong.",
        ],
        visuals: [
          {
            kind: "replay",
            replay: {
              hero: "AA",
              villain: "66",
              heroLabel: "You (AA)",
              villainLabel: "Villain (66)",
              streets: [
                {
                  name: "Preflop",
                  note: "AA vs 66 — you're way ahead.",
                },
                {
                  name: "Flop",
                  add: "2c 4d 5s",
                  note: "Flop 2-4-5. AA is still an overpair and ahead; flop value is right.",
                },
                {
                  name: "Turn",
                  add: "??",
                  note: "Turn (not specified in the book). Keep taking value — the play is right up to here.",
                },
                {
                  name: "River",
                  add: "6h",
                  note: "River 6 → 66 is now a SET. No worse hand pays you off; the jam is NOT value. The root error is right here: jamming an overpair like value on a bad river.",
                },
              ],
            },
          },
        ],
        narration:
          "The third case is the freshest and the most instructive. Board: two, four, five. You hold aces, the strongest starting hand in the game. You value bet the flop — correct. You value bet the turn — also correct, because up to that point there was still someone with sevens, eights, nines — worse pairs, weaker hands — ready to pay you. Then the river came a six. Now look at that board carefully: two, four, five, and now a six. That is a bad river, because on that card no hand worse than yours will pay you. Think it through: anyone holding a three just completed the straight and beats you; sets beat you — and in fact villain rivered a set with pocket sixes. Every hand worse than yours — every hand that could have paid you — is either checking it down or has overtaken you on that river. You jammed the remaining stack anyway, and villain paid you off with the sixes that made a set on the river. The mistake was the all-in itself. There was no value target. The rule is crisp: if no worse hand will pay you off on the river, jamming is not value. On that bad river your hand still looks good, but its value has run out; in a small pot you check-call and reach showdown cheap, in a big pot you check-fold. Letting go of aces feels hard — but this is exactly the spot where they have to be let go.",
      },
      {
        title: "One rule for all three",
        bullets: [
          "All three cases share the same root error: misclassifying one pair in a bloated/multiway pot.",
          "Overpair on a bad river: check-call a small pot, check-fold a big one.",
        ],
        ruleBox:
          "If no worse hand will pay you off on the river, jamming is not value. Overpair on a bad river: check-call a small pot, check-fold a big one.",
        narration:
          "Look at the three cases side by side: different tournaments, different hands, different boards — but one root error. One pair — aces included — misclassified in a bloated or multiway pot. Each time, the hand looked strong to you; but as the pot grew, it turned into a bluff-catcher, and you kept playing it like value. The sentence to take to the table: if no hand worse than yours will pay you off on the river, jamming is not value. And its practical form: with an overpair on a bad river, check-call a small pot and see showdown cheap; check-fold a big one. Internalize this module and you will never replay the three hands that busted you. In the modules ahead we'll see where this root error is born — in preflop 3-bet ranges — and how to prevent it.",
      },
    ],
  },
  {
    id: "M2",
    title: "Bluff selection & board ownership",
    chapter: "Chapter 1",
    minutes: 6,
    slides: [
      {
        title: "The three criteria",
        table: {
          section: "Chapter 1",
          sub: "1.1",
          caption: "If one is missing, it's not a bluff — just chips you're losing.",
        },
        narration:
          "Bluffing is not a random act of courage; three criteria make a hand bluff fuel, and a hand has to pass all three at once. First, the blocker. Does a card in your hand take your opponent's strongest hands away from them? Say you hold the ace of spades: you're blocking the nut spade flush, shrinking the chance they make their strongest hand. Second, connection. Does the hand touch the board — can it improve? An open-ended straight draw or a flush draw is real connection; two high cards just hanging in the air are not. Third, board ownership. Whose range does this board hit? A ten-nine-eight texture usually belongs to the defender; a dry ace-king-seven texture belongs to the opener. Now the critical point: if even one of these three criteria is missing, your hand is not a bluff — it's just chips you're tossing into the pot to lose. So before you start a bluff, ask all three questions: am I blocking, am I connecting, and is this board mine?",
      },
      {
        title: "The J2s lesson — the suited trap",
        bullets: [
          "Being suited doesn't make a hand bluff fuel.",
          "What you're after isn't suited: it's connected and blocking.",
          "The reverse trap in offsuit broadways: KJo, QJo — blockers, no connection.",
        ],
        visuals: [{ kind: "hand", cards: "J2s KJo QJo", label: "NOT bluff fuel" }],
        narration:
          "Now for a very common trap: the suited trap. People see a hand is suited and assume it's automatically fit to bluff with. Take jack-deuce suited. Does it have blocker value? No — it takes nobody's nuts away; a deuce and a jack block no one's strong hands. Does it connect? Barely — there are nine ranks of daylight between the two cards, so making a proper straight draw is very hard. And if the flush does come in? Even then it carries bottom-flush risk — you can end up paying off a higher flush. So the word suited is fooling you; what you're after isn't suited, it's connected and blocking. The same trap runs in reverse with offsuit broadway hands. King-jack offsuit, queen-jack offsuit — these have blocker value, because they hold big cards, but they have no connection; they don't sit properly on boards. They're not bluff fuel either. The lesson: neither being suited nor holding big cards makes a hand bluff-worthy on its own; demand all three criteria together.",
      },
      {
        title: "Who owns the board",
        bullets: [
          "Check-raise bluffs: on boards that hit YOUR range (T98, 765, J-middle).",
          "On villain's board (A-K high and dry): draws call quietly.",
        ],
        ruleBox:
          "Check-raise bluffs belong on boards that hit YOUR range. On boards that hit villain's range (A-K high and dry), draws call quietly.",
        visuals: [
          { kind: "board", cards: "Ts 9d 8c", label: "Your board (T98) — check-raise bluff" },
          { kind: "board", cards: "7h 6s 5c", label: "Your board (765)" },
          { kind: "board", cards: "Ah Kd 7c", label: "Villain's board (A-K dry) — call" },
        ],
        narration:
          "Say you hold a hand that passes all three criteria. You can still pick the wrong move, because the move is decided by who owns the board. The critical split: check-raise bluffs are made on boards that hit your range — ten-nine-eight, seven-six-five, connected textures with a jack in the middle. Those boards fit the defender's story, so your check-raise is believable. But if the board hits your opponent's range — a high, dry ace-king-seven, say — your draws call quietly there; they don't check-raise. Let's see why in numbers. An ace-king-seven board smashes the cutoff's opening range: ace-king, ace-queen, ace-jack, king-queen, ace-seven suited, pocket sevens, aces, kings — all of it connects with this board. And how many ace-king combos live in your big blind defense range? Very few. So when you check-raise this board, villain thinks, 'this guy can hardly have ace-king here' — your credibility is low. The result: you can't fold out the good hands, they call; you only fold out the air you were beating anyway. You've risked your gutshot in a bloated pot just to win air's small pot. Calling, instead, solves everything: you see a cheap turn; if a ten arrives, you win a whole stack with a hidden straight; if a spade arrives, you unlock the option to turn aggressive; and if it bricks, you get out of the way cheap. Dry, high, villain's board: don't raise — call.",
      },
      {
        title: "Who not to bluff",
        bullets: [
          "Rec / station: doesn't fold — think value bet instead.",
          "Short stack: in auto-call territory.",
          "Committed player: folding is psychologically shut off.",
          "Big stack cruising the bubble: pays you off for free.",
        ],
        narration:
          "Finally: even with the right hand and the right board, some opponents should never be bluffed. First, the rec or station type: this player doesn't fold, so against them think value bet, not bluff — get paid when your hand is good, and don't bother when it isn't. Second, the short stack: the call price is small next to their stack, so they sit in auto-call territory; your bluff won't move them. Third, the committed player: past a certain point, folding shuts off psychologically for them — they pay you off no matter what you do. And fourth, the big stack cruising through the bubble: they can pay you off with impunity, because even if they lose, they don't fall out of the tournament — calling you costs them nothing. A bluff needs the right opponent on top of the right hand. A perfect bluff aimed at the wrong player is still lost chips.",
      },
    ],
  },
  {
    id: "M3",
    title: "Deceptive medium hands",
    chapter: "Chapter 2",
    minutes: 5,
    slides: [
      {
        title: "Small-pot winner, big-pot loser",
        bullets: [
          "JTs, KQ, KJ, 97s.",
          "Their roles: open / flat / BB-defend.",
          "Their role is NEVER big-pot starter (3-bet, stack-off).",
        ],
        ruleBox:
          "JTs, KQ, KJ, 97s: small-pot winners, big-pot losers. Their roles are open / flat / BB-defend — never big-pot starter.",
        visuals: [{ kind: "hand", cards: "JTs KQ KJ 97s", label: "Deceptive medium hands" }],
        narration:
          "This module is about a family of hands: jack-ten suited, king-queen, king-jack, nine-seven suited. We call them deceptive medium hands, because they look good and they lead you astray. Their one-sentence identity: small-pot winner, big-pot loser. Their roles are opening, flatting — calling — or defending from the big blind. Their role is never, ever starting a big pot — you don't 3-bet these hands and push stacks in with them. Keep the pot small and these hands are your friends; inflate it and they become your enemies. We'll unpack why on the next slide, but first let this settle in: when you see these hands, your reflex should say 'small pot,' not 'stack.'",
      },
      {
        title: "Why they get dominated",
        bullets: [
          "JTs top pair: kicker problem. KQ: in the shadow of AK/AQ. 97s two pair: exposed from above.",
          "In small pots they drip money out of marginal hands; in big ones the opposing range narrows and strengthens.",
        ],
        narration:
          "Why do these hands lose big pots? Take them one at a time. Make top pair with jack-ten suited and you have a kicker problem; say you paired the jack — most of the hands that pay you carry a better kicker. Make top pair with king-queen and you're in the shadow of ace-king and ace-queen; even when you pair the king or the queen, the dominating hands are still out there. Even flop two pair with nine-seven suited and the board is open above you — bigger two pairs and straights can overtake you. Now combine that with pot size. While the pot is small — a single-raised pot — these hands slowly drip money out of your opponent's marginal holdings; weak top pairs and second pairs pay you off. But when the pot grows — 3-bet level and beyond — the range across the table narrows and strengthens; now only strong hands put in that much money, and that strong range dominates you. In one sentence: the hand stays the same, but when the pot size changes, the winning side changes. That's exactly where the deception lives.",
      },
      {
        title: "The KQo case — equity vs playability",
        bullets: [
          "42bb, an HJ reg (~22%) opens, you hold KQo in the CO. Correct: fold.",
          "Raw equity ~45%, but you can't realize it.",
          "Your best flops are your priciest traps: K → pays off AK, Q → pays off AQ.",
        ],
        ruleBox: "Equity is won on paper; money is won at the table.",
        visuals: [{ kind: "hand", cards: "KQo", label: "Your hand (CO) — 42bb, HJ reg opened" }],
        narration:
          "Let's finish with a concrete example. You're forty-two big blinds deep, day two. A reg opens from the hijack, on a range of roughly twenty-two percent. You're in the cutoff with king-queen offsuit. The correct decision is fold. Why fold, when the hand doesn't look bad? Because raw equity and playability are two different things. Against that twenty-two percent range, king-queen offsuit's raw equity is about forty-five percent — not bad on paper. But you can't realize that equity. The ace-king, ace-queen, kings, queens, and aces in villain's range turn your best flops into graves. You flop a king, you're delighted — and you pay ace-king off across three streets. You flop a queen — you pay ace-queen. Your brightest scenarios are actually your most expensive traps. On top of that, at forty-two big blinds, if you 3-bet and catch a 4-bet you can't continue, and calling to play the hand without position leaves you with no initiative. The golden sentence here: equity is won on paper; money is won at the table. Decide whether to play a hand not on its raw equity, but on whether you can actually bank that equity.",
      },
    ],
  },
  {
    id: "M4",
    title: "Stack modes & ICM",
    chapter: "Chapter 3",
    minutes: 5,
    slides: [
      {
        title: "Stack modes",
        table: { section: "Chapter 3", caption: "Mode first, then range." },
        narration:
          "The first question to ask before every hand isn't a hand question — it's a mode question: which stack mode am I in? You pick the range after that. Let's walk through the modes. Eighty big blinds and up is standard mode; normal charts apply, and suited connectors and small pairs are at peak value because depth gives you implied odds. Forty to sixty is the first tightening; your open size stays fixed but the range shrinks — the bottom offsuit band drops out: hands like king-ten offsuit, queen-jack offsuit, jack-nine offsuit go in the bin. Twenty-five to forty is a serious mode change; suited connectors lose value because implied odds shrink, ace-x hands gain value in exchange, and you run every hand through the filter 'what's my clear decision against a jam?' Fifteen to twenty-five is the open-jam boundary; from some positions you open two times, with others you jam outright. Below fifteen there's only one mode: jam or fold; no move outside that range exists. Summary: look at your stack before you look at your hand, because the same hand in a different mode is a different hand.",
      },
      {
        title: "Medium pairs below 30bb",
        bullets: [
          "77–TT below 30bb are not post-flop hands — jam-or-fold.",
          "Miss the set and there's no stack to survive three streets.",
          "Hit it and a short stack can't extract the maximum anyway.",
        ],
        visuals: [{ kind: "hand", cards: "77 88 99 TT", label: "Below 30bb: jam-or-fold" }],
        narration:
          "Inside the modes there's one threshold that deserves its own spotlight: medium pairs below thirty big blinds. Hands like sevens, eights, nines, tens are not hands to play post-flop below thirty big blinds; they are jam-or-fold hands. Why? The constraint cuts both ways. One: you want to set-mine, but if the set doesn't come, you don't have the stack to absorb three streets of pressure and keep going — the first bet already commits you. Two: even when the set does come, a short stack can't extract maximum value, because there isn't much money behind to win. So the classic appeal of these pairs — 'flop a set cheap, win a stack' — doesn't work below thirty big blinds. At this depth, don't try to dance post-flop with a medium pair; jam it or fold it.",
      },
      {
        title: "The ICM layer",
        bullets: [
          "30bb on the bubble ≠ 30bb on Day 1.",
          "Short stacks on your left: widen.",
          "Big stacks on your left: tighten.",
          "A medium stack on the bubble is the most fragile position — patience.",
        ],
        ruleBox: "30bb on the bubble ≠ 30bb on Day 1.",
        narration:
          "On top of stack mode sits the ICM layer — money pressure. Start with this sentence: thirty big blinds on the bubble is not the same hand as thirty big blinds on day one. As the money approaches, the same stack no longer plays the same range, because chip value is no longer symmetric — the chips you lose hurt more than the ones you win. You adjust to the table. Short stacks on your left: widen your opening range, because they're playing to survive and won't fight back easily. Big stacks on your left: tighten, because they can 3-bet you with impunity, and under money pressure you'll be forced to fold. And most critical of all: a medium stack on the bubble is the most fragile position. You can't jam freely like a short stack, and you can't apply pressure like a big stack; you're caught in between. The only prescription for this mode is patience — read your position and your table, and wait for the right moment.",
      },
    ],
  },
  {
    id: "M5",
    title: "3-bet & call ranges",
    chapter: "Chapter 4 ★",
    minutes: 8,
    slides: [
      {
        title: "The logic of this chapter",
        bullets: [
          "A bloated pot is a 3-bet pot 90% of the time.",
          "Building the 3-bet range right lowers the frequency of the root error.",
          "Two tests: am I comfortable with one pair? Am I left OOP?",
        ],
        narration:
          "This is the heart of the book. Remember the root error: misclassifying one pair in a bloated pot. It explodes on the river, but it's born preflop. Here's why: a bloated pot is, ninety percent of the time, a 3-bet pot. So that hard river decision really starts much earlier — in a badly built 3-bet range. The conclusion is powerful: building your 3-bet range right is the fastest way to cut the root error. Faster than improving your hand reading, because you stop the problem where it's born. Test every range with two questions. One: if I 3-bet this hand and see a flop, am I comfortable when I make one pair? If not, I don't 3-bet it — I flat or fold. Two: am I left out of position? One pair in an out-of-position 3-bet pot is, by definition, a bluff-catcher. That's why out-of-position ranges are tighter. These two questions are the base of every table.",
      },
      {
        title: "The live tournament correction",
        table: {
          section: "Chapter 4",
          sub: "4.1",
          caption: "Live, the money comes from the wider value 3-bet.",
        },
        ruleBox:
          "Live, the money comes not from bluff 3-bets but from a wider value 3-bet range.",
        narration:
          "Don't carry solver ranges straight to the table; the live field doesn't play like a solver. There are three systematic deviations in the EPT field — turn all three in your favor. One: live players fold too little to 3-bets. So cut your bluff 3-bets and widen your value 3-bets — there's a field ready to pay you. Two: the 4-bet bluff barely exists live. If someone 4-bets you, it's a real hand; take even queens and below seriously, and don't auto-5-bet ace-king. Three: opens are wide and flat-calls are everywhere. So the squeeze is your most profitable move; in multiway pots drop the bluff 3-bet entirely, because there's no fold equity. In one sentence: live, the money comes not from bluff 3-bets but from a wider value 3-bet range. Theory pushes you toward balance; the field lets you profit from imbalance. Use that.",
      },
      {
        title: "Sizing",
        table: { section: "Chapter 4", sub: "4.2", caption: "Memorize it — don't think." },
        narration:
          "Memorize the sizes so you don't think at the table. In-position 3-bet: three times the open, up to three and a half live. Out-of-position 3-bet: four times the open, blinds included — bigger, so weak hands don't get a good price. If cold-callers entered, add one open size each. The squeeze — the 3-bet over an open plus a call — is four and a half to five times. 4-bets: two point two times the 3-bet in position, two point five out of position. Make these reflexes. If you think about sizing, you lose tempo and leak reads through your sizes.",
      },
      {
        title: "Range table (interactive)",
        rangeMatrix: true,
        narration:
          "Now the core: 3-bet ranges by position. Use the table below yourself. First pick who opened along the top, then tap your own position; you'll see the value and bluff ranges, with flat notes underneath. Keep the general principle in mind. Against early-position opens — UTG and UTG plus one — you're in discipline territory: value is very narrow, queens and up plus ace-king; bluffs are rare or none. As the opener's seat gets later, like a cutoff or button, both value and bluff widen, because their range is weaker. The most profitable spot: the small blind opens and you're in the big blind. There your range is widest, because they opened very wide and you have position. One warning: the bluff-row hands were chosen for flop playability, not blockers — hands you can play comfortably on the flop if you get called. Play with the table; see the matchups with your own eyes.",
      },
      {
        title: "The three conditions for a cold-call",
        bullets: [
          "1) Position: you're IP, or you're closing the action in the BB.",
          "2) Depth: effective stack at least 15× the call.",
          "3) A paying opponent: someone who'll give you money when you hit the set.",
          "If all three don't hold at once, don't flat.",
        ],
        narration:
          "We covered the 3-bet; now the cold-call — flat-calling an open without 3-betting. A cold-call is harder than a 3-bet, because you give up the initiative. Three conditions; if all three don't hold, don't flat. One, position: either you're in position or closing the action in the big blind. Don't flat out of position in the middle with players behind. Two, depth: if you're set-mining, the effective stack must be at least fifteen times your call. At a hundred big blinds, calling three with more than forty-five behind — fine. Make the same call at forty big blinds and it doesn't work; even when the set hits, you can't get your money out. Three, a paying opponent: someone who'll pay you when you make the set. A tight reg stops when the set arrives, so set-mining there is unprofitable. And a multiway warning: if an aggressive player behind can 3-bet, flatting a solid hand leaves you open to the squeeze. Then either raise to a 3-bet or let it go — don't flat in the middle.",
      },
      {
        title: "The squeeze — the most profitable single move",
        bullets: [
          "The cold-caller's range is tight but weak: can't 4-bet, folds most of it.",
          "VALUE: JJ+, AQs+, AKo. BLUFF: A5s–A4s, KQs, AJs.",
          "If the cold-caller is a fish, cut the bluffs — value squeeze only.",
        ],
        narration:
          "The most profitable single move live deserves its own slide: the squeeze. The squeeze is the big 3-bet you fire after one player opens and another calls. Why so profitable? Because the cold-caller's range is tight but weak. By calling, they've said 'I have a medium hand'; they can't 4-bet, and under pressure they fold most of it. Your value side: jacks and up, ace-queen suited and up, ace-king offsuit. Your bluff side: ace-five and ace-four suited, king-queen suited, ace-jack suited — they carry blockers and stay playable if called. Size it four and a half times in position, five times and up from the blinds. One adjustment: if the cold-caller is tight, widen the bluffs, because they'll fold. But if the cold-caller is a fish — doesn't fold — cut the bluffs entirely and squeeze value only. You don't bluff a fish; you make the fish pay.",
      },
      {
        title: "The stack-mode overlay",
        table: {
          section: "Chapter 4",
          sub: "4.7",
          caption: "Don't play a 130bb range at 45bb.",
        },
        ruleBox:
          "The most common mistake: playing a 130bb range at 45bb — flatting small pairs, 3-bet bluffing suited connectors. Both lose money at 45bb.",
        narration:
          "Finally, lay the stack-mode layer over all these ranges, because range changes with mode. Two hundred big blinds and up: value-heavy, few bluffs, widest flats — implied odds at their peak. A hundred to a hundred fifty: standard mode, these tables apply as-is. Sixty to a hundred: more polarized, more bluffs but narrower flats, set-mining weakens. Forty to sixty: play linear, almost no flats — 3-bet or fold. Twenty-five to forty: a 3-bet now means commitment; any hand you 3-bet must continue against a 4-bet. Below twenty-five: jam or fold, no 3-bet-fold. I'll repeat the most expensive mistake: playing a hundred-and-thirty-big-blind range at forty-five big blinds. You flat a small pair for a set, but the depth isn't there; you 3-bet-bluff a suited connector, but there's no fold equity and no implied odds. Both are losses at this depth. Mode first, then range.",
      },
    ],
  },
  {
    id: "M6",
    title: "4-bet — answering the 3-bet",
    chapter: "Chapter 4.5",
    minutes: 4,
    slides: [
      {
        title: "The 4-bet, live",
        bullets: [
          "The 4-bet bluff barely exists live.",
          "When you see a 4-bet, take even QQ and below seriously.",
          "AK is not an automatic 5-bet.",
        ],
        ruleBox:
          "Live, a 4-bet is almost always a real hand; if nobody folds, a bluff 4-bet is burning money. Don't auto-5-bet AK.",
        narration:
          "Before the 4-bet range, set down the live reality, because theory and the live field part ways here. The 4-bet bluff barely exists live; people fire 4-bets with real hands. Two consequences. One: when someone 4-bets you, take it seriously. Don't shrug off even queens and below — the player across is very likely genuinely strong. Don't reflex-5-bet the moment you see ace-king; that 4-bet is usually ahead of you. Two: be very careful with your own 4-bet bluffs. If nobody folds, your bluff 4-bet is just burning money. On defense and offense the rule is the same: live, the 4-bet is for value, not for bluffing.",
      },
      {
        title: "Your answer to the 3-bet (table)",
        table: {
          section: "Chapter 4",
          sub: "4.5",
          caption: "A 4-bet pot is a bloated pot.",
        },
        visuals: [
          {
            kind: "range",
            value: "KK+, AKs, QQ (mix), AKo (mix)",
            blof: "A5s, A4s",
            flat: "JJ, TT, AQs, KQs",
            valueLabel: "4-bet value",
            blofLabel: "Bluff 4-bet",
            caption: "Your 4-bet answer: value + mix + bluff; flat IP 150bb+.",
          },
        ],
        ruleBox:
          "A 4-bet pot is a bloated pot. Taking flop+turn value with AA and jamming a bad river is an exact replay of Case 3.",
        narration:
          "Now the other side of the coin: you opened and got 3-bet. What's your answer? Follow the table. 4-bet value: kings and up, plus ace-king against a late-position 3-bet. 4-bet mix: queens and ace-king offsuit are sometimes 4-bet against a late-position 3-bet, never against early position. The 4-bet bluff is possible with ace-five and ace-four suited but very rare live — if nobody folds, it's burning money. Flat, calling the 3-bet: in position and a hundred fifty big blinds deep, queens, tens, ace-queen suited, king-queen suited; if the price is under three times, suited connectors join too. Fold: all offsuit broadways out of position — ace-jack, king-queen, ace-ten — are trash against a 3-bet; let them go. The most critical warning: a 4-bet pot is a bloated pot. Taking flop and turn value there with aces, then jamming the last stack on a bad river, is an exact replay of the third case in module one — that two-four-five-six board. The rule doesn't change: if no worse hand pays you on the river, jamming isn't value. Build your preflop range right so you never face that river decision.",
      },
      {
        title: "4-bet sizing",
        bullets: ["4-bet IP: 2.2× the 3-bet", "4-bet OOP: 2.5× the 3-bet"],
        ruleBox: "Memorize the size — don't think at the table.",
        narration:
          "Finally, sizing. In position, the 4-bet is two point two times the 3-bet. Out of position, go a bit bigger: two point five times the 3-bet. Bigger out of position, so you don't give weak hands a good price and keep them in. Make these two numbers reflexes. If you think about sizing, you lose tempo and leak reads through your sizes.",
      },
      {
        title: "5-bet — answering the 4-bet",
        bullets: [
          "5-bet = re-raising the 4-bet; at this depth, practically all-in (a jam).",
          "Value: KK+ always. QQ/AK depends on villain — jam vs an aggressor, fold vs a nit.",
          "The 5-bet bluff barely exists live — whoever 4-bets you is usually ahead.",
        ],
        ruleBox:
          "Every hand you 4-bet must have a pre-decided plan against a 5-bet jam. No '4-bet and see'.",
        narration:
          "The last side of the coin: you 4-bet and the opponent re-raised — a 5-bet. At this depth a 5-bet is practically all-in. The rule comes from the live reality again: since the 4-bet bluff barely exists, whoever 4-bets or 5-bets you is usually genuinely ahead. So the 5-bet is for value. Your value jam: kings and up, always. Queens and ace-king depend on the villain — you jam against an aggressive player, but if a tight nit made the 4-bet, whose range is aces and kings, you fold queens and ace-king. The 5-bet bluff barely exists live; if nobody folds, a bluff 5-bet burns your whole stack. The golden rule: every hand you 4-bet must have a pre-decided plan against a 5-bet jam. At fifty-six big blinds deep, a 4-bet is already around twenty big blinds — the commitment threshold; the moment you 4-bet, you must already know what you'll do against a 5-bet.",
      },
    ],
  },
  {
    id: "M7",
    title: "The 25–30bb band",
    chapter: "Chapter 5 ★",
    minutes: 6,
    slides: [
      {
        title: "The character of the band",
        bullets: [
          "Value comes from FOLD EQUITY, not from completing draws.",
          "You're not after a hand that 'can improve' — you want one that's good right now: an ace, a broadway, a pair.",
          "The decision order, in two seconds: MODE → POSITION → HAND.",
        ],
        ruleBox:
          "At 25–30bb, value comes from fold equity, not from completing draws. When a suited connector shows up at 28bb, you don't even reach step three (HAND).",
        visuals: [
          { kind: "hand", cards: "AK KQ 99", label: "Good right now: ace / broadway / pair" },
        ],
        narration:
          "Now we come to the tournament's most common and most chip-burning band: twenty-five to thirty big blinds. The 3-bet tables from the previous module were for a hundred, a hundred and fifty big blinds; at this depth they're void, because the engine of the game changes. In one sentence: in this band, value comes from fold equity, not from completing draws. So the hand you're after isn't one that says 'this gets good if it develops' — it's one that's good right now: an ace, a broadway, a pair. Why? Because implied odds — the only engine speculative hands have — don't run at twenty-eight big blinds. When you make your set or straight, there's no stack left to pay you; and the eighty-five percent of the time you don't complete, you're left with nothing, helpless. So compress your decision order into two seconds: mode first, then position, then hand. In this band, when a suited connector arrives, you don't even reach step three — the 'what's my hand' question — because mode and position have already answered it.",
      },
      {
        title: "Opening ranges (folded to you)",
        table: {
          section: "Chapter 5",
          sub: "5.1",
          caption: "Size 2–2.2×. Opening bigger makes no sense at this depth.",
        },
        narration:
          "These are the ranges you open when it's folded to you; size two to two point two, and opening bigger makes no sense at this depth. Read the table position by position. In early position — UTG and UTG plus one — you open tight: sevens and up, ace-ten suited and up, ace-jack offsuit and up, king-queen suited. The later your seat, the wider the range; on the button you're opening almost all the aces, wide suited kings, and connected hands. Notice: the hands here were chosen along the 'good right now' axis — aces, broadways, pairs dominate. Most of the small suited connectors you'd open deep-stacked are missing from this table, because their engine has stalled in this band.",
      },
      {
        title: "3-bet = JAM",
        table: {
          section: "Chapter 5",
          sub: "5.2",
          caption: "No FLAT in this band — not from the SB, not from the BB, not IP.",
        },
        visuals: [
          {
            kind: "range",
            value: "TT+, AQs+, AKo",
            valueLabel: "Jam",
            caption: "Jam range vs an early-position open (example). Green = straight all-in.",
          },
        ],
        ruleBox:
          "In this band, 3-bet = commit. There is no '3-bet then fold' structure; you go straight all-in. No flat.",
        narration:
          "In this band, delete the word 3-bet from your head and put one word in its place: jam. At twenty-eight big blinds, 3-betting means committing; there is no 'I'll 3-bet and fold later' structure, because your stack doesn't allow it. So treat every hand you'd 3-bet as a direct all-in. What do you jam against whom? Against an early-position open: tens and up, ace-queen suited and up, ace-king offsuit. Against a cutoff or button open, wider: eights and up, ace-ten suited and up, ace-queen offsuit and up, king-queen suited. And if there's a chip leader at the table opening wide and folding to jams, you widen even further against them: sevens, ace-nine suited, ace-jack offsuit, king-queen suited. The most critical sentence: no flat in this band. Not from the small blind, not from the big blind, not in position. The wide flat tables of the previous module belong to the world above a hundred big blinds; here you jam or you fold.",
      },
      {
        title: "Calling a jam + the fold list",
        bullets: [
          "Calling a jam: 99+, AJs+, AQo+. Below that is not a call.",
          "Auto-fold: all suited connectors (T9s, 98s, 87s, 76s, 65s, 54s).",
          "Auto-fold: suited gappers; weak offsuit broadways (KJo, QJo, JTo); FLATTING small pairs.",
        ],
        visuals: [
          {
            kind: "range",
            value: "99+, AJs+, AQo+",
            valueLabel: "Call (vs jam)",
            caption: "The calling floor when villain moves all-in — below it is not a call.",
          },
          { kind: "hand", cards: "T9s 87s KJo", label: "Auto-fold in this band" },
        ],
        ruleBox:
          "If villain moves all-in: 99+, AJs+, AQo+. Below that is not a call at 28bb — either you're the one jamming, or you fold.",
        narration:
          "Two directions left: what you call when the jam comes at you, and which hands you release without a second look. When villain moves all-in, your calling range is narrow: nines and up, ace-jack suited and up, ace-queen offsuit and up. Nothing below that is a call at twenty-eight big blinds — down there, the choice is either being the one who jams, or folding. The fold list is rote: all suited connectors — ten-nine, nine-eight, eight-seven, seven-six, six-five, five-four suited — every one an unconditional fold. Suited gappers, the same. Weak offsuit broadways — king-jack, queen-jack, jack-ten offsuit — fold. And no flatting small pairs either; jamming them is a separate topic, but flatting, never. Folding this list isn't weakness — it's stockpiling ammunition: every speculative hand you release means chips standing behind you for the moment you jam a real hand.",
      },
      {
        title: "Field case — GGMasters",
        table: {
          section: "Chapter 5",
          sub: "5.5",
          caption: "The correct answer in all three: fold; the decider wasn't the hand — it was the mode.",
        },
        visuals: [
          { kind: "hand", cards: "T9s 54s 87s", label: "All three FOLD (28bb)" },
        ],
        ruleBox:
          "The question isn't 'is this hand good enough' — it's 'is this hand playable at this stack.' Folding speculative hands protects the ammunition you'll jam with a real hand.",
        narration:
          "Let's see this in a real session. In a July GGMasters, in the twenty-eight-big-blind band, the table asked you the same question with three different hands. Ten-nine suited in the small blind, a forty-thousand call on offer, twenty-eight big blinds behind — fold, because flatting from the small blind is a losing position. Five-four suited in the big blind, thirty thousand to pay into a seventy-three-thousand pot — fold, because the implied-odds engine isn't running. Eight-seven suited in the big blind again, same situation — a slightly better hand, same decision, fold. Three hands, three folds, and the decider wasn't the hand; it was the mode. The same session also holds a correct-decision example: a twenty-three-big-blind jam from the button with tens; a million-chip leader thought about calling and folded — pot taken. Chapter 3's rule at work — below thirty big blinds, a medium pair is not a post-flop hand; it's a jam-or-fold hand. The question waiting for you at the table isn't 'is this hand good enough'; it's 'is this hand playable at this stack.'",
      },
      {
        title: "Opponent-reading note",
        bullets: [
          "If the chip leader has folded to a jam once: widen your jam range against them.",
          "The profile that opens wide and folds to jams is the most profitable target at the table in this band.",
          "Priority: (1) jam when they open, (2) open from BTN/CO and collect the blinds.",
        ],
        narration:
          "One last reading note, because in this band, profit runs through opponent selection. If you've seen a chip leader fold to a jam once, store that information: widen your jam range against that player's opens. Why? Because a profile that opens wide and folds to jams is the most profitable target at the table in this band — they open plenty but can't stand the pressure, and you convert that pressure into fold equity. Your priority order: first, jam on that player when they open; second, open from the button or cutoff yourself and collect the blinds. In this band, waiting is a weapon too — but while you wait, have the right target marked.",
      },
    ],
  },
  {
    id: "M8",
    title: "Draws on the turn",
    chapter: "Chapter 6",
    minutes: 4,
    slides: [
      {
        title: "Is there fold equity",
        bullets: [
          "Semi-bluffing a station = burning money → check, take the free card.",
          "Against a reg, on a board that fits your range → bet.",
          "A bet has two ways to win: making them fold OR completing the draw.",
        ],
        narration:
          "The most common turn question in poker: I have a draw — do I bet the turn, or see a free river? The decision hangs on three factors, and the first is fold equity. If you're up against a station type — someone who doesn't fold — semi-bluffing them is burning money; they won't fold, and you're left with your naked equity. In that case, check, take the free card, and try to complete your draw for free. But if you're against a reg and the board fits your range, then bet. Because when you bet, you have two ways to win: either villain folds and you take the pot right there, or they call and you complete your draw and win a big pot. A two-way win always beats a one-way win — as long as there's someone across from you who can fold.",
      },
      {
        title: "The quality of the draw",
        table: {
          section: "Chapter 6",
          sub: "5.2",
          caption: "Does it get paid when it completes?",
        },
        visuals: [{ kind: "hand", cards: "97s", label: "Low flush draw — check-heavy" }],
        narration:
          "The second factor is the quality of the draw, and the real question here is: when this draw completes, do I get paid? With the nut flush draw you play bet-heavy: you get action when it completes, and on top of that your blockers are strong — you're taking your opponent's best hands away from them. With a low flush draw — say the flush draw of nine-seven suited — you play check-heavy: even when it completes, you risk paying off a better flush, and the second-best flush is an expensive hand. With an open-ended straight draw on a plain board, both bet and check are legitimate; it's hidden strength, it gets paid well when it completes, so let the opponent decide the line. The gutshot is almost never semi-bluff fuel; few outs, little disguise — so check. Don't look at what your draw is called; look at whether it brings you money when it gets there.",
      },
      {
        title: "The IP / OOP split",
        bullets: [
          "IP: a check really does mean a free card.",
          "OOP: a check guarantees no free card.",
          "OOP, either bet the draw or check it with a call plan.",
        ],
        narration:
          "The third factor is position, and it matters a lot, because the idea of a 'free card' changes meaning with position. If you're in position — last to act — checking really does mean a free card; you check, and if your opponent checks too, you see the river without putting in a cent. But out of position, a check guarantees no free card; you check, your opponent bets, and your 'I'll see it for free' plan collapses — now you can't continue without paying. So out of position, either bet your draw — take the initiative — or check it with a clear call plan. Don't check passively on the assumption you'll 'see it for free anyway,' because that free card usually never comes. In short, for the turn draw decision, ask three things in order: is there fold equity, does my draw get paid when it completes, and am I in position.",
      },
    ],
  },
  {
    id: "M9",
    title: "PLO fundamentals",
    chapter: "Chapter 8",
    minutes: 5,
    slides: [
      {
        title: "Mindset differences",
        bullets: [
          "Equities run close — 60/40 is a good favorite.",
          "Nut dominance is everything; the second-best hand is expensive.",
          "Two pot bets = the stack is in the middle.",
        ],
        narration:
          "Now we switch to a different game, Pot Limit Omaha; and the most useful thing you can learn is the set of traps in playing PLO with an NLH head. First, the mindset differences. One: in PLO, equities run very close together. In NLH you're used to being an eighty-twenty favorite; in PLO, sixty-forty is already a good favorite. No hand is ever comfortable here; the edges are thin. Two: in PLO, nut dominance is everything. The second-best hand — one notch under the nuts — is an expensive hand in PLO; you're constantly asking 'can I draw to the nuts?' Three: in PLO the pot grows very fast. Two pot bets back to back and the stack is already in the middle; there's no slow inflation like in NLH — by the third street you've reached a point of no return. Absorb these three differences, because your NLH reflexes will mislead you in PLO.",
      },
      {
        title: "Hand selection",
        table: {
          section: "Chapter 8",
          sub: "7.2",
          caption: "All four cards must work together.",
        },
        narration:
          "Hand selection in PLO is about four cards working together. What we call a dangler is a hand whose fourth card has no connection to the others — say ace-ace-seven-deuce. A hand like that is really a three-card hand; the fourth card is dead, so it's usually a fold. A rundown is four connected cards, like jack-ten-nine-eight; it's very strong especially when double-suited — carrying two separate flush possibilities. Bare aces — aces with no support around them — get treated as one pair in PLO; they're not the automatic monster they are in NLH, and without nut potential they don't play a big pot. And the real weapon: wrap plus flush draw. A wrap is a giant straight draw that connects to the board with multiple cards and gives you thirteen or more outs; add a flush draw on top and the hand plays aggressively, because its equity runs neck-and-neck even with monster hands. When picking hands, don't look at the cards one by one — look at what the four do together.",
      },
      {
        title: "The NLH player's traps",
        bullets: [
          "Seeing AA through NLH eyes — if not double-suited, it's just one pair.",
          "Stacking off with top pair / top two — two pair is almost never the nuts.",
          "Importing your bluff frequency from NLH.",
          "Playing OOP 3-bet pots — when in doubt, flat.",
        ],
        narration:
          "Finally, the four traps a player falls into moving from NLH to PLO — these are your warning signs. First, seeing aces through NLH eyes: in PLO, if aces aren't double-suited and don't connect to the board, they're just one pair; treat them like a monster and you'll play a big pot and lose it. Second, stacking off with top pair or top two: in PLO, two pair is almost never the nuts; straights, sets, and flushes are on the board constantly, and pushing a whole stack in with two pair is a mistake. Third, importing your bluff frequency from NLH: PLO ranges are more connected, everyone's hand touches the board more, so bluffs get through less often; carry your NLH bluffing rate over here and you'll burn. Fourth, playing out-of-position 3-bet pots: this is PLO's hardest spot, because equities are close and deciding without position is very expensive; when in doubt, flat instead of 3-betting. Knowing these four traps keeps your NLH reflexes from sinking you at a PLO table.",
      },
    ],
  },
  {
    id: "M10",
    title: "Bloated pot: SPR and execution",
    chapter: "Chapter 11 ★",
    minutes: 7,
    slides: [
      {
        title: "SPR defines the bloated pot",
        bullets: [
          "SPR = stack ÷ pot. The ratio decides, not the bet count.",
          "SPR 1–4 (100bb 3-bet pot): one pair is a bluff-catcher.",
          "Read the SPR first, then assign one pair its role.",
        ],
        table: { section: "Chapter 11", sub: "11.0", caption: "SPR first, then role." },
        ruleBox: "Deep, a bloated pot is defined by SPR, not the number of bets.",
        narration:
          "We diagnosed the root error in earlier modules: misclassifying one pair in a bloated pot. This module gives you what comes after the diagnosis — the execution. First question: what is a 'bloated pot', and how do you measure it? The answer isn't the bet count, it's the stack-to-pot ratio. Divide your remaining stack on the flop by the pot. A small ratio means the pot is bloated; a big one means it isn't. Below one, the decision was already made preflop — you're committed. One to four — say, a 3-bet pot a hundred big blinds deep — your one pair is a bluff-catcher; don't start a big pot here. Four to eight, take two streets of value and control, be careful on the third. Above eight you can take thin value, but if someone re-raises, the pot suddenly drops into the one-to-four band and one pair is a bluff-catcher again. One sentence: read the stack-to-pot ratio first, then give one pair its role. Dropping one pair to a bluff-catcher too early when deep, and missing value, is a mistake; so is stacking off with an old deep reflex when medium-shallow.",
      },
      {
        title: "Turn discipline — the second barrel",
        table: { section: "Chapter 11", sub: "11.1", caption: "Sizes calibrated; direction fixed." },
        ruleBox:
          "Before firing the second barrel, ask: can I state my river plan? Am I leaving a pot I can check-fold on a bad river?",
        narration:
          "The root error is usually born on the turn: you bloat the pot yourself with a second barrel and arrive on the river as a bluff-catcher. So the turn decision is critical. Look at the table. With an overpair, bet controlled on a blank or low turn, count the stack-to-pot ratio and be careful when an overcard comes, lean toward checking when the board pairs, check or size down when a draw completes. Top pair good kicker plays more passively: a thin bet or check-call, leaning check-fold on a bad card. Top pair weak kicker checks most turns. With air plus a blocker, blank turns are barrel candidates, but give up when the card arrives. The sizes get calibrated with your own execution data, but the direction is fixed: every time you grow the pot, you lose some of your power to buy a check-fold on the river. Before firing the second barrel, answer two questions — can I state my river plan, and am I leaving a pot size I can check-fold on a bad river? The size you fire on the turn is the price of the decision you make on the river.",
      },
      {
        title: "River — bluff-catch: at what price to call",
        table: { section: "Chapter 11", sub: "11.2", caption: "Size + which bluffs + blockers." },
        narration:
          "On the river the opponent bets and your hand is a bluff-catcher — a hand that beats only bluffs, not value. The decision is finer than 'call small pots, fold big ones'; it comes down to three variables. One: the opponent's size. A small size holds more bluffs and thin value; a big size is polarized — either very strong or a bluff. Two: which worse-than-you value would fire this size? If the answer is 'none', they're either the nuts or a bluff, and then their bluff frequency decides your call. Three: blockers. If your hand blocks their value combinations, you lean toward calling; if you block their bluffs, the opposite. Read all three together; don't look at pot size alone. When in doubt, your compass is: is this size trying to get paid by a worse hand, or trying to make me fold?",
      },
      {
        title: "The bad-river catalog — never jam",
        bullets: [
          "The fourth low card / a card that completes the straight",
          "The third flush card (when you don't hold the flush)",
          "A board pair (opens set / full house)",
          "An overcard on top (their top pair passes yours)",
        ],
        ruleBox:
          "On these cards: check-call small pots, check-fold big ones. Never jam — jamming is value only if a worse hand pays.",
        narration:
          "Finally, an alarm list you hold with an overpair or strong one pair: the 'no value target' cards. The fourth low card, or a card that completes the straight — the aces bust in module three was exactly this: a six landed on two-four-five, and trips, the straight, and a set had all passed you. Second, the third flush card, when you don't hold a flush. Third, a board pair, which opens the door to a set or full house. Fourth, an overcard on the board, where their top pair can pass your overpair. When these cards come, the rule is clear: check-call small pots, check-fold big ones, and never jam. Jamming is value only if a worse hand will pay; on these cards there is no worse hand to pay. This whole module is the execution layer of the root error: the preflop range lowers the frequency of the error, and this chapter gives you the correct execution once you reach the moment of the error.",
      },
    ],
  },
  {
    id: "M11",
    title: "ICM thresholds and the final table",
    chapter: "Chapter 12 ★",
    minutes: 7,
    slides: [
      {
        title: "When ICM turns on",
        table: { section: "Chapter 12", sub: "12.0", caption: "By event — verify from the lobby." },
        ruleBox: "Add step zero to your decision order: is ICM on in this event?",
        narration:
          "ICM, the Independent Chip Model, measures the real cash value of your chips — and in a tournament chips aren't cash; the chips you lose hurt more than the ones you win. But ICM isn't on with the same intensity at every table. The same twenty-eight big blinds, the same hand, the same position: in a small-field high roller it's an ICM decision, on day one of a big-field Main it's a pure chip decision. Look at the table: in events with a small field and a steep payout, ICM turns on early — nearly every day two decision is under ICM; in a big rec-heavy field like the Main it turns on late. Make this distinction in advance, not at the table. Don't invent the field size or the payout percentages — read them from the lobby by the entry count. And add a zero-th step to your decision order: is ICM on in this event? If no, play pure chips; if yes, apply the risk corrections that follow.",
      },
      {
        title: "Risk premium — the real question: am I covered",
        table: { section: "Chapter 12", sub: "12.1", caption: "Jam and call ranges diverge under ICM." },
        ruleBox: "In a call spot the FIRST question isn't 'is it the bubble?' but 'am I covered?'",
        narration:
          "ICM's number-one asymmetry: jamming is far cheaper than calling. Because when you jam you have fold equity — they can fold; when you call you don't, you have to show your hand. So under ICM your jam range and your call range diverge; symmetry is only a chip assumption. From this comes the most critical question at the table. In a call decision the first question isn't 'is it the bubble?'; the first question is 'am I covered?' What squeezes you isn't the bubble, it's being covered — meaning you bust if you lose. Against a jam from a chip leader who covers you, your call range tightens hard. But against a jam from a short who does not cover you — you don't zero out even if you lose — you call wide, even on the bubble. That's your leak to calibrate: lumping the two together as 'bubble, so tight'. They aren't the same. The notch contents get precise in the drill with ICMIZER; no invented thresholds.",
      },
      {
        title: "Your calibration — covered / not covered",
        bullets: [
          "COVERED (chip leader jam, 22bb, harsh bubble): CALL = 88+, AJs+, AQo. A9s and KQs FOLD.",
          "Driver: losing means bust; A9s reverse-dominated, KQs a flip — not worth tournament life.",
          "NOT COVERED (jammer shorter than you): much wider call — including A9s and KTo.",
          "The sticky half of your leak: the fold reflex even when not covered.",
        ],
        ruleBox:
          "Table cue: before folding to a jam, ask 'am I covered?' — if no, your call is much wider than you think.",
        narration:
          "Now your own calibrated thresholds — not general theory, your data. When you're covered, meaning a chip leader who has you covered jams into you around twenty-two big blinds on a harsh bubble: your call range is eighty-eight and up, ace-jack suited and up, and ace-queen offsuit. You fold ace-nine suited and king-queen suited. The reason is clear: if you lose you bust, zero euros; ace-nine suited is reverse-dominated, king-queen is a flip — a marginal edge isn't worth tournament life. But the real other side of the coin, the side where your leak lives: when you're not covered. If the jammer is shorter than you — you don't bust even if you lose — your line is much wider; even ace-nine suited and king-ten offsuit are calls. In your drill data you folded even these, saying 'not enough range'; but king-ten offsuit has about fifty-four percent equity against a wide thirteen-big-blind jam, and you only need forty-four percent for the price. So the mistake isn't the call, it's the fold reflex — and it persisted even after seeing covered and not-covered side by side. Memorize the table cue: before folding to a jam, stop for a second and ask, am I covered? If not, your call range is much wider than you think.",
      },
      {
        title: "Final table — the role matrix",
        table: { section: "Chapter 12", sub: "12.2", caption: "Correct play depends on stack role, not the hand." },
        narration:
          "At the final table, your correct play is set by your stack role, not your hand. If you're short — below fifteen big blinds — and there's someone even shorter at the table, be the first jammer and watch the ladder; but if no one is shorter, don't stall — make the correct jam, because getting blinded into a lock-up is also a bust. If you're the medium stack — the most fragile role: know whose bust you're waiting for, and don't open a pot with someone who covers you. But if you're effectively the shortest, meaning everyone is deeper than you, chapter twelve's fifth rule kicks in: when everyone is locked up, widen your jam range, don't stall. If you're the covering deep stack — aggression is free: crush the short and medium stacks without penalty, but don't get into an ego war with another chip leader. In short: look at the stack distribution and your own role first, then play the hand. At the final table the hand is secondary.",
      },
    ],
  },
  {
    id: "M12",
    title: "Multiway pot doctrine",
    chapter: "Chapter 13 ★",
    minutes: 6,
    slides: [
      {
        title: "The core — what each extra player changes",
        bullets: [
          "Each extra player MULTIPLIES the price of a bluff.",
          "RAISES the bar for value (top pair drops a class).",
          "INCREASES the value of the nuts.",
        ],
        ruleBox:
          "Each extra player multiplies the price of a bluff, raises the bar for value, increases the value of the nuts.",
        narration:
          "The root error was defined as 'misclassifying one pair in a bloated or multiway pot'; this module gives the multiway half of that definition. In the rec-heavy Main most pots are multiway, so this is the texture you'll spend the most time in. One rule sums it up: each extra player multiplies the price of a bluff, raises the bar for value, and increases the value of the nuts. The reason is compound probability: as the number of opponents grows, the chance that someone has two pair or better, or a set, multiplies. That's why a multiway bloated pot makes one pair an even clearer bluff-catcher than a heads-up bloated pot. A hand that was value heads-up drops a class when three players see the flop. Carry one sentence: multiway, one pair is a class below what it is heads-up.",
      },
      {
        title: "Heads-up → 3+ way transition",
        table: { section: "Chapter 13", sub: "13.1", caption: "Same hand drops a class by player count." },
        narration:
          "Now look at what changes when you carry your hand from heads-up into a multiway pot. Your c-bet frequency collapses: heads-up you fire high, three-plus-way you continue only with strong value and a real nut-draw. Top pair was value heads-up; multiway it drops a class, into check or pot control. An overpair was a big-pot candidate heads-up; multiway you take two streets of value and control, and count the stack-to-pot ratio. A bluff depended on the three criteria heads-up; multiway it's nearly gone — only a semi-bluff carrying a nut blocker. You keep betting the nut flush draw, because the price is good and it pays big when it completes. But a non-nut flush draw or a gutshot turns into a check or dies multiway. In short: as the count grows, your aggression narrows, and only the strongest value and nut-draws stay standing.",
      },
      {
        title: "Bluffing multiway — the fourth criterion",
        table: { section: "Chapter 13", sub: "13.3", caption: "Player count = doors a bluff must pass." },
        ruleBox:
          "Add to the 'whom not to bluff' list: a multiway pot (whoever they are). Even one station kills the bluff.",
        narration:
          "In module two we learned the three criteria for a bluff: blocker, connection, board ownership — but those were built for a single opponent. Multiway adds a fourth variable: the number of opponents, the number of doors your bluff must pass through. Each extra player adds a door, and even one lone station closes it and kills the bluff. Look at the table: heads-up the three criteria hold, three-way only a nut-blocker semi-bluff, four-plus-way no bluff at all. And who to fear matters: not all the preflop callers, but the tightest range still standing on the flop. A raise that comes over a bet after an intervening call is almost always the nuts; there's no continuing with one pair there. In short, add a new entry to module two's 'whom not to bluff' list: a multiway pot, whoever they are.",
      },
    ],
  },
  {
    id: "M13",
    title: "40–70bb bridge band",
    chapter: "Chapter 14 ★",
    minutes: 5,
    slides: [
      {
        title: "Character of the band",
        bullets: [
          "The 3-bet gets closer to commit (full commit at 40bb).",
          "The flat window narrows but isn't zero — a thin flat IP and in the BB.",
          "Offsuit broadways / dominatable hands drop; playability comes first.",
        ],
        narration:
          "Chapter four gave tables for a hundred to a hundred fifty big blinds, chapter five for twenty-five to thirty; the middle — forty to seventy big blinds — was left with one-line notes. But Main day two and the middle phase of every High Roller are played mostly in this band; it's the depth you'll be at most. The character of the band is this. One: the 3-bet gets closer to commit; not at sixty, but at forty you're fully committed. Two: the flat window narrows but, unlike chapter five, isn't zero — a thin flat survives in position and in the big blind. Three: offsuit broadways and dominatable hands drop relative to chapter four; here playability comes first. One sentence: mode comes first, then range — and this band is the bridge between the two extremes.",
      },
      {
        title: "3-bet framework (40–70bb)",
        table: { section: "Chapter 14", sub: "14.1", caption: "Not a new list — direction from B4." },
        ruleBox:
          "A hand you 3-bet must be able to continue against a 4-bet/jam — if it can't, flat (IP/BB) or fold.",
        narration:
          "In this band you don't memorize a new combo list; you take the direction in which chapter four's calibrated ranges narrow at this depth. Look at the table. Sixty to seventy big blinds: your value side is nearly the same as chapter four, but your bluff side is more polarized — narrow the bluffs to the best blocker and playability hands. Forty to sixty: cut the weak ends of value, drop the bluffs almost entirely because nobody folds live, and the 3-bet approaches commit. The golden rule: below about sixty big blinds the '3-bet then fold' structure weakens, and at forty it ends. So a hand you 3-bet must be able to continue against a 4-bet or a jam; if it can't, you either flat it or fold it — don't 3-bet for nothing and then fold.",
      },
      {
        title: "60 → 40bb transition signals",
        bullets: [
          "First out of the table: a 3-bet bluff with a suited connector",
          "Speculative flat with a small pair",
          "Offsuit broadway cold-call",
        ],
        ruleBox: "Playing a 130bb range at 45bb is the most expensive habit.",
        narration:
          "Finally, know which hands should leave the table first as you drop through the band, because these turn into straight losses when depth shrinks. First, a 3-bet bluff with a suited connector: without depth it has neither fold equity nor implied odds. Second, a speculative flat with a small pair: you're hunting a set, but the payout depth isn't there. Third, an offsuit broadway cold-call: playing an already-dominated hand out of position. The zero-th sentence's warning becomes concrete here: playing a hundred-and-thirty-big-blind range at forty-five big blinds is the most expensive habit. The wrong-mode range is the number-one source of bloated pots — that is, the preflop source of the root error. Mode first, then range: this bridge band completes that backbone between the two extremes.",
      },
    ],
  },
  {
    id: "M14",
    title: "PLO tournament layer",
    chapter: "Chapter 15 ★",
    minutes: 6,
    slides: [
      {
        title: "Why a separate layer",
        bullets: [
          "In pot-limit there's no 'jam' — only a max pot-raise.",
          "Equities run close → the fold-equity doctrine weakens.",
          "'30bb PLO' ≠ '30bb NLH' — the B5 jam/fold reflex is void.",
        ],
        narration:
          "We covered PLO basics in module nine; this module adds the tournament layer, because the twenty-five-thousand-euro PLO High Roller is a separate event. First, why do we need a separate layer? Because chapter five's NLH jam-fold reflex is void in PLO. One: in pot-limit there's no such thing as a 'jam', only a maximum pot-raise; you can't put your stack in with a single move. Two: in PLO equities run very close, so the doctrine built on fold equity — your power to make an opponent fold — weakens; nobody folds easily. The result: thirty big blinds in PLO is not the same as thirty big blinds in NLH. Carry the NLH reflex of 'short stack, 3-bet equals jam' into PLO and you'll burn. This module closes that contradiction: same depth, completely different execution.",
      },
      {
        title: "PLO stack modes",
        table: { section: "Chapter 15", sub: "15.1", caption: "Short PLO: a pot-raise = commit." },
        narration:
          "Stack modes work differently in PLO. At sixty big blinds and up you play standard PLO: implied odds are at their peak, and the value of rundowns and double-suited hands is highest. Twenty-five to sixty is the critical band: chapter five is void here, because there's no jam, only a pot-raise. In this band you play nut-focused; bare aces don't play postflop, their value is in pre-commit — that is, 3-betting to bring the stack-to-pot ratio to one or below. Below twenty-five, a pot-raise already puts the remaining stack in automatically on the flop; treat that as a jam and pick your range accordingly. One sentence: in short PLO a pot-raise means commit. Pick your range on the assumption that 'the stack goes in on the flop' — double-suited rundowns and strong ace-ace hands; cut anything with a dangler, that is, a disconnected fourth card.",
      },
      {
        title: "Commit threshold — SPR",
        table: { section: "Chapter 15", sub: "15.2", caption: "Commit is decided on the street you bloat the pot." },
        ruleBox: "In PLO the commit decision is made not on the flop, but on the street where you bloat the pot.",
        narration:
          "In PLO a bloated pot forms two streets earlier than in NLH, so know your commit decision before the pot bloats. Look at the table; the measure is again the stack-to-pot ratio. Below two, only the nuts plus a strong redraw put the stack in — a nut set plus a flush draw, or a wrap plus a nut flush draw. Bare aces or a one-way hand don't stack off at this ratio. Two to four: a made nut hand and a strong combo draw continue; the second nuts and a non-nut draw don't. Above four: you build high-nut-potential hands street by street, but a non-nut made hand here is a trap. One exception: if you bloated the pot yourself preflop — a 3-bet pot with a stack-to-pot ratio below one — bare aces as an overpair is a commit; that's not the root error, it's a preflop equity decision. What's forbidden is stacking off a one-way hand in a postflop bloated pot. In short: in PLO you decide commit not on the flop, but on the street where you bloat the pot.",
      },
      {
        title: "Counting outs — nut outs",
        bullets: [
          "Raw outs mislead; the stack-off threshold is measured in NUT outs.",
          "'Wrap + FD: 13 outs' — if half are non-nut, it's a trap, not a weapon.",
          "The real weapon: a nut-end wrap + a nut flush draw.",
        ],
        ruleBox: "For a stack-off, count NUT outs, not raw outs.",
        narration:
          "Finally, counting outs — and this is where PLO's most expensive illusion lives. Raw outs mislead you; you must measure the stack-off threshold in nut outs. The line 'wrap plus flush draw, thirteen outs' is dangerous undiscounted: if half of those thirteen outs are non-nut, you hold not a real weapon but a trap — even when it completes you make the second-best hand and lose the stack. Module nine's 'real weapon' label holds only for a wrap with a nut flush draw. The rule is clear: for a stack-off decision, count nut outs, not raw outs. How many of your outs actually put you ahead, and how many take you to second-best — don't put your whole stack in without making that distinction. This is module nine's rule that 'bare aces is one pair' extended to draws and to depth.",
      },
    ],
  },
  {
    id: "M15",
    title: "Mental spine: tilt, autopsy, re-entry",
    chapter: "Chapter 16 ★",
    minutes: 6,
    slides: [
      {
        title: "Bustout + re-entry card",
        table: { section: "Chapter 16", sub: "16.1", caption: "Bustout → 20 min away → fill in → decide." },
        ruleBox:
          "The series' most expensive decision isn't a hand: it's the re-entry decision made in the 5 minutes after a bustout. Auto-re-entry on tilt = the bankroll scale of the root error.",
        narration:
          "The book has been a hundred percent technical so far. But August twenty-first to twenty-ninth is an endurance race: the SHR, the PLO, an eight-day Main, and the HR, plus event overlaps. However good the technique, there was no single line managing the decision-state — fatigue, tilt, re-entry pressure — that has to apply it. This module gives those cards. The single most expensive decision isn't a hand: it's the re-entry decision made in the five minutes after a bustout. Firing an automatic re-entry on tilt is the bankroll scale of the root error — treating a single bullet as value inside a bloated series investment. The mandatory wait: bust out, twenty minutes away from the table, then fill in the card's questions, then decide. Look at the table: was the bustout a bad decision or variance, which flight does the next bullet eat, is your total series exposure within your pre-limit, is your physical state green. And your calibration, max bullets per event: SHR one, PLO two, Main two, HR two. The hundred-thousand SHR has no re-entry — there a second bullet alone is plus a hundred thousand euros, outside discipline.",
      },
      {
        title: "Tilt card",
        table: { section: "Chapter 16", sub: "16.2", caption: "First you NOTICE tilt, then you act." },
        ruleBox: "A decision made on tilt comes not from your range but from the wound — label the wound first.",
        narration:
          "The root error is rarely made cold; it typically shows up in the hands following a trigger. So on tilt you don't recite a memorized line — first you notice the tilt itself. Look at the table, three triggers and their immediate move: a bad beat or a big pot loss, symptom is chasing with bad hands, move is a deep breath. A long card-dead stretch and action hunger, symptom is playing faster and snap-calling, move is locking your hand for one orbit. Getting a bluff shown or ego, symptom is reaching for your phone, move is drinking water and standing up. Your symptoms, in your calibration, all three are present with no single dominant trigger: playing faster and snapping, reaching for the phone, chasing with bad hands. When any one of the three appears, sound the alarm; don't stop to diagnose which trigger it is — notice the symptom and apply that row's move. The rule: a decision on tilt comes not from your range but from the wound — so label the wound first.",
      },
      {
        title: "The autopsy rule",
        table: { section: "Chapter 16", sub: "16.3", caption: "Right decision + bad result → range DOESN'T change." },
        ruleBox: "If you followed the rule and lost: 'right decision, bad result' — the range DOESN'T change.",
        narration:
          "The last card is the autopsy rule, and this is the filter that protects your calibration. When do you run an autopsy? Not the moment the hand ends — after the day ends. At the table just note the hand, leave the analysis for the evening. You ask two questions: one, with what I knew at the moment of decision, what was the book rule? Two, did I follow that rule? If you followed it and still lost, write 'right decision, bad result' in your case log — and don't change your range. Why is this filter critical? Because in the SHR correct jams will often lose; without this filter you'd start breaking chapter four and five's carefully calibrated tables mid-tournament. One warning: don't let the 'it was right, it was variance' label become a self-absolution door — it's valid only if you genuinely followed the rule. It's the decision that's judged, not the result.",
      },
    ],
  },
  {
    id: "M16",
    title: "WSOP Day 2 — 56bb restart plan",
    chapter: "Chapter 17",
    minutes: 8,
    slides: [
      {
        title: "Why this tournament gets its own module",
        table: { section: "Chapter 17", sub: "17.1", caption: "Day 2 profile — 56bb, freezeout, no re-entry" },
        bullets: [
          "Freezeout + no re-entry — one bullet, bustout is final.",
          "25-minute levels are fast: 56bb melts to 25bb on three hours of passive play.",
          "Wide in number of hands, narrow in stack risk.",
        ],
        ruleBox: "Passivity isn't safe in this structure — it's slow elimination.",
        narration:
          "This is your tournament: the WSOP Online Main Event, day two restart, fifty-six big blinds. Why a separate module outside the general doctrine? Because three structural facts bend every decision. One: this is a freezeout with no re-entry — if you bust, you're done, there's no second bullet. Two: levels are twenty-five minutes, so very fast; blinds grow about two and a half times an hour, and fifty-six big blinds melts to twenty-five big blinds on just three hours of passive play. So in this structure doing nothing and waiting is not safe — it is a slow elimination. Three: the money isn't locked yet, you're sitting down as if at a table just before the bubble. The sum of these three gives a single profile: wide in the number of hands, narrow in stack risk. You will be constantly active in small pots — stealing, applying pressure — but you commit your whole stack only with a clear plan and a strong hand combination. In a bloated pot a single pair, aces included, is still a bluff-catcher; the root-error rule applies here one to one.",
      },
      {
        title: "Opening ranges (8-handed, ~50bb)",
        table: { section: "Chapter 17", sub: "17.3", caption: "Open by position — 2.1–2.3x, ante in play" },
        bullets: [
          "There's an ante, so stealing is still very profitable.",
          "Early position is tight (13–15%); the button is wide (40–44%).",
          "Drop below 35bb and this table no longer applies → stack modes.",
        ],
        visuals: [
          {
            kind: "range",
            value: "22+, A2s+, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o",
            valueLabel: "Button open",
            caption: "Button ~40% open range",
            compact: true,
          },
        ],
        narration:
          "Your opening ranges; sizing is two point one to two point three times, there's no point opening bigger at this depth. Read the table position by position. In early position, that is UTG and UTG plus one, you open tight: sevens and up, ace-ten suited and up, king-jack suited, queen-jack suited, ace-jack offsuit and up, king-queen offsuit. In middle and late position the range widens; on the button you open almost all the suited aces, wide suited kings, and connected hands, around forty percent. Online, opponents defend their blinds more correctly, so keep early position a touch tighter; but because the ante is sitting there, stealing is still very profitable. One table adjustment: if there's a tight player in the big blind who folds very often, widen your button and cutoff range by ten percent. And don't forget this threshold: if you drop below thirty-five big blinds this table loses its validity, and you move to the stack modes on the next slide.",
      },
      {
        title: "3-bet: to whom yes, to whom never",
        table: { section: "Chapter 17", sub: "17.4", caption: "3-bet value + bluff; size IP 3x, OOP 4x" },
        bullets: [
          "Who to 3-bet: 30–50bb middle stacks (they feel bubble pressure most) + regs who open a lot.",
          "Who NOT to bluff 3-bet: big stacks that cover you + anyone under 20bb.",
          "Value 3-bet is always allowed — only the bluff 3-bet is banned.",
        ],
        ruleBox: "What burns against a cover is the bluff 3-bet; the value 3-bet (queens+/AK) stays free.",
        narration:
          "Your 3-bet ranges. Sizing: three times the open when you're in position, four times out of position; at fifty-six big blinds a 3-bet pot already sees half your stack, so your range is polarized. The real question is who to 3-bet and to whom never. Aim your bluff 3-bet at two targets: the middle stacks between thirty and fifty big blinds, because they feel bubble pressure most and they fold; and the regs who open the table a lot. Who NOT to bluff 3-bet: one, the big stacks that cover you — as the bubble nears their only answer is a jam and your bluff burns; two, the short stacks under twenty big blinds, their only answer is also a jam. But note: what's banned here is the bluff 3-bet, not the value one. With queens and up and with ace-king you always value 3-bet; continuing against a covering player's jam is a separate decision, we'll cover it on the ICM thresholds slide. And don't change your sizing hand to hand: same size with aces and with ace-five suited, because a sizing tell is even more expensive online than live.",
      },
      {
        title: "4-bet and the commit threshold",
        table: { section: "Chapter 17", sub: "17.6", caption: "4-bet = ~2.2–2.4x the 3-bet; at 56bb ~20bb = commit" },
        bullets: [
          "At 56bb a 4-bet is ~20–22bb = the commit threshold; whoever continues can no longer fold.",
          "4-bet value: KK+; AK mixed; QQ depends on the opponent.",
          "If you get 3-bet: call QQ–99/AQs/AJs/KQs; fold offsuit edges like A9o.",
        ],
        ruleBox: "Every hand you 4-bet must have its plan against a 5-bet jam decided in advance. No \"4-bet and see.\"",
        narration:
          "The 4-bet and what to do when you get 3-bet. First the sizing: a 4-bet is about two point two to two point four times the 3-bet. At fifty-six big blinds that's about twenty to twenty-two big blinds — and that is a commit threshold; whoever continues to a 4-bet can no longer fold, so every hand you 4-bet must have its plan against a five-bet jam decided in advance, there's no four-bet and see. The value side: kings and up are clean value; ace-king is mixed, between a jam and a four-bet; queens depend on the opponent — you can fold queens to a nit, jam against an aggressive player. Now the reverse situation, you opened and a 3-bet came back. In position: four-bet kings and up for value; four-bet ace-five and ace-four suited as a low-frequency bluff, because you block an ace. The band you call: queens down to nines, ace-queen suited, ace-jack suited, king-queen suited. Fold: dominated offsuit edges like ace-nine offsuit, and low suited gappers. Out of position, tighten this whole band by one notch.",
      },
      {
        title: "Stack modes A–E",
        table: { section: "Chapter 17", sub: "17.8", caption: "Before every hand: which mode am I in?" },
        bullets: [
          "Mode A (45bb+): full ranges, postflop maneuver.",
          "Mode B (30–45bb): flats narrow, commit approaches, value rises.",
          "Mode C/D (12–30bb): most 3-bets are jams; A5s–A2s become jam ammo.",
        ],
        ruleBox: "Playing a 130bb range at 45bb is the most expensive habit — mode before range.",
        narration:
          "The first question before every hand isn't a hand question, it's a mode question: which stack mode am I in? You pick the range only after that. Mode A, forty-five big blinds and up: full ranges, postflop maneuver, suited connectors and small pairs at full value. Mode B, thirty to forty-five: the open holds but the flat call narrows because set-mining breaks down, the commit threshold approaches, the bluff 3-bet drops and value rises. Mode C, twenty to thirty: the open comes down to fifteen, twenty percent, the 3-bet is mostly a jam or a small commit, and ace-five down to ace-two suited turn into jam ammo. Mode D, twelve to twenty: from some positions you jam directly, if you opened it's jam or fold to a 3-bet, close to Nash. Mode E, under twelve: pure jam or fold. The most expensive mistake has its name right here: playing a hundred-thirty big blind range at forty-five big blinds. Memorize the transitions — going from fifty-six to thirty-five drop the flat-call habit, going from thirty-five to twenty the commit threshold shifts earlier.",
      },
      {
        title: "Phase plan, ICM thresholds, guardrails",
        bullets: [
          "Phase 2 (bubble near) = the most profitable phase: shorts freeze up, you crush with 3-bet/float.",
          "ICM threshold: on the bubble, your whole-stack range vs a cover's 4-bet jam = KK+.",
          "AK: fold to a cover's tight jam; always call a ≤20bb jam.",
        ],
        ruleBox: "A single pair in a bloated pot = alarm — aces included. If the pot passed 40bb: pot control + bluff-catcher.",
        visuals: [{ kind: "hand", cards: "AA", label: "Single pair in a bloated pot — alarm" }],
        narration:
          "Last slide: the phase plan, the ICM thresholds, and the root-error guardrails. There are four phases. While the bubble is far, stay in Mode A, keep your stack above fifty big blinds, don't fight the big stacks needlessly. As the bubble nears — this is your most profitable phase — the fifteen to twenty-five big blind stacks freeze up; 3-bet their opens, open into their blinds, float their c-bets. Your only brake: the players who cover you, one notch tighter against them. The moment the money hits, play three or four hands tight, the shorts fire kamikaze jams, meet them with premiums, then return to normal. Deep in the money and at the final table the ladder is huge: ICM outweighs chip-EV, crush the shorts, avoid the equals, premiums to the bigs. Now the numeric ICM threshold, memorize it: on the bubble, against a covering player's four-bet jam, even queens fold — because against kings and ace-king you have about forty percent equity, then the bubble ICM premium is added and the equity you need climbs to forty-eight percent. Practical rule: on the bubble, against a cover for your whole stack, your range is kings and up. Ace-king folds to a cover's tight jam but always calls a jam under twenty big blinds. And the unchanging guardrail: a single pair in a bloated pot, aces included, is an alarm — if the pot passed forty big blinds your default is pot control and bluff-catcher, not a stack race.",
      },
    ],
  },
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}
