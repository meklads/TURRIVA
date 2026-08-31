import Image from "next/image";
import { notFound } from "next/navigation";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { CASE_STUDIES, getCaseStudy } from "@/modules/luxury/lib/case-studies";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LuxuryQuoteSection } from "@/modules/luxury/components/luxury-quote-section";
import { LocalizedLink } from "@/shared/components/localized-link";
import { ShareButton } from "@/shared/components/share-button";
import { JsonLd } from "@/shared/components/json-ld";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";
import { breadcrumbSchema } from "@/shared/lib/seo-schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = locale === "ar" ? study.titleAr : study.titleEn;
  const summary = locale === "ar" ? study.summaryAr : study.summaryEn;
  return luxuryPageMetadata(locale, title, summary, {
    path: `/our-work/${slug}`,
    ogImage: study.image,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const social = getLuxurySeoMessages(locale).social;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const isAr = locale === "ar";
  const title = isAr ? study.titleAr : study.titleEn;
  const summary = isAr ? study.summaryAr : study.summaryEn;
  const body = isAr ? study.bodyAr : study.bodyEn;
  const category = isAr ? study.categoryAr : study.categoryEn;
  const location = isAr ? study.locationAr : study.locationEn;
  const services = isAr ? study.servicesAr : study.servicesEn;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: isAr ? "أعمالنا" : "Our work", path: "/our-work" },
          { name: title, path: `/our-work/${slug}` },
        ])}
      />
      <LuxuryMarketingHero eyebrow={category} title={title} intro={summary} />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-5xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lux-card">
            <Image src={study.image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 80vw" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-lux-ink-muted">{location}</p>
            <ShareButton
              url={localizePath(`/our-work/${slug}`, locale)}
              title={title}
              shareLabel={social.shareCaseStudy}
              copyLabel={social.copyLink}
              copiedLabel={social.linkCopied}
            />
          </div>

          <p className="lux-body mt-8 leading-relaxed text-lux-ink-soft">{body}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s} className="rounded-full bg-lux-gold-muted/50 px-3 py-1 text-xs font-semibold text-lux-ink">
                {s}
              </li>
            ))}
          </ul>

          {study.partner ? (
            <p className="mt-8 text-sm text-lux-ink-muted">
              {isAr ? study.partner.roleAr : study.partner.roleEn}:{" "}
              <a href={study.partner.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-lux-gold hover:underline">
                {study.partner.name}
              </a>
            </p>
          ) : null}

          <LocalizedLink href="/contact?intent=design" className="lux-btn-primary mt-10 inline-flex">
            {t.pages.ourWork.caseStudyContactCta}
          </LocalizedLink>
        </div>
      </section>

      <LuxuryQuoteSection messages={t} locale={locale} source={`case_${slug}`} />
    </>
  );
}
