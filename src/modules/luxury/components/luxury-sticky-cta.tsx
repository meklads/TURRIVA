"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { buildWhatsAppHref, buildSalesBriefWhatsAppMessage } from "@/shared/lib/whatsapp";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import { useOptionalConversionActions } from "./luxury-conversion-provider";

type Props = {
  locale: Locale;
  label: string;
  href: string;
  whatsappMessage?: string;
  source?: string;
  /** When true and conversion provider is present, primary button opens demo modal. */
  openDemo?: boolean;
};

export function LuxuryStickyCta({ locale, label, href, whatsappMessage, source, openDemo }: Props) {
  const [visible, setVisible] = useState(false);
  const conversion = useOptionalConversionActions();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const waDefault = whatsappMessage ?? buildSalesBriefWhatsAppMessage(locale);
  const useDemo = Boolean(openDemo && conversion);

  return (
    <div className="lux-sticky-cta" role="region" aria-label={label}>
      <div className="lux-sticky-cta__inner">
        {useDemo ? (
          <button
            type="button"
            className="lux-btn-primary lux-sticky-cta__btn"
            onClick={() => conversion?.openDemo({ source: source ?? "sticky_cta" })}
          >
            {label}
          </button>
        ) : (
          <Link href={href} className="lux-btn-primary lux-sticky-cta__btn">
            {label}
          </Link>
        )}
        <a
          href={buildWhatsAppHref(waDefault)}
          className="lux-btn-outline-gold lux-sticky-cta__btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMarketingEvent("WhatsApp Click", { source: source ?? "sticky_cta" })}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
