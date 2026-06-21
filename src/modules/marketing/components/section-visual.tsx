import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  wide?: boolean;
  variant?: "default" | "tall" | "landscape";
  offset?: boolean;
  luxury?: boolean;
};

/** Editorial section image — premium frame on Navy landing. */
export function SectionVisual({
  src,
  alt,
  priority,
  className = "",
  wide,
  variant = "default",
  offset = false,
  luxury = false,
}: Props) {
  const imgClass =
    variant === "landscape"
      ? "ruwaq-section-visual-img ruwaq-section-visual-img--landscape"
      : "ruwaq-section-visual-img";

  const wrapClass = [
    luxury ? "ruwaq-section-visual-luxury" : "ruwaq-section-visual",
    wide ? "ruwaq-section-visual-wide" : "",
    offset ? "ruwaq-section-visual--offset" : "",
    variant === "tall" ? "ruwaq-section-visual--tall" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={variant === "landscape" ? 675 : 900}
        className={imgClass}
        priority={priority}
        sizes={wide ? "(max-width: 768px) 100vw, 1152px" : "(max-width: 768px) 100vw, 560px"}
      />
    </div>
  );
}

/** Landing section images — public/brand/body/ */
export const LANDING_SECTION_IMAGES = {
  problem: "/brand/body/1.webp",
  sample: "/brand/body/2.webp",
  audience: "/brand/body/3.webp",
  trust: "/brand/body/4.webp",
} as const;

export function landingSectionAlts(locale: "ar" | "en") {
  if (locale === "ar") {
    return {
      problem: "من فوضى Word إلى عرض منظم مع رواق",
      sample: "نموذج عرض تشطيب احترافي على المكتب",
      audience: "مقاول تشطيب يراجع العرض في موقع المشروع",
      trust: "اتفاق ناجح بعد إرسال عرض PDF باسم شركتك",
    };
  }
  return {
    problem: "From Word chaos to an organized Ruwaq proposal",
    sample: "Professional fit-out proposal on a desk",
    audience: "Contractor reviewing a proposal on site",
    trust: "Successful deal after sending a branded PDF proposal",
  };
}
