import { EXPERIENCE_PATH, getExperienceCopy } from "@/modules/luxury/lib/real-estate-experience-copy";
import { LocalizedLink } from "@/shared/components/localized-link";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryProductPager, LuxuryProductRelated } from "./luxury-product-related";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryRealEstateExperiencePage({ locale }: Props) {
  const copy = getExperienceCopy(locale);
  const briefHref = `${localizePath(EXPERIENCE_PATH, locale)}#brief`;

  return (
    <>
      <LuxuryProductHero
        locale={locale}
        product="real-estate-experience"
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        question={copy.hero.question}
        body={copy.hero.body}
        primaryCta={copy.hero.cta}
        secondaryCta={copy.hero.secondary}
        secondaryHref="#brief"
        titleId="experience-hero-title"
      />

      <section className="lux-section lux-section--linen" aria-labelledby="experience-problem-title">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.problem.eyebrow}</p>
          <h2 id="experience-problem-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.problem.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.problem.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {copy.problem.points.map((point) => (
              <li key={point} className="lux-product-point">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="experience-definition-title">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
          <h2 id="experience-definition-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.definition.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
          <p className="mt-6 border-s-2 border-lux-gold ps-4 text-sm leading-relaxed text-lux-ink">{copy.definition.result}</p>
        </div>
      </section>

      <LuxuryProductVisualBand locale={locale} product="real-estate-experience" />

      <section id="scope" className="lux-section lux-section--linen scroll-mt-24" aria-labelledby="experience-scope-title">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.includes.eyebrow}</p>
            <h2 id="experience-scope-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.includes.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.includes.intro}</p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.includes.items.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-lux-ink">{item.title}</h3>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-lux-ink-soft">
                      {point}
                    </li>
                  ))}
                </ul>
                {item.more && item.moreHref ? (
                  <LocalizedLink href={item.moreHref} className="mt-4 inline-flex text-sm font-semibold text-lux-gold">
                    {item.more}
                  </LocalizedLink>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-lux-ink-muted">{copy.includes.techNote}</p>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="experience-flexible-title">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.flexible.eyebrow}</p>
          <h2 id="experience-flexible-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.flexible.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.flexible.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.flexible.options.map((option) => (
              <li key={option} className="border-t border-lux-sand py-3 text-sm text-lux-ink">
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="experience-levels-title">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.levels.eyebrow}</p>
            <h2 id="experience-levels-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.levels.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.levels.note}</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {copy.levels.items.map((level, index) => (
              <li key={level.name} className="rounded-2xl border border-lux-sand bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <h3 className="mt-3 font-semibold text-lux-ink">{level.name}</h3>
                <p className="mt-2 text-sm text-lux-ink-soft">{level.body}</p>
                <ul className="mt-4 space-y-2">
                  {level.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-lux-ink-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="experience-when-title">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.when.eyebrow}</p>
          <h2 id="experience-when-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.when.title}
          </h2>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {copy.when.items.map((item) => (
              <li key={item} className="border-t border-lux-sand py-3 text-sm leading-relaxed text-lux-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="experience-journey-title">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.journey.eyebrow}</p>
          <h2 id="experience-journey-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.journey.title}
          </h2>
          <ol className="mt-8">
            {copy.journey.steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-lux-sand py-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</span>
                <span className="text-lux-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="experience-why-title">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.why.eyebrow}</p>
            <h2 id="experience-why-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.why.title}
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {copy.why.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
                <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-lux-ink-muted">{copy.why.trust}</p>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="experience-scenario-title">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.scenario.eyebrow}</p>
          <h2 id="experience-scenario-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.scenario.title}
          </h2>
          <p className="mt-3 text-sm text-lux-ink-muted">{copy.scenario.label}</p>
          <p className="mt-6 font-semibold text-lux-ink">{copy.scenario.project}</p>
          <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-lux-gold">{copy.scenario.needsTitle}</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {copy.scenario.needs.map((need) => (
              <li key={need} className="text-sm text-lux-ink-soft">
                {need}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 text-sm leading-relaxed text-lux-ink-soft">
            <p>{copy.scenario.turriva}</p>
            <p>{copy.scenario.graphics}</p>
            <p className="font-semibold text-lux-ink">{copy.scenario.result}</p>
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-3xl">
          <p className="lux-body text-lg leading-relaxed text-lux-ink">{copy.close.line}</p>
          <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-lux-gold">{copy.close.brand}</p>
          <p className="mt-2 text-sm text-lux-ink-muted">{copy.close.tagline}</p>
        </div>
      </section>

      <LuxuryProductRelated locale={locale} product="real-estate-experience" />

      <LuxuryProductBriefSection
        locale={locale}
        product="real-estate-experience"
        title={copy.close.title}
        body={copy.close.body}
        titleId="experience-cta-title"
      >
        <LuxuryExperienceBriefForm locale={locale} />
      </LuxuryProductBriefSection>

      <LuxuryProductPager locale={locale} product="real-estate-experience" />

      <LuxuryStickyCta locale={locale} label={copy.hero.cta} href={briefHref} source="real_estate_experience" />
    </>
  );
}
