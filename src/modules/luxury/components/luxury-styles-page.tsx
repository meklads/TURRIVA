"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { localizePath } from "@/shared/i18n/path";
import { LUXURY_STYLE_IMAGES } from "@/shared/i18n/messages/luxury-style-catalog";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryStyleLightbox, LuxuryStyleZoomHint } from "./luxury-style-lightbox";

type StyleCategory = "italian" | "french" | "contemporary" | "minimal";
type FilterKey = "all" | StyleCategory;

type LightboxState = {
  src: string;
  title: string;
} | null;

export function LuxuryStylesPage({ locale }: { locale: Locale }) {
  const t = getLuxuryMessages(locale);
  const p = t.pages.styles;
  const [filter, setFilter] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: p.filters.all },
    { key: "italian", label: p.filters.italian },
    { key: "french", label: p.filters.french },
    { key: "contemporary", label: p.filters.contemporary },
    { key: "minimal", label: p.filters.minimal },
  ];

  const items = useMemo(
    () =>
      filter === "all" ? p.items : p.items.filter((item) => item.category === filter),
    [filter, p.items]
  );

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={p.title} intro={p.intro}>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-lux-ink-muted">{p.disclaimer}</p>
      </LuxuryMarketingHero>

      <section className="lux-section lux-section--cream pt-0">
        <div className="lux-container">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`lux-inspiration-tab${filter === tab.key ? " lux-inspiration-tab--active" : ""}`}
                onClick={() => setFilter(tab.key)}
                aria-pressed={filter === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="lux-styles-grid mt-10">
            {items.map((item) => {
              const image = LUXURY_STYLE_IMAGES[item.id];
              if (!image) return null;

              return (
                <article key={item.id} className="group lux-style-card">
                  <button
                    type="button"
                    className="lux-style-card__media lux-style-card__media--zoom"
                    aria-label={`${p.lightboxOpen}: ${item.title}`}
                    onClick={() => setLightbox({ src: image, title: item.title })}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <LuxuryStyleZoomHint label={p.lightboxOpen} />
                  </button>
                  <div className="lux-style-card__body">
                    <span className="lux-style-card__category">{p.filters[item.category]}</span>
                    <h2 className="lux-style-card__title">{item.title}</h2>
                    <p className="lux-style-card__desc">{item.description}</p>
                    <p className="lux-style-card__materials">{item.materials}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link href={localizePath("/contact?intent=design", locale)} className="lux-btn-primary inline-flex">
              {p.cta}
            </Link>
          </div>
        </div>
      </section>

      <LuxuryStyleLightbox
        open={lightbox !== null}
        src={lightbox?.src ?? ""}
        title={lightbox?.title ?? ""}
        closeLabel={p.lightboxClose}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
