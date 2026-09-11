import { DESIGN_BUILD_PATH, getDesignBuildCopy } from "@/modules/luxury/lib/design-build-copy";
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
  RxScopeRows,
  RxShell,
  RxTiers,
} from "./luxury-product-rx";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryDesignBuildPage({ locale }: Props) {
  const copy = getDesignBuildCopy(locale);

  return (
    <RxShell>
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

      <RxProblem
        eyebrow={copy.problem.eyebrow}
        title={copy.problem.title}
        body={copy.problem.body}
        points={copy.problem.points}
        titleId="design-build-problem"
      />

      <RxDefine
        eyebrow={copy.definition.eyebrow}
        title={copy.definition.title}
        body={copy.definition.body}
        result={copy.definition.result}
        titleId="design-build-definition"
      />

      <LuxuryProductVisualBand locale={locale} product="design-build" />
      <LuxuryProductStoryStrip locale={locale} product="design-build" />

      <RxCards
        eyebrow={copy.starts.eyebrow}
        title={copy.starts.title}
        items={copy.starts.items}
        titleId="design-build-starts"
      />

      <RxScopeRows
        eyebrow={copy.includes.eyebrow}
        title={copy.includes.title}
        intro={copy.includes.intro}
        items={copy.includes.items}
        titleId="design-build-scope"
      />

      <RxTiers
        eyebrow={copy.sizes.eyebrow}
        title={copy.sizes.title}
        note={copy.sizes.note}
        items={copy.sizes.items.map((item) => ({ title: item.title, body: item.body }))}
        titleId="design-build-sizes"
      />

      <RxFlow
        eyebrow={copy.method.eyebrow}
        title={copy.method.title}
        steps={copy.method.steps}
        titleId="design-build-method"
      />

      <RxProse
        tone="soft"
        eyebrow={copy.audience.eyebrow}
        title={copy.audience.title}
        body={copy.audience.body}
        trust={copy.audience.trust}
        titleId="design-build-audience"
      />

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
    </RxShell>
  );
}
