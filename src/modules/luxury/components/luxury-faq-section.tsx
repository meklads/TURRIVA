"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryFaqSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="lux-section lux-section--linen scroll-mt-24">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
      </div>
      <div className="lux-container mt-10 max-w-2xl space-y-2">
        {t.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="lux-faq-item">
              <button
                type="button"
                className="lux-faq-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform${isOpen ? " rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="lux-faq-answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
