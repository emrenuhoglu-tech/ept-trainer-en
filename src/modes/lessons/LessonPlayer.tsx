import { useEffect, useMemo, useRef, useState } from "react";
import { moduleById } from "../../data/modules";
import type { Slide, SlideTableRef } from "../../data/modules";
import { tableFromSection } from "../../content/curriculum";
import { getSpeaker, prefetchHd } from "../../lib/speech";
import { load, save } from "../../lib/storage";
import { DataTable } from "../../components/DataTable";
import { SlideVisuals } from "../../components/SlideVisual";
import { RangeTable } from "./RangeTable";
import { ColdOpen, MODULE_PRETEST } from "./ColdOpen";

const speaker = getSpeaker();
const RATES = [0.8, 1.0, 1.25, 1.5];
const ALL = 999; // pseudo-counter for "everything revealed"

// Split narration into sentences (NO lookbehind — broad compatibility). Hyphens/digits
// in poker terms are not sentence ends; only . ! ? split.
function sentencesOf(text: string): string[] {
  return (text.match(/[^.!?]+[.!?]*/g) || [text]).map((s) => s.trim()).filter(Boolean);
}

// How many "focus" points a slide has: each bullet + visual + table + matrix + rule.
function focusCount(s: Slide): number {
  return (
    (s.bullets?.length ?? 0) +
    (s.visuals?.length ? 1 : 0) +
    (s.table ? 1 : 0) +
    (s.rangeMatrix ? 1 : 0) +
    (s.ruleBox ? 1 : 0)
  );
}

