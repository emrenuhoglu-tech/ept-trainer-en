import { useEffect, useMemo, useState } from "react";
import { SCENARIOS, type Scenario } from "./scenarios";
import { recordResult, dueEntries, confidentWrong } from "../../lib/karne";
import { recordQuiz } from "../../lib/progress";
import { load, save } from "../../lib/storage";

const SHOT_SECS = 20; // table-mode decision clock
// Table-mode atmosphere frames — stack depth is INTENTIONALLY absent (each scenario states its
// own depth). ICM is INTENTIONALLY absent too: a "bubble/final table/chip leader" frame stuck
// randomly to a chipEV-keyed question (Chapter 5/12) and contradicted the book — keep clock/pressure only.
const FRAMES = [
  "Decision clock running · be precise",
  "Live table · all eyes on you",
  "Standard table · antes in",
  "Tournament day · focus",
];

// Scenario quiz: decision questions from every chapter of the book.
// + Confidence (pre-reveal) + hypercorrection (sure-but-wrong → same concept in a new guise)
// + variation guard: a scenario seen twice gets pushed to the back (blocks surface memorization).
const SEEN_KEY = "scenario:seen";
const CONF = [
  { v: 0.6, label: "60%" },
  { v: 0.8, label: "80%" },
  { v: 0.95, label: "95%" },
];

type SeenMap = Record<string, number>;

// Concepts due + sure-but-wrong in the scorecard (let the spaced-review signal reach quiz selection).
function dueKavramSet(): Set<string> {
  const set = new Set<string>();
  for (const e of dueEntries()) set.add(e.kavram);
  for (const e of confidentWrong()) set.add(e.kavram);
  return set;
}

function pickScenario(biasKavram?: string, excludeQ?: string): Scenario {
  const seen = load<SeenMap>(SEEN_KEY, {});
  const count = (s: Scenario) => seen[s.q] ?? 0;
  let pool = biasKavram ? SCENARIOS.filter((s) => s.kavram === biasKavram) : SCENARIOS;
  if (!pool.length) pool = SCENARIOS;
  // The Range Quiz weak-spot adaptation (Quiz.tsx 55% bias) ported to the scenario side:
  // with 55% probability narrow the pool to due/sure-but-wrong concepts (full pool if empty).
  if (!biasKavram && Math.random() < 0.55) {
    const dueSet = dueKavramSet();
    const narrowed = pool.filter((s) => dueSet.has(s.kavram));
    if (narrowed.length) pool = narrowed;
  }
  // Don't re-ask the exact same question immediately (produced a fake 'correct' on single-scenario concepts).
  if (excludeQ) {
    const ex = pool.filter((s) => s.q !== excludeQ);
    if (ex.length) pool = ex;
  }
  const min = Math.min(...pool.map(count));
  const fresh = pool.filter((s) => count(s) === min);
  return fresh[Math.floor(Math.random() * fresh.length)];
}

function markSeen(q: string) {
  const seen = load<SeenMap>(SEEN_KEY, {});
  seen[q] = (seen[q] ?? 0) + 1;
  save(SEEN_KEY, seen);
}

export function ScenarioQuiz() {
  const [s, setS] = useState<Scenario>(() => pickScenario());
  const [chosen, setChosen] = useState<number | null>(null);
  const [conf, setConf] = useState(0.8);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const [table, setTable] = useState(false);
  const [left, setLeft] = useState(SHOT_SECS);
  const [frameI, setFrameI] = useState(0);

  const answered = chosen !== null;
  const correct = chosen === s.correct;
  const timedOut = answered && chosen === -1;
  // A timeout is NOT counted as sure-but-wrong (the user timed out without declaring confidence).
  const confWrong = answered && !correct && conf >= 0.8 && !timedOut;
  // If there's no other scenario in this concept, hypercorrection would re-ask the same question → route to Drill.
  const soloConcept = useMemo(() => SCENARIOS.filter((x) => x.kavram === s.kavram).length <= 1, [s]);
  const overseen = useMemo(() => {
    const seen = load<SeenMap>(SEEN_KEY, {});
    return SCENARIOS.every((x) => (seen[x.q] ?? 0) >= 2);
  }, [s]);

  // Table-mode shot clock: time runs out → decision = wrong (the clock runs in a tournament).
  useEffect(() => {
    if (!table || answered) return;
    setLeft(SHOT_SECS);
    const id = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          clearInterval(id);
          answer(-1);
          return 0;
        }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, s, answered]);

  function answer(idx: number) {
    if (answered) return;
    setChosen(idx);
    const ok = idx === s.correct;
    markSeen(s.q);
    setScore((v) => ({ ok: v.ok + (ok ? 1 : 0), total: v.total + 1 }));
    recordQuiz(ok);
    recordResult({
      kavram: s.kavram,
      soru_ozeti: s.q,
      sonuc: ok ? "correct" : "wrong",
      not: s.explain,
      // A timeout (idx=-1) = failure to decide; don't produce overconfidence data (omit confidence).
      ...(idx === -1 ? {} : { confidence: conf }),
    });
  }

  function again() {
    // if sure-but-wrong, re-ask the same concept in a different guise; exclude the same question (hypercorrection)
    const next = pickScenario(confWrong ? s.kavram : undefined, s.q);
    setChosen(null);
    setS(next);
    setFrameI((x) => (x + 1) % FRAMES.length);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{s.source}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTable((t) => !t)}
            className={
              "rounded-full px-2.5 py-1 text-xs " +
              (table ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
            }
          >
            ⏱ Table
          </button>
          <span className="text-neutral-400">
            {score.ok}/{score.total}
          </span>
        </div>
      </div>

      {table && !answered && (
        <div className="flex items-center gap-2">
          <span className={"text-xs font-semibold " + (left <= 5 ? "text-red-400" : "text-accent")}>
            ⏱ {left}s
          </span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-3">
            <div
              className={"h-full rounded-full " + (left <= 5 ? "bg-red-400" : "bg-accent")}
              style={{ width: `${(left / SHOT_SECS) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="card p-4">
        {table && (
          <div className="mb-2 text-xs font-medium text-accent">🎰 {FRAMES[frameI]}</div>
        )}
        <p className="text-[15px] leading-relaxed text-neutral-100">{s.q}</p>
      </div>

      {!answered && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">How sure are you?</span>
          {CONF.map((c) => (
            <button
              key={c.v}
              onClick={() => setConf(c.v)}
              className={
                "rounded-full px-2.5 py-1 text-xs " +
                (conf === c.v ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

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

      {answered && (
        <>
          {timedOut && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              ⏱ Time's up — not deciding is also a decision, and at the table it's a losing one.
            </div>
          )}
          {confWrong && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              ⚠ <b>You were {Math.round(conf * 100)}% sure</b> — and wrong. This is the class of mistake you'd never
              question at the table — I'll re-ask the same concept in a different guise right away.
            </div>
          )}
          <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {correct ? "Correct. " : "Wrong. "}
            {s.explain}
          </div>
          {overseen && (
            <div className="rounded-xl bg-accent-soft px-4 py-2 text-xs text-accent">
              You've seen every scenario at least twice — surface memorization is now a risk. Work these concepts in
              <b> Drill</b> in a fresh guise (it generates new spots).
            </div>
          )}
          {confWrong && soloConcept ? (
            <button onClick={() => (window.location.hash = "#/drill")} className="btn-accent py-3 text-base">
              Work this concept in Drill →
            </button>
          ) : (
            <button onClick={again} className="btn-accent py-3 text-base">
              {confWrong ? "Same concept, new spot →" : "Next question →"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
