"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocaleAction } from "./actions";
import type { Locale } from "./locale";
import { useLocale } from "./context";
import { localizePath, stripLocalePrefix } from "./path";

type LocaleSwitcherProps = {
  variant?: "default" | "luxury";
};

export function LocaleSwitcher({ variant = "default" }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const isLuxury = variant === "luxury";

  const switchTo = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocaleAction(next);
      const { pathname: bare } = stripLocalePrefix(pathname);
      router.push(localizePath(bare, next));
      router.refresh();
    });
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
        disabled={pending}
        className={`rounded-full px-2.5 py-1.5 transition-all duration-300 ease-apple sm:px-3 ${
          locale === "ar" ? activeClass : idleClass
        }`}
      >
        عربي
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={pending}
        className={`rounded-full px-2.5 py-1.5 transition-all duration-300 ease-apple sm:px-3 ${
          locale === "en" ? activeClass : idleClass
        }`}
      >
        EN
      </button>
    </div>
  );
}
