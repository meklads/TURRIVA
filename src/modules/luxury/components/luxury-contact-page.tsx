import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { CONTACT_INTENTS, type ContactIntent } from "../lib/contact-intents";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  intent: ContactIntent | null;
};

export function LuxuryContactPage({ locale, intent }: Props) {
  const t = getLuxuryMessages(locale);
  const preset = intent ? CONTACT_INTENTS[intent] : null;
  const isAr = locale === "ar";

  const title = preset ? (isAr ? preset.titleAr : preset.titleEn) : t.pages.contact.title;
  const intro = preset ? (isAr ? preset.subtitleAr : preset.subtitleEn) : t.pages.contact.intro;
  const source = preset?.source ?? "marketing_contact";

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={title} intro={intro} />

      <LuxuryFormSplitSection
        id="brief"
        tone="linen"
        image={
          <LuxuryBrandHeroImage
            className="lux-quote-section__media"
            fillHeight
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        }
      >
        <LuxuryProjectFunnelForm locale={locale} source={source} initialProjectType={preset?.projectType} />
      </LuxuryFormSplitSection>
    </>
  );
}
