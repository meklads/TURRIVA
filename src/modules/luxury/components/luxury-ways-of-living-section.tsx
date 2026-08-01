"use client";

import { useEffect, useRef } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const VIDEO_SRC = "/brand/ways-of-living.webm";
const POSTER_SRC = "/brand/ways-of-living-poster.jpg";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryWaysOfLivingSection({ messages }: Props) {
  const t = messages.waysOfLiving;
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
        else video.pause();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="lux-ways-of-living" aria-labelledby="ways-of-living-heading">
      <div className="lux-container lux-ways-of-living__header text-center">
        <h2 id="ways-of-living-heading" className="lux-display lux-heading">
          {t.title}
        </h2>
        {t.subtitle ? <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p> : null}
      </div>
      <video
        ref={videoRef}
        className="lux-ways-of-living__video"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        poster={POSTER_SRC}
        aria-label={t.title}
      >
        <source src={VIDEO_SRC} type="video/webm" />
      </video>
    </section>
  );
}
