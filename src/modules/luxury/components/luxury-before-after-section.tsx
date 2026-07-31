"use client";

import { DesignBeforeAfter } from "@/modules/design/components/design-before-after";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";

export function LuxuryBeforeAfterSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.beforeAfter;
  return (
    <section className="lux-section lux-section--dark">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-lux-ivory/75">{t.subtitle}</p>
      </div>
      <div className="lux-container mt-12 max-w-4xl">
        <div className="lux-before-after-wrap">
          <DesignBeforeAfter
            beforeSrc={LUXURY_IMAGES.project1}
            afterSrc={LUXURY_IMAGES.project2}
            beforeLabel={t.beforeLabel}
            afterLabel={t.afterLabel}
            compareHint={t.hint}
          />
        </div>
      </div>
    </section>
  );
}
