import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";

export const dynamic = "force-dynamic";

export default async function TemplateSamplePage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const sampleUrl = `/api/templates/ruwaq/sample?locale=${locale}`;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
          <RuwaqLogo href="/" showSubtitle subtitle={t.app.subtitle} />
          <LocaleSwitcher />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
        <Link
          href="/proposals/new"
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          {t.templates.back}
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          {t.templates.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {t.templates.subtitle}
        </p>

        <div className="mt-8 rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">{t.templates.note}</p>
          <a
            href={sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
          >
            {t.templates.openSample}
          </a>
          <p className="mt-3 text-xs text-gray-400">{t.templates.openSampleHint}</p>
        </div>
      </main>
    </div>
  );
}
