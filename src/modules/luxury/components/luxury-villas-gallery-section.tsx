import Link from "next/link";
import Image from "next/image";
import { LUXURY_PROJECT_IMAGES, type LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryVillasGallerySection({ messages }: { messages: LuxuryMessages }) {
  const g = messages.pages.villas.gallery;

  return (
    <section className="lux-section lux-section--cream">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{g.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{g.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{g.subtitle}</p>
      </div>
      <div className="lux-container mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {g.items.map((item, i) => {
          const src = LUXURY_PROJECT_IMAGES[i] ?? LUXURY_PROJECT_IMAGES[0];
          return (
            <figure key={item.title} className="lux-gallery-figure group">
              <div className="lux-gallery-media">
                <Image
                  src={src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="lux-gallery-caption">
                <span className="lux-gallery-category">{item.category}</span>
                <span className="lux-display mt-1 block text-lg">{item.title}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="lux-container mt-12 text-center">
        <Link href="/portfolio" className="lux-btn-outline-gold">
          {g.cta}
        </Link>
      </div>
    </section>
  );
}
