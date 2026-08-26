import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { LessonList } from "./modes/lessons/LessonList";
import { LessonPlayer } from "./modes/lessons/LessonPlayer";
import { Review } from "./modes/review/Review";
import { ChapterView, NEW_CHAPTERS } from "./modes/reference/ChapterView";
import { LeakCard } from "./modes/leak/LeakCard";
import { BustoutAutopsy } from "./modes/autopsy/BustoutAutopsy";
import { DecisionJournal } from "./modes/cornerman/DecisionJournal";

// Heavy tabs are lazy-loaded → smaller initial bundle.
const Quiz = lazy(() => import("./modes/quiz/Quiz").then((m) => ({ default: m.Quiz })));
const Drill = lazy(() => import("./modes/drill/Drill").then((m) => ({ default: m.Drill })));
const DepthContrast = lazy(() =>
  import("./modes/drill/DepthContrast").then((m) => ({ default: m.DepthContrast })),
);
const Simulator = lazy(() => import("./modes/sim/Simulator").then((m) => ({ default: m.Simulator })));
const Progress = lazy(() => import("./modes/progress/Progress").then((m) => ({ default: m.Progress })));
const QuickReference = lazy(() =>
  import("./modes/reference/QuickReference").then((m) => ({ default: m.QuickReference })),
);
const Sentences = lazy(() => import("./modes/cards/Sentences").then((m) => ({ default: m.Sentences })));
const RangeAtlas = lazy(() => import("./modes/ranges/RangeAtlas").then((m) => ({ default: m.RangeAtlas })));
const EquityIntuition = lazy(() =>
  import("./modes/reference/EquityIntuition").then((m) => ({ default: m.EquityIntuition })),
);
const BetTypes = lazy(() => import("./modes/reference/BetTypes").then((m) => ({ default: m.BetTypes })));
const QuestionBank = lazy(() =>
  import("./modes/reference/QuestionBank").then((m) => ({ default: m.QuestionBank })),
);
const IcmCard = lazy(() => import("./modes/reference/IcmCard").then((m) => ({ default: m.IcmCard })));

type Tab = "ders" | "quiz" | "drill" | "ilerleme" | "referans";

function useHash(): string {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash;
}

function nav(to: string) {
  window.location.hash = to;
}

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "ders", label: "Lessons", icon: "📚" },
  { id: "quiz", label: "Quiz", icon: "🎯" },
  { id: "drill", label: "Drill", icon: "🃏" },
  { id: "ilerleme", label: "Progress", icon: "📊" },
  { id: "referans", label: "Reference", icon: "⚡" },
];

function TabFallback() {
  return (
    <div className="flex h-full items-center justify-center text-sm text-neutral-500">
      Loading…
    </div>
  );
}

