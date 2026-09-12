import { getGroupProofCopy } from "@/modules/luxury/lib/group-proof-copy";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  /** Compact shortens vertical rhythm (product pages) */
  compact?: boolean;
  showLogos?: boolean;
  showTestimonial?: boolean;
  showStats?: boolean;
};

export function LuxuryGroupProofSection({
  locale,
  compact = false,
  showLogos = true,
  showTestimonial = true,
  showStats = true,
}: Props) {
  const copy = getGroupProofCopy(locale);

  return (
    <section
      className={`lux-section lux-proof${compact ? " lux-proof--compact" : ""} lux-section--ink`}
      aria-labelledby="lux-proof-title"
    >
      <div className="lux-container">
        <div className="lux-proof__grid">
          <div className="lux-proof__intro">
            <p className="lux-proof__eyebrow">{copy.eyebrow}</p>
            <h2 id="lux-proof-title" className="lux-proof__title">
              {copy.title}
            </h2>
            <p className="lux-proof__lead">{copy.lead}</p>
            <p className="lux-proof__body">{copy.body}</p>

            <div className="lux-proof__lineage" aria-label={copy.lineage.note}>
              <span className="lux-proof__lineage-from">{copy.lineage.from}</span>
              <span className="lux-proof__lineage-arrow" aria-hidden="true">
                →
              </span>
              <span className="lux-proof__lineage-to">{copy.lineage.to}</span>
              <span className="lux-proof__lineage-note">{copy.lineage.note}</span>
            </div>
          </div>

          {showTestimonial ? (
            <blockquote className="lux-proof__quote lux-proof__quote--aside">
              <p className="lux-proof__quote-mark" aria-hidden="true">
                ”
              </p>
              <p className="lux-proof__quote-text">{copy.testimonial.quote}</p>
              <footer className="lux-proof__quote-attr">— {copy.testimonial.attribution}</footer>
            </blockquote>
          ) : null}
        </div>

        {showStats ? (
          <ul className="lux-proof__stats">
            {copy.stats.map((stat) => (
              <li key={stat.value + stat.label} className="lux-proof__stat">
                <p className="lux-proof__stat-value">{stat.value}</p>
                <p className="lux-proof__stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {showLogos ? (
          <div className="lux-proof__logos">
            <p className="lux-proof__logos-label">{copy.logoLabel}</p>
            <ul className="lux-proof__logo-list">
              {copy.clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LuxuryClientLogoStrip({ locale }: { locale: Locale }) {
  const copy = getGroupProofCopy(locale);

  return (
    <aside className="lux-client-strip" aria-label={copy.logoLabel}>
      <div className="lux-container">
        <p className="lux-client-strip__label">{copy.logoLabel}</p>
        <ul className="lux-client-strip__list">
          {copy.clients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
