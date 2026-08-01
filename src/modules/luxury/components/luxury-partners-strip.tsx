import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryPartnersStrip({ messages }: { messages: LuxuryMessages }) {
  const t = messages.partners;

  return (
    <section className="lux-section lux-section--white lux-partners-section" aria-labelledby="partners-heading">
      <div className="lux-container max-w-4xl text-center">
        <div className="lux-divider-gold mx-auto" />
        <h2 id="partners-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
      </div>

      <div className="lux-container mt-12 grid gap-6 md:grid-cols-3">
        {t.groups.map((group) => (
          <article key={group.label} className="lux-partners-group">
            <h3 className="lux-partners-group__label">{group.label}</h3>
            <p className="lux-partners-group__desc">{group.description}</p>
            <ul className="lux-partners-group__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
