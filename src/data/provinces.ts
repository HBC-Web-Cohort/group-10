/** Canonical list of Afghanistan's 34 provinces. Single source of truth. */
export const AFGHAN_PROVINCES = [
  "Kabul",
  "Kapisa",
  "Parwan",
  "Wardak",
  "Logar",
  "Ghazni",
  "Paktia",
  "Paktika",
  "Khost",
  "Nangarhar",
  "Laghman",
  "Kunar",
  "Nuristan",
  "Badakhshan",
  "Takhar",
  "Baghlan",
  "Kunduz",
  "Samangan",
  "Balkh",
  "Jawzjan",
  "Faryab",
  "Sar-e Pol",
  "Badghis",
  "Herat",
  "Farah",
  "Nimroz",
  "Helmand",
  "Kandahar",
  "Zabul",
  "Uruzgan",
  "Daykundi",
  "Bamyan",
  "Panjshir",
  "Ghor",
] as const;

export type Province = (typeof AFGHAN_PROVINCES)[number];

/** Tolerant matcher so URLs like ?province=bamiyan still resolve to "Bamyan". */
const ALIASES: Record<string, string> = {
  bamiyan: "Bamyan",
  bamian: "Bamyan",
  "sar-e-pol": "Sar-e Pol",
  sarepol: "Sar-e Pol",
  wakhan: "Badakhshan",
};

export function normalizeProvince(value: string | undefined | null): string | null {
  if (!value) return null;
  const key = value.trim().toLowerCase();
  const aliased = ALIASES[key] ?? ALIASES[key.replace(/\s+/g, "-")];
  if (aliased) return aliased;
  return AFGHAN_PROVINCES.find((p) => p.toLowerCase() === key) ?? null;
}
