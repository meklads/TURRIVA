"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import type { Locale } from "@/shared/i18n/locale";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import {
  DEMO_UNITS,
  UNIT_FLOORS,
  statusColor,
  type GalleryUnit,
  type UnitStatus,
  type UnitType,
} from "../lib/demo-units";
import { getConversionCopy } from "../lib/conversion-copy";
import { useConversionActions } from "./luxury-conversion-provider";
import { UnitTowerScene } from "./interactive-unit-viewer-scene";

type Props = { locale: Locale };

function supportsWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export function InteractiveUnitViewer3D({ locale }: Props) {
  const isAr = locale === "ar";
  const copy = getConversionCopy(locale).unitViewer;
  const { openDemo } = useConversionActions();
  const [status, setStatus] = useState<"all" | UnitStatus>("all");
  const [type, setType] = useState<"all" | UnitType>("all");
  const [priceMax, setPriceMax] = useState(9_000_000);
  const [selected, setSelected] = useState<GalleryUnit | null>(null);
  const [webgl] = useState(() => (typeof window === "undefined" ? true : supportsWebGL()));

  const filtered = useMemo(
    () =>
      DEMO_UNITS.filter((u) => {
        if (status !== "all" && u.status !== status) return false;
        if (type !== "all" && u.type !== type) return false;
        if (u.priceSar > priceMax) return false;
        return true;
      }),
    [status, type, priceMax]
  );

  const floorHighlight = useMemo(() => {
    const map = new Map<number, UnitStatus | "mixed">();
    for (const floor of UNIT_FLOORS) {
      const onFloor = filtered.filter((u) => u.floor === floor);
      if (onFloor.length === 0) continue;
      const statuses = new Set(onFloor.map((u) => u.status));
      map.set(floor, statuses.size === 1 ? ([...statuses][0] as UnitStatus) : "mixed");
    }
    return map;
  }, [filtered]);

  function selectUnit(unit: GalleryUnit) {
    setSelected(unit);
    trackMarketingEvent("unit_viewer_interacted", {
      unitId: unit.id,
      status: unit.status,
      type: unit.type,
    });
  }

  function inquire(unit: GalleryUnit) {
    openDemo({
      projectType: "masterplan",
      timeline: "1_3_months",
      note: isAr
        ? `استفسار وحدة ${unit.code} · ${unit.areaM2} م² · الطابق ${unit.floor}`
        : `Unit inquiry ${unit.code} · ${unit.areaM2} m² · floor ${unit.floor}`,
      source: "unit_viewer_3d",
    });
  }

  const typeLabel = (t: UnitType) =>
    ({
      penthouse: isAr ? "بنتهاوس" : "Penthouse",
      duplex: isAr ? "دوبلكس" : "Duplex",
      villa: isAr ? "فيلا" : "Villa",
      apartment: isAr ? "شقة" : "Apartment",
    })[t];

  const statusLabel = (s: UnitStatus) =>
    ({
      available: isAr ? "متاحة" : "Available",
      reserved: isAr ? "محجوزة" : "Reserved",
      sold: isAr ? "مباعة" : "Sold",
    })[s];

  return (
    <section id="unit-viewer" className="lux-section lux-section--linen lux-unit3d scroll-mt-28" aria-labelledby="lux-unit3d-title">
      <div className="lux-container">
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{copy.eyebrow}</p>
          <h2 id="lux-unit3d-title" className="lux-display lux-heading mt-3">
            {copy.title}
          </h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.intro}</p>
        </div>

        <div className="lux-unit3d__layout mt-10">
          <aside className="lux-unit3d__filters" aria-label={copy.filtersLabel}>
            <label className="lux-unit3d__field">
              <span>{copy.filterStatus}</span>
              <select value={status} onChange={(e) => setStatus(e.target.value as typeof status)}>
                <option value="all">{isAr ? "الكل" : "All"}</option>
                <option value="available">{statusLabel("available")}</option>
                <option value="reserved">{statusLabel("reserved")}</option>
                <option value="sold">{statusLabel("sold")}</option>
              </select>
            </label>
            <label className="lux-unit3d__field">
              <span>{copy.filterType}</span>
              <select value={type} onChange={(e) => setType(e.target.value as typeof type)}>
                <option value="all">{isAr ? "الكل" : "All"}</option>
                <option value="penthouse">{typeLabel("penthouse")}</option>
                <option value="duplex">{typeLabel("duplex")}</option>
                <option value="villa">{typeLabel("villa")}</option>
                <option value="apartment">{typeLabel("apartment")}</option>
              </select>
            </label>
            <label className="lux-unit3d__field">
              <span>
                {copy.filterPrice}: {(priceMax / 1_000_000).toFixed(1)}M SAR
              </span>
              <input
                type="range"
                min={1_500_000}
                max={9_000_000}
                step={100_000}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
              />
            </label>
            <ul className="lux-unit3d__legend">
              {(["available", "reserved", "sold"] as UnitStatus[]).map((s) => (
                <li key={s}>
                  <span style={{ background: statusColor(s) }} aria-hidden />
                  {statusLabel(s)}
                </li>
              ))}
            </ul>
          </aside>

          <div className="lux-unit3d__stage" aria-busy={!webgl ? undefined : undefined}>
            {webgl ? (
              <Canvas
                className="lux-unit3d__canvas"
                dpr={[1, 1.75]}
                camera={{ position: [7.2, 6.4, 9.2], fov: 38 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                onCreated={({ gl }) => {
                  gl.setClearColor(0x000000, 0);
                }}
              >
                <Suspense fallback={null}>
                  <UnitTowerScene
                    floorHighlight={floorHighlight}
                    units={filtered}
                    onSelectFloor={(floor) => {
                      const first = filtered.find((u) => u.floor === floor);
                      if (first) selectUnit(first);
                    }}
                  />
                </Suspense>
              </Canvas>
            ) : (
              <div className="lux-unit3d__fallback" role="status">
                <p>{copy.fallback}</p>
              </div>
            )}
            <p className="lux-unit3d__hint">{copy.hint}</p>
          </div>

          <div className="lux-unit3d__drawer" aria-live="polite">
            {selected ? (
              <>
                <p className="lux-unit3d__drawer-code">{selected.code}</p>
                <h3 className="lux-display text-xl text-lux-ink mt-1">
                  {typeLabel(selected.type)} · {isAr ? `الطابق ${selected.floor}` : `Floor ${selected.floor}`}
                </h3>
                <dl className="lux-unit3d__meta">
                  <div>
                    <dt>{copy.area}</dt>
                    <dd>
                      {selected.areaM2} m²
                    </dd>
                  </div>
                  <div>
                    <dt>{copy.status}</dt>
                    <dd style={{ color: statusColor(selected.status) }}>{statusLabel(selected.status)}</dd>
                  </div>
                  <div>
                    <dt>{copy.price}</dt>
                    <dd>{selected.priceSar.toLocaleString(isAr ? "ar-SA" : "en-SA")} SAR</dd>
                  </div>
                  <div>
                    <dt>{copy.beds}</dt>
                    <dd>{selected.beds}</dd>
                  </div>
                </dl>
                <div className="lux-unit3d__plan" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <p className="lux-unit3d__plan-caption">{copy.planPreview}</p>
                <button type="button" className="lux-btn-primary lux-unit3d__inquire" onClick={() => inquire(selected)}>
                  {copy.inquire}
                </button>
              </>
            ) : (
              <p className="lux-body text-lux-ink-soft">{copy.empty}</p>
            )}

            <ul className="lux-unit3d__list">
              {filtered.map((u) => (
                <li key={u.id}>
                  <button
                    type="button"
                    className={selected?.id === u.id ? "is-active" : undefined}
                    onClick={() => selectUnit(u)}
                  >
                    <strong>{u.code}</strong>
                    <span>{typeLabel(u.type)}</span>
                    <em style={{ color: statusColor(u.status) }}>{statusLabel(u.status)}</em>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
