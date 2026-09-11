import Image from "next/image";
import { EXPERIENCE_PATH, getExperienceCopy } from "@/modules/luxury/lib/real-estate-experience-copy";
import { getProductVisuals } from "@/modules/luxury/lib/product-visuals";
import { LocalizedLink } from "@/shared/components/localized-link";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryProductStoryStrip } from "./luxury-product-story-strip";
import { LuxuryProductPager, LuxuryProductRelated } from "./luxury-product-related";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryRealEstateExperiencePage({ locale }: Props) {
  const copy = getExperienceCopy(locale);
  const visuals = getProductVisuals("real-estate-experience");
  const briefHref = `${localizePath(EXPERIENCE_PATH, locale)}#brief`;
  const alt = locale === "ar" ? visuals.altAr : visuals.altEn;

  return (
    <div className="lux-rx">
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

      <section className="lux-rx-section lux-rx-section--soft" aria-labelledby="experience-problem-title">
        <div className="lux-container lux-rx-problem">
          <div className="lux-rx-problem__copy">
            <p className="lux-rx-kicker">{copy.problem.eyebrow}</p>
            <h2 id="experience-problem-title" className="lux-rx-display">
              {copy.problem.title}
            </h2>
            <p className="lux-rx-copy">{copy.problem.body}</p>
          </div>
          <ol className="lux-rx-problem__list">
            {copy.problem.points.map((point, index) => (
              <li key={point} className="lux-rx-problem__item">
                <span className="lux-rx-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--ink" aria-labelledby="experience-definition-title">
        <div className="lux-container lux-rx-define">
          <div className="lux-rx-define__main">
            <p className="lux-rx-kicker lux-rx-kicker--light">{copy.definition.eyebrow}</p>
            <h2 id="experience-definition-title" className="lux-rx-display lux-rx-display--light">
              {copy.definition.title}
            </h2>
            <p className="lux-rx-copy lux-rx-copy--light">{copy.definition.body}</p>
          </div>
          <aside className="lux-rx-define__aside">
            <p className="lux-rx-define__result">{copy.definition.result}</p>
          </aside>
        </div>
      </section>

      <LuxuryProductVisualBand locale={locale} product="real-estate-experience" />

      <LuxuryProductStoryStrip locale={locale} product="real-estate-experience" />

      <section id="scope" className="lux-rx-section lux-rx-section--paper scroll-mt-24" aria-labelledby="experience-scope-title">
        <div className="lux-container">
          <header className="lux-rx-intro">
            <p className="lux-rx-kicker">{copy.includes.eyebrow}</p>
            <h2 id="experience-scope-title" className="lux-rx-display">
              {copy.includes.title}
            </h2>
            <p className="lux-rx-copy">{copy.includes.intro}</p>
          </header>

          <ol className="lux-rx-scope">
            {copy.includes.items.map((item, index) => (
              <li key={item.title} className="lux-rx-scope__row">
                <span className="lux-rx-scope__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="lux-rx-scope__body">
                  <div className="lux-rx-scope__top">
                    <h3 className="lux-rx-scope__title">{item.title}</h3>
                    {item.more && item.moreHref ? (
                      <LocalizedLink href={item.moreHref} className="lux-rx-text-link">
                        {item.more}
                      </LocalizedLink>
                    ) : null}
                  </div>
                  <ul className="lux-rx-chips">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="lux-rx-footnote">{copy.includes.techNote}</p>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--warm" aria-labelledby="experience-flexible-title">
        <div className="lux-container lux-rx-rail">
          <header className="lux-rx-intro lux-rx-intro--center">
            <p className="lux-rx-kicker">{copy.flexible.eyebrow}</p>
            <h2 id="experience-flexible-title" className="lux-rx-display">
              {copy.flexible.title}
            </h2>
            <p className="lux-rx-copy">{copy.flexible.intro}</p>
          </header>
          <ul className="lux-rx-rail__items">
            {copy.flexible.options.map((option, index) => (
              <li key={option} className="lux-rx-rail__item">
                <span className="lux-rx-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--paper" aria-labelledby="experience-levels-title">
        <div className="lux-container">
          <header className="lux-rx-intro">
            <p className="lux-rx-kicker">{copy.levels.eyebrow}</p>
            <h2 id="experience-levels-title" className="lux-rx-display">
              {copy.levels.title}
            </h2>
            <p className="lux-rx-copy">{copy.levels.note}</p>
          </header>
          <ol className="lux-rx-tiers">
            {copy.levels.items.map((level, index) => (
              <li
                key={level.name}
                className={`lux-rx-tier${index === 1 ? " lux-rx-tier--featured" : ""}`}
              >
                <div className="lux-rx-tier__head">
                  <span className="lux-rx-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="lux-rx-tier__name">{level.name}</h3>
                  {level.nameAlt ? <p className="lux-rx-tier__alt">{level.nameAlt}</p> : null}
                </div>
                <p className="lux-rx-tier__body">{level.body}</p>
                <ul className="lux-rx-chips lux-rx-chips--on-tier">
                  {level.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--soft" aria-labelledby="experience-when-title">
        <div className="lux-container lux-rx-when">
          <header className="lux-rx-intro">
            <p className="lux-rx-kicker">{copy.when.eyebrow}</p>
            <h2 id="experience-when-title" className="lux-rx-display">
              {copy.when.title}
            </h2>
          </header>
          <ul className="lux-rx-when__grid">
            {copy.when.items.map((item) => (
              <li key={item}>
                <span className="lux-rx-when__dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--ink" aria-labelledby="experience-journey-title">
        <div className="lux-container">
          <header className="lux-rx-intro">
            <p className="lux-rx-kicker lux-rx-kicker--light">{copy.journey.eyebrow}</p>
            <h2 id="experience-journey-title" className="lux-rx-display lux-rx-display--light">
              {copy.journey.title}
            </h2>
          </header>
          <ol className="lux-rx-flow">
            {copy.journey.steps.map((step, index) => (
              <li key={step} className="lux-rx-flow__step">
                <span className="lux-rx-flow__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="lux-rx-flow__label">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--paper" aria-labelledby="experience-why-title">
        <div className="lux-container">
          <header className="lux-rx-intro">
            <p className="lux-rx-kicker">{copy.why.eyebrow}</p>
            <h2 id="experience-why-title" className="lux-rx-display">
              {copy.why.title}
            </h2>
          </header>
          <ul className="lux-rx-pillars">
            {copy.why.items.map((item, index) => (
              <li key={item.title} className="lux-rx-pillars__item">
                <span className="lux-rx-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="lux-rx-pillars__title">{item.title}</h3>
                <p className="lux-rx-pillars__body">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="lux-rx-footnote">{copy.why.trust}</p>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--warm" aria-labelledby="experience-scenario-title">
        <div className="lux-container lux-rx-case">
          <div className="lux-rx-case__media">
            <Image src={visuals.form} alt={alt} fill className="object-cover" sizes="(max-width: 900px) 100vw, 42vw" />
            <div className="lux-rx-case__shade" aria-hidden />
          </div>
          <div className="lux-rx-case__content">
            <p className="lux-rx-kicker">{copy.scenario.eyebrow}</p>
            <h2 id="experience-scenario-title" className="lux-rx-display">
              {copy.scenario.title}
            </h2>
            <p className="lux-rx-case__label">{copy.scenario.label}</p>
            <p className="lux-rx-case__project">{copy.scenario.project}</p>
            <p className="lux-rx-case__needs-label">{copy.scenario.needsTitle}</p>
            <ul className="lux-rx-chips">
              {copy.scenario.needs.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
            <div className="lux-rx-case__roles">
              <p>{copy.scenario.turriva}</p>
              <p>{copy.scenario.graphics}</p>
              <p className="lux-rx-case__result">{copy.scenario.result}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lux-rx-section lux-rx-section--ink lux-rx-finale" aria-label={copy.close.brand}>
        <div className="lux-container lux-rx-finale__inner">
          <p className="lux-rx-finale__line">{copy.close.line}</p>
          <p className="lux-rx-finale__brand">{copy.close.brand}</p>
          <p className="lux-rx-finale__tag">{copy.close.tagline}</p>
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
    </div>
  );
}
