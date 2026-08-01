"use client";

import { useState } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryEcosystemSection } from "./luxury-ecosystem-section";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryPartnersStrip } from "./luxury-partners-strip";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
};

export function LuxuryProjectsPage({ messages: t, locale }: Props) {
  const p = t.pages.projects;
  const c = t.pages.contact;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [units, setUnits] = useState("");
  const [products, setProducts] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message: [
            `Company: ${company}`,
            `Units/area: ${units}`,
            `Products: ${products.join(", ")}`,
            message,
          ].join("\n"),
          locale,
          source: "b2b_projects",
          interest: "bespoke",
          projectType: "developer",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <LuxuryMarketingHero eyebrow={t.brand.tagline} title={p.title} intro={p.intro} />

      <section id="joinery" className="lux-section lux-section--linen scroll-mt-24">
        <div className="lux-container max-w-6xl">
          <div className="lux-marketing-grid sm:grid-cols-2 lg:grid-cols-4">
            {p.highlights.map((item) => (
              <div key={item.title} className="lux-pillar-card">
                <h2 className="lux-display text-lg">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryPartnersStrip messages={t} />
      <LuxuryEcosystemSection messages={t} />

      <LuxuryFormSplitSection
        image={
          <LuxuryBrandHeroImage
            className="lux-quote-section__media"
            fillHeight
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        }
      >
        <h2 className="lux-display text-2xl sm:text-3xl">{p.formTitle}</h2>
        {status === "success" ? (
          <p className="mt-6 rounded-xl bg-lux-gold-muted/50 px-4 py-3 text-sm">{c.formSuccess}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input
              required
              placeholder={c.formName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="lux-input"
            />
            <input
              required
              dir="ltr"
              placeholder={c.formPhone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="lux-input"
            />
            <input
              required
              placeholder={p.formCompany}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="lux-input"
            />
            <input
              placeholder={p.formUnits}
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              className="lux-input"
            />
            <fieldset>
              <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {p.formProducts}
              </legend>
              <div className="flex flex-wrap gap-2">
                {p.productOptions.map((opt) => (
                  <label key={opt.value} className="lux-chip-check">
                    <input
                      type="checkbox"
                      checked={products.includes(opt.value)}
                      onChange={(e) =>
                        setProducts((prev) =>
                          e.target.checked ? [...prev, opt.value] : prev.filter((v) => v !== opt.value)
                        )
                      }
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <textarea
              rows={4}
              placeholder={c.formMessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="lux-input min-h-[7rem]"
            />
            {status === "error" && <p className="text-sm text-red-700">{c.formError}</p>}
            <button type="submit" disabled={status === "loading"} className="lux-btn-primary">
              {status === "loading" ? "…" : p.formSubmit}
            </button>
          </form>
        )}
      </LuxuryFormSplitSection>
    </>
  );
}
