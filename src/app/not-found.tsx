import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-xl font-bold text-gray-900">{t.errors.notFoundTitle}</h1>
      <p className="mt-2 text-sm text-gray-600">{t.errors.notFoundMessage}</p>
      <Link
        href="/proposals/new"
        className="mt-6 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
      >
        {t.errors.home}
      </Link>
    </div>
  );
}
