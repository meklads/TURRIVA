"use client";

import { useState } from "react";
import { ArrowLeftRight, ShoppingBag, Sparkles } from "lucide-react";
import {
  FURNITURE_CATEGORY_LABELS,
  getFurnitureById,
  type FurnitureCategory,
  type PinPosition,
} from "@/modules/design/lib/furniture-catalog";
import type { DetectedFurniture } from "@/modules/design/server/design-furniture.service";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  afterImageUrl: string;
  items: DetectedFurniture[];
  isAiDetected: boolean;
  messages: DesignMessages;
  locale: "ar" | "en";
  onRequestQuote?: () => void;
};

const PIN_CLASS: Record<PinPosition, string> = {
  "top-left": "design-fpin--tl",
  "top-center": "design-fpin--tc",
  "top-right": "design-fpin--tr",
  "center-left": "design-fpin--cl",
  center: "design-fpin--c",
  "center-right": "design-fpin--cr",
  "bottom-left": "design-fpin--bl",
  "bottom-center": "design-fpin--bc",
  "bottom-right": "design-fpin--br",
};

export function DesignFurnitureFinder({
  afterImageUrl,
  items,
  isAiDetected,
  messages,
  locale,
  onRequestQuote,
}: Props) {
  const f = messages.furniture;
  const [activePin, setActivePin] = useState<number | null>(null);
  const [showAlt, setShowAlt] = useState<Record<string, boolean>>({});

  const toggleAlt = (id: string) => {
    setShowAlt((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="design-furniture">
      <div className="design-furniture__header">
        <div>
          <h3 className="design-furniture__title">
            <Sparkles className="inline h-4 w-4 text-blue-500" />
            {f.title}
          </h3>
          <p className="design-furniture__subtitle">{f.subtitle}</p>
        </div>
        <span className="design-furniture__badge">
          <ShoppingBag className="h-3.5 w-3.5" />
          {f.badge}
        </span>
      </div>

      {!isAiDetected && <p className="design-furniture__notice">{f.fallbackNotice}</p>}

      <div className="design-furniture__layout">
        <div className="design-furniture__scene">
          <img src={afterImageUrl} alt="" className="design-furniture__scene-img" />
          {items.map((item) => (
            <button
              key={item.catalogId}
              type="button"
              className={`design-fpin ${PIN_CLASS[item.pin]}${activePin === item.pinIndex ? " design-fpin--active" : ""}`}
              onClick={() => setActivePin(item.pinIndex)}
              aria-label={`${item.pinIndex}`}
            >
              {item.pinIndex}
            </button>
          ))}
          <p className="design-furniture__scene-hint">{f.tapPins}</p>
        </div>

        <div className="design-furniture__list">
          {items.map((item) => {
            const showingAlt = showAlt[item.catalogId];
            const alt = item.alternativeId ? getFurnitureById(item.alternativeId) : null;
            const display = showingAlt && alt ? alt : item;
            const isActive = activePin === item.pinIndex;

            return (
              <article
                key={item.catalogId}
                className={`design-fcard${isActive ? " design-fcard--active" : ""}`}
                onMouseEnter={() => setActivePin(item.pinIndex)}
                onMouseLeave={() => setActivePin(null)}
              >
                <span className="design-fcard__pin">{item.pinIndex}</span>
                <img src={display.image} alt="" className="design-fcard__img" />
                <div className="design-fcard__body">
                  <div className="design-fcard__top">
                    <span className="design-fcard__category">
                      {FURNITURE_CATEGORY_LABELS[display.category as FurnitureCategory]
                        ? locale === "ar"
                          ? FURNITURE_CATEGORY_LABELS[display.category as FurnitureCategory].ar
                          : FURNITURE_CATEGORY_LABELS[display.category as FurnitureCategory].en
                        : display.category}
                    </span>
                    <span className="design-fcard__match">{item.matchPercent}% {f.match}</span>
                  </div>
                  <h4>{locale === "ar" ? display.nameAr : display.nameEn}</h4>
                  <p className="design-fcard__brand">
                    {locale === "ar" ? display.brandAr : display.brandEn}
                  </p>
                  <div className="design-fcard__footer">
                    <span className="design-fcard__price">
                      {locale === "ar" ? display.priceAr : display.priceEn}
                    </span>
                    {alt && (
                      <button
                        type="button"
                        className="design-fcard__swap"
                        onClick={() => toggleAlt(item.catalogId)}
                      >
                        <ArrowLeftRight className="h-3 w-3" />
                        {showingAlt ? f.showDetected : f.showAlternative}
                      </button>
                    )}
                  </div>
                  <span className="design-fcard__exec">{f.executable}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="design-furniture__cta">
        <p>{f.quoteHint}</p>
        <button type="button" className="design-btn design-btn-primary" onClick={onRequestQuote}>
          {f.quoteCta}
        </button>
      </div>
    </div>
  );
}
