import Link from "next/link";
import { Award, Home, LayoutGrid, ShieldCheck, type LucideIcon } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";

const ICONS: Record<
  LuxuryMessages["valueOffers"]["items"][number]["icon"],
  LucideIcon
> = {
  warranty: ShieldCheck,
  quality: Award,
  design: LayoutGrid,
  service: Home,
};

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
};

export function LuxuryValueOffersSection({ messages, locale }: Props) {
  const t = messages.valueOffers;
  const lp = (path: string) => localizePath(path, locale);

  return (
    <section
      id="value-offers"
      className="lux-section lux-section--white lux-value-offers scroll-mt-24"
      aria-labelledby="value-offers-heading"
    >
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="value-offers-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
      </div>

      <div className="lux-container lux-value-offers__grid">
        {t.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <article key={item.title} className="lux-value-card">
              <div className="lux-value-card__icon" aria-hidden>
                <Icon strokeWidth={1.35} />
              </div>
              <h3 className="lux-value-card__title">{item.title}</h3>
              <ul className="lux-value-card__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="lux-container lux-value-offers__cta">
        <Link href={lp(t.ctaHref)} className="lux-btn-outline-gold">
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
