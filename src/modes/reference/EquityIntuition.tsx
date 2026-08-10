// Equity Intuition — BEYOND-THE-BOOK bonus. Only rough equity math (number feel).
// The decision always comes from the book (sentence 6: "Equity is won on paper, money at the table").
// NOT tied to karne/mastery; generates no drills. Goal: automate the "how far ahead/behind"
// intuition so you're not doing arithmetic on the clock at the table.

const DRAWS: [string, string, string][] = [
  ["Gutshot (inside straight)", "4", "~17%"],
  ["Two overcards", "6", "~24%"],
  ["Open-ended (OESD)", "8", "~32%"],
  ["Flush draw", "9", "~35%"],
  ["FD + gutshot", "12", "~45%"],
  ["FD + open-ended (monster)", "15", "~54%"],
];

const MATCHUPS: [string, string, string][] = [
  ["Overpair vs underpair", "AA vs KK", "~82 / 18"],
  ["Pair vs 2 undercards", "TT vs 76s", "~65 / 35"],
  ["Dominating vs dominated", "AK vs AQ", "~72 / 28"],
  ["Pair vs 2 overs (coinflip)", "QQ vs AK", "~55 / 45"],
  ["Two overs vs small pair", "AK vs 22", "~50 / 50"],
  ["SC vs overpair", "87s vs AA", "~22 / 78"],
];

function Row({ cols, accent }: { cols: string[]; accent?: boolean }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-surface-3 py-2 text-sm last:border-0">
      <span className="text-neutral-200">{cols[0]}</span>
      <span className="font-mono text-xs text-neutral-500">{cols[1]}</span>
      <span className={"text-right font-mono tabular-nums " + (accent ? "text-accent" : "text-emerald-300")}>
        {cols[2]}
      </span>
    </div>
  );
}

export function EquityIntuition({ onDone }: { onDone: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Reference
        </button>
        <span className="font-semibold text-neutral-100">📐 Equity Intuition</span>
        <span className="w-16" />
      </div>

      {/* beyond-the-book frame — tie it to sentence 6 */}
      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">Bonus — not part of the book.</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          <b>"Equity is won on paper, money is won at the table."</b> (Chapter 0.6) The decision always
          comes from the book. This card is pure number intuition — to feel "how far ahead/behind" in a second at the table.
        </p>
      </div>

      {/* one tool: the 2 & 4 rule */}
      <section className="card p-4">
        <h2 className="mb-2 font-semibold">One tool: the 2 &amp; 4 rule</h2>
        <div className="space-y-2 text-sm text-neutral-300">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-accent">×2</span>
            <span>
              <b>1 street</b> left (turn <i>or</i> river): multiply your outs by 2 ≈ your % to hit.
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-accent">×4</span>
            <span>
              <b>2 streets</b> to come (all-in on the flop, turn+river ahead): outs × 4 ≈ % to hit by the river.
            </span>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-neutral-500">
          With 8+ outs, ×4 runs a bit high (~2-3% above the true number). Good enough for rough intuition.
        </p>
      </section>

      {/* draw → out → river% */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Draw → outs → by the river</h2>
        <p className="mb-2 text-[11px] text-neutral-500">On the flop, as if you'll see both cards (rough).</p>
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-surface-3 pb-1 text-[10px] uppercase tracking-wide text-neutral-500">
          <span>Draw</span>
          <span>outs</span>
          <span className="text-right">hits</span>
        </div>
        {DRAWS.map((d) => (
          <Row key={d[0]} cols={d} />
        ))}
      </section>

      {/* preflop all-in, rough */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Preflop all-in (rough)</h2>
        <p className="mb-2 text-[11px] text-neutral-500">Favorite / underdog — "which side am I on", not exact percentages.</p>
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-surface-3 pb-1 text-[10px] uppercase tracking-wide text-neutral-500">
          <span>Matchup</span>
          <span>example</span>
          <span className="text-right">%</span>
        </div>
        {MATCHUPS.map((m) => (
          <Row key={m[0]} cols={m} accent />
        ))}
      </section>

      <p className="px-1 text-[12px] leading-relaxed text-neutral-500">
        The numbers tell you ahead or behind; <b className="text-neutral-300">the book still makes the decision</b>.
        Being ahead in a coinflip doesn't change the correct ICM fold. Once the intuition is automatic, reflex runs
        at the table instead of arithmetic — that's what actually wins.
      </p>
    </div>
  );
}
