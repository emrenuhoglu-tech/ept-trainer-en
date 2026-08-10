import { useMemo, useState } from "react";
import {
  rangeGroups,
  fourBetRanges,
  squeezeRange,
  openRanges,
  jamRanges,
  jamCallRange,
  stackLayer,
} from "../../content/curriculum";
import { RangeGrid } from "../../components/RangeGrid";
import { DataTable } from "../../components/DataTable";

// Range Guide — lays out the ranges the book gives EXPLICITLY as depth × action.
// The book only gives hand lists for 100–150bb (Chapter 4) and 25–30bb (Chapter 5);
// at mid/edge depths it shows the 4.7 character table + qualitative guidance (grid is NOT invented).

type Depth = "derin" | "orta" | "kisa" | "cokkisa";
type Action = "acis" | "3bet" | "call" | "4bet" | "squeeze" | "jam" | "jamcall";

const DEPTHS: { id: Depth; label: string; sub: string; actions: Action[] }[] = [
  { id: "derin", label: "100bb+", sub: "Deep · Chapter 4", actions: ["acis", "3bet", "call", "4bet", "squeeze"] },
  { id: "orta", label: "40–100bb", sub: "Mid · transition", actions: [] },
  { id: "kisa", label: "25–30bb", sub: "Short · Chapter 5 ★", actions: ["acis", "jam", "jamcall"] },
  { id: "cokkisa", label: "<25bb", sub: "Very short", actions: [] },
];

const ACTION_LABEL: Record<Action, string> = {
  acis: "Open",
  "3bet": "3-bet",
  call: "Call",
  "4bet": "4-bet",
  squeeze: "Squeeze",
  jam: "Jam",
  jamcall: "Call vs jam",
};

