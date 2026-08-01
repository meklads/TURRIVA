import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryVillasSegmentsSection({ messages }: { messages: LuxuryMessages }) {
  const s = messages.pages.villas.segments;

  return (
    <section className="lux-section lux-section--linen">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{s.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{s.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{s.subtitle}</p>
      </div>
      <div className="lux-container mt-12 grid gap-6 md:grid-cols-3">
        {s.items.map((item) => (
          <article key={item.title} className="lux-villas-segment-card">
            <span className="lux-villas-segment-card__tag">{item.tag}</span>
            <h3 className="lux-display mt-4 text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
