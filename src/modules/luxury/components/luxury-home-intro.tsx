import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryHomeIntro({ messages }: Props) {
  const i = messages.intro;

  return (
    <section className="lux-section lux-section--linen">
      <div className="lux-container lux-editorial-split">
        <div className="lux-editorial-copy">
          <p className="lux-eyebrow">{i.eyebrow}</p>
          <h2 className="lux-display lux-heading mt-5">{i.title}</h2>
          <p className="lux-body mt-6 max-w-xl">{i.body}</p>
        </div>
        <div className="lux-editorial-media">
          <Image
            src={LUXURY_IMAGES.intro}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
