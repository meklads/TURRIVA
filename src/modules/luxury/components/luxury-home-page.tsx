import Image from "next/image";
import Link from "next/link";
import {
  getLuxuryMessages,
  LUXURY_IMAGES,
} from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import {
  Compass,
  Gem,
  Ruler,
  Clock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

type Props = {
  locale: Locale;
};

export function LuxuryHomePage({ locale }: Props) {
  const t = getLuxuryMessages(locale);
  const arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const Arrow = arrow;

  const serviceImages = [
    LUXURY_IMAGES.interior,
    LUXURY_IMAGES.construction,
    LUXURY_IMAGES.fitout,
  ];

  const whyIcons = [Compass, Gem, Ruler, Clock];

  const projectImages = [
    LUXURY_IMAGES.project1,
    LUXURY_IMAGES.project2,
    LUXURY_IMAGES.project3,
    LUXURY_IMAGES.project4,
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src={LUXURY_IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lux-ivory/95 via-lux-ivory/80 to-lux-ivory/20" />
        <div className="relative lux-container flex min-h-[85vh] items-center py-20">
          <div className="max-w-xl lux-reveal">
            <h1 className="lux-display whitespace-pre-line text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="lux-body mt-6 max-w-lg">{t.hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="lux-btn-primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link href="/our-work" className="lux-btn-outline">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="lux-section lux-section--cream">
        <div className="lux-container text-center">
          <p className="lux-eyebrow">{t.services.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{t.services.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-8 md:grid-cols-3">
          {t.services.items.map((item, i) => {
            const image = serviceImages[i] ?? LUXURY_IMAGES.interior;
            return (
            <article key={item.title} className="lux-card group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="lux-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-lux-gold transition-colors hover:text-lux-gold-light"
                >
                  {item.cta}
                  <Arrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      {/* Why Ruwaaq */}
      <section className="lux-section">
        <div className="lux-container text-center">
          <p className="lux-eyebrow">{t.why.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{t.why.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = whyIcons[i] ?? Compass;
            return (
              <div key={item.title} className="text-center">
                <div className="lux-icon-wrap">
                  <Icon className="h-6 w-6" strokeWidth={1.25} />
                </div>
                <h3 className="lux-display mt-5 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section className="lux-section lux-section--cream">
        <div className="lux-container text-center">
          <p className="lux-eyebrow">{t.projects.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{t.projects.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectImages.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-lux-card"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <div className="lux-container mt-12 text-center">
          <Link href="/our-work" className="lux-btn-outline">
            {t.projects.cta}
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="lux-section">
        <div className="lux-container text-center">
          <p className="lux-eyebrow">{t.process.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display mt-6 text-3xl sm:text-4xl">{t.process.title}</h2>
        </div>
        <div className="lux-container mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <span className="lux-display text-4xl text-lux-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="lux-display mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="lux-section lux-section--cream">
        <div className="lux-container text-center">
          <p className="lux-eyebrow">{t.testimonials.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 className="lux-display mt-6 text-3xl sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>
        <div className="lux-container mt-14 grid gap-8 md:grid-cols-2">
          {t.testimonials.items.map((item) => (
            <blockquote
              key={item.quote}
              className="rounded-2xl border border-lux-sand bg-white p-10 shadow-lux-card"
            >
              <p className="lux-display text-lg leading-relaxed text-lux-ink">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-lux-sand pt-4">
                <p className="text-sm font-semibold text-lux-ink">{item.author}</p>
                <p className="text-xs text-lux-ink-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lux-pattern-bg lux-section">
        <div className="lux-container text-center">
          <h2 className="lux-display text-3xl sm:text-4xl">{t.cta.title}</h2>
          <p className="lux-body mx-auto mt-4 max-w-lg">{t.cta.subtitle}</p>
          <Link href="/contact" className="lux-btn-primary mt-10">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
