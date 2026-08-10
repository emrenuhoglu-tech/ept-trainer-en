import { useMemo, useState } from "react";
import { nextQuestion, ACTION_LABEL, type QAction, type Question } from "./quizEngine";
import { HandGlyph } from "../../components/Cards";
import { RangeGrid } from "../../components/RangeGrid";
import { loadKarne, recordResult } from "../../lib/karne";
import { recordQuiz, getStats } from "../../lib/progress";
import { ScenarioQuiz } from "./ScenarioQuiz";
import { BustoutRun } from "./BustoutRun";
import { RangeRecall } from "./RangeRecall";

// Weak (opener, position) pairs: from 3-bet quiz records answered wrong.
function weakPositions(): { opener: string; position: string }[] {
  const seen = new Set<string>();
  const out: { opener: string; position: string }[] = [];
  for (const e of loadKarne()) {
    if (e.sonuc !== "wrong") continue;
    const m = e.kavram.match(/^3bet:(.+?)→(.+)$/);
    if (m && !seen.has(e.kavram)) {
      seen.add(e.kavram);
      out.push({ opener: m[1], position: m[2] });
    }
  }
  return out;
}

const MODES = [
  { id: "range", label: "🎯 Range" },
  { id: "scenario", label: "📖 Scenario" },
  { id: "recall", label: "🧠 Recall" },
  { id: "run", label: "💥 Run" },
] as const;
type QuizMode = (typeof MODES)[number]["id"];

export function Quiz() {
  const [mode, setMode] = useState<QuizMode>("range");
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-4 gap-1 rounded-xl bg-surface-2 p-1">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={
              "rounded-lg py-2 text-sm font-medium transition " +
              (mode === m.id ? "bg-accent text-black" : "text-neutral-400")
            }
          >
            {m.label}
          </button>
        ))}
      </div>
      {mode === "range" ? (
        <RangeQuizBody />
      ) : mode === "scenario" ? (
        <ScenarioQuiz />
      ) : mode === "recall" ? (
        <RangeRecall />
      ) : (
        <BustoutRun />
      )}
    </div>
  );
}

function RangeQuizBody() {
  const [q, setQ] = useState<Question | null>(() => nextQuestion(weakPositions()));
  const [chosen, setChosen] = useState<QAction | null>(null);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const stats = useMemo(() => getStats(), [score]);

  if (!q) {
    return <div className="p-6 text-neutral-400">Couldn't load quiz data.</div>;
  }

  const answered = chosen !== null;
  const correct = chosen === q.correct;

  function answer(a: QAction) {
    if (answered || !q) return;
    setChosen(a);
    const ok = a === q.correct;
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }));
    recordQuiz(ok);
    recordResult({
      kavram: `3bet:${q.opener}→${q.position}`,
      soru_ozeti: `${q.opener} opened, you in ${q.position}, ${q.hand}`,
      sonuc: ok ? "correct" : "wrong",
      not: `correct: ${ACTION_LABEL[q.correct]}`,
    });
  }

  function again() {
    setChosen(null);
    setQ(nextQuestion(weakPositions()));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end text-sm">
        <span className="text-neutral-400">
          Session {score.ok}/{score.total} · 🔥 {stats.streak}-day streak
        </span>
      </div>

      {/* spot */}
      <div key={`${q.opener}-${q.position}-${q.hand}`} className="card anim-fade p-4">
        <div className="text-sm text-neutral-400">
          <span className="font-semibold text-accent">{q.opener}</span> opened — you're in{" "}
          <span className="font-semibold text-neutral-100">{q.position}</span>.
        </div>
        <div className="mt-3 flex items-center gap-3">
          <HandGlyph code={q.hand} size="lg" />
          <div className="text-sm text-neutral-400">Your hand. Your decision?</div>
        </div>
      </div>

      {/* answer buttons */}
      {!answered && (
        <div className="grid grid-cols-3 gap-2">
          {(["3bet", "call", "fold"] as QAction[]).map((a) => (
            <button key={a} onClick={() => answer(a)} className="btn-ghost py-3 text-base">
              {ACTION_LABEL[a]}
            </button>
          ))}
        </div>
      )}

      {/* reveal */}
      {answered && (
        <div className="flex flex-col gap-3">
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (correct
                ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40"
                : "bg-red-500/15 text-red-300 ring-1 ring-red-500/40")
            }
          >
            {correct ? "✓ Correct — " : `✗ Wrong — you said ${ACTION_LABEL[chosen!]}. `}
            Correct answer: <b>{ACTION_LABEL[q.correct]}</b>. {q.note}
          </div>

          <div className="card p-3">
            <div className="mb-2 text-sm font-semibold text-neutral-100">
              {q.position} · 3-bet range vs {q.opener} open
            </div>
            <RangeGrid value={q.value} blof={q.blof} flat={q.flat} highlight={q.hand} />
          </div>

          <button onClick={again} className="btn-accent py-3 text-base">
            Next question →
          </button>
        </div>
      )}
    </div>
  );
}
