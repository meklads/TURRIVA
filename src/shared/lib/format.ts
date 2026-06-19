/** Format SAR amounts for Arabic UI */
export function formatSar(amount: unknown, locale = "ar-SA"): string {
  const n = typeof amount === "number" ? amount : Number(amount ?? 0);
  if (!Number.isFinite(n)) return "0";
  return n.toLocaleString(locale);
}

export function formatDate(iso: string, locale = "ar-SA"): string {
  return new Date(iso).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
