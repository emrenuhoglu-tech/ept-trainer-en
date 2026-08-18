const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Quiz-BUYIe8bG.js","assets/vendor-nf7bT_Uh.js","assets/quizEngine-sQF5emxt.js","assets/Drill-BhNcNvmW.js","assets/kavramlar-BaUvBKlS.js","assets/Simulator-Sl6MqymK.js","assets/Progress-CaN46qhv.js","assets/QuickReference-ddFS3Kpn.js","assets/Sentences-CnrhkSoD.js","assets/RangeAtlas-CSVIQ1dK.js","assets/EquityIntuition-Bcu4tkSF.js","assets/BetTypes-BecIGBH-.js","assets/QuestionBank-CV2v9GmI.js","assets/IcmCard-BlWEAANa.js"])))=>i.map(i=>d[i]);
var ht=Object.defineProperty;var ct=(t,a,n)=>a in t?ht(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;var H=(t,a,n)=>ct(t,typeof a!="symbol"?a+"":a,n);import{r as d,a as dt,R as He}from"./vendor-nf7bT_Uh.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Ye={exports:{}},ce={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ut=d,pt=Symbol.for("react.element"),bt=Symbol.for("react.fragment"),ft=Object.prototype.hasOwnProperty,mt=ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yt={key:!0,ref:!0,__self:!0,__source:!0};function $e(t,a,n){var o,s={},i=null,r=null;n!==void 0&&(i=""+n),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(r=a.ref);for(o in a)ft.call(a,o)&&!yt.hasOwnProperty(o)&&(s[o]=a[o]);if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:pt,type:t,key:i,ref:r,props:s,_owner:mt.current}}ce.Fragment=bt;ce.jsx=$e;ce.jsxs=$e;Ye.exports=ce;var e=Ye.exports,ve={},Re=dt;ve.createRoot=Re.createRoot,ve.hydrateRoot=Re.hydrateRoot;const gt="modulepreload",wt=function(t){return"/ept-trainer-en/"+t},Ee={},K=function(a,n,o){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(n.map(h=>{if(h=wt(h),h in Ee)return;Ee[h]=!0;const c=h.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":gt,c||(u.as="script"),u.crossOrigin="",u.href=h,l&&u.setAttribute("nonce",l),document.head.appendChild(u),c)return new Promise((y,b)=>{u.addEventListener("load",y),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return a().catch(i)})},ie=[{id:"M1",title:"The root error",chapter:"Chapter 0 + Chapter 7",minutes:6,slides:[{title:"What the root error is",bullets:["One pair in a bloated pot is a bluff-catcher — AA included.","If no worse hand will pay you off on the river, jamming is not value.","Chops don't jam."],ruleBox:"One pair in a bloated pot is a bluff-catcher — AA included. That's your root error; all three bustouts came from it.",visuals:[{kind:"hand",cards:"AA",label:"One pair — AA included"}],narration:"This module revolves around a single mistake, because the thing that busted you three times was always the same. We call it the root error. Here's its sentence: one pair, in a bloated pot, is a bluff-catcher — aces included. Meaning: when there's a lot of money in the pot and all you hold is one pair, that hand is no longer played for value — it's played only to catch your opponent's bluffs. Burn this in: holding aces doesn't automatically make your hand a monster in a bloated pot; the bigger the pot, the more likely your opponent has you beat. The second sentence is the river leg of the same idea: if no hand worse than yours will pay you off on the river, a jam — an all-in — is not value. A value bet, by definition, gets a worse hand to pay you; if no worse hand will call, your all-in only invites the strong hands — the ones that beat you. The third sentence is a reading shortcut: chops don't jam. When the board plays toward a split and your opponent moves all-in, that player has already removed the chopping hand from their range — the hand they're jamming isn't the chop, it's the hand that beats you. Now let's watch how these three sentences lose money at the table, in three real cases."},{title:"Case 1 — A4s river call",bullets:["$50K High Roller, WSOP 2026.","You read the chop mechanic correctly — and skipped one filter.","Chops don't jam — seeing the mechanic isn't enough."],visuals:[{kind:"hand",cards:"A4s",label:"Your hand"}],narration:"The first case: a fifty-thousand-dollar high roller. The board is open to a split — the chop mechanic is on the table. And you actually read that mechanic correctly — you spotted the possibility of a chop. But you skipped one filter, made the hero call, and paid it off. The filter you skipped: chops don't jam. If your opponent moved all-in on you, they've removed the chopping hand from their range — nobody shoves a whole stack with a hand that splits, because splitting just means getting your money back; it isn't worth the risk. So their jam isn't coming from the chopping hand — it's coming from a hand that beats you. The rule that falls out of this: seeing a mechanic correctly is not enough on its own. 'The board can chop' is half the job. The other half: is your opponent's move consistent with that mechanic? If a chop is live and your opponent checks, the chop is meaningful. But if a chop is live and your opponent jams, the jam itself is telling you the chop has left the table. Read the move together with the mechanic."},{title:"Case 2 — KTo top pair check-raise all-in",bullets:["$10K 6-Handed. Wet board, check-raise all-in with top pair.","Villain called with the QQ they had flatted.","The right line: check-call, then reassess."],visuals:[{kind:"hand",cards:"KTo",label:"Your hand (top pair)"},{kind:"hand",cards:"QQ",label:"Villain (flatted)"}],narration:"The second case: a ten-thousand-dollar six-handed event. A wet board — a texture full of connections and draws. You have top pair — say you flopped a king with king-ten — and you check-raised all-in. Villain paid you off with the queens they had flatted preflop, and you busted. What was the right play? Check-call, then reassess street by street. Top pair on a wet board is not a big-pot starter. Why? Because when you push the whole stack in, the range that calls you is better than you. Weak hands, bluffs, and draws don't call an all-in — they fold; only sets, bigger pairs, and completed hands pay you. So the moment you're the one starting the stack-off, you've turned your hand into a bluff-catcher while playing it as if it were value. The rule: one pair is not stack-off fuel. The road to a bloated pot quietly demotes your hand's class; you're still looking at top pair, but as the pot has grown, that hand has become a bluff-catcher. Paying one off is one thing; starting it is another."},{title:"Case 3 — AA river jam",bullets:["PokerOK $108 Mystery Bounty, July 2026.","Board 2-4-5, river 6. Your hand AA, villain 66.","Flop and turn value were right — the jam on the bad river 6 was wrong."],visuals:[{kind:"replay",replay:{hero:"AA",villain:"66",heroLabel:"You (AA)",villainLabel:"Villain (66)",streets:[{name:"Preflop",note:"AA vs 66 — you're way ahead."},{name:"Flop",add:"2c 4d 5s",note:"Flop 2-4-5. AA is still an overpair and ahead; flop value is right."},{name:"Turn",add:"??",note:"Turn (not specified in the book). Keep taking value — the play is right up to here."},{name:"River",add:"6h",note:"River 6 → 66 is now a SET. No worse hand pays you off; the jam is NOT value. The root error is right here: jamming an overpair like value on a bad river."}]}}],narration:"The third case is the freshest and the most instructive. Board: two, four, five. You hold aces, the strongest starting hand in the game. You value bet the flop — correct. You value bet the turn — also correct, because up to that point there was still someone with sevens, eights, nines — worse pairs, weaker hands — ready to pay you. Then the river came a six. Now look at that board carefully: two, four, five, and now a six. That is a bad river, because on that card no hand worse than yours will pay you. Think it through: anyone holding a three just completed the straight and beats you; sets beat you — and in fact villain rivered a set with pocket sixes. Every hand worse than yours — every hand that could have paid you — is either checking it down or has overtaken you on that river. You jammed the remaining stack anyway, and villain paid you off with the sixes that made a set on the river. The mistake was the all-in itself. There was no value target. The rule is crisp: if no worse hand will pay you off on the river, jamming is not value. On that bad river your hand still looks good, but its value has run out; in a small pot you check-call and reach showdown cheap, in a big pot you check-fold. Letting go of aces feels hard — but this is exactly the spot where they have to be let go."},{title:"One rule for all three",bullets:["All three cases share the same root error: misclassifying one pair in a bloated/multiway pot.","Overpair on a bad river: check-call a small pot, check-fold a big one."],ruleBox:"If no worse hand will pay you off on the river, jamming is not value. Overpair on a bad river: check-call a small pot, check-fold a big one.",narration:"Look at the three cases side by side: different tournaments, different hands, different boards — but one root error. One pair — aces included — misclassified in a bloated or multiway pot. Each time, the hand looked strong to you; but as the pot grew, it turned into a bluff-catcher, and you kept playing it like value. The sentence to take to the table: if no hand worse than yours will pay you off on the river, jamming is not value. And its practical form: with an overpair on a bad river, check-call a small pot and see showdown cheap; check-fold a big one. Internalize this module and you will never replay the three hands that busted you. In the modules ahead we'll see where this root error is born — in preflop 3-bet ranges — and how to prevent it."}]},{id:"M2",title:"Bluff selection & board ownership",chapter:"Chapter 1",minutes:6,slides:[{title:"The three criteria",table:{section:"Chapter 1",sub:"1.1",caption:"If one is missing, it's not a bluff — just chips you're losing."},narration:"Bluffing is not a random act of courage; three criteria make a hand bluff fuel, and a hand has to pass all three at once. First, the blocker. Does a card in your hand take your opponent's strongest hands away from them? Say you hold the ace of spades: you're blocking the nut spade flush, shrinking the chance they make their strongest hand. Second, connection. Does the hand touch the board — can it improve? An open-ended straight draw or a flush draw is real connection; two high cards just hanging in the air are not. Third, board ownership. Whose range does this board hit? A ten-nine-eight texture usually belongs to the defender; a dry ace-king-seven texture belongs to the opener. Now the critical point: if even one of these three criteria is missing, your hand is not a bluff — it's just chips you're tossing into the pot to lose. So before you start a bluff, ask all three questions: am I blocking, am I connecting, and is this board mine?"},{title:"The J2s lesson — the suited trap",bullets:["Being suited doesn't make a hand bluff fuel.","What you're after isn't suited: it's connected and blocking.","The reverse trap in offsuit broadways: KJo, QJo — blockers, no connection."],visuals:[{kind:"hand",cards:"J2s KJo QJo",label:"NOT bluff fuel"}],narration:"Now for a very common trap: the suited trap. People see a hand is suited and assume it's automatically fit to bluff with. Take jack-deuce suited. Does it have blocker value? No — it takes nobody's nuts away; a deuce and a jack block no one's strong hands. Does it connect? Barely — there are nine ranks of daylight between the two cards, so making a proper straight draw is very hard. And if the flush does come in? Even then it carries bottom-flush risk — you can end up paying off a higher flush. So the word suited is fooling you; what you're after isn't suited, it's connected and blocking. The same trap runs in reverse with offsuit broadway hands. King-jack offsuit, queen-jack offsuit — these have blocker value, because they hold big cards, but they have no connection; they don't sit properly on boards. They're not bluff fuel either. The lesson: neither being suited nor holding big cards makes a hand bluff-worthy on its own; demand all three criteria together."},{title:"Who owns the board",bullets:["Check-raise bluffs: on boards that hit YOUR range (T98, 765, J-middle).","On villain's board (A-K high and dry): draws call quietly."],ruleBox:"Check-raise bluffs belong on boards that hit YOUR range. On boards that hit villain's range (A-K high and dry), draws call quietly.",visuals:[{kind:"board",cards:"Ts 9d 8c",label:"Your board (T98) — check-raise bluff"},{kind:"board",cards:"7h 6s 5c",label:"Your board (765)"},{kind:"board",cards:"Ah Kd 7c",label:"Villain's board (A-K dry) — call"}],narration:"Say you hold a hand that passes all three criteria. You can still pick the wrong move, because the move is decided by who owns the board. The critical split: check-raise bluffs are made on boards that hit your range — ten-nine-eight, seven-six-five, connected textures with a jack in the middle. Those boards fit the defender's story, so your check-raise is believable. But if the board hits your opponent's range — a high, dry ace-king-seven, say — your draws call quietly there; they don't check-raise. Let's see why in numbers. An ace-king-seven board smashes the cutoff's opening range: ace-king, ace-queen, ace-jack, king-queen, ace-seven suited, pocket sevens, aces, kings — all of it connects with this board. And how many ace-king combos live in your big blind defense range? Very few. So when you check-raise this board, villain thinks, 'this guy can hardly have ace-king here' — your credibility is low. The result: you can't fold out the good hands, they call; you only fold out the air you were beating anyway. You've risked your gutshot in a bloated pot just to win air's small pot. Calling, instead, solves everything: you see a cheap turn; if a ten arrives, you win a whole stack with a hidden straight; if a spade arrives, you unlock the option to turn aggressive; and if it bricks, you get out of the way cheap. Dry, high, villain's board: don't raise — call."},{title:"Who not to bluff",bullets:["Rec / station: doesn't fold — think value bet instead.","Short stack: in auto-call territory.","Committed player: folding is psychologically shut off.","Big stack cruising the bubble: pays you off for free."],narration:"Finally: even with the right hand and the right board, some opponents should never be bluffed. First, the rec or station type: this player doesn't fold, so against them think value bet, not bluff — get paid when your hand is good, and don't bother when it isn't. Second, the short stack: the call price is small next to their stack, so they sit in auto-call territory; your bluff won't move them. Third, the committed player: past a certain point, folding shuts off psychologically for them — they pay you off no matter what you do. And fourth, the big stack cruising through the bubble: they can pay you off with impunity, because even if they lose, they don't fall out of the tournament — calling you costs them nothing. A bluff needs the right opponent on top of the right hand. A perfect bluff aimed at the wrong player is still lost chips."}]},{id:"M3",title:"Deceptive medium hands",chapter:"Chapter 2",minutes:5,slides:[{title:"Small-pot winner, big-pot loser",bullets:["JTs, KQ, KJ, 97s.","Their roles: open / flat / BB-defend.","Their role is NEVER big-pot starter (3-bet, stack-off)."],ruleBox:"JTs, KQ, KJ, 97s: small-pot winners, big-pot losers. Their roles are open / flat / BB-defend — never big-pot starter.",visuals:[{kind:"hand",cards:"JTs KQ KJ 97s",label:"Deceptive medium hands"}],narration:"This module is about a family of hands: jack-ten suited, king-queen, king-jack, nine-seven suited. We call them deceptive medium hands, because they look good and they lead you astray. Their one-sentence identity: small-pot winner, big-pot loser. Their roles are opening, flatting — calling — or defending from the big blind. Their role is never, ever starting a big pot — you don't 3-bet these hands and push stacks in with them. Keep the pot small and these hands are your friends; inflate it and they become your enemies. We'll unpack why on the next slide, but first let this settle in: when you see these hands, your reflex should say 'small pot,' not 'stack.'"},{title:"Why they get dominated",bullets:["JTs top pair: kicker problem. KQ: in the shadow of AK/AQ. 97s two pair: exposed from above.","In small pots they drip money out of marginal hands; in big ones the opposing range narrows and strengthens."],narration:"Why do these hands lose big pots? Take them one at a time. Make top pair with jack-ten suited and you have a kicker problem; say you paired the jack — most of the hands that pay you carry a better kicker. Make top pair with king-queen and you're in the shadow of ace-king and ace-queen; even when you pair the king or the queen, the dominating hands are still out there. Even flop two pair with nine-seven suited and the board is open above you — bigger two pairs and straights can overtake you. Now combine that with pot size. While the pot is small — a single-raised pot — these hands slowly drip money out of your opponent's marginal holdings; weak top pairs and second pairs pay you off. But when the pot grows — 3-bet level and beyond — the range across the table narrows and strengthens; now only strong hands put in that much money, and that strong range dominates you. In one sentence: the hand stays the same, but when the pot size changes, the winning side changes. That's exactly where the deception lives."},{title:"The KQo case — equity vs playability",bullets:["42bb, an HJ reg (~22%) opens, you hold KQo in the CO. Correct: fold.","Raw equity ~45%, but you can't realize it.","Your best flops are your priciest traps: K → pays off AK, Q → pays off AQ."],ruleBox:"Equity is won on paper; money is won at the table.",visuals:[{kind:"hand",cards:"KQo",label:"Your hand (CO) — 42bb, HJ reg opened"}],narration:"Let's finish with a concrete example. You're forty-two big blinds deep, day two. A reg opens from the hijack, on a range of roughly twenty-two percent. You're in the cutoff with king-queen offsuit. The correct decision is fold. Why fold, when the hand doesn't look bad? Because raw equity and playability are two different things. Against that twenty-two percent range, king-queen offsuit's raw equity is about forty-five percent — not bad on paper. But you can't realize that equity. The ace-king, ace-queen, kings, queens, and aces in villain's range turn your best flops into graves. You flop a king, you're delighted — and you pay ace-king off across three streets. You flop a queen — you pay ace-queen. Your brightest scenarios are actually your most expensive traps. On top of that, at forty-two big blinds, if you 3-bet and catch a 4-bet you can't continue, and calling to play the hand without position leaves you with no initiative. The golden sentence here: equity is won on paper; money is won at the table. Decide whether to play a hand not on its raw equity, but on whether you can actually bank that equity."}]},{id:"M4",title:"Stack modes & ICM",chapter:"Chapter 3",minutes:5,slides:[{title:"Stack modes",table:{section:"Chapter 3",caption:"Mode first, then range."},narration:"The first question to ask before every hand isn't a hand question — it's a mode question: which stack mode am I in? You pick the range after that. Let's walk through the modes. Eighty big blinds and up is standard mode; normal charts apply, and suited connectors and small pairs are at peak value because depth gives you implied odds. Forty to sixty is the first tightening; your open size stays fixed but the range shrinks — the bottom offsuit band drops out: hands like king-ten offsuit, queen-jack offsuit, jack-nine offsuit go in the bin. Twenty-five to forty is a serious mode change; suited connectors lose value because implied odds shrink, ace-x hands gain value in exchange, and you run every hand through the filter 'what's my clear decision against a jam?' Fifteen to twenty-five is the open-jam boundary; from some positions you open two times, with others you jam outright. Below fifteen there's only one mode: jam or fold; no move outside that range exists. Summary: look at your stack before you look at your hand, because the same hand in a different mode is a different hand."},{title:"Medium pairs below 30bb",bullets:["77–TT below 30bb are not post-flop hands — jam-or-fold.","Miss the set and there's no stack to survive three streets.","Hit it and a short stack can't extract the maximum anyway."],visuals:[{kind:"hand",cards:"77 88 99 TT",label:"Below 30bb: jam-or-fold"}],narration:"Inside the modes there's one threshold that deserves its own spotlight: medium pairs below thirty big blinds. Hands like sevens, eights, nines, tens are not hands to play post-flop below thirty big blinds; they are jam-or-fold hands. Why? The constraint cuts both ways. One: you want to set-mine, but if the set doesn't come, you don't have the stack to absorb three streets of pressure and keep going — the first bet already commits you. Two: even when the set does come, a short stack can't extract maximum value, because there isn't much money behind to win. So the classic appeal of these pairs — 'flop a set cheap, win a stack' — doesn't work below thirty big blinds. At this depth, don't try to dance post-flop with a medium pair; jam it or fold it."},{title:"The ICM layer",bullets:["30bb on the bubble ≠ 30bb on Day 1.","Short stacks on your left: widen.","Big stacks on your left: tighten.","A medium stack on the bubble is the most fragile position — patience."],ruleBox:"30bb on the bubble ≠ 30bb on Day 1.",narration:"On top of stack mode sits the ICM layer — money pressure. Start with this sentence: thirty big blinds on the bubble is not the same hand as thirty big blinds on day one. As the money approaches, the same stack no longer plays the same range, because chip value is no longer symmetric — the chips you lose hurt more than the ones you win. You adjust to the table. Short stacks on your left: widen your opening range, because they're playing to survive and won't fight back easily. Big stacks on your left: tighten, because they can 3-bet you with impunity, and under money pressure you'll be forced to fold. And most critical of all: a medium stack on the bubble is the most fragile position. You can't jam freely like a short stack, and you can't apply pressure like a big stack; you're caught in between. The only prescription for this mode is patience — read your position and your table, and wait for the right moment."}]},{id:"M5",title:"3-bet & call ranges",chapter:"Chapter 4 ★",minutes:8,slides:[{title:"The logic of this chapter",bullets:["A bloated pot is a 3-bet pot 90% of the time.","Building the 3-bet range right lowers the frequency of the root error.","Two tests: am I comfortable with one pair? Am I left OOP?"],narration:"This is the heart of the book. In the first module we saw the root error: misclassifying one pair in a bloated pot. That error explodes on the river, but it's actually born preflop. Think of it this way: what we call a bloated pot is, ninety percent of the time, a 3-bet pot. So the source of that hard river decision sits much earlier — in a badly built preflop 3-bet range. A very powerful conclusion follows: building your 3-bet range correctly is the most efficient way to lower the frequency of the root error — it pays off faster than even improving your hand reading, because you cut the problem off where it's born. We'll test every range with two questions. Question one: if I 3-bet this hand and see a flop, will I be comfortable when I make one pair? If not, I don't 3-bet that hand — I flat it or I fold it. Question two: will I be left out of position? One pair in an out-of-position 3-bet pot is, by definition, a bluff-catcher. That's exactly why out-of-position ranges are markedly tighter than in-position ranges. Keep these two questions in mind, because every table that follows is built on them."},{title:"The live tournament correction",table:{section:"Chapter 4",sub:"4.1",caption:"Live, the money comes from the wider value 3-bet."},ruleBox:"Live, the money comes not from bluff 3-bets but from a wider value 3-bet range.",narration:"You won't carry solver ranges to the table as-is, because the live field doesn't play like a solver. There are three systematic deviations in the EPT field, and you'll correct all three in your favor. First: live players fold far too little to 3-bets. So lower your bluff 3-bet frequency and widen your value 3-bet range instead — there's a field out there ready to pay you. Second: the 4-bet bluff barely exists live. When someone 4-bets you, it's a real hand; take even queens and below seriously, and don't auto-5-bet ace-king. Third: opens are wide and cold-calls — flat calls — are everywhere. That makes the squeeze your most profitable move, and in multiway pots you drop the bluff 3-bet entirely, because there's no fold equity. Wrap it all into one sentence: live, the money comes not from bluff 3-bets but from a wider value 3-bet range. Theory pushes you toward balance, but the field gives you permission to profit from imbalance — use that permission."},{title:"Sizing",table:{section:"Chapter 4",sub:"4.2",caption:"Memorize it — don't think."},narration:"You'll memorize the sizes so you don't have to think at the table. In-position 3-bet: three times the open; live you're free to go up to three and a half. Out-of-position 3-bet: four times the open, blinds included — being out of position, you go a bit bigger so you don't give weak hands a good price. If cold-callers have entered in between, add one open size per cold-caller. The squeeze — the 3-bet you fire over an open plus a call — runs four and a half to five times. As for 4-bets: in position, two point two times the 3-bet; out of position, two point five. Turn these numbers into reflexes, because if you start thinking about sizing, you'll lose tempo and leak reads through your sizes."},{title:"Range table (interactive)",rangeMatrix:!0,narration:"Now we get to the core: 3-bet ranges by position. Use the table below yourself: first pick who opened along the top, then tap your own position; you'll see the value and bluff ranges for that matchup, with the flat notes underneath. Keep the general principles in mind. Against early-position opens — UTG and UTG plus one — you're in discipline territory: value is very narrow, queens and up plus ace-king, and bluffs are rare or nonexistent. As the opener's seat gets later — a cutoff or button open — both your value and bluff ranges widen, because their range is weaker. The most profitable spot is when the small blind opens and you're in the big blind; there your range is at its widest, because their range is very wide and you have position. And don't forget this warning: the hands in the bluff row were chosen for flop playability, not blocker theory — hands you can play comfortably on the flop if your 3-bet gets called. Play with the table; see the matchups with your own eyes."},{title:"The three conditions for a cold-call",bullets:["1) Position: you're IP, or you're closing the action in the BB.","2) Depth: effective stack at least 15× the call.","3) A paying opponent: someone who'll give you money when you hit the set.","If all three don't hold at once, don't flat."],narration:"We've covered the 3-bet; now the cold-call — flat-calling someone's open without 3-betting. A cold-call is actually a harder decision than a 3-bet, because you're giving up the initiative — you're not the one controlling the pot. There are three conditions, and if all three don't hold at once, don't flat. First, position: either you're in position, or you're closing the action in the big blind; don't flat out of position in the middle with players behind you. Second, depth: if you're set-mining, the effective stack must be at least fifteen times your call. So at a hundred big blinds, calling three big blinds with more than forty-five behind — fine. Make the same call at forty big blinds and the price doesn't work; even when the set comes, you can't get your money out of it. Third, a paying opponent: there has to be someone who'll give you money when you make the set; set-mining against a tight reg is unprofitable, because they stop when the set arrives. And one multiway warning: if there's an aggressive player behind you capable of 3-betting, flatting a solid hand leaves you exposed to the squeeze. In that case, either upgrade to a 3-bet or let the hand go; don't flat in the middle."},{title:"The squeeze — the most profitable single move",bullets:["The cold-caller's range is tight but weak: can't 4-bet, folds most of it.","VALUE: JJ+, AQs+, AKo. BLUFF: A5s–A4s, KQs, AJs.","If the cold-caller is a fish, cut the bluffs — value squeeze only."],narration:"The most profitable single move in a live tournament deserves its own slide: the squeeze. The squeeze is the big 3-bet you fire after one player opens and another calls. Why is it so profitable? Because the cold-caller's range is tight but weak — by calling, they've announced 'I have a medium-strength hand'; they can't 4-bet, and under pressure they fold most of it. Your value side: jacks and up, ace-queen suited and up, ace-king offsuit. Your bluff side: ace-five and ace-four suited, king-queen suited, ace-jack suited — these carry blockers and stay playable if you get called. Size it four and a half times in position, five times and up from the blinds. One more adjustment: if the cold-caller is tight, widen your bluff side, because they'll fold. But if the cold-caller is a fish — someone who doesn't fold — cut the bluffs entirely and squeeze value only. You don't bluff a fish; you make the fish pay."},{title:"The stack-mode overlay",table:{section:"Chapter 4",sub:"4.7",caption:"Don't play a 130bb range at 45bb."},ruleBox:"The most common mistake: playing a 130bb range at 45bb — flatting small pairs, 3-bet bluffing suited connectors. Both lose money at 45bb.",narration:"Finally we lay the stack-mode layer over all of these ranges, because range changes with mode. At two hundred big blinds and up you play value-heavy: few bluffs, the widest flats, because implied odds are at their peak. One hundred to one hundred fifty is standard mode; the tables in this chapter apply as-is. Sixty to a hundred you get more polarized: more bluffs, but flats narrow, because set-mining weakens. Forty to sixty you play linear, or merged, with almost no flats — 3-bet or fold. Twenty-five to forty, a 3-bet now means commitment; any hand you 3-bet must be able to continue against a 4-bet. Below twenty-five the structure simplifies: jam or fold — there is no such thing as 3-bet-fold. And I'll repeat the most common mistake, because it's so expensive: playing a hundred-and-thirty-big-blind range at forty-five big blinds. You flat a small pair hunting a set, but the depth isn't there; you fire a 3-bet bluff with a suited connector, but there's no fold equity and no implied odds. Both are straight losses at this depth. Mode first, then range — the shared sentence of this module and the one before it."}]},{id:"M6",title:"4-bet — answering the 3-bet",chapter:"Chapter 4.5",minutes:4,slides:[{title:"The 4-bet, live",bullets:["The 4-bet bluff barely exists live.","When you see a 4-bet, take even QQ and below seriously.","AK is not an automatic 5-bet."],ruleBox:"Live, a 4-bet is almost always a real hand; if nobody folds, a bluff 4-bet is burning money. Don't auto-5-bet AK.",narration:"Before we get to the 4-bet range, let's set down the live reality, because this is where theory and the live field part ways. The 4-bet bluff barely exists live; people fire 4-bets with real hands. Two consequences for you. First: when someone 4-bets you, take it seriously — don't shrug off even queens and below, because the player across from you is very likely genuinely strong. Don't reflex-5-bet the moment you see ace-king; live, that 4-bet is usually ahead of you. Second: be very careful with your own 4-bet bluffs; if nobody folds, the bluff 4-bet you fire is just burning money. So the rule is the same on defense and offense: live, the 4-bet is for value, not for bluffing."},{title:"Your answer to the 3-bet (table)",table:{section:"Chapter 4",sub:"4.5",caption:"A 4-bet pot is a bloated pot."},visuals:[{kind:"range",value:"KK+, AKs, QQ (mix), AKo (mix)",blof:"A5s, A4s",flat:"JJ, TT, AQs, KQs",valueLabel:"4-bet value",blofLabel:"Bluff 4-bet",caption:"Your 4-bet answer: value + mix + bluff; flat IP 150bb+."}],ruleBox:"A 4-bet pot is a bloated pot. Taking flop+turn value with AA and jamming a bad river is an exact replay of Case 3.",narration:"Now the other side of the coin: you opened and got 3-bet. What's your answer? Follow the table. 4-bet value: kings and up, plus ace-king against a 3-bet from late position. 4-bet mix: queens and ace-king offsuit are sometimes 4-bet against a late-position 3-bet, but never against early position. The 4-bet bluff is possible with ace-five and ace-four suited, but very, very rare live; if nobody folds, a bluff 4-bet is just burning money. Flat — calling the 3-bet: in position and a hundred and fifty big blinds deep, queens, tens, ace-queen suited, king-queen suited; if the price is under three times, suited connectors join too. And fold: all offsuit broadways out of position — ace-jack, king-queen, ace-ten — are trash against a 3-bet; let them go. Now the most critical warning: a 4-bet pot is a bloated pot. Taking flop and turn value there with aces and then jamming the remaining stack on a bad river is an exact replay of the third case in module one — that two-four-five-six board. The rule doesn't change: if no worse hand will pay you off on the river, jamming is not value. Building your preflop range correctly is how you never face that river decision in the first place."},{title:"4-bet sizing",bullets:["4-bet IP: 2.2× the 3-bet","4-bet OOP: 2.5× the 3-bet"],ruleBox:"Memorize the size — don't think at the table.",narration:"Finally, sizing. In position, the 4-bet is two point two times the 3-bet. Out of position you go a bit bigger: two point five times the 3-bet. The reason it's bigger out of position is to avoid giving weak hands a good price and keeping them in the pot. Turn these two numbers into reflexes; if you start thinking about sizing, you'll lose tempo and leak reads through your sizes."}]},{id:"M7",title:"The 25–30bb band",chapter:"Chapter 5 ★",minutes:6,slides:[{title:"The character of the band",bullets:["Value comes from FOLD EQUITY, not from completing draws.","You're not after a hand that 'can improve' — you want one that's good right now: an ace, a broadway, a pair.","The decision order, in two seconds: MODE → POSITION → HAND."],ruleBox:"At 25–30bb, value comes from fold equity, not from completing draws. When a suited connector shows up at 28bb, you don't even reach step three (HAND).",visuals:[{kind:"hand",cards:"AK KQ 99",label:"Good right now: ace / broadway / pair"}],narration:"Now we come to the tournament's most common and most chip-burning band: twenty-five to thirty big blinds. The 3-bet tables from the previous module were for a hundred, a hundred and fifty big blinds; at this depth they're void, because the engine of the game changes. In one sentence: in this band, value comes from fold equity, not from completing draws. So the hand you're after isn't one that says 'this gets good if it develops' — it's one that's good right now: an ace, a broadway, a pair. Why? Because implied odds — the only engine speculative hands have — don't run at twenty-eight big blinds. When you make your set or straight, there's no stack left to pay you; and the eighty-five percent of the time you don't complete, you're left with nothing, helpless. So compress your decision order into two seconds: mode first, then position, then hand. In this band, when a suited connector arrives, you don't even reach step three — the 'what's my hand' question — because mode and position have already answered it."},{title:"Opening ranges (folded to you)",table:{section:"Chapter 5",sub:"5.1",caption:"Size 2–2.2×. Opening bigger makes no sense at this depth."},narration:"These are the ranges you open when it's folded to you; size two to two point two, and opening bigger makes no sense at this depth. Read the table position by position. In early position — UTG and UTG plus one — you open tight: sevens and up, ace-ten suited and up, ace-jack offsuit and up, king-queen suited. The later your seat, the wider the range; on the button you're opening almost all the aces, wide suited kings, and connected hands. Notice: the hands here were chosen along the 'good right now' axis — aces, broadways, pairs dominate. Most of the small suited connectors you'd open deep-stacked are missing from this table, because their engine has stalled in this band."},{title:"3-bet = JAM",table:{section:"Chapter 5",sub:"5.2",caption:"No FLAT in this band — not from the SB, not from the BB, not IP."},visuals:[{kind:"range",value:"TT+, AQs+, AKo",valueLabel:"Jam",caption:"Jam range vs an early-position open (example). Green = straight all-in."}],ruleBox:"In this band, 3-bet = commit. There is no '3-bet then fold' structure; you go straight all-in. No flat.",narration:"In this band, delete the word 3-bet from your head and put one word in its place: jam. At twenty-eight big blinds, 3-betting means committing; there is no 'I'll 3-bet and fold later' structure, because your stack doesn't allow it. So treat every hand you'd 3-bet as a direct all-in. What do you jam against whom? Against an early-position open: tens and up, ace-queen suited and up, ace-king offsuit. Against a cutoff or button open, wider: eights and up, ace-ten suited and up, ace-queen offsuit and up, king-queen suited. And if there's a chip leader at the table opening wide and folding to jams, you widen even further against them: sevens, ace-nine suited, ace-jack offsuit, king-queen suited. The most critical sentence: no flat in this band. Not from the small blind, not from the big blind, not in position. The wide flat tables of the previous module belong to the world above a hundred big blinds; here you jam or you fold."},{title:"Calling a jam + the fold list",bullets:["Calling a jam: 99+, AJs+, AQo+. Below that is not a call.","Auto-fold: all suited connectors (T9s, 98s, 87s, 76s, 65s, 54s).","Auto-fold: suited gappers; weak offsuit broadways (KJo, QJo, JTo); FLATTING small pairs."],visuals:[{kind:"range",value:"99+, AJs+, AQo+",valueLabel:"Call (vs jam)",caption:"The calling floor when villain moves all-in — below it is not a call."},{kind:"hand",cards:"T9s 87s KJo",label:"Auto-fold in this band"}],ruleBox:"If villain moves all-in: 99+, AJs+, AQo+. Below that is not a call at 28bb — either you're the one jamming, or you fold.",narration:"Two directions left: what you call when the jam comes at you, and which hands you release without a second look. When villain moves all-in, your calling range is narrow: nines and up, ace-jack suited and up, ace-queen offsuit and up. Nothing below that is a call at twenty-eight big blinds — down there, the choice is either being the one who jams, or folding. The fold list is rote: all suited connectors — ten-nine, nine-eight, eight-seven, seven-six, six-five, five-four suited — every one an unconditional fold. Suited gappers, the same. Weak offsuit broadways — king-jack, queen-jack, jack-ten offsuit — fold. And no flatting small pairs either; jamming them is a separate topic, but flatting, never. Folding this list isn't weakness — it's stockpiling ammunition: every speculative hand you release means chips standing behind you for the moment you jam a real hand."},{title:"Field case — GGMasters",table:{section:"Chapter 5",sub:"5.5",caption:"The correct answer in all three: fold; the decider wasn't the hand — it was the mode."},visuals:[{kind:"hand",cards:"T9s 54s 87s",label:"All three FOLD (28bb)"}],ruleBox:"The question isn't 'is this hand good enough' — it's 'is this hand playable at this stack.' Folding speculative hands protects the ammunition you'll jam with a real hand.",narration:"Let's see this in a real session. In a July GGMasters, in the twenty-eight-big-blind band, the table asked you the same question with three different hands. Ten-nine suited in the small blind, a forty-thousand call on offer, twenty-eight big blinds behind — fold, because flatting from the small blind is a losing position. Five-four suited in the big blind, thirty thousand to pay into a seventy-three-thousand pot — fold, because the implied-odds engine isn't running. Eight-seven suited in the big blind again, same situation — a slightly better hand, same decision, fold. Three hands, three folds, and the decider wasn't the hand; it was the mode. The same session also holds a correct-decision example: a twenty-three-big-blind jam from the button with tens; a million-chip leader thought about calling and folded — pot taken. Chapter 3's rule at work — below thirty big blinds, a medium pair is not a post-flop hand; it's a jam-or-fold hand. The question waiting for you at the table isn't 'is this hand good enough'; it's 'is this hand playable at this stack.'"},{title:"Opponent-reading note",bullets:["If the chip leader has folded to a jam once: widen your jam range against them.","The profile that opens wide and folds to jams is the most profitable target at the table in this band.","Priority: (1) jam when they open, (2) open from BTN/CO and collect the blinds."],narration:"One last reading note, because in this band, profit runs through opponent selection. If you've seen a chip leader fold to a jam once, store that information: widen your jam range against that player's opens. Why? Because a profile that opens wide and folds to jams is the most profitable target at the table in this band — they open plenty but can't stand the pressure, and you convert that pressure into fold equity. Your priority order: first, jam on that player when they open; second, open from the button or cutoff yourself and collect the blinds. In this band, waiting is a weapon too — but while you wait, have the right target marked."}]},{id:"M8",title:"Draws on the turn",chapter:"Chapter 6",minutes:4,slides:[{title:"Is there fold equity",bullets:["Semi-bluffing a station = burning money → check, take the free card.","Against a reg, on a board that fits your range → bet.","A bet has two ways to win: making them fold OR completing the draw."],narration:"The most common turn question in poker: I have a draw — do I bet the turn, or see a free river? The decision hangs on three factors, and the first is fold equity. If you're up against a station type — someone who doesn't fold — semi-bluffing them is burning money; they won't fold, and you're left with your naked equity. In that case, check, take the free card, and try to complete your draw for free. But if you're against a reg and the board fits your range, then bet. Because when you bet, you have two ways to win: either villain folds and you take the pot right there, or they call and you complete your draw and win a big pot. A two-way win always beats a one-way win — as long as there's someone across from you who can fold."},{title:"The quality of the draw",table:{section:"Chapter 6",sub:"5.2",caption:"Does it get paid when it completes?"},visuals:[{kind:"hand",cards:"97s",label:"Low flush draw — check-heavy"}],narration:"The second factor is the quality of the draw, and the real question here is: when this draw completes, do I get paid? With the nut flush draw you play bet-heavy: you get action when it completes, and on top of that your blockers are strong — you're taking your opponent's best hands away from them. With a low flush draw — say the flush draw of nine-seven suited — you play check-heavy: even when it completes, you risk paying off a better flush, and the second-best flush is an expensive hand. With an open-ended straight draw on a plain board, both bet and check are legitimate; it's hidden strength, it gets paid well when it completes, so let the opponent decide the line. The gutshot is almost never semi-bluff fuel; few outs, little disguise — so check. Don't look at what your draw is called; look at whether it brings you money when it gets there."},{title:"The IP / OOP split",bullets:["IP: a check really does mean a free card.","OOP: a check guarantees no free card.","OOP, either bet the draw or check it with a call plan."],narration:"The third factor is position, and it matters a lot, because the idea of a 'free card' changes meaning with position. If you're in position — last to act — checking really does mean a free card; you check, and if your opponent checks too, you see the river without putting in a cent. But out of position, a check guarantees no free card; you check, your opponent bets, and your 'I'll see it for free' plan collapses — now you can't continue without paying. So out of position, either bet your draw — take the initiative — or check it with a clear call plan. Don't check passively on the assumption you'll 'see it for free anyway,' because that free card usually never comes. In short, for the turn draw decision, ask three things in order: is there fold equity, does my draw get paid when it completes, and am I in position."}]},{id:"M9",title:"PLO fundamentals",chapter:"Chapter 8",minutes:5,slides:[{title:"Mindset differences",bullets:["Equities run close — 60/40 is a good favorite.","Nut dominance is everything; the second-best hand is expensive.","Two pot bets = the stack is in the middle."],narration:"Now we switch to a different game, Pot Limit Omaha; and the most useful thing you can learn is the set of traps in playing PLO with an NLH head. First, the mindset differences. One: in PLO, equities run very close together. In NLH you're used to being an eighty-twenty favorite; in PLO, sixty-forty is already a good favorite. No hand is ever comfortable here; the edges are thin. Two: in PLO, nut dominance is everything. The second-best hand — one notch under the nuts — is an expensive hand in PLO; you're constantly asking 'can I draw to the nuts?' Three: in PLO the pot grows very fast. Two pot bets back to back and the stack is already in the middle; there's no slow inflation like in NLH — by the third street you've reached a point of no return. Absorb these three differences, because your NLH reflexes will mislead you in PLO."},{title:"Hand selection",table:{section:"Chapter 8",sub:"7.2",caption:"All four cards must work together."},narration:"Hand selection in PLO is about four cards working together. What we call a dangler is a hand whose fourth card has no connection to the others — say ace-ace-seven-deuce. A hand like that is really a three-card hand; the fourth card is dead, so it's usually a fold. A rundown is four connected cards, like jack-ten-nine-eight; it's very strong especially when double-suited — carrying two separate flush possibilities. Bare aces — aces with no support around them — get treated as one pair in PLO; they're not the automatic monster they are in NLH, and without nut potential they don't play a big pot. And the real weapon: wrap plus flush draw. A wrap is a giant straight draw that connects to the board with multiple cards and gives you thirteen or more outs; add a flush draw on top and the hand plays aggressively, because its equity runs neck-and-neck even with monster hands. When picking hands, don't look at the cards one by one — look at what the four do together."},{title:"The NLH player's traps",bullets:["Seeing AA through NLH eyes — if not double-suited, it's just one pair.","Stacking off with top pair / top two — two pair is almost never the nuts.","Importing your bluff frequency from NLH.","Playing OOP 3-bet pots — when in doubt, flat."],narration:"Finally, the four traps a player falls into moving from NLH to PLO — these are your warning signs. First, seeing aces through NLH eyes: in PLO, if aces aren't double-suited and don't connect to the board, they're just one pair; treat them like a monster and you'll play a big pot and lose it. Second, stacking off with top pair or top two: in PLO, two pair is almost never the nuts; straights, sets, and flushes are on the board constantly, and pushing a whole stack in with two pair is a mistake. Third, importing your bluff frequency from NLH: PLO ranges are more connected, everyone's hand touches the board more, so bluffs get through less often; carry your NLH bluffing rate over here and you'll burn. Fourth, playing out-of-position 3-bet pots: this is PLO's hardest spot, because equities are close and deciding without position is very expensive; when in doubt, flat instead of 3-betting. Knowing these four traps keeps your NLH reflexes from sinking you at a PLO table."}]}];function vt(t){return ie.find(a=>a.id===t)}const V="ept:";let Ke=!1;function O(t,a){try{const n=localStorage.getItem(V+t);return n?JSON.parse(n):a}catch{return a}}function xt(t){try{return localStorage.getItem(V+t)}catch{return null}}function I(t,a){try{localStorage.setItem(V+t,JSON.stringify(a))}catch(n){console.warn("ept: localStorage.setItem failed — nothing persisted",n),Ke||(Ke=!0,typeof window<"u"&&window.dispatchEvent(new CustomEvent("ept:storage-fail")))}}function an(){const t={};for(let a=0;a<localStorage.length;a++){const n=localStorage.key(a);if(n&&n.startsWith(V))try{t[n]=JSON.parse(localStorage.getItem(n))}catch{t[n]=localStorage.getItem(n)}}return JSON.stringify(t,null,2)}function nn(t){try{const a=JSON.parse(t);let n=0;for(const[o,s]of Object.entries(a))o.startsWith(V)&&(localStorage.setItem(o,typeof s=="string"?s:JSON.stringify(s)),n++);return{ok:n>0,count:n}}catch{return{ok:!1,count:0}}}const kt=[{q:"You hold AA in a bloated pot and a bad river hits; no hand weaker than yours will pay you off. Jam?",options:["Jam — value","Check — the jam isn't value"],correct:1,explain:"If no weaker hand will pay you off on the river, the jam isn't value. This is exactly where the root mistake lives.",source:"Chapter 0 / 7",kavram:"kök-hata"},{q:"One pair in a bloated pot (3-bet pot / ~40% of your stack in the middle). What if you fire a thin value bet to 'look weak' and push your opponent into bluffing the river?",options:["Thin bet — pushes them into a bluff","Check — call a small pot, fold to a big one"],correct:1,explain:"One pair in a bloated pot is a bluff-catcher (sentence 1). Sentence 2: on a bad river, check-call a small pot, check-fold a big one — no bet. A thin bet folds out the very bluffs you want to catch; check-call is already the bluff-inducing line.",source:"Chapter 0.1 / 0.2",kavram:"kök-hata"},{q:"Top pair on a wet board (KTo), you're OOP, opponent fires a cbet. Check-raise all-in?",options:["Check-raise all-in","Check-call, reassess later"],correct:1,explain:"Check-call. Top pair on a wet board is not a big-pot starter; check-raise all-in runs you into flatted hands like QQ. (Case 2 — a real bustout.)",source:"Chapter 7 / Case 2",kavram:"kök-hata"},{q:"T6s in the BB, you call a BTN min-raise. Flop A-T-3, call 1/3 pot. Turn 5 goes check-check. River T (board A-T-3-5-T) → trip tens, kicker 6. You check, BTN fires a thin bet. Check-raise all-in?",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,explain:"No weaker hand calls the all-in: every other ten outkicks you, boats are ahead. On this runout your trips are a bluff-catcher → check-call. Raising folds out the bluffs and only gets called by hands that beat you (sentence 2). Your actual bustout (B7 Case 4).",source:"Chapter 7 / Case 4",kavram:"kök-hata"},{q:"The board is choppy and your opponent moves all-in. Is their hand a chopping hand?",options:["Yes, they're playing for the chop","No — chops don't jam"],correct:1,explain:"Chops don't jam; the opponent has removed chopping hands from their range — a jam is a hand that beats you.",source:"Chapter 0 / 1",kavram:"chop"},{q:"Which three criteria make a hand bluff fuel?",options:["Blocker, connectivity, board ownership","Suited, high card, position"],correct:0,explain:"Three criteria: blocker, connectivity, board ownership. Missing one? That's not a bluff, that's lost chips.",source:"Chapter 1.1",kavram:"blöf-kriter"},{q:"J2s (suited). Bluff fuel?",options:["Yes — it's suited","No — no blocker, no connectivity"],correct:1,explain:"Suited deceives. What you want is connectivity and blockers; J2s is weak on both, with bottom-flush risk on top.",source:"Chapter 1.2",kavram:"suited-tuzağı"},{q:"On which board do you check-raise bluff?",options:["T98 — your board","A-K-7 dry — their board"],correct:0,explain:"Check-raise bluff on boards that smash YOUR range (T98, 765). On dry A-K, just call.",source:"Chapter 1.3",kavram:"board-sahipliği"},{q:"What do you do against a station / rec type (never folds)?",options:["Bluff","Value bet — they don't fold"],correct:1,explain:"Bluffing a player who doesn't fold is burning money; if your hand is good make them pay, if it isn't don't try.",source:"Chapter 1.4",kavram:"kime-blöf"},{q:"JTs, KQ, KJ, 97s — what is these hands' role?",options:["Big-pot starter (3-bet / stack-off)","Open / flat / BB-defend"],correct:1,explain:"Deceptive middling hands: small-pot winners, big-pot losers. Never big-pot starters.",source:"Chapter 2",kavram:"aldatıcı-eller"},{q:"42bb, a HJ reg (~22%) opens, you're in the CO with KQo. Decision?",options:["3-bet","Call","Fold"],correct:2,explain:"Fold. Raw equity is ~45% but you can't realize it; the best flops are the most expensive traps (K→AK, Q→AQ).",source:"Chapter 2.1",kavram:"kqo-vaka"},{q:"What's the FIRST question to ask before every hand?",options:["What's my hand?","What stack mode am I in?"],correct:1,explain:"Mode first, range second. The same hand in a different mode is a different hand.",source:"Chapter 3",kavram:"stack-modu"},{q:"28bb, you hold 88. How do you play it?",options:["Post-flop set-mining","Jam or fold"],correct:1,explain:"Below 30bb, middling pairs are jam-or-fold; miss the set and there's no stack left to continue, hit it and you can't get paid in full.",source:"Chapter 3.1",kavram:"orta-çift-30bb"},{q:"Bubble, big stacks on your left. Your opening range?",options:["Widen it","Tighten it — they 3-bet you with impunity"],correct:1,explain:"Big stacks on your left? Tighten up. 30bb on the bubble ≠ 30bb on Day 1.",source:"Chapter 3.2",kavram:"icm"},{q:"In a live tournament, where does the profit really come from?",options:["Bluff 3-bets","Wider value 3-bets"],correct:1,explain:"The live field rarely folds to 3-bets; cut the bluffs, widen the value 3-bets.",source:"Chapter 4.1",kavram:"canlı-value"},{q:"Live, someone 4-bets you and you hold AK. What do you do?",options:["Auto 5-bet","Take it seriously — live 4-bet bluffs don't exist"],correct:1,explain:"Live, a 4-bet is almost always the real thing; take it seriously with QQ and below — AK is not an auto 5-bet.",source:"Chapter 4.1 / 4.5",kavram:"4bet-cevap"},{q:"One of the three coldcall conditions (position, depth, an opponent who pays off) is missing. Flat?",options:["Flat anyway","Don't flat"],correct:1,explain:"If all three don't hold at once, don't flat; either bump it to a 3-bet or let it go.",source:"Chapter 4.4",kavram:"coldcall"},{q:"Someone opens, someone else calls (a coldcaller). Your most profitable move?",options:["Flat","Squeeze"],correct:1,explain:"The coldcaller's range is tight but weak: it can't 4-bet and folds most of the time. The squeeze is the most profitable move.",source:"Chapter 4.6",kavram:"squeeze"},{q:"How should your OOP 3-bet range compare to your IP range?",options:["Wider","Noticeably tighter"],correct:1,explain:"OOP in a bloated pot, one pair is a bluff-catcher; that's why OOP ranges are noticeably tighter.",source:"Chapter 0.8 / 4.0",kavram:"oop-sıkı"},{q:"You have a draw on the turn, facing a station (never folds). Semi-bluff bet?",options:["Bet — make them fold","Check — free card"],correct:1,explain:"The station doesn't fold; the semi-bluff burns money. Check, see a free river, hit your draw for free.",source:"Chapter 6",kavram:"turn-fold-equity"},{q:"In PLO, what does naked AA (no nut potential) resemble?",options:["A monster","One pair in NLH — doesn't play a big pot"],correct:1,explain:"Naked AA in PLO is one pair in NLH. Without nut potential the hand doesn't play a big pot.",source:"Chapter 0.10 / 8",kavram:"plo-aa"},{q:"In the 25–30bb band, where does the value really come from?",options:["Completing draws (implied odds)","Fold equity"],correct:1,explain:"In this band, value comes from fold equity. The hand you want isn't one that can improve — it's one that's already good: an ace, broadway, a pair.",source:"Chapter 5.0 / 0.11",kavram:"25-30bb-değer"},{q:"28bb, you want to 3-bet. What's the structure?",options:["3-bet and be ready to fold","3-bet = jam (commit)"],correct:1,explain:"In this band a 3-bet means commit; there's no '3-bet then fold' — it's straight all-in. There's no flat in this band either.",source:"Chapter 5.2",kavram:"3bet-jam"},{q:"28bb, you're in the SB with T9s, BTN opens, it's 40K to call. Decision?",options:["Call","Fold"],correct:1,explain:"Fold — flatting from the SB is a losing position, and at 28bb the implied-odds engine doesn't run. (GGMasters field case)",source:"Chapter 5.5",kavram:"25-30bb-fold"},{q:"28bb, you hold 87s (suited connector). Decision?",options:["Play it in the right spot","Auto fold"],correct:1,explain:"In this band every suited connector is an unconditional fold; their engine (implied odds) isn't running.",source:"Chapter 5.4",kavram:"suited-connector-fold"},{q:"28bb, you're facing a jam. What's your calling floor?",options:["Wide: most broadways","99+, AJs+, AQo+"],correct:1,explain:"Against a jam, call with 99+, AJs+, AQo+; anything below is not a call — either you're the one jamming, or you fold.",source:"Chapter 5.3",kavram:"jam-call"},{q:"You've seen the chip leader fold to a jam once. Your jamming range against them?",options:["Tighten it","Widen it"],correct:1,explain:"The profile that opens wide and folds to jams is the most profitable target in this band; widen your jamming range against them.",source:"Chapter 5.6",kavram:"rakip-okuma"},{q:"You opened AA from the CO with a 52 BB stack. The 48 BB reg on the BTN 3-bet, you 4-bet, he called. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. You c-bet 1/3 pot and your opponent RAISED. You're thinking 'AA + SPR 1.3 = I'm already committed'. Your action?",options:["All-in — AA + SPR 1.3, you're already committed; don't give the draws a free card","Fold — the pot is past 40 BB, one-pair alarm; no stack race with AA against a raising range on T♠ 9♠ 8♣","Call, and continue against every barrel on the turn — your pot odds force the call","Small re-raise — get information, put your opponent to the test"],correct:1,explain:"MW.9 root error: once the pot is past 40 BB, one pair (even AA) = alarm; the default is pot control + bluff-catcher, not a stack race. MW.6: 'the pot got big, I'm committed' is a root error — a low SPR is NOT a reason to be committed. On a wet board like T♠ 9♠ 8♣ the raising range is weighted toward sets/straights/combo draws; AA is just one pair here.",source:"Chapter 17",kavram:"kök-hata"},{q:"KK in the BB with 34 BB. A tight-passive player with 38 BB opened from the HJ, you 3-bet, he called. Flop Q-J-T rainbow; you c-bet, he called. Turn 9♦ (board Q-J-T-9). You're thinking 'let me check-raise all-in and take back the initiative'. The correct line?",options:["Check-raise all-in — you have the K-high straight, take back the initiative","Big bet — protect your straight, don't give a free card","Check-fold — a tight-passive player definitely has AK","Check-call, re-evaluate on the river — every K chops with you, AK beats you; the tight-passive player's continuing range is exactly this zone"],correct:3,explain:"MW.9 root-error guardrail: the check-raise all-in impulse (the KTo lesson) — the correct line is check-call-then-evaluate. On Q-J-T-9 you have the K-high straight with KK, but every bare K chops and AK beats you with the broadway; an all-in only gets action from hands that beat you or chop. MW.9 chop mechanics: re-read the board on the turn/river.",source:"Chapter 17",kavram:"kök-hata"},{q:"25 players left to the bubble, your stack is 41 BB. The chip leader (140 BB), who covers you, has opened from the BTN for the 3rd time in a row. You hold QQ in the BB. What's your plan, and if your 3-bet gets jammed on, is there a call?",options:["3-bet (value); if a jam comes, FOLD — on the bubble against a covering stack the full-stack range is ~KK+; QQ doesn't meet the ICM-adjusted threshold against a {KK+, AK} jam","3-bet and call the jam — QQ is never folded on the bubble, the guy is opening for the 3rd time in a row","Just call — 3-betting against a cover is completely off-limits, keep the pot small","Fold — play no pots with the chip leader, stay away from him"],correct:0,explain:"MW.9 ICM thresholds: QQ gets ~40% equity against the cover's {KK+, AK} jam; with a 6–10% bubble ICM premium the required ~48–50% → FOLD. MW.8: 'On the bubble against a cover, even QQ may not be a 4-bet-call'; the practical full-stack rule is KK+. QQ is still a value 3-bet (MW.4: 99+ from the BB, target the over-active reg); the mistake isn't the 3-bet, it's calling the jam. Completely avoiding the cover isn't a strategy either (MW.9B). (17.4 'don't 3-bet a cover' means BLUFF 3-bet; a value 3-bet — QQ, continue KK+ vs a jam — is free.)",source:"Chapter 17 / 17.4",kavram:"icm-cover"},{q:"You're deep ITM. You're playing TT in position in a 3-bet pot. On the 8-6-2 rainbow flop your c-bet got check-called; the turn 8 (board 8-6-2-8) went check-check. The river came an A and your opponent led out with a POT-sized DONK bet. You're thinking 'I had an overpair, the A is just a scare card'. Your decision?",options:["Call — the A is a scare card, TT is still ahead of eights and below","Raise all-in — punish the bluff, force weak Ax to fold","Fold — overpair + bad river + BIG bet; a pot-sized donk is polarized and no hand worse than yours bets this size","Call — your pot odds are ~33%, the opponent bluffs often enough"],correct:2,explain:"MW.6 river discipline: overpair + bad river → check-call a small bet, fold to a BIG bet. The A is the worst card for TT and a pot-sized donk is a polarized range (MW.9 online adjustment: overbet/pot polarized = bluff-catcher math); the 'scare card' rationalization is from the MW.9 root-error family. Deep ITM, per MW.8, ICM > chip-EV, which makes the fold even clearer.",source:"Chapter 17",kavram:"kök-hata"},{q:"You're in the BB with 47 BB; you called the BTN's open with A9o. Board A-9-4 with two hearts: you check-raised, he called. The turn 6♥ completed the flush; you bet, your opponent RAISED. You're saying 'I have two pair, I'm safe'. Your decision?",options:["3-bet all-in — two pair is ahead, charge the draws","Call the raise once — two pair is now just a bluff-catcher (+4 outs to a boat); if you don't improve on the river, fold to a big bet, no stack race","Call, then call every river bet too — the pot got big, you're committed now","Fold — once the flush completes, two pair is instantly trash"],correct:1,explain:"MW.6/MW.9: on the flush-completing 6♥ turn, a raise from an opponent who called your check-raise is weighted heavily toward a completed flush — two pair is not 'safe', it turns into a bluff-catcher. The correct line is call-then-evaluate, not escalation (the MW.9 check-raise all-in impulse lesson); a jam pays off made hands, not draws. And 'the pot got big, I'm committed' is the root error from MW.6.",source:"Chapter 17",kavram:"kök-hata"},{q:"56 BB, Phase 1 (bubble far away). You opened A9s from the HJ; the 48 BB reg on the BTN 3-bet to ~3x (you'll be OOP postflop). Your action?",options:["Call — a suited ace, you take a flop even out of position","4-bet bluff — you have the A blocker, test the reg","Jam — break the reg's 3-bet","Fold — the OOP continuing range vs a 3-bet is narrow: KK+ 4-bet, QQ/AK mixed, JJ–TT/AQs call; A9s is outside it"],correct:3,explain:"MW.5: when your open faces a 3-bet OOP, the range tightens — KK+ 4-bet, QQ/AK mixed, JJ–TT/AQs call, everything else folds; A9s is in 'everything else'. The 4-bet bluff arsenal is limited to A5s–A4s and low-frequency. Calling is exactly the danger MW.9B warns about: calling a 3-bet and entering a bloated pot with a weak hand.",source:"Chapter 17",kavram:"3bet-aralik"},{q:"You're in the CO with 66 and a 38 BB stack (Mode B); it's folded to you. Do you open? If you open, what's your plan against the BB's ~4x 3-bet?",options:["Open (the CO range is 44+, 66 is standard), fold to the 3-bet — in Mode B flat calls tighten, set-mine math breaks down","Open, call the 3-bet — if you hit a set you win a stack","Don't open — at 38 BB small pairs drop out of the opening range","Open, jam over the 3-bet — at 38 BB the commit threshold is already crossed"],correct:0,explain:"MW.7 Mode B (30–45 BB): the open range holds (MW.3 CO 26% = includes 44+) but flat calls tighten — set-mining breaks down and the commit threshold in a 3-bet pot is close; calling with 66 creates a planless bloated pot. The correct plan: open, fold to the 3-bet. Jamming is a transition error that imports Mode C/D thresholds to 38 BB (MW.9B).",source:"Chapter 17",kavram:"stack-modu"},{q:"40 players left to the bubble. You're on the BTN with KQo; the 130 BB chip leader who covers you is in the BB, and it's folded to you. What do you do?",options:["Fold — you don't open pots against a cover, stay away from him","Open and call the 3-bet — KQo is too pretty a hand to let go","Open (2.1–2.3x) — KQo opens even in a one-notch-tightened BTN range; but fold to the cover's 3-bet","Limp — see a cheap flop, don't provoke the cover"],correct:2,explain:"MW.8 Phase 2: the only brake against covers is playing 'one notch tighter'; MW.9B: 'running away from the cover isn't a strategy'. KQo is a clear open even in the tightened version of the MW.3 BTN 40–44% range. The real discipline comes when the 3-bet arrives: MW.6 — offsuit broadways (KQo, AJo) are trash against a 3-bet, 'the most expensive pretty-looking hand'; against a cover's 3-bet you continue one notch tighter still. There is no limp in MW.3.",source:"Chapter 17",kavram:"icm-cover"},{q:"Phase 2, your stack is 60 BB. The 22 BB stack in the SB opened; you hold A5s in the BB (you'll be IP postflop). The most profitable line?",options:["Call — play A5s cheaply with position","Fold — a bluff 3-bet burns against a short stack","Jam right away — force the 22 BB to fold instantly","3-bet — the essence of Phase 2 is crushing the 15–25 BB stacks; A5s is the ideal pressure hand with its A blocker + playability; mostly fold if a jam comes"],correct:3,explain:"MW.8 Phase 2: the most profitable phase — 3-bet pressure on opens from 15–25 BB stacks is the main profit source, and 22 BB is right in the target zone (MW.4's 'bluffs burn' ban is for UNDER 20 BB). MW.9B: pressure bluffs are limited to blocker hands like A5s/K9s — A5s is the textbook candidate. If a jam comes, your 60 BB stack doesn't race; fold unless the price fits.",source:"Chapter 17",kavram:"blof-secimi"},{q:"You're OOP in a 3-bet pot holding QQ (overpair). Flop 9-7-5 with two spades; you checked, your opponent bet POT. What's your flop/turn/river plan?",options:["Raise the flop — protect the overpair from draws, stack off if it comes to that","Call the flop; fold if the turn completes a spade/straight and a big barrel comes; on the river call a small bet, fold to a big bet — turn the overpair into a bluff-catcher","Call the flop, then call every street — QQ is premium, the pot's already big","Fold the flop — an overpair isn't enough against a pot bet"],correct:1,explain:"MW.9: in a bloated pot past 40 BB, one pair (QQ) = alarm; the default is pot control + bluff-catcher, not a stack race. The street plan comes from MW.6: big turn barrel + a flush/straight-completing card → one pair is done; on the river check-call a small bet, check-fold to a big bet. Calling every street is the 'pot got big, I'm committed' root error.",source:"Chapter 17",kavram:"kök-hata"},{q:"The money just started (Phase 3), first hand ITM. The 9 BB stack UTG jammed; you hold ATo in the HJ and there are 3 big stacks behind you. Is there a call?",options:["Call — ATo is well ahead of a 9 BB kamikaze jam","Isolation re-jam — shut out the players behind, get heads-up with the short stack","Fold — the first 3–4 hands of Phase 3 are played tight; kamikaze jams are called with premiums, ATo is not a premium and you have 3 big stacks behind","Call — the pot odds justify a call with almost any two cards"],correct:2,explain:"MW.8 Phase 3: play 3–4 hands tight when the money starts — short stacks fire kamikaze jams and these are called ONLY with premiums; ATo is not a premium. The 3 big stacks behind who might wake up make the equation even worse. A call that looks profitable in chip-EV is the typical mistake that breaks phase discipline (ICM > chip-EV).",source:"Chapter 17",kavram:"kök-hata"},{q:"You hold KK (overpair). The flop was T-8-4 with two clubs and your c-bet got called. The turn J♣ made the board T-8-4-J and completed the club flush; your opponent fired a 3/4-pot second barrel. What's your criterion for continuing?",options:["Call — an overpair can take one more barrel, we'll see the river","Raise — test the flush","All-in — protect KK, push the draws out","Fold — big turn barrel + flush-completing board means one pair is done; continuing is only considered with an exceptional reason like the K♣ blocker"],correct:3,explain:"MW.6 turn discipline: 'big turn barrel + board completing a four-straight/flush → one pair is done.' A 3/4-pot second barrel falls squarely inside this definition and KK is one pair on this board → default fold. Continuing is the birthplace of the MW.9 root error of 'a stack race with one pair in a bloated pot'; a raise/all-in pays off completed hands.",source:"Chapter 17",kavram:"kök-hata"},{q:"You're in Mode D: 17 BB, first in from the BTN, holding A7o. Jam, open-fold, or fold?",options:["Open 2.1x and fold to a 3-bet — preserve your stack","Jam — in Mode D part of the BTN opening range goes in as a direct jam; A7o is in the near-Nash jam range, and if you open you're stuck in a jam-or-fold dilemma against a 3-bet","Fold — A7o gets dominated, don't take risks with 17 BB","Open 2.1x and call a 3-bet — we see a flop with the A blocker"],correct:1,explain:"MW.7 Mode D (12–20 BB): part of the opening from the SB/BTN is a DIRECT jam and the range is near Nash — A7o from the BTN at 17 BB is in this class. If you open, the rule is clear: jam or fold against a 3-bet — both are bad with A7o (a dominated race or burning equity). Folding is the passive face of the MW.9B '20 BB panic-jam/freeze' transition error.",source:"Chapter 17",kavram:"stack-modu"},{q:"Deep ITM, 3 tables left. An opponent with a stack EQUAL to yours (45 BB) opened from the CO; you hold AQo in the SB. What's your 3-bet size, and your plan if a 4-bet comes?",options:["Standard OOP 3.8–4.2x 3-bet; fold to a 4-bet — deep ITM there's no stack race with AQo against an equal stack ('run from the equals')","Small 3x 3-bet — keep it cheap; call the 4-bet","Flat call — keep the pot small from the SB","4x 3-bet, jam over a 4-bet — accept the flip with AQo's blockers"],correct:0,explain:"MW.4B sizing rule: OOP (SB) 3-bet 3.8–4.2x — a small OOP 3-bet gives a cheap call and creates a planless bloated OOP pot (the birthplace of the root error). MW.4: NO flat from the SB, 3-bet or fold; AQo is a value 3-bet against a CO open. Continuing against a 4-bet is KK+-cored per MW.5, and MW.8 Phase 4 'run from the equals' + MW.6 'a flip against an equal stack = last resort' → fold AQo.",source:"Chapter 17",kavram:"boyut"},{q:"We're on the river; you hold AA and the pot is badly bloated. Board 2-4-5-9-6. Your opponent checked to you and you close the action. Is there a bet; if so, what size and what's the target hand?",options:["Pot bet — get AA paid off; Ax and overpairs call","Overbet jam — look polarized, get two pairs to pay off","No bet, check back — the answer to 'which worse hand pays me off?' is empty; the hands that would call a bet (straights, sets, two pairs) beat you","1/3-pot thin value — KK/QQ-type hands pay"],correct:2,explain:"MW.9 root-error guardrail: 'AA river jam: if no worse hand pays, the jam is worthless — check.' The MW.6 river rule asks the same single question. On 2-4-5-9-6 every 3 and every 7-8 makes a straight; in a bloated pot the range that gives your bet action is weighted toward the region that beats you, and worse hands just fold. MW.9: one pair in a bloated pot = pot control, not a place to generate value.",source:"Chapter 17",kavram:"kök-hata"},{q:"You're in a 3-bet pot (SPR ~2.5) with the overpair KK. The flop comes and your one pair still looks best. You think 'bloated pot, I'm committed'. What is the book's measure of a 'bloated pot'?",options:["Number of bets — a 3-bet pot is bloated","SPR (stack ÷ pot); SPR 1–4 = bluff-catcher, do NOT start a big pot","Effective stack — 100bb+ is deep","Board texture — wet is bloated"],correct:1,explain:"B11.0: 'When deep, SPR — not the number of bets — defines a bloated pot.' In the SPR 1–4 band one pair is a bluff-catcher — don't start a big pot. Read SPR first, then assign the role; SPR<1 commit, SPR>8 thin value is available but a pot that gets re-raised suddenly drops to 1–4.",source:"Chapter 11.0",kavram:"kök-hata"},{q:"The river comes, you hold a strong one pair (overpair). Your opponent fires OVER pot (an overbet). Your decision?",options:["Call — an overpair is a bluff-catcher, an overbet still has bluffs","Fold — an overbet is polarized (nuts or air); one pair folds, only a bluff-catcher holding a blocker calls","Raise — push the polarized range to bluff","Depends — look at the board"],correct:1,explain:"B11.2: 'As the size grows the opponent's range shifts toward value; read an overbet as polarized, and one pair clarifies from bluff-catcher to FOLD. Only a bluff-catcher holding a blocker calls.' The panic hero-call is the mistake here (Case 1).",source:"Chapter 11.2",kavram:"kök-hata"},{q:"River on a dry board, you have top pair good kicker. You're against a rec/station (never folds) type and it's checked to you. Is there a bet?",options:["Check — go to showdown, thin value is risky","Small value BET — the answer to 'which worse hand pays?' EXISTS (the rec pays); missed thin value is lost chips","Pot bet — maximum value","Get ready for a check-raise"],correct:1,explain:"B11.3: 'If someone pays, THIN value BET.' The filter runs positive: if 'which worse hand pays me?' has an answer (a rec/station pays), bet — even thin. In the rec-heavy Main, missed thin value is a direct chip loss.",source:"Chapter 11.3",kavram:"boyut"},{q:"You have an overpair, the pot is bloated. On the river the board 2-4-5 gets a 6 (2-4-5-6). Your opponent fires a big bet. In the book's 'bad river' catalog, what class is this card and what's your decision?",options:["Neutral card — call","Bad river (completes straight/set); check-fold to a big pot, JAM NEVER — the jam is value only if a worse hand pays","Scare card — raise","Small value bet"],correct:1,explain:"B11.4 bad-river catalog: 'fourth low card / straight completer' (2-4-5 with a 6 → trips, straight, set all beat you). On these cards: check-call a small pot, check-fold a big one; JAM NEVER. (Case 3.)",source:"Chapter 11.4",kavram:"kök-hata"},{q:"Hard bubble. A big stack that COVERS you fires a wide BvB jam (~22bb effective), you hold A9s. Call?",options:["Call — A9s suited, ahead enough even on the bubble","Fold — cover + bubble: CALL = 88+/AJs+/AQo; A9s is reverse-dominated, fold it along with KQs","Do the jamming yourself — take the initiative","Depends"],correct:1,explain:"B12.1 Emre calibration (2026-08-10): hard bubble + a wide jam that covers you, ~22bb → CALL = 88+ · AJs+ · AQo; fold A9s/KQs. Driver: cover + bubble = if you lose you bust for €0, the marginal edge isn't worth tournament life (A9s reverse-dominated). The FIRST question isn't 'is it the bubble' but 'am I covered'.",source:"Chapter 12.1",kavram:"icm-cover"},{q:"Bubble, you're in the BB with 22bb. A short stack that does NOT cover you (shorter than you; you don't bust if you lose) fires a wide 13bb BTN jam; you hold KTo. Your reflex is 'range too weak, fold'. The right play?",options:["Fold — KTo is trash on the bubble","Call — if you are NOT covered the line is much wider; KTo gets ~54% vs the wide 13bb jam, ~44% needed","Re-jam over the jam","Only call premiums"],correct:1,explain:"B12.1 drill addendum (2026-08-10): the sticky half of the leak is the fold reflex on the NOT-covered side. If you're not covered (the jammer is shorter), A9s and KTo are a CALL — KTo ~54% vs the required ~44%. Cue: 'before folding to a jam, am I covered? If no, the call is much wider than you think.'",source:"Chapter 12.1",kavram:"icm-cover"},{q:"FT, everyone has locked each other up (no shorter stack at the table, you're effectively the shortest, <15bb). Your 'tighten under ICM' reflex kicks in. The right play?",options:["Tighten — ICM always tightens","WIDEN — when everyone is locked up nobody wants to pay you off; 'tighten generally' is actively wrong in this band","Fold along, wait for busts","Only jam premiums"],correct:1,explain:"B12.5 short-stack ICM exception: '⚠ tighten under ICM is NOT always right. When everyone is locked up the short stack's correct play is to WIDEN — nobody wants to pay you off.' 12.2: 'you're effectively the shortest → widen your jam range, don't fold along.'",source:"Chapter 12.5 / 12.2",kavram:"icm"},{q:"Bubble, you're the big (covering) stack. There's a locked-up mid stack and a few shorts at the table. Who is your most profitable target?",options:["The short stacks — easy folds","The locked-up mid stack — the most profitable target at the table; widen opens + 3-bet pressure","The other big stack — most chips at stake","Nobody — wait on the bubble"],correct:1,explain:"B12.4 bubble hunting map: 'the locked-up mid stack is the most profitable target at the table.' As the big stack, plunder it (widen opens + 3-bet pressure). The bubble isn't defense — if you're on the RIGHT side it's the tournament's highest chip-EV window.",source:"Chapter 12.4",kavram:"icm"},{q:"You have top pair in a 3+ way (multiway) pot, several players saw the flop. Your HU reflex says value. What's the book's multiway rule?",options:["Value bet — top pair is always value","Drops a class → check / pot control; each extra player in a multiway raises the value bar","Fold — top pair is trash multiway","Overbet — clear the crowd"],correct:1,explain:"B13.1 HU→3+ way transition: multiway, top pair 'drops a class → check/pot control.' B13.0: 'each extra player RAISES the value bar.' C-bet frequency collapses (only strong value + a real nut-draw).",source:"Chapter 13.1",kavram:"multiway"},{q:"You're thinking of bluffing in a multiway pot; you hold a good blocker. How many ways can the pot be for the bluff to still be legit? (the book's 4th criterion)",options:["Even 4+ way — a blocker is enough","3-way: nut-blocker semi-bluff only; 4+ way: NO bluff; a single station kills the bluff","Standard bluff in any multiway","Bluff only HU"],correct:1,explain:"B13.3 fourth criterion: 'number of opponents = number of doors the bluff must get through.' HU=three criteria, 3-way=nut-blocker semi-bluff only, 4+ way=NONE. 'Multiway pot (whoever it is)' is added to the B1.4 'who not to bluff' list.",source:"Chapter 13.3",kavram:"multiway"},{q:"You're in the 40–60bb band (the bridge band), considering a 3-bet. What's the book's bluff-3-bet direction?",options:["Widen the bluffs — there's depth","NEARLY CUT the bluffs — nobody folds live; the hand you 3-bet must be able to continue vs a 4-bet/jam","Standard B4 range — unchanged","Suited connectors only as bluffs"],correct:1,explain:"B14.1: '40–60bb: NEARLY CUT the bluffs — nobody folds live.' Rule: the hand you 3-bet must be able to continue vs a 4-bet/jam; if it can't, flat (IP/BB) or fold. The '3-bet then fold' structure weakens below 60bb and ends at 40bb (commit).",source:"Chapter 14.1",kavram:"3bet-aralik"},{q:"€25K PLO HR, you have 30bb and naked AA. Your NLH reflex says 'under 30bb → Chapter 5 → 3-bet = JAM'. Does that hold in PLO?",options:["Yes — 30bb is the jam band in any game","No — in PLO B5 is INVALID: no jam, there's a pot-raise; naked AA doesn't play postflop, its value is in pre-commit (3-bet→SPR≤1)","Fold — you don't play AA at 30bb PLO","Limp-call"],correct:1,explain:"B15.1/15.0: 'B5's NLH jam/fold reflex is invalid in PLO — in pot-limit there's no jam, only a max pot-raise.' In 25–60bb PLO naked AA doesn't play postflop; its value is in pre-commit (3-bet → SPR≤1). '30bb PLO ≠ 30bb NLH.'",source:"Chapter 15.1 / 15.0",kavram:"plo"},{q:"Short PLO (<25bb), you made a pot-raise. What does that mean?",options:["A standard raise — the continue decision on the flop is separate","Pot-raise = COMMIT: the remaining stack goes in automatically on the flop; pick your range assuming 'the stack goes in on the flop', cut everything with a dangler","An info raise — it's cheap","Be ready to fold"],correct:1,explain:"B15.1: 'In short PLO a pot-raise = commit. Pick your range assuming the stack goes in on the flop: double-suited rundowns, strong AAxx; CUT everything with a dangler.' B15.2: in PLO the commit decision is made on the street you bloat the pot, not on the flop.",source:"Chapter 15.1 / 15.2",kavram:"plo"},{q:"You busted SHR Day 1, 5 minutes have passed, mild tilt. Does an immediate re-entry (a second bullet into the same event) make sense?",options:["Yes — get in now, don't lose momentum","No — mandatory 20-min wait, fill in the decision card; SHR has NO re-entry (max 1 bullet); an automatic re-entry under tilt = the bankroll-scale root error","Switch to another event","End the day, decide tomorrow"],correct:1,explain:"B16.1: 'The single most expensive decision of the series is the re-entry made in the 5 minutes after busting.' Mandatory wait: bustout → 20 min away from the table → fill in the decision card. SHR max 1 bullet (no re-entry); an automatic re-entry under tilt = treating a single bullet as value in a bloated 'series investment'.",source:"Chapter 16.1",kavram:"kök-hata"},{q:"End-of-day autopsy: you played a hand by the book's rule but lost (correct jam, bad result). Tomorrow, in that spot, do you change your range?",options:["Yes — if I lost something was wrong, tighten","No — 'followed the rule + lost' = correct decision, bad result; the RANGE DOESN'T CHANGE (else you'd wreck the B4-B5 tables mid-SHR)","Depends — look at the result","Widen the range — be more aggressive"],correct:1,explain:"B16.3 autopsy rule: 'Followed + lost → log it as correct decision/bad result in the case book, the RANGE DOESN'T CHANGE.' This filter protects calibration: correct jams lose often in the SHR; without the filter you'd wreck the careful tables mid-tournament. (Valid only if you actually FOLLOWED the rule — not a self-exoneration door.)",source:"Chapter 16.3",kavram:"kök-hata"}],Ue={M1:"kök-hata",M2:"blöf-kriter",M3:"aldatıcı-eller",M4:"stack-modu",M5:"canlı-value",M6:"4bet-cevap",M7:"25-30bb-değer",M8:"turn-fold-equity",M9:"plo-aa"};function Tt(t){const a=kt.filter(n=>n.kavram===t&&!n.source.includes("Chapter 17"));return a.length?a[Math.floor(Math.random()*a.length)]:null}function jt({kavram:t,onStart:a}){const n=d.useMemo(()=>Tt(t),[t]),[o,s]=d.useState(null),i=o!==null;return n?e.jsxs("div",{className:"flex min-h-full flex-col justify-center gap-4 p-5",children:[e.jsx("div",{className:"text-center text-xs uppercase tracking-[0.18em] text-accent",children:"Guess first"}),e.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Take a shot before the lesson. Getting it wrong is free — no score. The lesson is your answer."}),e.jsx("div",{className:"card p-4",children:e.jsx("p",{className:"text-[15px] leading-relaxed text-neutral-100",children:n.q})}),e.jsx("div",{className:"flex flex-col gap-2",children:n.options.map((r,l)=>{const h=l===n.correct,c=l===o;let p="btn-ghost";return i&&h?p="btn bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/50":i&&c&&!h&&(p="btn bg-red-500/20 text-red-200 ring-1 ring-red-500/50"),e.jsxs("button",{onClick:()=>!i&&s(l),disabled:i,className:p+" justify-start py-3 text-left text-[15px]",children:[i&&h?"✓ ":i&&c?"✗ ":"",r]},l)})}),i&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300",children:n.explain}),e.jsx("button",{onClick:a,className:"btn-accent py-3 text-base",children:"Start the lesson →"})]}),!i&&e.jsx("button",{onClick:a,className:"text-center text-xs text-neutral-600",children:"skip, go straight to the lesson"})]}):(a(),null)}const Te=[{id:"shr",name:"Super High Roller",format:"NLH",buyin:"€100K",start:"2026-08-21",end:"2026-08-23",days:"Aug 21–23"},{id:"plo",name:"PLO High Roller",format:"PLO",buyin:"€25K",start:"2026-08-22",end:"2026-08-23",days:"Aug 22–23"},{id:"main",name:"Main Event",format:"NLH",buyin:"€5.3K",start:"2026-08-22",end:"2026-08-29",days:"Aug 22–29"},{id:"hr",name:"High Roller",format:"NLH",buyin:"€10.3K",start:"2026-08-27",end:"2026-08-29",days:"Aug 27–29"},{id:"wsop",name:"WSOP Online ME Day 2",format:"NLH",buyin:"$5K",start:"2026-09-21",end:"2026-09-22",days:"Sep 21–22"}];function je(t){return Te.filter(n=>n.end>=t).sort((n,o)=>n.start.localeCompare(o.start))[0]??null}function re(t,a){return Math.round((new Date(t+"T00:00:00").getTime()-new Date(a+"T00:00:00").getTime())/864e5)}function x(t=0){const a=new Date;a.setDate(a.getDate()+t);const n=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${n}-${o}-${s}`}const Ae="progress";function de(){return O(Ae,{days:[],quizTotal:0,quizCorrect:0})}function ue(){const t=de(),a=x(0);t.days.includes(a)||t.days.push(a),I(Ae,t)}function on(t){const a=de();a.quizTotal+=1,t&&(a.quizCorrect+=1);const n=x(0);a.days.includes(n)||a.days.push(n),I(Ae,a)}function At(){const t=new Set(de().days);let a=0,n=!0;for(let o=0;o<120;o++)if(t.has(x(-o)))a++;else if(o>0&&n)n=!1;else break;return a}function Bt(){var a;const t=x(0);return re(((a=je(t))==null?void 0:a.start)??"2026-08-16",t)}function _e(){const t=x(0);return Te.some(a=>re(a.start,t)<=6&&t<=a.end)}function Nt(){const t=de();return{streak:At(),practicedToday:t.days.includes(x(0)),quizTotal:t.quizTotal,quizCorrect:t.quizCorrect,totalDays:t.days.length}}const Ct=[{id:"S1-value-boyut",kavram:"boyut",soru_ozeti:"River value sizing with AK top pair on a dry board",sonuc:"half",not:"Fold read was right; should have been 1/3 pot instead of half"},{id:"S2-ak-stack-call",kavram:"kök-hata",soru_ozeti:"AK top pair in a 3-bet pot, calling a stack lead on a paired river",sonuc:"wrong",not:"Passive-to-aggressive switch + paired river = value"},{id:"S4-kjo-xr",kavram:"blof-secimi",soru_ozeti:"Check-raising KJo gutshot on a T94 board",sonuc:"wrong",not:"Board ownership ≠ hand class; a gutshot isn't connectivity, and showdown value doesn't get turned into a bluff"},{id:"S5-aa-fold-erken",kavram:"kök-hata",soru_ozeti:"Folding AA to a flop check-raise on a T94 board",sonuc:"wrong",not:"Overcorrection; call early streets, fold once the story completes"},{id:"S6-jt-60bb",kavram:"3bet-aralik",soru_ozeti:"60bb in the CO with JTs vs an LJ reg open — never answered",sonuc:"wrong",not:"Postponed three times; MUST be asked in the first session"}],sn="60bb, a reg opens from the LJ, you're in the CO with JTs. 3-bet, call, or fold? And why not the other two?",se="karne",St="karne:corrupt-backup",Ot={"kök-hata":"Root error","stack-modu":"Stack mode","3bet-aralik":"3-bet range","blof-secimi":"Bluff selection",draw:"Draw",plo:"PLO",boyut:"Sizing",icm:"ICM","icm-cover":"ICM cover",multiway:"Multiway","25-30bb-değer":"25–30bb value","25-30bb-fold":"25–30bb fold","3bet-jam":"3-bet jam","4bet-cevap":"4-bet response","aldatıcı-eller":"Deceptive hands","blöf-kriter":"Bluff criteria","board-sahipliği":"Board ownership","canlı-value":"Live value",chop:"Chop",coldcall:"Coldcall","jam-call":"Jam call","kime-blöf":"Who to bluff","kqo-vaka":"KQo case","oop-sıkı":"OOP tight","orta-çift-30bb":"Medium pair 30bb","plo-aa":"PLO AA","rakip-okuma":"Villain read",squeeze:"Squeeze","suited-connector-fold":"Suited connector fold","suited-tuzağı":"Suited trap","turn-fold-equity":"Turn fold equity"};function It(t){return Ot[t]??t.replace(/-/g," ")}function Pt(){var t;return((t=je(x(0)))==null?void 0:t.start)??""}function _(t){const a=Pt();return!a||a<=x(0)?t:t>a?a:t}function Mt(t,a,n){if(t==="wrong")return _(x(1));if(t==="half")return _(x(n==="tournament_life"?1:2));const o=[3,7,14,30],s=o[Math.min(Math.max(a,1)-1,o.length-1)];return _(x(s))}function Rt(t,a){const n=new Set(a).size;return t>=3&&n>=3?"saglam":t>=2&&n>=2?"yetkin":t>=1?"asina":"gorundu"}function Be(t,a){return{id:t,kavram:t,soru_ozeti:"",sonuc:"wrong",streak:0,reps:0,correctDays:[],tarih:x(0),due:x(0),mastery:"gorundu",...a}}function Et(t){const a=String(t.kavram||t.id||"kök-hata"),n=t.correctDays;return{...Be(a),...t,id:a,kavram:a,correctDays:Array.isArray(n)?n:[],reps:typeof t.reps=="number"?t.reps:0,streak:typeof t.streak=="number"?t.streak:0,due:_(String(t.due||x(0)))}}function Le(t){const a=new Map;for(const n of t){const o=String(n.kavram||"kök-hata"),s=a.get(o)||Be(o);s.reps+=1,s.soru_ozeti=String(n.soru_ozeti||s.soru_ozeti),s.sonuc=n.sonuc||s.sonuc,s.not=n.not||s.not,s.tarih=String(n.tarih||s.tarih),s.due=_(String(n.due||s.due)),a.set(o,s)}return[...a.values()]}function W(){const t=xt(se);if(t!==null){let n;try{n=JSON.parse(t)}catch{n=void 0}if(Array.isArray(n)&&n.length){const o=n,s=typeof o[0].reps=="number"?o.map(Et):Le(o);return I(se,s),s}t.trim()&&!(Array.isArray(n)&&n.length===0)&&I(St,t)}const a=Le(Ct);return I(se,a),a}function Ve(t,a,n){const o=W();let s=o.find(i=>i.kavram===t);if(s||(s=Be(t),o.push(s)),s.reps+=1,s.soru_ozeti=a.soru_ozeti,s.sonuc=a.sonuc,s.not=a.not??s.not,s.severity=a.severity??s.severity,s.confidence=n!=null&&n.resetConfidence?void 0:a.confidence??s.confidence,s.streak=a.sonuc==="correct"?s.streak+1:0,a.sonuc==="correct"){const i=x(0);s.correctDays.includes(i)||s.correctDays.push(i)}s.tarih=x(0),s.due=Mt(a.sonuc,s.streak,s.severity),s.mastery=Rt(s.streak,s.correctDays),I(se,o),Lt()}function Ge(t){Ve(t.kavram,t)}function Kt(t,a){const n=W().find(o=>o.id===t||o.kavram===t);n&&Ve(n.kavram,{soru_ozeti:n.soru_ozeti,sonuc:a,not:n.not,severity:n.severity},{resetConfidence:!0})}const le={tournament_life:0,major:1,minor:2};function Ne(){const t=x(0);return W().filter(a=>a.due<=t).sort((a,n)=>le[a.severity??"minor"]-le[n.severity??"minor"]||a.due.localeCompare(n.due))}function Xe(){return W().filter(t=>t.sonuc==="wrong"&&(t.confidence??0)>=.8).sort((t,a)=>le[t.severity??"minor"]-le[a.severity??"minor"])}function rn(){const t=W().filter(n=>(n.confidence??0)>=.8&&n.reps>0);if(!t.length)return null;const a=t.filter(n=>n.sonuc==="correct").length;return{high:t.length,hit:a}}function ln(){const t={gorundu:0,asina:0,yetkin:0,saglam:0};for(const a of W())t[a.mastery]++;return t}const xe="karne:trend";function Lt(){const t=x(0),a=W(),n=a.filter(r=>r.due<=t).length,o=a.filter(r=>r.mastery==="saglam").length,s=O(xe,[]),i=s.findIndex(r=>r.day===t);i>=0?s[i]={day:t,due:n,saglam:o}:s.push({day:t,due:n,saglam:o}),I(xe,s.slice(-30))}function hn(){return O(xe,[])}function cn(){const t=O("journal",[]);if(!t.length)return"";const a=[...new Set(t.map(o=>o.day))].sort().slice(-2),n=t.filter(o=>a.includes(o.day)).slice(0,6);return n.length?`

Recent hands he brought from the table (next-day seed — re-ask these spots in a new guise):
`+n.map(o=>{const s=typeof o.guven=="number"?` [${Math.round(o.guven*100)}% confidence]`:"";return`- [${o.day}] ${o.el} → ${o.aksiyon}${o.gerekce?" ("+o.gerekce+")":""}${s}`}).join(`
`):""}function dn(){const t=Ne(),a=(t.length?t:W()).slice(0,10);return a.length?a.map(n=>{const o=n.severity==="tournament_life"?" ⚠tournament_life":"",s=(n.confidence??0)>=.8&&n.sonuc==="wrong"?" (confident-but-wrong)":"";return`- [${n.sonuc}${o}${s}] ${n.kavram}: ${n.soru_ozeti}${n.not?" — "+n.not:""} (due ${n.due})`}).join(`
`):"(scorecard empty)"}const Dt=()=>new Date().toISOString().slice(0,10),qt=Object.fromEntries(Object.entries(Ue).map(([t,a])=>[a,t]));function Qt(t){let a=qt[t];if(a||(/^3-?bet|aralik|aralık|boyut/i.test(t)?a="M5":/bl[öo]f/i.test(t)?a="M2":/plo/i.test(t)?a="M9":/turn|draw/i.test(t)?a="M8":/stack|mod|icm/i.test(t)&&(a="M4")),!a)return null;const n=ie.find(o=>o.id===a);return n?{id:n.id,title:n.title}:null}function Wt(){const t=d.useMemo(()=>{var k;const y=Dt(),b=Ne(),f=(k=Xe()[0]||b[0])==null?void 0:k.kavram,T=Te.find(R=>R.format==="PLO"),N=T?re(T.start,y):999,L=je(y);return{today:y,cornerman:_e(),days:Bt(),ev:L,dueCount:b.length,topDue:b[0]??null,studyMod:f?Qt(f):null,ploRamp:N>=0&&N<=6,wsopRamp:(L==null?void 0:L.id)==="wsop",practiced:Nt().practicedToday}},[]),{today:a,cornerman:n,days:o,ev:s,dueCount:i,topDue:r,studyMod:l,ploRamp:h,wsopRamp:c,practiced:p}=t,u=s?re(s.start,a):0;return e.jsxs("div",{className:"card border-l-4 border-accent p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-accent",children:"Today"}),e.jsx("span",{className:"text-xs text-neutral-500",children:n?"EPT series LIVE 🎬":o>=0?`${o} days to Day 1`:"series over"})]}),s&&e.jsxs("div",{className:"mt-2 text-sm text-neutral-200",children:["🎯 Next up: ",e.jsx("b",{children:s.name})," ",e.jsxs("span",{className:"text-neutral-500",children:["(",s.format," · ",s.buyin," · ",s.days,")"]}),u>0?` — ${u} days`:u===0?" — today!":" — in progress"]}),h&&e.jsx("a",{href:"#/ders/M9",className:"mt-1 block text-xs text-accent",children:"↳ €25K PLO HR is coming up — refresh the M9 PLO fundamentals →"}),c&&e.jsx("a",{href:"#/referans/bolum/17",className:"mt-1 block text-xs text-accent",children:"↳ WSOP Online ME Day 2 is coming up — refresh Chapter 17 →"}),e.jsxs("div",{className:"mt-3 flex flex-col gap-1.5 text-sm",children:[i>0?e.jsxs("a",{href:"#/ilerleme/tekrar",className:"flex items-start gap-2 text-neutral-200",children:[e.jsx("span",{children:"🔁"}),e.jsxs("span",{children:[e.jsx("b",{children:i})," reviews ready",(r==null?void 0:r.severity)==="tournament_life"?" · ⚠ includes a tournament-ender":""]})]}):e.jsx("span",{className:"text-neutral-500",children:"🔁 No reviews due today."}),l&&e.jsxs("a",{href:`#/ders/${l.id}`,className:"flex items-start gap-2 text-neutral-200",children:[e.jsx("span",{children:"📚"}),e.jsxs("span",{children:["Study today: ",e.jsx("b",{children:l.title})," ",e.jsxs("span",{className:"text-neutral-500",children:["(",l.id,")"]})]})]}),e.jsxs("a",{href:"#/drill",className:"flex items-start gap-2 text-neutral-200",children:[e.jsx("span",{children:"🃏"}),e.jsx("span",{children:p?"You practiced today ✓ — one more drill?":"Today's practice: 1 drill"})]})]})]})}function Jt({onOpen:t}){const a=O("lessons:done",[]);return e.jsxs("div",{className:"space-y-3 px-4 py-5",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Lesson Mode"}),e.jsxs("p",{className:"text-sm text-neutral-400",children:[ie.length," modules · slides + voice narration"]}),e.jsx(Wt,{}),e.jsxs("button",{onClick:()=>t("otopsi"),className:"card flex w-full items-center gap-3 border-l-4 border-red-400/60 p-4 text-left active:scale-[0.99]",children:[e.jsx("div",{className:"text-2xl",children:"🔬"}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-semibold",children:"Bustout Autopsy"}),e.jsx("div",{className:"truncate text-xs text-neutral-500",children:"4 bustout hands (3 from the book + 1 of yours) — you decide first"})]}),e.jsx("div",{className:"shrink-0 text-neutral-600",children:"→"})]}),e.jsx("div",{className:"space-y-2 pt-2",children:ie.map(n=>{const o=a.includes(n.id);return e.jsxs("button",{onClick:()=>t(n.id),className:"card flex w-full items-center gap-3 p-4 text-left active:scale-[0.99]",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-sm font-bold text-accent",children:n.id}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-semibold",children:n.title}),e.jsxs("div",{className:"truncate text-xs text-neutral-500",children:[n.chapter," · ",n.minutes," min"]})]}),e.jsx("div",{className:"shrink-0 text-lg",children:o?e.jsx("span",{className:"text-accent",children:"✓"}):e.jsx("span",{className:"text-neutral-600",children:"→"})})]},n.id)})})]})}const Ft=`# POKER POCKET BOOK v5

**EPT Barcelona Edition**
16–29 August 2026

Emre Nuhoğlu
*August 2026 — tournament-winning edition*

## What changed in v5

*The spine is unchanged: "one pair in a bloated pot = bluff-catcher" (the root error). v5 preserves the book's PREFLOP strength and adds the missing half of the diagnosis — postflop/ICM/multiway execution. The tables of the existing chapters (C0–C10) are personally calibrated; kept VERBATIM from v4, only the sub-number errors left over from the v3→v4 renumber were fixed. New chapters were added at the END to avoid shifting numbers. Every new number is a \`(kalibre et)\` slot — no made-up ranges/SPRs/percentages.*

- **NEW Chapter 11 — Bloated Pots, Turn Discipline and River Execution:** the missing half of the root error — the SPR definition of a "bloated pot", the turn barrel criterion, the river bluff-catch + thin value framework
- **NEW Chapter 12 — ICM and the Final Table Battle Plan:** risk-premium correction to the C5 jam/call tables, FT role matrix, pay-jump/ladder, bubble hunting map, event-based ICM map
- **NEW Chapter 13 — Multiway Pot Doctrine:** the half that C7 named but never wrote — narrow the value / the bluff dies / nut-focus
- **NEW Chapter 14 — The 40–70bb Bridge Band:** the table-less band between C4 (100–150bb) and C5 (25–30bb)
- **NEW Chapter 15 — PLO Tournament Layer:** stack mode + pot geometry/SPR (the C5 "3-bet=JAM" contradiction, invalid in pot-limit, closed)
- **NEW Chapter 16 — Mental Spine:** bustout/re-entry decision card, tilt, autopsy timing, the 8-day series plan and clash pre-decisions
- **C0 11→15 sentences:** candidate sentences from C11/C12/C13/C16 were written into the core with Emre's approval (2026-08-10)
- **Sub-number sync:** C6 (5.x→6.x), C8 (7.x→8.x), C9 (8.x→9.x) fixed
- **Quick Reference** expanded: ICM/FT card, Multiway card, Tilt card, Postflop sizes, fatigue flags
- **Question bank** 24 → new chapter questions added

---

## Table of Contents

- Chapter 0 — 15 sentences to take to the table
- Chapter 1 — Bluff selection: which hands, against whom, with which move
- Chapter 2 — Deceptive medium hands (JTs, KQ, KJ, 97s)
- Chapter 3 — Stack modes and opening ranges (+ ICM layer)
- Chapter 4 — 3-bet and call ranges by position (100–150bb)
- Chapter 5 — The 25–30bb Band: Battle Plan
- Chapter 6 — With a draw on the turn: bet, or free river
- Chapter 7 — Case autopsies: A4s, KTo, AA river jam
- Chapter 8 — PLO fundamentals
- Chapter 9 — Training protocol ("prep me")
- Chapter 10 — Question bank
- Chapter 11 — Bloated Pots, Turn Discipline and River Execution **NEW ★**
- Chapter 12 — ICM and the Final Table Battle Plan **NEW ★**
- Chapter 13 — Multiway Pot Doctrine **NEW ★**
- Chapter 14 — The 40–70bb Bridge Band **NEW ★**
- Chapter 15 — PLO Tournament Layer: stack mode, SPR, multiway **NEW ★**
- Chapter 16 — Mental Spine: bustout/re-entry, tilt, autopsy, series plan **NEW ★**
- Quick Reference — the page to check on your phone during breaks

---

## Chapter 0 — 15 Sentences to Take to the Table

*Memorize these. When there's no time to think at the table, the decision comes out of these fifteen sentences. The first 11 are the core; 12–15 were written in from v5's tournament execution.*

1. **One pair in a bloated pot is a bluff-catcher — AA included.**
   This is your root error. Three bustouts came from here.

2. **If a hand weaker than yours won't pay on the river, the jam is not for value.**
   Overpair on a bad river: check-call in a small pot, check-fold in a big pot.

3. **Chops don't jam.**
   If the villain went all-in, he has removed the hand playing for a split from his range.

4. **A bluff passes three criteria: blocker, connectivity, board ownership.**
   Passing all three means 'bluffable'; the move is chosen by the owner of the board.

5. **Deceptive medium hands are small-pot winners and big-pot losers.**
   JTs, KQ, KJ, 97s. Their role is open/flat/BB-defend; never big-pot initiator.

6. **Equity is won on paper, money is won at the table.**
   Playability comes before equity. If KQo's 45% can't be realized, it's a fold.

7. **Before every hand, stack mode first, then range.**
   Playing a 130bb range at 45bb is the most expensive habit.

8. **My OOP 3-bet range is distinctly tighter than my IP range.**
   Because OOP, one pair in a bloated pot is a bluff-catcher. Connects to Chapter 1.

9. **Live, profit comes from wide value 3-bets, not bluff 3-bets.**
   The field doesn't fold. Drop the balance, profit from the imbalance.

10. **Naked AA in PLO is one pair in NLH.**
    Without nut potential the hand doesn't play a big pot.

11. **At 25–30bb value comes from fold equity, not from completing cards.**
    The hand you're looking for isn't one that can develop, but one that's already good: an ace, broadway, a pair. Chapter 5.

12. **The size you bet on the turn is the price of the decision you'll make on the river.**
    The second barrel buys up the luxury of a river check-fold. Chapter 11.

13. **In ICM, a marginal call = the tournament-life version of the root error.**
    Risk premium raises the bluff-catcher's pay-off threshold. Chapter 12.

14. **Multiway, one pair is one class below what it is HU.**
    Every additional player multiplies the chance that someone has the nuts. Chapter 13.

15. **A decision made on tilt comes from the wound, not the range — label the wound first.**
    The other rules only engage once the tilt is noticed. Chapter 16.

---

## Chapter 1 — Bluff Selection

### 1.1 The three criteria

If a hand is going to be bluff fuel, it must pass these three. If one is missing it's not a bluff, just lost chips.

| Criterion | What you're looking for | Example |
|---|---|---|
| **Blocker** | A card that takes the villain's strongest hands out of his range | Holding A♠: you're blocking the nut flush |
| **Connectivity** | Structure that touches the board and can develop | An OESD or FD — not just 'two high cards' |
| **Board ownership** | Whose range the board hits | T98, 765 are yours; dry A-K-7 is the villain's |

### 1.2 The J2s lesson — the suited trap

Being suited doesn't make a hand bluff fuel. J2s has no blocker value (it takes away nobody's nuts), its connectivity is weak (a 9-card gap between the two cards), and even when it completes it carries bottom-flush risk. The word suited is fooling you: what you're looking for isn't suited, it's connected with blockers.

