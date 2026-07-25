import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_CAPABILITY_IMAGES } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryCapabilitiesSection({ messages }: Props) {
  const c = messages.capabilities;

  return (
    <section className="lux-section">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{c.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{c.title}</h2>
      </div>
      <div className="lux-container mt-14 grid gap-6 sm:grid-cols-2">
        {c.items.map((item, index) => {
          const image = LUXURY_CAPABILITY_IMAGES[index] ?? LUXURY_CAPABILITY_IMAGES[0];
          return (
            <article key={item.title} className="lux-cap-tile group">
              <div className="lux-cap-tile-media">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="lux-cap-tile-body">
                <span className="lux-cap-index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="lux-display mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
