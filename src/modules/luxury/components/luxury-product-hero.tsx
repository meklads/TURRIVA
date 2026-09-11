import Image from "next/image";
import type { ProductVisualKey } from "../lib/product-visuals";
import { getProductVisuals } from "../lib/product-visuals";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  product: ProductVisualKey;
  eyebrow: string;
  title: string;
  question?: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref?: string;
  titleId: string;
};

export function LuxuryProductHero({
  locale,
  product,
  eyebrow,
  title,
  question,
  body,
  primaryCta,
  secondaryCta,
  secondaryHref = "#scope",
  titleId,
}: Props) {
  const visuals = getProductVisuals(product);
  const alt = locale === "ar" ? visuals.altAr : visuals.altEn;

  return (
    <section className="lux-product-hero" aria-labelledby={titleId}>
      <div className="lux-product-hero__media" aria-hidden={!alt}>
        <Image
          src={visuals.hero}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="lux-product-hero__shade" aria-hidden />
      </div>
      <div className="lux-container lux-product-hero__content">
        <p className="lux-eyebrow lux-product-hero__eyebrow">{eyebrow}</p>
        <h1 id={titleId} className="lux-display lux-product-hero__title">
          {title}
          {question ? <span className="lux-product-hero__question">{question}</span> : null}
        </h1>
        <p className="lux-body lux-product-hero__body">{body}</p>
        <div className="lux-product-hero__cta">
          <a href="#brief" className="lux-btn-primary">
            {primaryCta}
          </a>
          <a href={secondaryHref} className="lux-btn-outline lux-product-hero__outline">
            {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
