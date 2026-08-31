import { JsonLd } from "@/shared/components/json-ld";
import {
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/shared/lib/seo-schema";
import type { Locale } from "@/shared/i18n/locale";

export function MarketingJsonLd({
  locale,
}: {
  locale: Locale;
}) {
  return (
    <>
      <JsonLd data={organizationSchema(locale)} />
      <JsonLd data={webSiteSchema(locale)} />
      <JsonLd data={localBusinessSchema(locale)} />
    </>
  );
}
