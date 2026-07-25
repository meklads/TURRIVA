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
  const tags = t.hero.tags;

  return (
    <section className="lux-hero" aria-label="Hero">
      <div className="lux-container lux-hero-inner">
        <div className="lux-hero-copy">
          <div className="lux-hero-copy-inner lux-reveal">
            <p className="lux-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="lux-display lux-hero-title mt-4">{t.hero.title}</h1>
            <div className="lux-flourish" aria-hidden />
            <p className="lux-body max-w-lg">{t.hero.subtitle}</p>
            <div className="lux-hero-tags" aria-label={t.hero.servicesLine}>
              {tags.map((tag) => (
                <span key={tag} className="lux-hero-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3 sm:mt-10">
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
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
          <div className="lux-hero-media-fade" aria-hidden />
        </div>
      </div>
    </section>
  );
}
