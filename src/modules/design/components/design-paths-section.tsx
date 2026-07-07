import Link from "next/link";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
};

export function DesignPathsSection({ messages }: Props) {
  const p = messages.paths;

  return (
    <section className="design-paths" id="contact">
      <div className="design-container design-container--wide">
        <div className="design-paths__header">
          <p className="design-eyebrow">{p.eyebrow}</p>
          <h2 className="design-section-title">{p.title}</h2>
          <p className="design-section-subtitle">{p.subtitle}</p>
        </div>

        <div className="design-paths__grid">
          <article className="design-path-card design-path-card--tool">
            <span className="design-path-card__step">1</span>
            <h3>{p.toolTitle}</h3>
            <p>{p.toolBody}</p>
            <ul>
              {p.toolPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#studio" className="design-btn design-btn-primary">
              {p.toolCta}
            </a>
          </article>

          <article className="design-path-card design-path-card--bespoke">
            <span className="design-path-card__step">2</span>
            <h3>{p.bespokeTitle}</h3>
            <p>{p.bespokeBody}</p>
            <ul>
              {p.bespokePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link href="/contact" className="design-btn design-btn-execution">
              {p.bespokeCta}
            </Link>
          </article>
        </div>

        <div className="design-paths__execution">
          <span className="design-execution-badge">{messages.execution.badge}</span>
          <p className="design-paths__execution-title">{messages.execution.title}</p>
          <p className="design-paths__execution-sub">{messages.execution.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
