import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const RAFAL_SHOWREEL = "/brand/graphics-house/rafal-pavilions.webp";

export function LuxuryBeforeAfterSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.beforeAfter;

  return (
    <section className="lux-delivery-showcase" aria-labelledby="delivery-showcase-heading">
      <div className="lux-delivery-showcase__media" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={RAFAL_SHOWREEL} alt="" className="lux-delivery-showcase__loop" />
        <div className="lux-delivery-showcase__shade" />
      </div>

      <div className="lux-container lux-delivery-showcase__content">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="delivery-showcase-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl">{t.subtitle}</p>
        <p className="lux-delivery-showcase__project">
          <span className="lux-delivery-showcase__project-name">{t.projectName}</span>
          <span className="lux-delivery-showcase__project-credit">{t.projectCredit}</span>
        </p>
      </div>
    </section>
  );
}
