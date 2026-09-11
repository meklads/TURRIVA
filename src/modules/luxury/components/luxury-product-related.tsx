import Image from "next/image";
import { LocalizedLink } from "@/shared/components/localized-link";
import type { Locale } from "@/shared/i18n/locale";
import type { ProductVisualKey } from "../lib/product-visuals";
import { getProductPager, getRelatedProducts, getRelatedSectionCopy } from "../lib/product-relations";

type Props = {
  locale: Locale;
  product: ProductVisualKey;
};

export function LuxuryProductRelated({ locale, product }: Props) {
  const copy = getRelatedSectionCopy(locale);
  const items = getRelatedProducts(product, locale);

  return (
    <section className="lux-section lux-section--white lux-product-related" aria-labelledby="product-related-title">
      <div className="lux-container">
        <p className="lux-eyebrow">{copy.eyebrow}</p>
        <h2 id="product-related-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
          {copy.title}
        </h2>
        <ul className="lux-product-related__grid mt-10">
          {items.map((item) => (
            <li key={item.href}>
              <LocalizedLink href={item.href} className="lux-product-related__card">
                <div className="lux-product-related__media">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="lux-product-related__body">
                  <p className="lux-product-related__number">{item.number}</p>
                  <h3 className="lux-display mt-1 text-xl text-lux-ink">{item.title}</h3>
                  <p className="lux-product-related__en">{item.subtitle}</p>
                  <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.blurb}</p>
                  <span className="lux-product-related__cta">{locale === "ar" ? "استكشف →" : "Explore →"}</span>
                </div>
              </LocalizedLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LuxuryProductPager({ locale, product }: Props) {
  const pager = getProductPager(product, locale);

  return (
    <nav className="lux-product-pager" aria-label={locale === "ar" ? "تنقل المنتجات" : "Product navigation"}>
      <div className="lux-container lux-product-pager__inner">
        <LocalizedLink href={pager.previous.href} className="lux-product-pager__link">
          <span className="lux-product-pager__dir">{pager.previous.label}</span>
          <span className="lux-product-pager__name">{pager.previous.title}</span>
        </LocalizedLink>
        <p className="lux-product-pager__index">{pager.label}</p>
        <LocalizedLink href={pager.next.href} className="lux-product-pager__link lux-product-pager__link--next">
          <span className="lux-product-pager__dir">{pager.next.label}</span>
          <span className="lux-product-pager__name">{pager.next.title}</span>
        </LocalizedLink>
      </div>
    </nav>
  );
}
