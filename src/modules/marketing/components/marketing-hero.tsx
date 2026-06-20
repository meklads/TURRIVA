import Link from "next/link";
import { HeroStepsStrip } from "@/modules/marketing/components/hero-steps-strip";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  hero: Messages["sales"]["hero"];
  heroSteps: Messages["sales"]["heroSteps"];
  locale: Locale;
};

/** Light hero — clear message, visible CTA, static 3 steps. */
export function MarketingHero({ hero, heroSteps, locale }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-hero">
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="ruwaq-eyebrow">{hero.eyebrow}</p>
          <h1 className="ruwaq-hero-title mt-3">
            {hero.title}{" "}
            <span className="text-ruwaq-gold">{hero.titleHighlight}</span>
          </h1>
          <p className="ruwaq-hero-lead mx-auto mt-4 max-w-2xl">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposals/new" className="btn-ruwaq-primary px-8 py-3 text-base">
              {hero.cta} {arrow}
            </Link>
            <Link href="/templates/sample" className="btn-ruwaq-secondary px-6">
              {hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">{hero.microcopy}</p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-slate-200/80 pt-12 lg:max-w-4xl">
          <HeroStepsStrip title={heroSteps.title} steps={heroSteps.items} />
        </div>
      </div>
    </section>
  );
}
