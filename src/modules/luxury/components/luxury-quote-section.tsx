import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryQuoteForm } from "./luxury-quote-form";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
  source?: string;
};

export function LuxuryQuoteSection({ messages, locale, source }: Props) {
  return (
    <LuxuryFormSplitSection
      image={
        <LuxuryBrandHeroImage
          className="lux-quote-section__media"
          fillHeight
          priority
          sizes="(max-width: 900px) 100vw, 52vw"
        />
      }
    >
      <LuxuryQuoteForm messages={messages} locale={locale} source={source} />
    </LuxuryFormSplitSection>
  );
}
