// Single source of truth: content/poker_pocket_book_v5.md
// This module reads the raw MD and turns it into structure. No poker value is HAND-written here;
// tables, lists and range groups are parsed directly from the MD.
import raw from "../../content/poker_pocket_book_v5.md?raw";

export const rawMarkdown = raw;

/** Reduce inline markdown (bold, code) to plain text. */
export function stripInline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .trim();
}

export interface MdTable {
  headers: string[];
  rows: string[][];
}

function parseTableLines(lines: string[]): MdTable {
  const cells = (line: string) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => stripInline(c));
  const headers = cells(lines[0]);
  const rows = lines.slice(2).map(cells); // [0]=header, [1]=--- separator
  return { headers, rows };
}

/** Returns the raw body of the section whose heading starts with "## Heading" (not just up to
 *  the next ## or ###, but the whole ## block; sub ### headings included). */
export function sectionBlock(headingStartsWith: string): string {
  const lines = raw.split("\n");
  const out: string[] = [];
  let capturing = false;
  for (const line of lines) {
    const isH2 = line.startsWith("## ") && !line.startsWith("### ");
    if (isH2) {
      const title = line.slice(3).trim();
      if (title.startsWith(headingStartsWith)) {
        capturing = true;
        continue;
      }
      if (capturing) break; // sonraki ## bolumu -> dur
    }
    if (capturing) out.push(line);
  }
  return out.join("\n");
}

export interface Sentence {
  n: number;
  rule: string; // bold main sentence
  context: string; // the explanation beneath it
}

/** Parses Chapter 0's "15 Sentences to Take to the Table" (from the MD, never hand-written). */
export function tenSentences(): Sentence[] {
  const block = sectionBlock("Chapter 0");
  const out: Sentence[] = [];
  let cur: Sentence | null = null;
  for (const raw of block.split("\n")) {
    const m = raw.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/);
    if (m) {
      if (cur) out.push(cur);
      cur = { n: Number(m[1]), rule: stripInline(m[2]), context: "" };
    } else if (cur && raw.trim() && !raw.trim().startsWith("#") && !raw.trim().startsWith("*")) {
      cur.context = (cur.context + " " + stripInline(raw.trim())).trim();
    }
  }
  if (cur) out.push(cur);
  return out.filter((s) => s.n >= 1 && s.n <= 15);
}

/** Returns the ###-subheaded pieces inside the given raw block: { title, body }. */
function subsections(block: string): { title: string; body: string }[] {
  const lines = block.split("\n");
  const res: { title: string; body: string }[] = [];
  let cur: { title: string; body: string[] } | null = null;
  for (const line of lines) {
    if (line.startsWith("### ")) {
      if (cur) res.push({ title: cur.title, body: cur.body.join("\n") });
      cur = { title: line.slice(4).trim(), body: [] };
    } else if (cur) {
      cur.body.push(line);
    }
  }
  if (cur) res.push({ title: cur.title, body: cur.body.join("\n") });
  return res;
}

function findSub(block: string, titleStartsWith: string): string {
  const s = subsections(block).find((x) => x.title.startsWith(titleStartsWith));
  return s ? s.body : "";
}

/** Parses the FIRST markdown table in a block body. */
function firstTable(body: string): MdTable | null {
  const lines = body.split("\n");
  const tbl: string[] = [];
  for (const line of lines) {
    if (line.trim().startsWith("|")) tbl.push(line);
    else if (tbl.length) break;
  }
  return tbl.length >= 2 ? parseTableLines(tbl) : null;
}

/** Returns the list items in a block body (ordered or unordered). */
function listItems(body: string, ordered: boolean): string[] {
  const re = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*]\s+(.*)$/;
  return body
    .split("\n")
    .map((l) => l.match(re))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => stripInline(m[1]));
}

// ---- Section 4.3 — 3-bet range groups by position (M5 interactive table) ----

