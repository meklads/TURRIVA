import { LuxuryFacadeImage } from "./luxury-facade-image";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryStickyCta } from "./luxury-sticky-cta";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryHomeHero } from "./luxury-home-hero";
import {
  LuxuryAlbumSection,
  LuxuryDefinitionSection,
  LuxuryDevelopersSection,
  LuxuryFeaturedExperienceSection,
  LuxuryHomeCapabilitiesSection,
  LuxuryMethodSection,
  LuxuryProductsWeightedSection,
  LuxuryTeamExperienceSection,
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
      <LuxuryDevelopersSection locale={locale} />
      <LuxuryProductsWeightedSection locale={locale} />
      <LuxuryHomeCapabilitiesSection locale={locale} />
      <LuxuryFeaturedExperienceSection locale={locale} />
      <LuxuryAlbumSection locale={locale} />
      <LuxuryTeamExperienceSection locale={locale} />
      <LuxuryMethodSection locale={locale} />
      <LuxuryGroupEcosystemSection locale={locale} />

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
