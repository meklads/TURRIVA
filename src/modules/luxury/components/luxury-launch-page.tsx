import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LuxuryBrandHeroImage } from "./luxury-brand-hero-image";
import { LocalizedLink } from "@/shared/components/localized-link";
import { LAUNCH_STEPS, getLaunchPageCopy } from "../lib/launch-playbook";
import type { Locale } from "@/shared/i18n/locale";
import { withUtm } from "@/shared/lib/whatsapp";

type Props = { locale: Locale };

export function LuxuryLaunchPage({ locale }: Props) {
  const copy = getLaunchPageCopy(locale);
  const isAr = locale === "ar";

  return (
    <>
      <LuxuryMarketingHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro}>
        <LocalizedLink href="/contact?intent=exhibition" className="lux-btn-primary">
          {copy.ctaBrief}
        </LocalizedLink>
        <LocalizedLink href="/our-work" className="lux-btn-outline-gold">
          {copy.ctaWork}
        </LocalizedLink>
      </LuxuryMarketingHero>

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-6xl">
          <p className="lux-eyebrow text-center">{copy.stepsEyebrow}</p>
          <h2 className="lux-display lux-heading mt-4 text-center text-2xl">{copy.stepsTitle}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {LAUNCH_STEPS.map((step) => (
              <article key={step.index} className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card">
                <p className="text-xs font-semibold tracking-widest text-lux-gold">{step.index}</p>
                <h3 className="lux-display mt-3 text-xl">{isAr ? step.titleAr : step.titleEn}</h3>
                <p className="lux-body mt-3 text-sm text-lux-ink-soft">{isAr ? step.bodyAr : step.bodyEn}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                  {isAr ? step.ownerAr : step.ownerEn}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-3xl">
          <h2 className="lux-display text-center text-xl">{copy.whyTitle}</h2>
          <ul className="mt-8 space-y-3">
            {copy.whyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-lux-ink-soft">
                <span className="mt-2 h-px w-4 shrink-0 bg-lux-gold" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-xl border border-lux-sand bg-lux-gold-muted/30 px-5 py-4">
            <h3 className="text-sm font-semibold text-lux-ink">{copy.proofTitle}</h3>
            <p className="mt-2 text-sm text-lux-ink-soft">{copy.proofBody}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <LocalizedLink href="/our-work/rafal-pavilions" className="text-sm font-semibold text-lux-gold hover:underline">
                Rafal Pavilions →
              </LocalizedLink>
              <LocalizedLink href="/our-work/humanity-exhibition-mwl" className="text-sm font-semibold text-lux-gold hover:underline">
                Humanity Exhibition →
              </LocalizedLink>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-lux-ink-muted">
            {copy.groupNote}{" "}
            {copy.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " · " : null}
                <a href={withUtm(link.href, "launch_playbook")} target="_blank" rel="noopener noreferrer" className="font-semibold text-lux-gold hover:underline">
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>

      <LuxuryFormSplitSection
        id="brief"
        tone="linen"
        image={
          <LuxuryBrandHeroImage className="lux-quote-section__media" fillHeight sizes="(max-width: 900px) 100vw, 52vw" />
        }
      >
        <LuxuryProjectFunnelForm locale={locale} source="launch_playbook" initialProjectType="exhibition" />
      </LuxuryFormSplitSection>
    </>
  );
}
