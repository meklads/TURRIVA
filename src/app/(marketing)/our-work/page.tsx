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

export default async function OurWorkPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const projects = [
    LUXURY_IMAGES.project1,
    LUXURY_IMAGES.project2,
    LUXURY_IMAGES.project3,
    LUXURY_IMAGES.project4,
    LUXURY_IMAGES.interior,
    LUXURY_IMAGES.fitout,
  ];

  return (
    <section className="lux-section">
      <div className="lux-container text-center">
        <p className="lux-eyebrow">{t.projects.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-6 text-4xl sm:text-5xl">{t.pages.ourWork.title}</h1>
        <p className="lux-body mx-auto mt-6 max-w-2xl">{t.pages.ourWork.intro}</p>
      </div>
      <div className="lux-container mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((src) => (
          <div
            key={src}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-lux-card"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
      <div className="lux-container mt-12 text-center">
        <Link href="/contact" className="lux-btn-primary">
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}
