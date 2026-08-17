import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryBrandRelationshipSection } from "./luxury-brand-relationship-section";
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
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={content.title} intro={content.intro} />
      {page === "about" ? <LuxuryBrandRelationshipSection messages={t} /> : null}
      {quoteSource ? <LuxuryQuoteSection messages={t} locale={locale} source={quoteSource} /> : null}
    </>
  );
}
