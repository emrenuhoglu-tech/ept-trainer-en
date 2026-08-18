// Drill proxy — hides the Anthropic Messages API from the client.
// Model: claude-fable-5 for everything; falls back to claude-opus-4-8 on refusal/error
// (Emre: "fable 5 for everything, else opus 5"). The key lives ONLY here, from .env.
//
// Run: npm run server  (Node 24: --env-file=.env is loaded automatically)
import express from "express";
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import Anthropic from "@anthropic-ai/sdk";

// Node 24: load .env (the script already passes --env-file; this is a backup).
try {
  process.loadEnvFile?.();
} catch {
  /* skip if no .env */
}

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");

// Refresh system prompts on EVERY request via an mtime cache: edits to the .md files apply
// automatically (nothing frozen at boot → no more "stale proxy"). readFileSync is 4KB, cost
// negligible; the bytes only change when the file really changes, which invalidates the
// Anthropic prompt cache at exactly the right moment.
const _promptCache = new Map(); // path -> { mtimeMs, text }
function loadPrompt(rel) {
  const p = join(ROOT, rel);
  const { mtimeMs } = statSync(p);
  const hit = _promptCache.get(p);
  if (hit && hit.mtimeMs === mtimeMs) return hit.text;
  const text = readFileSync(p, "utf8");
  _promptCache.set(p, { mtimeMs, text });
  return text;
}

const PRIMARY = process.env.ANTHROPIC_MODEL || "claude-fable-5";
const FALLBACK = process.env.ANTHROPIC_FALLBACK_MODEL || "claude-opus-4-8";
const MAX_TOKENS = Number(process.env.ANTHROPIC_MAX_TOKENS || 10000);
const PORT = Number(process.env.PORT || 8787);

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn("[proxy] WARNING: ANTHROPIC_API_KEY missing — /api/drill will return 500.");
}

// timeout: the client aborts at 60s → primary 25s + fallback 25s stays inside that budget
// (D5-49). maxRetries 0: SDK retries would inflate total wait past the client budget.
const REQ_TIMEOUT_MS = Number(process.env.ANTHROPIC_TIMEOUT_MS || 25000);
const client = new Anthropic({ maxRetries: 0, timeout: REQ_TIMEOUT_MS }); // ANTHROPIC_API_KEY from env

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) =>
  res.json({ ok: true, primary: PRIMARY, fallback: FALLBACK, hasKey: !!process.env.ANTHROPIC_API_KEY }),
);

// D5-52: KITAP also lives server-side — feeds requests where the client sends it empty/missing.
// kitap_summary.ts is a single template literal with no interpolation: the text between the
// first and last backtick IS the value. mtime cache comes from loadPrompt; edits auto-refresh.
function serverKitap() {
  const src = loadPrompt("src/data/kitap_summary.ts");
  const a = src.indexOf("`");
  const b = src.lastIndexOf("`");
  return a >= 0 && b > a ? src.slice(a + 1, b) : "";
}

