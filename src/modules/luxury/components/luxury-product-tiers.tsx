"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { getConversionCopy, PRODUCT_TIERS } from "../lib/conversion-copy";

type Props = { locale: Locale };

function AutoPlayMedia({
  type,
  src,
  poster,
  title,
}: {
  type: "video" | "image";
  src: string;
  poster?: string;
  title: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type !== "video") return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          void el.play().catch(() => undefined);
        } else {
          el.pause();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [type]);

  if (type === "video") {
    return (
      <video
        ref={ref}
        className="lux-tier-card__media-el"
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return <Image src={src} alt={title} fill className="object-cover" sizes="(max-width: 900px) 100vw, 33vw" />;
}

export function LuxuryProductTiersSection({ locale }: Props) {
  const copy = getConversionCopy(locale);
  const isAr = locale === "ar";

  return (
    <section id="solutions" className="lux-section lux-section--white lux-tiers scroll-mt-28" aria-labelledby="lux-tiers-title">
      <div className="lux-container">
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{copy.tiersEyebrow}</p>
          <h2 id="lux-tiers-title" className="lux-display lux-heading mt-3">
            {copy.tiersTitle}
          </h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.tiersIntro}</p>
        </div>

        <ul className="lux-tiers__grid mt-10">
          {PRODUCT_TIERS.map((tier) => {
            const title = isAr ? tier.titleAr : tier.titleEn;
            const eyebrow = isAr ? tier.eyebrowAr : tier.eyebrowEn;
            const body = isAr ? tier.bodyAr : tier.bodyEn;
            const points = isAr ? tier.pointsAr : tier.pointsEn;

            return (
              <li key={tier.id} className="lux-tier-card">
                <div className="lux-tier-card__media">
                  <AutoPlayMedia type={tier.media.type} src={tier.media.src} poster={tier.media.poster} title={title} />
                </div>
                <div className="lux-tier-card__body">
                  <p className="lux-tier-card__number">{tier.number}</p>
                  <p className="lux-tier-card__eyebrow">{eyebrow}</p>
                  <h3 className="lux-display mt-2 text-xl text-lux-ink">{title}</h3>
                  <p className="lux-body mt-3 text-sm text-lux-ink-soft">{body}</p>
                  <ul className="lux-tier-card__points">
                    {points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Link href={localizePath(tier.href, locale)} className="lux-product-card__cta mt-4 inline-flex">
                    {isAr ? "استكشف" : "Explore"}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
