import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
};

export function DesignExecutionBanner({ messages }: Props) {
  const e = messages.execution;

  return (
    <section className="design-execution">
      <div className="design-container">
        <div className="design-execution-inner">
          <div className="design-execution-copy">
            <span className="design-execution-badge">{e.badge}</span>
            <h2>{e.title}</h2>
            <p>{e.subtitle}</p>
            <ul className="design-execution-list">
              {e.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#studio" className="design-btn design-btn-execution">
              {e.cta}
            </a>
          </div>
          <div className="design-execution-visual" aria-hidden>
            <div className="design-execution-step">
              <span>1</span>
              {e.stepDesign}
            </div>
            <div className="design-execution-arrow">→</div>
            <div className="design-execution-step design-execution-step--accent">
              <span>2</span>
              {e.stepMaterials}
            </div>
            <div className="design-execution-arrow">→</div>
            <div className="design-execution-step design-execution-step--gold">
              <span>3</span>
              {e.stepBuild}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
