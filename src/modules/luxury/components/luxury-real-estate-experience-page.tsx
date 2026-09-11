import { EXPERIENCE_PATH, getExperienceCopy } from "@/modules/luxury/lib/real-estate-experience-copy";
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
  const briefHref = `${localizePath(EXPERIENCE_PATH, locale)}#brief`;
  const isAr = locale === "ar";

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

      {/* Problem — editorial split */}
      <section className="lux-rx-section lux-rx-section--soft" aria-labelledby="experience-problem-title">
        <div className="lux-container lux-rx-split">
          <header className="lux-rx-split__lead">
            <p className="lux-rx-eyebrow">{copy.problem.eyebrow}</p>
            <h2 id="experience-problem-title" className="lux-rx-title">
              {copy.problem.title}
            </h2>
          </header>
          <div className="lux-rx-split__body">
            <p className="lux-rx-lede">{copy.problem.body}</p>
            <ol className="lux-rx-insights">
              {copy.problem.points.map((point, index) => (
                <li key={point} className="lux-rx-insights__item">
                  <span className="lux-rx-insights__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Definition — immersive dark */}
      <section className="lux-rx-section lux-rx-section--ink" aria-labelledby="experience-definition-title">
        <div className="lux-container lux-rx-define">
          <p className="lux-rx-eyebrow lux-rx-eyebrow--on-dark">{copy.definition.eyebrow}</p>
          <h2 id="experience-definition-title" className="lux-rx-title lux-rx-title--on-dark lux-rx-title--wide">
            {copy.definition.title}
          </h2>
          <p className="lux-rx-lede lux-rx-lede--on-dark">{copy.definition.body}</p>
          <p className="lux-rx-result">{copy.definition.result}</p>
        </div>
      </section>

      <LuxuryProductVisualBand locale={locale} product="real-estate-experience" />

      <LuxuryProductStoryStrip locale={locale} product="real-estate-experience" />

      {/* Scope */}
      <section id="scope" className="lux-rx-section lux-rx-section--white scroll-mt-24" aria-labelledby="experience-scope-title">
        <div className="lux-container">
          <header className="lux-rx-head">
            <p className="lux-rx-eyebrow">{copy.includes.eyebrow}</p>
            <h2 id="experience-scope-title" className="lux-rx-title">
              {copy.includes.title}
            </h2>
            <p className="lux-rx-lede">{copy.includes.intro}</p>
          </header>

          <ol className="lux-rx-scope">
            {copy.includes.items.map((item, index) => (
              <li key={item.title} className="lux-rx-scope__item">
                <div className="lux-rx-scope__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="lux-rx-scope__content">
                  <h3 className="lux-rx-scope__title">{item.title}</h3>
                  <p className="lux-rx-scope__points">{item.points.join(isAr ? " · " : " · ")}</p>
                  {item.more && item.moreHref ? (
                    <LocalizedLink href={item.moreHref} className="lux-rx-link">
                      {item.more}
                    </LocalizedLink>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <p className="lux-rx-note">{copy.includes.techNote}</p>
        </div>
      </section>

      {/* Flexible paths */}
      <section className="lux-rx-section lux-rx-section--warm" aria-labelledby="experience-flexible-title">
        <div className="lux-container">
          <header className="lux-rx-head lux-rx-head--center">
            <p className="lux-rx-eyebrow">{copy.flexible.eyebrow}</p>
            <h2 id="experience-flexible-title" className="lux-rx-title">
              {copy.flexible.title}
            </h2>
            <p className="lux-rx-lede">{copy.flexible.intro}</p>
          </header>
          <ul className="lux-rx-paths">
            {copy.flexible.options.map((option) => (
              <li key={option} className="lux-rx-paths__item">
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Levels */}
      <section className="lux-rx-section lux-rx-section--white" aria-labelledby="experience-levels-title">
        <div className="lux-container">
          <header className="lux-rx-head">
            <p className="lux-rx-eyebrow">{copy.levels.eyebrow}</p>
            <h2 id="experience-levels-title" className="lux-rx-title">
              {copy.levels.title}
            </h2>
            <p className="lux-rx-lede">{copy.levels.note}</p>
          </header>
          <ol className="lux-rx-levels">
            {copy.levels.items.map((level, index) => (
              <li
                key={level.name}
                className={`lux-rx-levels__card${index === 1 ? " lux-rx-levels__card--featured" : ""}`}
              >
                <p className="lux-rx-levels__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="lux-rx-levels__name">{level.name}</h3>
                {level.nameAlt ? <p className="lux-rx-levels__alt">{level.nameAlt}</p> : null}
                <p className="lux-rx-levels__body">{level.body}</p>
                <p className="lux-rx-levels__points">{level.points.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* When */}
      <section className="lux-rx-section lux-rx-section--soft" aria-labelledby="experience-when-title">
        <div className="lux-container">
          <header className="lux-rx-head">
            <p className="lux-rx-eyebrow">{copy.when.eyebrow}</p>
            <h2 id="experience-when-title" className="lux-rx-title">
              {copy.when.title}
            </h2>
          </header>
          <ul className="lux-rx-signals">
            {copy.when.items.map((item) => (
              <li key={item} className="lux-rx-signals__item">
                <span className="lux-rx-signals__mark" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey */}
      <section className="lux-rx-section lux-rx-section--ink" aria-labelledby="experience-journey-title">
        <div className="lux-container">
          <header className="lux-rx-head lux-rx-head--on-dark">
            <p className="lux-rx-eyebrow lux-rx-eyebrow--on-dark">{copy.journey.eyebrow}</p>
            <h2 id="experience-journey-title" className="lux-rx-title lux-rx-title--on-dark">
              {copy.journey.title}
            </h2>
          </header>
          <ol className="lux-rx-journey">
            {copy.journey.steps.map((step, index) => (
              <li key={step} className="lux-rx-journey__step">
                <span className="lux-rx-journey__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="lux-rx-journey__label">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="lux-rx-section lux-rx-section--white" aria-labelledby="experience-why-title">
        <div className="lux-container">
          <header className="lux-rx-head">
            <p className="lux-rx-eyebrow">{copy.why.eyebrow}</p>
            <h2 id="experience-why-title" className="lux-rx-title">
              {copy.why.title}
            </h2>
          </header>
          <ul className="lux-rx-why">
            {copy.why.items.map((item, index) => (
              <li key={item.title} className="lux-rx-why__item">
                <p className="lux-rx-why__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="lux-rx-why__title">{item.title}</h3>
                <p className="lux-rx-why__body">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="lux-rx-note">{copy.why.trust}</p>
        </div>
      </section>

      {/* Scenario */}
      <section className="lux-rx-section lux-rx-section--warm" aria-labelledby="experience-scenario-title">
        <div className="lux-container lux-rx-scenario">
          <header className="lux-rx-scenario__head">
            <p className="lux-rx-eyebrow">{copy.scenario.eyebrow}</p>
            <h2 id="experience-scenario-title" className="lux-rx-title">
              {copy.scenario.title}
            </h2>
            <p className="lux-rx-scenario__label">{copy.scenario.label}</p>
          </header>

          <div className="lux-rx-scenario__panel">
            <div className="lux-rx-scenario__project">
              <p className="lux-rx-scenario__project-name">{copy.scenario.project}</p>
              <p className="lux-rx-scenario__needs-label">{copy.scenario.needsTitle}</p>
              <p className="lux-rx-scenario__needs">{copy.scenario.needs.join(" · ")}</p>
            </div>
            <div className="lux-rx-scenario__roles">
              <p>{copy.scenario.turriva}</p>
              <p>{copy.scenario.graphics}</p>
              <p className="lux-rx-scenario__result">{copy.scenario.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Close statement */}
      <section className="lux-rx-section lux-rx-section--ink lux-rx-close" aria-label={copy.close.brand}>
        <div className="lux-container lux-rx-close__inner">
          <p className="lux-rx-close__line">{copy.close.line}</p>
          <p className="lux-rx-close__brand">{copy.close.brand}</p>
          <p className="lux-rx-close__tagline">{copy.close.tagline}</p>
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
