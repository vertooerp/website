/**
 * Schätzt die Lesezeit eines Textes in Minuten.
 * Annahme: ~200 Wörter pro Minute (deutscher Fließtext).
 */
export function readingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