export default function App() {
  const hash = useHash();
  const segs = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  // an unknown hash must not show a blank screen → default to "ders"
  const known = new Set<Tab>(["ders", "quiz", "drill", "ilerleme", "referans"]);
  const tab: Tab = known.has(segs[0] as Tab) ? (segs[0] as Tab) : "ders";
  const lessonId = segs[1];

  const mainRef = useRef<HTMLElement>(null);
  const [storageFail, setStorageFail] = useState(false);

  // Reset scroll when the tab/section changes (not on in-lesson slide changes).
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [segs[0], segs[1]]);

  // storage.ts dispatches this when a save fails → one-time warning banner.
  useEffect(() => {
    const on = () => setStorageFail(true);
    window.addEventListener("ept:storage-fail", on, { once: true });
    return () => window.removeEventListener("ept:storage-fail", on);
  }, []);

  return (
    <div className="mx-auto flex h-[100dvh] max-w-md flex-col bg-surface-0 pt-[env(safe-area-inset-top)]">
      <LeakCard />
      {storageFail && (
        <div className="flex items-center justify-between gap-3 bg-red-900/80 px-4 py-2 text-[13px] text-red-100">
          <span>Can't save — storage full/restricted</span>
          <button aria-label="Dismiss" className="px-1 font-semibold" onClick={() => setStorageFail(false)}>
            ✕
          </button>
        </div>
      )}
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        <Suspense fallback={<TabFallback />}>
        {tab === "ders" &&
          (lessonId === "otopsi" ? (
            <BustoutAutopsy onBack={() => nav("#/ders")} />
          ) : lessonId ? (
            <LessonPlayer moduleId={lessonId} onBack={() => nav("#/ders")} />
          ) : (
            <LessonList onOpen={(id) => nav("#/ders/" + id)} />
          ))}
        {tab === "quiz" && <Quiz />}
        {tab === "drill" && (
          <>
            <div className="flex gap-2 px-4 pt-4">
              <button
                onClick={() => nav("#/drill")}
                className={
                  "btn px-3 py-2 text-sm " +
                  (segs[1] !== "masa" && segs[1] !== "derinlik"
                    ? "bg-accent-soft text-accent border border-accent"
                    : "bg-surface-2 text-neutral-400 border border-surface-3")
                }
              >
                🃏 Question drill
              </button>
              <button
                onClick={() => nav("#/drill/masa")}
                className={
                  "btn px-3 py-2 text-sm " +
                  (segs[1] === "masa"
                    ? "bg-accent-soft text-accent border border-accent"
                    : "bg-surface-2 text-neutral-400 border border-surface-3")
                }
              >
                🎲 Table (hand sim)
              </button>
              <button
                onClick={() => nav("#/drill/derinlik")}
                className={
                  "btn px-3 py-2 text-sm " +
                  (segs[1] === "derinlik"
                    ? "bg-accent-soft text-accent border border-accent"
                    : "bg-surface-2 text-neutral-400 border border-surface-3")
                }
              >
                🪜 Depth
              </button>
            </div>
            {segs[1] === "masa" ? <Simulator /> : segs[1] === "derinlik" ? <DepthContrast /> : <Drill />}
          </>
        )}
        {tab === "ilerleme" &&
          (segs[1] === "tekrar" ? (
            <Review onDone={() => nav("#/ilerleme")} />
          ) : segs[1] === "gunluk" ? (
            <DecisionJournal onDone={() => nav("#/ilerleme")} />
          ) : (
            <Progress
              onReview={() => nav("#/ilerleme/tekrar")}
              onJournal={() => nav("#/ilerleme/gunluk")}
            />
          ))}
        {tab === "referans" &&
          (segs[1] === "cumleler" ? (
            <Sentences onDone={() => nav("#/referans")} />
          ) : segs[1] === "araliklar" ? (
            <RangeAtlas onDone={() => nav("#/referans")} />
          ) : segs[1] === "equity" ? (
            <EquityIntuition onDone={() => nav("#/referans")} />
          ) : segs[1] === "bahis" ? (
            <BetTypes onDone={() => nav("#/referans")} />
          ) : segs[1] === "sorubankasi" ? (
            <QuestionBank onDone={() => nav("#/referans")} />
          ) : segs[1] === "icmkart" ? (
            <IcmCard onDone={() => nav("#/referans")} />
          ) : segs[1] === "bolum" && segs[2] ? (
            <ChapterView title={"Chapter " + segs[2]} onDone={() => nav("#/referans/bolum")} />
          ) : segs[1] === "bolum" ? (
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between text-sm">
                <button onClick={() => nav("#/referans")} className="text-neutral-400">
                  ← Reference
                </button>
                <span className="font-semibold text-neutral-100">📖 New Chapters (v5)</span>
                <span className="w-16" />
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-400">
                Tournament-winning chapters — straight from the book. Check the table on your phone during breaks.
              </p>
              {NEW_CHAPTERS.map((c) => (
                <button
                  key={c.n}
                  onClick={() => nav("#/referans/bolum/" + c.n)}
                  className="card flex items-center justify-between p-3 text-left"
                >
                  <span className="text-[14px] text-neutral-100">
                    <span className="font-mono text-neutral-500">C{c.n}</span> · {c.short}
                  </span>
                  <span className="text-accent">→</span>
                </button>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2 p-4 pb-0">
                <button
                  onClick={() => nav("#/referans/araliklar")}
                  className="btn-accent py-2.5"
                >
                  🗂️ Range Guide →
                </button>
                <button
                  onClick={() => nav("#/referans/cumleler")}
                  className="btn-ghost py-2.5"
                >
                  🧠 15 Sentences (memorize) →
                </button>
                <button
                  onClick={() => nav("#/referans/equity")}
                  className="btn-ghost col-span-2 py-2.5"
                >
                  📐 Equity Intuition (bonus · outside the book) →
                </button>
                <button
                  onClick={() => nav("#/referans/bahis")}
                  className="btn-ghost col-span-2 py-2.5"
                >
                  🎯 Bet Types (value/bluff/thin/overbet) →
                </button>
                <button
                  onClick={() => nav("#/referans/sorubankasi")}
                  className="btn-ghost col-span-2 py-2.5"
                >
                  📝 Question Bank (Chapter 10 · 37 questions) →
                </button>
                <button
                  onClick={() => nav("#/referans/icmkart")}
                  className="btn-ghost col-span-2 py-2.5"
                >
                  🧮 My ICM Card (ladder + &lt;15bb jam · Chapter 12) →
                </button>
                <button
                  onClick={() => nav("#/referans/bolum")}
                  className="btn-accent col-span-2 py-2.5"
                >
                  📖 New Chapters v5 (ICM · River · Multiway…) →
                </button>
              </div>
              <QuickReference />
            </>
          ))}
        </Suspense>
      </main>

      <nav
        aria-label="Main tabs"
        className="grid grid-cols-5 border-t border-surface-3 bg-surface-1 pb-[env(safe-area-inset-bottom)]"
      >
        {TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              aria-current={active ? "page" : undefined}
              onClick={() => nav("#/" + t.id)}
              className={
                "flex flex-col items-center gap-0.5 py-2.5 text-xs transition " +
                (active ? "text-accent" : "text-neutral-500")
              }
            >
              <span className="text-lg">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
