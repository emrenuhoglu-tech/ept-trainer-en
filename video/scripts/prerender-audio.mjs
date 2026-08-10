// Renders module narrations to mp3 and saves them as video/public/audio/<id>-<i>.mp3.
// The proxy (npm run server, main project) + a TTS key must be running.
// Usage: node scripts/prerender-audio.mjs [PROXY_URL]
import { mkdirSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const PROXY = process.argv[2] || "http://localhost:8787";
const mod = await import(pathToFileURL("../src/data/modules.ts").href).catch(
  () => import(pathToFileURL("../../src/data/modules.ts").href),
);
// NOTE: a .ts import may not work in Node; convert modules to JSON if needed.
const modules = mod.modules;

mkdirSync("public/audio", { recursive: true });
for (const m of modules) {
  for (let i = 0; i < m.slides.length; i++) {
    const text = m.slides[i].narration;
    const r = await fetch(`${PROXY}/api/tts`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!r.ok) {
      console.error(`[tts] ${m.id}-${i} skipped (${r.status})`);
      continue;
    }
    const buf = Buffer.from(await r.arrayBuffer());
    writeFileSync(`public/audio/${m.id}-${i}.mp3`, buf);
    console.log(`[tts] ${m.id}-${i}.mp3 (${buf.length} bytes)`);
  }
}
console.log("done.");
