import { SHOW_UNIT_PATH, getShowUnitCopy } from "@/modules/luxury/lib/show-unit-copy";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LocalizedLink } from "@/shared/components/localized-link";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryShowUnitPage({ locale }: Props) {
  const copy = getShowUnitCopy(locale);

  return (
    <>
      <LuxuryProductHero
        locale={locale}
        product="show-unit"
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        question={copy.hero.question}
        body={copy.hero.body}
        primaryCta={copy.hero.cta}
        secondaryCta={copy.hero.secondary}
        titleId="show-unit-title"
      />

      <section className="lux-section lux-section--linen" aria-labelledby="show-unit-problem">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.problem.eyebrow}</p>
          <h2 id="show-unit-problem" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
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

      <section className="lux-section lux-section--white" aria-labelledby="show-unit-definition">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
          <h2 id="show-unit-definition" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.definition.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
          <p className="mt-6 border-s-2 border-lux-gold ps-4 text-sm leading-relaxed text-lux-ink">{copy.definition.result}</p>
        </div>
      </section>

      <LuxuryProductVisualBand locale={locale} product="show-unit" />

      <section className="lux-section lux-section--linen" aria-labelledby="show-unit-types">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.types.eyebrow}</p>
            <h2 id="show-unit-types" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.types.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.types.intro}</p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {copy.types.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
                <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="scope" className="lux-section lux-section--white scroll-mt-24" aria-labelledby="show-unit-scope">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.includes.eyebrow}</p>
            <h2 id="show-unit-scope" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.includes.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.includes.intro}</p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.includes.core.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <h3 className="mt-3 font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-xs font-semibold tracking-[0.16em] text-lux-gold">{copy.includes.optionalTitle}</p>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {copy.includes.optional.map((item) => (
              <li key={item.title} className="border-t border-lux-sand py-4">
                <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-2 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="show-unit-flexible">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.flexible.eyebrow}</p>
          <h2 id="show-unit-flexible" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.flexible.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.flexible.intro}</p>
          <ol className="mt-8 grid gap-4">
            {copy.flexible.options.map((item, index) => (
              <li key={item.title} className="grid gap-2 border-t border-lux-sand py-4 sm:grid-cols-[8rem_1fr]">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <div>
                  <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                  <p className="lux-body mt-1 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-relaxed text-lux-ink-soft">{copy.flexible.parent}</p>
          <LocalizedLink href={copy.flexible.parentHref} className="mt-4 inline-flex text-sm font-semibold text-lux-gold">
            {copy.flexible.parentCta}
          </LocalizedLink>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="show-unit-method">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.method.eyebrow}</p>
          <h2 id="show-unit-method" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.method.title}
          </h2>
          <ol className="mt-8">
            {copy.method.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-lux-sand py-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-lux-ink">{step.title}</h3>
                  <p className="lux-body mt-1 text-sm leading-relaxed text-lux-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.audience.eyebrow}</p>
          <h2 className="lux-display mt-3 text-3xl leading-tight md:text-4xl">{copy.audience.title}</h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.audience.body}</p>
          <p className="mt-6 text-sm leading-relaxed text-lux-ink-muted">{copy.audience.trust}</p>
        </div>
      </section>

      <LuxuryProductBriefSection
        locale={locale}
        product="show-unit"
        title={copy.close.title}
        body={copy.close.body}
        titleId="show-unit-cta"
      >
        <LuxuryExperienceBriefForm
          locale={locale}
          source="show_unit"
          productLabel={copy.form.productLabel}
          initialProjectType="show_unit"
          initialNeeds={["show_unit", "design", "execution"]}
          unitTypes={copy.form.unitTypes}
          drawings={copy.form.drawings}
        />
      </LuxuryProductBriefSection>

      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(SHOW_UNIT_PATH, locale)}#brief`}
        source="show_unit"
      />
    </>
  );
}
