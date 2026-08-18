// Bake girişi: tüm slayt anlatımlarını sentencesOf ile cümlelere böler, benzersiz
// (key,text) çiftlerini toplar. speak()/prefetchHd() ile BİREBİR aynı bölücü + hashKey
// → üretilen public/tts/<key>.mp3 dosyaları çalışma anında bulunur.
import { modules } from "../src/data/modules";
import { sentencesOf, hashKey } from "../src/lib/speech";

const seen = new Set<string>();
export const clips: { key: string; text: string }[] = [];
for (const m of modules)
  for (const s of m.slides)
    for (const t of sentencesOf(s.narration)) {
      const key = hashKey("v1|" + t);
      if (seen.has(key)) continue;
      seen.add(key);
      clips.push({ key, text: t });
    }
