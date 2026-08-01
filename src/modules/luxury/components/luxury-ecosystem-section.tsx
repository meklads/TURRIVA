import Link from "next/link";
import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { ECOSYSTEM_BRAND_LOGOS } from "../lib/ecosystem-logos";

export function LuxuryEcosystemSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.ecosystem;

  return (
    <section id="ecosystem" className="lux-section lux-section--linen lux-ecosystem-offer scroll-mt-24">
      <div className="lux-container max-w-4xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-3xl text-lux-ink-muted">{t.subtitle}</p>
      </div>

      <div className="lux-container mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
        {t.pillars.map((pillar) => {
          const logo = ECOSYSTEM_BRAND_LOGOS[pillar.brand];
          return (
            <article key={pillar.title} className="lux-offer-card">
              <div className={`lux-offer-card__logo ${logo.className}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={80}
                  className="lux-offer-card__logo-img"
                  unoptimized
                />
              </div>
              <p className="lux-offer-card__badge">{pillar.badge}</p>
              <h3 className="lux-offer-card__title">{pillar.title}</h3>
              <ul className="lux-offer-card__points">
                {pillar.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="lux-container lux-ecosystem-offer__ctas">
        <Link href={t.ctaB2bHref} className="lux-inspiration-ghost-btn">
          {t.ctaB2b}
        </Link>
        <Link href={t.ctaB2cHref} className="lux-btn-primary">
          {t.ctaB2c}
        </Link>
      </div>
    </section>
  );
}
