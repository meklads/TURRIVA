import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export const dynamic = "force-dynamic";

export default async function TemplateSamplePage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const sampleUrl = `/api/templates/ruwaq/sample?locale=${locale}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.nav.previewSample}</p>
      <h1 className="ruwaq-section-title mx-auto mt-4 max-w-3xl text-center">{t.templates.title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ruwaq-ink-soft sm:text-base">
        {t.templates.subtitle}
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-100/90 bg-white shadow-ruwaq-premium">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-ruwaq-canvas-soft px-4 py-3 sm:px-5">
          <p className="text-xs text-ruwaq-ink-muted sm:text-sm">{t.templates.note}</p>
          <a
            href={sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ruwaq-accent px-4 py-2 text-xs sm:text-sm"
          >
            {t.templates.openSample}
          </a>
        </div>
        <iframe
          title={t.templates.title}
          src={sampleUrl}
          className="h-[min(78vh,920px)] w-full border-0 bg-slate-100"
        />
      </div>

      <p className="mt-3 text-center text-xs text-ruwaq-ink-muted">{t.templates.openSampleHint}</p>

      <div className="mt-10 text-center">
        <Link href="/proposals/new" className="btn-ruwaq-primary inline-flex px-9 py-3.5">
          {t.site.nav.startProposal}
        </Link>
      </div>
    </div>
  );
}
