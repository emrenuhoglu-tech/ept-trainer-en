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
          "This is the heart of the book. In the first module we saw the root error: misclassifying one pair in a bloated pot. That error explodes on the river, but it's actually born preflop. Think of it this way: what we call a bloated pot is, ninety percent of the time, a 3-bet pot. So the source of that hard river decision sits much earlier — in a badly built preflop 3-bet range. A very powerful conclusion follows: building your 3-bet range correctly is the most efficient way to lower the frequency of the root error — it pays off faster than even improving your hand reading, because you cut the problem off where it's born. We'll test every range with two questions. Question one: if I 3-bet this hand and see a flop, will I be comfortable when I make one pair? If not, I don't 3-bet that hand — I flat it or I fold it. Question two: will I be left out of position? One pair in an out-of-position 3-bet pot is, by definition, a bluff-catcher. That's exactly why out-of-position ranges are markedly tighter than in-position ranges. Keep these two questions in mind, because every table that follows is built on them.",
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
          "You won't carry solver ranges to the table as-is, because the live field doesn't play like a solver. There are three systematic deviations in the EPT field, and you'll correct all three in your favor. First: live players fold far too little to 3-bets. So lower your bluff 3-bet frequency and widen your value 3-bet range instead — there's a field out there ready to pay you. Second: the 4-bet bluff barely exists live. When someone 4-bets you, it's a real hand; take even queens and below seriously, and don't auto-5-bet ace-king. Third: opens are wide and cold-calls — flat calls — are everywhere. That makes the squeeze your most profitable move, and in multiway pots you drop the bluff 3-bet entirely, because there's no fold equity. Wrap it all into one sentence: live, the money comes not from bluff 3-bets but from a wider value 3-bet range. Theory pushes you toward balance, but the field gives you permission to profit from imbalance — use that permission.",
      },
      {
        title: "Sizing",
        table: { section: "Chapter 4", sub: "4.2", caption: "Memorize it — don't think." },
        narration:
          "You'll memorize the sizes so you don't have to think at the table. In-position 3-bet: three times the open; live you're free to go up to three and a half. Out-of-position 3-bet: four times the open, blinds included — being out of position, you go a bit bigger so you don't give weak hands a good price. If cold-callers have entered in between, add one open size per cold-caller. The squeeze — the 3-bet you fire over an open plus a call — runs four and a half to five times. As for 4-bets: in position, two point two times the 3-bet; out of position, two point five. Turn these numbers into reflexes, because if you start thinking about sizing, you'll lose tempo and leak reads through your sizes.",
      },
      {
        title: "Range table (interactive)",
        rangeMatrix: true,
        narration:
          "Now we get to the core: 3-bet ranges by position. Use the table below yourself: first pick who opened along the top, then tap your own position; you'll see the value and bluff ranges for that matchup, with the flat notes underneath. Keep the general principles in mind. Against early-position opens — UTG and UTG plus one — you're in discipline territory: value is very narrow, queens and up plus ace-king, and bluffs are rare or nonexistent. As the opener's seat gets later — a cutoff or button open — both your value and bluff ranges widen, because their range is weaker. The most profitable spot is when the small blind opens and you're in the big blind; there your range is at its widest, because their range is very wide and you have position. And don't forget this warning: the hands in the bluff row were chosen for flop playability, not blocker theory — hands you can play comfortably on the flop if your 3-bet gets called. Play with the table; see the matchups with your own eyes.",
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
          "We've covered the 3-bet; now the cold-call — flat-calling someone's open without 3-betting. A cold-call is actually a harder decision than a 3-bet, because you're giving up the initiative — you're not the one controlling the pot. There are three conditions, and if all three don't hold at once, don't flat. First, position: either you're in position, or you're closing the action in the big blind; don't flat out of position in the middle with players behind you. Second, depth: if you're set-mining, the effective stack must be at least fifteen times your call. So at a hundred big blinds, calling three big blinds with more than forty-five behind — fine. Make the same call at forty big blinds and the price doesn't work; even when the set comes, you can't get your money out of it. Third, a paying opponent: there has to be someone who'll give you money when you make the set; set-mining against a tight reg is unprofitable, because they stop when the set arrives. And one multiway warning: if there's an aggressive player behind you capable of 3-betting, flatting a solid hand leaves you exposed to the squeeze. In that case, either upgrade to a 3-bet or let the hand go; don't flat in the middle.",
      },
      {
        title: "The squeeze — the most profitable single move",
        bullets: [
          "The cold-caller's range is tight but weak: can't 4-bet, folds most of it.",
          "VALUE: JJ+, AQs+, AKo. BLUFF: A5s–A4s, KQs, AJs.",
          "If the cold-caller is a fish, cut the bluffs — value squeeze only.",
        ],
        narration:
          "The most profitable single move in a live tournament deserves its own slide: the squeeze. The squeeze is the big 3-bet you fire after one player opens and another calls. Why is it so profitable? Because the cold-caller's range is tight but weak — by calling, they've announced 'I have a medium-strength hand'; they can't 4-bet, and under pressure they fold most of it. Your value side: jacks and up, ace-queen suited and up, ace-king offsuit. Your bluff side: ace-five and ace-four suited, king-queen suited, ace-jack suited — these carry blockers and stay playable if you get called. Size it four and a half times in position, five times and up from the blinds. One more adjustment: if the cold-caller is tight, widen your bluff side, because they'll fold. But if the cold-caller is a fish — someone who doesn't fold — cut the bluffs entirely and squeeze value only. You don't bluff a fish; you make the fish pay.",
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
          "Finally we lay the stack-mode layer over all of these ranges, because range changes with mode. At two hundred big blinds and up you play value-heavy: few bluffs, the widest flats, because implied odds are at their peak. One hundred to one hundred fifty is standard mode; the tables in this chapter apply as-is. Sixty to a hundred you get more polarized: more bluffs, but flats narrow, because set-mining weakens. Forty to sixty you play linear, or merged, with almost no flats — 3-bet or fold. Twenty-five to forty, a 3-bet now means commitment; any hand you 3-bet must be able to continue against a 4-bet. Below twenty-five the structure simplifies: jam or fold — there is no such thing as 3-bet-fold. And I'll repeat the most common mistake, because it's so expensive: playing a hundred-and-thirty-big-blind range at forty-five big blinds. You flat a small pair hunting a set, but the depth isn't there; you fire a 3-bet bluff with a suited connector, but there's no fold equity and no implied odds. Both are straight losses at this depth. Mode first, then range — the shared sentence of this module and the one before it.",
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
          "Before we get to the 4-bet range, let's set down the live reality, because this is where theory and the live field part ways. The 4-bet bluff barely exists live; people fire 4-bets with real hands. Two consequences for you. First: when someone 4-bets you, take it seriously — don't shrug off even queens and below, because the player across from you is very likely genuinely strong. Don't reflex-5-bet the moment you see ace-king; live, that 4-bet is usually ahead of you. Second: be very careful with your own 4-bet bluffs; if nobody folds, the bluff 4-bet you fire is just burning money. So the rule is the same on defense and offense: live, the 4-bet is for value, not for bluffing.",
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
          "Now the other side of the coin: you opened and got 3-bet. What's your answer? Follow the table. 4-bet value: kings and up, plus ace-king against a 3-bet from late position. 4-bet mix: queens and ace-king offsuit are sometimes 4-bet against a late-position 3-bet, but never against early position. The 4-bet bluff is possible with ace-five and ace-four suited, but very, very rare live; if nobody folds, a bluff 4-bet is just burning money. Flat — calling the 3-bet: in position and a hundred and fifty big blinds deep, queens, tens, ace-queen suited, king-queen suited; if the price is under three times, suited connectors join too. And fold: all offsuit broadways out of position — ace-jack, king-queen, ace-ten — are trash against a 3-bet; let them go. Now the most critical warning: a 4-bet pot is a bloated pot. Taking flop and turn value there with aces and then jamming the remaining stack on a bad river is an exact replay of the third case in module one — that two-four-five-six board. The rule doesn't change: if no worse hand will pay you off on the river, jamming is not value. Building your preflop range correctly is how you never face that river decision in the first place.",
      },
      {
        title: "4-bet sizing",
        bullets: ["4-bet IP: 2.2× the 3-bet", "4-bet OOP: 2.5× the 3-bet"],
        ruleBox: "Memorize the size — don't think at the table.",
        narration:
          "Finally, sizing. In position, the 4-bet is two point two times the 3-bet. Out of position you go a bit bigger: two point five times the 3-bet. The reason it's bigger out of position is to avoid giving weak hands a good price and keeping them in the pot. Turn these two numbers into reflexes; if you start thinking about sizing, you'll lose tempo and leak reads through your sizes.",
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
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}
