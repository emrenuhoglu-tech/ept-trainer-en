import { useMemo, useState } from "react";
import { CardRow } from "../../components/Cards";
import { recordResult } from "../../lib/karne";
import { recordPractice } from "../../lib/progress";
import { load, save } from "../../lib/storage";
import { tableFromSection } from "../../content/curriculum";

// Bustout Autopsy — the book's 3 bustout hands (Chapter 7) + 1 of your own (beyond the book, yesterday).
// Book case content is verbatim from the book (nothing invented): YOU decide first, then
// the book's line + rule + self-explanation. Worked example + self-explain.
interface Hand {
  id: string;
  title: string;
  setup: string;
  hero: string;
  board: string;
  options: string[];
  correct: number;
  rule: string;
  selfExplain: string;
  concept: string;
  beyondBook?: boolean; // a hand not in the book (yours) — clearly labeled
}

const HANDS: Hand[] = [
  {
    id: "vaka1",
    title: "Case 1 — A4s river call",
    setup:
      "$50K High Roller. The board is prone to chopping — the chop mechanic is on the table. Villain moves all-in on the river. Your hand: A4s.",
    hero: "A4s",
    board: "",
    options: ["Hero-call", "Fold"],
    correct: 1,
    rule: "Chops don't jam: if villain moves all-in, he has removed the chopping hands from his range — the jam is a hand that beats you. Spotting a mechanic isn't enough; ask whether villain's move is consistent with it. 📌 With a chop on board, a jam = a hand that has you beat.",
    selfExplain: "You spotted the chop mechanic — so which filter did you skip?",
    concept: "kök-hata",
  },
  {
    id: "vaka2",
    title: "Case 2 — KTo top pair",
    setup:
      "$10K 6-max. Wet board, you flopped top pair (KT). You're OOP, villain c-bets. Action on you.",
    hero: "KTo",
    board: "",
    options: ["Check-raise all-in", "Check-call, reassess later"],
    correct: 1,
    rule: "One pair is not stack-off fuel. On a wet board, top pair does not start a big pot; when you start the stacks going in, the range that pays you has you beat. The road to a bloated pot turns your hand into a bluff-catcher. 📌 Top pair on a wet board: check-call, don't start it.",
    selfExplain: "Top pair looked strong — once the pot grew, what class did your hand become?",
    concept: "kök-hata",
  },
  {
    id: "vaka3",
    title: "Case 3 — AA river jam",
    setup:
      "Board 2-4-5, value bet on flop + turn (both were correct). The river is a 6 — no hand weaker than yours pays anymore. Your hand: AA. Villain checks.",
    hero: "AA",
    board: "2c 4d 5s ?? 6h",
    options: ["Jam the remaining stack", "Check"],
    correct: 1,
    rule: "If no hand weaker than yours will call on the river, the jam is not value. On that river, trips/straights/sets have you beat and one pair folds — no value target. Overpair on a bad river: check-call a small pot, check-fold a big one. 📌 No weaker hand to pay you = no jam.",
    selfExplain: "Flop + turn value was correct — what exactly changed on the river 6?",
    concept: "kök-hata",
  },
  {
    id: "vaka4",
    title: "Case 4 — Your hand (yesterday)",
    setup:
      "6-max. T6s in the BB, BTN min-raises, you call. Flop A-T-3, BTN bets 1/3 pot, you call (pair of tens). Turn 5, check-check. River T → board A-T-3-5-T, you have trip tens but a 6 kicker. You checked, BTN makes a thin bet. Action on you.",
    hero: "Th 6h",
    board: "Ac Ts 3d 5c Td",
    options: ["Check-raise all-in", "Check-call — bluff-catcher"],
    correct: 1,
    rule: "No hand weaker than yours calls the all-in: every ten beats your 6 kicker, and boats are ahead anyway. On this runout your trips are a bluff-catcher — check-call, keep the bluffs in. Check-raise all-in folds out the bluffs; only hands that beat you call. 📌 No weaker hand to pay you = no raise (sentence 2 = Case 2).",
    selfExplain: "Trip tens felt strong — on that board, how many hands BEAT your 6 kicker, and how many are BEHIND and pay?",
    concept: "kök-hata",
    beyondBook: true,
  },
];

