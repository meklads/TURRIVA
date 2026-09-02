import Link from "next/link";
import Image from "next/image";
import { LuxuryFacadeImage } from "./luxury-facade-image";
import { LuxuryProjectFunnelForm } from "./luxury-project-funnel-form";
import { LuxuryStickyCta } from "./luxury-sticky-cta";
import { LuxuryHomeHero } from "./luxury-home-hero";
import { LuxuryTrustBar } from "./luxury-trust-bar";
import {
  getLuxuryMessages,
  LUXURY_PROJECT_IMAGES,
} from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";

type Props = {
  locale: Locale;
};

export function LuxuryHomePage({ locale }: Props) {
  const t = getLuxuryMessages(locale);
  const seo = getLuxurySeoMessages(locale);
  const lp = (path: string) => localizePath(path, locale);
  const isAr = locale === "ar";

  const paths = [
    { href: lp("/villas"), label: t.nav.villas, hint: isAr ? "فلل ومطابخ وخزائن" : "Villas, kitchens, wardrobes" },
    { href: lp("/projects"), label: t.nav.projects, hint: isAr ? "مطورون ومعارض" : "Developers & exhibitions" },
    { href: lp("/services"), label: seo.nav.services, hint: isAr ? "ضيافة · تجاري · نجارة" : "Hospitality · commercial · joinery" },
    { href: lp("/launch"), label: seo.nav.launch, hint: isAr ? "من CGI إلى التسليم" : "From CGI to handover" },
  ];

  return (
    <>
      <LuxuryHomeHero locale={locale} />
      <LuxuryTrustBar messages={t} />

      <section className="lux-section lux-section--white lux-home-proof">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.projects.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.projects.title}</h2>
          <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.projects.subtitle}</p>
        </div>
        <div className="lux-container mt-10 grid gap-5 sm:grid-cols-3">
          {t.projects.items.map((item, i) => {
            const src = LUXURY_PROJECT_IMAGES[i] ?? LUXURY_PROJECT_IMAGES[0];
            return (
              <figure key={item.title} className="lux-gallery-figure group">
                <div className="lux-gallery-media">
                  <Image
                    src={src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="lux-gallery-caption">
                  <span className="lux-gallery-category">{item.category}</span>
                  <span className="lux-display mt-1 block text-lg">{item.title}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="lux-container mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={lp("/our-work")} className="lux-btn-outline-gold">
            {t.nav.ourWork}
          </Link>
          <Link href={lp("/portfolio")} className="lux-btn-outline">
            {t.projects.cta}
          </Link>
        </div>
      </section>

      <section className="lux-section lux-section--linen lux-home-paths" aria-labelledby="home-paths-heading">
        <div className="lux-container max-w-5xl">
          <p className="lux-eyebrow text-center">{isAr ? "ابدأ من هنا" : "Start here"}</p>
          <h2 id="home-paths-heading" className="lux-display lux-heading mt-4 text-center text-2xl">
            {isAr ? "مسارات واضحة — بدون تشتيت" : "Clear paths — no clutter"}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {paths.map((path) => (
              <Link key={path.href} href={path.href} className="lux-home-path-card">
                <span className="lux-display text-lg">{path.label}</span>
                <span className="mt-1 block text-sm text-lux-ink-muted">{path.hint}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="brief" className="lux-cta-band" aria-labelledby="home-cta-heading">
        <div className="lux-container">
          <div className="lux-cta-band-grid">
            <LuxuryFacadeImage className="lux-cta-band-media" fillHeight sizes="(max-width: 900px) 100vw, 52vw" />
            <div className="lux-cta-band-panel">
              <p className="lux-eyebrow">{t.brand.tagline}</p>
              <div className="lux-divider-gold" />
              <h2 id="home-cta-heading" className="lux-display lux-heading mt-6">
                {t.cta.title}
              </h2>
              <p className="lux-body mt-4">{t.cta.subtitle}</p>
              <div className="lux-cta-band-form">
                <LuxuryProjectFunnelForm locale={locale} source="marketing_home" initialProjectType="villa" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LuxuryStickyCta locale={locale} label={t.hero.ctaPrimary} href={`${lp("/")}#brief`} source="marketing_home" />
    </>
  );
}
