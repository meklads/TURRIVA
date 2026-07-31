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
    <>
      <section className="lux-hero" aria-label="Hero">
        <div className="lux-container lux-hero-inner">
          <div className="lux-hero-copy">
            <div className="lux-hero-copy-inner lux-reveal">
              <p className="lux-eyebrow">{t.hero.eyebrow}</p>
              <h1 className="lux-display lux-heading mt-4">{t.hero.title}</h1>
              <div className="lux-flourish" aria-hidden />
              <p className="lux-body max-w-lg">{t.hero.subtitle}</p>
              <div className="lux-hero-tags" aria-label={t.hero.servicesLine}>
                {tags.map((tag) => (
                  <span key={tag} className="lux-hero-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="lux-hero-cta mt-8 flex flex-col gap-3 sm:mt-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/design" className="lux-btn-primary">
                    {t.hero.ctaPrimary}
                  </Link>
                  <Link href="/projects" className="lux-btn-outline-gold">
                    {t.hero.ctaSecondary}
                  </Link>
                </div>
                <Link
                  href="/contact?intent=sample"
                  className="text-sm font-semibold text-lux-gold transition-colors hover:text-lux-gold-light"
                >
                  {t.hero.ctaSample} →
                </Link>
              </div>
            </div>
          </div>

          <div className="lux-hero-media">
            <div className="lux-hero-media-frame">
              <Image
                src={LUXURY_HERO_IMAGE}
                alt=""
                width={1536}
                height={1024}
                priority
                unoptimized
                className="lux-hero-media-img h-auto w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
