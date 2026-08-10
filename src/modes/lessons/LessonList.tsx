import { modules } from "../../data/modules";
import { load } from "../../lib/storage";
import { TodayPlan } from "./TodayPlan";

export function LessonList({ onOpen }: { onOpen: (id: string) => void }) {
  const done = load<string[]>("lessons:done", []);

  return (
    <div className="space-y-3 px-4 py-5">
      <h1 className="text-2xl font-bold">Lesson Mode</h1>
      <p className="text-sm text-neutral-400">
        {modules.length} modules · slides + voice narration
      </p>

      <TodayPlan />

      <button
        onClick={() => onOpen("otopsi")}
        className="card flex w-full items-center gap-3 border-l-4 border-red-400/60 p-4 text-left active:scale-[0.99]"
      >
        <div className="text-2xl">🔬</div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold">Bustout Autopsy</div>
          <div className="truncate text-xs text-neutral-500">
            4 bustout hands (3 from the book + 1 of yours) — you decide first
          </div>
        </div>
        <div className="shrink-0 text-neutral-600">→</div>
      </button>

      <div className="space-y-2 pt-2">
        {modules.map((m) => {
          const isDone = done.includes(m.id);
          return (
            <button
              key={m.id}
              onClick={() => onOpen(m.id)}
              className="card flex w-full items-center gap-3 p-4 text-left active:scale-[0.99]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-sm font-bold text-accent">
                {m.id}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">{m.title}</div>
                <div className="truncate text-xs text-neutral-500">
                  {m.chapter} · {m.minutes} min
                </div>
              </div>
              <div className="shrink-0 text-lg">
                {isDone ? (
                  <span className="text-accent">✓</span>
                ) : (
                  <span className="text-neutral-600">→</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
