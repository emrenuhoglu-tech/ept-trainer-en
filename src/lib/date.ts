// Local calendar day (not UTC). toISOString() returns the UTC day, so after midnight
// (UTC+2/+3) streak/due/practicedToday drifted by one day — a systematic error for a
// player who plays at night. Single source: karne.ts, progress.ts, DecisionJournal all use this.
export function localIsoDay(plusDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + plusDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
