import { useMemo } from "react";
import { sectionBlock, stripInline } from "../../content/curriculum";

// Generic chapter viewer — parses any "## Chapter N" section from the raw MD and renders
// it readably on mobile. Poker content is never HAND-written; it comes straight from
// content/poker_pocket_book_v5.md (fidelity). B11–B16, added in v5, surface through this
// view (they never appeared in the app before).

// NAVIGATION labels only (not poker content) — the headings exist verbatim in the book.
export const NEW_CHAPTERS: { n: number; short: string }[] = [
  { n: 11, short: "Bloated Pot · Turn · River" },
  { n: 12, short: "ICM & Final Table" },
  { n: 13, short: "Multiway Pot" },
  { n: 14, short: "40–70bb Bridge" },
  { n: 15, short: "PLO Tournament Layer" },
  { n: 16, short: "Mental Spine" },
];

type Block =
  | { k: "h3"; text: string }
  | { k: "table"; headers: string[]; rows: string[][] }
  | { k: "quote"; text: string }
  | { k: "list"; items: string[] }
  | { k: "p"; text: string };

function parseBlocks(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    const text = para.join(" ").trim();
    if (text) blocks.push({ k: "p", text });
    para = [];
  };
  let i = 0;
  while (i < lines.length) {
    const t = lines[i].trim();
    if (t === "" || t === "---") {
      flush();
      i++;
    } else if (t.startsWith("### ")) {
      flush();
      blocks.push({ k: "h3", text: t.slice(4).trim() });
      i++;
    } else if (t.startsWith("|")) {
      flush();
      const tbl: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) tbl.push(lines[i++].trim());
      const cells = (l: string) =>
        l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => stripInline(c));
      blocks.push({ k: "table", headers: cells(tbl[0]), rows: tbl.slice(2).map(cells) });
    } else if (t.startsWith("> ")) {
      flush();
      blocks.push({ k: "quote", text: t.slice(2).trim() });
      i++;
    } else if (/^([-*]|\d+\.)\s/.test(t)) {
      flush();
      const items: string[] = [];
      while (i < lines.length && /^([-*]|\d+\.)\s/.test(lines[i].trim()))
        items.push(lines[i++].trim().replace(/^([-*]|\d+\.)\s/, ""));
      blocks.push({ k: "list", items });
    } else {
      para.push(t);
      i++;
    }
  }
  flush();
  return blocks;
}

// Tiny inline renderer for **bold** and *italic* (applied to the plain text coming out of the parse).
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) return <b key={i}>{p.slice(2, -2)}</b>;
        if (p.startsWith("*") && p.endsWith("*"))
          return (
            <i key={i} className="text-neutral-400">
              {p.slice(1, -1)}
            </i>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export function ChapterView({ title, onDone }: { title: string; onDone: () => void }) {
  const blocks = useMemo(() => parseBlocks(sectionBlock(title)), [title]);

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Chapters
        </button>
        <span className="font-semibold text-neutral-100">📖 Book</span>
        <span className="w-16" />
      </div>
      <h1 className="text-base font-semibold leading-snug text-neutral-100">{title}</h1>

      {blocks.map((b, i) => {
        if (b.k === "h3")
          return (
            <h2 key={i} className="mt-2 text-sm font-semibold text-accent">
              {b.text}
            </h2>
          );
        if (b.k === "quote")
          return (
            <blockquote
              key={i}
              className="border-l-2 border-accent bg-accent-soft px-3 py-2 text-[13px] font-medium leading-relaxed text-accent"
            >
              <Inline text={b.text} />
            </blockquote>
          );
        if (b.k === "list")
          return (
            <ul key={i} className="ml-1 space-y-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-2 text-[13px] leading-snug text-neutral-200">
                  <span className="shrink-0 text-accent">•</span>
                  <span>
                    <Inline text={it} />
                  </span>
                </li>
              ))}
            </ul>
          );
        if (b.k === "table")
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr>
                    {b.headers.map((h, j) => (
                      <th
                        key={j}
                        className="border border-surface-3 bg-surface-2 px-2 py-1 text-left font-semibold text-neutral-300"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, ri) => (
                    <tr key={ri}>
                      {r.map((c, ci) => (
                        <td key={ci} className="border border-surface-3 px-2 py-1 align-top text-neutral-200">
                          <Inline text={c} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return (
          <p key={i} className="text-[13px] leading-relaxed text-neutral-300">
            <Inline text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
