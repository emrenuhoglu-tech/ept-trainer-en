import { useMemo, useRef, useState } from "react";
import { FIRST_QUESTION } from "../../data/karne_seed";
import { karneForModel, journalForModel, recordResult, conceptLabel } from "../../lib/karne";
import { recordPractice } from "../../lib/progress";
import { drillTurn, type ChatMsg, type DrillJson } from "../../lib/drillClient";

const MAX_QUESTIONS = 8;

interface Turn {
  question: string;
  answer?: string;
  evaluation?: DrillJson["evaluation"];
  lesson?: string;
  concept?: string;
  confWrong?: boolean; // confident-but-wrong (hypercorrection warning)
}

const CONF = [
  { v: 0.6, label: "60%" },
  { v: 0.8, label: "80%" },
  { v: 0.95, label: "95%" },
];

function firstAssistantJson(): string {
  const obj: DrillJson = {
    evaluation: null,
    lesson: "",
    concept: "3bet-aralik",
    next_question: FIRST_QUESTION,
    session_summary: null,
  };
  return JSON.stringify(obj);
}

const EVAL_LABEL: Record<string, { text: string; cls: string }> = {
  correct: { text: "✓ Correct", cls: "text-emerald-400" },
  half: { text: "◐ Half", cls: "text-accent" },
  wrong: { text: "✗ Wrong", cls: "text-red-400" },
};

export function Drill() {
  const [turns, setTurns] = useState<Turn[]>([{ question: FIRST_QUESTION }]);
  const [input, setInput] = useState("");
  const [conf, setConf] = useState(0.8);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [rawError, setRawError] = useState<{ msg: string; raw?: string; offline?: boolean } | null>(
    null,
  );
  // Anthropic-shaped history (proxy prepends KITAP). First question (S6) is a fixed seed.
  const messages = useRef<ChatMsg[]>([
    { role: "assistant", content: firstAssistantJson() },
  ]);
  const answered = useMemo(
    () => turns.filter((t) => t.answer !== undefined).length,
    [turns],
  );

  const send = async (answer: string, retryLastAnswer = false) => {
    setRawError(null);
    setLoading(true);
    if (!retryLastAnswer) {
      messages.current.push({ role: "user", content: answer });
      setTurns((ts) => {
        const copy = [...ts];
        copy[copy.length - 1] = { ...copy[copy.length - 1], answer };
        return copy;
      });
    }

    const currentQuestion = turns[turns.length - 1].question;
    const res = await drillTurn(messages.current, karneForModel() + journalForModel());
    setLoading(false);

    if (!res.ok || !res.data) {
      setRawError({ msg: res.error || "Error", raw: res.raw, offline: res.offline });
      return;
    }

    const d = res.data;
    const confWrong = d.evaluation === "wrong" && conf >= 0.8;
    // Write the evaluation into the last turn
    setTurns((ts) => {
      const copy = [...ts];
      const last = copy.length - 1;
      copy[last] = {
        ...copy[last],
        evaluation: d.evaluation,
        lesson: d.lesson,
        concept: d.concept,
        confWrong,
      };
      return copy;
    });
    // Record to the report card (consolidated per concept → spaced repetition + severity + confidence)
    if (d.evaluation) {
      recordResult({
        kavram: d.concept || "kök-hata",
        soru_ozeti: currentQuestion,
        sonuc: d.evaluation,
        severity: d.severity ?? undefined,
        confidence: conf,
      });
      recordPractice();
    }
    messages.current.push({ role: "assistant", content: JSON.stringify(d) });

    // Session over?
    const forceEnd = answered + 1 >= MAX_QUESTIONS;
    if (d.session_summary || (forceEnd && !d.next_question)) {
      setSummary(d.session_summary || "Session complete.");
    } else if (d.next_question) {
      setTurns((ts) => [...ts, { question: d.next_question! }]);
    } else {
      setSummary("Session complete.");
    }
  };

  const onSubmit = () => {
    const a = input.trim();
    if (!a || loading) return;
    setInput("");
    void send(a);
  };

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-center justify-between px-4 pt-4">
        <h1 className="text-2xl font-bold">Drill</h1>
        <span className="text-xs text-neutral-500">
          {answered}/{MAX_QUESTIONS} questions
        </span>
      </div>
      <p className="px-4 pt-1 text-xs text-neutral-500">
        Socratic coach. Commit to one decision — double answers not accepted.
      </p>

      <div className="flex-1 space-y-4 px-4 py-4">
        {turns.map((t, i) => (
          <div key={i} className="space-y-2">
            <div className="card p-3">
              <div className="mb-1 text-[11px] uppercase tracking-wide text-accent">
                Question {i + 1}
              </div>
              <div className="text-[15px] leading-relaxed">{t.question}</div>
            </div>

            {t.answer !== undefined && (
              <div className="ml-6 rounded-xl bg-surface-2 px-3 py-2 text-sm text-neutral-300">
                {t.answer}
              </div>
            )}

            {t.evaluation && (
              <div className="card p-3">
                <div
                  className={
                    "mb-1 text-sm font-semibold " +
                    (EVAL_LABEL[t.evaluation]?.cls || "")
                  }
                >
                  {EVAL_LABEL[t.evaluation]?.text || t.evaluation}
                  {t.concept && (
                    <span className="ml-2 text-[11px] font-normal text-neutral-500">
                      {conceptLabel(t.concept)}
                    </span>
                  )}
                </div>
                {t.confWrong && (
                  <div className="mb-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                    ⚠ You were confident but wrong — this is exactly the mistake you'd never question in a tournament. This concept will be back soon in a different disguise.
                  </div>
                )}
                <div className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-200">
                  {t.lesson}
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="px-1 text-sm text-neutral-500">Coach is thinking…</div>
        )}

        {rawError && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm">
            <div className="mb-1 font-semibold text-red-300">
              {rawError.offline ? "Server offline" : `Could not process response: ${rawError.msg}`}
            </div>
            {rawError.offline ? (
              <>
                <p className="mb-2 text-xs text-neutral-300">
                  Drill needs the proxy. You're offline right now — you can practice the book-derived quiz instead.
                </p>
                <a href="#/quiz" className="btn-ghost inline-block px-3 py-1.5 text-sm">
                  🎯 Go to Range Quiz →
                </a>
              </>
            ) : (
              <>
                {rawError.raw && (
                  <pre className="mb-2 max-h-40 overflow-auto whitespace-pre-wrap text-xs text-neutral-400">
                    {rawError.raw}
                  </pre>
                )}
                <button
                  className="btn-ghost px-3 py-1.5 text-sm"
                  onClick={() => void send("", true)}
                >
                  Try again
                </button>
              </>
            )}
          </div>
        )}

        {summary && (
          <div className="rounded-xl border-l-4 border-accent bg-accent-soft p-4">
            <div className="mb-1 text-sm font-semibold">Session summary</div>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">
              {summary}
            </div>
          </div>
        )}
      </div>

      {!summary && (
        <div className="border-t border-surface-3 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs text-neutral-500">How confident are you?</span>
            {CONF.map((c) => (
              <button
                key={c.v}
                onClick={() => setConf(c.v)}
                className={
                  "rounded-full px-2.5 py-1 text-xs " +
                  (conf === c.v
                    ? "bg-accent text-black font-semibold"
                    : "bg-surface-2 text-neutral-400")
                }
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onSubmit();
                }
              }}
              rows={2}
              placeholder="Your decision and reasoning…"
              className="flex-1 resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button className="btn-accent" onClick={onSubmit} disabled={loading || !input.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
