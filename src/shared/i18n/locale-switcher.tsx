"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "./locale";
import { useLocale } from "./context";
import { localizePath, stripLocalePrefix } from "./path";

type LocaleSwitcherProps = {
  variant?: "default" | "luxury";
};

function targetHref(pathname: string, next: Locale): string {
  const { pathname: bare } = stripLocalePrefix(pathname);
  const qs = typeof window !== "undefined" ? window.location.search : "";
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  return `${localizePath(bare, next)}${qs}${hash}`;
}

export function LocaleSwitcher({ variant = "default" }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const isLuxury = variant === "luxury";

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    // Full navigation: path prefix is the source of truth (middleware sets cookie).
    // Avoid awaiting a server action — that was hanging the switcher while Link nav worked.
    window.location.assign(targetHref(pathname, next));
  };

  const shellClass = isLuxury
    ? "lux-locale-switch flex rounded-full border p-0.5 text-[11px] font-semibold"
    : "flex rounded-full border border-slate-200 bg-ruwaq-canvas-soft p-0.5 text-xs font-semibold";

  const activeClass = isLuxury
    ? "bg-lux-ink text-white shadow-sm"
    : "bg-ruwaq-ink text-white shadow-sm";

  const idleClass = isLuxury
    ? "text-lux-ink-soft hover:text-lux-ink"
    : "text-ruwaq-ink-muted hover:text-ruwaq-ink";

  return (
    <div className={shellClass} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => switchTo("ar")}
        aria-pressed={locale === "ar"}
        className={`rounded-full px-2.5 py-1.5 transition-all duration-300 ease-apple sm:px-3 ${
          locale === "ar" ? activeClass : idleClass
        }`}
      >
        عربي
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1.5 transition-all duration-300 ease-apple sm:px-3 ${
          locale === "en" ? activeClass : idleClass
        }`}
      >
        EN
      </button>
    </div>
  );
}
