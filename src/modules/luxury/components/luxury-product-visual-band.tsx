import Image from "next/image";
import type { ProductVisualKey } from "../lib/product-visuals";
import { getProductVisuals } from "../lib/product-visuals";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  product: ProductVisualKey;
};

export function LuxuryProductVisualBand({ locale, product }: Props) {
  const visuals = getProductVisuals(product);
  const alt = locale === "ar" ? visuals.altAr : visuals.altEn;
  const caption = locale === "ar" ? visuals.midCaptionAr : visuals.midCaptionEn;

  return (
    <section className="lux-product-band" aria-label={caption}>
      <div className="lux-product-band__media">
        <Image
          src={visuals.mid}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="lux-product-band__shade" aria-hidden />
        <p className="lux-product-band__caption">{caption}</p>
      </div>
    </section>
  );
}
