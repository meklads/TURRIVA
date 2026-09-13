import { JsonLd } from "@/shared/components/json-ld";
import {
  localBusinessSchema,
  organizationSchema,
  productPackagesSchema,
  softwareApplicationSchema,
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
      {productPackagesSchema(locale).map((product) => (
        <JsonLd key={product.name as string} data={product} />
      ))}
      <JsonLd data={softwareApplicationSchema(locale)} />
    </>
  );
}
