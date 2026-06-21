"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "./actions";
import type { Locale } from "./locale";
import { useLocale } from "./context";

export function LocaleSwitcher({ inverted = false }: { inverted?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  };

  return (
    <div
      className={`flex rounded-full border p-0.5 text-xs font-semibold ${
        inverted
          ? "border-white/25 bg-white/10 backdrop-blur-sm"
          : "border-ruwaq-stone/80 bg-ruwaq-linen"
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("ar")}
        disabled={pending}
        className={`rounded-full px-3 py-1.5 transition-all duration-300 ease-apple ${
          locale === "ar"
            ? inverted
              ? "bg-white text-charcoal shadow-sm"
              : "bg-ruwaq-ink text-white shadow-sm"
            : inverted
              ? "text-white/70 hover:text-white"
              : "text-ruwaq-ink-muted hover:text-ruwaq-ink"
        }`}
      >
        عربي
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={pending}
        className={`rounded-full px-3 py-1.5 transition-all duration-300 ease-apple ${
          locale === "en"
            ? inverted
              ? "bg-white text-charcoal shadow-sm"
              : "bg-ruwaq-ink text-white shadow-sm"
            : inverted
              ? "text-white/70 hover:text-white"
              : "text-ruwaq-ink-muted hover:text-ruwaq-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
