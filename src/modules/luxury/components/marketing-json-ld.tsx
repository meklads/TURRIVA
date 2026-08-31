import { JsonLd } from "@/shared/components/json-ld";
import {
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/shared/lib/seo-schema";
import type { Locale } from "@/shared/i18n/locale";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function MarketingJsonLd({
  locale,
  messages,
}: {
  locale: Locale;
  messages: LuxuryMessages;
}) {
  return (
    <>
      <JsonLd data={organizationSchema(locale)} />
      <JsonLd data={webSiteSchema(locale)} />
      <JsonLd data={localBusinessSchema(locale)} />
      <JsonLd data={faqPageSchema(messages.faq.items)} />
    </>
  );
}
