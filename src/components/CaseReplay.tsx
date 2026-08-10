import { useState } from "react";
import { CardRow } from "./Cards";

// Case replayer: the board is built street by street, with a book-based note per street.
// Unknown cards (not in the book) are shown face-down as "??" — nothing is invented.
export interface ReplayStreet {
  name: string; // "Preflop" | "Flop" | "Turn" | "River"
  add?: string; // card(s) dealt on this street: "2c 4d 5s" | "??" | "6h"
  note: string; // book-based explanation
}
export interface ReplayData {
  hero: string;
  villain?: string;
  heroLabel?: string;
  villainLabel?: string;
  streets: ReplayStreet[];
}

export function CaseReplay({ data }: { data: ReplayData }) {
  const [step, setStep] = useState(0);
  const board = data.streets
    .slice(0, step + 1)
    .map((s) => s.add)
    .filter(Boolean)
    .join(" ");
  const cur = data.streets[step];

  return (
    <div className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-100">🎬 Case replay</span>
        <span className="text-xs text-neutral-500">
          {step + 1}/{data.streets.length} · {cur.name}
        </span>
      </div>

      {board ? (
        <CardRow spec={board} size="md" label="Board" texture />
      ) : (
        <div className="text-xs uppercase tracking-wide text-neutral-600">Board (preflop)</div>
      )}

      <div className="mt-3 flex flex-wrap gap-4">
        <CardRow spec={data.hero} size="sm" label={data.heroLabel ?? "You"} />
        {data.villain && <CardRow spec={data.villain} size="sm" label={data.villainLabel ?? "Villain"} />}
      </div>

      <p className="mt-3 rounded-lg bg-surface-2 px-3 py-2 text-sm leading-relaxed text-neutral-200">
        {cur.note}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="btn-ghost px-3 py-1.5 text-sm"
        >
          ← Back
        </button>
        <button
          onClick={() => setStep((s) => Math.min(data.streets.length - 1, s + 1))}
          disabled={step === data.streets.length - 1}
          className="btn-accent px-3 py-1.5 text-sm"
        >
          Next street →
        </button>
      </div>
    </div>
  );
}
