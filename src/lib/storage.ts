// Simple localStorage wrapper. No auth, single user.
const PREFIX = "ept:";

let storageFailed = false;

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

// Returns the raw (unparsed) value — null if absent. loadKarne needs the raw string so it
// can back up corrupt/half-written data instead of overwriting it with the seed.
export function peek(key: string): string | null {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

export function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    // Quota may be full (Safari private mode ~0). Do NOT swallow silently: signal the UI
    // once, otherwise the user thinks it "saved" while the record book stays empty.
    console.warn("ept: localStorage.setItem failed — nothing persisted", e);
    if (!storageFailed) {
      storageFailed = true;
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("ept:storage-fail"));
      }
    }
  }
}

// Serialize every 'ept:' key into a single JSON blob (Download backup).
export function exportAll(): string {
  const out: Record<string, unknown> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(PREFIX)) {
      try {
        out[k] = JSON.parse(localStorage.getItem(k) as string);
      } catch {
        out[k] = localStorage.getItem(k);
      }
    }
  }
  return JSON.stringify(out, null, 2);
}

// Write a backup back in (Load backup). Only 'ept:'-prefixed keys count.
export function importAll(json: string): { ok: boolean; count: number } {
  try {
    const parsed = JSON.parse(json) as Record<string, unknown>;
    let count = 0;
    for (const [k, v] of Object.entries(parsed)) {
      if (!k.startsWith(PREFIX)) continue;
      localStorage.setItem(k, typeof v === "string" ? v : JSON.stringify(v));
      count++;
    }
    return { ok: count > 0, count };
  } catch {
    return { ok: false, count: 0 };
  }
}
