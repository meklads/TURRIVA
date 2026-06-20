import Link from "next/link";
import { HeroInteractivePanel } from "@/modules/marketing/components/hero-interactive-panel";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  hero: Messages["sales"]["hero"];
  heroSteps: Messages["sales"]["heroSteps"];
  locale: Locale;
};

/** Split hero — copy on one side, interactive discovery panel on the other. */
export function MarketingHero({ hero, heroSteps, locale }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-hero">
      <div className="ruwaq-hero-grid-pattern" aria-hidden />
      <div className="ruwaq-hero-glow ruwaq-hero-glow-a" aria-hidden />
      <div className="ruwaq-hero-glow ruwaq-hero-glow-b" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-start">
            <p className="ruwaq-eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl xl:text-[2.85rem]">
              {hero.title}{" "}
              <span className="bg-gradient-to-l from-ruwaq-gold to-ruwaq-gold-light bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
              {hero.subtitle}
            </p>

            <div className="mt-8 hidden flex-wrap items-center gap-3 lg:flex">
              <Link
                href="/templates/sample"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-ruwaq-gold/40 hover:text-ruwaq-gold"
              >
                {hero.ctaSecondary} {arrow}
              </Link>
            </div>

            <p className="mt-6 text-xs text-white/40 lg:mt-8">{hero.microcopy}</p>

            {/* Desktop hint pointing to panel */}
            <p className="ruwaq-hero-panel-hint mt-8 hidden text-sm font-medium text-ruwaq-gold/80 lg:block">
              {heroSteps.tapIntro} {locale === "ar" ? "←" : "→"}
            </p>
          </div>

          {/* Interactive panel */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <HeroInteractivePanel
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

          {/* Mobile secondary link */}
          <div className="flex justify-center lg:hidden">
            <Link
              href="/templates/sample"
              className="text-sm font-semibold text-white/60 underline-offset-4 hover:text-ruwaq-gold hover:underline"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
