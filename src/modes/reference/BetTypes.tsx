// Bet Types — value / bluff / thin value / overbet on a single reference card:
// where, how (sizing), in which spot.
//   value + bluff  -> FROM THE BOOK (verbatim quotes, chapter-referenced).
//   thin + overbet -> BEYOND-THE-BOOK general theory (clearly labeled, like Equity Intuition).
// Every beyond-the-book card is tied back to the book's doctrine by a BOOK WARNING/BRIDGE;
// when a decision is unclear, the book wins. Poker content is not "improved" here.

type Src = "book" | "ext";

interface BetCard {
  name: string;
  glyph: string;
  ne: string; // one sentence: what this bet is
  src: Src;
  cite: string; // book chapters or "general theory"
  nasil: string[]; // sizing / mechanics
  durum: string[]; // in which spot (or when not to)
  note?: { kind: "kopru" | "uyari"; text: string };
}

const CARDS: BetCard[] = [
  {
    name: "Value bet",
    glyph: "💰",
    ne: "Getting paid by a hand WEAKER than yours. If no weaker hand will pay, there is no value.",
    src: "book",
    cite: "Chapter 0.2 · Chapter 6 · Case 3 · Quick Ref",
    nasil: [
      "The filter (in front of every value decision): “Which weaker hand pays me?” No answer = the bet isn't value.",
      "If you're a clear favorite on flop + turn, the value bet is correct (Case 3: “both were correct”).",
      "Overpair on a bad river: check-call a small pot, check-fold a big one — if the value target is gone, don't inflate.",
      "Preflop value comes from your wide value 3-bet; sizes from the table in Quick Reference.",
    ],
    durum: [
      "Against a station / rec type: they don't fold → think value bet, not bluff (Chapter 1.4).",
      "Against a reg when the board fits your opening range (Chapter 6.1).",
      "NOT with one pair in a bloated pot — there the hand is a bluff-catcher (the root error).",
    ],
  },
  {
    name: "Bluff bet",
    glyph: "🎭",
    ne: "Bluff with a hand that passes all three criteria. If one is missing, it's not a bluff — it's lost chips.",
    src: "book",
    cite: "Chapter 1 (1.1–1.4) · Chapter 6",
    nasil: [
      "Three criteria: blocker + connectivity + board ownership (Chapter 1.1).",
      "The board's owner picks the move: check-raise bluff on boards that hit YOUR range (T98, 765, J-middle) — Chapter 1.3.",
      "The suited trap: J2s is not bluff fuel (no blocker, weak connectivity). You're not looking for “suited” — you want connected + blocker (Chapter 1.2).",
    ],
    durum: [
      "DON'T — bluffing a station / rec: they don't fold (Chapter 1.4).",
      "DON'T — OOP bluff 3-bet: usually a mistake (Red flag).",
      "DON'T — semi-bluffing a station = burning money; if the board doesn't hit your range, you have little credibility (Chapter 6.1).",
    ],
  },
  {
    name: "Thin value bet",
    glyph: "🪶",
    ne: "Betting a marginally strong hand (weak top pair, middle pair with a good kicker) for small value against a range that's WEAKER but still pays.",
    src: "ext",
    cite: "general theory",
    nasil: [
      "Small sizing: ~¼–⅓ pot. Merged (NOT polarized) — you want medium-strength hands to pay you.",
      "Usually IP in a single-raised SMALL pot. The goal: collect the money you'd leave on the table by checking.",
    ],
    durum: [
      "Villain is a station / wide caller; board is dry-ish; your hand has showdown value but isn't a clear favorite.",
    ],
    note: {
      kind: "uyari",
      text: "Book bridge: the book never uses the term “thin value”, but its spirit is in Chapter 2 — “the same hand, while the pot is small, drips money out of marginal hands”. Warning: thin value belongs ONLY in small pots. Once the pot has bloated, stop looking for thin value; there, one pair is a bluff-catcher (the root error) → check.",
    },
  },
  {
    name: "Overbet",
    glyph: "🔨",
    ne: "A bet bigger than the pot (>1× pot) with a polarized range: nuts or bluffs — no middle hands.",
    src: "ext",
    cite: "general theory",
    nasil: [
      "Sizing: ~1.25–2× pot. Polarized only; hold blockers on the bluff side.",
      "You need the nut advantage on the board: your range contains the nuts, villain's is capped (doesn't). Usually river / a very dry turn.",
    ],
    durum: [
      "There IS a clear value target and a weaker hand can pay; or a credible bluff (blocker + board ownership).",
    ],
    note: {
      kind: "uyari",
      text: "Book warning: an overbet = a big value bet, same filter applies — “if no hand weaker than yours will pay on the river, it isn't value” (Chapter 0.2 / Case 3). When unsure, fall back to the book's rule: check-fold a big pot, check-call a small one.",
    },
  },
];

function SrcBadge({ src, cite }: { src: Src; cite: string }) {
  return src === "book" ? (
    <span className="shrink-0 rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
      From the book · {cite}
    </span>
  ) : (
    <span className="shrink-0 rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
      Beyond the book · general theory
    </span>
  );
}

function Block({ label, items, danger }: { label: string; items: string[]; danger?: boolean }) {
  return (
    <div>
      <h3 className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">{label}</h3>
      <ul className="space-y-1">
        {items.map((t, i) => (
          <li key={i} className="flex gap-1.5 text-[13px] leading-snug text-neutral-300">
            <span className={"mt-0.5 " + (danger ? "text-red-400" : "text-accent")}>{danger ? "✕" : "•"}</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BetTypes({ onDone }: { onDone: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Reference
        </button>
        <span className="font-semibold text-neutral-100">🎯 Bet Types</span>
        <span className="w-16" />
      </div>

      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">Two from the book, two beyond it.</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          <b className="text-emerald-300">Value</b> and <b className="text-emerald-300">Bluff</b> are verbatim from the
          book (chapter-referenced). <b>Thin value</b> and <b>Overbet</b> aren't in the book — they're added as general
          theory, each fenced in by a <b>book rule</b>. When a decision is unclear, the book wins.
        </p>
      </div>

      {CARDS.map((c) => (
        <section key={c.name} className="card p-4">
          <div className="mb-2">
            <h2 className="font-semibold">
              {c.glyph} {c.name}
            </h2>
            <div className="mt-1.5">
              <SrcBadge src={c.src} cite={c.cite} />
            </div>
          </div>
          <p className="mb-3 text-[13px] italic leading-snug text-neutral-400">{c.ne}</p>
          <div className="space-y-3">
            <Block label="How (sizing / mechanics)" items={c.nasil} />
            <Block label="When" items={c.durum} danger={c.name === "Bluff bet"} />
          </div>
          {c.note && (
            <div
              className={
                "mt-3 rounded-lg border border-dashed px-3 py-2 text-[12px] leading-relaxed " +
                (c.note.kind === "uyari"
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-200/90"
                  : "border-neutral-600 bg-surface-2 text-neutral-300")
              }
            >
              {c.note.text}
            </div>
          )}
        </section>
      ))}

      <p className="px-1 text-[12px] leading-relaxed text-neutral-500">
        All four types hang on the same question: <b className="text-neutral-300">“which weaker hand pays me / will a
        better hand fold?”</b> Value gets paid, bluffs make better hands fold; thin value belongs to small pots,
        overbet to a clear target. No answer = no bet — <b className="text-neutral-300">the book's rule</b>.
      </p>
    </div>
  );
}
