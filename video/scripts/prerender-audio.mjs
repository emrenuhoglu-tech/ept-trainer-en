// Modül anlatımlarını mp3'e çevirip video/public/audio/<id>-<i>.mp3 olarak kaydeder.
// Proxy (npm run server, ana proje) + TTS anahtarı çalışıyor olmalı.
// Kullanım: node scripts/prerender-audio.mjs [PROXY_URL]
import { mkdirSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const PROXY = process.argv[2] || "http://localhost:8787";
const mod = await import(pathToFileURL("../src/data/modules.ts").href).catch(
  () => import(pathToFileURL("../../src/data/modules.ts").href),
);
// NOT: .ts importu Node'da çalışmayabilir; gerekirse modules'ı JSON'a çevirin.
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
      console.error(`[tts] ${m.id}-${i} atlandı (${r.status})`);
      continue;
    }
    const buf = Buffer.from(await r.arrayBuffer());
    writeFileSync(`public/audio/${m.id}-${i}.mp3`, buf);
    console.log(`[tts] ${m.id}-${i}.mp3 (${buf.length} bayt)`);
  }
}
console.log("bitti.");