The same trap runs in reverse with offsuit broadways: KJo, QJo — blocker value but no connectivity. These aren't bluff fuel either.

### 1.3 Move selection: who owns the board

Even a hand that passes the three criteria can be played with the wrong move. The critical distinction:

> **Check-raise bluffs are made on boards that hit YOUR range** (T98, 765, J-middle connected).
> **On boards that hit the villain's range** (A-K high dry), draws call quietly.

Why: A♦ K♠ 7♣ smashes CO's open range (AK, AQ, AJ, KQ, A7s, 77, AA, KK). How many A-K combinations are in your BB defense range? Few. Your check-raise has low credibility → good hands call, only air folds. To win air's pot you'd be risking your gutshot in a bloated pot. Calling solves everything: a cheap turn, stacking him with a hidden straight if a T comes, the option to turn aggressive if a spade comes, a cheap exit if it bricks.

### 1.4 Who not to bluff

- **Rec / station type:** doesn't fold. Think value bet, not bluff.
- **Short stack:** the call price is small relative to his stack, he's in auto-call territory.
- **A player committed to the pot:** psychologically, fold is closed off.
- **A big stack playing for survival on the bubble:** will pay you off for free.

---

## Chapter 2 — Deceptive Medium Hands

> **JTs, KQ, KJ, 97s: small-pot winners, big-pot losers.**
> Their roles are open / flat / BB-defend. Their role is NEVER big-pot initiator (3-bet, stack-off fuel).

