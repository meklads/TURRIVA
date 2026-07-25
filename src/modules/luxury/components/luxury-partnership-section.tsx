import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  messages: LuxuryMessages;
};

export function LuxuryPartnershipSection({ locale, messages }: Props) {
  const p = messages.partnership;
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="lux-section lux-section--partnership">
      <div className="lux-container">
        <div className="lux-partnership-grid">
          <div className="lux-partnership-copy">
            <p className="lux-eyebrow">{p.eyebrow}</p>
            <div className="lux-divider-gold !mx-0" />
            <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{p.title}</h2>
            <p className="lux-body mt-6 max-w-xl text-[15px] leading-relaxed">{p.body}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-lux-ink-muted">{p.note}</p>
            <Link
              href={p.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-btn-outline-gold mt-8 inline-flex items-center gap-2"
            >
              {p.ctaLabel}
              <Arrow className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="lux-partnership-panel" aria-hidden>
            <div className="lux-partnership-panel-inner">
              <span className="lux-partnership-stat">+15</span>
              <span className="lux-partnership-stat-label">
                {locale === "ar" ? "سنة خبرة ميدانية" : "Years on-site"}
              </span>
              <span className="lux-partnership-stat mt-8">Fixed</span>
              <span className="lux-partnership-stat-label">
                {locale === "ar" ? "ديكور ثابت · ليس CGI" : "Decor · not CGI"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
