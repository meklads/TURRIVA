import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryBrandRelationshipSection } from "./luxury-brand-relationship-section";
import { LuxuryGroupEcosystemSection } from "./luxury-group-ecosystem-section";
import { LuxuryFaqSection } from "./luxury-faq-section";
import { LuxuryQuoteSection } from "./luxury-quote-section";
import { LocalizedLink } from "@/shared/components/localized-link";

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
  const seo = getLuxurySeoMessages(locale);
  const content = t.pages[page];
  const quoteSource = QUOTE_PAGES[page];

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={content.title} intro={content.intro} />

      {page === "about" ? (
        <>
          <LuxuryBrandRelationshipSection messages={t} />
          <LuxuryGroupEcosystemSection locale={locale} />
        </>
      ) : null}

      {page === "interiorDesign" || page === "construction" ? (
        <section className="lux-section lux-section--linen">
          <div className="lux-container max-w-3xl text-center">
            <p className="lux-body text-lux-ink-soft">
              {page === "interiorDesign"
                ? locale === "ar"
                  ? "توريفا تنفّذ التشطيب الداخلي والنجارة المعيارية والتركيب — من الفلل إلى الضيافة والتجزئة. للتصور الإبداعي قبل التنفيذ، شريكنا Graphics House يقدّم CGI والماكيت الذكي."
                  : "Turriva delivers interior fit-out, modular joinery, and installation — from villas to hospitality and retail. For creative visualization before execution, sister company Graphics House provides CGI and smart maquettes."
                : locale === "ar"
                  ? "توريفا تدير التسليم الميداني: تنسيق التصنيع والتخصصات والتركيب وضبط الجودة والتسليم الموثق. للحملات والإطلاق، Bees Motion تقدّم التسويق والإنتاج الإبداعي."
                  : "Turriva manages field delivery: fabrication coordination, trades, installation, QC, and documented handover. For launch campaigns, Bees Motion provides marketing and creative production."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LocalizedLink href="/villas" className="lux-btn-primary">
                {t.nav.villas}
              </LocalizedLink>
              <LocalizedLink href="/projects" className="lux-btn-outline-gold">
                {t.nav.projects}
              </LocalizedLink>
              <LocalizedLink href="/services" className="lux-btn-outline">
                {seo.nav.services}
              </LocalizedLink>
              <LocalizedLink href="/our-work" className="lux-btn-outline">
                {t.nav.ourWork}
              </LocalizedLink>
            </div>
          </div>
        </section>
      ) : null}

      {page === "interiorDesign" || page === "construction" ? <LuxuryFaqSection messages={t} /> : null}

      {quoteSource ? <LuxuryQuoteSection messages={t} locale={locale} source={quoteSource} /> : null}
    </>
  );
}
