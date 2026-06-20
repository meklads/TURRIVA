import Link from "next/link";
import { HeroStepsStrip } from "@/modules/marketing/components/hero-steps-strip";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  hero: Messages["sales"]["hero"];
  heroSteps: Messages["sales"]["heroSteps"];
  locale: Locale;
};

/** Light, simple hero — centered copy + horizontal interactive steps. */
export function MarketingHero({ hero, heroSteps, locale }: Props) {
  return (
    <section className="ruwaq-landing-hero">
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="ruwaq-eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-ruwaq-navy sm:text-4xl lg:text-[2.75rem]">
            {hero.title}{" "}
            <span className="text-ruwaq-gold">{hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ruwaq-navy-soft sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/templates/sample"
              className="btn-ruwaq-secondary px-6"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">{hero.microcopy}</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl lg:max-w-5xl">
          <HeroStepsStrip
            title={heroSteps.title}
            subtitle={heroSteps.subtitle}
            tapIntro={heroSteps.tapIntro}
            tapHere={heroSteps.tapHere}
            steps={heroSteps.items}
            cta={heroSteps.cta}
            completeMessage={heroSteps.completeMessage}
            locale={locale}
          />
        </div>
      </div>
    </section>
  );
}
