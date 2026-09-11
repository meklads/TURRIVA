import { HOSPITALITY_SPACES_PATH, getHospitalitySpacesCopy } from "@/modules/luxury/lib/hospitality-spaces-copy";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LocalizedLink } from "@/shared/components/localized-link";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryProductPager, LuxuryProductRelated } from "./luxury-product-related";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryHospitalitySpacesPage({ locale }: Props) {
  const copy = getHospitalitySpacesCopy(locale);

  return (
    <>
      <LuxuryProductHero
        locale={locale}
        product="hospitality-spaces"
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        body={copy.hero.body}
        primaryCta={copy.hero.cta}
        secondaryCta={copy.hero.secondary}
        titleId="hospitality-spaces-title"
      />

      <section className="lux-section lux-section--linen" aria-labelledby="hospitality-spaces-problem">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.problem.eyebrow}</p>
          <h2 id="hospitality-spaces-problem" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
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

      <section className="lux-section lux-section--white" aria-labelledby="hospitality-spaces-definition">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
          <h2 id="hospitality-spaces-definition" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.definition.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
          <p className="mt-6 border-s-2 border-lux-gold ps-4 text-sm leading-relaxed text-lux-ink">{copy.definition.result}</p>
        </div>
      </section>

      <LuxuryProductVisualBand locale={locale} product="hospitality-spaces" />

      <section className="lux-section lux-section--linen" aria-labelledby="hospitality-spaces-starts">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.starts.eyebrow}</p>
          <h2 id="hospitality-spaces-starts" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.starts.title}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {copy.starts.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
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

      <section className="lux-section lux-section--white" aria-labelledby="hospitality-spaces-partner">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.partner.eyebrow}</p>
          <h2 id="hospitality-spaces-partner" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.partner.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.partner.body}</p>
          <p className="mt-6 border-s-2 border-lux-gold ps-4 text-sm leading-relaxed text-lux-ink">{copy.partner.line}</p>
        </div>
      </section>

      <section id="scope" className="lux-section lux-section--linen scroll-mt-24" aria-labelledby="hospitality-spaces-scope">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.includes.eyebrow}</p>
          <h2 id="hospitality-spaces-scope" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
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

      <section className="lux-section lux-section--white" aria-labelledby="hospitality-spaces-sizes">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.sizes.eyebrow}</p>
            <h2 id="hospitality-spaces-sizes" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.sizes.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.sizes.note}</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {copy.sizes.items.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <h3 className="mt-3 font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="hospitality-spaces-method">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.method.eyebrow}</p>
          <h2 id="hospitality-spaces-method" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
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
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.audience.items.map((item) => (
              <li key={item} className="rounded-xl border border-lux-sand bg-white px-4 py-4 text-sm leading-relaxed text-lux-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-lux-ink-muted">{copy.audience.trust}</p>
        </div>
      </section>

      <LuxuryProductRelated locale={locale} product="hospitality-spaces" />

      <LuxuryProductBriefSection
        locale={locale}
        product="hospitality-spaces"
        title={copy.close.title}
        body={copy.close.body}
        titleId="hospitality-spaces-cta"
      >
        <LuxuryExperienceBriefForm
          locale={locale}
          source="hospitality_spaces"
          productLabel={copy.form.productLabel}
          initialProjectType="other"
          initialNeeds={["design", "execution"]}
          unitTypes={copy.form.spaces}
          choiceLegend={copy.form.choiceLegend}
          drawings={copy.form.drawings}
        />
      </LuxuryProductBriefSection>

      <LuxuryProductPager locale={locale} product="hospitality-spaces" />

      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(HOSPITALITY_SPACES_PATH, locale)}#brief`}
        source="hospitality_spaces"
      />
    </>
  );
}
