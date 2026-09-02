"use client";

import type { ReactNode } from "react";
import { buildWhatsAppHref } from "@/shared/lib/whatsapp";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type Props = {
  message: string;
  source: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export function TrackedWhatsAppLink({ message, source, className, children, "aria-label": ariaLabel }: Props) {
  return (
    <a
      href={buildWhatsAppHref(message)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "WhatsApp"}
      onClick={() => trackMarketingEvent("WhatsApp Click", { source })}
    >
      {children}
    </a>
  );
}
