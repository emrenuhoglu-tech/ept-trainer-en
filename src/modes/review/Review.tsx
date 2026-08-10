import { useMemo, useState } from "react";
import { dueEntries, reviewEntry, conceptLabel, type Sonuc } from "../../lib/karne";
import { recordPractice } from "../../lib/progress";

// Spaced-repetition review loop: walks through today's due scorecard entries as
// self-grade cards. Each answer updates the due date via reviewEntry (adds no new entries).
export function Review({ onDone }: { onDone: () => void }) {
  const list = useMemo(() => dueEntries(), []);
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(0);

  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center">
        <div className="text-4xl">👍</div>
        <p className="text-neutral-300">Nothing due for review today.</p>
        <button onClick={onDone} className="btn-accent px-4 py-2">
          Back to Progress
        </button>
      </div>
    );
  }

  if (i >= list.length) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center">
        <div className="text-4xl">🎉</div>
        <p className="text-neutral-200">Today's review is done — {done} topics.</p>
        <button onClick={onDone} className="btn-accent px-4 py-2">
          Back to Progress
        </button>
      </div>
    );
  }

  const e = list[i];

  function grade(s: Sonuc) {
    reviewEntry(e.id, s);
    recordPractice();
    setDone((d) => d + 1);
    setShown(false);
    setI((x) => x + 1);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Progress
        </button>
        <span className="text-neutral-500">
          {i + 1} / {list.length}
        </span>
      </div>

      <div className="h-1 overflow-hidden rounded bg-surface-2">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${(i / list.length) * 100}%` }}
        />
      </div>

      <div className="card min-h-[180px] p-5">
        <div className="text-xs uppercase tracking-wide text-neutral-500">{conceptLabel(e.kavram)}</div>
        <p className="mt-2 text-lg leading-relaxed text-neutral-100">{e.soru_ozeti}</p>

        {shown && (
          <div className="mt-4 border-t border-surface-3 pt-3">
            <div className="text-xs uppercase tracking-wide text-neutral-500">Note / correct answer</div>
            <p className="mt-1 text-sm text-neutral-300">
              {e.not || "—"}
              <span className="ml-2 text-neutral-500">(last result: {e.sonuc})</span>
            </p>
          </div>
        )}
      </div>

      {!shown ? (
        <button onClick={() => setShown(true)} className="btn-accent py-3 text-base">
          Show
        </button>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => grade("wrong")} className="btn-ghost py-3 text-red-300">
            ✗ Missed it
          </button>
          <button onClick={() => grade("half")} className="btn-ghost py-3 text-accent">
            ◐ Half
          </button>
          <button onClick={() => grade("correct")} className="btn-ghost py-3 text-emerald-300">
            ✓ Got it
          </button>
        </div>
      )}
    </div>
  );
}
