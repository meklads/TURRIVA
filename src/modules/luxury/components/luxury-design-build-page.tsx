import { DESIGN_BUILD_PATH, getDesignBuildCopy } from "@/modules/luxury/lib/design-build-copy";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LocalizedLink } from "@/shared/components/localized-link";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryProductStoryStrip } from "./luxury-product-story-strip";
import { LuxuryProductPager, LuxuryProductRelated } from "./luxury-product-related";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryDesignBuildPage({ locale }: Props) {
  const copy = getDesignBuildCopy(locale);

  return (
    <>
      <LuxuryProductHero
        locale={locale}
        product="design-build"
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        body={copy.hero.body}
        primaryCta={copy.hero.cta}
        secondaryCta={copy.hero.secondary}
        secondaryHref="#brief"
        titleId="design-build-title"
      />

      <section className="lux-section lux-section--linen" aria-labelledby="design-build-problem">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.problem.eyebrow}</p>
          <h2 id="design-build-problem" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
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

      <section className="lux-section lux-section--white" aria-labelledby="design-build-definition">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
          <h2 id="design-build-definition" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.definition.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
          <p className="mt-6 border-s-2 border-lux-gold ps-4 text-sm leading-relaxed text-lux-ink">{copy.definition.result}</p>
        </div>
      </section>

      <LuxuryProductVisualBand locale={locale} product="design-build" />

      <LuxuryProductStoryStrip locale={locale} product="design-build" />

      <section className="lux-section lux-section--linen" aria-labelledby="design-build-starts">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.starts.eyebrow}</p>
          <h2 id="design-build-starts" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.starts.title}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {copy.starts.items.map((item) => (
              <li key={item.title} className="lux-product-panel">
                <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
                {item.href && item.cta ? (
                  <LocalizedLink href={item.href} className="mt-4 inline-flex text-sm font-semibold text-lux-gold">
                    {item.cta}
                  </LocalizedLink>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="scope" className="lux-section lux-section--white scroll-mt-24" aria-labelledby="design-build-scope">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.includes.eyebrow}</p>
          <h2 id="design-build-scope" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.includes.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.includes.intro}</p>
          <ol className="mt-8">
            {copy.includes.items.map((item, index) => (
              <li key={item.title} className="grid gap-2 border-t border-lux-sand py-4 sm:grid-cols-[8rem_1fr]">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <div>
                  <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                  <p className="lux-body mt-1 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="design-build-sizes">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.sizes.eyebrow}</p>
            <h2 id="design-build-sizes" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.sizes.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.sizes.note}</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {copy.sizes.items.map((item, index) => (
              <li key={item.title} className="lux-product-panel">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <h3 className="mt-3 font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="design-build-method">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.method.eyebrow}</p>
          <h2 id="design-build-method" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
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

      <LuxuryProductRelated locale={locale} product="design-build" />

      <LuxuryProductBriefSection
        locale={locale}
        product="design-build"
        title={copy.close.title}
        body={copy.close.body}
        titleId="design-build-cta"
      >
        <LuxuryExperienceBriefForm
          locale={locale}
          source="design_build"
          productLabel={copy.form.productLabel}
          initialProjectType="other"
          initialNeeds={["design", "execution"]}
          unitTypes={copy.form.spaces}
          choiceLegend={copy.form.choiceLegend}
          drawings={copy.form.drawings}
        />
      </LuxuryProductBriefSection>

      <LuxuryProductPager locale={locale} product="design-build" />

      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(DESIGN_BUILD_PATH, locale)}#brief`}
        source="design_build"
      />
    </>
  );
}
