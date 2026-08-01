import Link from "next/link";
import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_INSPIRATION_IMAGES } from "@/shared/i18n/messages/luxury-inspiration";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryInspirationSection({ messages }: Props) {
  const t = messages.inspiration;

  return (
    <section id="inspiration" className="lux-section lux-section--white lux-inspiration scroll-mt-24">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
      </div>

      <div className="lux-inspiration-rows">
        {t.items.map((item, index) => {
          const image = LUXURY_INSPIRATION_IMAGES[item.id] ?? LUXURY_INSPIRATION_IMAGES.kitchen!;
          const reverse = index % 2 === 1;

          return (
            <article
              key={item.id}
              className={`lux-inspiration-row${reverse ? " lux-inspiration-row--reverse" : ""}`}
            >
              <div className="lux-container lux-inspiration-row__inner">
                <div className="lux-inspiration-row__media">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 78vw"
                    priority={index === 0}
                  />
                </div>
                <div className="lux-inspiration-row__aside">
                  <div className="lux-inspiration-card">
                    <span className="lux-inspiration-card__label">{item.label}</span>
                    <h3 className="lux-inspiration-card__title">{item.title}</h3>
                    <p className="lux-inspiration-card__desc">{item.description}</p>
                  </div>
                  <Link href={item.href} className="lux-inspiration-ghost-btn">
                    {item.cta}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
