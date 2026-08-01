import Image from "next/image";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LuxuryQuoteSection } from "@/modules/luxury/components/luxury-quote-section";
import {
  getLuxuryMessages,
  LUXURY_IMAGES,
} from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.ourWork.title, t.pages.ourWork.intro);
}

export default async function OurWorkPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const projects = [
    LUXURY_IMAGES.project1,
    LUXURY_IMAGES.project2,
    LUXURY_IMAGES.project3,
    LUXURY_IMAGES.project4,
    LUXURY_IMAGES.interior,
    LUXURY_IMAGES.fitout,
  ];

  return (
    <>
      <LuxuryMarketingHero
        eyebrow={t.projects.eyebrow}
        title={t.pages.ourWork.title}
        intro={t.pages.ourWork.intro}
      />

      <section className="lux-section lux-section--linen lux-marketing-gallery scroll-mt-24">
        <div className="lux-container max-w-6xl">
          <div className="lux-marketing-grid sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((src) => (
              <div
                key={src}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-lux-card"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryQuoteSection messages={t} locale={locale} source="marketing_our_work" />
    </>
  );
}
