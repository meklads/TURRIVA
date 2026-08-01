import Image from "next/image";

type Props = {
  src: string;
  aspectRatio: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Stretch within a grid cell while keeping the full image visible. */
  fillHeight?: boolean;
};

/** Full-frame brand / editorial image — never cropped (object-fit: contain). */
export function LuxuryContainImage({
  src,
  aspectRatio,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  className = "",
  fillHeight = false,
}: Props) {
  return (
    <div
      className={[
        "lux-contain-image",
        fillHeight ? "lux-contain-image--fill" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--lux-contain-aspect": String(aspectRatio) } as React.CSSProperties}
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        className="lux-contain-image__img"
        sizes={sizes}
      />
    </div>
  );
}
