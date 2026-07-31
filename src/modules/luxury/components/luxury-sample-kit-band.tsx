import Link from "next/link";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxurySampleKitBand({ messages }: { messages: LuxuryMessages }) {
  const t = messages.sampleKit;
  return (
    <section className="lux-section lux-section--cream">
      <div className="lux-container">
        <div className="lux-sample-kit-panel">
          <div className="max-w-xl">
            <h2 className="lux-display text-2xl sm:text-3xl">{t.title}</h2>
            <p className="lux-body mt-3 text-sm sm:text-base">{t.subtitle}</p>
          </div>
          <Link href="/contact?intent=sample" className="lux-btn-primary shrink-0">
            {t.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
