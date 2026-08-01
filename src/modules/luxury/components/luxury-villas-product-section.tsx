import Image from "next/image";
import Link from "next/link";

type Highlight = { title: string; description: string };

type Props = {
  id: string;
  imageSrc: string;
  eyebrow: string;
  title: string;
  intro: string;
  highlights: readonly Highlight[];
  cta: string;
  ctaHref: string;
  reverse?: boolean;
  tone?: "cream" | "white" | "linen";
};

export function LuxuryVillasProductSection({
  id,
  imageSrc,
  eyebrow,
  title,
  intro,
  highlights,
  cta,
  ctaHref,
  reverse = false,
  tone = "white",
}: Props) {
  const toneClass =
    tone === "cream" ? "lux-section--cream" : tone === "linen" ? "lux-section--linen" : "lux-section--white";

  return (
    <section id={id} className={`lux-section ${toneClass} lux-villas-product scroll-mt-24`}>
      <div className="lux-container max-w-6xl">
        <div className={`lux-villas-product__grid${reverse ? " lux-villas-product__grid--reverse" : ""}`}>
          <div className="lux-villas-product__media">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="lux-villas-product__copy">
            <p className="lux-eyebrow">{eyebrow}</p>
            <div className="lux-divider-gold" />
            <h2 className="lux-display mt-6 text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
            <p className="lux-body mt-4 text-sm sm:text-base text-lux-ink-muted">{intro}</p>
            <ul className="mt-8 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="lux-villas-product__highlight">
                  <h3 className="lux-display text-base sm:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
                </li>
              ))}
            </ul>
            <Link href={ctaHref} className="lux-btn-primary mt-10 inline-flex">
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
