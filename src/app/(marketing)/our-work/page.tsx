import Image from "next/image";
import Link from "next/link";
import { getFeaturedCaseStudies, getListedCaseStudies } from "@/modules/luxury/lib/case-studies";
import { getRepositionCopy } from "@/modules/luxury/lib/reposition-copy";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryCaseStudiesHero } from "@/modules/luxury/components/luxury-case-studies-hero";
import { LuxuryQuoteSection } from "@/modules/luxury/components/luxury-quote-section";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.ourWork.title, t.pages.ourWork.intro, { path: "/our-work" });
}

export default async function OurWorkPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const lp = (path: string) => localizePath(path, locale);
  const note = getRepositionCopy(locale);
  const featured = getFeaturedCaseStudies();
  const listed = getListedCaseStudies();
  const isAr = locale === "ar";

  return (
    <>
      <LuxuryCaseStudiesHero
        locale={locale}
        studies={featured}
        eyebrow={isAr ? "نماذج من أعمال التسليم" : "Selected delivery models"}
        viewLabel={isAr ? "عرض الحالة" : "View case"}
      />

      <section id="cases" className="lux-section lux-section--linen scroll-mt-24">
        <div className="lux-container max-w-6xl">
          <div className="lux-section-intro">
            <p className="lux-eyebrow">{isAr ? "أعمال مختارة" : "Selected work"}</p>
            <h2 className="lux-display lux-heading mt-3">{t.pages.ourWork.title}</h2>
            <p className="lux-body mt-4 text-lux-ink-soft">{t.pages.ourWork.intro}</p>
            <p className="lux-work-intro mt-4">{note.honestNote}</p>
          </div>
          <div className="lux-marketing-grid mt-10 sm:grid-cols-2 lg:grid-cols-2">
            {listed.map((study) => {
              const title = locale === "ar" ? study.titleAr : study.titleEn;
              const category = locale === "ar" ? study.categoryAr : study.categoryEn;
              return (
                <Link
                  key={study.slug}
                  href={lp(`/our-work/${study.slug}`)}
                  className="group overflow-hidden rounded-xl border border-lux-sand bg-white shadow-lux-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="mt-1 text-xs text-lux-ink-muted">{category}</p>
                    <h3 className="lux-display mt-1 text-lg">{title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LuxuryQuoteSection messages={t} locale={locale} source="marketing_our_work" />
    </>
  );
}
