import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
};

export function DesignExecutionBanner({ messages }: Props) {
  const e = messages.execution;

  return (
    <section className="design-execution design-execution--compact">
      <div className="design-container design-container--wide">
        <div className="design-execution-strip">
          <div>
            <span className="design-execution-badge">{e.badge}</span>
            <p className="design-execution-strip__title">{e.title}</p>
            <p className="design-execution-strip__sub">{e.subtitle}</p>
          </div>
          <a href="#studio" className="design-btn design-btn-execution design-execution-strip__cta">
            {e.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
