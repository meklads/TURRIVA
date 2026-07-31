"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LUXURY_INSPIRATION_IMAGES } from "@/shared/i18n/messages/luxury-inspiration";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryInspirationSection({ messages }: Props) {
  const t = messages.inspiration;
  const [active, setActive] = useState(t.tabs[0]?.id ?? "kitchen");
  const image = LUXURY_INSPIRATION_IMAGES[active] ?? LUXURY_INSPIRATION_IMAGES.kitchen!;

  return (
    <section id="inspiration" className="lux-section lux-section--white scroll-mt-24">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.subtitle}</p>
      </div>
      <div className="lux-container mt-10 flex flex-wrap justify-center gap-2">
        {t.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`lux-inspiration-tab${active === tab.id ? " lux-inspiration-tab--active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="lux-container mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="lux-inspiration-media relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="text-center lg:text-start">
          <Link href="/design" className="lux-btn-primary inline-flex">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
