import Link from "next/link";
import Image from "next/image";
import { LUXURY_IMAGES, type LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxurySampleKitBand({ messages }: { messages: LuxuryMessages }) {
  const t = messages.sampleKit;

  return (
    <section className="lux-section lux-section--cream lux-sample-kit-band">
      <div className="lux-container">
        <div className="lux-sample-kit-grid">
          <div className="lux-sample-kit-media">
            <Image
              src={LUXURY_IMAGES.sampleKit}
              alt=""
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="lux-sample-kit-panel">
            <h2 className="lux-display text-2xl sm:text-3xl">{t.title}</h2>
            <p className="lux-body mt-3 text-sm sm:text-base">{t.subtitle}</p>
            <Link href="/contact?intent=sample" className="lux-btn-primary mt-8 inline-flex">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
