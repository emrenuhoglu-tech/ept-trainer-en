// Audio adapter. Phase 1: Web Speech only (en-US).
// ElevenLabs arrives in Phase 3 via server/proxy.mjs (so the key never leaks to the client).
//
// Problem: TTS engines misread compact poker jargon ("3-bet", "cbet", "UTG").
// Solution: BEFORE speaking, replace terms with TTS-friendly spellings.
// The on-screen TEXT does not change — only the text sent to speech.

// Order matters: compound terms first (3-bet before bet, stack-off before stack, check-raise before raise).
const PRON: [RegExp, string][] = [
  [/\bcheck-?raise\b/gi, "check raise"],
  [/\bcheck-?call\b/gi, "check call"],
  [/\bcheck-?fold\b/gi, "check fold"],
  [/\bstack-?off\b/gi, "stack off"],
  [/\bsemi-?bluff\b/gi, "semi bluff"],
  [/\bbluff-?catcher\b/gi, "bluff catcher"],
  [/\bcoldcall\b/gi, "cold call"],
  [/\bcbet\b/gi, "c bet"],
  [/\b5-?bet\b/gi, "five bet"],
  [/\b4-?bet\b/gi, "four bet"],
  [/\b3-?bet\b/gi, "three bet"],
  [/(\d)\s?bb\b/gi, "$1 big blind"],
  [/\bOOP\b/g, "O O P"],
  [/\bIP\b/g, "I P"],
  [/\bICM\b/g, "I C M"],
  [/\bPLO\b/g, "P L O"],
  [/\bNLH\b/g, "N L H"],
  [/\bBB\b/g, "big blind"],
  [/\bSB\b/g, "small blind"],
  [/\bBTN\b/g, "button"],
  [/\bUTG\b/g, "U T G"],
  [/\bbluff\b/gi, "bluff"],
  [/\bvalue\b/gi, "value"],
  [/\bboard\b/gi, "board"],
  [/\bflat\b/gi, "flat"],
  [/\bflop\b/gi, "flop"],
  [/\briver\b/gi, "river"],
  [/\bturn\b/gi, "turn"],
  [/\bcall\b/gi, "call"],
  [/\braise\b/gi, "raise"],
  [/\bsqueeze\b/gi, "squeeze"],
  [/\bgutshot\b/gi, "gutshot"],
  [/\brakeback\b/gi, "rakeback"],
  [/\bstack\b/gi, "stack"],
  [/\bbubble\b/gi, "bubble"],
  [/\bnut\b/gi, "nut"],
  [/\bkicker\b/gi, "kicker"],
  [/\brundown\b/gi, "rundown"],
  [/\bdangler\b/gi, "dangler"],
  [/\bwrap\b/gi, "wrap"],
  [/\bstation\b/gi, "station"],
  [/\bshowdown\b/gi, "showdown"],
  [/\bequity\b/gi, "equity"],
];

function forSpeech(text: string): string {
  let out = text;
  for (const [re, sub] of PRON) out = out.replace(re, sub);
  return out;
}

export interface Speaker {
  readonly supported: boolean;
  speak(text: string, rate?: number): Promise<void>;
  stop(): void;
}

class WebSpeaker implements Speaker {
  readonly supported =
    typeof window !== "undefined" && "speechSynthesis" in window;
  private voice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (this.supported) {
      this.pickVoice();
      // In some browsers voices load asynchronously.
      window.speechSynthesis.onvoiceschanged = () => this.pickVoice();
    }
  }

  private pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    this.voice =
      voices.find((v) => v.lang === "en-US") ||
      voices.find((v) => v.lang.startsWith("en")) ||
      null;
  }

  speak(text: string, rate = 1.0): Promise<void> {
    if (!this.supported) return Promise.resolve();
    window.speechSynthesis.cancel();
    return new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(forSpeech(text));
      u.lang = "en-US";
      if (this.voice) u.voice = this.voice;
      u.rate = rate;
      u.pitch = 1.0;
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    });
  }

  stop() {
    if (this.supported) window.speechSynthesis.cancel();
  }
}

// --- Phase 3: proxy TTS (OpenAI/ElevenLabs) + IndexedDB cache ---
// Mode lives in localStorage: "hd" (default, proxy /api/tts) | "web" (Web Speech).
// Default is HD: it is clearer than the local Web Speech voice. If the proxy is down,
// HybridSpeaker falls back to Web anyway.
export type TtsMode = "web" | "hd";
export function getTtsMode(): TtsMode {
  return (localStorage.getItem("ept:tts:mode") as TtsMode) || "hd";
}
export function setTtsMode(m: TtsMode): void {
  localStorage.setItem("ept:tts:mode", m);
}

