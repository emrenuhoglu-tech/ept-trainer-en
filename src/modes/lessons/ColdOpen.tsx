import { useMemo, useState } from "react";
import { SCENARIOS, type Scenario } from "../quiz/scenarios";

// Cold-open pretest: a decision attempt BEFORE the chapter is taught (productive failure).
// UNGRADED — NOT written to the report card/streak; mistakes must be free so avoidance isn't learned.
// Plays the chapter as feedback: cold commit → show the answer → "Start the lesson".

// Module → cold-open concept (shown only for matching modules).
export const MODULE_PRETEST: Record<string, string> = {
  M1: "kök-hata",
  M2: "blöf-kriter",
  M3: "aldatıcı-eller",
  M4: "stack-modu",
  M5: "canlı-value",
  M6: "4bet-cevap",
  M7: "25-30bb-değer",
  M8: "turn-fold-equity",
  M9: "plo-aa",
};

function pickByKavram(kavram: string): Scenario | null {
  const pool = SCENARIOS.filter((s) => s.kavram === kavram);
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
}

export function ColdOpen({
  kavram,
  onStart,
}: {
  kavram: string;
  onStart: () => void;
}) {
  const s = useMemo(() => pickByKavram(kavram), [kavram]);
  const [chosen, setChosen] = useState<number | null>(null);
  const answered = chosen !== null;

  if (!s) {
    onStart();
    return null;
  }

  return (
    <div className="flex min-h-full flex-col justify-center gap-4 p-5">
      <div className="text-center text-xs uppercase tracking-[0.18em] text-accent">
        Guess first
      </div>
      <p className="text-center text-sm text-neutral-500">
        Take a shot before the lesson. Getting it wrong is free — no score. The lesson is your answer.
      </p>

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
              onClick={() => !answered && setChosen(idx)}
              disabled={answered}
              className={cls + " justify-start py-3 text-left text-[15px]"}
            >
              {answered && isCorrect ? "✓ " : answered && isChosen ? "✗ " : ""}
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {s.explain}
          </div>
          <button onClick={onStart} className="btn-accent py-3 text-base">
            Start the lesson →
          </button>
        </>
      )}

      {!answered && (
        <button onClick={onStart} className="text-center text-xs text-neutral-600">
          skip, go straight to the lesson
        </button>
      )}
    </div>
  );
}
