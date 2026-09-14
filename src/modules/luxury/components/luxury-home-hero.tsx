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
            <p className="lux-eyebrow">{copy.heroEyebrow}</p>
            <h1 className="lux-display lux-heading mt-4 sm:mt-5">
              {copy.heroTitle}
              <span className="lux-hero-title-accent">{copy.heroTitleAccent}</span>
            </h1>
            <p className="lux-hero-pillars">{copy.heroPillars}</p>
            <div className="lux-flourish" aria-hidden />
            <p className="lux-body max-w-lg">{copy.heroSubtitle}</p>
            <p className="lux-hero-capability">{copy.heroCapability}</p>
            <div className="lux-hero-cta flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" className="lux-btn-primary" onClick={() => openDemo({ source: "home_hero" })}>
                {copy.ctaDemo}
              </button>
              <a href="#solutions" className="lux-btn-outline-gold">
                {copy.ctaExplore}
              </a>
            </div>
            <ul className="lux-hero-glow-stats" aria-label={isAr ? "مؤشرات" : "Highlights"}>
              <li className="lux-glow-stat">
                <strong>15+</strong>
                <span>{isAr ? "عاماً من خبرة الفريق" : "years of team experience"}</span>
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
                  ? "مساحة جاهزة للعرض من تنفيذ توريفا"
                  : "A presentation-ready space delivered by Turriva"
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