export function hashKey(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  return "a" + (h >>> 0).toString(36);
}

function idb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("ept-tts", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("audio");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function cacheGet(key: string): Promise<Blob | null> {
  try {
    const db = await idb();
    return await new Promise((res) => {
      const r = db.transaction("audio").objectStore("audio").get(key);
      r.onsuccess = () => res((r.result as Blob) || null);
      r.onerror = () => res(null);
    });
  } catch {
    return null;
  }
}
async function cachePut(key: string, blob: Blob): Promise<void> {
  try {
    const db = await idb();
    db.transaction("audio", "readwrite").objectStore("audio").put(blob, key);
  } catch {
    /* cache is best-effort */
  }
}

// Build-time bake: all lesson narration is pre-rendered to public/tts/<key>.mp3
// (scripts/bake-tts.mjs, SAME hashKey). No proxy in production → HD audio comes from here.
async function fetchStatic(key: string): Promise<Blob | null> {
  try {
    const base =
      (typeof import.meta !== "undefined" && (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL) ||
      "/";
    const r = await fetch(`${base}tts/${key}.mp3`);
    if (!r.ok) return null;
    const b = await r.blob();
    // guard against hosts that return HTML (with 200) instead of a 404
    if (b.size < 256 || (b.type && !/audio|mpeg|octet/.test(b.type))) return null;
    return b;
  } catch {
    return null;
  }
}

// Get the HD audio blob: IndexedDB → static bake → proxy (dev only). Caches the result.
async function loadAudio(text: string): Promise<Blob | null> {
  const key = hashKey("v1|" + text);
  let blob = await cacheGet(key);
  if (blob) return blob;
  blob = await fetchStatic(key);
  if (!blob) {
    try {
      const r = await fetch("/api/tts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (r.ok) blob = await r.blob();
    } catch {
      /* no proxy → null (fall back to Web Speech) */
    }
  }
  if (blob) void cachePut(key, blob);
  return blob;
}

class HybridSpeaker implements Speaker {
  private web = new WebSpeaker();
  private audio: HTMLAudioElement | null = null;
  get supported() {
    return this.web.supported || getTtsMode() === "hd";
  }
  private stopAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = "";
      this.audio = null;
    }
  }
  async speak(text: string, rate = 1.0): Promise<void> {
    if (getTtsMode() !== "hd") return this.web.speak(text, rate);
    // HD: do NOT pass the text through forSpeech (a real TTS reads the terms correctly).
    const blob = await loadAudio(text);
    if (!blob) return this.web.speak(text, rate); // no audio found → Web Speech
    await new Promise<void>((resolve) => {
      this.stopAudio();
      const a = new Audio(URL.createObjectURL(blob));
      a.playbackRate = rate;
      a.onended = () => resolve();
      a.onerror = () => resolve();
      this.audio = a;
      void a.play().catch(() => resolve());
    });
  }
  stop() {
    this.stopAudio();
    this.web.stop();
  }
}

let instance: Speaker | null = null;
export function getSpeaker(): Speaker {
  if (!instance) instance = new HybridSpeaker();
  return instance;
}

// Split narration into sentences (NO lookbehind — broad compatibility). Hyphens/digits
// in poker terms are not sentence ends; only . ! ? split. Playback (LessonPlayer) and
// prefetch (Progress) MUST use the same splitter → cache keys match exactly.
export function sentencesOf(text: string): string[] {
  return (text.match(/[^.!?]+[.!?]*/g) || [text]).map((s) => s.trim()).filter(Boolean);
}

// Render all narrations to HD audio and cache them in IndexedDB (for the offline Lesson).
// Uses the same key as speak() → later playback never hits the API.
export async function prefetchHd(
  texts: string[],
  onProgress?: (done: number, total: number) => void,
): Promise<{ ok: number; fail: number }> {
  let ok = 0;
  let fail = 0;
  const total = texts.length;
  for (let i = 0; i < texts.length; i++) {
    if (await loadAudio(texts[i])) ok++;
    else fail++;
    onProgress?.(i + 1, total);
  }
  return { ok, fail };
}
