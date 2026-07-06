import Link from "next/link";
import Image from "next/image";
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
      <div className="lux-container py-12 lg:py-16">
        <p className="lux-promos-eyebrow">{t.promos.eyebrow}</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Ruwaq proposals platform */}
          <Link href="/workspace" className="lux-promo-card lux-promo-card--app group">
            <div className="lux-promo-card__shine" aria-hidden />
            <div className="lux-promo-card__top">
              <span className="lux-promo-badge lux-promo-badge--app">
                {locale === "ar" ? "منصة رقمية" : "Digital platform"}
              </span>
              <span className="lux-promo-card__mark" aria-hidden>
                <LayoutGrid className="h-6 w-6" strokeWidth={1.25} />
              </span>
            </div>
            <div className="lux-promo-card__body">
              <Image
                src="/brand/ruwaq/logo-on-light.png"
                alt=""
                width={1248}
                height={492}
                className="lux-promo-ruwaq-logo"
              />
              <h3 className="lux-promo-title lux-promo-title--app">
                {t.promos.workspace.title}
              </h3>
              <p className="lux-promo-subtitle lux-promo-subtitle--app">
                {t.promos.workspace.subtitle}
              </p>
            </div>
            <span className="lux-promo-cta lux-promo-cta--app">
              {t.promos.workspace.cta}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </span>
          </Link>

          {/* Graphics House */}
          <a
            href={GRAPHICS_HOUSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-promo-card lux-promo-card--gh group"
          >
            <div className="lux-promo-card__glow" aria-hidden />
            <div className="lux-promo-card__top">
              <span className="lux-promo-badge lux-promo-badge--gh">
                {locale === "ar" ? "شريك إبداعي" : "Creative partner"}
              </span>
              <span className="lux-promo-card__mark lux-promo-card__mark--gh" aria-hidden>
                <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
              </span>
            </div>
            <div className="lux-promo-card__body">
              <GraphicsHouseLogo
                href=""
                variant="dark"
                className="lux-promo-gh-logo"
              />
              <h3 className="lux-promo-title lux-promo-title--gh">
                {t.promos.graphicsHouse.title}
              </h3>
              <p className="lux-promo-subtitle lux-promo-subtitle--gh">
                {t.promos.graphicsHouse.subtitle}
              </p>
            </div>
            <span className="lux-promo-cta lux-promo-cta--gh">
              {t.promos.graphicsHouse.cta}
              <ExternalLink className="h-4 w-4 opacity-90" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
