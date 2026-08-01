import Image from "next/image";
import { LUXURY_IMAGES, type LuxuryMessages } from "@/shared/i18n/messages/luxury";
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
        <div className="lux-quote-section__media">
          <Image
            src={LUXURY_IMAGES.ctaBand}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="lux-quote-section__panel">
          <LuxuryQuoteForm messages={messages} locale={locale} source={source} />
        </div>
      </div>
    </div>
  );
}
