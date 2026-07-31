import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryEcosystemSection } from "./luxury-ecosystem-section";
import { LuxuryLeadForm } from "./luxury-lead-form";
import { LuxurySampleKitBand } from "./luxury-sample-kit-band";

export function LuxuryVillasPage({ locale }: { locale: Locale }) {
  const t = getLuxuryMessages(locale);
  const p = t.pages.villas;

  return (
    <>
      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.brand.tagline}</p>
          <div className="lux-divider-gold" />
          <h1 className="lux-display lux-heading mt-6">{p.title}</h1>
          <p className="lux-body mx-auto mt-4 max-w-2xl">{p.intro}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/design" className="lux-btn-primary">
              {p.ctaDesign}
            </Link>
            <Link href="/contact" className="lux-btn-outline-gold">
              {p.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <section id="kitchens" className="lux-section lux-section--cream scroll-mt-24">
        <div className="lux-container grid gap-8 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <div key={step.title} className="lux-process-step">
              <span className="lux-process-index">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="lux-display mt-4 text-lg">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <LuxuryEcosystemSection messages={t} />
      <LuxurySampleKitBand messages={t} />

      <section id="wardrobes" className="lux-section scroll-mt-24">
        <div className="lux-container max-w-xl">
          <LuxuryLeadForm
            messages={t}
            locale={locale}
            source="villas_page"
            defaultProjectType="villa"
            submitLabel={p.ctaContact}
          />
        </div>
      </section>
    </>
  );
}
