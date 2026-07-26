import Image from "next/image";
import Link from "next/link";

/** Official Turriva lockup — `public/brand/turriva/turriva logo.png` */
export const TURRIVA_LOGO_SRC = "/brand/turriva/turriva-logo.png";

export const TURRIVA_LOGO_WIDTH = 2304;
export const TURRIVA_LOGO_HEIGHT = 1536;

const LOGO_WIDTH = TURRIVA_LOGO_WIDTH;
const LOGO_HEIGHT = TURRIVA_LOGO_HEIGHT;

/** Compact header lockup — full-size raster used in footer only */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-14 w-auto sm:h-16 lg:h-[4.25rem] max-w-[min(100%,13.5rem)]";

/** @deprecated Prefer LUXURY_HEADER_LOGO_CLASS in header; kept for overrides */
const LUXURY_LOGO_CLASS = LUXURY_HEADER_LOGO_CLASS;

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
  /** @deprecated Use official raster only; kept for call-site compatibility */
  legacyRuwaqRaster?: boolean;
  /** @deprecated Official logo is always used */
  raster?: boolean;
};

export function LuxuryBrandLogo({
  href = "/",
  className = LUXURY_HEADER_LOGO_CLASS,
  priority = false,
}: Props) {
  const logo = (
    <Image
      src={TURRIVA_LOGO_SRC}
      alt="توريفا العقارية — Turriva Real Estate"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`block w-auto object-contain object-start ${className}`}
      priority={priority}
      quality={100}
      unoptimized
      sizes="(max-width: 640px) 810px, (max-width: 1024px) 990px, 1170px"
    />
  );

  if (!href) return logo;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="توريفا العقارية — الصفحة الرئيسية"
    >
      {logo}
    </Link>
  );
}
