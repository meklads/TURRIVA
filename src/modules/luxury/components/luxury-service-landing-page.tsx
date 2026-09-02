import Image from "next/image";
import Link from "next/link";
import { LuxuryMarketingHero } from "./luxury-marketing-hero";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryFormSplitSection } from "./luxury-form-split-section";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getServiceLanding, serviceLandingText } from "../lib/service-landings";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { buildWhatsAppHref } from "@/shared/lib/whatsapp";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = {
  locale: Locale;
  slug: string;
};

export function LuxuryServiceLandingPage({ locale, slug }: Props) {
  const landing = getServiceLanding(slug);
  if (!landing) return null;

  const text = serviceLandingText(landing, locale);
  const lp = (path: string) => localizePath(path, locale);

  return (
    <>
      <LuxuryMarketingHero eyebrow="Turriva" title={text.title} intro={text.intro}>
        <Link href={`#brief`} className="lux-btn-primary">
          {locale === "ar" ? "قدّم ملخص المشروع" : "Submit project brief"}
        </Link>
        <a
          href={buildWhatsAppHref(text.whatsapp)}
          className="lux-btn-outline-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </LuxuryMarketingHero>

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lux-card">
              <Image src={landing.image} alt={text.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="lux-eyebrow">{locale === "ar" ? "نطاق التنفيذ" : "Execution scope"}</p>
              <ul className="mt-4 space-y-3">
                {text.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-lux-ink-soft">
                    <span className="mt-2 h-px w-4 shrink-0 bg-lux-gold" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg bg-lux-gold-muted/40 px-4 py-3 text-sm text-lux-ink-soft">{text.proof}</p>
              {landing.relatedCaseSlug ? (
                <LocalizedLink href={`/our-work/${landing.relatedCaseSlug}`} className="mt-6 inline-flex text-sm font-semibold text-lux-gold hover:underline">
                  {locale === "ar" ? "عرض دراسة الحالة ←" : "View case study →"}
                </LocalizedLink>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <LuxuryFormSplitSection
        id="brief"
        tone="white"
        image={
          <div className="relative h-full min-h-[18rem] w-full overflow-hidden rounded-xl">
            <Image src={landing.image} alt="" fill className="object-cover" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        }
      >
        <LuxuryProjectFunnelForm
          locale={locale}
          source={landing.source}
          initialProjectType={landing.projectType}
          whatsappMessage={text.whatsapp}
        />
      </LuxuryFormSplitSection>

      <LuxuryStickyCta
        locale={locale}
        label={locale === "ar" ? "قدّم ملخص المشروع" : "Submit brief"}
        href={`${lp(`/services/${slug}`)}#brief`}
        whatsappMessage={text.whatsapp}
        source={landing.source}
      />
    </>
  );
}
