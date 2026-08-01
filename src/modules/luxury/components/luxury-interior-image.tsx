import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";
import { LuxuryContainImage } from "./luxury-contain-image";

/** hero-interior.webp — portrait interior showcase */
export const LUXURY_INTERIOR_ASPECT = 861 / 993;

type Props = {
  priority?: boolean;
  sizes?: string;
  className?: string;
  fillHeight?: boolean;
};

export function LuxuryInteriorImage(props: Props) {
  return (
    <LuxuryContainImage
      src={LUXURY_IMAGES.heroInterior}
      aspectRatio={LUXURY_INTERIOR_ASPECT}
      {...props}
    />
  );
}
