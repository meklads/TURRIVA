import Image from "next/image";
import Link from "next/link";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

export const HERO_BACKGROUND = "/brand/body/4.webp";

type Props = {
  hero: Messages["sales"]["hero"];
  locale: Locale;
  trustPills: readonly string[];
};

/** Full-bleed editorial hero — luxury landing first impression. */
export function MarketingHero({ hero, locale, trustPills }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-hero">
      <div className="ruwaq-landing-hero-bg" aria-hidden>
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="ruwaq-landing-hero-overlay" aria-hidden />

      <div className="ruwaq-landing-hero-inner">
        <p className="ruwaq-hero-eyebrow-light">{hero.eyebrow}</p>
        <h1 className="ruwaq-hero-title mt-5 sm:mt-6">
          {hero.title}
          <span className="text-ruwaq-gold"> {hero.titleHighlight}</span>
        </h1>
        <p className="ruwaq-hero-lead mt-6 sm:mt-7">{hero.subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
          <Link href="/proposals/new" className="btn-ruwaq-white px-9 py-3.5 text-base">
            {hero.cta} {arrow}
          </Link>
          <Link href="/templates/sample" className="btn-ruwaq-outline-light px-8">
            {hero.ctaSecondary}
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/50">{hero.microcopy}</p>

        <ul className="ruwaq-trust-pills ruwaq-trust-pills--light mt-8 gap-2.5 sm:mt-10">
          {trustPills.map((pill) => (
            <li key={pill}>{pill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
