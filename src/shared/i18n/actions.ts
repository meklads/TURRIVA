"use server";

import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "./locale";

/** Prefer path-based switching (LocaleSwitcher). Kept for forms / non-URL callers. */
export async function setLocaleAction(locale: Locale) {
  (await cookies()).set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
