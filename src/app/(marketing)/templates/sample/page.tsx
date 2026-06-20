import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export const dynamic = "force-dynamic";

export default async function TemplateSamplePage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const sampleUrl = `/api/templates/ruwaq/sample?locale=${locale}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900">{t.templates.title}</h1>
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

      <p className="mt-8">
        <Link
          href="/proposals/new"
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          {t.site.nav.startProposal} →
        </Link>
      </p>
    </div>
  );
}
