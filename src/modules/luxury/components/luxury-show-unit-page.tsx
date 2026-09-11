import { SHOW_UNIT_PATH, getShowUnitCopy } from "@/modules/luxury/lib/show-unit-copy";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryProductBriefSection } from "./luxury-product-brief-section";
import { LuxuryProductHero } from "./luxury-product-hero";
import { LuxuryProductVisualBand } from "./luxury-product-visual-band";
import { LuxuryProductStoryStrip } from "./luxury-product-story-strip";
import { LuxuryProductPager, LuxuryProductRelated } from "./luxury-product-related";
import {
  RxCards,
  RxDefine,
  RxFlow,
  RxProblem,
  RxProse,
  RxRail,
  RxScopeRows,
  RxShell,
} from "./luxury-product-rx";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryShowUnitPage({ locale }: Props) {
  const copy = getShowUnitCopy(locale);

  return (
    <RxShell>
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

      <RxProblem
        eyebrow={copy.problem.eyebrow}
        title={copy.problem.title}
        body={copy.problem.body}
        points={copy.problem.points}
        titleId="show-unit-problem"
      />

      <RxDefine
        eyebrow={copy.definition.eyebrow}
        title={copy.definition.title}
        body={copy.definition.body}
        result={copy.definition.result}
        titleId="show-unit-definition"
      />

      <LuxuryProductVisualBand locale={locale} product="show-unit" />
      <LuxuryProductStoryStrip locale={locale} product="show-unit" />

      <RxCards
        eyebrow={copy.types.eyebrow}
        title={copy.types.title}
        intro={copy.types.intro}
        items={copy.types.items}
        titleId="show-unit-types"
      />

      <RxScopeRows
        tone="paper"
        eyebrow={copy.includes.eyebrow}
        title={copy.includes.title}
        intro={copy.includes.intro}
        items={copy.includes.core}
        titleId="show-unit-scope"
      />

      <RxPillarsOptional eyebrow={copy.includes.optionalTitle} items={copy.includes.optional} />

      <RxRail
        eyebrow={copy.flexible.eyebrow}
        title={copy.flexible.title}
        intro={copy.flexible.intro}
        options={copy.flexible.options}
        titleId="show-unit-flexible"
        footer={copy.flexible.parent}
        footerCta={copy.flexible.parentCta}
        footerHref={copy.flexible.parentHref}
      />

      <RxFlow
        eyebrow={copy.method.eyebrow}
        title={copy.method.title}
        steps={copy.method.steps}
        titleId="show-unit-method"
      />

      <RxProse
        tone="soft"
        eyebrow={copy.audience.eyebrow}
        title={copy.audience.title}
        body={copy.audience.body}
        trust={copy.audience.trust}
        titleId="show-unit-audience"
      />

      <LuxuryProductRelated locale={locale} product="show-unit" />

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

      <LuxuryProductPager locale={locale} product="show-unit" />
      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(SHOW_UNIT_PATH, locale)}#brief`}
        source="show_unit"
      />
    </RxShell>
  );
}

function RxPillarsOptional({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: readonly { title: string; body: string }[];
}) {
  return (
    <section className="lux-rx-section lux-rx-section--warm" aria-label={eyebrow}>
      <div className="lux-container">
        <p className="lux-rx-kicker">{eyebrow}</p>
        <ul className="lux-rx-pillars mt-8">
          {items.map((item, index) => (
            <li key={item.title} className="lux-rx-pillars__item">
              <span className="lux-rx-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="lux-rx-pillars__title">{item.title}</h3>
              <p className="lux-rx-pillars__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
