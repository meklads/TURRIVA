import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LuxuryFaqSection } from "@/modules/luxury/components/luxury-faq-section";
import { JsonLd } from "@/shared/components/json-ld";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";
import { faqPageSchema } from "@/shared/lib/seo-schema";

export async function generateMetadata() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);
  return luxuryPageMetadata(locale, seo.faqPage.title, seo.faqPage.intro, { path: "/faq" });
}

export default async function FaqPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const seo = getLuxurySeoMessages(locale);
  const allItems = seo.faqPage.sections.flatMap((s) => s.items);

  return (
    <>
      <JsonLd data={faqPageSchema(allItems)} />
      <LuxuryMarketingHero eyebrow={t.faq.eyebrow} title={seo.faqPage.title} intro={seo.faqPage.intro} />

      {seo.faqPage.sections.map((section) => (
        <LuxuryFaqSection
          key={section.title}
          messages={t}
          faq={{ eyebrow: section.title, title: section.title, items: section.items }}
        />
      ))}

    </>
  );
}
