import { useState } from "react";
import { recordPractice } from "../../lib/progress";

// Depth-contrast pairs: SAME spot, stack depth FLIPS the correct action.
// Content passed adversarial verify (poker correctness + book anchor). Numbers are illustrative.
interface Leg {
  bb: string; // "25bb"
  tag: string; // "shallow" / "deep"
  options: [string, string];
  correct: number;
  action: string; // short label in the contrast row
}
interface DepthPair {
  spot: string;
  shallow: Leg;
  deep: Leg;
  flip: string;
  chapter: number; // #/referans/bolum/N
}

const PAIRS: DepthPair[] = [
  {
    spot: "Soft field, no ICM pressure. Facing a marginal +EV flip.",
    shallow: { bb: "25bb", tag: "shallow", options: ["Fold", "Take it"], correct: 1, action: "TAKE" },
    deep: { bb: "80bb", tag: "deep", options: ["Fold", "Take it"], correct: 0, action: "FOLD" },
    flip: "Depth is edge-realize room (C24.2): deep, don't enter marginal variance (fold); shallow, no outplay room → take the +EV.",
    chapter: 24,
  },
  {
    spot: "A5s, CO. First one in on a folded table.",
    shallow: { bb: "12bb", tag: "shallow", options: ["Min-raise open", "Jam"], correct: 1, action: "JAM" },
    deep: { bb: "60bb", tag: "deep", options: ["Min-raise open", "Jam"], correct: 0, action: "OPEN" },
    flip: "Shallow, jam (fold equity + a short stack can't realize postflop); deep, open and play postflop. <15bb first-in = push/fold zone (C12).",
    chapter: 12,
  },
  {
    spot: "55, BTN. UTG (early) opens 2.2bb, folds to you.",
    shallow: { bb: "15bb", tag: "shallow", options: ["Call (set-mine)", "Jam or fold"], correct: 1, action: "JAM/FOLD" },
    deep: { bb: "80bb", tag: "deep", options: ["Call (set-mine)", "Jam or fold"], correct: 0, action: "CALL" },
    flip: "Small pairs need implied odds: deep, set-mine call; shallow, no implied odds → jam/fold (depth filter, C24.2).",
    chapter: 24,
  },
];

type Phase = "shallow" | "deep" | "contrast";

export function DepthContrast() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("shallow");
  const [sa, setSa] = useState<number | null>(null);
  const [da, setDa] = useState<number | null>(null);
  const p = PAIRS[i % PAIRS.length];

  function pick(idx: number) {
    if (phase === "shallow") {
      setSa(idx);
      setPhase("deep");
    } else if (phase === "deep") {
      setDa(idx);
      setPhase("contrast");
      recordPractice();
    }
  }
  function next() {
    setI((x) => (x + 1) % PAIRS.length);
    setPhase("shallow");
    setSa(null);
    setDa(null);
  }

  const leg = phase === "deep" ? p.deep : p.shallow;
  const bothOk = sa === p.shallow.correct && da === p.deep.correct;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">🪜 Depth contrast</span>
        <span className="text-neutral-400">{(i % PAIRS.length) + 1} / {PAIRS.length}</span>
      </div>

      <div className="card p-4">
        <p className="text-[15px] leading-relaxed text-neutral-100">{p.spot}</p>
      </div>

      {phase !== "contrast" ? (
        <>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
              {leg.bb} · {leg.tag}
            </span>
            {phase === "deep" && (
              <span className="text-xs text-neutral-500">Same spot, now deep. Does the answer change?</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            {leg.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => pick(idx)}
                className="btn-ghost justify-start py-3 text-left text-[15px]"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-2">
            <ContrastCol leg={p.shallow} chosen={sa} />
            <ContrastCol leg={p.deep} chosen={da} />
          </div>
          <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-3 text-sm font-medium text-accent">
            🔀 Depth flipped the answer: {p.shallow.tag} → <b>{p.shallow.action}</b>, {p.deep.tag} →{" "}
            <b>{p.deep.action}</b>.
          </div>
          <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {p.flip}
          </div>
          <div
            className={
              "rounded-xl px-4 py-2 text-sm font-medium " +
              (bothOk ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300")
            }
          >
            {bothOk ? "You got both ✓" : "Depth caught you — look again."}
          </div>
          <a
            href={`#/referans/bolum/${p.chapter}`}
            className="btn-ghost w-full justify-start py-2.5 text-sm"
          >
            📖 Chapter {p.chapter} — read it in the book →
          </a>
          <button onClick={next} className="btn-accent py-3 text-base">
            Next pair →
          </button>
        </>
      )}
    </div>
  );
}

function ContrastCol({ leg, chosen }: { leg: Leg; chosen: number | null }) {
  const ok = chosen === leg.correct;
  return (
    <div className="card p-3">
      <div className="text-xs font-semibold text-accent">{leg.bb} · {leg.tag}</div>
      <div className="mt-1 text-[15px] font-bold text-neutral-100">{leg.action}</div>
      <div className={"mt-1 text-xs " + (ok ? "text-emerald-400" : "text-red-400")}>
        {ok ? "✓ got it" : "✗ yours: " + (chosen != null ? leg.options[chosen] : "—")}
      </div>
    </div>
  );
}
