import { Check, X } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryComparisonSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.comparison;

  return (
    <section className="lux-section lux-section--linen lux-comparison" aria-labelledby="comparison-heading">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="comparison-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
      </div>

      <div className="lux-container lux-comparison-matrix">
        <div className="lux-comparison-matrix__headers" aria-hidden>
          <div className="lux-comparison-matrix__head lux-comparison-matrix__head--traditional">
            {t.traditionalHeader}
          </div>
          <div className="lux-comparison-matrix__head lux-comparison-matrix__head--turriva">
            <span className="lux-comparison-matrix__mark" aria-hidden>
              ✦
            </span>
            {t.turrivaHeader}
          </div>
        </div>

        <ol className="lux-comparison-rows">
          {t.rows.map((row, index) => (
            <li key={row.traditional} className="lux-comparison-row">
              <span className="lux-comparison-row__index">{String(index + 1).padStart(2, "0")}</span>
              <div className="lux-comparison-row__grid">
                <div className="lux-comparison-row__cell lux-comparison-row__cell--traditional">
                  <span className="lux-comparison-row__label">{t.traditionalHeader}</span>
                  <div className="lux-comparison-row__content">
                    <span className="lux-comparison-row__icon lux-comparison-row__icon--muted" aria-hidden>
                      <X strokeWidth={2} />
                    </span>
                    <p>{row.traditional}</p>
                  </div>
                </div>
                <div className="lux-comparison-row__cell lux-comparison-row__cell--turriva">
                  <span className="lux-comparison-row__label">{t.turrivaHeader}</span>
                  <div className="lux-comparison-row__content">
                    <span className="lux-comparison-row__icon lux-comparison-row__icon--gold" aria-hidden>
                      <Check strokeWidth={2.5} />
                    </span>
                    <p>{row.turriva}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
