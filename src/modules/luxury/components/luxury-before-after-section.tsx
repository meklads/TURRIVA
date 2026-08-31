"use client";

import { useEffect, useRef } from "react";
import { ClientLocalizedLink } from "@/shared/components/client-localized-link";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const RAFAL_LOOP_MP4 = "/brand/graphics-house/rafal-pavilions-loop.mp4";
const RAFAL_LOOP_WEBM = "/brand/graphics-house/rafal-pavilions-loop.webm";
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
      className="lux-section lux-section--white lux-delivery-showcase"
      aria-labelledby="delivery-showcase-heading"
    >
      <div className="lux-container lux-editorial-split">
        <div className="lux-editorial-media lux-delivery-showcase__media">
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
            <source src={RAFAL_LOOP_MP4} type="video/mp4" />
            <source src={RAFAL_LOOP_WEBM} type="video/webm" />
          </video>
        </div>

        <div className="lux-editorial-copy lux-editorial-copy--panel">
          <p className="lux-eyebrow">{t.eyebrow}</p>
          <h2 id="delivery-showcase-heading" className="lux-display lux-heading mt-5">
            {t.title}
          </h2>
          <div className="lux-delivery-showcase__copy mt-5">
            <p className="lux-body text-lux-ink-muted">{t.subtitleLine1}</p>
            <p className="lux-body mt-3 text-lux-ink-muted">{t.subtitleLine2}</p>
          </div>
          <p className="lux-delivery-showcase__project">
            <span className="lux-delivery-showcase__project-name">{t.projectName}</span>
            <span className="lux-delivery-showcase__project-credit">{t.projectCredit}</span>
          </p>
          <ClientLocalizedLink href="/our-work" className="lux-btn-outline lux-delivery-showcase__cta">
            {t.cta}
            <span aria-hidden>→</span>
          </ClientLocalizedLink>
        </div>
      </div>
    </section>
  );
}