Why: when JTs makes top pair it has a kicker problem. When KQ makes top pair it's in the shadow of AK/AQ. Even when 97s makes two pair, it's exposed from above. These hands leak money out of the villain's marginal hands while the pot is small (single-raised); when the pot grows (3-bet+), the range facing them narrows and strengthens — they get dominated.

**One sentence:** *Same hand — when the pot size changes, the winning side changes.*

### 2.1 The KQo case — the difference between equity and playability

**42bb, Day 2. HJ (a reg, ~22%) opened, you're in the CO with KQo. Correct decision: fold.**

KQo's raw equity against HJ's 22% range is ~45% — not bad. But you can't realize that equity:

- The AK, AQ, KK, QQ, AA in HJ's range turn your best flops into a grave: you flop a K → you pay AK three streets. You flop a Q → you pay AQ.
- So your best scenarios are your most expensive traps.
- At 42bb, if you 3-bet and eat a 4-bet you can't continue; calling and playing OOP has no initiative either.

**The lesson: equity is won on paper, money is won at the table.**

---

## Chapter 3 — Stack Modes and Opening Ranges

*The first question to ask before any hand: which mode am I in? The range is chosen after that.*

| Mode | Character | What drops / what rises |
|---|---|---|
| **80bb+** | Standard charts. LJ ~18% → BTN ~45% | Suited connector and small pair value peaks |
| **40–60bb** | First tightening. Size stays fixed, range narrows | The offsuit bottom band drops (KTo, QJo, J9o) |
| **25–40bb** | Serious mode shift | Suited connectors lose value, A-x gains value. 'Clear decision vs a jam' filter |
| **15–25bb** | The open-jam boundary | Open 2x from some positions, direct jam with others |
| **<15bb** | Jam / fold | No move outside the range exists |

