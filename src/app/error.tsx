"use client";

import { useT } from "@/shared/i18n/context";
import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useT();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-xl font-bold text-ruwaq-ink">{t.errors.title}</h1>
      <p className="mt-2 max-w-md text-sm text-ruwaq-ink-soft">{t.errors.message}</p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={reset}
          className="btn-ruwaq-primary px-4 py-2"
        >
          {t.errors.retry}
        </button>
        <Link
          href="/proposals/new"
          className="btn-ruwaq-secondary px-4 py-2"
        >
          {t.errors.home}
        </Link>
      </div>
    </div>
  );
}
