// Drill proxy client. POSTs to /api/drill and parses the model's JSON output.
// If the model returns plain text it doesn't crash: returns {ok:false, raw}, the UI shows "try again".
import { KITAP } from "../data/kitap_summary";

export interface DrillJson {
  evaluation: "correct" | "half" | "wrong" | null;
  severity?: "minor" | "major" | "tournament_life" | null;
  lesson: string;
  concept: string;
  next_question: string | null;
  session_summary: string | null;
}

export interface DrillResult {
  ok: boolean;
  data?: DrillJson;
  raw?: string;
  model?: string;
  error?: string;
  offline?: boolean; // proxy unreachable → suggest the offline Range Quiz
}

export interface ChatMsg {
  role: "user" | "assistant";
  content: string;
}

// In case the model wraps the JSON in a code fence or extra text,
// take everything between the first { and the last }.
function extractJson(text: string): string {
  const a = text.indexOf("{");
  const b = text.lastIndexOf("}");
  return a >= 0 && b > a ? text.slice(a, b + 1) : text;
}

export async function drillTurn(
  messages: ChatMsg[],
  karne: string,
): Promise<DrillResult> {
  try {
    const r = await fetch("/api/drill", {
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
      const data = JSON.parse(extractJson(text)) as DrillJson;
      return { ok: true, data, model: j.model };
    } catch {
      return { ok: false, raw: text, model: j.model, error: "Could not parse JSON" };
    }
  } catch {
    // No connection / timeout → proxy is down. Point to the offline, book-derived quiz.
    return { ok: false, offline: true, error: "Server offline — the offline Range Quiz runs from the book." };
  }
}
