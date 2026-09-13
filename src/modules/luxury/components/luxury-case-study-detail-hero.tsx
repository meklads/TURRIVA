import Image from "next/image";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  fitLabel?: string;
  children?: React.ReactNode;
};

export function LuxuryCaseStudyDetailHero({
  locale,
  eyebrow,
  title,
  intro,
  image,
  fitLabel,
  children,
}: Props) {
  const isAr = locale === "ar";

  return (
    <section className="lux-case-detail-hero" aria-label={title}>
      <div className="lux-case-detail-hero__media" aria-hidden>
        <Image src={image} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="lux-case-detail-hero__shade" />
      </div>
      <div className="lux-container lux-case-detail-hero__content">
        <p className="lux-case-detail-hero__eyebrow">{eyebrow}</p>
        {fitLabel ? <p className="lux-case-detail-hero__fit">{fitLabel}</p> : null}
        <h1 className="lux-display lux-case-detail-hero__title">{title}</h1>
        {intro ? <p className="lux-case-detail-hero__intro">{intro}</p> : null}
        {children ? <div className="lux-case-detail-hero__actions">{children}</div> : null}
        <p className="lux-case-detail-hero__hint" aria-hidden>
          {isAr ? "مرّر للأسفل للتفاصيل" : "Scroll for details"}
        </p>
      </div>
    </section>
  );
}
