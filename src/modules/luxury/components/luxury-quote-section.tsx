import { LuxuryFacadeImage } from "./luxury-facade-image";
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
    <div className="lux-container mt-10 max-w-6xl sm:mt-12">
      <div className="lux-quote-section">
        <LuxuryFacadeImage
          className="lux-quote-section__media"
          fillHeight
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className="lux-quote-section__panel">
          <LuxuryQuoteForm messages={messages} locale={locale} source={source} />
        </div>
      </div>
    </div>
  );
}
