// Table simulator client — POSTs to /api/sim, returns street-by-street JSON.
// Same pattern as Drill; uses a separate system prompt (sim_system.md).
import { KITAP } from "../data/kitap_summary";
import type { ChatMsg } from "./drillClient";

export interface SimJson {
  narration: string;
  street: string; // preflop|flop|turn|river|done
  pot_bb: number;
  eff_stack_bb: number;
  hero_cards: string; // "As Kh"
  board: string; // "2c 4d 5s" | ""
  to_call_bb: number | null;
  question: string;
  options: string[];
  done: boolean;
  evaluation: "correct" | "leak" | "ok" | null;
  lesson: string | null;
  concept: string | null;
}

export interface SimResult {
  ok: boolean;
  data?: SimJson;
  raw?: string;
  model?: string;
  error?: string;
  offline?: boolean; // proxy unreachable → suggest the offline Range Quiz
}

function extractJson(text: string): string {
  const a = text.indexOf("{");
  const b = text.lastIndexOf("}");
  return a >= 0 && b > a ? text.slice(a, b + 1) : text;
}

export async function simTurn(messages: ChatMsg[], karne: string): Promise<SimResult> {
  try {
    const r = await fetch("/api/sim", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages, karne, kitap: KITAP }),
      signal: AbortSignal.timeout(60000), // a hung call must not lock the UI forever
    });
    const j = await r.json();
    if (!r.ok || j.error) {
      return { ok: false, error: j.error || `HTTP ${r.status}`, raw: j.text };
    }
    const text: string = j.text ?? "";
    try {
      return { ok: true, data: JSON.parse(extractJson(text)) as SimJson, model: j.model };
    } catch {
      return { ok: false, raw: text, model: j.model, error: "Could not parse JSON" };
    }
  } catch {
    // No connection / timeout → proxy is down. Point to the offline, book-derived quiz.
    return { ok: false, offline: true, error: "Server offline — the offline Range Quiz runs from the book." };
  }
}
