import { useEffect, useState } from "react";
import { snapshotTrend, trend, type TrendPoint } from "../lib/karne";

// Dependency-free mini sparkline: turns a value array into a small SVG polyline.
function Spark({ vals, color }: { vals: number[]; color: string }) {
  const W = 120;
  const H = 28;
  const P = 3;
  if (vals.length < 2) return null;
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = max - min || 1;
  const step = (W - 2 * P) / (vals.length - 1);
  const y = (v: number) => P + (H - 2 * P) * (1 - (v - min) / span);
  const pts = vals.map((v, i) => `${(P + i * step).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const lastX = P + (vals.length - 1) * step;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={y(vals[vals.length - 1])} r="2.5" fill={color} />
    </svg>
  );
}

function Row({
  label,
  value,
  hint,
  color,
  spark,
}: {
  label: string;
  value: number;
  hint: string;
  color: string;
  spark: number[] | null;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="text-sm text-neutral-200">{label}</div>
        <div className="text-[11px] text-neutral-500">{hint}</div>
      </div>
      <div className="flex items-center gap-3">
        {spark && <Spark vals={spark} color={color} />}
        <span className="num text-xl font-bold" style={{ color }}>
          {value}
        </span>
      </div>
    </div>
  );
}

// Progress trend: review debt (should fall) + mastered concepts (should rise) over time.
// Data from karne:trend; a point is recorded on each open. Never touches poker content.
export function KarneTrend() {
  const [pts, setPts] = useState<TrendPoint[]>(trend);
  useEffect(() => {
    snapshotTrend();
    setPts(trend());
  }, []);
  if (!pts.length) return null;
  const last = pts[pts.length - 1];
  const enough = pts.length >= 2;
  return (
    <section className="card p-4">
      <h2 className="mb-3 font-semibold">Progress trend</h2>
      <div className="space-y-3">
        <Row
          label="Review debt"
          value={last.due}
          hint="concepts due today — lower is better"
          color="#f5a623"
          spark={enough ? pts.map((p) => p.due) : null}
        />
        <Row
          label="Mastered concepts"
          value={last.saglam}
          hint="solidly learned — higher is better"
          color="#34d399"
          spark={enough ? pts.map((p) => p.saglam) : null}
        />
      </div>
      {!enough && (
        <p className="mt-3 text-[11px] text-neutral-500">
          The trend line appears after a few days of practice — one point is added per day.
        </p>
      )}
    </section>
  );
}
