import { useEffect, useRef, useState } from "react";
import { load, save } from "../../lib/storage";
import { recordPractice } from "../../lib/progress";
import { confidentWrong } from "../../lib/karne";

// Leak Card — once per launch: personal if-then plan + 90s cue-detection drill.
// Content is the book's root rule (sentences 1+2) or the C12 cover rule; no invented GTO.
// The cue drill is objective: pot/stack math + one classification question (the book's rule).
// The day's card follows the #1 leak: if the top confident-but-wrong concept is
// ICM/cover, show the cover card; otherwise the bloated-pot card.
const KEY = "leakcard:date";

type Variant = "pot" | "cover";

function todaysVariant(): Variant {
  const top = confidentWrong()[0]?.kavram || "";
  return /icm|cover/i.test(top) ? "cover" : "pot";
}

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
  const [variant] = useState<Variant>(() => todaysVariant());
  const boxRef = useRef<HTMLDivElement>(null);

  // When the dialog opens / the view changes, move focus to the first button.
  useEffect(() => {
    if (view === "hidden") return;
    boxRef.current?.querySelector<HTMLElement>("button")?.focus();
  }, [view]);

  if (view === "hidden") return null;

  const done = () => {
    save(KEY, today());
    recordPractice();
    setView("hidden");
  };

  return (
    <div
      ref={boxRef}
      role="dialog"
      aria-modal="true"
      aria-label="Card of the day"
      onKeyDown={(e) => {
        // Simple focus trap: Tab cycles between the first/last element.
        if (e.key !== "Tab") return;
        const els = boxRef.current?.querySelectorAll<HTMLElement>("button, input, textarea, a[href]");
        if (!els || els.length === 0) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }}
      className="fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur"
    >
      <div className="mx-auto flex h-full w-full max-w-md flex-col">
        {view === "card" ? (
          variant === "cover" ? (
            <CoverCardView onDrill={() => setView("drill")} onDone={done} />
          ) : (
            <CardView onDrill={() => setView("drill")} onDone={done} />
          )
        ) : variant === "cover" ? (
          <CoverDrillView onDone={done} />
        ) : (
          <DrillView onDone={done} />
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

// Cover card (C12): if-then + classification cue. The book's cue: "before folding to a
// jam: am I covered? No → the call is much wider." No new doctrine.
function CoverCardView({ onDrill, onDone }: { onDrill: () => void; onDone: () => void }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 p-6">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-accent">Card of the day</div>
      <div className="card border-l-4 border-accent p-6">
        <p className="text-lg leading-relaxed">
          <b className="text-accent">IF</b> I'm about to press fold to a jam,
          <br />
          <b className="text-accent">THEN</b> I classify first: <b>does it cover me, or do I cover
          it?</b> Not covered → <b>the call is much wider.</b>
        </p>
      </div>
      <p className="text-center text-[11px] text-neutral-600">
        The book (C12): an uncovered range is never tighter than a covered one — even if you lose, you don't bust.
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

interface CoverSpot {
  heroBb: number;
  jammerBb: number;
  covered: boolean; // the jammer's stack covers yours → losing means bust
}

function genCoverSpot(): CoverSpot {
  const heroBb = 12 + Math.floor(Math.random() * 60);
  const delta = 3 + Math.floor(Math.random() * 40);
  const jammerBb = Math.random() < 0.5 ? heroBb + delta : Math.max(3, heroBb - delta);
  return { heroBb, jammerBb, covered: jammerBb >= heroBb };
}

// Cover cue drill — objective classification: two stack sizes, one question.
function CoverDrillView({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [spot, setSpot] = useState<CoverSpot>(() => genCoverSpot());
  const [ans, setAns] = useState<boolean | null>(null);
  const [ok, setOk] = useState(0);
  const correct = ans === spot.covered;

  const done = i >= N;

  function answer(covered: boolean) {
    setAns(covered);
    if (covered === spot.covered) setOk((x) => x + 1);
  }
  function next() {
    if (i + 1 >= N) {
      setI(N);
      return;
    }
    setI((x) => x + 1);
    setSpot(genCoverSpot());
    setAns(null);
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-5xl">🎯</div>
        <p className="text-lg text-neutral-100">
          {ok}/{N} correct
        </p>
        <p className="text-sm text-neutral-500">
          Before folding to a jam: am I covered? No → the call is much wider.
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
            You {spot.heroBb}bb
          </span>
          <span className="text-sm text-neutral-400">jammer {spot.jammerBb}bb</span>
        </div>
        <div className="mt-3 text-sm text-neutral-400">Bubble. The jam is on you.</div>
      </div>

      {ans === null ? (
        <div>
          <div className="mb-2 text-center text-[15px] font-medium">Classify: this jam…</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => answer(true)} className="btn-ghost py-4 text-base">Covers me</button>
            <button onClick={() => answer(false)} className="btn-ghost py-4 text-base">I cover it</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (correct ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300")
            }
          >
            {spot.covered
              ? "You're covered — losing means bust. The call tightens hard."
              : "You're not covered — even if you lose, you don't bust. The call is much wider than you think."}
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= N ? "Finish" : "Next →"}
          </button>
        </div>
      )}

      <button onClick={onDone} className="btn-ghost mt-auto w-full py-3">
        skip
      </button>
    </div>
  );
}

function DrillView({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [spot, setSpot] = useState<Spot>(() => genSpot());
  const [step, setStep] = useState<"pot" | "class" | "fb">("pot");
  const [potAns, setPotAns] = useState<boolean | null>(null);
  const [classAns, setClassAns] = useState<boolean | null>(null);
  const [ok, setOk] = useState(0);
  const potCorrect = potAns === spot.bloated;
  const classCorrect = classAns === spot.bloated;
  const bothOk = potCorrect && classCorrect;

  const done = i >= N;

  function answerPot(b: boolean) {
    setPotAns(b);
    setStep("class");
  }
  function answerClass(bluffCatcher: boolean) {
    // the book's rule: bloated → bluff-catcher; otherwise → value/showdown
    setClassAns(bluffCatcher);
    if (potCorrect && bluffCatcher === spot.bloated) setOk((x) => x + 1);
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
    setClassAns(null);
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
              (bothOk
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300")
            }
          >
            <div>
              {spot.bloated ? "Bloated pot → one pair is a BLUFF-CATCHER." : "Not bloated → one pair is still value/showdown."}
            </div>
            {!bothOk && (
              <div className="mt-1 font-normal opacity-90">
                {potCorrect
                  ? `Your pot read was right, the classification wrong: ${spot.bloated ? "bluff-catcher" : "value/showdown"}.`
                  : classCorrect
                    ? "Your classification was right, the pot read was wrong."
                    : "Both the pot read and the classification were wrong."}
              </div>
            )}
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= N ? "Finish" : "Next →"}
          </button>
        </div>
      )}

      <button onClick={onDone} className="btn-ghost mt-auto w-full py-3">
        skip
      </button>
    </div>
  );
}

