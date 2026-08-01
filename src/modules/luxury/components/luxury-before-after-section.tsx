import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";

export function LuxuryBeforeAfterSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.beforeAfter;

  return (
    <section className="lux-section lux-section--dark">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl opacity-90">{t.subtitle}</p>
      </div>

      <div className="lux-container mt-12 max-w-5xl">
        <div className="lux-delivery-proof">
          <figure className="lux-delivery-proof__panel">
            <div className="lux-delivery-proof__media">
              <Image
                src={LUXURY_IMAGES.project1}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="lux-delivery-proof__label">{t.beforeLabel}</figcaption>
          </figure>
          <figure className="lux-delivery-proof__panel">
            <div className="lux-delivery-proof__media">
              <Image
                src={LUXURY_IMAGES.project2}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="lux-delivery-proof__label">{t.afterLabel}</figcaption>
          </figure>
        </div>
        <p className="lux-delivery-proof__caption">{t.caption}</p>
      </div>
    </section>
  );
}
