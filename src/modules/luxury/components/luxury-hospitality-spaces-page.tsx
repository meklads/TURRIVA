import { HOSPITALITY_SPACES_PATH, getHospitalitySpacesCopy } from "@/modules/luxury/lib/hospitality-spaces-copy";
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

export function LuxuryHospitalitySpacesPage({ locale }: Props) {
  const copy = getHospitalitySpacesCopy(locale);

  return (
    <RxShell>
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

      <RxProblem
        eyebrow={copy.problem.eyebrow}
        title={copy.problem.title}
        body={copy.problem.body}
        points={copy.problem.points}
        titleId="hospitality-spaces-problem"
      />

      <RxDefine
        eyebrow={copy.definition.eyebrow}
        title={copy.definition.title}
        body={copy.definition.body}
        result={copy.definition.result}
        titleId="hospitality-spaces-definition"
      />

      <LuxuryProductVisualBand locale={locale} product="hospitality-spaces" />
      <LuxuryProductStoryStrip locale={locale} product="hospitality-spaces" />

      <RxCards
        eyebrow={copy.starts.eyebrow}
        title={copy.starts.title}
        items={copy.starts.items}
        titleId="hospitality-spaces-starts"
      />

      <RxProse
        tone="paper"
        eyebrow={copy.partner.eyebrow}
        title={copy.partner.title}
        body={copy.partner.body}
        accent={copy.partner.line}
        titleId="hospitality-spaces-partner"
      />

      <RxScopeRows
        tone="soft"
        eyebrow={copy.includes.eyebrow}
        title={copy.includes.title}
        intro={copy.includes.intro}
        items={copy.includes.items}
        titleId="hospitality-spaces-scope"
      />

      <RxTiers
        eyebrow={copy.sizes.eyebrow}
        title={copy.sizes.title}
        note={copy.sizes.note}
        items={copy.sizes.items.map((item) => ({ title: item.title, body: item.body }))}
        titleId="hospitality-spaces-sizes"
      />

      <RxFlow
        eyebrow={copy.method.eyebrow}
        title={copy.method.title}
        steps={copy.method.steps}
        titleId="hospitality-spaces-method"
      />

      <RxSignals
        eyebrow={copy.audience.eyebrow}
        title={copy.audience.title}
        items={copy.audience.items}
        trust={copy.audience.trust}
        titleId="hospitality-spaces-audience"
      />

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
    </RxShell>
  );
}
