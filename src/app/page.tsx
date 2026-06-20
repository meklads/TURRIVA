import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <RuwaqLogo href="/" showSubtitle subtitle={t.app.subtitle} />
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
          <Link
            href="/templates/sample"
            className="rounded-lg border border-brand-200 bg-brand-50/50 px-8 py-3 text-sm font-medium text-brand-800 hover:bg-brand-50"
          >
            {t.nav.previewSample}
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg gap-3 text-sm text-gray-600 sm:grid-cols-3">
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
        <p className="mx-auto mt-6 max-w-md text-sm text-gray-500">
          {t.landing.trustLine}
        </p>
      </main>
    </div>
  );
}
