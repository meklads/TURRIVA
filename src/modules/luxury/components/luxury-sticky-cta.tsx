"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { buildWhatsAppHref } from "@/shared/lib/whatsapp";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type Props = {
  locale: Locale;
  label: string;
  href: string;
  whatsappMessage?: string;
  source?: string;
};

export function LuxuryStickyCta({ locale, label, href, whatsappMessage, source }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const waDefault =
    locale === "ar" ? "مرحباً توريفا — أود مناقشة مشروع تنفيذ." : "Hello Turriva — I would like to discuss an execution project.";

  return (
    <div className="lux-sticky-cta" role="region" aria-label={label}>
      <div className="lux-sticky-cta__inner">
        <Link href={href} className="lux-btn-primary lux-sticky-cta__btn">
          {label}
        </Link>
        <a
          href={buildWhatsAppHref(whatsappMessage ?? waDefault)}
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
