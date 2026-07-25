import Link from "next/link";
import Image from "next/image";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LUXURY_HERO_IMAGE } from "../lib/nav";

type Props = {
  locale: Locale;
};

export function LuxuryHomeHero({ locale }: Props) {
  const t = getLuxuryMessages(locale);

  return (
    <section className="lux-hero" aria-label="Hero">
      <div className="lux-container lux-hero-inner">
        <div className="lux-hero-copy">
          <div className="lux-hero-watermark" aria-hidden />
          <div className="lux-hero-copy-inner lux-reveal">
            <p className="lux-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="lux-display text-[2rem] leading-[1.14] sm:text-[2.65rem] lg:text-[3rem] lg:leading-[1.12]">
              {t.hero.title}
            </h1>
            <div className="lux-flourish" aria-hidden>
              <span className="lux-flourish-line" />
              <span className="lux-flourish-gem" />
              <span className="lux-flourish-line" />
            </div>
            <p className="lux-body max-w-md text-[15px] leading-[1.75] sm:text-base">
              {t.hero.subtitle}
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide text-lux-ink-muted">
              {t.hero.servicesLine}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <Link href="/contact" className="lux-btn-primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link href="/our-work" className="lux-btn-outline-gold">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="lux-hero-media">
          <Image
            src={LUXURY_HERO_IMAGE}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
          <div className="lux-hero-media-fade" aria-hidden />
        </div>
      </div>
    </section>
  );
}