export interface RangeGroup {
  opener: string; // short: "UTG", "LJ/HJ", "CO", "BTN"
  label: string; // full heading
  table: MdTable; // Position | VALUE | BLUFF
  flats: string[]; // the group's flat notes
}

export function rangeGroups(): RangeGroup[] {
  const b4 = sectionBlock("Chapter 4");
  const body = findSub(b4, "4.3");
  const lines = body.split("\n");

  const groups: RangeGroup[] = [];
  let cur: { label: string; buf: string[] } | null = null;
  const push = () => {
    if (!cur) return;
    const chunk = cur.buf.join("\n");
    let table = firstTable(chunk);
    let flats: string[] = [];
    if (table) {
      flats = cur.buf.filter((l) => /^\*\*[^*]*flat/i.test(l.trim())).map((l) => stripInline(l));
    } else {
      // Table-less (bulleted) group — e.g. "vs SB open (BB only) — the field's most profitable
      // 3-bet spot": VALUE/BLUFF/Flat come as bullets, no table. Convert to a one-row synthetic
      // table; otherwise the book's "most profitable spot" never shows up in quiz/atlas.
      const val = chunk.match(/VALUE:\*\*\s*(.+)/i)?.[1];
      const blof = chunk.match(/BLUFF:\*\*\s*(.+)/i)?.[1];
      if (val || blof) {
        const pos = /\(\s*(BB|SB|BTN|CO)\s+only\s*\)/i.exec(cur.label)?.[1]?.toUpperCase() || "BB";
        table = {
          headers: ["Position", "VALUE", "BLUFF"],
          rows: [[pos, stripInline(val || ""), stripInline(blof || "")]],
        };
        const flatBullet = chunk.match(/Flat:\*\*\s*(.+)/i)?.[1];
        if (flatBullet) flats = [`${pos} flat: ${stripInline(flatBullet)}`];
      }
    }
    if (table) {
      groups.push({ opener: shortOpener(cur.label), label: cur.label, table, flats });
    }
    cur = null;
  };

  for (const line of lines) {
    const m = line.trim().match(/^\*\*(vs\s.+?open.*?)\*\*$/i);
    if (m) {
      push();
      cur = { label: m[1], buf: [] };
    } else if (cur) {
      cur.buf.push(line);
    }
  }
  push();
  return groups;
}

function shortOpener(label: string): string {
  const head = label.replace(/^vs\s+/i, "").split(/\s+open/i)[0].trim();
  return head.replace(/\s*\/\s*/g, "/");
}

// ---- Quick Reference ----

export interface QuickRef {
  decisionOrder: string[];
  sizes: MdTable | null;
  band2530: MdTable | null; // 25–30bb card (v4)
  redFlags: string[];
}

export function quickReference(): QuickRef {
  const block = sectionBlock("Quick Reference");
  return {
    decisionOrder: listItems(findSub(block, "Decision order"), true),
    sizes: firstTable(findSub(block, "Sizes")),
    band2530: firstTable(findSub(block, "25")),
    redFlags: listItems(findSub(block, "Red flags"), false),
  };
}

// ---- Chapter 10 — Question Bank (24 questions, 3 sub-sections). Answers are NOT written
//      in the book (by design: worked verbally in the drill). Questions are parsed from the MD. ----
export interface QBSection {
  title: string;
  questions: string[];
}
export function questionBank(): QBSection[] {
  const block = sectionBlock("Chapter 10");
  return subsections(block)
    .map((s) => ({ title: s.title, questions: listItems(s.body, true) }))
    .filter((s) => s.questions.length > 0);
}

// ---- General helper: get the first table of a ## section (for lesson slides) ----

export function tableFromSection(
  h2StartsWith: string,
  subStartsWith?: string,
): MdTable | null {
  const block = sectionBlock(h2StartsWith);
  const body = subStartsWith ? findSub(block, subStartsWith) : block;
  return firstTable(body);
}

// ---- Range Guide: the ranges the book gives EXPLICITLY per depth ----
// (At in-between/extreme depths the book gives no hand list; there we show only the 4.7
//  character table and qualitative guidance — no made-up grid is EVER generated.)

