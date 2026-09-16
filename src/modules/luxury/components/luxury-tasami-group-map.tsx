import Image from "next/image";
import type { Locale } from "@/shared/i18n/locale";
import { GROUP_LINKS } from "@/shared/lib/seo-schema";

const COPY = {
  en: {
    eyebrow: "Tasami Group",
    title: "One group. Three specialized companies.",
    body: "Turriva is the spatial execution and physical delivery company within Tasami Group, alongside Graphics House and Bees Motion.",
    link: "Visit Tasami Group",
    alt: "Tasami Group structure: Graphics House, Turriva, and Bees Motion",
  },
  ar: {
    eyebrow: "مجموعة تسامي",
    title: "مجموعة واحدة. ثلاث شركات متخصصة.",
    body: "توريفا شركة التنفيذ المكاني والتسليم المادي ضمن مجموعة تسامي، إلى جانب جرافيكس هاوس وبيز موشن.",
    link: "زيارة مجموعة تسامي",
    alt: "هيكل مجموعة تسامي: جرافيكس هاوس وتوريفا وبيز موشن",
  },
} as const;

type Props = { locale: Locale };

export function LuxuryTasamiGroupMap({ locale }: Props) {
  const copy = COPY[locale];

  return (
    <section id="tasami-group" className="lux-section lux-section--cream lux-tasami-map scroll-mt-28" aria-labelledby="lux-tasami-map-title">
      <div className="lux-container">
        <div className="lux-section-intro lux-section-intro--center">
          <p className="lux-eyebrow">{copy.eyebrow}</p>
          <h2 id="lux-tasami-map-title" className="lux-display lux-heading mt-3">
            {copy.title}
          </h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.body}</p>
        </div>

        <figure className="lux-tasami-map__figure">
          <div className="lux-tasami-map__frame">
            <Image
              src="/brand/tasami/group-structure.png"
              alt={copy.alt}
              width={1536}
              height={1024}
              className="lux-tasami-map__img"
              sizes="(max-width: 1024px) 100vw, 84rem"
              priority
              unoptimized
            />
          </div>
          <figcaption className="lux-tasami-map__caption">
            <a href={GROUP_LINKS.tasami} target="_blank" rel="noopener noreferrer" className="lux-product-card__cta">
              {copy.link}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
