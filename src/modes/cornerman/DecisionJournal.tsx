import { useState } from "react";
import { load, save } from "../../lib/storage";
import { recordPractice, cornermanActive } from "../../lib/progress";

// Decision journal — write it BEFORE you know the result. Grade the process: entering well and losing is correct.
// Across the EPT series, the leaks you bring back from the table become the next day's drill seed.
interface JEntry {
  day: string;
  el: string;
  aksiyon: string;
  gerekce: string;
  guven: number;
}

const KEY = "journal";
const CONF = [
  { v: 0.6, label: "60%" },
  { v: 0.8, label: "80%" },
  { v: 0.95, label: "95%" },
];

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function DecisionJournal({ onDone }: { onDone: () => void }) {
  const [list, setList] = useState<JEntry[]>(() => load<JEntry[]>(KEY, []));
  const [el, setEl] = useState("");
  const [aksiyon, setAksiyon] = useState("");
  const [gerekce, setGerekce] = useState("");
  const [guven, setGuven] = useState(0.8);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function add() {
    if (!el.trim() || !aksiyon.trim()) {
      setMsg({ ok: false, text: "Hand and Action are required — fill in both." });
      return;
    }
    const next = [{ day: today(), el, aksiyon, gerekce, guven }, ...list];
    setList(next);
    save(KEY, next);
    recordPractice();
    setEl("");
    setAksiyon("");
    setGerekce("");
    setMsg({ ok: true, text: "Saved ✓" });
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Progress
        </button>
        <span className="font-semibold text-neutral-100">🗒 Decision journal</span>
        <span className="w-12" />
      </div>

      {cornermanActive() && (
        <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          🥊 Cornerman mode on. Taper: drop the volume, keep the intensity. No late-night study — sleep loss amplifies tilt.
        </div>
      )}

      <p className="text-sm text-neutral-500">
        Write it before you know the result. Good decision, bad result = correct. The next day you grade the process, not the result.
      </p>

      <div className="card space-y-2 p-4">
        <input
          value={el}
          onChange={(e) => setEl(e.target.value)}
          placeholder="Hand / spot (e.g. 42bb CO KQo, HJ opened)"
          className="w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <input
          value={aksiyon}
          onChange={(e) => setAksiyon(e.target.value)}
          placeholder="Action (fold / 3-bet 9bb / check-call…)"
          className="w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <textarea
          value={gerekce}
          onChange={(e) => setGerekce(e.target.value)}
          rows={2}
          placeholder="Reasoning (why?)"
          className="w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">Confidence:</span>
          {CONF.map((c) => (
            <button
              key={c.v}
              onClick={() => setGuven(c.v)}
              className={
                "rounded-full px-2.5 py-1 text-xs " +
                (guven === c.v ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
              }
            >
              {c.label}
            </button>
          ))}
          <button onClick={add} className="btn-accent ml-auto px-4 py-2 text-sm">
            Save
          </button>
        </div>
        {msg && (
          <div className={"text-xs " + (msg.ok ? "text-emerald-400" : "text-red-400")}>
            {msg.text}
          </div>
        )}
      </div>

      {list.length === 0 ? (
        <p className="text-center text-sm text-neutral-600">No entries yet.</p>
      ) : (
        <div className="space-y-2">
          {list.map((e, i) => (
            <div key={i} className="card p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-100">{e.el}</span>
                <span className="text-xs text-neutral-500">{e.day}</span>
              </div>
              <div className="text-accent">{e.aksiyon} · {Math.round(e.guven * 100)}%</div>
              {e.gerekce && <div className="mt-1 text-neutral-400">{e.gerekce}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
