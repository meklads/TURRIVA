"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "./actions";
import type { Locale } from "./locale";
import { useLocale } from "./context";

export function LocaleSwitcher() {
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
      className="flex rounded-lg border border-ruwaq-cream bg-ruwaq-cream-bg/50 p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("ar")}
        disabled={pending}
        className={`rounded-md px-2.5 py-1.5 transition-all ${
          locale === "ar"
            ? "bg-ruwaq-navy text-ruwaq-gold shadow-sm"
            : "text-ruwaq-navy-soft hover:text-ruwaq-navy"
        }`}
      >
        عربي
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={pending}
        className={`rounded-md px-2.5 py-1.5 transition-all ${
          locale === "en"
            ? "bg-ruwaq-navy text-ruwaq-gold shadow-sm"
            : "text-ruwaq-navy-soft hover:text-ruwaq-navy"
        }`}
      >
        EN
      </button>
    </div>
  );
}
