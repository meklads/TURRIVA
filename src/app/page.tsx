import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-brand-600">{t.app.name}</span>
            <span className="text-[10px] text-gray-400">{t.app.subtitle}</span>
          </div>
          <Link
            href="/login"
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            {t.nav.signIn}
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t.landing.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          {t.landing.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/proposals/new"
            className="rounded-lg bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
          >
            {t.landing.cta}
          </Link>
          <Link
            href="/proposals"
            className="rounded-lg border border-gray-200 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {t.landing.ctaSecondary}
          </Link>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-3 text-sm text-gray-600 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3">
            {t.landing.feature1}
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3">
            {t.landing.feature2}
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3">
            {t.landing.feature3}
          </div>
        </div>
      </main>
    </div>
  );
}
