import Link from "next/link";
import { MarketingHero } from "@/modules/marketing/components/marketing-hero";
import { HeroStepsStrip } from "@/modules/marketing/components/hero-steps-strip";
import { ProductMockPreview } from "@/modules/marketing/components/product-mock-preview";
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

export function LandingPage({ t, locale }: Props) {
  const s = t.sales;
  const arrow = locale === "ar" ? "←" : "→";
  const sectionAlts = landingSectionAlts(locale);
  const trustPills = [t.landing.feature1, t.landing.feature2, t.landing.feature3];

  return (
    <>
      <MarketingHero hero={s.hero} locale={locale} trustPills={trustPills} />

      <section className="ruwaq-hero-steps-section ruwaq-landing-section ruwaq-landing-section--paper">
        <div className="ruwaq-landing-section-inner max-w-5xl">
          <HeroStepsStrip title={s.heroSteps.title} steps={s.heroSteps.items} />
          <p className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-ruwaq-gold transition-colors hover:text-ruwaq-gold-light"
            >
              {s.steps.learnMore} {arrow}
            </Link>
          </p>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--linen">
        <div className="ruwaq-landing-section-inner max-w-5xl">
          <SectionHeader
            eyebrow={s.mock.previewEyebrow}
            title={s.mock.previewTitle}
            subtitle={s.mock.previewSubtitle}
          />
          <div className="mx-auto mt-14 max-w-4xl">
            <ProductMockPreview mock={s.mock} />
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--paper">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow={s.problem.eyebrow}
                title={s.problem.title}
                subtitle={s.problem.body}
                align="start"
              />
            </div>
            <div className="ruwaq-editorial-stagger">
              <SectionVisual
                src={LANDING_SECTION_IMAGES.problem}
                alt={sectionAlts.problem}
                priority
                variant="tall"
              />
              <SectionVisual
                src={LANDING_SECTION_IMAGES.trust}
                alt={sectionAlts.trust}
                offset
                variant="landscape"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:mt-28">
            <div className="ruwaq-compare-card ruwaq-compare-bad">
              <p className="ruwaq-compare-label ruwaq-compare-label-bad">{s.problem.traditionalLabel}</p>
              <ul className="mt-5 space-y-3">
                {s.problem.traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ruwaq-ink-soft">
                    <span className="mt-0.5 shrink-0 text-red-500/80" aria-hidden>
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ruwaq-compare-card ruwaq-compare-good">
              <p className="ruwaq-compare-label ruwaq-compare-label-good">{s.problem.ruwaqLabel}</p>
              <ul className="mt-5 space-y-3">
                {s.problem.ruwaq.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ruwaq-ink">
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
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--linen">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div>
              <SectionHeader
                eyebrow={s.features.eyebrow}
                title={s.features.title}
                subtitle={s.features.subtitle}
                align="start"
              />
              <div className="mt-12 space-y-0">
                {s.features.items.map(({ icon, title, body }, i) => (
                  <article key={title} className="ruwaq-service-row group">
                    <span className="ruwaq-service-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex items-start gap-4">
                      <span className="ruwaq-feature-icon shrink-0" aria-hidden>
                        {icon}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ruwaq-ink-muted">{body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <SectionVisual
              src={LANDING_SECTION_IMAGES.audience}
              alt={sectionAlts.audience}
              variant="tall"
            />
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-dark ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader
            eyebrow={s.why.eyebrow}
            title={s.why.title}
            subtitle={s.why.subtitle}
            dark
          />
          <div className="ruwaq-comparison-table mt-16 lg:mt-20">
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
                <div className="border-t border-white/10 bg-ruwaq-gold/5 px-6 py-5 text-sm font-medium text-ruwaq-gold sm:border-s sm:border-t-0">
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

      <section className="ruwaq-landing-section ruwaq-landing-section--paper">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader eyebrow={s.audience.eyebrow} title={s.audience.title} />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-12">
            {s.audience.items.map(({ icon, title, body }) => (
              <article key={title} className="ruwaq-mini-card">
                <span className="text-2xl" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-5 text-base font-semibold text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ruwaq-ink-muted">{body}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl lg:mt-24">
            <SectionVisual src={LANDING_SECTION_IMAGES.trust} alt={sectionAlts.trust} wide variant="landscape" />
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--linen">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <SectionVisual src={LANDING_SECTION_IMAGES.sample} alt={sectionAlts.sample} variant="tall" />
            <div>
              <SectionHeader
                eyebrow={s.sample.eyebrow}
                title={s.sample.title}
                subtitle={s.sample.body}
                align="start"
              />
              <Link href="/templates/sample" className="btn-ruwaq-primary mt-8 inline-flex">
                {s.sample.cta} {arrow}
              </Link>
              <ul className="mt-10 flex flex-wrap gap-2">
                {s.sample.items.map((item) =>
                  item.live ? (
                    <li key={item.title}>
                      <Link
                        href="/templates/sample"
                        className="inline-flex rounded-full border border-ruwaq-gold/35 bg-white px-4 py-2 text-xs font-semibold text-charcoal transition-colors hover:border-ruwaq-gold hover:text-ruwaq-gold"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.title}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-ruwaq-stone/60 bg-white px-4 py-2 text-xs text-ruwaq-ink-soft">
                        {item.title}
                        <span className="rounded-full bg-warm px-2 py-0.5 text-[10px] font-semibold text-ruwaq-ink-muted">
                          {s.sample.comingSoon}
                        </span>
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--paper">
        <div className="ruwaq-landing-section-inner max-w-3xl">
          <SectionHeader
            eyebrow={s.document.eyebrow}
            title={s.document.title}
            subtitle={s.document.subtitle}
          />
          <div className="mx-auto mt-14 max-w-2xl divide-y divide-ruwaq-stone/50">
            {s.document.layers.map((layer, i) => (
              <div key={layer} className="ruwaq-layer-chip">
                <span className="ruwaq-layer-chip-index">{i + 1}</span>
                <span className="text-base font-medium text-charcoal">{layer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
