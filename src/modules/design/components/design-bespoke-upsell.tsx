import { PenTool } from "lucide-react";
import type { DesignMessages } from "@/shared/i18n/messages/design";
import type { ConsultationInterest } from "@/modules/design/lib/consultation-interest";

type Props = {
  messages: DesignMessages;
  onRequestBespoke: () => void;
};

export function DesignBespokeUpsell({ messages, onRequestBespoke }: Props) {
  const b = messages.bespoke;

  return (
    <aside className="design-bespoke">
      <div className="design-bespoke__icon" aria-hidden>
        <PenTool className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div className="design-bespoke__body">
        <p className="design-bespoke__eyebrow">{b.eyebrow}</p>
        <h3 className="design-bespoke__title">{b.title}</h3>
        <p className="design-bespoke__subtitle">{b.subtitle}</p>
        <ul className="design-bespoke__list">
          {b.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <button type="button" className="design-btn design-btn-outline design-bespoke__cta" onClick={onRequestBespoke}>
          {b.cta}
        </button>
      </div>
    </aside>
  );
}
