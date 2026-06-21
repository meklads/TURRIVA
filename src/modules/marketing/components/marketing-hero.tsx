import Link from "next/link";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  hero: Messages["sales"]["hero"];
  locale: Locale;
  trustPills: readonly string[];
};

/** Apple-style light hero — airy, high-contrast, direct to app. */
export function MarketingHero({ hero, locale, trustPills }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-hero">
      <div className="ruwaq-landing-hero-inner">
        <p className="ruwaq-hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="ruwaq-hero-title mt-5 sm:mt-6">
          {hero.title}
          <span className="text-ruwaq-gold"> {hero.titleHighlight}</span>
        </h1>
        <p className="ruwaq-hero-lead mt-6 sm:mt-7">{hero.subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
          <Link href="/proposals/new" className="btn-ruwaq-primary px-10 py-4 text-base">
            {hero.cta} {arrow}
          </Link>
          <Link href="/templates/sample" className="btn-ruwaq-accent px-8 py-3.5">
            {hero.ctaSecondary}
          </Link>
        </div>
        <p className="mt-6 text-sm text-ruwaq-ink-muted">{hero.microcopy}</p>

        <ul className="ruwaq-trust-pills mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10">
          {trustPills.map((pill) => (
            <li key={pill}>{pill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
