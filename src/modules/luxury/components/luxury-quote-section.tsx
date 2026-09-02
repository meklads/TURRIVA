import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import type { MarketingProjectType } from "../lib/marketing-lead-scoring";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
  source?: string;
  initialProjectType?: MarketingProjectType;
};

export function LuxuryQuoteSection({ messages, locale, source = "marketing_quote", initialProjectType }: Props) {
  const q = messages.quoteForm;

  return (
    <LuxuryFormSplitSection
      id="brief"
      image={
        <LuxuryBrandHeroImage
          className="lux-quote-section__media"
          fillHeight
          priority
          sizes="(max-width: 900px) 100vw, 52vw"
        />
      }
    >
      <header className="lux-quote-form__head">
        <h2 className="lux-quote-form__title">
          {q.title}
          <span className="lux-quote-form__title-accent" aria-hidden />
        </h2>
        <p className="lux-quote-form__subtitle">{q.subtitle}</p>
      </header>
      <LuxuryProjectFunnelForm locale={locale} source={source} initialProjectType={initialProjectType} />
    </LuxuryFormSplitSection>
  );
}
