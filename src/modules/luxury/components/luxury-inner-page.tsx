import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryQuoteSection } from "./luxury-quote-section";

type PageKey = "interiorDesign" | "construction" | "ourWork" | "about" | "contact";

const QUOTE_PAGES: Partial<Record<PageKey, string>> = {
  contact: "marketing_contact",
  ourWork: "marketing_our_work",
};

export function LuxuryInnerPage({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const t = getLuxuryMessages(locale);
  const content = t.pages[page];
  const quoteSource = QUOTE_PAGES[page];

  return (
    <section className="lux-section lux-section--cream lux-inner-page">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.brand.tagline}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-5 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">{content.title}</h1>
        <p className="lux-body mx-auto mt-6">{content.intro}</p>
      </div>

      {quoteSource ? (
        <LuxuryQuoteSection messages={t} locale={locale} source={quoteSource} />
      ) : null}
    </section>
  );
}
