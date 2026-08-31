import { notFound } from "next/navigation";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { getInsightArticle, insightText, INSIGHT_ARTICLES } from "@/modules/luxury/lib/insights-content";
import { ShareButton } from "@/shared/components/share-button";
import { JsonLd } from "@/shared/components/json-ld";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";
import { articleSchema, breadcrumbSchema } from "@/shared/lib/seo-schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return INSIGHT_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const article = getInsightArticle(slug);
  if (!article) return {};
  const text = insightText(article, locale);
  return luxuryPageMetadata(locale, text.title, text.summary, { path: `/insights/${slug}` });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const article = getInsightArticle(slug);
  if (!article) notFound();

  const text = insightText(article, locale);
  const social = getLuxurySeoMessages(locale).social;
  const insightsLabel = locale === "ar" ? "رؤى" : "Insights";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: insightsLabel, path: "/insights" },
          { name: text.title, path: `/insights/${slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema(locale, {
          title: text.title,
          description: text.summary,
          path: `/insights/${slug}`,
          readMinutes: article.readMinutes,
        })}
      />
      <LuxuryMarketingHero eyebrow={text.tag} title={text.title} intro={text.summary} />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-3xl">
          <div className="mb-8">
            <ShareButton
              url={localizePath(`/insights/${slug}`, locale)}
              title={text.title}
              shareLabel={social.shareCaseStudy}
              copyLabel={social.copyLink}
              copiedLabel={social.linkCopied}
            />
          </div>
          <div className="prose-lux space-y-5 text-lux-ink-soft">
            {text.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="lux-body leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
