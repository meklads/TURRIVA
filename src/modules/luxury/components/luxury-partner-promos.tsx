import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, ArrowLeft, ArrowRight } from "lucide-react";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export async function LuxuryPartnerPromos() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const { workspace } = t.promos;

  return (
    <section className="lux-promos" aria-label={t.promos.eyebrow}>
      <div className="lux-container py-12 lg:py-16">
        <Link href="/workspace" className="lux-promo-banner group">
          <div className="lux-promo-banner__shine" aria-hidden />
          <div className="lux-promo-banner__content">
            <span className="lux-promo-badge">{t.promos.eyebrow}</span>
            <Image
              src="/brand/ruwaq/logo-on-light.png"
              alt=""
              width={1248}
              height={492}
              className="lux-promo-banner__logo"
            />
            <h3 className="lux-promo-banner__title">{workspace.title}</h3>
            <p className="lux-promo-banner__subtitle">{workspace.subtitle}</p>
            <ul className="lux-promo-banner__features">
              {workspace.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <span className="lux-promo-banner__cta">
              {workspace.cta}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </span>
          </div>

          <div className="lux-promo-banner__visual" aria-hidden>
            <div className="lux-promo-banner__orb" />
            <div className="lux-promo-banner__ring lux-promo-banner__ring--outer" />
            <div className="lux-promo-banner__ring lux-promo-banner__ring--inner" />
            <span className="lux-promo-banner__icon">
              <LayoutGrid className="h-10 w-10" strokeWidth={1.1} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
