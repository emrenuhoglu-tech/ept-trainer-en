import { useEffect, useRef, useState } from "react";
import { CardRow } from "../../components/Cards";
import { karneForModel, journalForModel, recordResult, conceptLabel } from "../../lib/karne";
import { recordPractice } from "../../lib/progress";
import { simTurn, type SimJson } from "../../lib/simClient";
import type { ChatMsg } from "../../lib/drillClient";
import { EVENTS } from "../../data/events";
import { equityVs } from "../../lib/equity";

type Feed =
  | { role: "coach"; d: SimJson; eq?: number | null }
  | { role: "me"; text: string };

const EVAL: Record<string, { text: string; cls: string }> = {
  correct: { text: "✓ Solid line", cls: "text-emerald-400" },
  ok: { text: "◐ Passable", cls: "text-accent" },
  leak: { text: "✗ Leak — root error", cls: "text-red-400" },
};

// Context options — the event list is derived from the calendar (events.ts) + free.
const EVENT_OPTS = ["Free", ...EVENTS.map((e) => e.name)];
const PHASE_OPTS = ["chipEV", "bubble", "ITM", "FT"];
const VILLAIN_OPTS = ["rec", "reg", "aggressive reg"];

function ChipRow({
  label,
  opts,
  value,
  onPick,
}: {
  label: string;
  opts: string[];
  value: string;
  onPick: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 shrink-0 text-xs text-neutral-500">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {opts.map((o) => (
          <button
            key={o}
            onClick={() => onPick(o)}
            className={
              "rounded-full px-2.5 py-1 text-xs " +
              (value === o ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
            }
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Simulator() {
  const [feed, setFeed] = useState<Feed[]>([]);
  const [cur, setCur] = useState<SimJson | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<{ msg: string; offline?: boolean } | null>(null);
  const [dealt, setDealt] = useState(false);
  const [event, setEvent] = useState(EVENT_OPTS[0]);
  const [phase, setPhase] = useState(PHASE_OPTS[0]);
  const [villain, setVillain] = useState("reg");
  const messages = useRef<ChatMsg[]>([]);
  const endRef = useRef<HTMLDivElement>(null);
  const done = cur?.done ?? false;

  // Scroll to the end of the feed when a new evaluation/question arrives (so it isn't below the fold).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    endRef.current?.scrollIntoView({ block: "end", behavior: reduce ? "auto" : "smooth" });
  }, [feed, loading]);

  const advance = async (userText: string | null) => {
    if (loading) return;
    setErr(null);
    setLoading(true);
    if (userText !== null) {
      messages.current.push({ role: "user", content: userText });
      setFeed((f) => [...f, { role: "me", text: userText }]);
    }
    const res = await simTurn(messages.current, karneForModel() + journalForModel());
    setLoading(false);
    if (!res.ok || !res.data) {
      setErr({ msg: res.error || "Error", offline: res.offline });
      return;
    }
    const d = res.data;
    messages.current.push({ role: "assistant", content: JSON.stringify(d) });
    setCur(d);
    // On showdown, compute the hero's all-in equity once (local, not GTO).
    const eq =
      d.done && d.villain_cards ? equityVs(d.hero_cards || "", d.villain_cards, d.board || "") : null;
    setFeed((f) => [...f, { role: "coach", d, eq }]);
    if (d.done) {
      recordPractice();
      if (d.evaluation) {
        recordResult({
          kavram: d.concept || "kök-hata",
          soru_ozeti: `Sim: ${d.hero_cards}${d.board ? " · " + d.board : ""}`,
          sonuc: d.evaluation === "correct" ? "correct" : d.evaluation === "leak" ? "wrong" : "half",
          not: d.lesson || undefined,
        });
      }
    }
  };

  // Don't auto-deal the first hand — pick a context (event/phase/villain) first, then "Deal".
  const deal = () => {
    messages.current = [];
    setCur(null);
    setFeed([]);
    setDealt(true);
    const ctx =
      `CONTEXT: Event=${event} · Phase=${phase} · Villain=${villain}. ` +
      `Build the hand for this context; event→ICM on/off per B12.0; the villain profile sets the difficulty.`;
    messages.current.push({ role: "user", content: ctx });
    void advance(null);
  };

  const submit = () => {
    const a = input.trim();
    if (!a || loading || done) return;
    setInput("");
    void advance(a);
  };

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-center justify-between px-4 pt-4">
        <h1 className="text-2xl font-bold">Table</h1>
        {dealt && (
          <button
            onClick={() => setDealt(false)}
            className="btn-ghost px-3 py-1.5 text-sm"
            disabled={loading}
          >
            ⚙ Context
          </button>
        )}
      </div>
      <p className="px-4 pt-1 text-xs text-neutral-500">
        The coach deals a hand and you play it street by street. Nobody tells you the pot has bloated — that's yours to notice.
      </p>

      {/* context selector (before the hand starts) */}
      {!dealt && (
        <div className="mx-4 mt-3 space-y-3 rounded-xl border border-surface-3 bg-surface-1 p-3">
          <p className="text-xs text-neutral-400">Pick a context, then deal:</p>
          <ChipRow label="Event" opts={EVENT_OPTS} value={event} onPick={setEvent} />
          <ChipRow label="Phase" opts={PHASE_OPTS} value={phase} onPick={setPhase} />
          <ChipRow label="Villain" opts={VILLAIN_OPTS} value={villain} onPick={setVillain} />
          <button className="btn-accent w-full py-2.5" onClick={deal}>
            Deal →
          </button>
        </div>
      )}

      {/* status header */}
      {dealt && cur && (
        <div className="mx-4 mt-3 rounded-xl border border-surface-3 bg-surface-1 p-3">
          <div className="flex items-center justify-between">
            <CardRow spec={cur.hero_cards || "??"} size="md" label="Your hand" />
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                Pot {cur.pot_bb}bb
              </span>
              <span className="text-[11px] text-neutral-500">Stack {cur.eff_stack_bb}bb</span>
            </div>
          </div>
          {cur.board && (
            <div className="mt-3">
              <CardRow spec={cur.board} size="md" label={`Board · ${cur.street}`} texture />
            </div>
          )}
        </div>
      )}

      {/* feed */}
      {dealt && (
        <div className="flex-1 space-y-3 px-4 py-4">
          {feed.map((f, i) =>
            f.role === "me" ? (
              <div
                key={i}
                className="ml-8 rounded-xl bg-surface-2 px-3 py-2 text-sm text-neutral-300"
              >
                {f.text}
              </div>
            ) : (
              <div key={i} className="space-y-2">
                {f.d.narration && (
                  <div className="text-[15px] leading-relaxed text-neutral-200">{f.d.narration}</div>
                )}
                {f.d.done ? (
                  <div className="card p-3">
                    <div
                      className={"mb-1 text-sm font-semibold " + (EVAL[f.d.evaluation || ""]?.cls || "")}
                    >
                      {EVAL[f.d.evaluation || ""]?.text || "Hand over"}
                      {f.d.concept && (
                        <span className="ml-2 text-[11px] font-normal text-neutral-500">
                          {conceptLabel(f.d.concept)}
                        </span>
                      )}
                    </div>
                    {f.d.lesson && (
                      <div className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-200">
                        {f.d.lesson}
                      </div>
                    )}
                    {f.d.villain_cards && (
                      <div className="mt-2 flex items-center gap-2">
                        <CardRow spec={f.d.villain_cards} size="sm" label="Villain" />
                        {f.eq != null && (
                          <span className="rounded-full bg-surface-2 px-2 py-0.5 text-xs text-neutral-200">
                            Equity (at all-in) ~{Math.round(f.eq * 100)}%
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  i === feed.length - 1 && (
                    <div className="text-[15px] font-medium text-accent">{f.d.question}</div>
                  )
                )}
              </div>
            ),
          )}

          {loading && <div className="px-1 text-sm text-neutral-500">Coach is dealing…</div>}
          {err && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm">
              <div className="mb-1 font-semibold text-red-300">
                {err.offline ? "Server offline" : `Error: ${err.msg}`}
              </div>
              {err.offline ? (
                <>
                  <p className="mb-2 text-xs text-neutral-300">
                    The table simulator needs the proxy. Offline, the book-derived quiz is available.
                  </p>
                  <a href="#/quiz" className="btn-ghost inline-block px-3 py-1.5 text-sm">
                    🎯 Go to Range Quiz →
                  </a>
                </>
              ) : (
                <button className="btn-ghost px-3 py-1.5 text-sm" onClick={() => void advance(null)}>
                  Try again
                </button>
              )}
            </div>
          )}
          <div ref={endRef} />
        </div>
      )}

      {/* action */}
      {dealt &&
        (done ? (
          <div className="border-t border-surface-3 p-3">
            <button className="btn-accent w-full py-3" onClick={deal}>
              ♻ New hand
            </button>
          </div>
        ) : (
          cur && (
            <div className="border-t border-surface-3 p-3">
              {cur.options && cur.options.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-2">
                  {cur.options.map((o, k) => (
                    <button
                      key={k}
                      onClick={() => void advance(o)}
                      disabled={loading}
                      className="btn-ghost px-3 py-2 text-sm disabled:opacity-50"
                    >
                      {o}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submit();
                    }
                  }}
                  rows={1}
                  disabled={loading}
                  placeholder={loading ? "Coach is thinking…" : "Your decision + brief reasoning…"}
                  className="flex-1 resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent disabled:opacity-60"
                />
                <button className="btn-accent" onClick={submit} disabled={!input.trim() || loading}>
                  Play
                </button>
              </div>
            </div>
          )
        ))}
    </div>
  );
}