export function BustoutAutopsy({ onBack }: { onBack: () => void }) {
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  // Replay: once the first completion is marked, do NOT write to the report card —
  // memorized binary answers inflate the 'kök-hata' streak. Replays are for self-explain.
  const [replay] = useState<boolean>(() => load<boolean>("autopsy:done", false));
  const h = HANDS[i];
  const answered = chosen !== null;
  const done = i >= HANDS.length;

  function answer(idx: number) {
    if (answered) return;
    setChosen(idx);
    if (replay) return;
    const ok = idx === h.correct;
    recordPractice();
    recordResult({
      kavram: h.concept,
      soru_ozeti: `Autopsy: ${h.title}`,
      sonuc: ok ? "correct" : "wrong",
      not: h.rule,
      severity: "tournament_life",
    });
  }
  function next() {
    setChosen(null);
    if (i + 1 >= HANDS.length && !replay) save("autopsy:done", true);
    setI((x) => x + 1);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center">
        <div className="text-5xl">🔬</div>
        <p className="text-neutral-200">Cases done. The root error was the same every time.</p>
        <p className="text-sm text-neutral-500">
          Misclassifying one pair in a bloated/multiway pot. Take this reflex to the table.
        </p>
        <button onClick={onBack} className="btn-accent px-6 py-3">
          ← Back to lesson
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onBack} className="text-neutral-400">
          ← Lesson
        </button>
        <span className="text-neutral-500">{i + 1} / {HANDS.length}</span>
      </div>

      {replay && (
        <div className="rounded-lg bg-surface-2 px-3 py-2 text-xs text-neutral-400">
          Replay — not scored; focus on explaining it to yourself.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-bold">{h.title}</h1>
        {h.beyondBook ? (
          <span className="rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
            Beyond the book · your hand
          </span>
        ) : (
          <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
            From the book · Chapter 7
          </span>
        )}
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between gap-3">
          <CardRow spec={h.hero} size="md" label="Your hand" />
        </div>
        {h.board && (
          <div className="mt-3">
            <CardRow spec={h.board} size="sm" label="Board" texture />
          </div>
        )}
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-200">{h.setup}</p>
      </div>

      {!answered ? (
        <>
          <div className="text-center text-sm text-neutral-500">YOU decide first:</div>
          <div className="grid grid-cols-1 gap-2">
            {h.options.map((o, idx) => (
              <button key={idx} onClick={() => answer(idx)} className="btn-ghost py-3 text-[15px]">
                {o}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (chosen === h.correct
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300")
            }
          >
            {chosen === h.correct ? "✓ Correct — " : "✗ "}
            Correct line: <b>{h.options[h.correct]}</b>
          </div>
          <div className="rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed">
            {h.rule}
          </div>
          <div className="card p-3">
            <div className="text-xs uppercase tracking-wide text-neutral-500">Explain it to yourself</div>
            <p className="mt-1 text-sm text-neutral-300">{h.selfExplain}</p>
            <textarea
              rows={2}
              placeholder="Out loud or in writing — which cue did you miss?"
              className="mt-2 w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          <SprEstimator key={h.id} hand={h} />
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= HANDS.length ? "Finish" : "Next case →"}
          </button>
        </>
      )}
    </div>
  );
}

// C11.0 "calibrate: assign an SPR to the 3 elimination hands" slot. The numbers are
// entered from EMRE'S memory — the app NEVER fabricates a pot/stack, it only does the
// arithmetic (stack ÷ pot) and shows the matching row of the book's 11.0 band table
// (READ-ONLY parse).
interface SprRecord {
  id: string;
  pot: number;
  stack: number;
  spr: number;
}

function bandIndex(spr: number): number {
  if (spr < 1) return 0;
  if (spr <= 4) return 1;
  if (spr <= 8) return 2;
  return 3;
}

function SprEstimator({ hand }: { hand: Hand }) {
  const [pot, setPot] = useState("");
  const [stack, setStack] = useState("");
  const [spr, setSpr] = useState<number | null>(() => {
    const rec = load<SprRecord[]>("spr-kalibrasyon", []).find((r) => r.id === hand.id);
    return rec ? rec.spr : null;
  });
  const table = useMemo(() => tableFromSection("Chapter 11", "11.0"), []);

  function compute() {
    const p = Number(pot);
    const s = Number(stack);
    if (!isFinite(p) || p <= 0 || !isFinite(s) || s < 0) return;
    const v = Math.round((s / p) * 10) / 10;
    setSpr(v);
    const list = load<SprRecord[]>("spr-kalibrasyon", []).filter((r) => r.id !== hand.id);
    save("spr-kalibrasyon", [...list, { id: hand.id, pot: p, stack: s, spr: v }]);
    recordResult({
      kavram: "spr-kalibrasyon",
      soru_ozeti: `Estimate SPR: ${hand.title}`,
      sonuc: "correct",
      not: `flop pot ${p}bb, remaining stack ${s}bb → SPR ${v}`,
    });
  }

  const row = spr !== null && table ? table.rows[bandIndex(spr)] : null;

  return (
    <div className="card p-3">
      <div className="text-xs uppercase tracking-wide text-neutral-500">
        Estimate SPR (C11.0 · optional)
      </div>
      <p className="mt-1 text-xs text-neutral-500">
        From memory: the pot on the flop and the stack you had behind (bb). If you don't
        remember, leave it blank — never make numbers up.
      </p>
      <div className="mt-2 flex items-center gap-2">
        <input
          value={pot}
          onChange={(e) => setPot(e.target.value)}
          inputMode="decimal"
          placeholder="flop pot (bb)"
          className="w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <input
          value={stack}
          onChange={(e) => setStack(e.target.value)}
          inputMode="decimal"
          placeholder="stack behind (bb)"
          className="w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <button onClick={compute} className="btn-ghost shrink-0 px-3 py-2 text-sm">
          Compute
        </button>
      </div>
      {spr !== null && (
        <div className="mt-3 text-sm">
          <div className="font-semibold text-accent">SPR ≈ {spr}</div>
          {row ? (
            <div className="mt-1 rounded-lg bg-surface-2 px-3 py-2 text-xs leading-relaxed text-neutral-300">
              <b>{row[0]}</b> · {row[1]} → {row[2]}
            </div>
          ) : (
            <p className="mt-1 text-xs text-neutral-500">Couldn't load the band table (C11.0).</p>
          )}
        </div>
      )}
    </div>
  );
}
