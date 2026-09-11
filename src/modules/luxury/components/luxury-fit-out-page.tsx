import { FIT_OUT_PATH, getFitOutCopy } from "@/modules/luxury/lib/fit-out-copy";
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
  RxFlow,
  RxProblem,
  RxProse,
  RxScopeRows,
  RxShell,
  RxSignals,
  RxTiers,
} from "./luxury-product-rx";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryFitOutPage({ locale }: Props) {
  const copy = getFitOutCopy(locale);

  return (
    <RxShell>
      <LuxuryProductHero
        locale={locale}
        product="fit-out"
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        body={copy.hero.body}
        primaryCta={copy.hero.cta}
        secondaryCta={copy.hero.secondary}
        secondaryHref="#brief"
        titleId="fit-out-title"
      />

      <RxProblem
        eyebrow={copy.problem.eyebrow}
        title={copy.problem.title}
        body={copy.problem.body}
        points={copy.problem.points}
        titleId="fit-out-problem"
      />

      <RxDefine
        eyebrow={copy.definition.eyebrow}
        title={copy.definition.title}
        body={copy.definition.body}
        result={copy.definition.result}
        titleId="fit-out-definition"
      />

      <LuxuryProductVisualBand locale={locale} product="fit-out" />
      <LuxuryProductStoryStrip locale={locale} product="fit-out" />

      <RxProse
        tone="warm"
        eyebrow={copy.partner.eyebrow}
        title={copy.partner.title}
        body={copy.partner.body}
        accent={copy.partner.line}
        titleId="fit-out-partner"
      />

      <RxScopeRows
        eyebrow={copy.includes.eyebrow}
        title={copy.includes.title}
        intro={copy.includes.intro}
        items={copy.includes.items}
        titleId="fit-out-scope"
      />

      <RxTiers
        eyebrow={copy.sizes.eyebrow}
        title={copy.sizes.title}
        note={copy.sizes.note}
        items={copy.sizes.items.map((item) => ({ title: item.title, body: item.body }))}
        titleId="fit-out-sizes"
      />

      <RxFlow
        eyebrow={copy.method.eyebrow}
        title={copy.method.title}
        steps={copy.method.steps}
        titleId="fit-out-method"
      />

      <RxSignals
        eyebrow={copy.audience.eyebrow}
        title={copy.audience.title}
        items={copy.audience.items}
        trust={copy.audience.trust}
        titleId="fit-out-audience"
      />

      <LuxuryProductRelated locale={locale} product="fit-out" />

      <LuxuryProductBriefSection
        locale={locale}
        product="fit-out"
        title={copy.close.title}
        body={copy.close.body}
        titleId="fit-out-cta"
      >
        <LuxuryExperienceBriefForm
          locale={locale}
          source="fit_out"
          productLabel={copy.form.productLabel}
          initialProjectType="other"
          initialNeeds={["execution"]}
          unitTypes={copy.form.roles}
          choiceLegend={copy.form.choiceLegend}
          drawings={copy.form.drawings}
        />
      </LuxuryProductBriefSection>

      <LuxuryProductPager locale={locale} product="fit-out" />
      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(FIT_OUT_PATH, locale)}#brief`}
        source="fit_out"
      />
    </RxShell>
  );
}
