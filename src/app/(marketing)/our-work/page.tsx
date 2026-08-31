import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/modules/luxury/lib/case-studies";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
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

  return (
    <>
      <LuxuryMarketingHero
        eyebrow={t.projects.eyebrow}
        title={t.pages.ourWork.title}
        intro={t.pages.ourWork.intro}
      />

      <section className="lux-section border-b border-lux-sand bg-white">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.pages.ourWork.folioEyebrow}</p>
          <h2 className="lux-display mt-4 text-2xl sm:text-3xl">{t.pages.ourWork.folioTitle}</h2>
          <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-soft">{t.pages.ourWork.folioIntro}</p>
          <Link href={lp("/portfolio")} className="lux-btn-primary mt-8 inline-flex">
            {t.pages.ourWork.folioCta}
          </Link>
        </div>
      </section>

      <section className="lux-section lux-section--linen scroll-mt-24">
        <div className="lux-container max-w-6xl">
          <h2 className="lux-display text-center text-2xl">{locale === "ar" ? "مشاريع مختارة" : "Selected projects"}</h2>
          <div className="lux-marketing-grid mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => {
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-lux-gold">{category}</p>
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
