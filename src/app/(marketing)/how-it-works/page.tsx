import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.site.nav.howItWorks}</p>
      <h1 className="ruwaq-section-title mt-2">{t.pages.howItWorks.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-ruwaq-navy-soft">
        {t.pages.howItWorks.intro}
      </p>

      <ol className="mt-10 space-y-6">
        {t.pages.howItWorks.steps.map((step, i) => (
          <li key={step.title} className="ruwaq-card flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ruwaq-navy text-sm font-bold text-ruwaq-gold">
              {i + 1}
            </span>
            <div>
              <h2 className="font-display text-lg font-bold text-ruwaq-navy">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 ruwaq-card-accent bg-ruwaq-cream-bg/30">
        <h2 className="font-display font-bold text-ruwaq-navy">
          {t.pages.howItWorks.reviewTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
          {t.pages.howItWorks.reviewBody}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/proposals/new" className="btn-ruwaq-primary">
          {t.site.nav.startProposal}
        </Link>
        <Link href="/templates/sample" className="btn-ruwaq-secondary">
          {t.nav.previewSample}
        </Link>
      </div>
    </div>
  );
}
