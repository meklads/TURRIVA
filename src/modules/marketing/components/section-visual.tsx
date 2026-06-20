import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

/** Rounded section illustration for landing page blocks. */
export function SectionVisual({ src, alt, priority, className = "" }: Props) {
  return (
    <div className={`ruwaq-section-visual ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
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
