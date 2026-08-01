import Image from "next/image";
import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";

/** Intrinsic aspect ratio of turriva-sign-facade.png — keep in sync if the asset changes. */
export const LUXURY_FACADE_ASPECT = 1024 / 682;

type Props = {
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Stretch within a grid cell (contact/quote layouts) while keeping the full sign visible. */
  fillHeight?: boolean;
};

export function LuxuryFacadeImage({
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  className = "",
  fillHeight = false,
}: Props) {
  return (
    <div
      className={[
        "lux-brand-facade-media",
        fillHeight ? "lux-brand-facade-media--fill" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={LUXURY_IMAGES.ctaBand}
        alt=""
        fill
        priority={priority}
        className="lux-brand-facade-media__img"
        sizes={sizes}
      />
    </div>
  );
}
