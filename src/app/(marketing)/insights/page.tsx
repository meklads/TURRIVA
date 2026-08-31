import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);
  return luxuryPageMetadata(locale, seo.insightsPage.title, seo.insightsPage.intro, { path: "/insights" });
}

export default async function InsightsPage() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);

  return (
    <>
      <LuxuryMarketingHero title={seo.insightsPage.title} intro={seo.insightsPage.intro} eyebrow={seo.nav.insights} />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-4xl space-y-6">
          {seo.insightsPage.articles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-lux-gold">{article.tag}</p>
              <h2 className="lux-display mt-2 text-xl">
                <LocalizedLink href={`/insights/${article.slug}`} className="hover:text-lux-gold">
                  {article.title}
                </LocalizedLink>
              </h2>
              <p className="lux-body mt-3 text-sm text-lux-ink-soft">{article.summary}</p>
              <p className="mt-3 text-xs text-lux-ink-muted">
                {article.readMinutes} {locale === "ar" ? "دقائق قراءة" : "min read"}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
