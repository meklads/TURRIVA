import Image from "next/image";
import Link from "next/link";
import {
  getLuxuryMessages,
  LUXURY_IMAGES,
  LUXURY_PROJECT_IMAGES,
} from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LuxuryCapabilitiesSection } from "./luxury-capabilities-section";
import { LuxuryExecutionSection } from "./luxury-execution-section";
import { LuxuryHomeHero } from "./luxury-home-hero";
import { LuxuryHomeIntro } from "./luxury-home-intro";
import { LuxuryTrustStats } from "./luxury-trust-stats";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  locale: Locale;
};

export function LuxuryHomePage({ locale }: Props) {
  const t = getLuxuryMessages(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const serviceImages = [
    LUXURY_IMAGES.interior,
    LUXURY_IMAGES.construction,
    LUXURY_IMAGES.fitout,
  ];

  return (
    <>
      <LuxuryHomeHero locale={locale} />
      <LuxuryHomeIntro messages={t} />
      <LuxuryTrustStats messages={t} />
      <LuxuryCapabilitiesSection messages={t} />
      <LuxuryExecutionSection messages={t} />

      <section id="services" className="lux-section scroll-mt-24">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.services.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.services.title}</h2>
        </div>
        <div className="lux-container mt-16 flex flex-col gap-16 lg:gap-24">
          {t.services.items.map((item, i) => {
            const image = serviceImages[i] ?? LUXURY_IMAGES.interior;
            const reverse = i % 2 === 1;
            return (
              <article
                key={item.title}
                className={`lux-editorial-split ${reverse ? "lux-editorial-split--reverse" : ""}`}
              >
                <div className="lux-editorial-media lux-editorial-media--service">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="lux-editorial-copy flex flex-col justify-center">
                  <h3 className="lux-display text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="lux-body mt-4 max-w-md">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lux-gold transition-colors hover:text-lux-gold-light"
                  >
                    {item.cta}
                    <Arrow className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.why.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.why.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-px overflow-hidden rounded-sm border border-lux-sand bg-lux-sand sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item) => (
            <div key={item.title} className="bg-lux-gold-muted/25 p-8 lg:p-9">
              <h3 className="lux-display text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lux-section">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.projects.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.projects.title}</h2>
          <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{t.projects.subtitle}</p>
        </div>
        <div className="lux-container mt-14 grid gap-6 lg:grid-cols-3">
          {t.projects.items.map((item, i) => {
            const src = LUXURY_PROJECT_IMAGES[i] ?? LUXURY_PROJECT_IMAGES[0];
            return (
              <figure key={item.title} className="lux-gallery-figure group">
                <div className="lux-gallery-media">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
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
        <div className="lux-container mt-12 text-center">
          <Link href="/our-work" className="lux-btn-outline">
            {t.projects.cta}
          </Link>
        </div>
      </section>

      <section className="lux-section lux-section--cream">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.process.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.process.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-8 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <div key={step.title} className="lux-process-step">
              <span className="lux-process-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="lux-display mt-4 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lux-section">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{t.testimonials.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display lux-heading mt-6">{t.testimonials.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-8 md:grid-cols-2">
          {t.testimonials.items.map((item) => (
            <blockquote key={item.quote} className="lux-quote">
              <p className="lux-display text-xl leading-snug text-lux-ink">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-8 border-t border-lux-sand pt-5">
                <p className="text-sm font-semibold text-lux-ink">{item.author}</p>
                <p className="text-xs text-lux-ink-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="lux-cta-band">
        <div className="lux-container text-center">
          <h2 className="lux-display lux-heading text-white">{t.cta.title}</h2>
          <p className="lux-body mx-auto mt-4 max-w-xl text-white/75">{t.cta.subtitle}</p>
          <Link href="/contact" className="lux-btn-primary lux-btn-primary--on-dark mt-10">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
