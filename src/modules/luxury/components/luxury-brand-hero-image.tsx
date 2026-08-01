import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";
import { LuxuryContainImage } from "./luxury-contain-image";

/** hero-branded.jpg — full Turriva hero with logo + interior (1024×682) */
export const LUXURY_BRANDED_HERO_ASPECT = 1024 / 682;

type Props = {
  priority?: boolean;
  sizes?: string;
  className?: string;
  fillHeight?: boolean;
};

/** Branded hero beside lead forms — always shown full frame, logo included. */
export function LuxuryBrandHeroImage(props: Props) {
  return (
    <LuxuryContainImage
      src={LUXURY_IMAGES.heroBranded}
      aspectRatio={LUXURY_BRANDED_HERO_ASPECT}
      {...props}
    />
  );
}
