import { notFound } from "next/navigation";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LuxuryQuoteSection } from "@/modules/luxury/components/luxury-quote-section";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";
import { serviceSchema } from "@/shared/lib/seo-schema";
import { JsonLd } from "@/shared/components/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const seo = getLuxurySeoMessages("en");
  return seo.locationsPage.cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);
  const city = seo.locationsPage.cities.find((c) => c.slug === slug);
  if (!city) return {};
  return luxuryPageMetadata(locale, `${city.name} · Turriva`, city.summary, { path: `/locations/${slug}` });
}

export default async function LocationCityPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const seo = getLuxurySeoMessages(locale);
  const city = seo.locationsPage.cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema(locale, {
          name: `Turriva · ${city.name}`,
          description: city.summary,
          path: `/locations/${slug}`,
        })}
      />
      <LuxuryMarketingHero title={city.name} intro={city.summary} eyebrow="Turriva execution" />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-3xl">
          <h2 className="lux-display text-xl">{locale === "ar" ? "خدمات في" : "Services in"} {city.name}</h2>
          <ul className="mt-4 space-y-2 text-lux-ink-soft">
            {city.services.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-lux-gold">·</span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <LocalizedLink href="/villas" className="lux-btn-primary">
              {t.nav.villas}
            </LocalizedLink>
            <LocalizedLink href="/projects" className="lux-btn-outline-gold">
              {t.nav.projects}
            </LocalizedLink>
            <LocalizedLink href="/portfolio" className="lux-btn-outline">
              {seo.nav.portfolio}
            </LocalizedLink>
          </div>
        </div>
      </section>

      <LuxuryQuoteSection messages={t} locale={locale} source={`location_${slug}`} />
    </>
  );
}
