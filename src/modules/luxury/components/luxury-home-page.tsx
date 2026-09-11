import Link from "next/link";
import Image from "next/image";
import { LuxuryFacadeImage } from "./luxury-facade-image";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryStickyCta } from "./luxury-sticky-cta";
import {
  getLuxuryMessages,
  LUXURY_PROJECT_IMAGES,
} from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryFaqSection } from "./luxury-faq-section";
import { LuxuryHomeHero } from "./luxury-home-hero";
import { LuxurySampleKitBand } from "./luxury-sample-kit-band";
import {
  LuxuryDefinitionSection,
  LuxuryDevelopersSection,
  LuxuryMethodSection,
  LuxuryProductGroupsSection,
} from "./luxury-reposition-sections";
import { LuxuryGroupEcosystemSection } from "./luxury-group-ecosystem-section";
import { localizePath } from "@/shared/i18n/path";

type Props = {
  locale: Locale;
};

export function LuxuryHomePage({ locale }: Props) {
  const t = getLuxuryMessages(locale);
  const lp = (path: string) => localizePath(path, locale);

  return (
    <>
      <LuxuryHomeHero locale={locale} />
      <LuxuryDefinitionSection locale={locale} />
      <LuxuryProductGroupsSection locale={locale} />
      <LuxuryDevelopersSection locale={locale} />
      <LuxuryMethodSection locale={locale} />

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
                  <Image
                    src={src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
          <Link href={lp("/real-estate-experience")} className="lux-btn-outline">
            {t.projects.cta}
          </Link>
        </div>
      </section>

      <LuxuryGroupEcosystemSection locale={locale} />
      <LuxurySampleKitBand messages={t} locale={locale} />
      <LuxuryFaqSection messages={t} />

      <section id="brief" className="lux-cta-band" aria-labelledby="home-cta-heading">
        <div className="lux-container">
          <div className="lux-cta-band-grid">
            <LuxuryFacadeImage
              className="lux-cta-band-media"
              fillHeight
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <div className="lux-cta-band-panel">
              <p className="lux-eyebrow">{t.brand.tagline}</p>
              <div className="lux-divider-gold" />
              <h2 id="home-cta-heading" className="lux-display lux-heading mt-6">
                {t.cta.title}
              </h2>
              <p className="lux-body mt-4">{t.cta.subtitle}</p>
              <div className="lux-cta-band-form">
                <LuxuryProjectFunnelForm locale={locale} source="marketing_home" initialProjectType="developer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LuxuryStickyCta
        locale={locale}
        label={t.hero.ctaPrimary}
        href={`${lp("/")}#brief`}
        source="marketing_home"
      />
    </>
  );
}
