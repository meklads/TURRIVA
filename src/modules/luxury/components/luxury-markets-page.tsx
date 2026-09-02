import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LocalizedLink } from "@/shared/components/localized-link";
import { MARKETS, getMarketsPageCopy, marketText } from "../lib/markets";
import type { Locale } from "@/shared/i18n/locale";

type Props = { locale: Locale };

export function LuxuryMarketsPage({ locale }: Props) {
  const copy = getMarketsPageCopy(locale);

  return (
    <>
      <LuxuryMarketingHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {MARKETS.map((market) => {
              const text = marketText(market, locale);
              return (
                <article key={market.slug} className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card">
                  <h2 className="lux-display text-xl">{text.title}</h2>
                  <p className="lux-body mt-3 text-sm text-lux-ink-soft">{text.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-lux-ink-muted">
                    {text.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-lux-gold">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <LocalizedLink href={`/contact?intent=${market.intent}`} className="lux-btn-primary mt-6 inline-flex">
                    {copy.cta}
                  </LocalizedLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-3xl text-center">
          <h2 className="lux-display text-xl">{copy.hubsTitle}</h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.hubsIntro}</p>
        </div>
      </section>

      <LuxuryFormSplitSection
        id="brief"
        tone="linen"
        image={
          <LuxuryBrandHeroImage className="lux-quote-section__media" fillHeight sizes="(max-width: 900px) 100vw, 52vw" />
        }
      >
        <LuxuryProjectFunnelForm locale={locale} source="markets_page" />
      </LuxuryFormSplitSection>
    </>
  );
}
