"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import type { DemoProjectType, DemoTimeline } from "../lib/conversion-copy";
import { useConversionActions } from "./luxury-conversion-provider";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type ProjectKind = "residential" | "commercial" | "mixed" | "event";
type DeliveryPath = "priority" | "full";

type Props = { locale: Locale };

function estimate(kind: ProjectKind, areaM2: number, daysToLaunch: number) {
  const baseDays =
    kind === "event" ? 14 : kind === "residential" ? 18 : kind === "commercial" ? 21 : 24;
  const areaFactor = areaM2 > 400 ? 7 : areaM2 > 200 ? 4 : 0;
  const deliveryDays = Math.min(baseDays + areaFactor, Math.max(12, daysToLaunch - 3));
  const pathId: DeliveryPath =
    areaM2 >= 250 || kind === "mixed" || kind === "commercial" ? "full" : "priority";
  return { deliveryDays, pathId };
}

export function ProjectRoiCalculator({ locale }: Props) {
  const isAr = locale === "ar";
  const { openDemo } = useConversionActions();
  const [kind, setKind] = useState<ProjectKind>("residential");
  const [area, setArea] = useState(180);
  const [daysToLaunch, setDaysToLaunch] = useState(45);

  const result = useMemo(() => estimate(kind, area, daysToLaunch), [kind, area, daysToLaunch]);

  const kinds: { id: ProjectKind; label: string }[] = isAr
    ? [
        { id: "residential", label: "برج سكني" },
        { id: "commercial", label: "مخطط تجاري" },
        { id: "mixed", label: "مشروع متعدد الاستخدام" },
        { id: "event", label: "إطلاق فعالية / معرض" },
      ]
    : [
        { id: "residential", label: "Residential tower" },
        { id: "commercial", label: "Commercial masterplan" },
        { id: "mixed", label: "Mixed-use development" },
        { id: "event", label: "Event launch" },
      ];

  const pathLabel =
    result.pathId === "priority"
      ? isAr
        ? "مسار أولوية (نطاق واضح)"
        : "Priority path (clear scope)"
      : isAr
        ? "مسار تسليم كامل"
        : "Full delivery path";

  function onCalculateCta() {
    trackMarketingEvent("roi_calculator_used", {
      kind,
      area,
      daysToLaunch,
      packageId: result.pathId,
      deliveryDays: result.deliveryDays,
    });

    const projectType: DemoProjectType =
      kind === "event"
        ? "exhibition"
        : kind === "residential"
          ? "developer"
          : kind === "mixed"
            ? "commercial"
            : "hospitality";
    const timeline: DemoTimeline =
      result.deliveryDays <= 21 ? "urgent" : daysToLaunch <= 90 ? "1_3_months" : "planning";

    openDemo({
      projectType,
      timeline,
      source: "roi_calculator",
      note: isAr
        ? `حاسبة الإطلاق: ${kinds.find((k) => k.id === kind)?.label}, ${area} م², تسليم تقديري ${result.deliveryDays} يوماً, ${pathLabel}`
        : `Launch calculator: ${kinds.find((k) => k.id === kind)?.label}, ${area} m², est. ${result.deliveryDays} days, ${pathLabel}`,
    });
  }

  return (
    <section id="roi" className="lux-section lux-section--cream lux-roi scroll-mt-28" aria-labelledby="lux-roi-title">
      <div className="lux-container">
        <div className="lux-roi__grid">
          <div className="lux-section-intro">
            <p className="lux-eyebrow">{isAr ? "حاسبة الإطلاق" : "Launch calculator"}</p>
            <h2 id="lux-roi-title" className="lux-display lux-heading mt-3">
              {isAr ? "قدّر جدول الإطلاق ومسار التسليم المناسب." : "Estimate launch timing and the right delivery path."}
            </h2>
            <p className="lux-body mt-4 text-lux-ink-soft">
              {isAr
                ? "أداة سريعة للمطورين: نوع المشروع، مساحة الصالة، وموعد الإطلاق, ثم مسار تسليم ومدة تقريبية. ليست باقة منتجات جاهزة."
                : "A fast tool for developers: project type, gallery area, and launch window, then a delivery path and approximate timing. Not a fixed product package."}
            </p>
          </div>

          <div className="lux-roi__card lux-tilt-card">
            <label className="lux-roi__label">
              <span>{isAr ? "نوع المشروع" : "Project type"}</span>
              <select value={kind} onChange={(e) => setKind(e.target.value as ProjectKind)}>
                {kinds.map((k) => (
                  <option key={k.id} value={k.id}>
                    {k.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="lux-roi__label">
              <span>
                {isAr ? "مساحة قاعة العرض" : "Target gallery area"}, {area} m²
              </span>
              <input
                type="range"
                min={60}
                max={600}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
              />
            </label>

            <label className="lux-roi__label">
              <span>
                {isAr ? "أيام حتى الإطلاق المستهدف" : "Days until target launch"}, {daysToLaunch}
              </span>
              <input
                type="range"
                min={14}
                max={180}
                step={1}
                value={daysToLaunch}
                onChange={(e) => setDaysToLaunch(Number(e.target.value))}
              />
            </label>

            <div className="lux-roi__results">
              <div className="lux-roi__stat lux-glow-stat">
                <p className="lux-roi__stat-value">
                  {isAr ? `جاهز خلال ${result.deliveryDays} يوماً` : `Ready in ${result.deliveryDays} days`}
                </p>
                <p className="lux-roi__stat-label">{isAr ? "جدول تسليم تقديري" : "Estimated delivery"}</p>
              </div>
              <div className="lux-roi__stat">
                <p className="lux-roi__stat-value">{pathLabel}</p>
                <p className="lux-roi__stat-label">{isAr ? "المسار الموصى به" : "Recommended path"}</p>
              </div>
              <div className="lux-roi__stat">
                <p className="lux-roi__stat-value">{isAr ? "وفق النطاق" : "Scope-led"}</p>
                <p className="lux-roi__stat-label">
                  {isAr ? "التكلفة والجدول يتبعان المخططات والموقع" : "Cost and timing follow drawings and site"}
                </p>
              </div>
            </div>

            <button type="button" className="lux-btn-primary lux-roi__cta" onClick={onCalculateCta}>
              {isAr ? "ناقش مشروعك بهذه الحسبة" : "Discuss your project with this estimate"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
