import { useMemo, useState } from "react";
import { tenSentences } from "../../content/curriculum";
import { recordPractice } from "../../lib/progress";

// Chapter 0's 11 core sentences — a flip-card deck (memorization).
// Front: cue/context. Flip → the bold rule. Content is parsed from the MD.
export function Sentences({ onDone }: { onDone: () => void }) {
  const list = useMemo(() => tenSentences(), []);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (list.length === 0) {
    return <div className="p-6 text-neutral-400">Couldn't load the sentences.</div>;
  }

  const s = list[i];

  function go(delta: number) {
    const n = i + delta;
    if (n < 0 || n >= list.length) return;
    setI(n);
    setFlipped(false);
    if (n === list.length - 1) recordPractice();
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Reference
        </button>
        <span className="font-semibold text-neutral-100">🧠 15 Sentences</span>
        <span className="text-neutral-500">
          {i + 1} / {list.length}
        </span>
      </div>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="card flex min-h-[240px] flex-col items-center justify-center gap-3 p-6 text-center"
      >
        <div className="text-6xl font-bold text-accent/30">{s.n}</div>
        {!flipped ? (
          <>
            <p className="text-base leading-relaxed text-neutral-300">{s.context}</p>
            <span className="mt-2 text-xs text-neutral-600">— recall the rule, then flip —</span>
          </>
        ) : (
          <p className="text-xl font-semibold leading-snug text-neutral-100">{s.rule}</p>
        )}
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={() => go(-1)}
          disabled={i === 0}
          className="btn-ghost flex-1 py-2.5 disabled:opacity-40"
        >
          ← Previous
        </button>
        <button onClick={() => setFlipped((f) => !f)} className="btn-ghost px-4 py-2.5">
          ⟳ Flip
        </button>
        <button
          onClick={() => go(1)}
          disabled={i === list.length - 1}
          className="btn-accent flex-1 py-2.5 disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