### 3.1 Critical threshold: medium pairs below 30bb

Below 30bb, medium pairs like 77–TT are not hands to play post-flop — they are jam-or-fold hands. If the set doesn't come you don't have the stack to pay three streets; and if it does, with a short stack you can't get maximum anyway.

### 3.2 The ICM layer

> **30bb on the bubble ≠ 30bb on Day 1.**
> As the money approaches, the same stack doesn't play the same range. The short stacks on your left are protecting you, the big stacks are squeezing you.

- If there are short stacks to your left: widen your opening range, they're playing to survive.
- If there are big stacks to your left: tighten, they can 3-bet you with impunity.
- On the bubble the middle stack is the most fragile position — you can neither jam like a short stack nor apply pressure like a big one. Patience in this mode.

---

## Chapter 4 — 3-bet and Call Ranges by Position

*★ Added in v3. Written assuming 100–150bb and an 8-handed table.*

### 4.0 The logic of this chapter

Your root error is misclassifying one pair in a bloated pot. That error surfaces on the river but is born preflop: what we call a bloated pot is, 90% of the time, a 3-bet pot. So building your 3-bet range correctly is the most efficient way to lower the FREQUENCY of the root error — it delivers results faster than improving your hand reading.

**Every range is tested with two questions:**

1. If I 3-bet and see a flop, will I be comfortable when I make one pair? If not, I'm not 3-betting — I flat or I fold.
2. Will I be OOP? In an OOP 3-bet pot, one pair is by definition a bluff-catcher. That's why OOP ranges are distinctly tighter than IP ranges.

### 4.1 The live tournament adjustment

You will not apply solver ranges as-is. There are three systematic deviations in the EPT field:

| Live player behavior | Your adjustment |
|---|---|
| Folds very little to 3-bets | Lower your bluff 3-bet frequency, widen your VALUE 3-bets |
| Almost never 4-bet bluffs | When you see a 4-bet, take QQ and below seriously; AK is not an automatic 5-bet |
| Opens are wide, coldcalls plentiful | The squeeze is your most profitable move; drop bluff 3-bets in multiway pots |

> **Live, the money comes from wider value 3-bets, not bluff 3-bets.**
> Theory forces you toward balance; the field gives you permission to profit from imbalance.

### 4.2 Sizing — memorize, don't think

| Situation | Size |
|---|---|
| **IP 3-bet** | 3× the open (3.5× is fine live) |
| **OOP 3-bet (blinds included)** | 4× the open |
| **For each coldcaller** | add +1 open size |
| **Squeeze (open + 1 caller)** | 4.5–5× |
| **4-bet IP** | 2.2× the 3-bet |
| **4-bet OOP** | 2.5× the 3-bet |

### 4.3 3-bet ranges — position matchups

*The hands in the bluff row were chosen for flop playability, not blocker theory.*

**vs UTG / UTG+1 open — discipline zone**

| Position | VALUE | BLUFF |
|---|---|---|
| LJ / HJ | QQ+, AKs, AKo | none |
| CO | QQ+, AKs, AKo (JJ mixed) | A5s |
| BTN | JJ+, AKs, AKo, AQs (mixed) | A5s, A4s |
| SB | QQ+, AKs, AKo | none |
| BB | QQ+, AKs, AKo | A5s (rare) |

**Flat (IP only, 100bb+):** TT–77, AQs, AJs, ATs, KQs, KJs, QJs, JTs, T9s, 98s. If 150bb+, add 66–22 and 87s, 76s.

**What you will not do:** coldcall a UTG open with AJo, KQo, KJo. These hands are either 3-bet or fold — played in between, they are exactly the hands that inflict the root error.

**vs LJ / HJ open**

| Position | VALUE | BLUFF |
|---|---|---|
| CO | JJ+, AQs+, AKo | A5s, A4s |
| BTN | TT+, AQs+, AKo, AQo (mixed) | A5s–A3s, KJs, QJs |
| SB | JJ+, AQs+, AKo | A5s, A4s |
| BB | TT+, AQs+, AKo, AQo | A5s–A3s, KJs, T9s (rare) |

**Flat IP (CO/BTN):** 99–22, AJs, ATs, KQs, KJs, KTs, QJs, QTs, JTs, T9s, 98s, 87s, 76s

**vs CO open**

| Position | VALUE | BLUFF |
|---|---|---|
| BTN | TT+, AJs+, AQo+, KQs | A5s–A2s, KTs, QTs, J9s, T8s |
| SB | JJ+, AJs+, AQo+, KQs | A5s–A3s, KJs |
| BB | TT+, ATs+, AQo+, KQs, KJs | A5s–A2s, K9s, QTs, J9s |

**BTN flat:** 99–22, AJo, KJo, KTs, QJs, QTs, JTs and all 65s+ suited connectors

**vs BTN open — steal defense**

| Position | VALUE | BLUFF |
|---|---|---|
| SB | 88+, ATs+, AJo+, KJs+, QJs | A5s–A2s, K9s, Q9s, J9s, T8s, 87s |
| BB | 99+, ATs+, AQo+, KQs, KJs | A5s–A3s, K9s–K7s, QTs, J9s, T8s, 76s |

**SB flat: almost none.** Flatting from the SB at 100bb is a losing position — 3-bet or fold. Exception: at 200bb+ with a weak, paying BTN, flatting 66–22 and suited connectors is acceptable.

**BB flat: very wide.** You're closing the action, the price is good. All suited hands, all pairs, most broadways, all suited connectors.

**vs SB open (BB only) — the field's most profitable 3-bet spot**

- **VALUE:** 88+, A9s+, ATo+, KTs+, QTs+, JTs
- **BLUFF:** K7s+, Q8s+, J8s+, T8s, 97s, 86s, 65s
- **Flat:** every remaining playable hand. The SB range is wide, you're IP — few reasons to fold.

### 4.4 The three conditions for a coldcall

A coldcall is a harder decision than a 3-bet because you're giving up the initiative. If all three aren't met at the same time, don't flat:

1. **Position:** you're IP or you're closing the action (BB).
2. **Depth:** for set-mining, effective stack at least 15× the call. At 100bb a 3bb call → 45bb+ behind: fine. The same call at 40bb: not.
3. **A paying villain:** someone who will pay you off when you make your set. Set-mining against a tight reg is unprofitable.

**Multiway warning:** if there's an aggressive player behind you who can 3-bet, flatting a tight hand leaves you open to a squeeze. In that case either upgrade to a 3-bet or fold.

### 4.5 Your response to a 3-bet

| Response | Hands |
|---|---|
| **4-bet value** | KK+, AKs (against a late-position 3-bettor) |
| **4-bet mixed** | QQ, AKo — yes against a late-position 3-bet, no against UTG |
| **4-bet bluff** | A5s, A4s — VERY rare live. If nobody folds, a bluff 4-bet is burning money |
| **Flat (IP, 150bb+)** | JJ, TT, AQs, KQs; suited connectors if the price is below 3× |
| **Fold** | OOP all offsuit broadways: AJo, KQo, ATo — trash against a 3-bet |

> **A 4-bet pot is a bloated pot.**
> Taking flop+turn value there with AA and jamming a bad river is an exact replay of Case 3 (the 245 board). The rule doesn't change: if a hand weaker than yours won't pay on the river, the jam is not for value.

### 4.6 The squeeze — the single most profitable move live

The coldcaller's range is tight but weak: he can't 4-bet, he folds most of his hands.

- **VALUE:** JJ+, AQs+, AKo
- **BLUFF:** A5s–A4s, KQs, AJs (blocker + playability)
- **SIZE:** 4.5× IP, 5×+ from the blinds

