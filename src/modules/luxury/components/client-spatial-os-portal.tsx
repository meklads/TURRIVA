"use client";

import { useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import { getConversionCopy } from "../lib/conversion-copy";
import { useConversionActions } from "./luxury-conversion-provider";
import type { UnitStatus } from "../lib/demo-units";
import { DEMO_UNITS, statusColor } from "../lib/demo-units";

type LightingLayer = "parking" | "amenities" | "penthouse";

type Props = { locale: Locale };

export function ClientSpatialOsPortal({ locale }: Props) {
  const isAr = locale === "ar";
  const copy = getConversionCopy(locale).portal;
  const { openDemo } = useConversionActions();
  const [lights, setLights] = useState<Record<LightingLayer, boolean>>({
    parking: true,
    amenities: true,
    penthouse: false,
  });
  const [inventory, setInventory] = useState(() =>
    DEMO_UNITS.slice(0, 6).map((u) => ({ id: u.id, code: u.code, status: u.status }))
  );

  function toggleLight(layer: LightingLayer) {
    setLights((prev) => {
      const next = { ...prev, [layer]: !prev[layer] };
      trackMarketingEvent("portal_lighting_toggled", { layer, on: next[layer] });
      return next;
    });
  }

  function cycleStatus(id: string) {
    setInventory((prev) =>
      prev.map((row) => {
        if (row.id !== id) return row;
        const order: UnitStatus[] = ["available", "reserved", "sold"];
        const next = order[(order.indexOf(row.status) + 1) % order.length]!;
        trackMarketingEvent("inventory_status_synced", { unitId: id, status: next });
        return { ...row, status: next };
      })
    );
  }

  const statusLabel = (s: UnitStatus) =>
    ({
      available: isAr ? "متاحة" : "Available",
      reserved: isAr ? "محجوزة" : "Reserved",
      sold: isAr ? "مباعة" : "Sold",
    })[s];

  return (
    <section id="spatial-os" className="lux-section lux-section--white lux-portal scroll-mt-28" aria-labelledby="lux-portal-title">
      <div className="lux-container">
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{copy.eyebrow}</p>
          <h2 id="lux-portal-title" className="lux-display lux-heading mt-3">
            {copy.title}
          </h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.intro}</p>
        </div>

        <div className="lux-portal__shell mt-10" role="region" aria-label={copy.title}>
          <header className="lux-portal__chrome">
            <span className="lux-portal__dot" aria-hidden />
            <span className="lux-portal__dot" aria-hidden />
            <span className="lux-portal__dot" aria-hidden />
            <p className="lux-portal__chrome-title">{copy.chromeTitle}</p>
          </header>

          <div className="lux-portal__grid">
            <article className="lux-portal__card">
              <h3>{copy.analyticsTitle}</h3>
              <ul className="lux-portal__stats">
                <li>
                  <strong>184</strong>
                  <span>{copy.visitors}</span>
                </li>
                <li>
                  <strong>4:12</strong>
                  <span>{copy.avgTime}</span>
                </li>
                <li>
                  <strong>{isAr ? "بنتهاوس" : "Penthouse"}</strong>
                  <span>{copy.topType}</span>
                </li>
              </ul>
            </article>

            <article className="lux-portal__card">
              <h3>{copy.lightingTitle}</h3>
              <p className="lux-portal__hint">{copy.lightingHint}</p>
              <ul className="lux-portal__toggles">
                {(
                  [
                    ["parking", copy.layerParking],
                    ["amenities", copy.layerAmenities],
                    ["penthouse", copy.layerPenthouse],
                  ] as const
                ).map(([id, label]) => (
                  <li key={id}>
                    <span>{label}</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={lights[id]}
                      className={lights[id] ? "is-on" : undefined}
                      onClick={() => toggleLight(id)}
                    >
                      <i aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="lux-portal__maquette" aria-hidden>
                <span className={lights.parking ? "is-lit" : undefined} data-layer="parking" />
                <span className={lights.amenities ? "is-lit" : undefined} data-layer="amenities" />
                <span className={lights.penthouse ? "is-lit" : undefined} data-layer="penthouse" />
              </div>
            </article>

            <article className="lux-portal__card lux-portal__card--wide">
              <h3>{copy.inventoryTitle}</h3>
              <p className="lux-portal__hint">{copy.inventoryHint}</p>
              <table className="lux-portal__table">
                <thead>
                  <tr>
                    <th>{copy.colUnit}</th>
                    <th>{copy.colStatus}</th>
                    <th>{copy.colSync}</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((row) => (
                    <tr key={row.id}>
                      <td>{row.code}</td>
                      <td style={{ color: statusColor(row.status) }}>{statusLabel(row.status)}</td>
                      <td>
                        <button type="button" className="lux-portal__sync" onClick={() => cycleStatus(row.id)}>
                          {copy.syncAction}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          </div>

          <div className="lux-portal__footer">
            <p>{copy.demoNote}</p>
            <button
              type="button"
              className="lux-btn-primary"
              onClick={() =>
                openDemo({
                  projectType: "custom_spatial",
                  timeline: "planning",
                  source: "spatial_os_portal",
                  note: isAr ? "طلب عرض بوابة Spatial OS للعملاء" : "Request Spatial OS client portal demo",
                })
              }
            >
              {copy.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