// Shared coach call: KITAP primer (with cache_control) + fallback chain.
async function runCoach(res, systemRel, { messages = [], karne = "", kitap = "" }, primerNote) {
  const system = loadPrompt(systemRel);
  // D5-52/D7-72b: if the client sent no kitap, fall back to the server-side summary; if still
  // empty, skip the block entirely — an empty {type:'text'} block 400s on BOTH models.
  const bookText = kitap && kitap.trim() ? kitap : serverKitap();
  const karneText =
    `KARNE (due items first; test the same concept in a DIFFERENT disguise, ` +
    `don't announce in advance which old question you're re-testing):\n${karne}\n\n${primerNote}`;
  // D5-51: KARNE changes every turn; kept in the first message it busts the KITAP prompt cache
  // each turn. The first message keeps only KITAP (breakpoint 1); KARNE rides on the LAST user
  // turn as a separate block; 2nd breakpoint on the last history block (limit 4) → history
  // reads from cache.
  const finalMessages = [];
  if (bookText.trim()) {
    finalMessages.push({
      role: "user",
      content: [{ type: "text", text: bookText, cache_control: { type: "ephemeral" } }],
    });
  }
  const last = messages[messages.length - 1];
  if (last && last.role === "user" && typeof last.content === "string" && last.content) {
    finalMessages.push(...messages.slice(0, -1), {
      role: "user",
      content: [
        { type: "text", text: last.content, cache_control: { type: "ephemeral" } },
        { type: "text", text: karneText },
      ],
    });
  } else if (finalMessages.length > 0) {
    // empty history or not ending on a user turn → KARNE becomes the primer's 2nd block (old shape)
    finalMessages[0].content.push({ type: "text", text: karneText });
    finalMessages.push(...messages);
  } else {
    finalMessages.push({ role: "user", content: [{ type: "text", text: karneText }] }, ...messages);
  }
  const base = {
    max_tokens: MAX_TOKENS,
    system,
    messages: finalMessages,
    output_config: { effort: "low" },
  };
  async function call(model) {
    const resp = await client.messages.create({ ...base, model });
    if (resp.stop_reason === "refusal") {
      throw new Error(`refusal (${resp.stop_details?.category || "?"})`);
    }
    // On Fable, thinking counts INSIDE max_tokens → the JSON can get cut off mid-way. Catch
    // truncation explicitly (fallback is tried) instead of a silent "Could not parse JSON".
    if (resp.stop_reason === "max_tokens") {
      throw new Error("response truncated (max_tokens) — output didn't fit");
    }
    const text = (resp.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    return { text, model: resp.model || model };
  }
  try {
    return res.json(await call(PRIMARY));
  } catch (ePrimary) {
    console.warn(`[proxy] ${PRIMARY} failed (${ePrimary.message}) → ${FALLBACK}`);
    try {
      return res.json(await call(FALLBACK));
    } catch (eFallback) {
      console.error("[proxy] fallback failed too:", eFallback);
      return res.status(502).json({ error: `Model error: ${eFallback.message || eFallback}` });
    }
  }
}

app.post("/api/drill", (req, res) =>
  runCoach(res, "src/prompts/drill_system.md", req.body || {}, "Run the drill according to the KITAP curriculum above. Return only valid JSON."),
);

app.post("/api/sim", (req, res) =>
  runCoach(res, "src/prompts/sim_system.md", req.body || {}, "Play the hand street by street according to the KITAP curriculum above. Return only valid JSON."),
);

// --- Phase 3: TTS (OpenAI or ElevenLabs). No key → 501 → client falls back to Web Speech.
const TTS_PROVIDER = process.env.TTS_PROVIDER || "web";
const OPENAI_VOICE = process.env.OPENAI_TTS_VOICE || "alloy";
// Language/tone directive for gpt-4o-mini-tts: English coach, poker terms delivered clearly.
const OPENAI_INSTRUCTIONS =
  process.env.OPENAI_TTS_INSTRUCTIONS ||
  "Speak entirely in English, as a calm and clear poker coach explaining to a student. " +
    "Unhurried, warm, confident pace. Pronounce poker terms " +
    "(bluff-catcher, value, all-in, board) clearly and naturally.";
const ELEVEN_VOICE = process.env.ELEVENLABS_VOICE_ID || "";

app.post("/api/tts", async (req, res) => {
  const { text = "", provider = TTS_PROVIDER } = req.body || {};
  if (!text.trim()) return res.status(400).json({ error: "empty text" });
  // D8-82: speech.ts already sends short chunks; don't relay unbounded bodies to the TTS provider.
  if (text.length > 4000) return res.status(400).json({ error: "text too long" });

  try {
    if (provider === "openai") {
      if (!process.env.OPENAI_API_KEY)
        return res.status(501).json({ error: "OPENAI_API_KEY missing" });
      const r = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
          voice: OPENAI_VOICE,
          input: text,
          instructions: OPENAI_INSTRUCTIONS,
          response_format: "mp3",
        }),
      });
      if (!r.ok) return res.status(502).json({ error: `openai ${r.status}` });
      res.setHeader("content-type", "audio/mpeg");
      return res.send(Buffer.from(await r.arrayBuffer()));
    }
    if (provider === "elevenlabs") {
      if (!process.env.ELEVENLABS_API_KEY || !ELEVEN_VOICE)
        return res.status(501).json({ error: "ELEVENLABS key/voice missing" });
      const r = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": process.env.ELEVENLABS_API_KEY,
            "content-type": "application/json",
            accept: "audio/mpeg",
          },
          body: JSON.stringify({
            text,
            model_id: process.env.ELEVENLABS_MODEL || "eleven_multilingual_v2",
          }),
        },
      );
      if (!r.ok) return res.status(502).json({ error: `elevenlabs ${r.status}` });
      res.setHeader("content-type", "audio/mpeg");
      return res.send(Buffer.from(await r.arrayBuffer()));
    }
    return res.status(501).json({ error: "TTS provider is 'web' (no proxy audio)" });
  } catch (e) {
    return res.status(502).json({ error: String(e?.message || e) });
  }
});

// D8-75: bind loopback only — phone access still works via the vite dev proxy.
app.listen(PORT, "127.0.0.1", () =>
  console.log(`[proxy] http://localhost:${PORT}  (${PRIMARY} → ${FALLBACK}, tts=${TTS_PROVIDER})`),
);
