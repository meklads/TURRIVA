import Link from "next/link";
import { MarketingHero } from "@/modules/marketing/components/marketing-hero";
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
      <MarketingHero
        hero={s.hero}
        heroSteps={s.heroSteps}
        locale={locale}
        trustPills={trustPills}
        learnMore={{ href: "/how-it-works", label: s.steps.learnMore }}
        productPreview={<ProductMockPreview mock={s.mock} compact />}
      />

      <section className="ruwaq-landing-section ruwaq-landing-section--paper border-b border-ruwaq-stone/20">
        <div className="ruwaq-landing-section-inner max-w-4xl">
          <SectionHeader
            eyebrow={s.mock.previewEyebrow}
            title={s.mock.previewTitle}
            subtitle={s.mock.previewSubtitle}
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <ProductMockPreview mock={s.mock} />
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--linen">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow={s.problem.eyebrow}
                title={s.problem.title}
                subtitle={s.problem.body}
                align="start"
              />
            </div>
            <SectionVisual
              src={LANDING_SECTION_IMAGES.problem}
              alt={sectionAlts.problem}
              priority
            />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="ruwaq-compare-card ruwaq-compare-bad">
              <p className="ruwaq-compare-label ruwaq-compare-label-bad">{s.problem.traditionalLabel}</p>
              <ul className="mt-3 space-y-2.5">
                {s.problem.traditional.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ruwaq-navy-soft">
                    <span className="mt-0.5 shrink-0 text-red-500" aria-hidden>
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ruwaq-compare-card ruwaq-compare-good">
              <p className="ruwaq-compare-label ruwaq-compare-label-good">{s.problem.ruwaqLabel}</p>
              <ul className="mt-3 space-y-2.5">
                {s.problem.ruwaq.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ruwaq-navy">
                    <span className="mt-0.5 shrink-0 text-green-600" aria-hidden>
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

      <section className="ruwaq-landing-section ruwaq-landing-section--elevated">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader
            eyebrow={s.features.eyebrow}
            title={s.features.title}
            subtitle={s.features.subtitle}
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <SectionVisual src={LANDING_SECTION_IMAGES.trust} alt={sectionAlts.trust} wide />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.items.map(({ icon, title, body }) => (
              <article key={title} className="ruwaq-card group">
                <span className="ruwaq-feature-icon" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ruwaq-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ruwaq-ink-muted">{body}</p>
              </article>
            ))}
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
          <div className="ruwaq-comparison-table mt-14">
            <div className="hidden grid-cols-[1fr_1fr_1fr] bg-white/5 text-xs font-bold uppercase tracking-wider text-white/50 sm:grid">
              <div className="px-5 py-3">{s.why.table.need}</div>
              <div className="border-s border-white/10 px-5 py-3">{s.why.table.others}</div>
              <div className="border-s border-white/10 px-5 py-3 text-ruwaq-brown">{s.why.table.ruwaq}</div>
            </div>
            {s.why.rows.map((row) => (
              <div key={row.need} className="grid border-t border-white/10 sm:grid-cols-[1fr_1fr_1fr]">
                <div className="px-5 py-4 text-sm font-semibold text-white">{row.need}</div>
                <div className="border-t border-white/10 px-5 py-4 text-sm text-white/45 sm:border-t-0 sm:border-s">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-white/30 sm:hidden">
                    {s.why.table.others}
                  </span>
                  {row.others}
                </div>
                <div className="border-t border-white/10 bg-ruwaq-brown/5 px-5 py-4 text-sm font-medium text-ruwaq-brown sm:border-s sm:border-t-0">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-ruwaq-brown/60 sm:hidden">
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
          <div className="mx-auto mt-12 max-w-4xl">
            <SectionVisual src={LANDING_SECTION_IMAGES.audience} alt={sectionAlts.audience} wide />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.audience.items.map(({ icon, title, body }) => (
              <article key={title} className="ruwaq-mini-card">
                <span className="text-3xl" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ruwaq-ink">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ruwaq-ink-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--linen border-y border-ruwaq-stone/20">
        <div className="ruwaq-landing-section-inner">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow={s.sample.eyebrow}
                title={s.sample.title}
                subtitle={s.sample.body}
                align="start"
              />
              <Link href="/templates/sample" className="btn-ruwaq-primary mt-6 inline-flex">
                {s.sample.cta} {arrow}
              </Link>
              <ul className="mt-8 flex flex-wrap gap-2">
                {s.sample.items.map((item) =>
                  item.live ? (
                    <li key={item.title}>
                      <Link
                        href="/templates/sample"
                        className="inline-flex rounded-full border border-ruwaq-brown/40 bg-white px-3.5 py-1.5 text-xs font-semibold text-ruwaq-navy shadow-sm transition-colors hover:border-ruwaq-brown hover:text-ruwaq-brown"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.title}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-ruwaq-cream bg-white/80 px-3.5 py-1.5 text-xs text-ruwaq-navy-soft">
                        {item.title}
                        <span className="rounded-full bg-ruwaq-cream-bg px-1.5 py-0.5 text-[10px] font-bold text-ruwaq-navy-soft">
                          {s.sample.comingSoon}
                        </span>
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <SectionVisual src={LANDING_SECTION_IMAGES.sample} alt={sectionAlts.sample} />
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section ruwaq-landing-section--paper">
        <div className="ruwaq-landing-section-inner max-w-4xl">
          <SectionHeader
            eyebrow={s.document.eyebrow}
            title={s.document.title}
            subtitle={s.document.subtitle}
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {s.document.layers.map((layer, i) => (
              <div key={layer} className="ruwaq-layer-chip">
                <span className="ruwaq-layer-chip-index">{i + 1}</span>
                <span className="text-sm font-medium text-ruwaq-ink">{layer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-cta ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {s.ctaFinal.title}
          </h2>
          <p className="ruwaq-section-lead mx-auto mt-5 max-w-xl text-white/70">{s.ctaFinal.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposals/new" className="btn-ruwaq-primary px-9 py-3.5 text-base">
              {s.ctaFinal.primary} {arrow}
            </Link>
            <Link href="/templates/sample" className="ruwaq-cta-secondary">
              {s.ctaFinal.secondary}
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/45">{s.ctaFinal.microcopy}</p>
        </div>
      </section>
    </>
  );
}
