import Image from "next/image";
import type { ProductVisualKey } from "../lib/product-visuals";
import { getProductVisuals } from "../lib/product-visuals";
import { getProductMeta } from "../lib/product-relations";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  product: ProductVisualKey;
  title: string;
  question?: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref?: string;
  titleId: string;
  /** @deprecated eyebrow kept for call-site compatibility; product name comes from catalog */
  eyebrow?: string;
};

export function LuxuryProductHero({
  locale,
  product,
  title,
  question,
  body,
  primaryCta,
  secondaryCta,
  secondaryHref = "#scope",
  titleId,
}: Props) {
  const visuals = getProductVisuals(product);
  const meta = getProductMeta(product);
  const isAr = locale === "ar";
  const alt = isAr ? visuals.altAr : visuals.altEn;
  const productName = isAr ? meta.nameAr : meta.nameEn;
  const productAlt = isAr ? meta.nameEn : meta.nameAr;

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
        <p className="lux-product-hero__index">{meta.indexLabel}</p>
        <p className="lux-product-hero__product">{productName}</p>
        <p className="lux-product-hero__product-alt">{productAlt}</p>
        <h1 id={titleId} className="lux-display lux-product-hero__title">
          {title}
          {question ? <span className="lux-product-hero__question">{question}</span> : null}
        </h1>
        <p className="lux-product-hero__body">{body}</p>
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
