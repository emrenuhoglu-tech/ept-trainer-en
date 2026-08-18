import { useMemo } from "react";
import { modules } from "../../data/modules";
import { MODULE_PRETEST } from "./ColdOpen";
import { daysUntilEPT, cornermanActive, getStats } from "../../lib/progress";
import { dueEntries, confidentWrong } from "../../lib/karne";
import { EVENTS, nextEvent, daysUntil } from "../../data/events";

// Today's plan — lays out the existing signals (countdown, next event, due reviews, weakest
// concept→module) on a single card. PURE COMPOSITION: NO new poker content; everything
// comes from data derived from the book. Shown on launch (top of the default Lessons tab).

const isoToday = () => new Date().toISOString().slice(0, 10);

// Resolve concept → module: inverse of ColdOpen's M→concept map + a few prefix rules.
const KAVRAM_MODULE: Record<string, string> = Object.fromEntries(
  Object.entries(MODULE_PRETEST).map(([m, k]) => [k, m]),
);
function moduleForKavram(kavram: string): { id: string; title: string } | null {
  let id = KAVRAM_MODULE[kavram];
  if (!id) {
    if (/^3-?bet|aralik|aralık|boyut/i.test(kavram)) id = "M5";
    else if (/bl[öo]f/i.test(kavram)) id = "M2";
    else if (/plo/i.test(kavram)) id = "M9";
    else if (/turn|draw/i.test(kavram)) id = "M8";
    else if (/stack|mod|icm/i.test(kavram)) id = "M4";
  }
  if (!id) return null;
  const m = modules.find((x) => x.id === id);
  return m ? { id: m.id, title: m.title } : null;
}

export function TodayPlan() {
  const plan = useMemo(() => {
    const today = isoToday();
    const due = dueEntries();
    const cw = confidentWrong();
    const weakK = (cw[0] || due[0])?.kavram; // confident-but-wrong first, else the heaviest due
    const plo = EVENTS.find((e) => e.format === "PLO");
    const ploIn = plo ? daysUntil(plo.start, today) : 999;
    const ev = nextEvent(today);
    return {
      today,
      cornerman: cornermanActive(),
      days: daysUntilEPT(),
      ev,
      dueCount: due.length,
      topDue: due[0] ?? null,
      studyMod: weakK ? moduleForKavram(weakK) : null,
      ploRamp: ploIn >= 0 && ploIn <= 6,
      wsopRamp: ev?.id === "wsop",
      practiced: getStats().practicedToday,
    };
  }, []);

  const { today, cornerman, days, ev, dueCount, topDue, studyMod, ploRamp, wsopRamp, practiced } = plan;
  const evIn = ev ? daysUntil(ev.start, today) : 0;

  return (
    <div className="card border-l-4 border-accent p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">Today</span>
        <span className="text-xs text-neutral-500">
          {cornerman ? "EPT series LIVE 🎬" : days >= 0 ? `${days} days to Day 1` : "series over"}
        </span>
      </div>

      {ev && (
        <div className="mt-2 text-sm text-neutral-200">
          🎯 Next up: <b>{ev.name}</b>{" "}
          <span className="text-neutral-500">
            ({ev.format} · {ev.buyin} · {ev.days})
          </span>
          {evIn > 0 ? ` — ${evIn} days` : evIn === 0 ? " — today!" : " — in progress"}
        </div>
      )}
      {ploRamp && (
        <a href="#/ders/M9" className="mt-1 block text-xs text-accent">
          ↳ €25K PLO HR is coming up — refresh the M9 PLO fundamentals →
        </a>
      )}
      {wsopRamp && (
        <a href="#/referans/bolum/17" className="mt-1 block text-xs text-accent">
          ↳ WSOP Online ME Day 2 is coming up — refresh Chapter 17 →
        </a>
      )}

      <div className="mt-3 flex flex-col gap-1.5 text-sm">
        {dueCount > 0 ? (
          <a href="#/ilerleme/tekrar" className="flex items-start gap-2 text-neutral-200">
            <span>🔁</span>
            <span>
              <b>{dueCount}</b> reviews ready
              {topDue?.severity === "tournament_life" ? " · ⚠ includes a tournament-ender" : ""}
            </span>
          </a>
        ) : (
          <span className="text-neutral-500">🔁 No reviews due today.</span>
        )}

        {studyMod && (
          <a href={`#/ders/${studyMod.id}`} className="flex items-start gap-2 text-neutral-200">
            <span>📚</span>
            <span>
              Study today: <b>{studyMod.title}</b>{" "}
              <span className="text-neutral-500">({studyMod.id})</span>
            </span>
          </a>
        )}

        <a href="#/drill" className="flex items-start gap-2 text-neutral-200">
          <span>🃏</span>
          <span>{practiced ? "You practiced today ✓ — one more drill?" : "Today's practice: 1 drill"}</span>
        </a>
      </div>
    </div>
  );
}
