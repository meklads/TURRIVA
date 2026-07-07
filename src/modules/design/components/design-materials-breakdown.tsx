"use client";

import { CheckCircle2, Hammer } from "lucide-react";
import { CATEGORY_LABELS, type MaterialCategory } from "@/modules/design/lib/material-catalog";
import type { DetectedMaterial } from "@/modules/design/server/design-materials.service";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  materials: DetectedMaterial[];
  isAiDetected: boolean;
  messages: DesignMessages;
  locale: "ar" | "en";
  onRequestQuote?: () => void;
};

export function DesignMaterialsBreakdown({
  materials,
  isAiDetected,
  messages,
  locale,
  onRequestQuote,
}: Props) {
  const m = messages.materials;

  return (
    <div className="design-materials">
      <div className="design-materials__header">
        <div>
          <h3 className="design-materials__title">{m.title}</h3>
          <p className="design-materials__subtitle">{m.subtitle}</p>
        </div>
        <span className="design-materials__badge">
          <Hammer className="h-3.5 w-3.5" />
          {m.executableBadge}
        </span>
      </div>

      {!isAiDetected && <p className="design-materials__notice">{m.fallbackNotice}</p>}

      <div className="design-materials__grid">
        {materials.map((item) => (
          <article key={item.catalogId} className="design-material-card">
            <img src={item.image} alt="" className="design-material-card__img" />
            <div className="design-material-card__body">
              <span className="design-material-card__category">
                {CATEGORY_LABELS[item.category as MaterialCategory]
                  ? locale === "ar"
                    ? CATEGORY_LABELS[item.category as MaterialCategory].ar
                    : CATEGORY_LABELS[item.category as MaterialCategory].en
                  : item.category}
              </span>
              <h4>{locale === "ar" ? item.nameAr : item.nameEn}</h4>
              <p className="design-material-card__area">
                {locale === "ar" ? item.areaHintAr : item.areaHintEn}
              </p>
              <p className="design-material-card__supplier">
                {locale === "ar" ? item.supplierAr : item.supplierEn}
              </p>
              <div className="design-material-card__footer">
                <span className="design-material-card__price">
                  {locale === "ar" ? item.priceHintAr : item.priceHintEn}
                </span>
                {item.executable && (
                  <span className="design-material-card__exec">
                    <CheckCircle2 className="h-3 w-3" />
                    {m.available}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="design-materials__cta">
        <p>{m.quoteHint}</p>
        <button type="button" className="design-btn design-btn-execution" onClick={onRequestQuote}>
          {m.quoteCta}
        </button>
      </div>
    </div>
  );
}
