// EPT Barcelona 2026 — the 4 events Emre will play. EXTERNAL FACTUAL SCHEDULE (NOT poker
// strategy — doesn't touch the book). Source: slate locked 2026-07-27. Dates are ISO.
export interface EptEvent {
  id: string;
  name: string;
  format: "NLH" | "PLO";
  buyin: string;
  start: string; // ISO start day
  end: string; // ISO end day
  days: string; // human-friendly range
}

export const EVENTS: EptEvent[] = [
  { id: "shr", name: "Super High Roller", format: "NLH", buyin: "€100K", start: "2026-08-21", end: "2026-08-23", days: "Aug 21–23" },
  { id: "plo", name: "PLO High Roller", format: "PLO", buyin: "€25K", start: "2026-08-22", end: "2026-08-23", days: "Aug 22–23" },
  { id: "main", name: "Main Event", format: "NLH", buyin: "€5.3K", start: "2026-08-22", end: "2026-08-29", days: "Aug 22–29" },
  { id: "hr", name: "High Roller", format: "NLH", buyin: "€10.3K", start: "2026-08-27", end: "2026-08-29", days: "Aug 27–29" },
  { id: "wsop", name: "WSOP Online ME Day 2", format: "NLH", buyin: "$5K", start: "2026-09-21", end: "2026-09-22", days: "Sep 21–22" },
];

// The earliest-starting event not yet finished as of today (inclusive).
export function nextEvent(todayIso: string): EptEvent | null {
  const upcoming = EVENTS.filter((e) => e.end >= todayIso).sort((a, b) => a.start.localeCompare(b.start));
  return upcoming[0] ?? null;
}

// Whole days remaining until the iso day (negative if past).
export function daysUntil(iso: string, todayIso: string): number {
  return Math.round(
    (new Date(iso + "T00:00:00").getTime() - new Date(todayIso + "T00:00:00").getTime()) / 86400000,
  );
}
