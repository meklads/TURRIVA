"use client";

import Image from "next/image";
import type { Locale } from "@/shared/i18n/locale";
import { getGroupProofCopy } from "../lib/group-proof-copy";
import { getConversionCopy } from "../lib/conversion-copy";

type Props = { locale: Locale };

export function LuxuryLogoMarquee({ locale }: Props) {
  const proof = getGroupProofCopy(locale);
  const copy = getConversionCopy(locale);
  const logos = [...proof.clients, ...proof.clients];

  return (
    <aside className="lux-logo-marquee" aria-label={copy.logoLabel}>
      <div className="lux-container">
        <p className="lux-logo-marquee__label">{copy.logoLabel}</p>
      </div>
      <div className="lux-logo-marquee__track-wrap">
        <ul className="lux-logo-marquee__track">
          {logos.map((client, i) => (
            <li key={`${client.src}-${i}`}>
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={56}
                className="lux-logo-marquee__img"
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
