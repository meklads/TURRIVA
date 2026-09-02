import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages, LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";
import { localizePath } from "@/shared/i18n/path";
import { LuxuryFaqSection } from "./luxury-faq-section";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryPartnersStrip } from "./luxury-partners-strip";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryProjectsSegmentsSection } from "./luxury-projects-segments-section";
import { LuxuryTrustBar } from "./luxury-trust-bar";
import { LuxuryVillasProductSection } from "./luxury-villas-product-section";

type Props = {
  messages: ReturnType<typeof getLuxuryMessages>;
  locale: Locale;
};

export function LuxuryProjectsPage({ messages: t, locale }: Props) {
  const p = t.pages.projects;
  const lp = (path: string) => localizePath(path, locale);

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={p.title} intro={p.intro}>
        <Link href="#brief" className="lux-btn-primary">
          {p.ctaBrief}
        </Link>
        <Link href={lp("/contact?intent=sample")} className="lux-btn-outline-gold">
          {p.ctaSample}
        </Link>
      </LuxuryMarketingHero>

      <LuxuryTrustBar messages={t} />

      <LuxuryProjectsSegmentsSection messages={t} />

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

      <section id="joinery" className="lux-section lux-section--white scroll-mt-24">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{locale === "ar" ? "قدرات B2B" : "B2B capabilities"}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">
            {locale === "ar" ? "ما الذي نقدمه للبرامج" : "What we deliver at scale"}
          </h2>
        </div>
        <div className="lux-container mt-12 max-w-6xl">
          <div className="lux-marketing-grid sm:grid-cols-2 lg:grid-cols-4">
            {p.highlights.map((item) => (
              <div key={item.title} className="lux-pillar-card">
                <h3 className="lux-display text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryVillasProductSection
        id="programme"
        imageSrc={LUXURY_IMAGES.project3}
        eyebrow={p.programme.eyebrow}
        title={p.programme.title}
        intro={p.programme.intro}
        highlights={p.programme.highlights}
        cta={p.programme.cta}
        ctaHref="#brief"
        tone="linen"
      />

      <LuxuryPartnersStrip messages={t} />

      <LuxuryFaqSection messages={t} faq={p.faq} />

      <LuxuryFormSplitSection
        id="brief"
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
          <LuxuryProjectFunnelForm locale={locale} source="b2b_projects" initialProjectType="developer" />
        </div>
      </LuxuryFormSplitSection>
    </>
  );
}
