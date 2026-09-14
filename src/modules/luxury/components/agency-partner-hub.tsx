"use client";

import type { Locale } from "@/shared/i18n/locale";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import { getConversionCopy } from "../lib/conversion-copy";
import { useConversionActions } from "./luxury-conversion-provider";

type Props = { locale: Locale };

const PITCH_HREF = "/docs/turriva-agency-pitch-kit.html";

export function AgencyPartnerHub({ locale }: Props) {
  const isAr = locale === "ar";
  const copy = getConversionCopy(locale).agency;
  const { openDemo } = useConversionActions();

  function downloadPitch() {
    trackMarketingEvent("agency_pitch_downloaded", { locale });
    const a = document.createElement("a");
    a.href = PITCH_HREF;
    a.download = "turriva-agency-pitch-kit.html";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <section id="agency-partners" className="lux-section lux-section--dark lux-agency scroll-mt-28" aria-labelledby="lux-agency-title">
      <div className="lux-container">
        <div className="lux-agency__grid">
          <div>
            <p className="lux-eyebrow lux-eyebrow--on-dark">{copy.eyebrow}</p>
            <h2 id="lux-agency-title" className="lux-display lux-heading mt-3 text-white">
              {copy.title}
            </h2>
            <p className="lux-body mt-4 text-white/80">{copy.body}</p>
            <ul className="lux-agency__points">
              {copy.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="lux-agency__actions">
            <button type="button" className="lux-btn-primary lux-agency__btn" onClick={downloadPitch}>
              {copy.download}
            </button>
            <button
              type="button"
              className="lux-btn-outline-gold lux-agency__btn"
              onClick={() =>
                openDemo({
                  projectType: "launch_exhibition",
                  timeline: "1_3_months",
                  source: "agency_partner_hub",
                  company: isAr ? "وكالة شريكة" : "Partner agency",
                  note: isAr
                    ? "استفسار عمولة وتآزر شركاء ProjectLaunch™"
                    : "Partner commission & synergy inquiry, ProjectLaunch™",
                })
              }
            >
              {copy.commissionCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
