import Link from "next/link";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryExecutionSection({ messages }: Props) {
  const e = messages.execution;

  return (
    <section className="lux-section lux-section--cream">
      <div className="lux-container">
        <div className="flex flex-col gap-8 rounded-2xl border border-lux-sand bg-white p-8 shadow-lux-card lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <span className="lux-eyebrow">{e.badge}</span>
            <h2 className="lux-display mt-4 text-2xl sm:text-3xl">{e.title}</h2>
            <p className="lux-body mt-4">{e.subtitle}</p>
            <ul className="mt-6 space-y-2 text-sm text-lux-ink-soft">
              {e.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-lux-gold" aria-hidden>
                    ·
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="lux-btn-primary shrink-0">
            {e.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
