import Image from "next/image";
import { EXPERIENCE_PATH, getExperienceCopy } from "@/modules/luxury/lib/real-estate-experience-copy";
import { getProductVisuals } from "@/modules/luxury/lib/product-visuals";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryProductStoryStrip } from "./luxury-product-story-strip";
import { LuxuryProductPager, LuxuryProductRelated } from "./luxury-product-related";
import {
  RxDefine,
  RxFinale,
  RxFlow,
  RxPillars,
  RxProblem,
  RxRail,
  RxScopeRows,
  RxShell,
  RxSignals,
  RxTiers,
} from "./luxury-product-rx";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryRealEstateExperiencePage({ locale }: Props) {
  const copy = getExperienceCopy(locale);
  const visuals = getProductVisuals("real-estate-experience");
  const briefHref = `${localizePath(EXPERIENCE_PATH, locale)}#brief`;
  const alt = locale === "ar" ? visuals.altAr : visuals.altEn;

  return (
    <RxShell>
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

      <RxProblem
        eyebrow={copy.problem.eyebrow}
        title={copy.problem.title}
        body={copy.problem.body}
        points={copy.problem.points}
        titleId="experience-problem-title"
      />

      <RxDefine
        eyebrow={copy.definition.eyebrow}
        title={copy.definition.title}
        body={copy.definition.body}
        result={copy.definition.result}
        titleId="experience-definition-title"
      />

      <LuxuryProductVisualBand locale={locale} product="real-estate-experience" />
      <LuxuryProductStoryStrip locale={locale} product="real-estate-experience" />

      <RxScopeRows
        eyebrow={copy.includes.eyebrow}
        title={copy.includes.title}
        intro={copy.includes.intro}
        items={copy.includes.items}
        footnote={copy.includes.techNote}
        titleId="experience-scope-title"
      />

      <RxRail
        eyebrow={copy.flexible.eyebrow}
        title={copy.flexible.title}
        intro={copy.flexible.intro}
        options={copy.flexible.options}
        titleId="experience-flexible-title"
      />

      <RxTiers
        eyebrow={copy.levels.eyebrow}
        title={copy.levels.title}
        note={copy.levels.note}
        items={copy.levels.items}
        titleId="experience-levels-title"
      />

      <RxSignals
        eyebrow={copy.when.eyebrow}
        title={copy.when.title}
        items={copy.when.items}
        titleId="experience-when-title"
      />

      <RxFlow
        eyebrow={copy.journey.eyebrow}
        title={copy.journey.title}
        steps={copy.journey.steps}
        titleId="experience-journey-title"
      />

      <RxPillars
        eyebrow={copy.why.eyebrow}
        title={copy.why.title}
        items={copy.why.items}
        trust={copy.why.trust}
        titleId="experience-why-title"
      />

      <section className="lux-rx-section lux-rx-section--warm" aria-labelledby="experience-scenario-title">
        <div className="lux-container lux-rx-case">
          <div className="lux-rx-case__media">
            <Image src={visuals.form} alt={alt} fill className="object-cover" sizes="(max-width: 900px) 100vw, 42vw" />
            <div className="lux-rx-case__shade" aria-hidden />
          </div>
          <div className="lux-rx-case__content">
            <p className="lux-rx-kicker">{copy.scenario.eyebrow}</p>
            <h2 id="experience-scenario-title" className="lux-display lux-rx-display">
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

      <RxFinale line={copy.close.line} brand={copy.close.brand} tagline={copy.close.tagline} />

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
    </RxShell>
  );
}
