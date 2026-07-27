import Image from "next/image";
import Link from "next/link";

/** Official Turriva lockup — `public/brand/turriva/turriva logo.png` */
export const TURRIVA_LOGO_SRC = "/brand/turriva/turriva-logo.png";

export const TURRIVA_LOGO_WIDTH = 2304;
export const TURRIVA_LOGO_HEIGHT = 1536;

const LOGO_WIDTH = TURRIVA_LOGO_WIDTH;
const LOGO_HEIGHT = TURRIVA_LOGO_HEIGHT;

/** Header lockup — responsive; full size from lg (PNG unoptimized for clarity) */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-14 w-auto max-w-[9.75rem] sm:h-[4.25rem] sm:max-w-[11.5rem] md:h-24 md:max-w-[14rem] lg:h-[11.25rem] lg:max-w-[min(100%,54rem)] xl:h-[13.5rem]";

/** @deprecated Use LUXURY_HEADER_LOGO_CLASS */
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
      className={`lux-header-logo-img block w-auto object-contain object-start ${className}`}
      priority={priority}
      quality={100}
      unoptimized
      sizes="(max-width: 640px) 400px, (max-width: 1024px) 660px, 1170px"
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
