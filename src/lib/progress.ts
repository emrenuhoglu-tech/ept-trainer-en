// Progress: practice days (streak) + quiz stats. localStorage.
import { load, save } from "./storage";

interface ProgressData {
  days: string[]; // ISO days with practice
  quizTotal: number;
  quizCorrect: number;
}

const KEY = "progress";

function isoDay(plus = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + plus);
  return d.toISOString().slice(0, 10);
}

function read(): ProgressData {
  return load<ProgressData>(KEY, { days: [], quizTotal: 0, quizCorrect: 0 });
}

export function recordPractice(): void {
  const p = read();
  const today = isoDay(0);
  if (!p.days.includes(today)) p.days.push(today);
  save(KEY, p);
}

export function recordQuiz(ok: boolean): void {
  const p = read();
  p.quizTotal += 1;
  if (ok) p.quizCorrect += 1;
  const today = isoDay(0);
  if (!p.days.includes(today)) p.days.push(today);
  save(KEY, p);
}

// streak counting back from today — 1 "streak shield" per week (a single empty day is tolerated).
export function streak(): number {
  const days = new Set(read().days);
  let n = 0;
  let grace = true; // one empty day may be skipped
  for (let i = 0; i < 120; i++) {
    if (days.has(isoDay(-i))) {
      n++;
    } else if (i > 0 && grace) {
      grace = false; // use the shield, don't break the streak
    } else {
      break;
    }
  }
  return n;
}

// Days remaining until EPT Day-1 (2026-08-16).
export function daysUntilEPT(): number {
  const day1 = new Date("2026-08-16T00:00:00");
  const today = new Date(isoDay(0) + "T00:00:00");
  return Math.round((day1.getTime() - today.getTime()) / 86400000);
}

// Cornerman mode: during the EPT series (Aug 15–29) the app turns from teacher into cornerman.
export function cornermanActive(): boolean {
  const t = isoDay(0);
  return t >= "2026-08-15" && t <= "2026-08-29";
}

export interface Stats {
  streak: number;
  practicedToday: boolean;
  quizTotal: number;
  quizCorrect: number;
  totalDays: number;
}

export function getStats(): Stats {
  const p = read();
  return {
    streak: streak(),
    practicedToday: p.days.includes(isoDay(0)),
    quizTotal: p.quizTotal,
    quizCorrect: p.quizCorrect,
    totalDays: p.days.length,
  };
}
