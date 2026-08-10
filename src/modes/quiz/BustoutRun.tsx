import { useState } from "react";
import { SCENARIOS, type Scenario } from "./scenarios";
import { recordResult } from "../../lib/karne";
import { recordQuiz } from "../../lib/progress";
import { load, save } from "../../lib/storage";

// Bustout Run — sudden death: one wrong = the run ends (just like a tournament).
// One "skip (fold)" per run — at the table too, fold = pass. Best run is saved.
const BEST_KEY = "bustout:best";

function pick(exclude?: string): Scenario {
  const pool = SCENARIOS.filter((s) => s.q !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function BustoutRun() {
  const [s, setS] = useState<Scenario>(() => pick());
  const [chosen, setChosen] = useState<number | null>(null);
  const [runLen, setRunLen] = useState(0);
  const [over, setOver] = useState(false);
  const [skipUsed, setSkipUsed] = useState(false);
  const [best, setBest] = useState<number>(() => load<number>(BEST_KEY, 0));

  const answered = chosen !== null;

  function answer(idx: number) {
    if (answered || over) return;
    setChosen(idx);
    const ok = idx === s.correct;
    recordQuiz(ok);
    recordResult({
      kavram: s.kavram,
      soru_ozeti: s.q,
      sonuc: ok ? "correct" : "wrong",
      not: s.explain,
    });
    if (ok) {
      setRunLen((n) => n + 1);
    } else {
      const final = runLen;
      if (final > best) {
        setBest(final);
        save(BEST_KEY, final);
      }
      setOver(true);
    }
  }

  function nextAfterCorrect() {
    setChosen(null);
    setS(pick(s.q));
  }

  function skip() {
    if (skipUsed || answered) return;
    setSkipUsed(true);
    setS(pick(s.q));
  }

  function restart() {
    setRunLen(0);
    setOver(false);
    setSkipUsed(false);
    setChosen(null);
    setS(pick());
  }

  if (over) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="text-5xl">💥</div>
        <p className="text-lg text-neutral-100">Run over — <b>{runLen}</b> correct</p>
        <p className="text-sm text-neutral-500">Best: {best}</p>
        <div className="w-full rounded-xl bg-surface-1 px-4 py-3 text-left text-sm text-neutral-300">
          <b className="text-red-300">The decision that busted you:</b> {s.q}
          <div className="mt-1 text-neutral-400">{s.explain}</div>
        </div>
        <button onClick={restart} className="btn-accent px-6 py-3">
          New run →
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <span className="rounded-full bg-red-500/15 px-3 py-1 font-semibold text-red-300">
          🔥 Run {runLen}
        </span>
        <span className="text-neutral-500">best {best} · one wrong ends it</span>
      </div>

      <div className="card p-4">
        <p className="text-[15px] leading-relaxed text-neutral-100">{s.q}</p>
      </div>

      <div className="flex flex-col gap-2">
        {s.options.map((opt, idx) => {
          const isCorrect = idx === s.correct;
          const isChosen = idx === chosen;
          let cls = "btn-ghost";
          if (answered && isCorrect) cls = "btn bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/50";
          else if (answered && isChosen && !isCorrect)
            cls = "btn bg-red-500/20 text-red-200 ring-1 ring-red-500/50";
          return (
            <button
              key={idx}
              onClick={() => answer(idx)}
              disabled={answered}
              className={cls + " justify-start py-3 text-left text-[15px]"}
            >
              {answered && isCorrect ? "✓ " : answered && isChosen ? "✗ " : ""}
              {opt}
            </button>
          );
        })}
      </div>

      {!answered && (
        <button
          onClick={skip}
          disabled={skipUsed}
          className="btn-ghost py-2.5 text-sm disabled:opacity-40"
        >
          {skipUsed ? "Skip used" : "🃏 Skip (fold) — 1 per run"}
        </button>
      )}

      {answered && (
        <>
          <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {s.explain}
          </div>
          <button onClick={nextAfterCorrect} className="btn-accent py-3 text-base">
            Continue → (run {runLen})
          </button>
        </>
      )}
    </div>
  );
}
