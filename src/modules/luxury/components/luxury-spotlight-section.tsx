import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxurySpotlightSection({ messages }: Props) {
  const s = messages.spotlight;

  return (
    <section className="lux-section">
      <div className="lux-container text-center">
        <p className="lux-eyebrow">{s.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{s.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-sm">{s.subtitle}</p>
      </div>
      <div className="lux-container mt-14 grid gap-6 lg:grid-cols-3">
        {s.items.map((item) => (
          <article key={item.title} className="lux-spot-card">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-lux-gold">
              {item.category}
            </p>
            <h3 className="lux-display mt-3 text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
            <p className="mt-4 border-t border-lux-sand pt-4 text-xs leading-relaxed text-lux-ink-muted">
              {item.execution}
            </p>
          </article>
        ))}
      </div>
      <p className="lux-container mt-8 text-center text-xs text-lux-ink-muted">{s.disclaimer}</p>
    </section>
  );
}
