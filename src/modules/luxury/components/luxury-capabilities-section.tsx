import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryCapabilitiesSection({ messages }: Props) {
  const c = messages.capabilities;

  return (
    <section className="lux-section lux-section--cream">
      <div className="lux-container text-center">
        <p className="lux-eyebrow">{c.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{c.title}</h2>
      </div>
      <div className="lux-container mt-14 grid gap-6 md:grid-cols-3">
        {c.items.map((item, i) => (
          <article key={item.title} className="lux-cap-card">
            <span className="lux-cap-index">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="lux-display mt-4 text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
