import { useLayoutEffect, useState } from "react";
import { recordResult } from "../../lib/karne";
import { recordQuiz } from "../../lib/progress";
import type { MdTable } from "../../content/curriculum";
import {
  POSTFLOP_LABEL,
  postflopQuestion,
  type PostflopAction,
  type PostflopQuestion,
  type PostflopStreet,
} from "./postflopEngine";

// 🃏 Turn & River drill — the postflop half. Scenarios come from Chapter 6 (draws on the turn)
// and Chapter 11 (turn discipline + river execution). The book gives sizes as (calibrate), so we
// drill DIRECTION only; the reveal shows the exact source table so the "why" is the book's own.

const STREETS: { id: "all" | PostflopStreet; label: string }[] = [
  { id: "all", label: "Turn & River" },
  { id: "turn", label: "Turn" },
  { id: "river", label: "River" },
];

const CONF = [
  { v: 0.6, label: "60%" },
  { v: 0.8, label: "80%" },
  { v: 0.95, label: "95%" },
];

export function Postflop() {
  const [street, setStreet] = useState<"all" | PostflopStreet>("all");
  const [q, setQ] = useState<PostflopQuestion | null>(null);
  // First question on mount, not during render (record* side effects + StrictMode double-count).
  useLayoutEffect(() => {
    setQ(postflopQuestion("all"));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [chosen, setChosen] = useState<PostflopAction | null>(null);
  const [conf, setConf] = useState(0.8);
  const [score, setScore] = useState({ ok: 0, total: 0 });

  const answered = chosen !== null;
  const correct = answered && q !== null && chosen === q.correct;
  const label = (a: PostflopAction) => q?.answerLabels?.[a] ?? POSTFLOP_LABEL[a];

  function selStreet(s: "all" | PostflopStreet) {
    setStreet(s);
    setChosen(null);
    setQ(postflopQuestion(s));
  }

  function answer(a: PostflopAction) {
    if (answered || !q) return;
    setChosen(a);
    const ok = a === q.correct;
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }));
    recordQuiz(ok);
    recordResult({
      kavram: q.kavram,
      soru_ozeti: q.headline,
      sonuc: ok ? "correct" : "wrong",
      not: `correct: ${label(q.correct)}`,
      confidence: conf,
    });
  }

  function again() {
    setChosen(null);
    setQ(postflopQuestion(street));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-1.5">
          {STREETS.map((s) => (
            <button
              key={s.id}
              onClick={() => selStreet(s.id)}
              className={
                "rounded-full px-3 py-1.5 text-[13px] " +
                (s.id === street
                  ? "bg-accent-soft text-accent border border-accent"
                  : "bg-surface-2 text-neutral-400 border border-surface-3")
              }
            >
              {s.label}
            </button>
          ))}
        </div>
        <span className="text-neutral-400">
          Session {score.ok}/{score.total}
        </span>
      </div>

      {!q && <div className="p-6 text-neutral-400">Couldn't build a postflop drill.</div>}

      {q && (
        <>
          <div key={`${q.kavram}-${score.total}`} className="card anim-fade p-4">
            <div className="mb-1 text-[11px] uppercase tracking-wide text-accent">
              {q.street === "turn" ? "Turn" : "River"} · Book {q.source}
            </div>
            <div className="text-sm text-neutral-200">{q.headline}</div>
            <div className="mt-2 text-sm font-semibold text-neutral-100">{q.prompt}</div>
          </div>

          {!answered && (
            <>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                Confidence:
                {CONF.map((c) => (
                  <button
                    key={c.v}
                    onClick={() => setConf(c.v)}
                    className={
                      "rounded-full px-2.5 py-1 " +
                      (conf === c.v ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
                    }
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className={"grid gap-2 " + (q.answers.length === 3 ? "grid-cols-3" : "grid-cols-2")}>
                {q.answers.map((a) => (
                  <button key={a} onClick={() => answer(a)} className="btn-ghost py-3 text-base">
                    {label(a)}
                  </button>
                ))}
              </div>
            </>
          )}

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
                {correct ? "✓ Correct — " : `✗ Wrong — you said ${label(chosen!)}. `}
                Correct answer: <b>{label(q.correct)}</b>. {q.note}
              </div>

              {q.table && (
                <div className="card p-3">
                  <TableReveal table={q.table} highlight={q.highlightRow} />
                </div>
              )}
              {q.catalog && (
                <div className="card p-3">
                  <div className="mb-2 text-sm font-semibold text-neutral-100">Bad-river catalog (11.4)</div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-300">
                    {q.catalog.map((it, i) => (
                      <li key={i} className={q.headline.includes(it) ? "text-accent" : ""}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button onClick={again} className="btn-accent py-3 text-base">
                Next question →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TableReveal({ table, highlight }: { table: MdTable; highlight?: number }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th key={i} className="border-b border-surface-3 px-2 py-1 text-left font-medium text-neutral-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, ri) => (
            <tr key={ri} className={ri === highlight ? "bg-accent-soft" : ""}>
              {r.map((c, ci) => (
                <td
                  key={ci}
                  className={
                    "border-b border-surface-3 px-2 py-1 " +
                    (ci === 0 ? "font-semibold text-neutral-200" : "text-neutral-400")
                  }
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
