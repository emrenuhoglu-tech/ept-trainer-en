// Playing card visuals: specific cards (Ah Kd 5c) or a generic hand code (JTs, AKo, AA).
// "Js" = jack of spades (rank+suit), "JTs" = jack-ten suited (two ranks + s). Disambiguated
// by checking whether the second character is a rank.

import { boardTexture } from "../lib/board";

const RANK_SET = new Set(["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]);
const SUIT: Record<string, { sym: string; red: boolean }> = {
  s: { sym: "♠", red: false },
  h: { sym: "♥", red: true },
  d: { sym: "♦", red: true },
  c: { sym: "♣", red: false },
};

type Size = "sm" | "md" | "lg";
const DIMS: Record<Size, { w: number; r: number; big: number }> = {
  sm: { w: 34, r: 12, big: 18 },
  md: { w: 46, r: 15, big: 26 },
  lg: { w: 64, r: 20, big: 38 },
};

function PlayingCard({ rank, suit, size = "md" }: { rank: string; suit: string; size?: Size }) {
  const s = SUIT[suit] || SUIT.s;
  const d = DIMS[size];
  const color = s.red ? "#e5484d" : "#141414";
  return (
    <div
      className="relative inline-flex shrink-0 flex-col items-center justify-center rounded-lg bg-white shadow-md"
      style={{ width: d.w, height: Math.round(d.w * 1.4) }}
    >
      <span className="absolute left-1 top-0.5 font-bold leading-none" style={{ fontSize: d.r, color }}>
        {rank}
      </span>
      <span style={{ fontSize: d.big, color, lineHeight: 1 }}>{s.sym}</span>
    </div>
  );
}

// Face-down card — for a street card the book doesn't specify.
function FaceDownCard({ size = "md" }: { size?: Size }) {
  const d = DIMS[size];
  return (
    <div
      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-surface-3 bg-surface-2 text-neutral-500"
      style={{ width: d.w, height: Math.round(d.w * 1.4), fontSize: d.r }}
      title="not specified in the book"
    >
      ?
    </div>
  );
}

// Representative suit choice for a generic hand (JTs/AKo/AA) with no suits given.
function glyphSuits(code: string): [string, string] {
  if (code.length >= 3 && code[2] === "s") return ["s", "s"]; // suited → same suit
  if (code.length >= 3 && code[2] === "o") return ["s", "h"]; // offsuit → different colors
  return ["s", "h"]; // pair → two different suits
}

// Generic hand code: "JTs" | "AKo" | "AA"
export function HandGlyph({ code, size = "md" }: { code: string; size?: Size }) {
  const c = code.trim();
  const [r1, r2] = [c[0], c[1]];
  const [s1, s2] = glyphSuits(c);
  const suited = c[2] === "s";
  const offsuit = c[2] === "o";
  return (
    <span className="inline-flex items-end gap-1.5">
      <span className="flex gap-1">
        <PlayingCard rank={r1} suit={s1} size={size} />
        <PlayingCard rank={r2} suit={s2} size={size} />
      </span>
      {(suited || offsuit) && (
        <span
          className={
            "mb-1 rounded px-1.5 py-0.5 text-[10px] font-semibold " +
            (suited ? "bg-emerald-500/20 text-emerald-300" : "bg-neutral-500/20 text-neutral-300")
          }
        >
          {suited ? "suited" : "offsuit"}
        </span>
      )}
    </span>
  );
}

// A row of specific cards or hand codes. "Ah Kd 5c" (board) or "JTs".
export function CardRow({
  spec,
  size = "md",
  label,
  texture,
}: {
  spec: string;
  size?: Size;
  label?: string;
  texture?: boolean;
}) {
  const tokens = spec.trim().split(/[\s,]+/).filter(Boolean);
  const chips = texture ? boardTexture(spec) : [];
  return (
    <div>
      {label && <div className="mb-1 text-xs uppercase tracking-wide text-neutral-500">{label}</div>}
      <div className="flex flex-wrap items-end gap-1.5">
        {tokens.map((t, i) => {
          // face-down card (unknown street)
          if (t === "??" || t === "?") return <FaceDownCard key={i} size={size} />;
          // hand code? (first two characters are ranks) → HandGlyph
          if (t.length >= 2 && RANK_SET.has(t[0]) && RANK_SET.has(t[1])) {
            return <HandGlyph key={i} code={t} size={size} />;
          }
          // specific card: rank+suit
          const m = t.match(/^([AKQJT2-9])([shdc])$/i);
          if (m) return <PlayingCard key={i} rank={m[1].toUpperCase()} suit={m[2].toLowerCase()} size={size} />;
          return (
            <span key={i} className="text-sm text-neutral-500">
              {t}
            </span>
          );
        })}
      </div>
      {chips.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {chips.map((c, i) => (
            <span
              key={i}
              className={
                "rounded-full px-2 py-0.5 text-[11px] " +
                (c.wet ? "bg-accent-soft text-accent" : "bg-surface-2 text-neutral-400")
              }
            >
              {c.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
