"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import type { CaseStudy } from "../lib/case-studies";

type Props = {
  locale: Locale;
  studies: readonly CaseStudy[];
  eyebrow: string;
  viewLabel: string;
};

export function LuxuryCaseStudiesHero({ locale, studies, eyebrow, viewLabel }: Props) {
  const isAr = locale === "ar";
  const [index, setIndex] = useState(0);
  const total = studies.length;
  const active = studies[index] ?? studies[0];

  useEffect(() => {
    if (total < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 6500);
    return () => window.clearInterval(id);
  }, [total]);

  if (!active) return null;

  const title = isAr ? active.titleAr : active.titleEn;
  const tagline =
    (isAr ? active.heroTaglineAr : active.heroTaglineEn) ||
    (isAr ? active.summaryAr : active.summaryEn);
  const category = isAr ? active.categoryAr : active.categoryEn;

  return (
    <section className="lux-case-hero" aria-roledescription="carousel" aria-label={eyebrow}>
      <div className="lux-case-hero__media" aria-hidden>
        {studies.map((study, i) => (
          <div
            key={study.slug}
            className={`lux-case-hero__slide${i === index ? " is-active" : ""}`}
          >
            <Image
              src={study.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="lux-case-hero__shade" />
      </div>

      <div className="lux-container lux-case-hero__content">
        <p className="lux-case-hero__eyebrow">{eyebrow}</p>
        <p className="lux-case-hero__category">{category}</p>
        <h1 className="lux-display lux-case-hero__title">{title}</h1>
        <p className="lux-case-hero__tagline">{tagline}</p>
        <div className="lux-case-hero__actions">
          <Link href={localizePath(`/our-work/${active.slug}`, locale)} className="lux-btn-primary">
            {viewLabel}
          </Link>
        </div>

        <div className="lux-case-hero__nav">
          <div className="lux-case-hero__dots" role="tablist" aria-label={eyebrow}>
            {studies.map((study, i) => (
              <button
                key={study.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={isAr ? study.titleAr : study.titleEn}
                className={`lux-case-hero__dot${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          {total > 1 ? (
            <div className="lux-case-hero__arrows">
              <button
                type="button"
                className="lux-case-hero__arrow"
                aria-label={isAr ? "السابق" : "Previous"}
                onClick={() => setIndex((current) => (current - 1 + total) % total)}
              >
                {isAr ? "→" : "←"}
              </button>
              <button
                type="button"
                className="lux-case-hero__arrow"
                aria-label={isAr ? "التالي" : "Next"}
                onClick={() => setIndex((current) => (current + 1) % total)}
              >
                {isAr ? "←" : "→"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
