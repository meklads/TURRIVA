import Link from "next/link";
import { SectionHeader } from "@/modules/marketing/components/section-header";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  trust: Messages["sales"]["trustPartner"];
  locale: Locale;
};

/** Contractor protection — approved clause pack showcase. */
export function TrustPartnerSection({ trust, locale }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-section ruwaq-landing-section--soft ruwaq-reveal">
      <div className="ruwaq-landing-section-inner">
        <SectionHeader eyebrow={trust.eyebrow} title={trust.title} subtitle={trust.subtitle} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {trust.pillars.map(({ icon, title, body }) => (
            <article key={title} className="ruwaq-light-card group flex gap-4 sm:p-7">
              <span className="ruwaq-feature-icon-wrap shrink-0" aria-hidden>
                {icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ruwaq-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ruwaq-ink-soft">{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="ruwaq-clause-pack-header mt-20">
          <h3 className="ruwaq-clause-pack-title">{trust.packTitle}</h3>
          <p className="ruwaq-clause-pack-meta">{trust.packMeta}</p>
        </div>

        <div className="mt-10 space-y-5">
          {trust.clauses.map((clause, index) => (
            <article key={clause.title} className="ruwaq-clause-preview group">
              <div className="ruwaq-clause-preview-head">
                <span className="ruwaq-clause-preview-num" aria-hidden>
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="ruwaq-clause-preview-category">{clause.category}</p>
                  <h4 className="ruwaq-clause-preview-title">{clause.title}</h4>
                </div>
              </div>
              <p className="ruwaq-clause-preview-excerpt">{clause.excerpt}</p>
              <p className="ruwaq-clause-preview-source">
                <span className="font-medium text-ruwaq-ink-muted">
                  {locale === "ar" ? "مرجع:" : "Source:"}
                </span>{" "}
                {clause.source}
              </p>
            </article>
          ))}
        </div>

        <p className="ruwaq-clause-pack-disclaimer mt-10 text-center">{trust.disclaimer}</p>

        <div className="mt-10 text-center">
          <Link href="/proposals/new" className="btn-ruwaq-primary inline-flex px-10 py-4">
            {trust.cta} {arrow}
          </Link>
        </div>
      </div>
    </section>
  );
}
