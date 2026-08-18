// Build-time seslendirme: tüm ders anlatımlarını OpenAI TTS ile MP3'e basıp
// public/tts/<key>.mp3 olarak yazar. Idempotent — var olan anahtarı atlar.
// speech.ts ile AYNI hashKey → canlıda static servis edilir (GitHub Pages, proxy YOK).
// Çalıştır: npm run bake:tts   (anahtar .env'deki OPENAI_API_KEY'den okunur)
import { build } from "esbuild";
import path from "node:path";
import os from "node:os";
import fs from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");

// Kitabı ?raw import eden modüller için (selfcheck ile aynı loader).
const rawLoader = {
  name: "vite-raw",
  setup(b) {
    b.onResolve({ filter: /\?raw$/ }, (a) => ({
      path: path.join(a.resolveDir, a.path.replace(/\?raw$/, "")),
      namespace: "raw",
    }));
    b.onLoad({ filter: /.*/, namespace: "raw" }, (a) => ({
      contents: `export default ${JSON.stringify(fs.readFileSync(a.path, "utf8"))}`,
      loader: "js",
    }));
  },
};

const out = path.join(os.tmpdir(), `ept-bake-${process.pid}.mjs`);
await build({
  entryPoints: [path.join(here, "bake.entry.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: out,
  plugins: [rawLoader],
  logLevel: "warning",
});
const { clips } = await import(pathToFileURL(out).href);
try {
  fs.unlinkSync(out);
} catch {
  /* yoksa geç */
}

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("HATA: OPENAI_API_KEY yok (.env). Bake iptal.");
  process.exit(1);
}
const MODEL = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
const VOICE = process.env.OPENAI_TTS_VOICE || "nova";
const INSTR =
  process.env.OPENAI_TTS_INSTRUCTIONS ||
  "Speak entirely in Turkish, as a calm and clear poker coach explaining to a student. " +
    "Unhurried, warm, confident pace. Pronounce embedded English poker terms " +
    "(bluff-catcher, value, all-in, board) clearly but blended naturally into the Turkish speech.";

const outDir = path.join(root, "public", "tts");
fs.mkdirSync(outDir, { recursive: true });

console.log(`Bake: ${clips.length} benzersiz cümle → ${MODEL}/${VOICE} → public/tts/`);
let made = 0;
let skip = 0;
let fail = 0;
for (let i = 0; i < clips.length; i++) {
  const { key, text } = clips[i];
  const file = path.join(outDir, key + ".mp3");
  if (fs.existsSync(file)) {
    skip++;
    continue;
  }
  try {
    const r = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: { authorization: `Bearer ${KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        voice: VOICE,
        input: text,
        instructions: INSTR,
        response_format: "mp3",
      }),
    });
    if (!r.ok) {
      console.error(`\n  ✗ ${key} openai ${r.status}: ${text.slice(0, 48)}`);
      fail++;
      continue;
    }
    fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
    made++;
  } catch (e) {
    console.error(`\n  ✗ ${key}: ${String(e?.message || e)}`);
    fail++;
  }
  process.stdout.write(`\r  ${i + 1}/${clips.length}  (yeni ${made}, atla ${skip}, hata ${fail})   `);
}
// Manifest: mevcut anahtarlar (debug/temizlik için).
fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(clips.map((c) => c.key)));
console.log(`\nBitti: yeni ${made}, atlandı ${skip}, hata ${fail}. Toplam ${clips.length} cümle.`);
if (fail) process.exit(1);
