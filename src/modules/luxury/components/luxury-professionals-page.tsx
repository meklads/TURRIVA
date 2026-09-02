import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryProfessionalsGate } from "./luxury-professionals-gate";
import { LuxuryProfessionalsResources } from "./luxury-professionals-resources";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  hasAccess: boolean;
};

export function LuxuryProfessionalsPage({ locale, hasAccess }: Props) {
  const seo = getLuxurySeoMessages(locale);
  const copy = seo.professionalsPage;

  return (
    <>
      <LuxuryMarketingHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-6xl">
          <p className="lux-eyebrow text-center">{copy.audienceEyebrow}</p>
          <h2 className="lux-display lux-heading mt-4 text-center text-2xl">{copy.audienceTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.audiences.map((item) => (
              <div key={item.title} className="rounded-xl border border-lux-sand bg-white px-5 py-6 text-center shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-lux-gold">{item.title}</p>
                <p className="lux-body mt-2 text-sm text-lux-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow text-center">{copy.includesEyebrow}</p>
          <h2 className="lux-display lux-heading mt-4 text-center text-2xl">{copy.includesTitle}</h2>
          <ul className="mt-8 space-y-3">
            {copy.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-lux-ink-soft">
                <span className="mt-2 h-px w-4 shrink-0 bg-lux-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          {!hasAccess ? (
            <p className="mt-8 text-center text-sm font-semibold text-lux-gold">{copy.lockHint}</p>
          ) : null}
        </div>
      </section>

      {hasAccess ? <LuxuryProfessionalsResources locale={locale} copy={copy} /> : <LuxuryProfessionalsGate locale={locale} copy={copy} />}
    </>
  );
}
