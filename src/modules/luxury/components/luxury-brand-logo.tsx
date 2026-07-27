import Image from "next/image";
import Link from "next/link";

/** Official Turriva lockup — `public/brand/turriva/turriva logo.png` */
export const TURRIVA_LOGO_SRC = "/brand/turriva/turriva-logo.png";

export const TURRIVA_LOGO_WIDTH = 2304;
export const TURRIVA_LOGO_HEIGHT = 1554;

const LOGO_WIDTH = TURRIVA_LOGO_WIDTH;
const LOGO_HEIGHT = TURRIVA_LOGO_HEIGHT;

/** Header lockup — in-flow inside the bar; height sets total header rhythm */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-[3.25rem] w-auto max-w-[9.5rem] sm:h-14 sm:max-w-[10.5rem] md:h-16 md:max-w-[12rem] lg:h-[4.75rem] lg:max-w-[14.5rem] xl:h-[5.5rem] xl:max-w-[16.5rem]";

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
      sizes="(max-width: 640px) 560px, (max-width: 1280px) 920px, 1400px"
    />
  );

  if (!href) return logo;

  return (
    <Link
      href={href}
      className="lux-header-logo-link inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="توريفا العقارية — الصفحة الرئيسية"
    >
      {logo}
    </Link>
  );
}
