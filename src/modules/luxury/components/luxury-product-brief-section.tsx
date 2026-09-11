import Image from "next/image";
import type { ReactNode } from "react";
import type { ProductVisualKey } from "../lib/product-visuals";
import { getProductVisuals } from "../lib/product-visuals";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";

type Props = {
  locale: Locale;
  product: ProductVisualKey;
  title: string;
  body: string;
  titleId: string;
  children: ReactNode;
};

export function LuxuryProductBriefSection({ locale, product, title, body, titleId, children }: Props) {
  const visuals = getProductVisuals(product);
  const alt = locale === "ar" ? visuals.altAr : visuals.altEn;

  return (
    <LuxuryFormSplitSection
      id="brief"
      tone="linen"
      portrait
      image={
        <div className="lux-quote-section__media lux-product-brief__media relative">
          <Image
            src={visuals.form}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      }
    >
      <p className="lux-eyebrow">{locale === "ar" ? "الخطوة التالية" : "Next step"}</p>
      <h2 id={titleId} className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
      <p className="lux-body mt-4 text-sm leading-relaxed text-lux-ink-soft sm:text-base">{body}</p>
      <div className="lux-product-brief__form mt-8">{children}</div>
    </LuxuryFormSplitSection>
  );
}
