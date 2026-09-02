import { LocalizedLink } from "@/shared/components/localized-link";
import { PROFESSIONAL_RESOURCES } from "../lib/professionals-content";
import type { Locale } from "@/shared/i18n/locale";
import type { ProfessionalsPageCopy } from "@/shared/i18n/messages/luxury-seo-pages";
import { localizePath } from "@/shared/i18n/path";
import { GROUP_LINKS } from "@/shared/lib/seo-schema";

type Props = {
  locale: Locale;
  copy: ProfessionalsPageCopy;
};

export function LuxuryProfessionalsResources({ locale, copy }: Props) {
  const isAr = locale === "ar";
  const lp = (path: string) => localizePath(path, locale);

  return (
    <>
      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-6xl">
          <p className="lux-eyebrow text-center">{copy.resourcesEyebrow}</p>
          <h2 className="lux-display lux-heading mt-4 text-center text-2xl">{copy.resourcesTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PROFESSIONAL_RESOURCES.map((resource) => (
              <article key={resource.slug} className="rounded-xl border border-lux-sand bg-white p-6 shadow-lux-card">
                <h3 className="lux-display text-lg">{isAr ? resource.titleAr : resource.titleEn}</h3>
                <p className="lux-body mt-2 text-sm text-lux-ink-soft">{isAr ? resource.summaryAr : resource.summaryEn}</p>
                <a
                  href={`/api/professionals/file/${resource.slug}`}
                  className="lux-btn-outline-gold mt-5 inline-flex text-sm"
                  download
                >
                  {copy.downloadLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-3xl text-center">
          <h2 className="lux-display text-xl">{copy.nextStepsTitle}</h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.nextStepsIntro}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LocalizedLink href="/contact?intent=quote" className="lux-btn-primary">
              {copy.nextStepsBrief}
            </LocalizedLink>
            <LocalizedLink href="/portfolio" className="lux-btn-outline-gold">
              {copy.nextStepsPortfolio}
            </LocalizedLink>
          </div>
          <p className="mt-10 text-sm text-lux-ink-muted">
            {copy.groupNote}{" "}
            <a href={GROUP_LINKS.tasami} target="_blank" rel="noopener noreferrer" className="font-semibold text-lux-gold hover:underline">
              {copy.groupLink}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
