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
      />

      <section className="ruwaq-landing-section border-b border-ruwaq-cream bg-white">
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

      <section className="ruwaq-landing-section">
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

      <section className="ruwaq-landing-section border-y border-ruwaq-cream bg-ruwaq-cream-bg/40">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader
            eyebrow={s.features.eyebrow}
            title={s.features.title}
            subtitle={s.features.subtitle}
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <SectionVisual src={LANDING_SECTION_IMAGES.trust} alt={sectionAlts.trust} wide />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.items.map(({ icon, title, body }) => (
              <article key={title} className="ruwaq-card group">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ruwaq-navy text-xl shadow-sm transition-transform group-hover:scale-105"
                  aria-hidden
                >
                  {icon}
                </span>
                <h3 className="mt-4 text-base font-bold text-ruwaq-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">{body}</p>
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
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-ruwaq-lg">
            <div className="hidden grid-cols-[1fr_1fr_1fr] bg-white/5 text-xs font-bold uppercase tracking-wider text-white/50 sm:grid">
              <div className="px-5 py-3">{s.why.table.need}</div>
              <div className="border-s border-white/10 px-5 py-3">{s.why.table.others}</div>
              <div className="border-s border-white/10 px-5 py-3 text-ruwaq-gold">{s.why.table.ruwaq}</div>
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
                <div className="border-t border-white/10 bg-ruwaq-gold/5 px-5 py-4 text-sm font-medium text-ruwaq-gold sm:border-s sm:border-t-0">
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

      <section className="ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner">
          <SectionHeader eyebrow={s.audience.eyebrow} title={s.audience.title} />
          <div className="mx-auto mt-10 max-w-4xl">
            <SectionVisual src={LANDING_SECTION_IMAGES.audience} alt={sectionAlts.audience} wide />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.audience.items.map(({ icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-ruwaq-cream bg-white p-5 text-center shadow-ruwaq transition-shadow hover:shadow-ruwaq-lg"
              >
                <span className="text-3xl" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-3 text-sm font-bold text-ruwaq-navy">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ruwaq-navy-soft">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-section border-y border-ruwaq-cream bg-ruwaq-cream-bg/40">
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
                        className="inline-flex rounded-full border border-ruwaq-gold/40 bg-white px-3.5 py-1.5 text-xs font-semibold text-ruwaq-navy shadow-sm transition-colors hover:border-ruwaq-gold hover:text-ruwaq-gold"
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

      <section className="ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner max-w-4xl">
          <SectionHeader
            eyebrow={s.document.eyebrow}
            title={s.document.title}
            subtitle={s.document.subtitle}
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-2 sm:grid-cols-2">
            {s.document.layers.map((layer, i) => (
              <div
                key={layer}
                className="flex items-center gap-3 rounded-xl border border-ruwaq-cream bg-white px-4 py-3 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ruwaq-cream-bg text-xs font-bold text-ruwaq-gold">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-ruwaq-navy">{layer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ruwaq-landing-cta ruwaq-landing-section">
        <div className="ruwaq-landing-section-inner max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{s.ctaFinal.title}</h2>
          <p className="ruwaq-section-lead mx-auto mt-4 max-w-xl text-white/70">{s.ctaFinal.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposals/new" className="btn-ruwaq-primary px-8 py-3 text-base">
              {s.ctaFinal.primary} {arrow}
            </Link>
            <Link
              href="/templates/sample"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-ruwaq-gold hover:text-ruwaq-gold"
            >
              {s.ctaFinal.secondary}
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/45">{s.ctaFinal.microcopy}</p>
        </div>
      </section>
    </>
  );
}
