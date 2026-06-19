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
      className="flex rounded-lg border border-gray-200 p-0.5 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("ar")}
        disabled={pending}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          locale === "ar"
            ? "bg-brand-500 text-white"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        عربي
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={pending}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          locale === "en"
            ? "bg-brand-500 text-white"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        EN
      </button>
    </div>
  );
}
