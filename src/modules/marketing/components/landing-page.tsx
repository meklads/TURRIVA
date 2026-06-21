import Link from "next/link";
import { MarketingHero } from "@/modules/marketing/components/marketing-hero";
import { HeroStepsStrip } from "@/modules/marketing/components/hero-steps-strip";
import { SectionHeader } from "@/modules/marketing/components/section-header";
import {
  LANDING_SECTION_IMAGES,
  SectionVisual,
  landingSectionAlts,
} from "@/modules/marketing/components/section-visual";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  t: Messages;
  locale: Locale;
};

/** Root landing — premium Navy/Gold gateway. No chat widgets or mock UIs. */
export function LandingPage({ t, locale }: Props) {
  const s = t.sales;
  const arrow = locale === "ar" ? "←" : "→";
  const sectionAlts = landingSectionAlts(locale);
  const trustPills = [t.landing.feature1, t.landing.feature2, t.landing.feature3];

  return (
    <div className="ruwaq-landing-shell">
      <MarketingHero hero={s.hero} locale={locale} trustPills={trustPills} />

      <section className="ruwaq-landing-section ruwaq-landing-section--elevated">
        <div className="ruwaq-landing-section-inner max-w-5xl">
          <HeroStepsStrip title={s.heroSteps.title} steps={s.heroSteps.items} />
          <div className="mt-12 text-center">
            <Link href="/proposals/new" className="btn-ruwaq-luxury inline-flex px-9 py-3.5">
              {s.hero.cta} {arrow}
            </Link>
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                eyebrow={s.problem.eyebrow}
                title={s.problem.title}
                subtitle={s.problem.body}
                align="start"
                dark
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="ruwaq-luxury-card ruwaq-luxury-card--muted">
                  <p className="ruwaq-compare-label text-red-400/90">{s.problem.traditionalLabel}</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.problem.traditional.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="mt-0.5 shrink-0 text-red-400/80" aria-hidden>
                          ✕
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ruwaq-luxury-card ruwaq-luxury-card--gold">
                  <p className="ruwaq-compare-label text-ruwaq-gold">{s.problem.ruwaqLabel}</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.problem.ruwaq.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                        <span className="mt-0.5 shrink-0 text-ruwaq-gold" aria-hidden>
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <SectionVisual
              src={LANDING_SECTION_IMAGES.problem}
              alt={sectionAlts.problem}
              priority
              variant="tall"
              luxury
            />
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--elevated">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader
            eyebrow={s.features.eyebrow}
            title={s.features.title}
            subtitle={s.features.subtitle}
            dark
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {s.features.items.map(({ icon, title, body }, i) => (
              <article key={title} className="ruwaq-luxury-card">
                <span className="ruwaq-service-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-4 block text-2xl" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader
            eyebrow={s.why.eyebrow}
            title={s.why.title}
            subtitle={s.why.subtitle}
            dark
          />
          <div className="ruwaq-comparison-table mt-14 lg:mt-16">
            <div className="hidden grid-cols-[1fr_1fr_1fr] border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-white/40 sm:grid">
              <div className="px-6 py-4">{s.why.table.need}</div>
              <div className="border-s border-white/10 px-6 py-4">{s.why.table.others}</div>
              <div className="border-s border-white/10 px-6 py-4 text-ruwaq-gold">{s.why.table.ruwaq}</div>
            </div>
            {s.why.rows.map((row) => (
              <div key={row.need} className="grid border-t border-white/10 sm:grid-cols-[1fr_1fr_1fr]">
                <div className="px-6 py-5 text-sm font-medium text-white">{row.need}</div>
                <div className="border-t border-white/10 px-6 py-5 text-sm text-white/45 sm:border-t-0 sm:border-s">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-white/25 sm:hidden">
                    {s.why.table.others}
                  </span>
                  {row.others}
                </div>
                <div className="border-t border-white/10 bg-ruwaq-gold/10 px-6 py-5 text-sm font-medium text-ruwaq-gold sm:border-s sm:border-t-0">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-ruwaq-gold/60 sm:hidden">
                    {s.why.table.ruwaq}
                  </span>
                  {row.ruwaq}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--elevated">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionVisual src={LANDING_SECTION_IMAGES.trust} alt={sectionAlts.trust} variant="landscape" luxury />
            <div>
              <SectionHeader
                eyebrow={s.sample.eyebrow}
                title={s.sample.title}
                subtitle={s.sample.body}
                align="start"
                dark
              />
              <Link href="/proposals/new" className="btn-ruwaq-luxury mt-8 inline-flex px-9 py-3.5">
                {s.hero.cta} {arrow}
              </Link>
              <Link
                href="/templates/sample"
                className="btn-ruwaq-outline-gold mt-4 inline-flex px-8 py-3 sm:ms-3 sm:mt-8"
              >
                {s.sample.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-cta">
        <div className="ruwaq-landing-section-inner max-w-3xl text-center">
          <h2 className="ruwaq-cta-title">{s.ctaFinal.title}</h2>
          <p className="ruwaq-cta-lead mx-auto mt-5 max-w-xl">{s.ctaFinal.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposals/new" className="btn-ruwaq-luxury px-10 py-4 text-base">
              {s.ctaFinal.primary} {arrow}
            </Link>
            <Link href="/templates/sample" className="btn-ruwaq-outline-gold px-8 py-3.5">
              {s.ctaFinal.secondary}
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/35">{s.ctaFinal.microcopy}</p>
        </div>
      </section>
    </div>
  );
}
