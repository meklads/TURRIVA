import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryComparisonSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.comparison;

  return (
    <section className="lux-section lux-section--white lux-comparison" aria-labelledby="comparison-heading">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="comparison-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
      </div>

      <div className="lux-container lux-comparison-matrix">
        <div className="lux-comparison-matrix__head">
          <p className="lux-comparison-matrix__head-cell lux-comparison-matrix__head-cell--traditional">
            {t.traditionalHeader}
          </p>
          <p className="lux-comparison-matrix__head-cell lux-comparison-matrix__head-cell--turriva">
            {t.turrivaHeader}
          </p>
        </div>

        <ol className="lux-comparison-matrix__rows">
          {t.rows.map((row) => (
            <li key={row.traditional} className="lux-comparison-matrix__row">
              <div className="lux-comparison-matrix__cell lux-comparison-matrix__cell--traditional">
                <span className="lux-comparison-matrix__mobile-label">{t.traditionalHeader}</span>
                <p>{row.traditional}</p>
              </div>
              <div className="lux-comparison-matrix__cell lux-comparison-matrix__cell--turriva">
                <span className="lux-comparison-matrix__mobile-label">{t.turrivaHeader}</span>
                <p>{row.turriva}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
