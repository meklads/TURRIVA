import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_INSPIRATION_IMAGES } from "@/shared/i18n/messages/luxury-inspiration";
import { LuxuryBeforeAfterSection } from "./luxury-before-after-section";
import { LuxuryComparisonSection } from "./luxury-comparison-section";
import { LuxuryEcosystemSection } from "./luxury-ecosystem-section";
import { LuxuryFaqSection } from "./luxury-faq-section";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LuxuryLeadForm } from "./luxury-lead-form";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryPartnersStrip } from "./luxury-partners-strip";
import { LuxuryTrustBar } from "./luxury-trust-bar";
import { LuxuryValueOffersSection } from "./luxury-value-offers-section";
import { LuxuryVillasGallerySection } from "./luxury-villas-gallery-section";
import { LuxuryVillasProductSection } from "./luxury-villas-product-section";
import { LuxuryVillasSegmentsSection } from "./luxury-villas-segments-section";

export function LuxuryVillasPage({ locale }: { locale: Locale }) {
  const t = getLuxuryMessages(locale);
  const p = t.pages.villas;

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={p.title} intro={p.intro}>
        <Link href="/contact?intent=design" className="lux-btn-primary">
          {p.ctaDesign}
        </Link>
        <Link href="#consultation" className="lux-btn-outline-gold">
          {p.ctaContact}
        </Link>
      </LuxuryMarketingHero>

      <LuxuryTrustBar messages={t} />

      <LuxuryVillasSegmentsSection messages={t} />

      <section className="lux-section lux-section--cream scroll-mt-24">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.process.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.process.title}</h2>
        </div>
        <div className="lux-container mt-12 max-w-6xl">
          <div className="lux-marketing-grid sm:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((step, i) => (
              <div key={step.title} className="lux-process-step">
                <span className="lux-process-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="lux-display mt-4 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryVillasProductSection
        id="kitchens"
        imageSrc={LUXURY_INSPIRATION_IMAGES.kitchen}
        eyebrow={p.kitchens.eyebrow}
        title={p.kitchens.title}
        intro={p.kitchens.intro}
        highlights={p.kitchens.highlights}
        cta={p.kitchens.cta}
        ctaHref="#consultation"
        tone="white"
      />

      <LuxuryVillasProductSection
        id="wardrobes"
        imageSrc={LUXURY_INSPIRATION_IMAGES.wardrobe}
        eyebrow={p.wardrobes.eyebrow}
        title={p.wardrobes.title}
        intro={p.wardrobes.intro}
        highlights={p.wardrobes.highlights}
        cta={p.wardrobes.cta}
        ctaHref="#consultation"
        reverse
        tone="linen"
      />

      <LuxuryVillasGallerySection messages={t} />

      <LuxuryEcosystemSection messages={t} />
      <LuxuryBeforeAfterSection messages={t} />
      <LuxuryValueOffersSection messages={t} />
      <LuxuryComparisonSection messages={t} />
      <LuxuryPartnersStrip messages={t} />

      <LuxuryFaqSection messages={t} faq={p.faq} />

      <LuxuryFormSplitSection
        id="consultation"
        tone="white"
        image={
          <LuxuryBrandHeroImage
            className="lux-quote-section__media"
            fillHeight
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        }
      >
        <h2 className="lux-display text-2xl sm:text-3xl">{p.formSection.title}</h2>
        <p className="lux-body mt-3 text-sm sm:text-base text-lux-ink-muted">{p.formSection.subtitle}</p>
        <div className="mt-8">
          <LuxuryLeadForm
            messages={t}
            locale={locale}
            source="villas_page"
            defaultProjectType="villa"
            submitLabel={p.ctaContact}
          />
        </div>
      </LuxuryFormSplitSection>
    </>
  );
}
