"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/shared/i18n/locale";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type Props = { locale: Locale };

export function InteractiveShowcaseSlider({ locale }: Props) {
  const isAr = locale === "ar";
  const [pos, setPos] = useState(58);
  const dragging = useRef(false);

  function setFromClientX(clientX: number, el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  }

  return (
    <section className="lux-section lux-section--white lux-showcase" aria-labelledby="lux-showcase-title">
      <div className="lux-container">
        <div className="lux-section-intro lux-section-intro--center">
          <p className="lux-eyebrow">{isAr ? "قبل / بعد" : "Before / After"}</p>
          <h2 id="lux-showcase-title" className="lux-display lux-heading mt-3">
            {isAr ? "من صالة تقليدية إلى بيئة إطلاق ذكية." : "From a traditional gallery to a smart launch room."}
          </h2>
          <p className="lux-body mt-4 text-lux-ink-soft">
            {isAr
              ? "اسحب للمقارنة: مجسمات ثابتة وكتيبات… مقابل مجسمات مضيئة، شاشات لمس، وتوفر وحدات لحظي."
              : "Drag to compare: static models and brochures… versus illuminated maquettes, touch specs, and live unit availability."}
          </p>
        </div>

        <div
          className="lux-showcase__stage mt-10"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            setFromClientX(e.clientX, e.currentTarget);
            trackMarketingEvent("showcase_slider_used", { locale });
          }}
          onPointerMove={(e) => {
            if (!dragging.current) return;
            setFromClientX(e.clientX, e.currentTarget);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          role="img"
          aria-label={isAr ? "مقارنة ديكور بيئة البيع" : "Sales décor comparison"}
        >
          <div className="lux-showcase__layer lux-showcase__layer--after">
            <Image
              src="/brand/turriva/projects/mwl/hero.jpeg"
              alt={isAr ? "بيئة إطلاق توريفا" : "Turriva launch environment"}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 80vw"
            />
            <span className="lux-showcase__badge lux-showcase__badge--after">
              {isAr ? "بيئة توريفا الذكية" : "Turriva smart launch"}
            </span>
          </div>
          <div className="lux-showcase__layer lux-showcase__layer--before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image
              src="/brand/turriva/sample-kit-showroom.webp"
              alt={isAr ? "صالة تقليدية" : "Traditional gallery"}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 80vw"
            />
            <span className="lux-showcase__badge lux-showcase__badge--before">
              {isAr ? "صالة تقليدية" : "Traditional gallery"}
            </span>
          </div>
          <div className="lux-showcase__handle" style={{ insetInlineStart: `${pos}%` }} aria-hidden>
            <span />
          </div>
        </div>

        <ul className="lux-showcase__legend mt-6">
          <li>
            <strong>{isAr ? "تقليدي:" : "Traditional:"}</strong>{" "}
            {isAr ? "مجسم ثابت، مطبوعات، دورة قرار أبطأ." : "Static model, print collateral, slower decisions."}
          </li>
          <li>
            <strong>{isAr ? "توريفا:" : "Turriva:"}</strong>{" "}
            {isAr
              ? "مجسمات مضيئة، مواصفات لمس، وتزامن الإضاءة مع مسار المشتري."
              : "Illuminated models, touch-screen specs, lighting synced to the buyer path."}
          </li>
        </ul>
      </div>
    </section>
  );
}
