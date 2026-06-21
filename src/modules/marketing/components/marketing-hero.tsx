import Link from "next/link";
import { HeroStepsStrip } from "@/modules/marketing/components/hero-steps-strip";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";
import type { ReactNode } from "react";

type Props = {
  hero: Messages["sales"]["hero"];
  heroSteps: Messages["sales"]["heroSteps"];
  locale: Locale;
  trustPills: readonly string[];
  learnMore?: { href: string; label: string };
  productPreview?: ReactNode;
};

/** Apple-inspired hero — spacious two-column on desktop. */
export function MarketingHero({
  hero,
  heroSteps,
  locale,
  trustPills,
  learnMore,
  productPreview,
}: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-hero">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 xl:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 xl:gap-20">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-start">
            <p className="ruwaq-eyebrow">{hero.eyebrow}</p>
            <h1 className="ruwaq-hero-title mt-4 sm:mt-5">
              {hero.title}
              <span className="text-ruwaq-gold"> {hero.titleHighlight}</span>
            </h1>
            <p className="ruwaq-hero-lead mx-auto mt-5 max-w-xl sm:mt-6 lg:mx-0">{hero.subtitle}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 lg:justify-start">
              <Link href="/proposals/new" className="btn-ruwaq-primary px-9 py-3.5 text-base">
                {hero.cta} {arrow}
              </Link>
              <Link href="/templates/sample" className="btn-ruwaq-secondary px-8">
                {hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-5 text-sm text-ruwaq-ink-muted">{hero.microcopy}</p>

            <ul className="ruwaq-trust-pills mt-6 gap-2.5 sm:mt-8 lg:justify-start">
              {trustPills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>
          </div>

          {productPreview ? (
            <div className="ruwaq-hero-mock-wrap mx-auto w-full max-w-lg lg:max-w-none">
              {productPreview}
            </div>
          ) : null}
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:max-w-5xl">
          <HeroStepsStrip title={heroSteps.title} steps={heroSteps.items} />
          {learnMore ? (
            <p className="mt-10 text-center">
              <Link
                href={learnMore.href}
                className="text-sm font-medium text-ruwaq-gold transition-colors hover:text-ruwaq-gold-light"
              >
                {learnMore.label} {arrow}
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
