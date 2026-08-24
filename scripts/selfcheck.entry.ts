// Content selfcheck (assertions) — runs the REAL modules that parse the book and
// verifies that quiz answers stay consistent with poker_pocket_book_v5.md. A gate
// against parser regressions. No logic is copied; the source code itself is what's tested.
import {
  rangeGroups,
  questionBank,
  sectionBlock,
  tenSentences,
  turnBarrelMatrix,
  drawTurnMatrix,
  riverBluffCatch,
  riverThinValue,
  badRiverCatalog,
  openRanges,
  jamRanges,
  jamCallRange,
  fourBetRanges,
  squeezeRange,
  quickReference,
  bridgeBand,
  multiwayMatrix,
  ploStackOff,
  ploModes,
} from "../src/content/curriculum";
import { parseRange } from "../src/lib/handgrid";
import { buildPools } from "../src/modes/quiz/quizEngine";
import { postflopQuestion, betType } from "../src/modes/quiz/postflopEngine";
import { SCENARIOS } from "../src/modes/quiz/scenarios";
import { KARNE_SEED } from "../src/data/karne_seed";
import { computeDue, capDue, migrate, computeMastery, CONCEPT_LABEL } from "../src/lib/karne";
import { localIsoDay } from "../src/lib/date";

// D4-43: use the engine's OWN pool builder (no copied logic — a copy would silently test the
// old behavior after the engine changes). buildPools is the same fn nextQuestion calls.
function poolsFor(opener: string, position: string) {
  const p = buildPools(opener, position);
  return {
    ft: p?.ft ?? "",
    cells: p?.flatCells ?? new Set<string>(),
    flatWide: p?.flatWide ?? false,
    poolFold: p?.poolFold ?? [],
  };
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
for (const n of [11, 12, 13, 14, 15, 16, 17]) {
  const body = sectionBlock("Chapter " + n);
  check(`C${n} sectionBlock non-empty`, body.trim().length > 0, String(body.length));
  check(`C${n} contains at least one table`, body.includes("|"));
}

// Postflop drill (B6/B11 turn+river tables) — fidelity gate: the drilled tables must parse, a known
// crisp cell must carry the book's direction, and the engine must yield a question per street.
{
  const tb = turnBarrelMatrix();
  check("B11.1 turn matrix 4 rows", !!tb && tb.rows.length === 4, tb ? String(tb.rows.length) : "null");
  const dr = drawTurnMatrix();
  check("B6.2 draw matrix 4 rows", !!dr && dr.rows.length === 4, dr ? String(dr.rows.length) : "null");
  const rv = riverBluffCatch();
  check("B11.2 river matrix 3 rows", !!rv && rv.rows.length === 3, rv ? String(rv.rows.length) : "null");
  const tv = riverThinValue();
  check("B11.3 thin-value matrix 3 rows", !!tv && tv.rows.length === 3, tv ? String(tv.rows.length) : "null");
  const cat = badRiverCatalog();
  check("B11.4 bad-river catalog 4 items", cat.length === 4, String(cat.length));
  // TPGK vs an overcard turn → the book cell is "Check-call" (col index 2). If this drifts, the
  // grader would teach a wrong direction — stop the build.
  if (tb) {
    const tpgk = tb.rows.find((r) => /good kicker|iyi kicker/i.test(r[0]));
    check("B11.1 TPGK×overcard = check-call", !!tpgk && /check-call/i.test(tpgk[2] || ""), tpgk?.[2]);
    // The value/bluff split hinges on the air+blocker row existing (→ bluff barrel).
    check("B11.1 air+blocker row present", tb.rows.some((r) => /air|hava|blocker|bloker/i.test(r[0])));
  }
  // 11.3 rec column is a value bet (the river's home for VALUE betting).
  check("B11.3 rec col = value bet", !!tv && /value bet/i.test(tv.rows[0]?.[1] || ""), tv?.rows[0]?.[1]);
  // value/bluff tag: pair hands bet for VALUE, only air+blocker is a bluff barrel. (Regression gate:
  // a bare /air/ regex silently tagged "Overpair"/"Top pair" as bluffs — every value bet mis-graded.)
  check("betType Overpair = value", betType("Overpair") === "betvalue");
  check("betType Top pair good kicker = value", betType("Top pair good kicker") === "betvalue");
  check("betType Air + blocker = bluff", betType("Air + blocker") === "betbluff");
  check("postflop turn Q generates", !!postflopQuestion("turn"));
  check("postflop river Q generates", !!postflopQuestion("river"));
}

// D1-1: an open with no separate BB flat list generates no fold pool (JJ/TT/AQs not graded 'fold').
check("D1-1 UTG→BB fold pool empty (BB flat wide)", poolsFor("UTG/UTG+1", "BB").poolFold.length === 0);

// D4-41: buildPools returns null for an invalid group/position; every real row yields a pool.
check("D4-41 buildPools null on invalid group", buildPools("YOK", "XX") === null);
for (const g of groups) {
  for (const row of g.table.rows) {
    const p = buildPools(g.opener, row[0]);
    check(
      `D4-41 ${g.opener}→${row[0]} yields a pool`,
      !!p && (p.set3.size > 0 || p.setFlat.size > 0 || p.poolFold.length > 0),
    );
  }
}

// D4-37: Range Guide / RangeRecall parsers — if the book wording changes, don't silently blank.
check("D4-37 openRanges non-empty", openRanges().length > 0);
check("D4-37 jamRanges non-empty", jamRanges().length > 0);
{
  const jc = jamCallRange();
  check("D4-37 jamCallRange non-empty + hand token", jc !== "" && parseRange(jc).cells.size > 0, jc);
}
check("D4-37 fourBetRanges parses", fourBetRanges() !== null);
check("D4-37 squeezeRange parses", squeezeRange() !== null);
{
  const qr = quickReference();
  check(
    "D4-37 quickRef 4 base fields filled",
    qr.decisionOrder.length > 0 && !!qr.sizes && !!qr.band2530 && qr.redFlags.length > 0,
  );
  // D6-55: the 4 missing of the v5 Quick Reference's 8 cards (Postflop/ICM/Multiway/Tilt) surfaced.
  check("D6-55 quickRef Postflop card", !!qr.postflop && qr.postflop.rows.length > 0);
  check("D6-55 quickRef ICM card", !!qr.icm && qr.icm.rows.length > 0);
  check("D6-55 quickRef Multiway card", !!qr.multiway && qr.multiway.rows.length > 0);
  check("D6-55 quickRef Tilt card", !!qr.tilt && qr.tilt.rows.length > 0);
}

// D1-9 / D1-7 / D6-63: new postflop/PLO/bridge tables parse and the engine yields questions.
check("D1-9 bridgeBand (B14.1) parses", !!bridgeBand() && bridgeBand()!.rows.length > 0);
check("D1-7 multiwayMatrix (B13.1) parses", !!multiwayMatrix() && multiwayMatrix()!.rows.length > 0);
check("D1-7 postflop multiway Q generates", !!postflopQuestion("multiway"));
check("D6-63 ploStackOff (B15.2) parses", !!ploStackOff() && ploStackOff()!.rows.length > 0);
check("D6-63 ploModes (B15.1) parses", !!ploModes() && ploModes()!.rows.length > 0);
check("D6-63 postflop PLO Q generates", !!postflopQuestion("plo"));

// D4-38: structural integrity of the 57 scenarios — correct in range, source filled, kavram filled, count fixed.
{
  const badCorrect = SCENARIOS.filter((s) => !(s.correct >= 0 && s.correct < s.options.length));
  const badSource = SCENARIOS.filter((s) => !s.source || !s.source.trim());
  const badKavram = SCENARIOS.filter((s) => typeof s.kavram !== "string" || !s.kavram);
  check("D4-38 scenario count 70 (TR=EN parity)", SCENARIOS.length === 70, String(SCENARIOS.length));
  check("D4-38 all correct within options", badCorrect.length === 0, badCorrect.map((s) => s.q.slice(0, 24)).join("|"));
  check("D4-38 all source filled", badSource.length === 0, String(badSource.length));
  check("D4-38 all kavram filled", badKavram.length === 0, String(badKavram.length));
}

// D4-44 (EN-only): every scenario/seed concept slug has a CONCEPT_LABEL key (else EN chips show raw slug).
{
  const keys = new Set(Object.keys(CONCEPT_LABEL));
  const slugs = new Set<string>([...SCENARIOS.map((s) => s.kavram), ...KARNE_SEED.map((k) => k.kavram)]);
  const missing = [...slugs].filter((s) => !keys.has(s));
  check("D4-44 every slug has a CONCEPT_LABEL", missing.length === 0, missing.join("|"));
}

// D7-73: the karne data layer's pure functions (DUE_CAP expired silently through exactly this gap).
check("D7-73 P0: a correct answer's due is not in the past", computeDue("correct", 1) >= localIsoDay(0), computeDue("correct", 1));
check("D7-73 capDue doesn't push a past date forward", capDue("2000-01-01") === "2000-01-01");
check("D7-73 capDue farFuture <= farFuture", capDue(localIsoDay(365)) <= localIsoDay(365));
check("D7-73 mastery: 3 streak + 3 days = saglam", computeMastery(3, ["a", "b", "c"]) === "saglam");
check("D7-73 mastery: 2 streak + 2 days = yetkin", computeMastery(2, ["a", "b"]) === "yetkin");
check("D7-73 mastery: 1 streak = asina", computeMastery(1, ["a"]) === "asina");
check("D7-73 mastery: 0 = gorundu", computeMastery(0, []) === "gorundu");
{
  const mig = migrate([{ kavram: "x", due: "2030-01-01" }, { kavram: "x" }, { kavram: "y" }]);
  const x = mig.find((e) => e.kavram === "x");
  check("D7-73 migrate v1 multi-row → consolidated (x reps=2)", mig.length === 2 && x?.reps === 2, String(mig.length));
  check("D7-73 migrate malformed field doesn't crash (correctDays array)", Array.isArray(x?.correctDays));
}

check("KARNE_SEED slugs filled", KARNE_SEED.every((k) => typeof k.kavram === "string" && k.kavram.length > 0));

console.log(out.join("\n"));
console.log(`\nRESULT: ${failed === 0 ? "ALL PASS" : failed + " FAIL"}`);
if (failed) process.exit(1);
