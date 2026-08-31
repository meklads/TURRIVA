import { ExternalLink } from "lucide-react";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import type { Locale } from "@/shared/i18n/locale";

export function LuxuryGroupEcosystemSection({ locale }: { locale: Locale }) {
  const t = getLuxurySeoMessages(locale).groupEcosystem;

  return (
    <section className="lux-section lux-section--linen" aria-labelledby="group-ecosystem">
      <div className="lux-container max-w-6xl">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <h2 id="group-ecosystem" className="lux-display lux-heading mt-4">
          {t.title}
        </h2>
        <p className="lux-body mx-auto mt-4 max-w-3xl text-lux-ink-soft">{t.intro}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {t.companies.map((company) => (
            <article
              key={company.name}
              className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card transition-shadow hover:shadow-lg"
            >
              <h3 className="lux-display text-lg">{company.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-lux-gold">{company.tagline}</p>
              <p className="lux-body mt-3 text-sm text-lux-ink-soft">{company.description}</p>
              <a
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lux-gold hover:underline"
              >
                {company.cta}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <p className="rounded-lg bg-lux-gold-muted/40 px-4 py-3 text-sm text-lux-ink-soft">{t.ruwaqNote}</p>
          <p className="rounded-lg bg-lux-gold-muted/40 px-4 py-3 text-sm text-lux-ink-soft">{t.dotForLifeNote}</p>
        </div>
      </div>
    </section>
  );
}
