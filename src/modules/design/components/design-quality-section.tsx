"use client";

import { useState } from "react";
import type { SpaceType } from "@/modules/design/lib/styles";
import { DESIGN_IMAGES } from "@/modules/design/lib/images";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
};

const TABS: SpaceType[] = ["interior", "exterior", "booth"];

export function DesignQualitySection({ messages, locale }: Props) {
  const [tab, setTab] = useState<SpaceType>("interior");
  const q = messages.quality;
  const images = DESIGN_IMAGES.quality[tab];

  const tabLabels: Record<SpaceType, string> = {
    interior: q.tabInterior,
    exterior: q.tabExterior,
    booth: q.tabBooth,
  };

  return (
    <section className="design-section design-section--muted">
      <div className="design-container">
        <p className="design-eyebrow">{q.eyebrow}</p>
        <h2 className="design-section-title">{q.title}</h2>
        <p className="design-section-subtitle">{q.subtitle}</p>

        <div className="design-quality-tabs">
          {TABS.map((id) => (
            <button
              key={id}
              type="button"
              className={`design-quality-tab${tab === id ? " design-quality-tab--active" : ""}`}
              onClick={() => setTab(id)}
            >
              {tabLabels[id]}
            </button>
          ))}
        </div>

        <div className="design-quality-grid">
          <div className="design-quality-card">
            <img src={images.yours} alt="" />
            <span className="design-quality-label">{q.yourPhoto}</span>
          </div>
          <div className="design-quality-card design-quality-card--dim">
            <img src={images.other} alt="" />
            <span className="design-quality-label">{q.otherAi}</span>
            <ul className="design-quality-notes">
              {q.otherNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <div className="design-quality-card design-quality-card--highlight">
            <img src={images.ruwaq} alt="" />
            <span className="design-quality-label design-quality-label--brand">{q.ruwaq}</span>
            <ul className="design-quality-notes design-quality-notes--good">
              {q.ruwaqNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="design-quality-footnote">{q.footnote}</p>
      </div>
    </section>
  );
}
