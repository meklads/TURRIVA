import { ar } from "./messages/ar";

/** Default locale: Arabic. English toggle in Phase 3. */
export type Locale = "ar" | "en";

export const defaultLocale: Locale = "ar";

export function getMessages(_locale: Locale = defaultLocale) {
  return ar;
}

/** Shorthand for components */
export const t = ar;
