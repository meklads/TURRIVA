import { RuwaqLogo, SITE_LOGO_SIZE_CLASS } from "@/shared/components/ruwaq-logo";

const LUXURY_LOGO_CLASS = "h-11 w-auto sm:h-12 lg:h-[3.65rem]";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
  /** Classic رواق / RUWAQ PNG lockup (footer). */
  legacyRuwaqRaster?: boolean;
  /** Turriva raster (motif + TURRIVA). */
  raster?: boolean;
};

/** Turriva Real Estate lockup — توريفا العقارية + TURRIVA, or legacy Ruwaq raster. */
export function LuxuryBrandLogo({
  href = "/",
  className = LUXURY_LOGO_CLASS,
  priority = false,
  legacyRuwaqRaster = false,
  raster = false,
}: Props) {
  return (
    <RuwaqLogo
      href={href}
      className={legacyRuwaqRaster || raster ? SITE_LOGO_SIZE_CLASS : className}
      variant="light"
      priority={priority}
      legacyRuwaqRaster={legacyRuwaqRaster}
      raster={raster}
    />
  );
}
