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
      <h1 className="text-xl font-bold text-gray-900">{t.errors.title}</h1>
      <p className="mt-2 max-w-md text-sm text-gray-600">{t.errors.message}</p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
        >
          {t.errors.retry}
        </button>
        <Link
          href="/proposals/new"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm"
        >
          {t.errors.home}
        </Link>
      </div>
    </div>
  );
}
