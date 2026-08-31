import Link from "next/link";
import Image from "next/image";
import { LUXURY_IMAGES, type LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";

export function LuxurySampleKitBand({ messages, locale }: { messages: LuxuryMessages; locale: Locale }) {
  const t = messages.sampleKit;
  const contactHref = localizePath("/contact?intent=sample", locale);

  return (
    <section className="lux-section lux-section--cream lux-sample-kit-band">
      <div className="lux-container">
        <div className="lux-sample-kit-grid">
          <div className="lux-sample-kit-media">
            <Image
              src={LUXURY_IMAGES.sampleKit}
              alt={t.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="lux-sample-kit-panel">
            <h2 className="lux-display text-2xl sm:text-3xl">{t.title}</h2>
            <p className="lux-body mt-3 text-sm sm:text-base">{t.subtitle}</p>
            <Link href={contactHref} className="lux-btn-primary mt-8 inline-flex">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
