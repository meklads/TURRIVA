import Image from "next/image";
import Link from "next/link";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import {
  getLuxuryMessages,
  LUXURY_IMAGES,
} from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.ourWork.title, t.pages.ourWork.intro);
}

const PORTFOLIO_IMAGES = [
  LUXURY_IMAGES.project1,
  LUXURY_IMAGES.project2,
  LUXURY_IMAGES.project3,
  LUXURY_IMAGES.project4,
  LUXURY_IMAGES.project5,
  LUXURY_IMAGES.project6,
] as const;

export default async function OurWorkPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  return (
    <section className="lux-section">
      <div className="lux-container text-center">
        <p className="lux-eyebrow">{t.projects.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-6 text-4xl sm:text-5xl">{t.pages.ourWork.title}</h1>
        <p className="lux-body mx-auto mt-6 max-w-2xl">{t.pages.ourWork.intro}</p>
      </div>
      <div className="lux-container mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {t.portfolio.map((project, index) => {
          const src = PORTFOLIO_IMAGES[index] ?? LUXURY_IMAGES.interior;
          return (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl bg-lux-cream shadow-lux-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-2 p-5 text-start">
                <h2 className="font-display text-lg font-semibold text-lux-ink">{project.title}</h2>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-lux-gold">
                  {project.location}
                </p>
                <p className="text-sm leading-relaxed text-lux-ink-soft">{project.scope}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="lux-container mt-12 text-center">
        <Link href="/contact" className="lux-btn-primary">
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}
