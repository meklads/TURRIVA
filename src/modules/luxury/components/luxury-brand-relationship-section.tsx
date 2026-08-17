import { ArrowRight, ExternalLink } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const TASAMI_URL = "https://www.tasamify.com/";

export function LuxuryBrandRelationshipSection({
  messages,
  compact = false,
}: {
  messages: LuxuryMessages;
  compact?: boolean;
}) {
  const t = messages.brandRelationship;

  return (
    <section
      className={`lux-brand-relationship${compact ? " lux-brand-relationship--compact" : ""}`}
      aria-labelledby={compact ? "group-relationship-compact" : "group-relationship"}
    >
      <div className="lux-container">
        <div className="lux-brand-relationship__intro">
          <div>
            <p className="lux-eyebrow">{t.eyebrow}</p>
            <div className="lux-divider-gold" />
            <h2
              id={compact ? "group-relationship-compact" : "group-relationship"}
              className="lux-display lux-heading mt-6"
            >
              {t.title}
            </h2>
          </div>
          <div>
            <p className="lux-body text-lux-ink-muted">{t.body}</p>
            <a href={TASAMI_URL} target="_blank" rel="noopener noreferrer" className="lux-brand-relationship__link">
              {t.groupLink}
              <ExternalLink className="h-4 w-4" strokeWidth={1.8} aria-hidden />
            </a>
          </div>
        </div>

        <div className="lux-brand-relationship__flow" aria-label={t.flow}>
          <span>{t.flow}</span>
          <ArrowRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
        </div>

        <div className="lux-brand-relationship__companies">
          {t.companies.map((company) => (
            <article
              key={company.name}
              className={`lux-brand-relationship__company${company.active ? " is-active" : ""}`}
            >
              <p>{company.name}</p>
              <span>{company.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
