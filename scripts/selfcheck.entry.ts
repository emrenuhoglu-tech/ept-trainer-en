// Content selfcheck (assertions) — runs the REAL modules that parse the book and
// verifies that quiz answers stay consistent with poker_pocket_book_v5.md. A gate
// against parser regressions. No logic is copied; the source code itself is what's tested.
import { rangeGroups, questionBank, sectionBlock, tenSentences } from "../src/content/curriculum";
import { parseRange } from "../src/lib/handgrid";
import { flatText, flatScope } from "../src/modes/quiz/quizEngine";

function poolsFor(opener: string, position: string) {
  const g = rangeGroups().find((x) => x.opener === opener)!;
  const applicable = g.flats.filter((fl) => flatScope(fl).includes(position));
  const ft = flatText(applicable);
  const cells = parseRange(ft).cells;
  // Test the RAW flat text (flatText strips "…and all 65s+ suited connectors" tails).
  const flatWide = /\b(wide|all|most|every)\b/i.test(applicable.join(" "));
  return { ft, cells, flatWide };
}

const out: string[] = [];
let failed = 0;
function check(name: string, cond: boolean, extra = "") {
  if (!cond) failed++;
  out.push(`${cond ? "PASS" : "FAIL"}  ${name}${extra ? "  — " + extra : ""}`);
}

// Can the book be parsed at all
const groups = rangeGroups();
check("rangeGroups() 5 açılış grubu (UTG/LJHJ/CO/BTN/SB)", groups.length === 5, groups.map((g) => g.opener).join("|"));

// IP flat doesn't leak into SB/BB rows (book: flatting from the blinds = losing / prose)
for (const g of groups) {
  for (const row of g.table.rows) {
    if (row[0] === "SB" || row[0] === "BB") {
      const { cells } = poolsFor(g.opener, row[0]);
      check(`${g.opener}→${row[0]}: IP-flat cell sızmıyor`, cells.size === 0, [...cells].join(","));
    }
  }
}

// BB-vs-BTN wide prose flat → no fold questions generated; SB-vs-BTN "almost none" → fold is valid
check("BTN→BB flatWide (fold üretme)", poolsFor("BTN", "BB").flatWide === true);
check("BTN→SB fold geçerli", poolsFor("BTN", "SB").flatWide === false);

// Base flats dropped by sentence continuation are recovered; 150bb+ conditionals don't leak
{
  const co = poolsFor("UTG/UTG+1", "CO").cells;
  check("UTG→CO flat: 98s kurtarıldı", co.has("98s"));
  check("UTG→CO flat: 76s (150bb+) sızmıyor", !co.has("76s"));
  const btn = poolsFor("CO", "BTN").cells;
  check("CO→BTN flat: JTs kurtarıldı", btn.has("JTs"));
  // 65s+ suited-connector prose flat → fold pool suppressed (T9s/98s/87s/76s/65s not mis-graded fold)
  check("CO→BTN flatWide (65s+ connector prose → fold suppressed)", poolsFor("CO", "BTN").flatWide === true);
}

// BB-vs-SB "the field's most profitable 3-bet spot" is surfaced (bullet group)
{
  const sb = groups.find((g) => g.opener === "SB");
  check("SB grubu yüzeyde", !!sb);
  if (sb) {
    const bb = sb.table.rows.find((r) => r[0] === "BB");
    check("SB→BB VALUE 88 cell", !!bb && parseRange(bb[1]).cells.has("88"));
    check("SB→BB flatWide (fold üretme)", poolsFor("SB", "BB").flatWide === true);
  }
}

// Chapter 10 question bank parses in full
{
  const qb = questionBank();
  const total = qb.reduce((n, s) => n + s.questions.length, 0);
  check("Soru Bankası 4 alt-bölüm", qb.length === 4, qb.map((s) => s.questions.length).join("+"));
  check("Soru Bankası 37 soru", total === 37, String(total));
}

// B0 grew to 15 sentences in v5 (12–15 distilled from B11/B12/B13/B16). The Sentences mode +
// report-card context depend on this parse; if the count drops (parser/filter break), stop the build.
{
  const s = tenSentences();
  check("B0 15 cümle parse", s.length === 15, String(s.length));
  check("B0 c.15 tilt cümlesi var", s.some((x) => x.n === 15 && /tilt/i.test(x.rule)));
}

// The new v5 chapters (B11–B16) are rendered by ChapterView via sectionBlock.
// If one comes back empty or a table vanishes, the new Reference view silently goes blank → stop the build.
for (const n of [11, 12, 13, 14, 15, 16]) {
  const body = sectionBlock("Chapter " + n);
  check(`C${n} sectionBlock non-empty`, body.trim().length > 0, String(body.length));
  check(`C${n} contains at least one table`, body.includes("|"));
}

console.log(out.join("\n"));
console.log(`\nRESULT: ${failed === 0 ? "ALL PASS" : failed + " FAIL"}`);
if (failed) process.exit(1);
