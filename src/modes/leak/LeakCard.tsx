import { useState } from "react";
import { load, save } from "../../lib/storage";
import { recordPractice } from "../../lib/progress";

// Leak Card — once per launch: personal if-then plan + 90s cue-detection drill.
// Content is the book's root rule (sentences 1+2); no invented GTO. The cue drill is objective:
// "is the pot bloated?" (pot/stack math) + one-pair class (the book's rule).
const KEY = "leakcard:date";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function seenToday(): boolean {
  return load<string>(KEY, "") === today();
}

interface Spot {
  potBb: number;
  behindBb: number;
  threeBet: boolean;
  bloated: boolean;
}

function genSpot(): Spot {
  const threeBet = Math.random() < 0.45;
  const potBb = 4 + Math.floor(Math.random() * 60);
  const behindBb = 8 + Math.floor(Math.random() * 90);
  const share = potBb / (potBb + behindBb);
  const bloated = threeBet || share >= 0.4;
  return { potBb, behindBb, threeBet, bloated };
}

export function LeakCard() {
  const [view, setView] = useState<"card" | "drill" | "hidden">(seenToday() ? "hidden" : "card");
  if (view === "hidden") return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur">
      <div className="mx-auto flex h-full w-full max-w-md flex-col">
        {view === "card" ? (
          <CardView onDrill={() => setView("drill")} onDone={() => { save(KEY, today()); recordPractice(); setView("hidden"); }} />
        ) : (
          <DrillView onDone={() => { save(KEY, today()); recordPractice(); setView("hidden"); }} />
        )}
      </div>
    </div>
  );
}

function CardView({ onDrill, onDone }: { onDrill: () => void; onDone: () => void }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 p-6">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-accent">Card of the day</div>
      <div className="card border-l-4 border-accent p-6">
        <p className="text-lg leading-relaxed">
          <b className="text-accent">IF</b> the pot is bloated (a 3-bet+ pot or ~40% of my stack in the middle){" "}
          <b className="text-accent">AND</b> I hold one pair,
          <br />
          <b className="text-accent">THEN</b> I tell myself <b>"bluff-catcher"</b>: check/call or fold —{" "}
          <b>never a value raise.</b>
        </p>
      </div>
      <p className="text-center text-[11px] text-neutral-600">
        The book's definition: bloated = 3-bet+ pot. “~40% of stack in the middle” is a practical heuristic (beyond the book).
      </p>
      <p className="text-center text-sm text-neutral-500">
        Read it out loud once. At the table this sentence will fire on its own.
      </p>
      <div className="flex flex-col gap-2">
        <button onClick={onDone} className="btn-accent w-full py-3 text-base">
          Rehearsed ✓
        </button>
        <button onClick={onDrill} className="btn-ghost w-full py-3">
          ⏱ 90s cue drill →
        </button>
      </div>
    </div>
  );
}

const N = 12;

function DrillView({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [spot, setSpot] = useState<Spot>(() => genSpot());
  const [step, setStep] = useState<"pot" | "class" | "fb">("pot");
  const [potAns, setPotAns] = useState<boolean | null>(null);
  const [ok, setOk] = useState(0);
  const potCorrect = potAns === spot.bloated;

  const done = i >= N;

  function answerPot(b: boolean) {
    setPotAns(b);
    setStep("class");
  }
  function answerClass(bluffCatcher: boolean) {
    // the book's rule: bloated → bluff-catcher; otherwise → value/showdown
    const classCorrect = bluffCatcher === spot.bloated;
    const both = potCorrect && classCorrect;
    if (both) setOk((x) => x + 1);
    setStep("fb");
  }
  function next() {
    if (i + 1 >= N) {
      setI(N);
      return;
    }
    setI((x) => x + 1);
    setSpot(genSpot());
    setPotAns(null);
    setStep("pot");
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-5xl">🎯</div>
        <p className="text-lg text-neutral-100">
          {ok}/{N} correct
        </p>
        <p className="text-sm text-neutral-500">
          One pair in a bloated pot = bluff-catcher. Take this reflex to the table.
        </p>
        <button onClick={onDone} className="btn-accent px-6 py-3">
          Finish ✓
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-5 p-6">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">Cue drill</span>
        <span className="text-neutral-400">{i + 1} / {N}</span>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
            Pot {spot.potBb}bb
          </span>
          <span className="text-sm text-neutral-400">{spot.behindBb}bb behind</span>
        </div>
        {spot.threeBet && (
          <div className="mt-2 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300">
            3-bet pot
          </div>
        )}
        <div className="mt-3 text-sm text-neutral-400">Your hand: one pair (overpair)</div>
      </div>

      {step === "pot" && (
        <div>
          <div className="mb-2 text-center text-[15px] font-medium">Is the pot bloated?</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => answerPot(true)} className="btn-ghost py-4 text-base">Yes, bloated</button>
            <button onClick={() => answerPot(false)} className="btn-ghost py-4 text-base">No</button>
          </div>
        </div>
      )}

      {step === "class" && (
        <div>
          <div className="mb-2 text-center text-[15px] font-medium">What class is your one pair?</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => answerClass(true)} className="btn-ghost py-4 text-base">Bluff-catcher</button>
            <button onClick={() => answerClass(false)} className="btn-ghost py-4 text-base">Value</button>
          </div>
        </div>
      )}

      {step === "fb" && (
        <div className="flex flex-col gap-3">
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (potCorrect
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300")
            }
          >
            {spot.bloated ? "Bloated pot → one pair is a BLUFF-CATCHER." : "Not bloated → one pair is still value/showdown."}
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= N ? "Finish" : "Next →"}
          </button>
        </div>
      )}

      <button onClick={onDone} className="mt-auto text-center text-xs text-neutral-600">
        skip
      </button>
    </div>
  );
}

