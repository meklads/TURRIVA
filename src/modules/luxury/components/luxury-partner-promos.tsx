import Link from "next/link";
import { LayoutGrid, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { GraphicsHouseLogo } from "@/shared/components/graphics-house-logo";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

export async function LuxuryPartnerPromos() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="lux-promos" aria-label={t.promos.eyebrow}>
      <div className="lux-container py-12 lg:py-14">
        <p className="lux-promos-eyebrow">{t.promos.eyebrow}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href="/workspace" className="lux-promo-card lux-promo-card--app group">
            <span className="lux-promo-icon" aria-hidden>
              <LayoutGrid className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="lux-promo-title">{t.promos.workspace.title}</span>
              <span className="lux-promo-subtitle">{t.promos.workspace.subtitle}</span>
            </span>
            <span className="lux-promo-cta">
              {t.promos.workspace.cta}
              <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </span>
          </Link>

          <a
            href={GRAPHICS_HOUSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-promo-card lux-promo-card--gh group"
          >
            <span className="lux-promo-logo" aria-hidden>
              <GraphicsHouseLogo href="" variant="mark" className="h-7 w-auto" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="lux-promo-title">{t.promos.graphicsHouse.title}</span>
              <span className="lux-promo-subtitle">{t.promos.graphicsHouse.subtitle}</span>
            </span>
            <span className="lux-promo-cta">
              {t.promos.graphicsHouse.cta}
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
