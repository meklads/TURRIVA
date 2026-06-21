import Image from "next/image";
import Link from "next/link";
import { HeroServiceTickets } from "@/modules/marketing/components/hero-service-tickets";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

const HERO_IMAGE = "/brand/hero/hero.jpg";

type Props = {
  hero: Messages["sales"]["hero"];
  tickets: Messages["sales"]["heroTickets"];
  locale: Locale;
};

/** Split navy hero — circular image left, copy and CTAs right. */
export function MarketingHero({ hero, tickets, locale }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="ruwaq-landing-hero ruwaq-landing-hero--navy">
      <div className="ruwaq-hero-split ruwaq-reveal">
        <div className="ruwaq-hero-visual">
          <div className="ruwaq-hero-circle">
            <Image
              src={HERO_IMAGE}
              alt={hero.title}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="ruwaq-hero-float-badge">
            <span className="ruwaq-hero-float-badge-icon" aria-hidden>
              ✓
            </span>
            <div>
              <p className="ruwaq-hero-float-badge-title">{hero.imageBadgeTitle}</p>
              <p className="ruwaq-hero-float-badge-text">{hero.imageBadge}</p>
            </div>
          </div>
        </div>

        <div className="ruwaq-hero-copy">
          <p className="ruwaq-hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="ruwaq-hero-title mt-5 sm:mt-6">
            {hero.title}
            <span className="text-ruwaq-gold"> {hero.titleHighlight}</span>
          </h1>
          <p className="ruwaq-hero-lead mt-6 sm:mt-7">{hero.subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12">
            <Link href="/proposals/new" className="btn-ruwaq-hero-gold px-10 py-4 text-base">
              {hero.cta} {arrow}
            </Link>
            <Link href="/templates/sample" className="btn-ruwaq-hero-outline px-8 py-3.5">
              {hero.ctaSecondary}
            </Link>
          </div>
          <p className="ruwaq-hero-microcopy mt-6">{hero.microcopy}</p>
        </div>
      </div>

      <HeroServiceTickets tickets={tickets} />
    </section>
  );
}
