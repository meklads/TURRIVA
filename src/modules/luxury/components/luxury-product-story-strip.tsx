import Image from "next/image";
import type { ProductVisualKey } from "../lib/product-visuals";
import { getProductVisuals } from "../lib/product-visuals";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  product: ProductVisualKey;
};

export function LuxuryProductStoryStrip({ locale, product }: Props) {
  const visuals = getProductVisuals(product);
  const isAr = locale === "ar";

  return (
    <section className="lux-product-story" aria-label={isAr ? "سرد بصري للمنتج" : "Visual product story"}>
      <div className="lux-container">
        <ol className="lux-product-story__grid">
          {visuals.story.map((frame, index) => (
            <li key={`${frame.src}-${frame.captionEn}`} className="lux-product-story__item">
              <div className="lux-product-story__media">
                <Image
                  src={frame.src}
                  alt={isAr ? frame.captionAr : frame.captionEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="lux-product-story__num">{String(index + 1).padStart(2, "0")}</p>
              <p className="lux-product-story__caption">{isAr ? frame.captionAr : frame.captionEn}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
