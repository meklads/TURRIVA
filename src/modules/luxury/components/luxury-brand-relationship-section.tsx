import { ExternalLink } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { GROUP_LINKS } from "@/shared/lib/seo-schema";

const COMPANY_URLS: Record<string, string> = {
  "Graphics House": GROUP_LINKS.graphicsHouse,
  "Bees Motion": GROUP_LINKS.beesMotion,
  Turriva: GROUP_LINKS.tasami,
};

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
            <a href={GROUP_LINKS.tasami} target="_blank" rel="noopener noreferrer" className="lux-brand-relationship__link">
              {t.groupLink}
              <ExternalLink className="h-4 w-4" strokeWidth={1.8} aria-hidden />
            </a>
          </div>
        </div>

        <div className="lux-brand-relationship__flow" aria-label={t.flow}>
          <span>{t.flow}</span>
        </div>

        <div className="lux-brand-relationship__companies">
          {t.companies.map((company) => {
            const href = COMPANY_URLS[company.name];
            const inner = (
              <>
                <p>{company.name}</p>
                <span>{company.role}</span>
              </>
            );

            return (
              <article
                key={company.name}
                className={`lux-brand-relationship__company${company.active ? " is-active" : ""}`}
              >
                {href && !company.active ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-lux-gold">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
