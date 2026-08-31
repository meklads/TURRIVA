import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);
  return luxuryPageMetadata(locale, seo.locationsPage.title, seo.locationsPage.intro, { path: "/locations" });
}

export default async function LocationsPage() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);

  return (
    <>
      <LuxuryMarketingHero
        title={seo.locationsPage.title}
        intro={seo.locationsPage.intro}
        eyebrow={locale === "ar" ? "توريفا" : "Turriva"}
      />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-5xl grid gap-6 sm:grid-cols-3">
          {seo.locationsPage.cities.map((city) => (
            <article key={city.slug} className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card">
              <h2 className="lux-display text-xl">
                <LocalizedLink href={`/locations/${city.slug}`} className="hover:text-lux-gold">
                  {city.name}
                </LocalizedLink>
              </h2>
              <p className="lux-body mt-3 text-sm text-lux-ink-soft">{city.summary}</p>
              <ul className="mt-4 space-y-1 text-xs text-lux-ink-muted">
                {city.services.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
