import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryEcosystemSection } from "./luxury-ecosystem-section";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryInteriorImage } from "./luxury-interior-image";
import { LuxuryLeadForm } from "./luxury-lead-form";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxurySampleKitBand } from "./luxury-sample-kit-band";

export function LuxuryVillasPage({ locale }: { locale: Locale }) {
  const t = getLuxuryMessages(locale);
  const p = t.pages.villas;
  const sample = t.sampleKit;

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={p.title} intro={p.intro}>
        <Link href="/contact?intent=design" className="lux-btn-primary">
          {p.ctaDesign}
        </Link>
        <Link href="/contact" className="lux-btn-outline-gold">
          {p.ctaContact}
        </Link>
      </LuxuryMarketingHero>

      <section id="kitchens" className="lux-section lux-section--cream scroll-mt-24">
        <div className="lux-container max-w-6xl">
          <div className="lux-marketing-grid sm:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((step, i) => (
              <div key={step.title} className="lux-process-step">
                <span className="lux-process-index">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="lux-display mt-4 text-lg">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryEcosystemSection messages={t} />
      <LuxurySampleKitBand messages={t} />

      <LuxuryFormSplitSection
        id="wardrobes"
        portrait
        tone="white"
        image={
          <LuxuryInteriorImage
            className="lux-quote-section__media"
            fillHeight
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        }
      >
        <h2 className="lux-display text-2xl sm:text-3xl">{sample.title}</h2>
        <p className="lux-body mt-3 text-sm sm:text-base text-lux-ink-muted">{sample.subtitle}</p>
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