export function LessonPlayer({
  moduleId,
  onBack,
}: {
  moduleId: string;
  onBack: () => void;
}) {
  const mod = useMemo(() => moduleById(moduleId), [moduleId]);
  const [i, setI] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [auto, setAuto] = useState(true);
  const [rate, setRate] = useState(1.0);
  // guided narration state
  const [revealCount, setRevealCount] = useState(ALL); // how many foci are visible (ALL = everything)
  const [activeFocus, setActiveFocus] = useState(-1); // the focus being spoken right now
  const [seg, setSeg] = useState({ i: 0, n: 0 }); // sentence progress
  const [pretest, setPretest] = useState<string | null>(() => {
    const kav = MODULE_PRETEST[moduleId];
    return kav && !load<string[]>("coldopen:done", []).includes(moduleId) ? kav : null;
  });
  const playing = useRef(false);
  const rateRef = useRef(rate);
  const autoRef = useRef(auto);
  const bodyRef = useRef<HTMLDivElement>(null);
  rateRef.current = rate;
  autoRef.current = auto;

  useEffect(() => {
    return () => {
      playing.current = false;
      speaker.stop();
    };
  }, []);

  // Center on screen when the active focus changes (auto-scroll — eye tracking).
  useEffect(() => {
    if (activeFocus < 0 || !bodyRef.current) return;
    const el = bodyRef.current.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeFocus]);

  if (!mod) {
    return (
      <div className="p-4">
        <button className="btn-ghost" onClick={onBack}>
          ← Back
        </button>
        <p className="mt-4 text-neutral-400">Module not found.</p>
      </div>
    );
  }

  if (pretest) {
    return (
      <ColdOpen
        kavram={pretest}
        onStart={() => {
          const done = load<string[]>("coldopen:done", []);
          if (!done.includes(moduleId)) save("coldopen:done", [...done, moduleId]);
          setPretest(null);
        }}
      />
    );
  }

  const slides = mod.slides;
  const slide = slides[i];
  const last = i === slides.length - 1;

  // Focus positions on this slide (in render order).
  const nBul = slide.bullets?.length ?? 0;
  let p = nBul;
  const visualsPos = slide.visuals?.length ? p++ : -1;
  const tablePos = slide.table ? p++ : -1;
  const matrixPos = slide.rangeMatrix ? p++ : -1;
  const rulePos = slide.ruleBox ? p++ : -1;

  const shown = (pos: number) => pos >= 0 && pos < revealCount;
  const isActive = (pos: number) => speaking && pos === activeFocus;

  const markDone = (idx: number) => {
    if (idx !== slides.length - 1) return;
    const done = load<string[]>("lessons:done", []);
    if (!done.includes(mod.id)) save("lessons:done", [...done, mod.id]);
  };

  const stop = () => {
    playing.current = false;
    speaker.stop();
    setSpeaking(false);
    setActiveFocus(-1);
    setRevealCount(ALL); // keep everything visible once stopped
  };

  // Guided playback: speak each sentence, reveal + highlight the matching focus.
  const start = async (from: number) => {
    playing.current = true;
    setSpeaking(true);
    for (let k = from; k < slides.length; k++) {
      if (!playing.current) break;
      setI(k);
      markDone(k);
      const segs = sentencesOf(slides[k].narration);
      const F = focusCount(slides[k]);
      setRevealCount(0);
      setActiveFocus(-1);
      for (let s = 0; s < segs.length; s++) {
        if (!playing.current) break;
        // prefetch the next sentence in the background → gapless flow
        if (segs[s + 1]) void prefetchHd([segs[s + 1]]);
        const tf = F === 0 ? -1 : Math.min(F - 1, Math.floor((s / segs.length) * F));
        setActiveFocus(tf);
        setRevealCount((rc) => Math.max(rc, tf + 1));
        setSeg({ i: s + 1, n: segs.length });
        await speaker.speak(segs[s], rateRef.current);
      }
      setRevealCount(ALL); // slide finished → everything visible
      setActiveFocus(-1);
      if (!playing.current || !autoRef.current) break;
    }
    playing.current = false;
    setSpeaking(false);
    setSeg({ i: 0, n: 0 });
  };

  const go = (n: number) => {
    stop();
    const next = Math.min(Math.max(n, 0), slides.length - 1);
    setI(next);
    setRevealCount(ALL);
    markDone(next);
  };

  const revealCls = (active: boolean) =>
    "reveal-in transition-all duration-300 " +
    (speaking ? (active ? "opacity-100" : "opacity-40") : "opacity-100");

  return (
    <div className="flex min-h-full flex-col">
      {/* header */}
      <div className="flex items-center gap-3 px-4 pt-4">
        <button className="btn-ghost px-3 py-1.5 text-sm" onClick={onBack}>
          ← {mod.id}
        </button>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{mod.title}</div>
          <div className="text-xs text-neutral-500">
            {mod.chapter} · {mod.minutes} min
          </div>
        </div>
      </div>

      {/* slide progress */}
      <div className="flex gap-1 px-4 pt-3">
        {slides.map((_, s) => (
          <div
            key={s}
            className={"h-1 flex-1 rounded-full " + (s <= i ? "bg-accent" : "bg-surface-3")}
          />
        ))}
      </div>

      {/* slide body */}
      <div ref={bodyRef} className="flex-1 space-y-4 px-4 py-5">
        <h2 className="anim-fade text-xl font-bold">{slide.title}</h2>

        {/* playback controls — pinned at the top */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => (speaking ? stop() : start(i))}
            className={speaking ? "btn-ghost" : "btn-accent"}
            disabled={!speaker.supported}
          >
            {speaking ? "⏸ Stop" : "▶ Play"}
          </button>

          <button
            onClick={() => setAuto((a) => !a)}
            className={
              "btn px-3 py-2 text-sm " +
              (auto
                ? "bg-accent-soft text-accent border border-accent"
                : "bg-surface-2 text-neutral-400 border border-surface-3")
            }
            title="Auto-advance slides"
          >
            ⟳ Auto {auto ? "on" : "off"}
          </button>

          <div className="flex overflow-hidden rounded-xl border border-surface-3">
            {RATES.map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={
                  "px-2.5 py-2 text-xs " +
                  (r === rate ? "bg-accent text-black" : "bg-surface-2 text-neutral-400")
                }
              >
                {r}×
              </button>
            ))}
          </div>
        </div>

        {/* live sentence progress bar */}
        {speaking && seg.n > 0 && (
          <div className="flex items-center gap-2">
            <span className="live-pulse text-xs text-accent">● narrating</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-3">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${(seg.i / seg.n) * 100}%` }}
              />
            </div>
          </div>
        )}

        {!speaker.supported && (
          <p className="text-xs text-neutral-500">This browser doesn't support voice narration.</p>
        )}

        {/* bullets — each one a focus */}
        {slide.bullets && (
          <ul className="space-y-2">
            {slide.bullets.map((b, k) =>
              shown(k) ? (
                <li
                  key={k}
                  data-active={isActive(k)}
                  className={
                    "reveal-in flex gap-2 rounded-lg px-2 py-1 text-[15px] leading-relaxed transition-all duration-300 " +
                    (isActive(k)
                      ? "bg-accent-soft ring-1 ring-accent/40"
                      : speaking
                        ? "opacity-40"
                        : "")
                  }
                >
                  <span className={"mt-1 " + (isActive(k) ? "text-accent" : "text-accent/70")}>
                    {isActive(k) ? "▶" : "•"}
                  </span>
                  <span>{b}</span>
                </li>
              ) : null,
            )}
          </ul>
        )}

        {/* visuals */}
        {slide.visuals && shown(visualsPos) && (
          <div
            data-active={isActive(visualsPos)}
            className={
              revealCls(isActive(visualsPos)) +
              (isActive(visualsPos) ? " rounded-xl ring-1 ring-accent/30 -mx-1 px-1 py-1" : "")
            }
          >
            <SlideVisuals items={slide.visuals} />
          </div>
        )}

        {/* table */}
        {slide.table && shown(tablePos) && (
          <div
            data-active={isActive(tablePos)}
            className={revealCls(isActive(tablePos))}
          >
            <TableSlide table={slide.table} />
          </div>
        )}

        {/* interactive range matrix */}
        {slide.rangeMatrix && shown(matrixPos) && (
          <div data-active={isActive(matrixPos)} className={revealCls(isActive(matrixPos))}>
            <RangeTable />
          </div>
        )}

        {/* rule box */}
        {slide.ruleBox && shown(rulePos) && (
          <div
            data-active={isActive(rulePos)}
            className={
              revealCls(isActive(rulePos)) +
              " rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-[15px] font-medium leading-relaxed" +
              (isActive(rulePos) ? " ring-1 ring-accent/50" : "")
            }
          >
            📌 {slide.ruleBox}
          </div>
        )}
      </div>

      {/* bottom nav */}
      <div className="flex items-center justify-between gap-3 px-4 pb-4">
        <button className="btn-ghost" onClick={() => go(i - 1)} disabled={i === 0}>
          ← Previous
        </button>
        <span className="text-xs text-neutral-500">
          {i + 1} / {slides.length}
        </span>
        {last ? (
          <button className="btn-accent" onClick={onBack}>
            Finish ✓
          </button>
        ) : (
          <button className="btn-accent" onClick={() => go(i + 1)}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

function TableSlide({ table }: { table: SlideTableRef }) {
  const parsed = useMemo(
    () => tableFromSection(table.section, table.sub),
    [table.section, table.sub],
  );
  return (
    <div className="space-y-2">
      {parsed ? (
        <DataTable table={parsed} />
      ) : (
        <p className="text-sm text-neutral-500">Couldn't load the table.</p>
      )}
      {table.caption && <p className="text-xs italic text-neutral-500">{table.caption}</p>}
    </div>
  );
}