If the coldcaller is tight, widen the bluff side. If the coldcaller is a fish (doesn't fold), cut the bluffs entirely — value squeeze only.

### 4.7 The stack-mode top layer

| Mode | 3-bet character | Flat | Note |
|---|---|---|---|
| **200bb+** | Value-heavy, few bluffs | Widest | Implied odds peak. Offsuit broadway value minimal |
| **100–150bb** | Tables apply as-is | Wide | Standard mode |
| **60–100bb** | More polarized, bluffs increase | Narrows | Set-mining weakens |
| **40–60bb** | Linear / merged | Almost none | 3-bet or fold |
| **25–40bb** | 3-bet = commit | None | A hand you 3-bet must be able to continue against a 4-bet |
| **<25bb** | Jam / fold | None | No 3-bet-fold structure exists |

**The most common mistake:** playing a 130bb range at 45bb — flatting small pairs, 3-bet bluffing suited connectors. Both lose money at 45bb.

---

## Chapter 5 — The 25–30bb Band: Battle Plan

*★ Added in v4. The tournament's most frequently visited and most chip-expensive band. Chapter 4's tables were for 100–150bb; this chapter tells you what to play once those tables go invalid.*

### 5.0 The character of the band

> **In this band value comes from FOLD EQUITY, not from completing cards.**
> The hand you're looking for isn't one that "can develop" but one that's ALREADY GOOD: an ace, broadway, a pair. The engine of speculative hands (implied odds) doesn't run at 28bb — when you make your set or straight there's no stack left to get paid with, and in the 85% of cases where you don't complete, you're helpless.

Decision order in two seconds: MODE → POSITION → HAND. When a suited connector arrives at 28bb, you don't even reach the third step.

### 5.1 Opening ranges (nobody in ahead of you)

*Size 2–2.2×. At this depth there's no point opening bigger.*

| Position | Opening range |
|---|---|
| **UTG / UTG+1** | 77+, ATs+, AJo+, KQs |
| **LJ / HJ** | 55+, A8s+, ATo+, KTs+, QJs |
| **CO** | 33+, A5s+, A9o+, K9s+, QTs+, JTs |
| **BTN** | 22+, all A-x, K7s+, K9o+, Q9s+, J9s+, T9s |
| **SB** | 22+, A2s+, A7o+, K9s+, KTo+, QTs+ |

### 5.2 3-bet = JAM

In this band a 3-bet means commit. There is no such structure as "3-bet then fold" — you go directly all-in.

| Against whom | Jam range |
|---|---|
| **Early position open** | TT+, AQs+, AKo |
| **CO / BTN open** | 88+, ATs+, AQo+, KQs |
| **Chip leader / folds to jams** | 77+, A9s+, AJo+, KQs (widened) |

**NO FLATTING in this band.** Not from the SB, not from the BB, not IP. Chapter 4's wide flat tables belong to the 100bb+ world.

### 5.3 Calling a jam

If the villain went all-in: 99+, AJs+, AQo+. Below that is not a call at 28bb — either you make the jam yourself or you fold.

### 5.4 The fold list

**Unconditional folds in this band:**

- All suited connectors: T9s, 98s, 87s, 76s, 65s, 54s
- All suited gappers
- Weak offsuit broadways: KJo, QJo, JTo
- FLATTING small pairs (jamming is a separate matter)

### 5.5 Field case — three hands, one pattern (GGMasters $150, July 2026)

In the 28bb band the table asked the same question with three different hands. In all three the correct answer was fold, and the decisive factor was the mode, not the hand.

| Hand | Position | Situation | Decision |
|---|---|---|---|
| **T9s** | SB | Offered a call for 40K, 28bb behind | FOLD — flatting from the SB is a losing position |
| **54s** | BB | 30K into a 73K pot, 28bb behind | FOLD — the implied-odds engine isn't running |
| **87s** | BB | 30K into a 73K pot, 28bb behind | FOLD — better hand, same decision |

**A correct-decision example from the same session:** a ~23bb jam from the BTN with TT. The chip leader (1.08M) considered a call and folded; the pot was taken. Chapter 3's rule was applied — below 30bb, medium pairs are not post-flop hands, they are jam-or-fold hands.

> **Rule: The question waiting for you in this band is not "is this hand good enough" but "is this hand playable at this stack".**
> Folding speculative hands preserves the ammunition you'll use to jam with a real hand.

### 5.6 Villain-reading note

If you've seen the chip leader fold to a jam once, widen your jam range against that player's opens. A profile that opens wide and folds to jams is the most profitable target at the table in this band. Priority order: (1) jam when that player opens, (2) open from BTN/CO and collect the blinds.

---

## Chapter 6 — Draws on the Turn: Bet or Free River

*Poker's most frequent turn question. The decision depends on three factors.*

### 6.1 Is there fold equity

- Semi-bluffing a station type = burning money. He won't fold, you're left with your naked equity → check, take the free card.
- Against a reg and when the board fits your range → bet. You get two ways to win: making him fold OR completing.

### 6.2 Quality of the draw — does it get paid when it completes

| Draw | Decision | Reason |
|---|---|---|
| **Nut flush draw** | Bet-weighted | You get action when it completes, your blockers are strong |
| **Low flush draw (97s)** | Check-weighted | Even when it completes, risk of paying off a higher flush |
| **Open-ender (OESD), straight board** | Both are legitimate | Hidden strength — gets paid a lot when it completes. Choose based on villain |
| **Gutshot** | Check | Almost never semi-bluff fuel |

### 6.3 IP / OOP distinction

- **IP:** checking really does mean a free card — if villain checks too, you saw the river for free.
- **OOP:** a check doesn't guarantee a free card. If villain bets, the 'free' plan collapses. OOP, either bet your draw or check it with a call plan — don't check thinking 'I'll see it for free'.

---

## Chapter 7 — Case Autopsies

> **The root error of all four cases is the same:**
> Misclassifying one pair (including AA) in a bloated or multiway pot.

### Case 1 — A4s river call ($50K High Roller, WSOP 2026)

**What happened:** You saw the chop mechanic correctly, but skipped a filter and made the hero call.

**The skipped filter:** Chops don't jam. If villain went all-in, he has removed the hand playing for a split from his range.

**Rule:** Seeing a mechanic correctly isn't enough — also ask whether villain's move is consistent with that mechanic.

### Case 2 — KTo top pair check-raise all-in ($10K 6-Handed)

**What happened:** Check-raise all-in with top pair on a wet board; villain called with the QQ he had flatted.

**Correct play:** Check-call, then reassess. Top pair on a wet board is not a big-pot starter.

**Rule:** One pair is not stack-off fuel. The road to a bloated pot turns your hand into a bluff-catcher.

### Case 3 — AA river jam (PokerOK $108 Mystery Bounty, July 2026)

**Board:** 2-4-5, river 6. Your hand is AA. Villain has 66 (river set).

**What was correct:** Flop and turn value bets — both were right.

**The mistake:** Jamming the remaining stack on the bad river 6. On that river no hand weaker than yours pays — every three, straight, set has you beat; one pair passes. There is no value target.

> **Rule: if no hand weaker than yours will pay on the river, a jam is not value.**
> Overpair on a bad river: check-call into a small pot, check-fold into a big pot.

*Chapter 4 link: the reason this hand became a bloated pot was born preflop. Building your 3-bet range correctly directly lowers the odds of this case repeating.*

### Case 4 — T6s trip-ten river check-raise all-in (WSOP Online ME Day 2 prep)

**What happened:** T6s in the BB, called a BTN min-raise. Flop A-T-3, call 1/3 pot. Turn 5 check-check. River T (board A-T-3-5-T) → trip tens, kicker 6. You checked, BTN fired a thin bet, you check-raised all-in.

**Correct play:** Check-call. On this runout your trips are a bluff-catcher: no weaker hand calls the all-in (every ten outkicks you, boats are ahead); the raise folds out the bluffs and only gets paid by hands that beat you.

**Rule:** A good-looking single/strong hand (trips included) turns into a bluff-catcher on a paired/bloated board — the exact mirror of Case 2 (KTo). (B9.2 protocol: this hand from the table was logged as a case.)

---

## Chapter 8 — PLO Fundamentals

### 8.1 Mindset differences

- **Equities run close.** In PLO 60%/40% is a good favorite; there's no NLH-style 80% comfort.
- **Nut dominance is everything.** The second-best hand is an expensive hand in PLO.
- **Two pot bets = the stack is in the middle.** Pot growth is much faster than NLH; by the third street there's no way back.

### 8.2 Hand selection

| Concept | Rule |
|---|---|
| **Dangler** | Hand with a disconnected fourth card (AA72) — fold. In practice you're playing a three-card hand |
| **Rundown** | Connected hands like JT98, KQJT — strong especially when double suited |
| **Naked AA** | Treat as one pair. Without nut potential it doesn't play a big pot |
| **Wrap + FD** | The real weapon. 13+ outs plus a flush draw — played aggressively |

### 8.3 NLH player's traps

- **Seeing AA through NLH eyes:** In PLO, if AA isn't double suited and doesn't connect with the board, it's just one pair.
- **Stacking off with top pair / top two:** In PLO two pair is almost never the nuts.
- **Carrying your bluff frequency over from NLH:** In PLO ranges are more connected, bluffs get through less.
- **Playing OOP 3-bet pots:** The toughest spot in PLO. When in doubt, flat.

---

## Chapter 9 — Training Protocol

> **Command: "prepare me" / "drill" / "quiz me"**
> Socratic Q&A begins: 5–8 decision questions, one at a time, the next question isn't asked before your answer arrives.

### 9.1 Question mix

| Weight | Topic |
|---|---|
| **40%** | Root error — one pair / bloated pot classification |
| **30%** | Stack mode and range selection (Chapters 3, 4, 5) |
| **20%** | PLO |
| **10%** | Bluff selection and draw decisions |

### 9.2 Rules

- Questions answered wrong are asked again 1–2 days later in a different disguise.
- Hands you bring from the table are processed as cases and added to Chapter 7.
- These chapters' candidate sentences were logged into B0 as s.12–15; new permanent rules coming from the table get added to B0, and the heading is updated.
- If the answer is right, the reasoning is asked too — a correct decision with wrong reasoning is half a point.
- Camp opens at the start of August; the EPT starts August 16.

---

## Chapter 10 — Question Bank

*Answers were deliberately not written. Worked through verbally during drills.*

### Core questions (v2)

1. 40bb, HJ opened, you're in CO with KQo. Decision and reasoning?
2. Board A♦ K♠ 7♣, you're in the BB, you have a gutshot, CO fired a cbet. Check-raise or call — why?
3. 28bb, you hold 99, UTG opened. Decision? Is it the same at 90bb?
4. Nut flush draw on the turn, villain is a station type. Bet or check?
5. You face a river all-in with A4s and there's a chop mechanic. Which filter will you apply?
6. Top pair on a wet board, OOP, villain fired a cbet. Why is check-raise all-in wrong?
7. AA, board 2-4-5, you got value on the turn, the river came 6. Villain checked. You? (Case 3)
8. Bubble, 30bb, two short stacks on your left. How does your opening range differ from 30bb on Day 1?
9. PLO, you hold AA72 rainbow, LJ opened, you're on the BTN. Decision?
10. PLO, you face a pot bet on the turn with wrap + nut flush draw. Your decision tree by stack depth?

### Chapter 4 questions (added in v3)

11. 8-handed table, 180bb. UTG opened, you're on the BTN, your hand is AQo. Decision?
12. 130bb. HJ opened, CO flatted, you're in the BB, your hand is KQs. Decision and size?
13. 45bb. BTN opened, you're in the SB, your hand is 76s. Decision? Is this hand the same at 130bb?
14. 200bb. UTG opened, you're in the CO, your hand is 44. Apply the coldcall's three conditions one by one.
15. 120bb. You opened AKo from the CO, BTN 3-bet. Decision? Would it change if the 3-bettor were UTG?
16. 90bb. 4-bet pot, your hand is KK, flop K-7-2 rainbow, turn 9, river A. Villain checked. You?
17. PLO, 100bb. LJ opened, your hand is AA J7 rainbow, you're in the SB. Decision and reasoning?
18. 30bb. CO opened, you're on the BTN, your hand is AJs. 3-bet, jam, or flat — and why not the other two?

### Chapter 5 questions — 25–30bb band (added in v4)

19. 28bb. You're in the SB, your hand is T9s, BTN opened and there's a call offer at 40K. Decision? What would the same hand be at 150bb?
20. 28bb. You're in the BB, paying 30K into a 73K pot, your hand is 87s. Decision? Why doesn't Chapter 4's 'BB flat: very wide' line apply here?
21. 26bb. The chip leader (4x your stack) opened from the CO, you're on the BTN, your hand is A9s. Decision and size?
22. 28bb. You've seen that same chip leader fold to a jam once. How does your jam range against him change — and why is this the most profitable spot at the table?
23. 23bb. You're on the BTN, your hand is TT, no one in front of you. Decision? If the result comes back fold, or you get called by AK, does your evaluation change?
24. 27bb. UTG opened, you're in the HJ, your hand is 66. Jam, flat, fold — which one and why not the other two?

### Chapter 11–16 questions (added in v5)

25. You have an overpair in a 100bb 3-bet pot, the flop is dry. What's the SPR, what's one pair's role? Does the same hand change in a 250bb single-raised pot? (Chapter 11)
26. Top pair good kicker on the turn, the board paired. Second barrel or check — and what does "do I have a river plan" mean? (Chapter 11)
27. Overpair on the river, villain fired an overbet. Call or fold? Would it change if the size were half pot? (Chapter 11)
28. Top pair good kicker on the river, villain is a rec-station, he checked. Bet or check — when is thin value? (Chapter 11)
29. SHR, 28bb, the money is two hands away. Facing a call offer against a jam with AJs. What would the same hand be on Main Day 1? (Chapter 12)
30. Final table, medium stack, two players at the table shorter than you. What's your baseline stance, whom do you target? (Chapter 12)
31. Bubble, you're a big stack, a locked-up medium stack on your left. What's your most profitable move and why? (Chapter 12)
32. Rec-heavy Main, 3 players saw the flop, you hold top pair. This hand that's value HU is now what? (Chapter 13)
33. In a 4-way pot you own the board, you have an OESD. The bluff passes all three criteria — why is there still no bluff? (Chapter 13)
34. 50bb. CO opened, you're on the BTN, your hand is AJs. How does your 3-bet framework differ from B4's (130bb)? (Chapter 14)
35. PLO, 30bb, LJ opened, your hand is a double-suited rundown. Why is your "Chapter 5: 3-bet=jam" reflex invalid, what do you do? (Chapter 15)
36. PLO, wrap + FD on the flop, you count 13 outs. Which question do you ask before stacking off? (Chapter 15)
37. You busted the SHR with a correct jam. In the 20 minutes before firing a re-entry, which two questions do you answer? (Chapter 16)

---

## Chapter 11 — Bloated Pot, Turn Discipline and River Execution

*★ v5. The MISSING HALF of the root error. B0/B4/B7 establish the DIAGNOSIS "one pair in a bloated pot = bluff-catcher"; this chapter gives how to play the hand once the diagnosis is made: when the pot is "bloated", whether to fire the barrel on the turn, at what price to call/value on the river. All three documented eliminations are the subject of this chapter.*

### 11.0 "Bloated pot" — a numerical definition

Until now "bloated pot" was used qualitatively (≈ 3-bet pot). When depth changes, this intuition fails: at 250bb a single-raised pot can enter the stack-off zone by the turn; at 100bb a 3-bet pot is already there. The correct measure is SPR (stack ÷ pot).

> **Deep, a bloated pot is defined by SPR, not by the number of bets.**

| SPR (on the flop) | Typical pot | Role of one pair |
|---|---|---|
| **< 1** | 4-bet pot / short stack | Decision was made preflop — commit |
| **1–4** | 100bb 3-bet pot | Bluff-catcher. Do NOT START a big pot |
| **4–8** | 40–70bb single-raised / live multiway bloated open | Two streets of value + control; careful on the third street |
| **> 8** | 100bb+ standard single-raised pot (incl. 200–300bb Main Day 1) | Thin value can be taken — but a pot that sees a re-raise suddenly drops into the 1–4 band |

SPR is arithmetic, universal. Which EXACT hand class stacks off at which SPR becomes clear with your execution data — *(calibrate: assign an SPR to the 3 elimination hands)*.

**Rule:** Read the SPR first, then assign the role. Deep (SPR>8), demoting one pair to bluff-catcher too early and missing value is a mistake; in mid-shallow (SPR 1–4), stacking off on the old deep reflex is one too.

### 11.1 Turn discipline — the second-barrel criterion

B6 covered the turn only for DRAWS. The turn decision for value/marginal hands goes here. The root error is usually born on the turn: you bloat the pot yourself with the second barrel and end up as a bluff-catcher on the river (in Case 3 the turn bet was CORRECT — B7; but that bet bloated the pot — when firing the second barrel your river plan must be ready in advance).

| My hand | Blank / low turn | Overcard to me | Board paired | Draw-completing |
|---|---|---|---|---|
| **Overpair** | Bet (controlled) | Careful — count the SPR | Check leaning | Check / reduce size |
| **Top pair good kicker** | Thin bet | Check-call | Check | Check-fold leaning |
| **Top pair weak kicker** | Check | Check | Check-fold | Check-fold |
| **Air + blocker** | Barrel candidate | Barrel candidate | Give up | Give up (the card arrived) |

Sizes *(calibrate)* — but the direction is fixed: every time you grow the pot, your buying power for the check-fold luxury on the river shrinks.

> **Before firing the second barrel, ask: can I state my river plan? Am I leaving a pot size at which I can check-fold on a bad river?**

**B0 c.12:** *The size you fire on the turn is the price of the decision you'll make on the river.*

### 11.2 River — bluff-catch: at what price to call

B0 c.2 says "check-call in a small pot, check-fold in a big pot" — a coarse tendency. When villain bets, the decision reduces to three variables:

| Villain size | What bluffs does he have? | What value weaker than me bets this size? | Blocker | Tendency |
|---|---|---|---|---|
| **≤ 50% pot** | Many (thin value + bluffs) | Plenty | Less important | Call direction |
| **50–100%** | Shrinking | Narrowing | Important | Borderline — blockers decide |
| **Overbet** | Polarized: nuts or air | Almost none | Critical | One pair → fold; only blocker-holding bluff-catchers call |

**Rule:** As the size grows, villain's range shifts toward value, and one pair resolves from bluff-catcher into FOLD. "The reg overbet" = read it as polarized; panic hero-calls and forgetting chops (Case 1) are this spot's mistakes.

### 11.3 River — thin value: who pays

All of the book's value filters so far were NEGATIVE ("don't jam if he won't pay"). The positive command was missing: if someone pays, BET the THIN value. This is the other face of B0 c.2 — same filter, opposite direction.

| My hand class | Rec / station | Reg |
|---|---|---|
| **Top pair good kicker** | Small value bet (he pays) | Thin bet / check-call |
| **Second pair** | Small value bet | Check-call |
| **Two pair, small board** | Value bet | Check-call — the reg pays this size with better |

**Rule:** If the question "which hand weaker than mine pays?" HAS an answer — however thin — bet. In the rec-heavy Main, missed thin value is direct chip loss.

### 11.4 Bad river catalog

With an overpair/strong one pair, when these cards arrive the "no value target" alarm goes off:

- **Fourth of the low cards / straight-completing** (Case 3: river 6 on 2-4-5 — trips, straight, set have all passed you)
- **Third flush card** (if you don't hold a flush)
- **Board pairing** (door to set / full house)
- **Overcard over yours** (villain's top pair beats you)

On these cards: check-call in small pots, check-fold in big pots. **NEVER jam** — jam value exists only if a hand weaker than yours will pay.

*Root-error link: this entire chapter is the execution layer of B0 c.1-2. B4 reduces the error's FREQUENCY preflop; B11 delivers the EXECUTION when the error moment arrives.*

---

## Chapter 12 — ICM and the Final Table Battle Plan

*★ v5. Promotes B3.2's 6-line "ICM layer" to a load-bearing spine. SHR €100K and HR €10.3K small fields + steep payouts: nearly every Day 2 decision is under ICM. The most expensive ICM mistake is exactly the ROOT ERROR itself — calling off with one pair in a bloated pot, wrong in chipEV and multiplicatively wrong under ICM.*

### 12.0 When ICM turns on in this tournament

Same 28bb, same hand, same position: in the SHR it's an ICM decision, in Main Day 1 a pure chipEV decision. Make this distinction in advance, NOT at the table.

| Event | Field character | When ICM effectively turns on | Bubble ≈ FT? |
|---|---|---|---|
| **SHR €100K** | Reg-heavy, very small field *(verify at the table)* | Early — from mid Day 1 | Yes, nested |
| **PLO HR €25K** | Small field | Early–mid | Close |
| **HR €10.3K** | Reg-heavy, small field | Mid — steep as the money approaches | Close |
| **Main €5.3K** | Rec-heavy, big field | Late — chipEV until Day 3 | No, separate |

Field size / payout percentages are NOT MADE UP — read them from the lobby based on registration count. Step 0 is added to the decision order: **"Is ICM on in this event?"**

### 12.1 Risk premium — the ICM correction to B5's jam/call tables

B5.2/5.3 ranges are pure chipEV. ICM's number-one asymmetry: **jamming is much cheaper than calling** (jamming has fold equity; calling has none).

> **In a call spot the FIRST question isn't "is it the bubble?" but "am I COVERED?"** What squeezes you isn't the bubble but being covered (bust when you lose). Against someone who covers you (chip leader), calls tighten HARD; against a jam from a short who does NOT cover you (you don't zero out even losing), you call WIDE even on the bubble. *(Emre's leak to calibrate: lumping the two together as "bubble = tight".)*

| Situation | JAM range | CALL range (vs jam) | Jam at the chip leader |
|---|---|---|---|
| **ICM off (per 12.0)** | B5 as-is | B5 as-is (99+/AJs+/AQo+) | B5 as-is |
| **Bubble / near the money** | Tighten one notch | Tighten TWO notches | Widen (if they're locked) |
| **FT pay-jump active** | Tighten two notches | Tightest — fold hard when covered | Depends on role (12.2) |

Notch contents in drills with ICMIZER/solver *(calibrate)* — no made-up thresholds.

> **Jam and call ranges DIVERGE under ICM. Symmetry is a chipEV assumption.**

**Emre calibration (2026-08-10)** — harsh bubble, wide BvB jam from someone covering you, ~22bb: **CALL = 88+ · AJs+ · AQo; A9s / KQs FOLD.** Driver: cover + bubble = losing means bust €0, a marginal edge isn't worth tournament life (A9s reverse-dominated, KQs a flip). *If you're NOT covered (jammer is shorter than you, you don't bust even losing) the line is much wider; if the jammer tightens, the call gets even tighter. The exact threshold is verified from the lobby with ICMIZER.*

**Drill add-on (2026-08-10, session 2)** — the NOT-covered side, where the leak actually lives: not covered, 22bb in the BB, bubble, wide short jam — folded **both A9s and KTo** ("range not enough"). Both are calls (KTo ~54% vs a wide 13bb BTN jam, needing ~44% for the price; A9s clearer still). The **not-covered fold reflex is the sticky half of the leak** — it survived the covered/not-covered contrast in the very same session. So the not-covered CALL floor sits *at least* as wide as A9s/KTo here; the full range stays \`(calibrate)\` with ICMIZER, but the error is the fold, not the call. Table cue: **before folding to any jam, ask "am I covered?" — if No, the call is much wider than it feels.**

### 12.2 Final table — role matrix

At the FT the correct behavior depends on STACK ROLE, not the HAND.

| My role | Someone shorter than me at the table: YES | Someone shorter than me: NO |
|---|---|---|
| **Short (<15bb)** | Be the first jammer, watch the ladder | Don't fold up — jam correctly; locking up is also a bust (to the blinds) |
| **Middle** | Most fragile — know whose bust you're waiting for, don't open pots with those who cover you | You're effectively the shortest — 12.5: if everyone's locked, WIDEN your jam range, don't fold up |
| **Deep, covering** | Aggression is free — crush without penalty | Don't get into an ego war with the chip leader |

### 12.3 The ladder — when it's real money

If the next pay jump is LARGE relative to your stack and someone shorter than you is at the table: wait, ladder the jump. If the jump is micro: play chipEV.

Payout ladder *(fill from the lobby — threshold numbers are not made up)*:

| Place | Prize | Difference vs previous place |
|---|---|---|
| *(fill in)* | *(fill in)* | *(fill in)* |

### 12.4 Bubble hunting map

The bubble isn't defense; it's the tournament's highest-chipEV window — IF you're on the RIGHT side of it.

| My stack | Locked middle stack | Short stack | Big stack covering me |
|---|---|---|---|
| **Big (covering)** | Rob them — widen opens + 3-bet pressure | Normal | No ego — bluff 3-bets off |
| **Middle** | Selective robbery — ONLY the locked middle YOU cover; otherwise B3.2: patience | Normal | Run |
| **Short** | — | — | Run, wait for the correct jam |

Rule: **the locked-up middle stack is the most profitable target at the table.** Rec/reg field difference: in the Main, targets abound; in SHR/HR everyone knows this, so target selection is selective (same as B5.6's opponent-reading pattern).

### 12.5 Short-stack ICM exception — CAUTION

⚠️ **"Tighten under ICM" is NOT ALWAYS correct.** When everyone is locked, the short stack's correct play is to WIDEN — nobody wants to pay you off. In this band the "tighten in general" reflex is actively wrong advice.

**<15bb jam card** *(calibrate — ≤6 rows: only BTN/SB/BB + "first in"; chipEV jam range + ICM correction column; no full Nash table is written, the "check at the break" character is preserved)*.

**B0 c.13:** *A marginal call under ICM = the tournament-life version of the root error.*

---

## Chapter 13 — Multiway Pot Doctrine

*★ v5. B7 defines the root error as "misclassification in a bloated OR MULTIWAY pot" but the body had no multiway postflop rule. This chapter pays that debt. The Main (€5.3K) is rec-heavy: wide opens + lots of cold-calls = most pots are multiway. The texture you'll spend the longest time in across the 4 events.*

### 13.0 Core

> **Every additional player MULTIPLIES the price of a bluff, RAISES the bar for value, and INCREASES the value of the nuts.**

The reason is compound probability: as the number of opponents grows, the chance that someone has two pair+/a set multiplies. That's why a multiway bloated pot makes one pair an even clearer bluff-catcher than a HU bloated pot.

### 13.1 HU → 3+ way transition

| Situation | Heads-up | 3+ way |
|---|---|---|
| **C-bet frequency** | High | Collapses — only strong value + real nut-draws |
| **Top pair** | Value | Drops a class → check / pot control |
| **Overpair** | Big-pot candidate | Two streets + control; count the SPR (B11) |
| **Bluff** | Three criteria (B1) | Almost none — only nut-blocker semi-bluffs |
| **Nut FD** | Bet | Stays a bet (price is good, gets paid big when it completes) |
| **Non-nut FD / gutshot** | Depends | Reverts to check / dies |

### 13.2 Who am I afraid of

Not all the preflop callers — **the tightest range STILL STANDING on the flop.** A raise coming after someone's bet and a call in between = almost always the nuts; no continuing with one pair.

### 13.3 Bluffing multiway — the fourth criterion

B1's three criteria (blocker/connectivity/board ownership) were built for a single opponent. Multiway, the fourth variable: **number of opponents = number of doors the bluff must pass through.** Even a single station kills the bluff.

| Number of opponents | Bluff mode |
|---|---|
| **HU** | Three criteria (B1) |
| **3-way** | Only nut-blocker semi-bluffs |
| **4+ way** | None |

Added to B1.4's "who not to bluff" list: **Multiway pots (no matter who).**

### 13.4 Multiway PLO

Live PLO's default state is multiway (limp/multi-call norm). The rule "the second-best hand is expensive" becomes "the second-best hand loses your stack" multiway. A non-nut flush draw is a payoff machine multiway; a nut-ended wrap gains value (gets paid many ways when it completes). Play only for the NUTS. (Details in B15.)

**B0 c.14:** *Multiway, one pair is one class below what it is HU.*

*Root-error link: direct reinforcement. Fills the unwritten half of B7's heading; touches no existing range.*

---

## Chapter 14 — The 40–70bb Bridge Band

*★ v5. B4 gives tables for 100–150bb, B5 for 25–30bb; the space between was left to B4.7's one-line character notes. Main Day 2+ and the mid-phase of all the High Rollers are played mostly at 40–70bb — the band you'll have the most hands in. Question Bank 13 and 34 ask about this band; this chapter expands B4.7's lines into a table.*

### 14.0 The band's character

The completion of B0 c.7 ("stack mode before every hand") between the two extremes. In this band:

- 3-bets increasingly approach COMMIT (not at 60bb; full commit at 40bb).
- The flat window narrows but isn't zero as in B5 — a narrow flat survives IP and in the BB.
- Offsuit broadways and dominate-able hands drop relative to B4; playability comes first.

### 14.1 3-bet framework — derive DIRECTIONALLY from B4

*We are not writing a new combo list; we give the direction in which B4's CALIBRATED ranges tighten in this band. Exact thresholds in drills (calibrate).*

| Band | VALUE 3-bet | BLUFF 3-bet | Continue vs jam | Flat exception |
|---|---|---|---|---|
| **60–70bb** | B4 VALUE ≈ same | B4.7 direction: more polarized — narrow bluffs to the best blocker+playability hands *(calibrate)* | Value that can continue vs a 4-bet | IP: narrow; BB: narrow |
| **40–60bb** | B4 VALUE − weak ends | Nearly cut — live, nobody folds | APPROACHES commit; full commit below 40bb (B4.7) | Almost none |

**Rule:** Below ≈60bb the "3-bet then fold" structure starts to weaken and ends at 40bb — exact threshold in drills *(calibrate)*. A hand you 3-bet must be able to continue vs a 4-bet/jam — if it can't, flat (IP/BB) or fold.

### 14.2 60bb → 40bb transition markers

As you drop through the band, the first to leave the table: 3-bet bluffs with suited connectors, speculative flats with small pairs, offsuit broadway cold-calls. B0 c.7's warning (repeated in B4.7) becomes concrete here: **"Playing a 130bb range at 45bb is the most expensive habit."**

*Root-error link: completes the mode-before-range spine (B0 c.7) between the two extreme bands; wrong-mode ranges are the number-one source of bloated-pot production.*

---

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

## Chapter 16 — The Mental Spine: Bustout/Re-entry, Tilt, Autopsy, Series Plan

*★ v5. The book was 100% technical until now. But August 21–29 is an endurance race (SHR + PLO + 8-day Main + HR) with event overlaps. However good the technical doctrine, there wasn't a single line managing the decision-state (fatigue, tilt, re-entry pressure) that must execute it. Short CARD format — not a textbook.*

### 16.1 Bustout + re-entry decision card

The series' most expensive single decision isn't a hand: it's the re-entry decision made in the 5 minutes after busting. Auto re-entry while tilted = the bankroll-scale version of the root error (treating a single bullet as value in a bloated "series investment").

**Mandatory wait:** Bustout → 20 min *(default)* away from the table → fill in the below → then decide.

| Question | Yes | No |
|---|---|---|
| Was the elimination a bad DECISION? (not a bad outcome) | Ask 16.3's TWO QUESTIONS now — full autopsy at day's end | Variance — you may continue |
| Which Day 1 flight / event does the next bullet eat? | Check the calendar (16.4) | Free |
| Is total series exposure within the pre-set limit? | Continue | STOP |
| Is my physical state (sleep/hour) green? | Continue | STOP — enter tomorrow |

**Max bullets per event** *(calibrated 2026-08-10)*: SHR: **1** · PLO: **2** · Main: **2** · HR: **2** — total max exposure ~€181K (single-bullet base €140.6K). No re-entry at the SHR €100K: a second bullet there is +€100K on its own, outside discipline.

### 16.2 Tilt card

The root error is rarely committed in cold blood; it typically happens in the hands following a trigger *(calibrate — mark the duration from the B7 cases)*. While tilted, memorized sentences don't get read — first the tilt must be NOTICED.

| Trigger *(all 3 apply to Emre — 2026-08-10)* | Tell | Immediate move |
|---|---|---|
| Bad beat / big pot loss | Chasing with worse hands | Deep breath |
| Long card-dead → action hunger | Faster play / snap-action | 1-orbit VPIP lock |
| Bluff shown / ego | Reaching for the phone | Drink water / stand up |

*Emre tells (2026-08-10) — cross-cutting, no single dominant trigger: **faster / snap play**, **reaching for the phone**, **chasing with worse hands**. Any ONE of the three appearing is the alarm — don't stop to diagnose which trigger fired; notice the tell, then run that row's move. The three map above by best fit, but any tell can come from any trigger.*

The trigger rows are back-filled with references from your three elimination cases (B7) — no generic tilt list is written.

**B0 c.15:** *A decision made on tilt comes not from a range but from a wound — label the wound first.*

### 16.3 Autopsy rule

| Step | Rule |
|---|---|
| **When** | NOT the moment the hand ends — after the day ends. At the table, only note the hand. *Exception: bustout+re-entry — only the two questions immediately (16.1), the written autopsy still at day's end* |
| **The two questions** | (1) With what I knew at decision time, what was the book's rule? (2) Did I follow the rule? |
| **Followed + lost** | Into the case log as "right decision, bad outcome" — **THE RANGE DOES NOT CHANGE** |

This filter PROTECTS calibration: at the SHR, correct jams will be lost often; without the filter you'd wreck B4-B5's careful tables mid-tournament. Warning: don't let the "it was correct, it was variance" label become a self-absolution door — valid only if you FOLLOWED the rule. Example: the TT jam in B5.5 (Question 23).

### 16.4 Series plan and overlap pre-decisions

| Date | Event / Day | Estimated finish | Sleep target | Next-day risk |
|---|---|---|---|---|
| Aug 21 | SHR Day 1 | *(fill in)* | *(fill in)* | Main 1A on the 22nd |
| Aug 22 | SHR D2 · PLO HR D1 · Main 1A | triple overlap | — | If SHR is alive, Main 1A burns |
| Aug 23 | SHR Final · PLO D2 · Main 1B | overlap | — | Main entry CLOSES today — last bullet |
| Aug 24–26 | Main grind | *(fill in)* | *(fill in)* | — |
| Aug 27–29 | HR €10.3K · Main D5–Final | overlap | — | If deep in the Main, don't enter HR fresh |

**Overlap pre-decisions** *(NO fixed priority — decide by current stack/ICM; rule below)*:

**Decision rule:** Of the two overlapping events, stay in the ONE where your stack is deeper and you're closer to the payout/ICM advantage; sacrifice the other. The determinant isn't buy-in size but your CURRENT expectation of winning (stack depth × field × payout proximity) — the event-scale version of the mode-first spine (c.7).

- If I reach SHR Day 2 vs a Main flight → if my SHR stack is above average, stay in the SHR and leave the Main to the last bullet (1B, Aug 23); if the SHR is short, switch to Main 1A.
- If the HR starts while I'm deep in the Main → if I'm above average and near the money in the Main, stay in the Main and skip the HR; if the Main is short, enter the HR fresh.

**Break routine:** 3 items every break — (1) walk, (2) eat/water, (3) look at the Quick Reference. NO social media on the phone.

*Root-error link: fatigue and tilt are the frequency MULTIPLIER of the root error — the day-plan-scale parallel of B4's "reduce the frequency preflop" logic (prevent the error on the calendar, not inside the hand).*

---

## Quick Reference

*The page to check on your phone during breaks.*

### Decision order

0. Is ICM on in this event? (Chapter 12) — if on, tighten jam/call ranges
1. What's my stack mode? (Chapter 3) — below 30bb go to Chapter 5 (**Chapter 15 in PLO** — no jam)
2. What's my position and villain's position? (Chapter 4; if 40–70bb, Chapter 14)
3. How many ways is the pot? If 3+, go to the Multiway card (Chapter 13)
4. Is this hand a 3-bet, a flat, or a fold?
5. If I see a flop, am I comfortable making one pair? (Count the SPR — Chapter 11)
6. Am I staying OOP?

### Sizes

| Move | Size |
|---|---|
| **IP 3-bet** | 3–3.5× |
| **OOP 3-bet** | 4× |
| **Per coldcaller** | +1× |
| **Squeeze** | 4.5–5× |
| **4-bet IP / OOP** | 2.2× / 2.5× |

### 25–30bb card

| Situation | What you do |
|---|---|
| **Open size** | 2–2.2× |
| **3-bet** | None — JAM. TT+/AQs+/AKo vs early pos.; 88+/ATs+/AQo+/KQs vs CO-BTN |
| **Jam at the chip leader** | 77+, A9s+, AJo+, KQs (widened) |
| **Call vs jam** | 99+, AJs+, AQo+ |
| **Flat** | NONE — from no position |
| **Auto fold** | All suited connectors, suited gappers, KJo/QJo/JTo |

### Postflop sizes (Chapter 11)

| Situation | Direction |
|---|---|
| **Turn second barrel** | Do I have a river plan? Leave a check-fold pot for a bad river *(size calibrate)* |
| **River value vs rec** | He pays → BET even if thin; thin hand small, strong hand size up (11.3) |
| **River value vs reg** | Thin / check-call |
| **Villain overbet** | Read polarized: one pair → fold direction |
| **Overbet (mine)** | ONLY nuts + deep + villain capped — one pair NEVER |

### ICM / Final Table card (Chapter 12)

| Situation | What you do |
|---|---|
| **Is the event's ICM on** | SHR/HR early · Main late (12.0) |
| **Near the money** | JAM ≈ stays, CALL tightens — fold hard when covered |
| **My FT role** | Short: ladder · Middle: most fragile, patience · Covering: crush |
| **Bubble hunting** | Locked middle stack = most profitable target |
| **<15bb + everyone locked** | WIDEN, don't tighten |

### Multiway card (Chapter 13)

| Situation | 3+ way |
|---|---|
| **C-bet** | Frequency collapses — strong value + nut-draws |
| **One pair** | One class down → approaches bluff-catcher |
| **Bluff** | 3-way: nut-blocker only · 4+: none |
| **Non-nut draw** | Reverts to check / dies |

### Tilt card (Chapter 16)

| Trigger | Immediate move |
|---|---|
| Bad beat / big loss | Deep breath |
| Card-dead → action hunger | 1-orbit VPIP lock |
| Bluff shown / ego | Drink water / stand up |

### Red flags — stop and think

- I'm making a big decision with one pair in a bloated pot → classify it as a bluff-catcher.
- I'm considering a river jam → which hand weaker than mine pays? No answer, no jam.
- Villain is all-in and I'm counting chops → chops don't jam.
- I'm at 45bb but flatting a small pair → mode error.
- I'm 3-bet bluffing from OOP → usually a mistake.
- I'm bloating a pot with bare AA in PLO → treat it as one pair.
- I'm at 28bb and entering a pot with a suited connector → Chapter 5, auto fold.
- I'm firing the second barrel on the turn with no river plan → Chapter 11, don't bloat the pot.
- I'm thinking HU-style c-bet/value in a 3+ way pot → Chapter 13, one class down.
- I'm calling a jam near the money with AJs+ → Chapter 12, calls tighten (covered?).
- I can't remember my last 2 decisions / it's 01:00+ and a marginal spot → fatigue, Chapter 16.
- I busted and I'm firing a re-entry within 5 minutes → Chapter 16, wait 20 min.

---

*Poker Pocket Book v5 — EPT Barcelona Edition · August 2026*

## Chapter 17 — SPECIAL MODULE: WSOP Online Main Event Day 2

> WSOP Online #28 — $5,000 MAIN EVENT, $25M GTD · Day 2 game plan and range guide. Muzun · 784,748 chips (56 BB) · Restart: 21 September 2026, 20:00. This is a tournament-specific module to study after EPT Barcelona (1–20 September); it adapts the general doctrine (Chapters 0–16) to this exact structure.

### 17.1 Tournament profile and reality

This is a **freezeout** with **no re-entry**. Day 1 flights run daily through 21 September; Day 2 starts with an estimated 600–900 players. **The money is not locked yet** — you sit down at the restart as if it were a tournament before the bubble.

| Item | Value | Item | Value |
| --- | --- | --- | --- |
| Stack | 784,748 (56 BB) | Blinds | 7,000/14,000 (1,750) |
| Format | 8-handed, freezeout | Level length | 25 min (fast!) |
| Prize pool | $25,000,000+ | First place | ~$5,000,000 |
| Deal | Banned (incl. FT) | FT | 9 players, next day |

**Critical structural fact:** at 25-minute levels blinds rise ~2.4× per hour. 56 BB drops to 25 BB after three hours of passive play. Passivity here is not "safe" — it is **slow elimination**.

### 17.2 Core philosophy: not tight, selectively aggressive

**We will not sit and wait for premiums.** The right profile rests on a dual split:

- **Active in small pots:** positional opens, blind steals, c-bet pressure, 3-bet pressure on short/medium stacks. This is the main chip source — pots won without going to showdown.
- **Disciplined in big pots:** the whole stack goes in only with a clear plan + a strong hand combo. Never risk your stack with one pair (AA included) in a bloated pot — the root-error rule applies here too.

In short: **wide in hand count, narrow in stack risk.**

### 17.3 Opening ranges (8-handed, ~50 BB, 2.1–2.3x open)

Online opponents defend blinds more accurately, so early position is a touch tighter and late position is standard. With antes, stealing is still very profitable.

| Position | Range (~%) | Hands |
| --- | --- | --- |
| UTG / UTG+1 | 13–15% | 77+, ATs+, KJs+, QJs, JTs, T9s, AJo+, KQo |
| LJ (MP) | 17% | 66+, A9s+, A5s, KTs+, QTs+, J9s+, T9s, 98s, ATo+, KJo+ |
| HJ | 20% | 55+, A8s+, A4s–A5s, K9s+, Q9s+, J9s+, T8s+, 98s, 87s, ATo+, KJo+, QJo |
| CO | 26% | 44+, A2s+, K8s+, Q9s+, J8s+, T8s+, 97s+, 87s, 76s, A9o+, KTo+, QTo+, JTo |
| BTN | 40–44% | 22+, all suited aces, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o |
| SB | 35% (raise-only) | Slightly tighter than BTN; no limp, open 3x |

- **Table adjust:** if BB is a tight player (fold 60%+), widen BTN/CO by 10%. If a 3-bettor reg is on your left, tighten CO, keep BTN.
- **If the stack drops:** below 35 BB this table no longer applies — go to the stack modes in 17.8.

### 17.4 3-Bet ranges

**Sizing:** in position (IP) ~3x the open, out of position (OOP) ~4x. At 56 BB deep a 3-bet pot already sees half the stack — so your 3-bet range is polarized, but the bluff side wants "good blocker + playability."

| Scenario | Value | Bluff / Semi-bluff |
| --- | --- | --- |
| vs EP open (IP) | QQ+, AK | A5s–A4s, KQs (low freq) |
| vs MP/HJ open (IP) | TT+, AQs+, AKo | A5s–A3s, KJs, QJs, 76s–65s (mixed) |
| vs CO/BTN open | 99+, AJs+, KQs, AQo+ | A5s–A2s, K9s–KTs, QTs, J9s, T9s, 87s |
| SB vs BTN open | TT+, AQ+ value; wide bluff | A2s–A5s, K9s+, Q9s+, suited connectors — no flat from SB, 3-bet or fold |
| BB vs BTN/SB | 99+, AQ+ | A5s-type + KTs/QTs/JTs; defend (call) with the rest |

- **Whom to 3-bet:** 30–50 BB medium stacks (they feel bubble pressure most) and reg opening too much.
- **Whom NOT to BLUFF 3-bet:** big stacks that cover you (as the bubble nears) and sub-20 BB — their only reply is a jam, and your bluff 3-bet burns. **A value 3-bet is free** (QQ+/AK 3-bet); continue vs the cover's jam only with KK+, and 3-bet-fold QQ (see 17.10 ICM thresholds). What's forbidden is the bluff 3-bet, not value.

### 17.5 3-Bet sizes (IP and OOP)

Playing OOP is a disadvantage, so the OOP 3-bet is bigger (raises the call price, lowers SPR). IP, position already creates pressure, so a smaller size is enough.

| Scenario | Size | Example (vs 2.2x open) |
| --- | --- | --- |
| IP 3-bet (BTN vs CO) | 3.0–3.3x the open | 2.2 BB → 7 BB |
| IP 3-bet (vs EP) | ~3x the open | 2.3 BB → 7 BB |
| OOP 3-bet (SB vs BTN) | 3.8–4.2x | 2.2 BB → 8.5–9 BB |
| OOP 3-bet (BB vs BTN/SB) | 3.6–4x | 2.2 BB → 8–8.5 BB |
| Squeeze IP (open + caller) | 4x + 1 open per caller | 2.2 + 1 call → ~11 BB |
| Squeeze OOP | 5x + 1 open per caller | 2.2 + 1 call → ~13 BB |
| 20–25 BB | 3-bet ≈ jam / small-commit (~2.5x, no fold) | finish the plan preflop |

**Don't size by hand:** same size with AA and with A5s. A sizing tell is more expensive online than live.

### 17.6 4-Bet and play vs a 3-bet

**Sizing:** 4-bet = ~2.2–2.4x the 3-bet (IP), OOP ~2.5x. At 56 BB the 4-bet is ~20–22 BB = the commit threshold; a stack that continues past the 4-bet can't fold.

| Scenario | Action | Hands |
| --- | --- | --- |
| Faced 3-bet on your open (IP) | 4-bet value | KK+, (AK jam/4-bet mixed); QQ depends on villain |
| Faced 3-bet on your open (IP) | 4-bet bluff | A5s–A4s (ace blocker), low freq, vs aggressive 3-bettors |
| Faced 3-bet on your open (IP) | Call | QQ–99, AQs, AJs, KQs, JJ–TT, suited broadway |
| Faced 3-bet on your open (IP) | Fold | A9o-type offsuit edges, low suited gappers |
| Faced 3-bet (OOP) | Tighter continue | KK+ 4-bet; QQ/AK mixed; JJ–TT, AQs call; rest fold |
| Facing a 4-bet | Jam / call | KK+ always; QQ/AK per villain profile (fold QQ vs nit, jam vs aggressor) |

**Golden rule:** every hand you 4-bet at 56 BB must have a pre-decided plan against a 5-bet jam. There is no "4-bet and see" mode.

### 17.7 Fold discipline

- **Preflop:** vs a 3-bet, offsuit broadways (KQo, AJo) to the muck. If the 3-bet came from a stack that covers you, you're one tier tighter.
- **Flop:** in a multiway pot don't continue with one pair vs a raise. If your c-bet got check-raised and you hold less than overpair + backdoor on a wet board, folding is on the table.
- **Turn:** a big turn barrel + a board that completes a four-straight/flush ends one pair. "The pot got big, I'm committed" is the root error itself — pot size is not a commit reason.
- **River:** overpair + bad river → check-call a small bet, check-fold a big bet. Before jamming, the only question: "Which hand worse than mine pays?" If the answer is empty, the jam has no value — check.
- **ICM folds:** on the bubble and at big ladder jumps, even a chip-EV marginally profitable call is a fold. A flip vs an equal stack = last resort, never a plan.

### 17.8 Stack modes

| Mode | Stack | Play |
| --- | --- | --- |
| Mode A — Standard | 45 BB+ | Full ranges; postflop room; suited connectors + small pairs at full value |
| Mode B — Squeezed middle | 30–45 BB | Opens hold, flat calls narrow (set-mine math breaks); commit threshold near, bluff 3-bet down, value up |
| Mode C — Pressure | 20–30 BB | Open 15–20%, 2.1x. 3-bet is mostly jam/small-commit. A5s–A2s becomes jam-3bet ammo |
| Mode D — Jam/Fold | 12–20 BB | Some opens are direct jams (esp. SB/BTN). If you opened, jam or fold vs a 3-bet. Near Nash; ICM tightens jams slightly |
| Mode E — Short | <12 BB | Pure jam/fold; first-in edge; isolate-jam over limps |

### 17.9 Phase plan and ICM

- **Phase 1 (bubble far):** Mode A. Keep the stack above 50 BB, steal from the table's passives, no needless wars with big stacks.
- **Phase 2 (bubble nearing):** your most profitable phase. 15–25 BB stacks freeze up: 3-bet their opens, open into their blinds, float their c-bets. The only brake: stacks that cover you (one tier tighter). **On the bubble vs a covering stack, even QQ may not be a 4-bet-call.**
- **Phase 3 (money hits):** stay tight for 3–4 hands (shorts kamikaze-jam, meet them with premiums), then return to normal.
- **Phase 4 (deep ITM / FT):** ladder jumps are huge: $227K → $346K → $631K → $1M+. ICM overrides chip-EV. **Crush the shorts, dodge the equals, premiums only vs the bigs.** FT is 9-handed, deal banned. Going to the FT short beats not going at all; at the last 2 tables survival is the priority.

### 17.10 Root-error guardrails

- **One pair in a bloated pot = alarm.** AA included. If the pot passed 40 BB and you still hold one pair, the default is pot control + bluff-catcher play, not a stack race.
- **AA river jam:** if no worse hand pays, the jam has no value — check.
- **The check-raise all-in urge** (the KTo lesson): the correct line is check-call then re-evaluate.
- **Chop mechanics:** re-read the board on the river (the A4s case).
- **Tilt protocol:** after a bad hand, 2 hands auto-fold (premiums excepted).

### 17.11 Coach notes — blind spots in the plan

- **BTN 40% open is a live assumption.** Online vs a reg, tighten to 33–35%, muck the offsuit trash (Q9o, J9o); vs weak players keep 40%+.
- **Medium-stack 3-bet pressure is a thin exploit.** Limit bluff 3-bets to blocker hands (A5s, K9s). The real danger: your 3-bet gets called and you enter a bloated pot with an overpair on the flop.
- **"Escaping" cover is not a strategy.** Narrow but resolute defense; every hand vs a covering stack has a street-by-street plan written in advance.
- **Transition errors:** 56→35 flat-call habit (below 40 BB go 3-bet-or-fold); 35→20 the commit threshold slides forward (commit is decided preflop with an SPR plan); ~20 BB panic-jam/freeze (memorize the Mode C/D thresholds — at 20 BB A5s is resteal-jam ammo, ATo still min-raises from the BTN).
- **ICM thresholds:** QQ vs a covering stack's 4-bet jam has ~40% equity vs {KK+, AK} + a bubble ICM premium of 6–10% → required ~48–50% → **FOLD**; vs an aggressive reg (TT+, AQ+) ~54% → call. AK: fold to a covering stack's tight jam, always call a ≤20 BB jam. Practical: on the bubble, for-your-whole-stack vs a cover the range is **KK+**. When you cover, it flips (open into 15–25 BB blinds up to 60%).
- **Online substitutes:** min-3-bet = value-heavy; river overbet = polarized (bluff-catcher math); 1/3 flop = a range bet, no info. Timing is a weak signal. Note system: a 5-second tag every showdown. 14-hour protocol: stand up every 55-min break; cut caffeine after hour 8.

### 17.12 Socratic trap set (S-T1–S-T5)

Each scenario has a "feeling" pulling you into the mistake. Write a street-by-street plan; autopsy after.

1. **S-T1.** 52 BB, you open AA from CO, BTN reg (48 BB) 3-bets, you 4-bet, call. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. C-bet 1/3, villain RAISES. Feeling: "AA + SPR 1.3 = already committed." Action?
2. **S-T2.** 34 BB, KK in the BB. HJ (38 BB, tight-passive) opens, you 3-bet, call. Flop Q-J-T rainbow, you bet, call. Turn 9♦. Feeling: "take back the initiative with a check-raise all-in." What do you do, and why?
3. **S-T3.** 25 to the bubble, 41 BB. Chip leader (140 BB) opens the BTN for the 3rd time in a row. QQ in the BB. 3-bet or call? A jam comes over your 3-bet — is there a call?
4. **S-T4.** Deep ITM, 3-bet pot, IP, TT. Board 8-6-2r, villain check-calls. Turn 8, checks. River A, villain POT DONKS. Feeling: "I had an overpair, the A is a scare card." Decision?
5. **S-T5.** 47 BB, BB vs BTN single-raised pot, you hold A9o, board A-9-4 two hearts. Check-raise, call. Turn 6♥ (flush completes). You bet, RAISE comes. "I have two pair, not one pair, I'm safe"... are you? Decision and reasoning.

### 17.13 Drill set — 10 questions (specific to this tournament)

When you say "prep me" during restart week, we'll work from this set. The answer key is kept separate; decide for yourself first.

1. **S1.** 56 BB, Phase 1. You open A9s from HJ, the 48 BB reg on the BTN 3-bets. Your action?
2. **S2.** You've dropped to 38 BB (Mode B). Should you open 66 from CO? If you do, what's your plan vs the BB's 3-bet?
3. **S3.** 40 to the bubble. A 130 BB chip leader sits in the BB, you hold KQo on the BTN. Open?
4. **S4.** Phase 2, you have 60 BB. The 22 BB in the SB opens, you're in the BB with A5s. Most profitable line?
5. **S5.** 3-bet pot, OOP, you have QQ. Flop 9-7-5 two spades, villain pot-bets. Plan (flop/turn/river)?
6. **S6.** Money's in, first hand. A 9 BB UTG jam, you're HJ with ATo, 3 big stacks behind you. Call?
7. **S7.** Turn overpair KK, board T-8-4-J two-flush completed, villain 3/4-pot second barrel. What's your continue criterion?
8. **S8.** Mode D (17 BB), A7o from the BTN. Jam, open-fold, or fold? Why?
9. **S9.** Deep ITM, 3 tables left. An equal stack (45 BB) opens CO, you have AQo in the SB. Your 3-bet size and plan vs a 4-bet?
10. **S10.** River AA, pot bloated, board 2-4-5-9-6. Villain checks. Is there a bet? What size, targeting which hand?

### 17.14 Prep calendar

| Period | Focus | Note |
| --- | --- | --- |
| 17–29 August | EPT Barcelona | Don't think about this tournament; all focus on the live series |
| 1–10 September | 2 drills/week | ICM/bubble-weighted + stack-mode transitions |
| 11–18 September | 3 drills/week | Derivatives of this set; mistakes return 1–2 days later in a different form |
| 19–20 September | Light review | Range tables + guardrails; no new concepts |
| 21 September 20:00 | RESTART | Table draw analysis when posted; sit rested — it can run 14+ hours |
`;function S(t){return t.replace(/\*\*(.+?)\*\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\*(.+?)\*/g,"$1").trim()}function zt(t){const a=s=>s.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(i=>S(i)),n=a(t[0]),o=t.slice(2).map(a);return{headers:n,rows:o}}function D(t){const a=Ft.split(`
`),n=[];let o=!1;for(const s of a){if(s.startsWith("## ")&&!s.startsWith("### ")){if(s.slice(3).trim().startsWith(t)){o=!0;continue}if(o)break}o&&n.push(s)}return n.join(`
`)}function un(){const t=D("Chapter 0"),a=[];let n=null;for(const o of t.split(`
`)){const s=o.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/);s?(n&&a.push(n),n={n:Number(s[1]),rule:S(s[2]),context:""}):n&&o.trim()&&!o.trim().startsWith("#")&&!o.trim().startsWith("*")&&(n.context=(n.context+" "+S(o.trim())).trim())}return n&&a.push(n),a.filter(o=>o.n>=1&&o.n<=15)}function Ze(t){const a=t.split(`
`),n=[];let o=null;for(const s of a)s.startsWith("### ")?(o&&n.push({title:o.title,body:o.body.join(`
`)}),o={title:s.slice(4).trim(),body:[]}):o&&o.body.push(s);return o&&n.push({title:o.title,body:o.body.join(`
`)}),n}function B(t,a){const n=Ze(t).find(o=>o.title.startsWith(a));return n?n.body:""}function Q(t){const a=t.split(`
`),n=[];for(const o of a)if(o.trim().startsWith("|"))n.push(o);else if(n.length)break;return n.length>=2?zt(n):null}function he(t,a){const n=a?/^\s*\d+\.\s+(.*)$/:/^\s*[-*]\s+(.*)$/;return t.split(`
`).map(o=>o.match(n)).filter(o=>!!o).map(o=>S(o[1]))}function Ht(){const t=D("Chapter 4"),n=B(t,"4.3").split(`
`),o=[];let s=null;const i=()=>{var c,p,u,y,b;if(!s)return;const r=s.buf.join(`
`);let l=Q(r),h=[];if(l)h=s.buf.filter(m=>/^\*\*[^*]*flat/i.test(m.trim())).map(m=>S(m));else{const m=(c=r.match(/VALUE:\*\*\s*(.+)/i))==null?void 0:c[1],f=(p=r.match(/BLUFF:\*\*\s*(.+)/i))==null?void 0:p[1];if(m||f){const T=((y=(u=/\(\s*(BB|SB|BTN|CO)\s+only\s*\)/i.exec(s.label))==null?void 0:u[1])==null?void 0:y.toUpperCase())||"BB";l={headers:["Position","VALUE","BLUFF"],rows:[[T,S(m||""),S(f||"")]]};const N=(b=r.match(/Flat:\*\*\s*(.+)/i))==null?void 0:b[1];N&&(h=[`${T} flat: ${S(N)}`])}}l&&o.push({opener:Yt(s.label),label:s.label,table:l,flats:h}),s=null};for(const r of n){const l=r.trim().match(/^\*\*(vs\s.+?open.*?)\*\*$/i);l?(i(),s={label:l[1],buf:[]}):s&&s.buf.push(r)}return i(),o}function Yt(t){return t.replace(/^vs\s+/i,"").split(/\s+open/i)[0].trim().replace(/\s*\/\s*/g,"/")}function pn(){const t=D("Quick Reference");return{decisionOrder:he(B(t,"Decision order"),!0),sizes:Q(B(t,"Sizes")),band2530:Q(B(t,"25")),postflop:Q(B(t,"Postflop")),icm:Q(B(t,"ICM")),multiway:Q(B(t,"Multiway")),tilt:Q(B(t,"Tilt")),redFlags:he(B(t,"Red flags"),!1)}}function bn(){const t=D("Chapter 10");return Ze(t).map(a=>({title:a.title,questions:he(a.body,!0)})).filter(a=>a.questions.length>0)}function P(t,a){const n=D(t),o=a?B(n,a):n;return Q(o)}function fn(){const t=P("Chapter 5","5.1");return t?t.rows.map(a=>({position:a[0],range:a[1]})):[]}function mn(){const t=P("Chapter 5","5.2");return t?t.rows.map(a=>({vs:a[0],range:a[1]})):[]}function yn(){const a=B(D("Chapter 5"),"5.3").match(/all-in:\s*([^.]+)\./);return a?S(a[1]):""}function gn(){const t=P("Chapter 4","4.5");if(!t)return null;const a=c=>{const p=t.rows.find(u=>u[0].toLowerCase().startsWith(c));return p?p[1]:""},n=c=>c.split(/[—;:]/)[0].trim(),o=n(a("4-bet value")),s=n(a("4-bet mixed")),i=n(a("4-bet bluff")),r=n(a("flat")),l=a("fold"),h=s?s.split(",").map(c=>`${c.trim()} (mixed)`).join(", "):"";return{value:h?`${o}, ${h}`:o,blof:i,flat:r,foldNote:l}}function wn(){const t=B(D("Chapter 4"),"4.6"),a=t.match(/VALUE:\*\*\s*(.+)/i),n=t.match(/BLUFF:\*\*\s*(.+)/i);return!a&&!n?null:{value:a?S(a[1]):"",blof:n?S(n[1]):""}}function vn(){return P("Chapter 4","4.7")}function xn(){return P("Chapter 14","14.1")}function kn(){const a=B(D("Chapter 14"),"14.1").match(/\*\*Rule:\*\*\s*(.+)/);return a?S(a[1]):""}function Tn(){return P("Chapter 11","11.1")}function jn(){return P("Chapter 6","6.2")}function An(){return P("Chapter 11","11.2")}function Bn(){return P("Chapter 11","11.3")}function Nn(){return he(B(D("Chapter 11"),"11.4"),!1)}function Cn(){return P("Chapter 13","13.1")}function Sn(){return P("Chapter 15","15.2")}const $t=[[/\bcheck-?raise\b/gi,"check raise"],[/\bcheck-?call\b/gi,"check call"],[/\bcheck-?fold\b/gi,"check fold"],[/\bstack-?off\b/gi,"stack off"],[/\bsemi-?bluff\b/gi,"semi bluff"],[/\bbluff-?catcher\b/gi,"bluff catcher"],[/\bcoldcall\b/gi,"cold call"],[/\bcbet\b/gi,"c bet"],[/\b5-?bet\b/gi,"five bet"],[/\b4-?bet\b/gi,"four bet"],[/\b3-?bet\b/gi,"three bet"],[/(\d)\s?bb\b/gi,"$1 big blind"],[/\bOOP\b/g,"O O P"],[/\bIP\b/g,"I P"],[/\bICM\b/g,"I C M"],[/\bPLO\b/g,"P L O"],[/\bNLH\b/g,"N L H"],[/\bBB\b/g,"big blind"],[/\bSB\b/g,"small blind"],[/\bBTN\b/g,"button"],[/\bUTG\b/g,"U T G"],[/\bbluff\b/gi,"bluff"],[/\bvalue\b/gi,"value"],[/\bboard\b/gi,"board"],[/\bflat\b/gi,"flat"],[/\bflop\b/gi,"flop"],[/\briver\b/gi,"river"],[/\bturn\b/gi,"turn"],[/\bcall\b/gi,"call"],[/\braise\b/gi,"raise"],[/\bsqueeze\b/gi,"squeeze"],[/\bgutshot\b/gi,"gutshot"],[/\brakeback\b/gi,"rakeback"],[/\bstack\b/gi,"stack"],[/\bbubble\b/gi,"bubble"],[/\bnut\b/gi,"nut"],[/\bkicker\b/gi,"kicker"],[/\brundown\b/gi,"rundown"],[/\bdangler\b/gi,"dangler"],[/\bwrap\b/gi,"wrap"],[/\bstation\b/gi,"station"],[/\bshowdown\b/gi,"showdown"],[/\bequity\b/gi,"equity"]];function Ut(t){let a=t;for(const[n,o]of $t)a=a.replace(n,o);return a}class _t{constructor(){H(this,"supported",typeof window<"u"&&"speechSynthesis"in window);H(this,"voice",null);this.supported&&(this.pickVoice(),window.speechSynthesis.onvoiceschanged=()=>this.pickVoice())}pickVoice(){const a=window.speechSynthesis.getVoices();this.voice=a.find(n=>n.lang==="en-US")||a.find(n=>n.lang.startsWith("en"))||null}speak(a,n=1){return this.supported?(window.speechSynthesis.cancel(),new Promise(o=>{const s=new SpeechSynthesisUtterance(Ut(a));s.lang="en-US",this.voice&&(s.voice=this.voice),s.rate=n,s.pitch=1,s.onend=()=>o(),s.onerror=()=>o(),window.speechSynthesis.speak(s)})):Promise.resolve()}stop(){this.supported&&window.speechSynthesis.cancel()}}function De(){return localStorage.getItem("ept:tts:mode")||"hd"}function On(t){localStorage.setItem("ept:tts:mode",t)}function Vt(t){let a=5381;for(let n=0;n<t.length;n++)a=a*33^t.charCodeAt(n);return"a"+(a>>>0).toString(36)}function et(){return new Promise((t,a)=>{const n=indexedDB.open("ept-tts",1);n.onupgradeneeded=()=>n.result.createObjectStore("audio"),n.onsuccess=()=>t(n.result),n.onerror=()=>a(n.error)})}async function Gt(t){try{const a=await et();return await new Promise(n=>{const o=a.transaction("audio").objectStore("audio").get(t);o.onsuccess=()=>n(o.result||null),o.onerror=()=>n(null)})}catch{return null}}async function Xt(t,a){try{(await et()).transaction("audio","readwrite").objectStore("audio").put(a,t)}catch{}}async function Zt(t){try{const n=await fetch(`${typeof import.meta<"u"&&"/ept-trainer-en/"||"/"}tts/${t}.mp3`);if(!n.ok)return null;const o=await n.blob();return o.size<256||o.type&&!/audio|mpeg|octet/.test(o.type)?null:o}catch{return null}}async function tt(t){const a=Vt("v1|"+t);let n=await Gt(a);if(n)return n;if(n=await Zt(a),!n)try{const o=await fetch("/api/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:t})});o.ok&&(n=await o.blob())}catch{}return n&&Xt(a,n),n}class ea{constructor(){H(this,"web",new _t);H(this,"audio",null)}get supported(){return this.web.supported||De()==="hd"}stopAudio(){this.audio&&(this.audio.pause(),this.audio.src="",this.audio=null)}async speak(a,n=1){if(De()!=="hd")return this.web.speak(a,n);const o=await tt(a);if(!o)return this.web.speak(a,n);await new Promise(s=>{this.stopAudio();const i=new Audio(URL.createObjectURL(o));i.playbackRate=n,i.onended=()=>s(),i.onerror=()=>s(),this.audio=i,i.play().catch(()=>s())})}stop(){this.stopAudio(),this.web.stop()}}let ye=null;function ta(){return ye||(ye=new ea),ye}function aa(t){return(t.match(/[^.!?]+[.!?]*/g)||[t]).map(a=>a.trim()).filter(Boolean)}async function na(t,a){let n=0,o=0;const s=t.length;for(let i=0;i<t.length;i++)await tt(t[i])?n++:o++,a==null||a(i+1,s);return{ok:n,fail:o}}function oa({table:t}){return e.jsx("div",{className:"overflow-x-auto rounded-xl border border-surface-3",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-surface-2 text-left text-neutral-300",children:t.headers.map((a,n)=>e.jsx("th",{className:"px-3 py-2 font-medium",children:a},n))})}),e.jsx("tbody",{children:t.rows.map((a,n)=>e.jsx("tr",{className:"border-t border-surface-3 align-top",children:a.map((o,s)=>e.jsx("td",{className:s===0?"px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap":"px-3 py-2 text-neutral-300",children:o},s))},n))})]})})}const E=["A","K","Q","J","T","9","8","7","6","5","4","3","2"],C=Object.fromEntries(E.map((t,a)=>[t,a]));function sa(t,a){const n=E[Math.min(t,a)],o=E[Math.max(t,a)];return t===a?`${n}${o}`:t<a?`${n}${o}s`:`${n}${o}o`}function ia(t,a){return C[t]<=C[a]?[t,a]:[a,t]}function ge(t){const a=t.trim().replace(/[–—]/g,"-").replace(/\s+/g,"");if(!a)return[];const n="[AKQJT98765432]";let o=a.match(new RegExp(`^(${n})\\1\\+$`));if(o){const s=[];for(let i=0;i<=C[o[1]];i++)s.push(`${E[i]}${E[i]}`);return s}if(o=a.match(new RegExp(`^(${n})\\1-(${n})\\2$`)),o){const[s,i]=[C[o[1]],C[o[2]]],r=[];for(let l=Math.min(s,i);l<=Math.max(s,i);l++)r.push(`${E[l]}${E[l]}`);return r}if(o=a.match(new RegExp(`^(${n})\\1$`)),o)return[`${o[1]}${o[1]}`];if(o=a.match(new RegExp(`^(${n})(${n})(s|o)\\+$`)),o){const[s,i,r]=[o[1],o[2],o[3]];if(C[s]>=C[i])return null;const l=[];for(let h=C[s]+1;h<=C[i];h++)l.push(`${s}${E[h]}${r}`);return l}if(o=a.match(new RegExp(`^(${n})(${n})(s|o)-(${n})(${n})(s|o)$`)),o){const[s,i,r,l,h,c]=[o[1],o[2],o[3],o[4],o[5],o[6]];if(s!==l||r!==c)return null;const p=[];for(let u=Math.min(C[i],C[h]);u<=Math.max(C[i],C[h]);u++)p.push(`${s}${E[u]}${r}`);return p}if(o=a.match(new RegExp(`^(${n})(${n})(s|o)$`)),o){const[s,i]=ia(o[1],o[2]);return[`${s}${i}${o[3]}`]}return null}function we(t,a){const n=new Set,o=[];if(!t)return{cells:n,notes:o};let s=t.trim();const i="[AKQJT98765432]";s=s.replace(new RegExp(`(${i}${i}[so]?)\\s*\\(\\s*mixed\\s*\\)`,"gi"),(r,l)=>{var h;return(h=ge(l))==null||h.forEach(c=>a==null?void 0:a.add(c))," "}),s=s.replace(new RegExp(`\\(\\s*(${i}${i}?[so]?)\\s*mixed\\s*\\)`,"gi"),(r,l)=>{var h;return(h=ge(l))==null||h.forEach(c=>a==null?void 0:a.add(c))," "}),s=s.replace(/\([^)]*\)/g," ");for(const r of s.split(",")){const l=r.trim().replace(/\.$/,"");if(!l||/^(none|yok|—|-)$/i.test(l))continue;const h=ge(l);h?h.forEach(c=>n.add(c)):(/[a-zçğıöşü]/i.test(l)&&l.length>3||l.length>1)&&o.push(l)}return{cells:n,notes:o}}const ra={value:"bg-emerald-500 text-black font-semibold",mix:"bg-emerald-500/35 text-emerald-50 ring-1 ring-inset ring-emerald-400/70",blof:"bg-accent text-black font-semibold",flat:"bg-sky-600 text-white",fold:"bg-surface-2 text-neutral-600"};function at({value:t,blof:a,flat:n,caption:o,compact:s,highlight:i,valueLabel:r,blofLabel:l}){const{catOf:h,notes:c}=d.useMemo(()=>{const b=new Set,m=we(t||"",b),f=we(a||""),T=we(n||""),N=[...m.notes,...f.notes,...T.notes];return{catOf:k=>m.cells.has(k)?"value":b.has(k)?"mix":f.cells.has(k)?"blof":T.cells.has(k)?"flat":"fold",notes:N}},[t,a,n]),p=[];for(let b=0;b<13;b++)for(let m=0;m<13;m++){const f=sa(b,m);p.push({code:f,label:E[Math.min(b,m)]+E[Math.max(b,m)],cat:h(f),pair:b===m})}const u=b=>p.some(m=>m.cat===b),y=s?"text-[7px]":"text-[9px] sm:text-[11px]";return e.jsxs("div",{children:[e.jsx("div",{className:"grid gap-[2px] rounded-lg bg-surface-3 p-[2px]",style:{gridTemplateColumns:"repeat(13, minmax(0, 1fr))"},children:p.map(b=>e.jsx("div",{title:b.code,className:"flex aspect-square items-center justify-center rounded-[3px] leading-none "+y+" "+ra[b.cat]+(i&&b.code===i?" ring-2 ring-white ring-offset-1 ring-offset-surface-3 z-10 scale-110":b.pair?" ring-1 ring-inset ring-white/25":""),children:b.label},b.code))}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-300",children:[u("value")&&e.jsx(ae,{cls:"bg-emerald-500",label:r||"Value 3-bet"}),u("mix")&&e.jsx(ae,{cls:"bg-emerald-500/35 ring-1 ring-inset ring-emerald-400/70",label:"Mixed"}),u("blof")&&e.jsx(ae,{cls:"bg-accent",label:l||"Bluff 3-bet"}),u("flat")&&e.jsx(ae,{cls:"bg-sky-600",label:"Flat (call)"}),!s&&e.jsx("span",{className:"text-neutral-500",children:"↗ suited · ↙ offsuit · diagonal = pairs"})]}),o&&e.jsx("p",{className:"mt-2 text-xs text-neutral-500",children:o}),c.length>0&&e.jsxs("p",{className:"mt-1 text-xs text-neutral-400",children:[e.jsx("span",{className:"text-neutral-500",children:"+ book note:"})," ",c.join(", ")]})]})}function ae({cls:t,label:a}){return e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-[3px] "+t}),a]})}const la={A:14,K:13,Q:12,J:11,T:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2},qe={s:"♠",h:"♥",d:"♦",c:"♣"};function ha(t){const a=t.trim().split(/[\s,]+/).map(c=>c.match(/^([AKQJT2-9])([shdc])$/i)).filter(Boolean).map(c=>({r:la[c[1].toUpperCase()],s:c[2].toLowerCase()}));if(a.length<3)return[];const n=[],o={};for(const c of a)o[c.s]=(o[c.s]||0)+1;const[s,i]=Object.entries(o).sort((c,p)=>p[1]-c[1])[0];i>=3?n.push({label:`three ${qe[s]} — flush board`,wet:!0}):i===2?n.push({label:`two ${qe[s]} — flush draw`,wet:!0}):n.push({label:"rainbow",wet:!1});const r={};for(const c of a)r[c.r]=(r[c.r]||0)+1;Object.values(r).some(c=>c>=2)&&n.push({label:"paired",wet:!1});const l=[...new Set(a.map(c=>c.r))].sort((c,p)=>c-p),h=l[l.length-1]-l[0];return h<=4?n.push({label:"connected — straighty",wet:!0}):h>=7&&n.push({label:"dry",wet:!1}),n}const Qe=new Set(["A","K","Q","J","T","9","8","7","6","5","4","3","2"]),We={s:{sym:"♠",color:"#141414"},h:{sym:"♥",color:"#e5484d"},d:{sym:"♦",color:"#2f6df6"},c:{sym:"♣",color:"#1f9d55"}},nt={sm:{w:34,r:12,big:18},md:{w:46,r:15,big:26},lg:{w:64,r:20,big:38}};function ke({rank:t,suit:a,size:n="md"}){const o=We[a]||We.s,s=nt[n],i=o.color;return e.jsxs("div",{className:"relative inline-flex shrink-0 flex-col items-center justify-center rounded-lg bg-white shadow-md",style:{width:s.w,height:Math.round(s.w*1.4)},children:[e.jsx("span",{className:"absolute left-1 top-0.5 font-bold leading-none",style:{fontSize:s.r,color:i},children:t}),e.jsx("span",{style:{fontSize:s.big,color:i,lineHeight:1},children:o.sym})]})}function ca({size:t="md"}){const a=nt[t];return e.jsx("div",{className:"inline-flex shrink-0 items-center justify-center rounded-lg border border-surface-3 bg-surface-2 text-neutral-500",style:{width:a.w,height:Math.round(a.w*1.4),fontSize:a.r},title:"not specified in the book",children:"?"})}function da(t){return t.length>=3&&t[2]==="s"?["s","s"]:t.length>=3&&t[2]==="o"?["s","h"]:["s","h"]}function ua({code:t,size:a="md"}){const n=t.trim(),[o,s]=[n[0],n[1]],[i,r]=da(n),l=n[2]==="s",h=n[2]==="o";return e.jsxs("span",{className:"inline-flex items-end gap-1.5",children:[e.jsxs("span",{className:"flex gap-1",children:[e.jsx(ke,{rank:o,suit:i,size:a}),e.jsx(ke,{rank:s,suit:r,size:a})]}),(l||h)&&e.jsx("span",{className:"mb-1 rounded px-1.5 py-0.5 text-[10px] font-semibold "+(l?"bg-emerald-500/20 text-emerald-300":"bg-neutral-500/20 text-neutral-300"),children:l?"suited":"offsuit"})]})}function F({spec:t,size:a="md",label:n,texture:o}){const s=t.trim().split(/[\s,]+/).filter(Boolean),i=o?ha(t):[];return e.jsxs("div",{children:[n&&e.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:n}),e.jsx("div",{className:"flex flex-wrap items-end gap-1.5",children:s.map((r,l)=>{if(r==="??"||r==="?")return e.jsx(ca,{size:a},l);if(r.length>=2&&Qe.has(r[0])&&Qe.has(r[1]))return e.jsx(ua,{code:r,size:a},l);const h=r.match(/^([AKQJT2-9])([shdc])$/i);return h?e.jsx(ke,{rank:h[1].toUpperCase(),suit:h[2].toLowerCase(),size:a},l):e.jsx("span",{className:"text-sm text-neutral-500",children:r},l)})}),i.length>0&&e.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1.5",children:i.map((r,l)=>e.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] "+(r.wet?"bg-accent-soft text-accent":"bg-surface-2 text-neutral-400"),children:r.label},l))})]})}function pa({data:t}){const[a,n]=d.useState(0),o=t.streets.slice(0,a+1).map(i=>i.add).filter(Boolean).join(" "),s=t.streets[a];return e.jsxs("div",{className:"card p-4",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-semibold text-neutral-100",children:"🎬 Case replay"}),e.jsxs("span",{className:"text-xs text-neutral-500",children:[a+1,"/",t.streets.length," · ",s.name]})]}),o?e.jsx(F,{spec:o,size:"md",label:"Board",texture:!0}):e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-600",children:"Board (preflop)"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-4",children:[e.jsx(F,{spec:t.hero,size:"sm",label:t.heroLabel??"You"}),t.villain&&e.jsx(F,{spec:t.villain,size:"sm",label:t.villainLabel??"Villain"})]}),e.jsx("p",{className:"mt-3 rounded-lg bg-surface-2 px-3 py-2 text-sm leading-relaxed text-neutral-200",children:s.note}),e.jsxs("div",{className:"mt-3 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>n(i=>Math.max(0,i-1)),disabled:a===0,className:"btn-ghost px-3 py-1.5 text-sm",children:"← Back"}),e.jsx("button",{onClick:()=>n(i=>Math.min(t.streets.length-1,i+1)),disabled:a===t.streets.length-1,className:"btn-accent px-3 py-1.5 text-sm",children:"Next street →"})]})]})}function ba({v:t}){switch(t.kind){case"hand":return e.jsx(F,{spec:t.cards,size:t.size||"lg",label:t.label});case"board":return e.jsx(F,{spec:t.cards,size:t.size||"md",label:t.label??"Board",texture:!0});case"range":return e.jsx(at,{value:t.value,blof:t.blof,flat:t.flat,caption:t.caption,compact:t.compact,valueLabel:t.valueLabel,blofLabel:t.blofLabel});case"replay":return e.jsx(pa,{data:t.replay})}}function fa({items:t}){return!t||t.length===0?null:e.jsx("div",{className:"space-y-4",children:t.map((a,n)=>e.jsx(ba,{v:a},n))})}function ma(){const t=d.useMemo(()=>Ht(),[]),[a,n]=d.useState(0),[o,s]=d.useState(0);if(t.length===0)return e.jsx("p",{className:"text-sm text-neutral-400",children:"Couldn't load range groups."});const i=t[a];return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:"Who opened?"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.map((r,l)=>e.jsx("button",{onClick:()=>{n(l),s(0)},className:l===a?"btn-accent px-3 py-1.5 text-sm":"btn-ghost px-3 py-1.5 text-sm",children:r.opener},l))})]}),e.jsx("div",{className:"text-xs text-neutral-500",children:i.label}),e.jsx("div",{className:"overflow-hidden rounded-xl border border-surface-3",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-surface-2 text-left text-neutral-300",children:i.table.headers.map((r,l)=>e.jsx("th",{className:"px-3 py-2 font-medium",children:r},l))})}),e.jsx("tbody",{children:i.table.rows.map((r,l)=>{const h=l===o;return e.jsx("tr",{onClick:()=>s(h?null:l),className:"cursor-pointer border-t border-surface-3 align-top transition "+(h?"bg-accent-soft ring-1 ring-accent":"hover:bg-surface-2"),children:r.map((c,p)=>e.jsx("td",{className:p===0?"px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap":"px-3 py-2 "+(h?"text-neutral-100":"text-neutral-300"),children:c},p))},l)})})]})}),e.jsx("p",{className:"text-xs text-neutral-500",children:"Tap your position — your value and bluff ranges light up on the 13×13 grid."}),o!==null&&i.table.rows[o]&&e.jsxs("div",{className:"rounded-xl border border-surface-3 bg-surface-1 p-3",children:[e.jsxs("div",{className:"mb-2 text-sm font-semibold text-neutral-100",children:[i.table.rows[o][0]," · 3-bet range"]}),e.jsx(at,{value:i.table.rows[o][1],blof:i.table.rows[o][2]})]}),i.flats.length>0&&e.jsx("ul",{className:"space-y-1 text-xs text-neutral-400",children:i.flats.map((r,l)=>e.jsxs("li",{children:["• ",r]},l))})]})}const $=ta(),ya=[.8,1,1.25,1.5],ne=999;function ga(t){var a,n;return(((a=t.bullets)==null?void 0:a.length)??0)+((n=t.visuals)!=null&&n.length?1:0)+(t.table?1:0)+(t.rangeMatrix?1:0)+(t.ruleBox?1:0)}function wa({moduleId:t,onBack:a}){var Ie,Pe;const n=d.useMemo(()=>vt(t),[t]),[o,s]=d.useState(0),[i,r]=d.useState(!1),[l,h]=d.useState(!0),[c,p]=d.useState(1),[u,y]=d.useState(ne),[b,m]=d.useState(-1),[f,T]=d.useState({i:0,n:0}),[N,L]=d.useState(()=>{const g=Ue[t];return g&&!O("coldopen:done",[]).includes(t)?g:null}),k=d.useRef(!1),R=d.useRef(c),G=d.useRef(l),pe=d.useRef(null);if(R.current=c,G.current=l,d.useEffect(()=>()=>{k.current=!1,$.stop()},[]),d.useEffect(()=>{if(b<0||!pe.current)return;const g=pe.current.querySelector('[data-active="true"]');g==null||g.scrollIntoView({block:"center",behavior:"smooth"})},[b]),!n)return e.jsxs("div",{className:"p-4",children:[e.jsx("button",{className:"btn-ghost",onClick:a,children:"← Back"}),e.jsx("p",{className:"mt-4 text-neutral-400",children:"Module not found."})]});if(N)return e.jsx(jt,{kavram:N,onStart:()=>{const g=O("coldopen:done",[]);g.includes(t)||I("coldopen:done",[...g,t]),L(null)}});const q=n.slides,j=q[o],it=o===q.length-1;let X=((Ie=j.bullets)==null?void 0:Ie.length)??0;const Z=(Pe=j.visuals)!=null&&Pe.length?X++:-1,be=j.table?X++:-1,fe=j.rangeMatrix?X++:-1,ee=j.ruleBox?X++:-1,Y=g=>g>=0&&g<u,A=g=>i&&g===b,Ce=g=>{if(g!==q.length-1)return;const v=O("lessons:done",[]);v.includes(n.id)||I("lessons:done",[...v,n.id])},Se=()=>{k.current=!1,$.stop(),r(!1),m(-1),y(ne)},rt=async g=>{k.current=!0,r(!0);for(let v=g;v<q.length&&k.current;v++){s(v),Ce(v);const z=aa(q[v].narration),me=ga(q[v]);y(0),m(-1);for(let J=0;J<z.length&&k.current;J++){z[J+1]&&na([z[J+1]]);const Me=me===0?-1:Math.min(me-1,Math.floor(J/z.length*me));m(Me),y(lt=>Math.max(lt,Me+1)),T({i:J+1,n:z.length}),await $.speak(z[J],R.current)}if(y(ne),m(-1),!k.current||!G.current)break}k.current=!1,r(!1),T({i:0,n:0})},Oe=g=>{Se();const v=Math.min(Math.max(g,0),q.length-1);s(v),y(ne),Ce(v)},te=g=>"reveal-in transition-all duration-300 "+(i?g?"opacity-100":"opacity-40":"opacity-100");return e.jsxs("div",{className:"flex min-h-full flex-col",children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 pt-4",children:[e.jsxs("button",{className:"btn-ghost px-3 py-1.5 text-sm",onClick:a,children:["← ",n.id]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:"truncate text-sm font-semibold",children:n.title}),e.jsxs("div",{className:"text-xs text-neutral-500",children:[n.chapter," · ",n.minutes," min"]})]})]}),e.jsx("div",{className:"flex gap-1 px-4 pt-3",children:q.map((g,v)=>e.jsx("div",{className:"h-1 flex-1 rounded-full "+(v<=o?"bg-accent":"bg-surface-3")},v))}),e.jsxs("div",{ref:pe,className:"flex-1 space-y-4 px-4 py-5",children:[e.jsx("h2",{className:"anim-fade text-xl font-bold",children:j.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{onClick:()=>i?Se():rt(o),className:i?"btn-ghost":"btn-accent",disabled:!$.supported,children:i?"⏸ Stop":"▶ Play"}),e.jsxs("button",{onClick:()=>h(g=>!g),className:"btn px-3 py-2 text-sm "+(l?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),title:"Auto-advance slides",children:["⟳ Auto ",l?"on":"off"]}),e.jsx("div",{className:"flex overflow-hidden rounded-xl border border-surface-3",children:ya.map(g=>e.jsxs("button",{onClick:()=>p(g),className:"min-h-[44px] px-3.5 py-2.5 text-xs "+(g===c?"bg-accent text-black":"bg-surface-2 text-neutral-400"),children:[g,"×"]},g))})]}),i&&f.n>0&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"live-pulse text-xs text-accent",children:"● narrating"}),e.jsx("div",{className:"h-1 flex-1 overflow-hidden rounded-full bg-surface-3",children:e.jsx("div",{className:"h-full rounded-full bg-accent transition-all duration-300",style:{width:`${f.i/f.n*100}%`}})})]}),!$.supported&&e.jsx("p",{className:"text-xs text-neutral-500",children:"This browser doesn't support voice narration."}),j.bullets&&e.jsx("ul",{className:"space-y-2",children:j.bullets.map((g,v)=>Y(v)?e.jsxs("li",{"data-active":A(v),className:"reveal-in flex gap-2 rounded-lg px-2 py-1 text-[15px] leading-relaxed transition-all duration-300 "+(A(v)?"bg-accent-soft ring-1 ring-accent/40":i?"opacity-40":""),children:[e.jsx("span",{className:"mt-1 "+(A(v)?"text-accent":"text-accent/70"),children:A(v)?"▶":"•"}),e.jsx("span",{children:g})]},v):null)}),j.visuals&&Y(Z)&&e.jsx("div",{"data-active":A(Z),className:te(A(Z))+(A(Z)?" rounded-xl ring-1 ring-accent/30 -mx-1 px-1 py-1":""),children:e.jsx(fa,{items:j.visuals})}),j.table&&Y(be)&&e.jsx("div",{"data-active":A(be),className:te(A(be)),children:e.jsx(va,{table:j.table})}),j.rangeMatrix&&Y(fe)&&e.jsx("div",{"data-active":A(fe),className:te(A(fe)),children:e.jsx(ma,{})}),j.ruleBox&&Y(ee)&&e.jsxs("div",{"data-active":A(ee),className:te(A(ee))+" rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-[15px] font-medium leading-relaxed"+(A(ee)?" ring-1 ring-accent/50":""),children:["📌 ",j.ruleBox]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-4",children:[e.jsx("button",{className:"btn-ghost",onClick:()=>Oe(o-1),disabled:o===0,children:"← Previous"}),e.jsxs("span",{className:"text-xs text-neutral-500",children:[o+1," / ",q.length]}),it?e.jsx("button",{className:"btn-accent",onClick:a,children:"Finish ✓"}):e.jsx("button",{className:"btn-accent",onClick:()=>Oe(o+1),children:"Next →"})]})]})}function va({table:t}){const a=d.useMemo(()=>P(t.section,t.sub),[t.section,t.sub]);return e.jsxs("div",{className:"space-y-2",children:[a?e.jsx(oa,{table:a}):e.jsx("p",{className:"text-sm text-neutral-500",children:"Couldn't load the table."}),t.caption&&e.jsx("p",{className:"text-xs italic text-neutral-500",children:t.caption})]})}function xa({onDone:t}){const a=d.useMemo(()=>Ne(),[]),[n,o]=d.useState(0),[s,i]=d.useState(!1),[r,l]=d.useState(0);if(a.length===0)return e.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-4xl",children:"👍"}),e.jsx("p",{className:"text-neutral-300",children:"Nothing due for review today."}),e.jsx("button",{onClick:t,className:"btn-accent px-4 py-2",children:"Back to Progress"})]});if(n>=a.length)return e.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-4xl",children:"🎉"}),e.jsxs("p",{className:"text-neutral-200",children:["Today's review is done — ",r," topics."]}),e.jsx("button",{onClick:t,className:"btn-accent px-4 py-2",children:"Back to Progress"})]});const h=a[n];function c(p){Kt(h.id,p),ue(),l(u=>u+1),i(!1),o(u=>u+1)}return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:t,className:"text-neutral-400",children:"← Progress"}),e.jsxs("span",{className:"text-neutral-500",children:[n+1," / ",a.length]})]}),e.jsx("div",{className:"h-1 overflow-hidden rounded bg-surface-2",children:e.jsx("div",{className:"h-full bg-accent transition-all",style:{width:`${n/a.length*100}%`}})}),e.jsxs("div",{className:"card min-h-[180px] p-5",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:It(h.kavram)}),e.jsx("p",{className:"mt-2 text-lg leading-relaxed text-neutral-100",children:h.soru_ozeti}),s&&e.jsxs("div",{className:"mt-4 border-t border-surface-3 pt-3",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Note / correct answer"}),e.jsxs("p",{className:"mt-1 text-sm text-neutral-300",children:[h.not||"—",e.jsxs("span",{className:"ml-2 text-neutral-500",children:["(last result: ",h.sonuc,")"]})]})]})]}),s?e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("button",{onClick:()=>c("wrong"),className:"btn-ghost py-3 text-red-300",children:"✗ Missed it"}),e.jsx("button",{onClick:()=>c("half"),className:"btn-ghost py-3 text-accent",children:"◐ Half"}),e.jsx("button",{onClick:()=>c("correct"),className:"btn-ghost py-3 text-emerald-300",children:"✓ Got it"})]}):e.jsx("button",{onClick:()=>i(!0),className:"btn-accent py-3 text-base",children:"Show"})]})}const ka=[{n:11,short:"Bloated Pot · Turn · River"},{n:12,short:"ICM & Final Table"},{n:13,short:"Multiway Pot"},{n:14,short:"40–70bb Bridge"},{n:15,short:"PLO Tournament Layer"},{n:16,short:"Mental Spine"},{n:17,short:"WSOP Online ME Day 2 ★"}];function Ta(t){const a=t.split(`
`),n=[];let o=[];const s=()=>{const r=o.join(" ").trim();r&&n.push({k:"p",text:r}),o=[]};let i=0;for(;i<a.length;){const r=a[i].trim();if(r===""||r==="---")s(),i++;else if(r.startsWith("### "))s(),n.push({k:"h3",text:r.slice(4).trim()}),i++;else if(r.startsWith("|")){s();const l=[];for(;i<a.length&&a[i].trim().startsWith("|");)l.push(a[i++].trim());const h=c=>c.replace(/^\|/,"").replace(/\|$/,"").split("|").map(p=>S(p));n.push({k:"table",headers:h(l[0]),rows:l.slice(2).map(h)})}else if(r.startsWith("> "))s(),n.push({k:"quote",text:r.slice(2).trim()}),i++;else if(/^([-*]|\d+\.)\s/.test(r)){s();const l=[];for(;i<a.length&&/^([-*]|\d+\.)\s/.test(a[i].trim());)l.push(a[i++].trim().replace(/^([-*]|\d+\.)\s/,""));n.push({k:"list",items:l})}else o.push(r),i++}return s(),n}function oe({text:t}){const a=t.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g).filter(Boolean);return e.jsx(e.Fragment,{children:a.map((n,o)=>n.startsWith("**")&&n.endsWith("**")?e.jsx("b",{children:n.slice(2,-2)},o):n.startsWith("*")&&n.endsWith("*")?e.jsx("i",{className:"text-neutral-400",children:n.slice(1,-1)},o):e.jsx("span",{children:n},o))})}function ja({title:t,onDone:a}){const n=d.useMemo(()=>Ta(D(t)),[t]);return e.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:a,className:"text-neutral-400",children:"← Chapters"}),e.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Book"}),e.jsx("span",{className:"w-16"})]}),e.jsx("h1",{className:"text-base font-semibold leading-snug text-neutral-100",children:t}),n.map((o,s)=>o.k==="h3"?e.jsx("h2",{className:"mt-2 text-sm font-semibold text-accent",children:o.text},s):o.k==="quote"?e.jsx("blockquote",{className:"border-l-2 border-accent bg-accent-soft px-3 py-2 text-[13px] font-medium leading-relaxed text-accent",children:e.jsx(oe,{text:o.text})},s):o.k==="list"?e.jsx("ul",{className:"ml-1 space-y-1",children:o.items.map((i,r)=>e.jsxs("li",{className:"flex gap-2 text-[13px] leading-snug text-neutral-200",children:[e.jsx("span",{className:"shrink-0 text-accent",children:"•"}),e.jsx("span",{children:e.jsx(oe,{text:i})})]},r))},s):o.k==="table"?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-[12px]",children:[e.jsx("thead",{children:e.jsx("tr",{children:o.headers.map((i,r)=>e.jsx("th",{className:"border border-surface-3 bg-surface-2 px-2 py-1 text-left font-semibold text-neutral-300",children:i},r))})}),e.jsx("tbody",{children:o.rows.map((i,r)=>e.jsx("tr",{children:i.map((l,h)=>e.jsx("td",{className:"border border-surface-3 px-2 py-1 align-top text-neutral-200",children:e.jsx(oe,{text:l})},h))},r))})]})},s):e.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-300",children:e.jsx(oe,{text:o.text})},s))]})}const ot="leakcard:date";function Aa(){var a;const t=((a=Xe()[0])==null?void 0:a.kavram)||"";return/icm|cover/i.test(t)?"cover":"pot"}function st(){return new Date().toISOString().slice(0,10)}function Ba(){return O(ot,"")===st()}function Je(){const t=Math.random()<.45,a=4+Math.floor(Math.random()*60),n=8+Math.floor(Math.random()*90),o=a/(a+n),s=t||o>=.4;return{potBb:a,behindBb:n,threeBet:t,bloated:s}}function Na(){const[t,a]=d.useState(Ba()?"hidden":"card"),[n]=d.useState(()=>Aa()),o=d.useRef(null);if(d.useEffect(()=>{var i,r;t!=="hidden"&&((r=(i=o.current)==null?void 0:i.querySelector("button"))==null||r.focus())},[t]),t==="hidden")return null;const s=()=>{I(ot,st()),ue(),a("hidden")};return e.jsx("div",{ref:o,role:"dialog","aria-modal":"true","aria-label":"Card of the day",onKeyDown:i=>{var c;if(i.key!=="Tab")return;const r=(c=o.current)==null?void 0:c.querySelectorAll("button, input, textarea, a[href]");if(!r||r.length===0)return;const l=r[0],h=r[r.length-1];i.shiftKey&&document.activeElement===l?(i.preventDefault(),h.focus()):!i.shiftKey&&document.activeElement===h&&(i.preventDefault(),l.focus())},className:"fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur",children:e.jsx("div",{className:"mx-auto flex h-full w-full max-w-md flex-col",children:t==="card"?n==="cover"?e.jsx(Sa,{onDrill:()=>a("drill"),onDone:s}):e.jsx(Ca,{onDrill:()=>a("drill"),onDone:s}):n==="cover"?e.jsx(Oa,{onDone:s}):e.jsx(Ia,{onDone:s})})})}function Ca({onDrill:t,onDone:a}){return e.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[e.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Card of the day"}),e.jsx("div",{className:"card border-l-4 border-accent p-6",children:e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("b",{className:"text-accent",children:"IF"})," the pot is bloated (a 3-bet+ pot or ~40% of my stack in the middle)"," ",e.jsx("b",{className:"text-accent",children:"AND"})," I hold one pair,",e.jsx("br",{}),e.jsx("b",{className:"text-accent",children:"THEN"})," I tell myself ",e.jsx("b",{children:'"bluff-catcher"'}),": check/call or fold —"," ",e.jsx("b",{children:"never a value raise."})]})}),e.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"The book's definition: bloated = 3-bet+ pot. “~40% of stack in the middle” is a practical heuristic (beyond the book)."}),e.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Read it out loud once. At the table this sentence will fire on its own."}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("button",{onClick:a,className:"btn-accent w-full py-3 text-base",children:"Rehearsed ✓"}),e.jsx("button",{onClick:t,className:"btn-ghost w-full py-3",children:"⏱ 90s cue drill →"})]})]})}function Sa({onDrill:t,onDone:a}){return e.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[e.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Card of the day"}),e.jsx("div",{className:"card border-l-4 border-accent p-6",children:e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("b",{className:"text-accent",children:"IF"})," I'm about to press fold to a jam,",e.jsx("br",{}),e.jsx("b",{className:"text-accent",children:"THEN"})," I classify first: ",e.jsx("b",{children:"does it cover me, or do I cover it?"})," Not covered → ",e.jsx("b",{children:"the call is much wider."})]})}),e.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"The book (C12): an uncovered range is never tighter than a covered one — even if you lose, you don't bust."}),e.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Read it out loud once. At the table this sentence will fire on its own."}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("button",{onClick:a,className:"btn-accent w-full py-3 text-base",children:"Rehearsed ✓"}),e.jsx("button",{onClick:t,className:"btn-ghost w-full py-3",children:"⏱ 90s cue drill →"})]})]})}const M=12;function Fe(){const t=12+Math.floor(Math.random()*60),a=3+Math.floor(Math.random()*40),n=Math.random()<.5?t+a:Math.max(3,t-a);return{heroBb:t,jammerBb:n,covered:n>=t}}function Oa({onDone:t}){const[a,n]=d.useState(0),[o,s]=d.useState(()=>Fe()),[i,r]=d.useState(null),[l,h]=d.useState(0),c=i===o.covered,p=a>=M;function u(b){r(b),b===o.covered&&h(m=>m+1)}function y(){if(a+1>=M){n(M);return}n(b=>b+1),s(Fe()),r(null)}return p?e.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-5xl",children:"🎯"}),e.jsxs("p",{className:"text-lg text-neutral-100",children:[l,"/",M," correct"]}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Before folding to a jam: am I covered? No → the call is much wider."}),e.jsx("button",{onClick:t,className:"btn-accent px-6 py-3",children:"Finish ✓"})]}):e.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),e.jsxs("span",{className:"text-neutral-400",children:[a+1," / ",M]})]}),e.jsxs("div",{className:"card p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["You ",o.heroBb,"bb"]}),e.jsxs("span",{className:"text-sm text-neutral-400",children:["jammer ",o.jammerBb,"bb"]})]}),e.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Bubble. The jam is on you."})]}),i===null?e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Classify: this jam…"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>u(!0),className:"btn-ghost py-4 text-base",children:"Covers me"}),e.jsx("button",{onClick:()=>u(!1),className:"btn-ghost py-4 text-base",children:"I cover it"})]})]}):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(c?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:o.covered?"You're covered — losing means bust. The call tightens hard.":"You're not covered — even if you lose, you don't bust. The call is much wider than you think."}),e.jsx("button",{onClick:y,className:"btn-accent py-3 text-base",children:a+1>=M?"Finish":"Next →"})]}),e.jsx("button",{onClick:t,className:"btn-ghost mt-auto w-full py-3",children:"skip"})]})}function Ia({onDone:t}){const[a,n]=d.useState(0),[o,s]=d.useState(()=>Je()),[i,r]=d.useState("pot"),[l,h]=d.useState(null),[c,p]=d.useState(null),[u,y]=d.useState(0),b=l===o.bloated,m=c===o.bloated,f=b&&m,T=a>=M;function N(R){h(R),r("class")}function L(R){p(R),b&&R===o.bloated&&y(G=>G+1),r("fb")}function k(){if(a+1>=M){n(M);return}n(R=>R+1),s(Je()),h(null),p(null),r("pot")}return T?e.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-5xl",children:"🎯"}),e.jsxs("p",{className:"text-lg text-neutral-100",children:[u,"/",M," correct"]}),e.jsx("p",{className:"text-sm text-neutral-500",children:"One pair in a bloated pot = bluff-catcher. Take this reflex to the table."}),e.jsx("button",{onClick:t,className:"btn-accent px-6 py-3",children:"Finish ✓"})]}):e.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),e.jsxs("span",{className:"text-neutral-400",children:[a+1," / ",M]})]}),e.jsxs("div",{className:"card p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Pot ",o.potBb,"bb"]}),e.jsxs("span",{className:"text-sm text-neutral-400",children:[o.behindBb,"bb behind"]})]}),o.threeBet&&e.jsx("div",{className:"mt-2 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300",children:"3-bet pot"}),e.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Your hand: one pair (overpair)"})]}),i==="pot"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Is the pot bloated?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>N(!0),className:"btn-ghost py-4 text-base",children:"Yes, bloated"}),e.jsx("button",{onClick:()=>N(!1),className:"btn-ghost py-4 text-base",children:"No"})]})]}),i==="class"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"What class is your one pair?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>L(!0),className:"btn-ghost py-4 text-base",children:"Bluff-catcher"}),e.jsx("button",{onClick:()=>L(!1),className:"btn-ghost py-4 text-base",children:"Value"})]})]}),i==="fb"&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(f?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[e.jsx("div",{children:o.bloated?"Bloated pot → one pair is a BLUFF-CATCHER.":"Not bloated → one pair is still value/showdown."}),!f&&e.jsx("div",{className:"mt-1 font-normal opacity-90",children:b?`Your pot read was right, the classification wrong: ${o.bloated?"bluff-catcher":"value/showdown"}.`:m?"Your classification was right, the pot read was wrong.":"Both the pot read and the classification were wrong."})]}),e.jsx("button",{onClick:k,className:"btn-accent py-3 text-base",children:a+1>=M?"Finish":"Next →"})]}),e.jsx("button",{onClick:t,className:"btn-ghost mt-auto w-full py-3",children:"skip"})]})}const U=[{id:"vaka1",title:"Case 1 — A4s river call",setup:"$50K High Roller. The board is prone to chopping — the chop mechanic is on the table. Villain moves all-in on the river. Your hand: A4s.",hero:"A4s",board:"",options:["Hero-call","Fold"],correct:1,rule:"Chops don't jam: if villain moves all-in, he has removed the chopping hands from his range — the jam is a hand that beats you. Spotting a mechanic isn't enough; ask whether villain's move is consistent with it. 📌 With a chop on board, a jam = a hand that has you beat.",selfExplain:"You spotted the chop mechanic — so which filter did you skip?",concept:"kök-hata"},{id:"vaka2",title:"Case 2 — KTo top pair",setup:"$10K 6-max. Wet board, you flopped top pair (KT). You're OOP, villain c-bets. Action on you.",hero:"KTo",board:"",options:["Check-raise all-in","Check-call, reassess later"],correct:1,rule:"One pair is not stack-off fuel. On a wet board, top pair does not start a big pot; when you start the stacks going in, the range that pays you has you beat. The road to a bloated pot turns your hand into a bluff-catcher. 📌 Top pair on a wet board: check-call, don't start it.",selfExplain:"Top pair looked strong — once the pot grew, what class did your hand become?",concept:"kök-hata"},{id:"vaka3",title:"Case 3 — AA river jam",setup:"Board 2-4-5, value bet on flop + turn (both were correct). The river is a 6 — no hand weaker than yours pays anymore. Your hand: AA. Villain checks.",hero:"AA",board:"2c 4d 5s ?? 6h",options:["Jam the remaining stack","Check"],correct:1,rule:"If no hand weaker than yours will call on the river, the jam is not value. On that river, trips/straights/sets have you beat and one pair folds — no value target. Overpair on a bad river: check-call a small pot, check-fold a big one. 📌 No weaker hand to pay you = no jam.",selfExplain:"Flop + turn value was correct — what exactly changed on the river 6?",concept:"kök-hata"},{id:"vaka4",title:"Case 4 — Your hand (yesterday)",setup:"6-max. T6s in the BB, BTN min-raises, you call. Flop A-T-3, BTN bets 1/3 pot, you call (pair of tens). Turn 5, check-check. River T → board A-T-3-5-T, you have trip tens but a 6 kicker. You checked, BTN makes a thin bet. Action on you.",hero:"Th 6h",board:"Ac Ts 3d 5c Td",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,rule:"No hand weaker than yours calls the all-in: every ten beats your 6 kicker, and boats are ahead anyway. On this runout your trips are a bluff-catcher — check-call, keep the bluffs in. Check-raise all-in folds out the bluffs; only hands that beat you call. 📌 No weaker hand to pay you = no raise (sentence 2 = Case 2).",selfExplain:"Trip tens felt strong — on that board, how many hands BEAT your 6 kicker, and how many are BEHIND and pay?",concept:"kök-hata",beyondBook:!0}];function Pa({onBack:t}){const[a,n]=d.useState(0),[o,s]=d.useState(null),[i]=d.useState(()=>O("autopsy:done",!1)),r=U[a],l=o!==null,h=a>=U.length;function c(u){if(l||(s(u),i))return;const y=u===r.correct;ue(),Ge({kavram:r.concept,soru_ozeti:`Autopsy: ${r.title}`,sonuc:y?"correct":"wrong",not:r.rule,severity:"tournament_life"})}function p(){s(null),a+1>=U.length&&!i&&I("autopsy:done",!0),n(u=>u+1)}return h?e.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-5xl",children:"🔬"}),e.jsx("p",{className:"text-neutral-200",children:"Cases done. The root error was the same every time."}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Misclassifying one pair in a bloated/multiway pot. Take this reflex to the table."}),e.jsx("button",{onClick:t,className:"btn-accent px-6 py-3",children:"← Back to lesson"})]}):e.jsxs("div",{className:"flex min-h-full flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:t,className:"text-neutral-400",children:"← Lesson"}),e.jsxs("span",{className:"text-neutral-500",children:[a+1," / ",U.length]})]}),i&&e.jsx("div",{className:"rounded-lg bg-surface-2 px-3 py-2 text-xs text-neutral-400",children:"Replay — not scored; focus on explaining it to yourself."}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("h1",{className:"text-xl font-bold",children:r.title}),r.beyondBook?e.jsx("span",{className:"rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent",children:"Beyond the book · your hand"}):e.jsx("span",{className:"rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300",children:"From the book · Chapter 7"})]}),e.jsxs("div",{className:"card p-4",children:[e.jsx("div",{className:"flex items-center justify-between gap-3",children:e.jsx(F,{spec:r.hero,size:"md",label:"Your hand"})}),r.board&&e.jsx("div",{className:"mt-3",children:e.jsx(F,{spec:r.board,size:"sm",label:"Board",texture:!0})}),e.jsx("p",{className:"mt-3 text-[15px] leading-relaxed text-neutral-200",children:r.setup})]}),l?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(o===r.correct?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[o===r.correct?"✓ Correct — ":"✗ ","Correct line: ",e.jsx("b",{children:r.options[r.correct]})]}),e.jsx("div",{className:"rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed",children:r.rule}),e.jsxs("div",{className:"card p-3",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Explain it to yourself"}),e.jsx("p",{className:"mt-1 text-sm text-neutral-300",children:r.selfExplain}),e.jsx("textarea",{rows:2,placeholder:"Out loud or in writing — which cue did you miss?",className:"mt-2 w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"})]}),e.jsx(Ra,{hand:r},r.id),e.jsx("button",{onClick:p,className:"btn-accent py-3 text-base",children:a+1>=U.length?"Finish":"Next case →"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-center text-sm text-neutral-500",children:"YOU decide first:"}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:r.options.map((u,y)=>e.jsx("button",{onClick:()=>c(y),className:"btn-ghost py-3 text-[15px]",children:u},y))})]})]})}function Ma(t){return t<1?0:t<=4?1:t<=8?2:3}function Ra({hand:t}){const[a,n]=d.useState(""),[o,s]=d.useState(""),[i,r]=d.useState(()=>{const p=O("spr-kalibrasyon",[]).find(u=>u.id===t.id);return p?p.spr:null}),l=d.useMemo(()=>P("Chapter 11","11.0"),[]);function h(){const p=Number(a),u=Number(o);if(!isFinite(p)||p<=0||!isFinite(u)||u<0)return;const y=Math.round(u/p*10)/10;r(y);const b=O("spr-kalibrasyon",[]).filter(m=>m.id!==t.id);I("spr-kalibrasyon",[...b,{id:t.id,pot:p,stack:u,spr:y}]),Ge({kavram:"spr-kalibrasyon",soru_ozeti:`Estimate SPR: ${t.title}`,sonuc:"correct",not:`flop pot ${p}bb, remaining stack ${u}bb → SPR ${y}`})}const c=i!==null&&l?l.rows[Ma(i)]:null;return e.jsxs("div",{className:"card p-3",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Estimate SPR (C11.0 · optional)"}),e.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"From memory: the pot on the flop and the stack you had behind (bb). If you don't remember, leave it blank — never make numbers up."}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("input",{value:a,onChange:p=>n(p.target.value),inputMode:"decimal",placeholder:"flop pot (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("input",{value:o,onChange:p=>s(p.target.value),inputMode:"decimal",placeholder:"stack behind (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("button",{onClick:h,className:"btn-ghost shrink-0 px-3 py-2 text-sm",children:"Compute"})]}),i!==null&&e.jsxs("div",{className:"mt-3 text-sm",children:[e.jsxs("div",{className:"font-semibold text-accent",children:["SPR ≈ ",i]}),c?e.jsxs("div",{className:"mt-1 rounded-lg bg-surface-2 px-3 py-2 text-xs leading-relaxed text-neutral-300",children:[e.jsx("b",{children:c[0]})," · ",c[1]," → ",c[2]]}):e.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Couldn't load the band table (C11.0)."})]})]})}const ze="journal",Ea=[{v:.6,label:"60%"},{v:.8,label:"80%"},{v:.95,label:"95%"}];function Ka({onDone:t}){const[a,n]=d.useState(()=>O(ze,[])),[o,s]=d.useState(""),[i,r]=d.useState(""),[l,h]=d.useState(""),[c,p]=d.useState(.8),[u,y]=d.useState(null),b=a.filter(f=>f.day===x(-1)).length;function m(){if(!o.trim()||!i.trim()){y({ok:!1,text:"Hand and Action are required — fill in both."});return}const f=[{day:x(0),el:o,aksiyon:i,gerekce:l,guven:c},...a];n(f),I(ze,f),ue(),s(""),r(""),h(""),y({ok:!0,text:"Saved ✓"})}return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:t,className:"text-neutral-400",children:"← Progress"}),e.jsx("span",{className:"font-semibold text-neutral-100",children:"🗒 Decision journal"}),e.jsx("span",{className:"w-12"})]}),_e()&&e.jsx("div",{className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:"🥊 Cornerman mode on. Taper: drop the volume, keep the intensity. No late-night study — sleep loss amplifies tilt."}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Write it before you know the result. Good decision, bad result = correct. The next day you grade the process, not the result."}),b>0&&e.jsxs("a",{href:"#/drill",className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:["You brought ",b," hand",b>1?"s":""," back from the table yesterday → score them in Drill"]}),e.jsxs("div",{className:"card space-y-2 p-4",children:[e.jsx("input",{value:o,onChange:f=>s(f.target.value),placeholder:"Hand / spot (e.g. 42bb CO KQo, HJ opened)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("input",{value:i,onChange:f=>r(f.target.value),placeholder:"Action (fold / 3-bet 9bb / check-call…)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("textarea",{value:l,onChange:f=>h(f.target.value),rows:2,placeholder:"Reasoning (why?)",className:"w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-neutral-500",children:"Confidence:"}),Ea.map(f=>e.jsx("button",{onClick:()=>p(f.v),className:"rounded-full px-2.5 py-1 text-xs "+(c===f.v?"bg-accent text-black font-semibold":"bg-surface-2 text-neutral-400"),children:f.label},f.v)),e.jsx("button",{onClick:m,className:"btn-accent ml-auto px-4 py-2 text-sm",children:"Save"})]}),u&&e.jsx("div",{className:"text-xs "+(u.ok?"text-emerald-400":"text-red-400"),children:u.text})]}),a.length===0?e.jsx("p",{className:"text-center text-sm text-neutral-600",children:"No entries yet."}):e.jsx("div",{className:"space-y-2",children:a.map((f,T)=>e.jsxs("div",{className:"card p-3 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-neutral-100",children:f.el}),e.jsx("span",{className:"text-xs text-neutral-500",children:f.day})]}),e.jsxs("div",{className:"text-accent",children:[f.aksiyon," · ",Math.round(f.guven*100),"%"]}),f.gerekce&&e.jsx("div",{className:"mt-1 text-neutral-400",children:f.gerekce})]},T))})]})}const La=d.lazy(()=>K(()=>import("./Quiz-BUYIe8bG.js"),__vite__mapDeps([0,1,2])).then(t=>({default:t.Quiz}))),Da=d.lazy(()=>K(()=>import("./Drill-BhNcNvmW.js"),__vite__mapDeps([3,1,4])).then(t=>({default:t.Drill}))),qa=d.lazy(()=>K(()=>import("./Simulator-Sl6MqymK.js"),__vite__mapDeps([5,1,4])).then(t=>({default:t.Simulator}))),Qa=d.lazy(()=>K(()=>import("./Progress-CaN46qhv.js"),__vite__mapDeps([6,1])).then(t=>({default:t.Progress}))),Wa=d.lazy(()=>K(()=>import("./QuickReference-ddFS3Kpn.js"),__vite__mapDeps([7,1])).then(t=>({default:t.QuickReference}))),Ja=d.lazy(()=>K(()=>import("./Sentences-CnrhkSoD.js"),__vite__mapDeps([8,1])).then(t=>({default:t.Sentences}))),Fa=d.lazy(()=>K(()=>import("./RangeAtlas-CSVIQ1dK.js"),__vite__mapDeps([9,1,2])).then(t=>({default:t.RangeAtlas}))),za=d.lazy(()=>K(()=>import("./EquityIntuition-Bcu4tkSF.js"),__vite__mapDeps([10,1])).then(t=>({default:t.EquityIntuition}))),Ha=d.lazy(()=>K(()=>import("./BetTypes-BecIGBH-.js"),__vite__mapDeps([11,1])).then(t=>({default:t.BetTypes}))),Ya=d.lazy(()=>K(()=>import("./QuestionBank-CV2v9GmI.js"),__vite__mapDeps([12,1])).then(t=>({default:t.QuestionBank}))),$a=d.lazy(()=>K(()=>import("./IcmCard-BlWEAANa.js"),__vite__mapDeps([13,1])).then(t=>({default:t.IcmCard})));function Ua(){const[t,a]=d.useState(()=>window.location.hash);return d.useEffect(()=>{const n=()=>a(window.location.hash);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),t}function w(t){window.location.hash=t}const _a=[{id:"ders",label:"Lessons",icon:"📚"},{id:"quiz",label:"Quiz",icon:"🎯"},{id:"drill",label:"Drill",icon:"🃏"},{id:"ilerleme",label:"Progress",icon:"📊"},{id:"referans",label:"Reference",icon:"⚡"}];function Va(){return e.jsx("div",{className:"flex h-full items-center justify-center text-sm text-neutral-500",children:"Loading…"})}function Ga(){const a=Ua().replace(/^#\/?/,"").split("/").filter(Boolean),o=new Set(["ders","quiz","drill","ilerleme","referans"]).has(a[0])?a[0]:"ders",s=a[1],i=d.useRef(null),[r,l]=d.useState(!1);return d.useEffect(()=>{var h;(h=i.current)==null||h.scrollTo(0,0)},[a[0],a[1]]),d.useEffect(()=>{const h=()=>l(!0);return window.addEventListener("ept:storage-fail",h,{once:!0}),()=>window.removeEventListener("ept:storage-fail",h)},[]),e.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col bg-surface-0 pt-[env(safe-area-inset-top)]",children:[e.jsx(Na,{}),r&&e.jsxs("div",{className:"flex items-center justify-between gap-3 bg-red-900/80 px-4 py-2 text-[13px] text-red-100",children:[e.jsx("span",{children:"Can't save — storage full/restricted"}),e.jsx("button",{"aria-label":"Dismiss",className:"px-1 font-semibold",onClick:()=>l(!1),children:"✕"})]}),e.jsx("main",{ref:i,className:"flex-1 overflow-y-auto",children:e.jsxs(d.Suspense,{fallback:e.jsx(Va,{}),children:[o==="ders"&&(s==="otopsi"?e.jsx(Pa,{onBack:()=>w("#/ders")}):s?e.jsx(wa,{moduleId:s,onBack:()=>w("#/ders")}):e.jsx(Jt,{onOpen:h=>w("#/ders/"+h)})),o==="quiz"&&e.jsx(La,{}),o==="drill"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-2 px-4 pt-4",children:[e.jsx("button",{onClick:()=>w("#/drill"),className:"btn px-3 py-2 text-sm "+(a[1]!=="masa"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🃏 Question drill"}),e.jsx("button",{onClick:()=>w("#/drill/masa"),className:"btn px-3 py-2 text-sm "+(a[1]==="masa"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🎲 Table (hand sim)"})]}),a[1]==="masa"?e.jsx(qa,{}):e.jsx(Da,{})]}),o==="ilerleme"&&(a[1]==="tekrar"?e.jsx(xa,{onDone:()=>w("#/ilerleme")}):a[1]==="gunluk"?e.jsx(Ka,{onDone:()=>w("#/ilerleme")}):e.jsx(Qa,{onReview:()=>w("#/ilerleme/tekrar"),onJournal:()=>w("#/ilerleme/gunluk")})),o==="referans"&&(a[1]==="cumleler"?e.jsx(Ja,{onDone:()=>w("#/referans")}):a[1]==="araliklar"?e.jsx(Fa,{onDone:()=>w("#/referans")}):a[1]==="equity"?e.jsx(za,{onDone:()=>w("#/referans")}):a[1]==="bahis"?e.jsx(Ha,{onDone:()=>w("#/referans")}):a[1]==="sorubankasi"?e.jsx(Ya,{onDone:()=>w("#/referans")}):a[1]==="icmkart"?e.jsx($a,{onDone:()=>w("#/referans")}):a[1]==="bolum"&&a[2]?e.jsx(ja,{title:"Chapter "+a[2],onDone:()=>w("#/referans/bolum")}):a[1]==="bolum"?e.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:()=>w("#/referans"),className:"text-neutral-400",children:"← Reference"}),e.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 New Chapters (v5)"}),e.jsx("span",{className:"w-16"})]}),e.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-400",children:"Tournament-winning chapters — straight from the book. Check the table on your phone during breaks."}),ka.map(h=>e.jsxs("button",{onClick:()=>w("#/referans/bolum/"+h.n),className:"card flex items-center justify-between p-3 text-left",children:[e.jsxs("span",{className:"text-[14px] text-neutral-100",children:[e.jsxs("span",{className:"font-mono text-neutral-500",children:["C",h.n]})," · ",h.short]}),e.jsx("span",{className:"text-accent",children:"→"})]},h.n))]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2 p-4 pb-0",children:[e.jsx("button",{onClick:()=>w("#/referans/araliklar"),className:"btn-accent py-2.5",children:"🗂️ Range Guide →"}),e.jsx("button",{onClick:()=>w("#/referans/cumleler"),className:"btn-ghost py-2.5",children:"🧠 15 Sentences (memorize) →"}),e.jsx("button",{onClick:()=>w("#/referans/equity"),className:"btn-ghost col-span-2 py-2.5",children:"📐 Equity Intuition (bonus · outside the book) →"}),e.jsx("button",{onClick:()=>w("#/referans/bahis"),className:"btn-ghost col-span-2 py-2.5",children:"🎯 Bet Types (value/bluff/thin/overbet) →"}),e.jsx("button",{onClick:()=>w("#/referans/sorubankasi"),className:"btn-ghost col-span-2 py-2.5",children:"📝 Question Bank (Chapter 10 · 37 questions) →"}),e.jsx("button",{onClick:()=>w("#/referans/icmkart"),className:"btn-ghost col-span-2 py-2.5",children:"🧮 My ICM Card (ladder + <15bb jam · Chapter 12) →"}),e.jsx("button",{onClick:()=>w("#/referans/bolum"),className:"btn-accent col-span-2 py-2.5",children:"📖 New Chapters v5 (ICM · River · Multiway…) →"})]}),e.jsx(Wa,{})]}))]})}),e.jsx("nav",{"aria-label":"Main tabs",className:"grid grid-cols-5 border-t border-surface-3 bg-surface-1 pb-[env(safe-area-inset-bottom)]",children:_a.map(h=>{const c=h.id===o;return e.jsxs("button",{"aria-current":c?"page":void 0,onClick:()=>w("#/"+h.id),className:"flex flex-col items-center gap-0.5 py-2.5 text-xs transition "+(c?"text-accent":"text-neutral-500"),children:[e.jsx("span",{className:"text-lg",children:h.icon}),h.label]},h.id)})})]})}class Xa extends He.Component{constructor(){super(...arguments);H(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){console.error("EPT ErrorBoundary:",n)}async resetData(){const n=Object.keys(localStorage).filter(s=>s.startsWith("ept:")),o=Object.fromEntries(n.map(s=>[s,localStorage.getItem(s)]));try{await navigator.clipboard.writeText(JSON.stringify(o,null,2))}catch{}n.forEach(s=>localStorage.removeItem(s)),location.reload()}render(){return this.state.hasError?e.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col items-center justify-center gap-4 bg-surface-0 p-6 text-center",children:[e.jsx("p",{className:"text-lg font-semibold text-neutral-100",children:"Something went wrong."}),e.jsx("button",{className:"btn-accent",onClick:()=>location.reload(),children:"Reload"}),e.jsx("button",{className:"btn-ghost text-sm",onClick:()=>this.resetData(),children:"Reset data (copy JSON first)"})]}):this.props.children}}ve.createRoot(document.getElementById("root")).render(e.jsx(He.StrictMode,{children:e.jsx(Xa,{children:e.jsx(Ga,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/ept-trainer-en/sw.js").catch(()=>{})});export{bn as $,cn as A,ue as B,F as C,hn as D,Te as E,sn as F,Lt as G,ua as H,De as I,rn as J,ln as K,Bt as L,_e as M,On as N,ie as O,aa as P,na as Q,at as R,kt as S,an as T,nn as U,pn as V,oa as W,un as X,vn as Y,xn as Z,kn as _,Ge as a,wn as b,Xe as c,Ne as d,Ht as e,gn as f,mn as g,yn as h,sa as i,e as j,jn as k,O as l,An as m,Bn as n,fn as o,we as p,Nn as q,on as r,I as s,Tn as t,Cn as u,Sn as v,Nt as w,W as x,It as y,dn as z};
