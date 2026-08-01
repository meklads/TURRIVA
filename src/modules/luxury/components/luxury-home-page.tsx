import Link from "next/link";
import {
  getLuxuryMessages,
  LUXURY_IMAGES,
  LUXURY_PROJECT_IMAGES,
} from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryBeforeAfterSection } from "./luxury-before-after-section";
import { LuxuryComparisonSection } from "./luxury-comparison-section";
import { LuxuryEcosystemSection } from "./luxury-ecosystem-section";
import { LuxuryFaqSection } from "./luxury-faq-section";
import { LuxuryHomeHero } from "./luxury-home-hero";
import { LuxuryInspirationSection } from "./luxury-inspiration-section";
import { LuxuryPartnersStrip } from "./luxury-partners-strip";
import { LuxuryProductGrid } from "./luxury-product-grid";
import { LuxurySampleKitBand } from "./luxury-sample-kit-band";
import { LuxuryTrustBar } from "./luxury-trust-bar";
import { LuxuryTrustStats } from "./luxury-trust-stats";
import { LuxuryWaysOfLivingSection } from "./luxury-ways-of-living-section";

type Props = {
  locale: Locale;
};

export function LuxuryHomePage({ locale }: Props) {
  const t = getLuxuryMessages(locale);

  return (
    <>
      <LuxuryHomeHero locale={locale} />
      <LuxuryTrustBar messages={t} />
      <LuxuryEcosystemSection messages={t} />
      <LuxuryProductGrid messages={t} locale={locale} />
      <LuxuryPartnersStrip messages={t} />
      <LuxuryBeforeAfterSection messages={t} />
      <LuxuryComparisonSection messages={t} />
      <LuxuryInspirationSection messages={t} />
      <LuxuryTrustStats messages={t} />
      <LuxuryWaysOfLivingSection messages={t} />

      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.projects.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.projects.title}</h2>
          <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.projects.subtitle}</p>
        </div>
        <div className="lux-container mt-14 grid gap-6 lg:grid-cols-3">
          {t.projects.items.map((item, i) => {
            const src = LUXURY_PROJECT_IMAGES[i] ?? LUXURY_PROJECT_IMAGES[0];
            return (
              <figure key={item.title} className="lux-gallery-figure group">
                <div className="lux-gallery-media">
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="lux-gallery-caption">
                  <span className="lux-gallery-category">{item.category}</span>
                  <span className="lux-display mt-1 block text-lg">{item.title}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="lux-container mt-12 text-center">
          <Link href="/our-work" className="lux-btn-outline">
            {t.projects.cta}
          </Link>
        </div>
      </section>

      <LuxurySampleKitBand messages={t} />
      <LuxuryFaqSection messages={t} />

      <section className="lux-section lux-section--dark">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.testimonials.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.testimonials.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {t.testimonials.items.map((item) => (
            <blockquote key={item.quote} className="lux-quote lux-quote--on-dark">
              <p className="lux-display text-xl leading-snug">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-8 border-t border-lux-gold/30 pt-5">
                <p className="text-sm font-semibold text-lux-ivory">{item.author}</p>
                <p className="text-xs text-lux-gold-light/90">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="lux-cta-band" aria-labelledby="home-cta-heading">
        <div className="lux-container">
          <div className="lux-cta-band-panel text-center">
            <p className="lux-eyebrow">{t.brand.tagline}</p>
            <div className="lux-divider-gold" />
            <h2 id="home-cta-heading" className="lux-display lux-heading mt-6">
              {t.cta.title}
            </h2>
            <p className="lux-body mx-auto mt-4 max-w-xl">{t.cta.subtitle}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/design" className="lux-btn-primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link href="/contact" className="lux-btn-outline-gold">
                {t.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
