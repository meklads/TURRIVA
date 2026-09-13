"use client";

import Image from "next/image";
import type { Locale } from "@/shared/i18n/locale";
import { getConversionCopy } from "../lib/conversion-copy";
import { LUXURY_HERO_IMAGE } from "../lib/nav";
import { useConversionActions } from "./luxury-conversion-provider";

type Props = { locale: Locale };

export function LuxuryHomeHero({ locale }: Props) {
  const copy = getConversionCopy(locale);
  const { openDemo } = useConversionActions();
  const isAr = locale === "ar";

  return (
    <section className="lux-hero" aria-label="Hero">
      <div className="lux-container lux-hero-inner">
        <div className="lux-hero-copy">
          <div className="lux-hero-copy-inner lux-reveal">
            <p className="lux-eyebrow">{isAr ? "تنفيذ مكاني لإطلاق المبيعات · مجموعة تسامي" : "Spatial execution for sales launch · Tasami Group"}</p>
            <h1 className="lux-display lux-heading mt-4 sm:mt-5">
              {copy.heroTitle}
              <span className="lux-hero-title-accent">{copy.heroTitleAccent}</span>
            </h1>
            <div className="lux-flourish" aria-hidden />
            <p className="lux-body max-w-lg">{copy.heroSubtitle}</p>
            <div className="lux-hero-cta mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <button type="button" className="lux-btn-primary" onClick={() => openDemo({ source: "home_hero" })}>
                {copy.ctaDemo}
              </button>
              <a href="#solutions" className="lux-btn-outline-gold">
                {copy.ctaExplore}
              </a>
            </div>
            <ul className="lux-hero-glow-stats mt-8" aria-label={isAr ? "مؤشرات" : "Highlights"}>
              <li className="lux-glow-stat">
                <strong>3</strong>
                <span>{isAr ? "أسابيع لمسارات الإطلاق السريعة" : "weeks on fast-track launches"}</span>
              </li>
              <li className="lux-glow-stat">
                <strong>100%</strong>
                <span>{isAr ? "تسليم ميداني متكامل" : "integrated field delivery"}</span>
              </li>
              <li className="lux-glow-stat">
                <strong>15+</strong>
                <span>{isAr ? "عاماً من خبرة التسليم" : "years of delivery craft"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lux-hero-media">
          <div className="lux-hero-media-frame">
            <Image
              src={LUXURY_HERO_IMAGE}
              alt={
                isAr
                  ? "مساحة داخلية فاخرة من تنفيذ توريفا"
                  : "Premium interior space delivered by Turriva"
              }
              fill
              priority
              unoptimized
              className="lux-hero-media-img object-cover object-[center_45%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
