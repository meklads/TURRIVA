import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export const dynamic = "force-dynamic";

export default async function TemplateSamplePage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const sampleUrl = `/api/templates/ruwaq/sample?locale=${locale}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.nav.previewSample}</p>
      <h1 className="ruwaq-section-title mt-2">{t.templates.title}</h1>
      <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
        {t.templates.subtitle}
      </p>

      <div className="mt-8 ruwaq-card-accent">
        <p className="text-sm text-ruwaq-navy-soft">{t.templates.note}</p>
        <a
          href={sampleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ruwaq-primary mt-6"
        >
          {t.templates.openSample}
        </a>
        <p className="mt-3 text-xs text-ruwaq-navy-soft/60">
          {t.templates.openSampleHint}
        </p>
      </div>

      <p className="mt-8">
        <Link
          href="/proposals/new"
          className="text-sm font-semibold text-ruwaq-gold hover:underline"
        >
          {t.site.nav.startProposal} →
        </Link>
      </p>
    </div>
  );
}
