// Book -> app coverage report. Catches the "made it into the book but not into the app" gap.
// NOT a gate, a report: a gap in the middle of the pipeline is normal.
//   npm run gapcheck
import { readFileSync, existsSync } from "node:fs";

const book = readFileSync("content/poker_pocket_book_v5.md", "utf8");
const mods = readFileSync("src/data/modules.ts", "utf8");
const scen = readFileSync("src/modes/quiz/scenarios.ts", "utf8");

// The module file carries both `title:` and `"title":` (patch scripts write the quoted form).
const all = (re) => [...mods.matchAll(re)].map((m) => m[1]);

const chapters = [...new Set([...book.matchAll(/^## Chapter (\d+)/gm)].map((m) => Number(m[1])))].sort((a, b) => a - b);
const subs = [...book.matchAll(/^### ([0-9]+\.[0-9A-Za-z-]+)/gm)].map((m) => m[1]);
const eks = subs.filter((s) => /-EK/.test(s));

const modChapters = new Set();
for (const c of all(/"?chapter"?:\s*"([^"]+)"/g)) for (const m of c.matchAll(/Chapter (\d+)/g)) modChapters.add(Number(m[1]));
const slideCount = (mods.match(/"?narration"?:/g) || []).length;
const ekSlides = (mods.match(/"?title"?:\s*"EK:/g) || []).length;

const scenChapters = new Set();
for (const m of scen.matchAll(/source:\s*"([^"]*)"/g)) {
  const b = /Chapter\s*(\d+)/i.exec(m[1]);
  if (b) scenChapters.add(Number(b[1]));
}
const scenCount = (scen.match(/kavram:\s*"/g) || []).length;

const rows = [];
const gap = (label, value, detail) => rows.push({ label, value, detail });

gap("Book", `${chapters.length} chapters / ${subs.length} subsections`, `${eks.length} are -EK`);
gap("Modules", `${slideCount} slides`, `${ekSlides} EK slides`);
gap("Quiz", `${scenCount} scenarios`, "");

// Chapter 10 (Question Bank) is not poker content, it is the quiz's source (QuestionBank.tsx) —
// expecting a module there produces a false signal, so it is exempt. Same exemption as the TR side.
const META = new Set([10]);
const noModule = chapters.filter((c) => !modChapters.has(c) && !META.has(c));
const noScen = chapters.filter((c) => !scenChapters.has(c) && !META.has(c));
// Chapters heavy on -EK but with no EK slide: made it into the book, not into the narration.
const ekByCh = {};
for (const e of eks) ekByCh[Number(e.split(".")[0])] = (ekByCh[Number(e.split(".")[0])] || 0) + 1;

console.log("\n=== COVERAGE REPORT ===");
for (const r of rows) console.log(`  ${r.label.padEnd(10)} ${r.value}${r.detail ? "  (" + r.detail + ")" : ""}`);

console.log("\n--- Gaps ---");
console.log(`  Chapters with no module  : ${noModule.length ? noModule.join(", ") : "none"}`);
console.log(`  Chapters with no scenario: ${noScen.length ? noScen.join(", ") : "none"}`);

const ekTop = Object.entries(ekByCh).sort((a, b) => b[1] - a[1]).slice(0, 8);
console.log(`  -EK density              : ${ekTop.map(([c, n]) => "C" + c + ":" + n).join("  ")}`);
console.log(`     └ ${eks.length} addendum subsections vs ${ekSlides} EK slides.`);

if (existsSync("public/tts/manifest.json")) {
  const man = JSON.parse(readFileSync("public/tts/manifest.json", "utf8"));
  const clips = Array.isArray(man) ? man.length : Object.keys(man.clips || man).length;
  console.log(`  TTS                      : ${clips} clips baked`);
}
console.log("");
