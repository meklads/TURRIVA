import { RENOVATION_PATH, getRenovationCopy } from "@/modules/luxury/lib/renovation-copy";
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
  RxSignals,
  RxTiers,
} from "./luxury-product-rx";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryRenovationPage({ locale }: Props) {
  const copy = getRenovationCopy(locale);

  return (
    <RxShell>
      <LuxuryProductHero
        locale={locale}
        product="renovation"
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        body={copy.hero.body}
        primaryCta={copy.hero.cta}
        secondaryCta={copy.hero.secondary}
        secondaryHref="#brief"
        titleId="renovation-title"
      />

      <RxProblem
        eyebrow={copy.problem.eyebrow}
        title={copy.problem.title}
        body={copy.problem.body}
        points={copy.problem.points}
        titleId="renovation-problem"
      />

      <RxDefine
        eyebrow={copy.definition.eyebrow}
        title={copy.definition.title}
        body={copy.definition.body}
        result={copy.definition.result}
        titleId="renovation-definition"
      />

      <LuxuryProductVisualBand locale={locale} product="renovation" />
      <LuxuryProductStoryStrip locale={locale} product="renovation" />

      <RxCards
        eyebrow={copy.starts.eyebrow}
        title={copy.starts.title}
        items={copy.starts.items}
        titleId="renovation-starts"
      />

      <RxProse
        tone="paper"
        eyebrow={copy.keep.eyebrow}
        title={copy.keep.title}
        body={copy.keep.body}
        accent={copy.keep.line}
        titleId="renovation-keep"
      />

      <RxScopeRows
        tone="soft"
        eyebrow={copy.includes.eyebrow}
        title={copy.includes.title}
        intro={copy.includes.intro}
        items={copy.includes.items}
        titleId="renovation-scope"
      />

      <RxTiers
        eyebrow={copy.sizes.eyebrow}
        title={copy.sizes.title}
        note={copy.sizes.note}
        items={copy.sizes.items.map((item) => ({ title: item.title, body: item.body }))}
        titleId="renovation-sizes"
      />

      <RxFlow
        eyebrow={copy.method.eyebrow}
        title={copy.method.title}
        steps={copy.method.steps}
        titleId="renovation-method"
      />

      <RxSignals
        eyebrow={copy.audience.eyebrow}
        title={copy.audience.title}
        items={copy.audience.items}
        trust={copy.audience.trust}
        titleId="renovation-audience"
      />

      <LuxuryProductRelated locale={locale} product="renovation" />

      <LuxuryProductBriefSection
        locale={locale}
        product="renovation"
        title={copy.close.title}
        body={copy.close.body}
        titleId="renovation-cta"
      >
        <LuxuryExperienceBriefForm
          locale={locale}
          source="renovation"
          productLabel={copy.form.productLabel}
          initialProjectType="other"
          initialNeeds={["design", "execution"]}
          unitTypes={copy.form.spaces}
          choiceLegend={copy.form.choiceLegend}
          drawings={copy.form.drawings}
        />
      </LuxuryProductBriefSection>

      <LuxuryProductPager locale={locale} product="renovation" />
      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(RENOVATION_PATH, locale)}#brief`}
        source="renovation"
      />
    </RxShell>
  );
}
