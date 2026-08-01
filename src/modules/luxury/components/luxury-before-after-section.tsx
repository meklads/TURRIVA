"use client";

import { useEffect, useRef } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const RAFAL_LOOP = "/brand/graphics-house/rafal-pavilions-loop.webm";
const RAFAL_POSTER = "/brand/graphics-house/rafal-pavilions-poster.jpg";

export function LuxuryBeforeAfterSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.beforeAfter;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) play();
        else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lux-delivery-showcase"
      aria-labelledby="delivery-showcase-heading"
    >
      <div className="lux-container lux-delivery-showcase__header text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="delivery-showcase-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
        <p className="lux-delivery-showcase__project">
          <span className="lux-delivery-showcase__project-name">{t.projectName}</span>
          <span className="lux-delivery-showcase__project-credit">{t.projectCredit}</span>
        </p>
      </div>

      <video
        ref={videoRef}
        className="lux-delivery-showcase__video"
        muted
        loop
        playsInline
        preload="metadata"
        poster={RAFAL_POSTER}
        aria-label={t.projectName}
      >
        <source src={RAFAL_LOOP} type="video/webm" />
      </video>
    </section>
  );
}
