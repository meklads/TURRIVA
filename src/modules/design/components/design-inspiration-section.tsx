"use client";

import { useState } from "react";
import {
  INSPIRATION_CATEGORIES,
  INSPIRATION_ITEMS,
  type InspirationCategory,
} from "@/modules/design/lib/inspiration-gallery";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
};

export function DesignInspirationSection({ messages, locale }: Props) {
  const t = messages.inspiration;
  const [active, setActive] = useState<InspirationCategory>("interior");

  const categoryLabel = (id: InspirationCategory) => {
    const map: Record<InspirationCategory, string> = {
      interior: t.tabInterior,
      exterior: t.tabExterior,
      exhibition: t.tabExhibition,
      retail: t.tabRetail,
      villa: t.tabVilla,
      palace: t.tabPalace,
    };
    return map[id];
  };

  const items = INSPIRATION_ITEMS.filter((item) => item.category === active);

  return (
    <section className="design-inspiration" id="inspiration" aria-labelledby="design-inspiration-heading">
      <div className="design-container design-container--wide">
        <header className="design-inspiration__header">
          <p className="design-eyebrow">{t.eyebrow}</p>
          <h2 id="design-inspiration-heading" className="design-section-title">
            {t.title}
          </h2>
          <p className="design-section-subtitle">{t.subtitle}</p>
        </header>

        <div className="design-inspiration__tabs" role="tablist">
          {INSPIRATION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`design-inspiration__tab${active === cat ? " design-inspiration__tab--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {categoryLabel(cat)}
            </button>
          ))}
        </div>

        <div className="design-inspiration__grid">
          {items.map((item) => (
            <article key={item.id} className="design-inspiration__card">
              <img src={item.image} alt={locale === "ar" ? item.titleAr : item.titleEn} loading="lazy" />
              <div className="design-inspiration__card-meta">
                <h3>{locale === "ar" ? item.titleAr : item.titleEn}</h3>
                <p>{locale === "ar" ? item.styleAr : item.styleEn}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="design-inspiration__cta">
          <p>{t.ctaText}</p>
          <a href="#studio" className="design-btn design-btn-primary">
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