export function RangeAtlas({ onDone }: { onDone: () => void }) {
  const [depth, setDepth] = useState<Depth>("derin");
  const cfg = DEPTHS.find((d) => d.id === depth)!;
  const [action, setAction] = useState<Action>("3bet");
  const [openerIdx, setOpenerIdx] = useState(0);

  const groups = useMemo(() => rangeGroups(), []);
  const act: Action = cfg.actions.includes(action) ? action : cfg.actions[0] ?? "3bet";

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Reference
        </button>
        <span className="font-semibold text-neutral-100">🗂️ Range Guide</span>
        <span className="w-12" />
      </div>

      {/* Depth selector */}
      <div>
        <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Depth</div>
        <div className="grid grid-cols-4 gap-1.5">
          {DEPTHS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDepth(d.id)}
              className={
                "rounded-xl px-1 py-2 text-center " +
                (d.id === depth ? "bg-accent text-black" : "bg-surface-2 text-neutral-400")
              }
            >
              <div className="text-[13px] font-bold leading-tight">{d.label}</div>
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-neutral-500">{cfg.sub}</p>
      </div>

      {/* Action selector (only at depths that have a hand list) */}
      {cfg.actions.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cfg.actions.map((a) => (
            <button
              key={a}
              onClick={() => setAction(a)}
              className={
                "rounded-full px-3 py-1.5 text-[13px] " +
                (a === act
                  ? "bg-accent-soft text-accent border border-accent"
                  : "bg-surface-2 text-neutral-400 border border-surface-3")
              }
            >
              {ACTION_LABEL[a]}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      {depth === "derin" && (
        <DerinBody act={act} groups={groups} openerIdx={openerIdx} setOpenerIdx={setOpenerIdx} />
      )}
      {depth === "kisa" && <KisaBody act={act} />}
      {(depth === "orta" || depth === "cokkisa") && <NitelBody depth={depth} />}
    </div>
  );
}

// ---- 100bb+ (Chapter 4) ----
function DerinBody({
  act,
  groups,
  openerIdx,
  setOpenerIdx,
}: {
  act: Action;
  groups: ReturnType<typeof rangeGroups>;
  openerIdx: number;
  setOpenerIdx: (n: number) => void;
}) {
  if (act === "acis")
    return (
      <Note>
        The book gives the 100bb+ open as a percentage: <b>LJ ~18% → BTN ~45%</b> (Chapter 3). A
        position-by-position open hand list is only given for the 25–30bb band — see <b>Short → Open</b>.
      </Note>
    );

  if (act === "4bet") {
    const fb = fourBetRanges();
    if (!fb) return <Note>Could not read the 4-bet table.</Note>;
    return (
      <div className="space-y-2">
        <RangeGrid
          value={fb.value}
          blof={fb.blof}
          flat={fb.flat}
          valueLabel="4-bet value"
          blofLabel="Bluff 4-bet"
          caption="Your response to a 3-bet (Chapter 4.5) · a 4-bet pot = a bloated pot"
        />
        {fb.foldNote && (
          <p className="text-xs text-neutral-400">
            <span className="text-neutral-500">Fold:</span> {fb.foldNote}
          </p>
        )}
      </div>
    );
  }

  if (act === "squeeze") {
    const sq = squeezeRange();
    if (!sq) return <Note>Could not read the squeeze table.</Note>;
    return (
      <RangeGrid
        value={sq.value}
        blof={sq.blof}
        valueLabel="Squeeze value"
        caption="When there's an opener + 1 caller (Chapter 4.6) · size 4.5–5×"
      />
    );
  }

  // 3bet / call → first pick the opener position
  const g = groups[Math.min(openerIdx, groups.length - 1)];
  return (
    <div className="space-y-3">
      <div>
        <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Opener position</div>
        <div className="flex flex-wrap gap-1.5">
          {groups.map((grp, i) => (
            <button
              key={i}
              onClick={() => setOpenerIdx(i)}
              className={
                "rounded-full px-2.5 py-1 text-xs " +
                (i === openerIdx ? "bg-sky-600 text-white" : "bg-surface-2 text-neutral-400")
              }
            >
              {grp.opener}
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-neutral-500">{g?.label}</p>
      </div>

      {act === "3bet" &&
        (g?.table.rows ?? []).map((row, i) => (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">You: {row[0]}</div>
            <RangeGrid value={row[1]} blof={row[2]} compact />
          </div>
        ))}

      {act === "call" && <CallBody flats={g?.flats ?? []} />}
    </div>
  );
}

function CallBody({ flats }: { flats: string[] }) {
  const text = flats
    .map((f) => (f.includes(":") ? f.slice(f.indexOf(":") + 1) : f))
    .join(" ")
    .trim();
  if (!text) return <Note>No flat note is given for this open in this group.</Note>;
  return <RangeGrid flat={text} valueLabel="Flat" caption="Flat / call range (Chapter 4.3)" />;
}

// ---- 25–30bb (Chapter 5) ----
function KisaBody({ act }: { act: Action }) {
  if (act === "acis") {
    const rows = openRanges();
    return (
      <div className="space-y-3">
        <Note>Nobody in ahead of you · size 2–2.2× (Chapter 5.1).</Note>
        {rows.map((r, i) => (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">{r.position}</div>
            <RangeGrid value={r.range} valueLabel="Open" compact />
          </div>
        ))}
      </div>
    );
  }
  if (act === "jam") {
    const rows = jamRanges();
    return (
      <div className="space-y-3">
        <Note>
          In this band <b>3-bet = jam</b> (commit). No flatting — not from the SB, not from the BB, not IP (Chapter 5.2).
        </Note>
        {rows.map((r, i) => (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">{r.vs}</div>
            <RangeGrid value={r.range} valueLabel="Jam" compact />
          </div>
        ))}
      </div>
    );
  }
  // jamcall
  const jc = jamCallRange();
  return (
    <div className="space-y-2">
      <Note>The calling threshold when villain goes all-in. Below it isn't a call — either you jam yourself or you fold (Chapter 5.3).</Note>
      <RangeGrid value={jc} valueLabel="Call (vs jam)" />
    </div>
  );
}

// ---- Mid / edge depths: the book gives NO hand list, qualitative adjustment ----
function NitelBody({ depth }: { depth: Depth }) {
  const t = stackLayer();
  return (
    <div className="space-y-3">
      <Note>
        The book <b>gives no separate hand list</b> for this depth. The base range is the 100bb+ (Chapter 4)
        tables; you <b>adjust</b> from them per the 4.7 character below — the grid is not invented.
      </Note>
      {depth === "orta" ? (
        <p className="text-sm leading-relaxed text-neutral-300">
          60–100bb: more polarized, bluffs increase, flat narrows (set-mining weakens). 40–60bb: linear /
          merged, <b>almost no flat — 3-bet or fold.</b>
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-neutral-300">
          25–40bb: 3-bet = commit (a hand you 3-bet must be able to continue vs a 4-bet). <b>&lt;25bb: jam /
          fold</b>, no 3-bet-fold structure. Closest hand reference: <b>25–30bb → Jam</b>.
        </p>
      )}
      {t && <DataTable table={t} />}
      <p className="text-xs text-neutral-500">Chapter 4.7 — the stack-mode top layer.</p>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border-l-4 border-accent/60 bg-accent-soft px-3 py-2 text-[13px] leading-relaxed text-neutral-200">
      {children}
    </p>
  );
}
