import Image from "next/image";
import Link from "next/link";
import { getLuxuryMessages, LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryLeadForm } from "./luxury-lead-form";

type PageKey = "interiorDesign" | "construction" | "ourWork" | "about" | "contact";

export function LuxuryInnerPage({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const t = getLuxuryMessages(locale);
  const content = t.pages[page];

  return (
    <section className="lux-section lux-section--cream lux-inner-page">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.brand.tagline}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-5 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">{content.title}</h1>
        <p className="lux-body mx-auto mt-6">{content.intro}</p>
      </div>

      {page === "contact" ? (
        <div className="lux-container mt-10 max-w-6xl sm:mt-12 lux-editorial-split lux-editorial-split--reverse lux-contact-split">
          <div className="lux-editorial-media lux-editorial-media--tall lux-contact-media">
            <Image
              src={LUXURY_IMAGES.contact}
              alt=""
              fill
              className="object-contain object-center sm:object-cover sm:object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={92}
              priority
            />
          </div>
          <div className="lux-editorial-copy lux-editorial-copy--panel text-start">
            <LuxuryLeadForm messages={t} locale={locale} source="marketing_contact" />
          </div>
        </div>
      ) : (
        <div className="lux-container max-w-3xl text-center">
          <Link href="/contact" className="lux-btn-primary mt-10 inline-flex">
            {t.cta.button}
          </Link>
        </div>
      )}
    </section>
  );
}
