// Kanonik kavram (concept) slug registry — TEK doğruluk kaynağı.
// Slug'lar Türkçe iç-id'dir, ASLA çevrilmez (EN repo'da da birebir aynı).
// LLM drill/sim çıktısındaki concept alanı bu sete göre doğrulanır (bkz. drillClient/simClient
// guard) ve selfcheck karne_seed/scenarios slug'larının tanınırlığını buna göre kontrol eder.

// Drill/Sim modelinin ÜRETEBİLECEĞİ kavramlar (prompt concept enum ile eş).
export const DRILL_CONCEPTS = [
  "kök-hata",
  "stack-modu",
  "3bet-aralik",
  "blof-secimi",
  "draw",
  "boyut",
  "icm",
  "icm-cover",
  "multiway",
] as const;

export type DrillConcept = (typeof DRILL_CONCEPTS)[number];

const DRILL_SET = new Set<string>(DRILL_CONCEPTS);

// Model bilinmeyen/serbest-metin concept döndürürse en yakın güvenli kovaya düşür.
// Karne'ye çöp kavram satırı açılmasını engeller (D4-42).
export function coerceConcept(raw: unknown): DrillConcept {
  const s = String(raw ?? "").trim();
  if (DRILL_SET.has(s)) return s as DrillConcept;
  return "kök-hata";
}
