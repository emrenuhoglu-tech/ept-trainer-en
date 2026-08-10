import { useEffect, useRef, useState } from "react";
import { CardRow } from "../../components/Cards";
import { karneForModel, journalForModel, recordResult, conceptLabel } from "../../lib/karne";
import { recordPractice } from "../../lib/progress";
import { simTurn, type SimJson } from "../../lib/simClient";
import type { ChatMsg } from "../../lib/drillClient";

type Feed =
  | { role: "coach"; d: SimJson }
  | { role: "me"; text: string };

const EVAL: Record<string, { text: string; cls: string }> = {
  correct: { text: "✓ Solid line", cls: "text-emerald-400" },
  ok: { text: "◐ Passable", cls: "text-accent" },
  leak: { text: "✗ Leak — root error", cls: "text-red-400" },
};

export function Simulator() {
  const [feed, setFeed] = useState<Feed[]>([]);
  const [cur, setCur] = useState<SimJson | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<{ msg: string; offline?: boolean } | null>(null);
  const messages = useRef<ChatMsg[]>([]);
  const started = useRef(false);
  const done = cur?.done ?? false;

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
    setFeed((f) => [...f, { role: "coach", d }]);
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

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void advance(null);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const newHand = () => {
    messages.current = [];
    setCur(null);
    setFeed([]);
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
        <button onClick={newHand} className="btn-ghost px-3 py-1.5 text-sm" disabled={loading}>
          ♻ New hand
        </button>
      </div>
      <p className="px-4 pt-1 text-xs text-neutral-500">
        The coach deals a hand and you play it street by street. Nobody tells you the pot has bloated — that's yours to notice.
      </p>

      {/* status header */}
      {cur && (
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
      </div>

      {/* action */}
      {done ? (
        <div className="border-t border-surface-3 p-3">
          <button className="btn-accent w-full py-3" onClick={newHand}>
            ♻ New hand
          </button>
        </div>
      ) : (
        cur &&
        !loading && (
          <div className="border-t border-surface-3 p-3">
            {cur.options && cur.options.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {cur.options.map((o, k) => (
                  <button
                    key={k}
                    onClick={() => void advance(o)}
                    className="btn-ghost px-3 py-2 text-sm"
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
                placeholder="Your decision + brief reasoning…"
                className="flex-1 resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <button className="btn-accent" onClick={submit} disabled={!input.trim()}>
                Play
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