/** 25–30bb opening ranges (Section 5.1). */
export function openRanges(): { position: string; range: string }[] {
  const t = tableFromSection("Chapter 5", "5.1");
  return t ? t.rows.map((r) => ({ position: r[0], range: r[1] })) : [];
}

/** 25–30bb jam ranges (Section 5.2). */
export function jamRanges(): { vs: string; range: string }[] {
  const t = tableFromSection("Chapter 5", "5.2");
  return t ? t.rows.map((r) => ({ vs: r[0], range: r[1] })) : [];
}

/** 25–30bb call range vs a jam (Section 5.3, prose). */
export function jamCallRange(): string {
  const body = findSub(sectionBlock("Chapter 5"), "5.3");
  const m = body.match(/all-in:\s*([^.]+)\./);
  return m ? stripInline(m[1]) : "";
}

/** Your 4-bet response vs a 3-bet (Section 4.5). value + (mix) + bluff + flat. */
export function fourBetRanges():
  | { value: string; blof: string; flat: string; foldNote: string }
  | null {
  const t = tableFromSection("Chapter 4", "4.5");
  if (!t) return null;
  const cell = (key: string) => {
    const row = t.rows.find((r) => r[0].toLowerCase().startsWith(key));
    return row ? row[1] : "";
  };
  const firstSeg = (s: string) => s.split(/[—;:]/)[0].trim(); // hand tokens come before the prose
  const value = firstSeg(cell("4-bet value"));
  const karisim = firstSeg(cell("4-bet mixed"));
  const blof = firstSeg(cell("4-bet bluff"));
  const flat = firstSeg(cell("flat"));
  const foldNote = cell("fold");
  const mix = karisim
    ? karisim.split(",").map((h) => `${h.trim()} (mixed)`).join(", ")
    : "";
  return { value: mix ? `${value}, ${mix}` : value, blof, flat, foldNote };
}

/** Squeeze range (Section 4.6). */
export function squeezeRange(): { value: string; blof: string } | null {
  const body = findSub(sectionBlock("Chapter 4"), "4.6");
  const v = body.match(/VALUE:\*\*\s*(.+)/i);
  const b = body.match(/BLUFF:\*\*\s*(.+)/i);
  if (!v && !b) return null;
  return { value: v ? stripInline(v[1]) : "", blof: b ? stripInline(b[1]) : "" };
}

/** Stack-mode top layer (Section 4.7) — qualitative adjustment table by depth. */
export function stackLayer(): MdTable | null {
  return tableFromSection("Chapter 4", "4.7");
}

// ---- Chapters 6 & 11 — Turn/River decision tables (Postflop drill) ----
// These are the book's DIRECTION tables. Sizes are (calibrate) in the book, so the drill
// surfaces DIRECTION only (bet/check/call/fold) — never an invented size. Each cell IS the
// correct answer; nothing here is hand-written.

/** Turn second-barrel matrix (Section 11.1): my hand × turn-card type → action. */
export function turnBarrelMatrix(): MdTable | null {
  return tableFromSection("Chapter 11", "11.1");
}

/** Turn draw matrix (Section 6.2): draw quality → bet/check direction. */
export function drawTurnMatrix(): MdTable | null {
  return tableFromSection("Chapter 6", "6.2");
}

/** River bluff-catch matrix (Section 11.2): villain size → call/fold tendency. */
export function riverBluffCatch(): MdTable | null {
  return tableFromSection("Chapter 11", "11.2");
}

/** River thin-value matrix (Section 11.3): my hand class × villain type → value-bet / check-call. */
export function riverThinValue(): MdTable | null {
  return tableFromSection("Chapter 11", "11.3");
}

/** Bad-river catalog (Section 11.4): the cards that kill an overpair's value. */
export function badRiverCatalog(): string[] {
  return listItems(findSub(sectionBlock("Chapter 11"), "11.4"), false);
}
