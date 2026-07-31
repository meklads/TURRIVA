import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryEcosystemSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.ecosystem;
  return (
    <section id="ecosystem" className="lux-section lux-section--white scroll-mt-24">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
      </div>
      <div className="lux-container mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {t.pillars.map((pillar, i) => (
          <article key={pillar.title} className="lux-pillar-card">
            <span className="lux-pillar-index">{String(i + 1).padStart(2, "0")}</span>
            <p className="lux-eyebrow mt-4 text-[10px]">{pillar.subtitle}</p>
            <h3 className="lux-display mt-2 text-xl">{pillar.title}</h3>
            <p className="lux-body mt-4 text-sm leading-relaxed">{pillar.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
