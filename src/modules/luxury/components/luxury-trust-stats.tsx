import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryTrustStats({ messages }: Props) {
  const { items } = messages.stats;

  return (
    <section className="lux-stats-band" aria-label="Turriva at a glance">
      <div className="lux-container">
        <ul className="lux-stats-grid">
          {items.map((item) => (
            <li key={item.label} className="lux-stat-item">
              <span className="lux-stat-value">{item.value}</span>
              <span className="lux-stat-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
