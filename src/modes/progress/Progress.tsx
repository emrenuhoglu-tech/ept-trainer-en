import { useMemo, useRef, useState } from "react";
import {
  dueEntries,
  confidentWrong,
  calibration,
  masteryCounts,
  conceptLabel,
  type Sonuc,
  type Mastery,
} from "../../lib/karne";
import { getStats, daysUntilEPT, cornermanActive } from "../../lib/progress";
import { modules } from "../../data/modules";
import { prefetchHd, sentencesOf, getTtsMode, setTtsMode, type TtsMode } from "../../lib/speech";
import { exportAll, importAll } from "../../lib/storage";
import { KarneTrend } from "../../components/KarneTrend";

const DOT: Record<Sonuc, string> = {
  correct: "text-emerald-400",
  half: "text-accent",
  wrong: "text-red-400",
};

const MASTERY: { key: Mastery; label: string; cls: string }[] = [
  { key: "saglam", label: "Solid", cls: "text-emerald-400" },
  { key: "yetkin", label: "Proficient", cls: "text-sky-400" },
  { key: "asina", label: "Familiar", cls: "text-accent" },
  { key: "gorundu", label: "Seen", cls: "text-neutral-400" },
];

export function Progress({ onReview, onJournal }: { onReview?: () => void; onJournal?: () => void }) {
  const [dl, setDl] = useState<{ running: boolean; done: number; total: number; msg?: string }>({
    running: false,
    done: 0,
    total: 0,
  });
  const [tts, setTts] = useState<TtsMode>(() => getTtsMode());
  const [bkMsg, setBkMsg] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function pickTts(m: TtsMode) {
    setTtsMode(m);
    setTts(m);
  }

  function downloadBackup() {
    const blob = new Blob([exportAll()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ept-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function onBackupFile(input: HTMLInputElement) {
    const f = input.files?.[0];
    input.value = "";
    if (!f) return;
    const res = importAll(await f.text());
    if (res.ok) {
      location.reload();
    } else {
      setBkMsg("Couldn't read the backup — the file isn't a valid EPT backup.");
    }
  }

  async function downloadAudio() {
    // Playback speaks sentence by sentence (LessonPlayer) → prefetch must produce
    // the SAME sentence keys, or the offline cache misses.
    const texts = modules.flatMap((m) => m.slides.flatMap((s) => sentencesOf(s.narration)));
    setDl({ running: true, done: 0, total: texts.length });
    const res = await prefetchHd(texts, (done, total) => setDl({ running: true, done, total }));
    setDl({
      running: false,
      done: res.ok,
      total: texts.length,
      msg: res.fail ? `${res.ok} downloaded, ${res.fail} skipped (proxy/key?).` : `${res.ok} audio files ready — works offline.`,
    });
  }

  const { stats, due, cwrong, cal, mastery, acc, eptDays } = useMemo(() => {
    const stats = getStats();
    const due = dueEntries();
    const cwrong = confidentWrong().slice(0, 6);
    const cal = calibration();
    const mastery = masteryCounts();
    const acc = stats.quizTotal ? Math.round((stats.quizCorrect / stats.quizTotal) * 100) : null;
    return { stats, due, cwrong, cal, mastery, acc, eptDays: daysUntilEPT() };
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-lg font-bold">📊 Progress</h1>

      {/* countdown / cornerman */}
      {cornermanActive() ? (
        <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          🥊 Cornerman mode — series day. Taper: light but sharp. Leak card + decision journal.
        </div>
      ) : (
        eptDays > 0 && (
          <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
            🃏 <b>{eptDays} days</b> until EPT Day-1 — one drill a day is enough.
          </div>
        )
      )}

      {/* top stats strip */}
      <div className="grid grid-cols-3 gap-2">
        <Stat big={`🔥 ${stats.streak}`} label="day streak" />
        <Stat big={`${stats.totalDays}`} label="days practiced" />
        <Stat big={acc === null ? "—" : `${acc}%`} label="quiz accuracy" />
      </div>
      {!stats.practicedToday && (
        <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm text-neutral-300">
          No practice yet today — one Quiz or Drill is enough. (You have a streak shield: a single empty day won't break the streak.)
        </div>
      )}
      {onJournal && (
        <button onClick={onJournal} className="btn-ghost w-full py-2.5 text-sm">
          🗒 Decision journal →
        </button>
      )}

      {/* readiness board (mastery) */}
      <section className="card p-4">
        <h2 className="mb-2 font-semibold">Readiness board</h2>
        <div className="grid grid-cols-4 gap-2 text-center">
          {MASTERY.map((m) => (
            <div key={m.key} className="rounded-lg bg-surface-2 py-2">
              <div className={"text-lg font-bold " + m.cls}>{mastery[m.key]}</div>
              <div className="text-[10px] text-neutral-500">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-neutral-500">
          Solid = correct in 3 different guises, on ≥3 separate days. A single miss resets the streak — the tier is rebuilt from scratch.
        </p>
      </section>

      {/* progress trend (sparkline) */}
      <KarneTrend />

      {/* calibration + confident-but-wrong */}
      {(cal || cwrong.length > 0) && (
        <section className="card p-4">
          <h2 className="mb-2 font-semibold">Calibration</h2>
          {cal && (
            <p className="text-sm text-neutral-300">
              Actual hit rate on your high-confidence (≥80%) answers:{" "}
              <b className={cal.hit / cal.high >= 0.85 ? "text-emerald-400" : "text-accent"}>
                {Math.round((cal.hit / cal.high) * 100)}%
              </b>{" "}
              <span className="text-neutral-500">({cal.hit}/{cal.high})</span>
            </p>
          )}
          {cwrong.length > 0 && (
            <>
              <div className="mt-3 text-xs uppercase tracking-wide text-red-300">
                Confident-but-wrong (most dangerous)
              </div>
              <ul className="mt-1 space-y-1.5">
                {cwrong.map((e) => (
                  <li key={e.id} className="flex items-center gap-2 text-sm">
                    <span className="text-red-400">●</span>
                    <span className="text-neutral-200">{conceptLabel(e.kavram)}</span>
                    {e.severity === "tournament_life" && (
                      <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] text-red-300">
                        tournament-life
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      {/* due today */}
      <section className="card p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-semibold">Due today</h2>
          <span className="text-sm text-neutral-400">{due.length} topics</span>
        </div>
        {due.length === 0 ? (
          <p className="text-sm text-neutral-500">Nothing due for review. 👍</p>
        ) : (
          <ul className="space-y-2">
            {due.slice(0, 8).map((e) => (
              <li key={e.id} className="flex gap-2 text-sm">
                <span className={DOT[e.sonuc]}>●</span>
                <span>
                  <span className="text-neutral-200">{conceptLabel(e.kavram)}</span>
                  <span className="text-neutral-500"> — {e.soru_ozeti}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
        {due.length > 0 && onReview && (
          <button onClick={onReview} className="btn-accent mt-3 w-full py-2.5">
            Review today → ({due.length})
          </button>
        )}
      </section>

      {/* offline / audio */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Offline audio</h2>
        <p className="mb-3 text-sm text-neutral-500">
          Pre-download all lesson narrations in HD audio — then everything works offline, no waiting.
        </p>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs text-neutral-500">Audio:</span>
          <div className="flex overflow-hidden rounded-full border border-surface-3">
            {(["hd", "web"] as TtsMode[]).map((m) => (
              <button
                key={m}
                onClick={() => pickTts(m)}
                className={
                  "px-3.5 py-1.5 text-xs " +
                  (tts === m ? "bg-accent font-semibold text-black" : "bg-surface-2 text-neutral-400")
                }
              >
                {m === "hd" ? "HD" : "Device"}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-neutral-600">
            {tts === "hd" ? "proxy /api/tts" : "browser voice"}
          </span>
        </div>
        <button
          onClick={downloadAudio}
          disabled={dl.running}
          className="btn-ghost w-full py-2.5 disabled:opacity-50"
        >
          {dl.running ? `Downloading… ${dl.done}/${dl.total}` : "🔊 Download HD audio"}
        </button>
        {dl.msg && <p className="mt-2 text-xs text-neutral-400">{dl.msg}</p>}
      </section>

      {/* backup */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Backup</h2>
        <p className="mb-3 text-sm text-neutral-500">
          Report card, streak and journal live in this device's browser. Download them as a
          file; restore on another device.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={downloadBackup} className="btn-ghost py-2.5">
            ⬇ Download backup
          </button>
          <button onClick={() => fileRef.current?.click()} className="btn-ghost py-2.5">
            ⬆ Load backup
          </button>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => void onBackupFile(e.currentTarget)}
        />
        {bkMsg && <p className="mt-2 text-xs text-red-300">{bkMsg}</p>}
      </section>
    </div>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="card flex flex-col items-center justify-center py-3">
      <div className="text-xl font-bold text-neutral-100">{big}</div>
      <div className="text-[11px] text-neutral-500">{label}</div>
    </div>
  );
}
