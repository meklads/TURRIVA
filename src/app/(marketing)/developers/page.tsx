import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LuxuryQuoteSection } from "@/modules/luxury/components/luxury-quote-section";
import { LuxuryStickyCta } from "@/modules/luxury/components/luxury-sticky-cta";
import {
  LuxuryDevelopersSection,
  LuxuryMethodSection,
  LuxuryScopesSection,
} from "@/modules/luxury/components/luxury-reposition-sections";
import { LuxuryGroupEcosystemSection } from "@/modules/luxury/components/luxury-group-ecosystem-section";
import { getRepositionCopy } from "@/modules/luxury/lib/reposition-copy";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getRepositionCopy(locale);
  return luxuryPageMetadata(locale, copy.developers.title, copy.developers.intro, { path: "/developers" });
}

export default async function DevelopersPage() {
  const locale = await getLocale();
  const copy = getRepositionCopy(locale);
  const t = getLuxuryMessages(locale);

  return (
    <>
      <LuxuryMarketingHero
        eyebrow={copy.developers.eyebrow}
        title={copy.developers.title}
        intro={copy.developers.intro}
      />
      <LuxuryDevelopersSection locale={locale} compact />
      <LuxuryScopesSection locale={locale} />
      <LuxuryMethodSection locale={locale} />
      <LuxuryGroupEcosystemSection locale={locale} />
      <LuxuryQuoteSection
        messages={t}
        locale={locale}
        source="marketing_developers"
        initialProjectType="developer"
      />
      <LuxuryStickyCta
        locale={locale}
        label={copy.developers.pageCta}
        href={`${localizePath("/developers", locale)}#brief`}
      />
    </>
  );
}
