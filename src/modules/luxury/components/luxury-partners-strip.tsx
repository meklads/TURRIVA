import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryPartnersStrip({ messages }: { messages: LuxuryMessages }) {
  return (
    <section className="lux-partners-strip" aria-label={messages.partners.title}>
      <div className="lux-container">
        <p className="lux-partners-title">{messages.partners.title}</p>
        <ul className="lux-partners-list">
          {messages.partners.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
