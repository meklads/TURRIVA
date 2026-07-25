import Link from "next/link";
import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryExecutionSection({ messages }: Props) {
  const e = messages.execution;

  return (
    <section className="lux-section lux-section--cream">
      <div className="lux-container lux-editorial-split lux-editorial-split--reverse">
        <div className="lux-editorial-media lux-editorial-media--tall">
          <Image
            src={LUXURY_IMAGES.execution}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="lux-editorial-copy lux-editorial-copy--panel">
          <span className="lux-eyebrow">{e.badge}</span>
          <h2 className="lux-display lux-heading mt-5">{e.title}</h2>
          <p className="lux-body mt-5">{e.subtitle}</p>
          <ul className="mt-8 space-y-3 border-t border-lux-sand pt-6 text-sm text-lux-ink-soft">
            {e.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-px w-4 shrink-0 bg-lux-ink" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="lux-btn-primary mt-10">
            {e.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
