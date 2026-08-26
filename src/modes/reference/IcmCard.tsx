import { useState } from "react";
import { load, save } from "../../lib/storage";

// My ICM Card — the fillable form of Chapter 12's DELIBERATELY blank cards:
// 12.3 ladder "(fill in — from the lobby)" + 12.5 <15bb jam card "(calibrate — ICMIZER)".
// No range/threshold is ever generated from the book — only the values YOU enter live in localStorage.
// The ≤6-row cap is the book's character: no full Nash table is written (12.5).

interface LadderRow {
  sira: string;
  odul: string;
}

// Parse a prize string into a number ($, K/M/B, commas, trailing "+" tolerated) — only YOUR entries.
function money(s: string): number | null {
  const m = s.replace(/[\s,$€]/g, "").match(/^([0-9]*\.?[0-9]+)([kmb]?)\+?$/i);
  if (!m) return null;
  let n = parseFloat(m[1]);
  const suf = m[2].toLowerCase();
  if (suf === "k") n *= 1e3;
  else if (suf === "m") n *= 1e6;
  else if (suf === "b") n *= 1e9;
  return n;
}
function fmtMoney(n: number): string {
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.?0+$/, "") + "M";
  if (n >= 1e3) return "$" + Math.round(n / 1e3) + "K";
  return "$" + Math.round(n);
}

interface JamRow {
  poz: string;
  chipev: string;
  icm: string;
}

const JAM_MAX = 6;
// 12.5: "only BTN/SB/BB + 'first in'" — row labels come from the book itself.
const JAM_SEED: JamRow[] = [
  { poz: "BTN", chipev: "", icm: "" },
  { poz: "SB", chipev: "", icm: "" },
  { poz: "BB", chipev: "", icm: "" },
];

const INPUT =
  "w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent";

export function IcmCard({ onDone }: { onDone: () => void }) {
  const [ladder, setLadder] = useState<LadderRow[]>(() =>
    load<LadderRow[]>("icm:ladder", [{ sira: "", odul: "" }]),
  );
  const [jam, setJam] = useState<JamRow[]>(() => load<JamRow[]>("icm:jam", JAM_SEED));

  function setL(next: LadderRow[]) {
    setLadder(next);
    save("icm:ladder", next);
  }
  function setJ(next: JamRow[]) {
    setJam(next);
    save("icm:jam", next);
  }
  function upL(i: number, k: keyof LadderRow, v: string) {
    setL(ladder.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  }
  function upJ(i: number, k: keyof JamRow, v: string) {
    setJ(jam.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Reference
        </button>
        <span className="font-semibold text-neutral-100">🧮 My ICM Card</span>
        <span className="w-12" />
      </div>

      <p className="text-[13px] leading-relaxed text-neutral-400">
        The book leaves these cards blank ON PURPOSE: the ladder is read from the lobby (12.3), the
        jam card is calibrated with ICMIZER (12.5). Only the values you enter yourself are saved —
        no made-up thresholds.
      </p>

      <section className="card space-y-2 p-4">
        <h2 className="text-sm font-semibold text-neutral-100">Payout ladder (12.3)</h2>
        <p className="text-xs text-neutral-500">
          If the jump is LARGE relative to your stack and someone shorter is at the table: wait,
          ladder it. If it's micro: play chipEV. Enter prizes in order (top = highest); the jump to
          the row above ($ + %) is auto-computed.
        </p>
        <div className="grid grid-cols-[0.8fr_1.3fr_1.5fr_auto] gap-1.5 text-xs text-neutral-500">
          <span>Place</span>
          <span>Prize</span>
          <span>↑ Jump</span>
          <span className="w-6" />
        </div>
        {ladder.map((r, i) => {
          // Jump between this row and the one above (higher prize) = the $ value of moving up a spot.
          const cur = money(r.odul);
          const up = i > 0 ? money(ladder[i - 1].odul) : null;
          const jump = cur != null && up != null ? Math.abs(up - cur) : null;
          const base = cur != null && up != null ? Math.min(cur, up) : null;
          const pct = jump != null && base ? Math.round((jump / base) * 100) : null;
          return (
            <div key={i} className="grid grid-cols-[0.8fr_1.3fr_1.5fr_auto] items-center gap-1.5">
              <input value={r.sira} onChange={(e) => upL(i, "sira", e.target.value)} placeholder="(fill in)" className={INPUT} />
              <input value={r.odul} onChange={(e) => upL(i, "odul", e.target.value)} placeholder="(fill in)" className={INPUT} />
              <span
                className={
                  "px-1 text-xs tabular-nums " + (jump == null ? "text-neutral-600" : "text-neutral-300")
                }
              >
                {jump == null ? "—" : `+${fmtMoney(jump)} (+${pct}%)`}
              </span>
              <button
                aria-label="Delete row"
                onClick={() => setL(ladder.filter((_, j) => j !== i))}
                className="w-6 text-neutral-500"
              >
                ✕
              </button>
            </div>
          );
        })}
        <button
          onClick={() => setL([...ladder, { sira: "", odul: "" }])}
          className="btn-ghost w-full py-2 text-sm"
        >
          + Add row
        </button>
      </section>

      <section className="card space-y-2 p-4">
        <h2 className="text-sm font-semibold text-neutral-100">&lt;15bb jam card (12.5)</h2>
        <p className="text-xs text-neutral-500">
          Only BTN/SB/BB + "first in". Max {JAM_MAX} rows — no full Nash table is written; the
          "check at the break" character is preserved.
        </p>
        <div className="grid grid-cols-[0.7fr_1.4fr_1.4fr_auto] gap-1.5 text-xs text-neutral-500">
          <span>Pos.</span>
          <span>chipEV jam</span>
          <span>ICM correction</span>
          <span className="w-6" />
        </div>
        {jam.map((r, i) => (
          <div key={i} className="grid grid-cols-[0.7fr_1.4fr_1.4fr_auto] items-center gap-1.5">
            <input value={r.poz} onChange={(e) => upJ(i, "poz", e.target.value)} placeholder="BTN" className={INPUT} />
            <input
              value={r.chipev}
              onChange={(e) => upJ(i, "chipev", e.target.value)}
              placeholder="(calibrate — ICMIZER)"
              className={INPUT}
            />
            <input
              value={r.icm}
              onChange={(e) => upJ(i, "icm", e.target.value)}
              placeholder="(calibrate — ICMIZER)"
              className={INPUT}
            />
            <button
              aria-label="Delete row"
              onClick={() => setJ(jam.filter((_, j) => j !== i))}
              className="w-6 text-neutral-500"
            >
              ✕
            </button>
          </div>
        ))}
        {jam.length < JAM_MAX && (
          <button
            onClick={() => setJ([...jam, { poz: "", chipev: "", icm: "" }])}
            className="btn-ghost w-full py-2 text-sm"
          >
            + Add row ({jam.length}/{JAM_MAX})
          </button>
        )}
      </section>
    </div>
  );
}
