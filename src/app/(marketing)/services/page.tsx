import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);
  return luxuryPageMetadata(locale, seo.servicesPage.title, seo.servicesPage.intro, { path: "/services" });
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);

  return (
    <>
      <LuxuryMarketingHero title={seo.servicesPage.title} intro={seo.servicesPage.intro} eyebrow={seo.nav.services} />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {seo.servicesPage.items.map((item) => (
              <article key={item.slug} className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card">
                <h2 className="lux-display text-xl">{item.title}</h2>
                <p className="lux-body mt-3 text-sm text-lux-ink-soft">{item.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-lux-ink-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-lux-gold">·</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <LocalizedLink href={item.href} className="lux-btn-primary mt-6 inline-flex">
                  {item.cta}
                </LocalizedLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
