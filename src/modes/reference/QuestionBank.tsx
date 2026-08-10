import { useMemo } from "react";
import { questionBank } from "../../content/curriculum";

// Question Bank — Chapter 10's 24 questions (3 subsections), parsed straight from the book.
// The book's design: answers are NOT written out — they're worked verbally in the drill. This view
// makes the questions readable/browsable (they never appeared in the app before) and bridges to the Drill.

export function QuestionBank({ onDone }: { onDone: () => void }) {
  const sections = useMemo(() => questionBank(), []);
  const total = sections.reduce((n, s) => n + s.questions.length, 0);
  // keep the book's continuous 1–24 numbering (don't reset between sections)
  const offsets: number[] = [];
  sections.reduce((acc, s, i) => ((offsets[i] = acc), acc + s.questions.length), 0);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Reference
        </button>
        <span className="font-semibold text-neutral-100">📝 Question Bank</span>
        <span className="w-16" />
      </div>

      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">Chapter 10 · {total} questions</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          The book's design: <b>answers aren't written out — they're worked verbally in the Drill.</b> Read a
          question, build your decision and your reasoning, then work it out loud in the Drill.
        </p>
        <a href="#/drill" className="mt-2 inline-block rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-black">
          🃏 Go to Drill →
        </a>
      </div>

      {sections.map((s, si) => (
        <section key={s.title} className="card p-4">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{s.title}</h2>
          <ol className="space-y-2">
            {s.questions.map((q, i) => (
              <li key={i} className="flex gap-2 text-[13px] leading-snug text-neutral-200">
                <span className="shrink-0 font-mono text-neutral-500">{offsets[si] + i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
