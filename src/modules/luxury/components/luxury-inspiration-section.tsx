"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_INSPIRATION_IMAGES } from "@/shared/i18n/messages/luxury-inspiration";

const AUTO_INTERVAL_MS = 6000;

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryInspirationSection({ messages }: Props) {
  const t = messages.inspiration;
  const items = t.items;
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(items[0]?.id ?? "kitchen");
  const [autoPlay, setAutoPlay] = useState(true);
  const [inView, setInView] = useState(false);
  const [animTick, setAnimTick] = useState(0);

  const selectTab = useCallback((id: string) => {
    setAutoPlay(false);
    setActive(id);
    setAnimTick((n) => n + 1);
  }, []);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = window.setInterval(() => {
      setActive((current) => {
        const index = items.findIndex((item) => item.id === current);
        const next = items[(index + 1) % items.length];
        return next?.id ?? current;
      });
      setAnimTick((n) => n + 1);
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [autoPlay, items]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) setAutoPlay(false);

    const onChange = () => {
      if (reducedMotion.matches) setAutoPlay(false);
    };
    reducedMotion.addEventListener("change", onChange);
    return () => reducedMotion.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.18 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(0, items.findIndex((item) => item.id === active));
  const item = items[activeIndex] ?? items[0]!;
  const image = LUXURY_INSPIRATION_IMAGES[item.id] ?? LUXURY_INSPIRATION_IMAGES.kitchen!;
  const reverse = activeIndex % 2 === 1;

  return (
    <section
      ref={sectionRef}
      id="inspiration"
      className={`lux-section lux-section--linen lux-inspiration scroll-mt-24${inView ? " lux-inspiration--in-view" : ""}`}
    >
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
        <Link href="/styles" className="lux-inspiration-ghost-btn mt-8 inline-flex">
          {t.stylesLink}
        </Link>
      </div>

      <div className="lux-container mt-10 flex flex-wrap justify-center gap-2">
        {items.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`lux-inspiration-tab${active === tab.id ? " lux-inspiration-tab--active" : ""}`}
            onClick={() => selectTab(tab.id)}
            aria-pressed={active === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="lux-inspiration-rows lux-inspiration-rows--single">
        <article
          key={`${item.id}-${animTick}`}
          className={`lux-inspiration-row lux-inspiration-row--animate${reverse ? " lux-inspiration-row--reverse" : ""}`}
        >
          <div className="lux-container lux-inspiration-row__inner">
            <div className="lux-inspiration-row__media">
              <Image
                src={image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 78vw"
                priority={activeIndex === 0}
                unoptimized
              />
            </div>
            <div className="lux-inspiration-row__aside">
              <div className="lux-inspiration-card">
                <span className="lux-inspiration-card__label">{item.label}</span>
                <h3 className="lux-inspiration-card__title">{item.title}</h3>
                <p className="lux-inspiration-card__desc">{item.description}</p>
              </div>
              <Link href={item.href} className="lux-inspiration-ghost-btn lux-inspiration-row__cta">
                {item.cta}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
