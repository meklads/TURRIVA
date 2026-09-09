import Image from "next/image";
import Link from "next/link";

/** Black lockup for light surfaces (header, light sections) */
export const TURRIVA_LOGO_ON_LIGHT = "/brand/turriva/logo-lockup-black.png";
/** White lockup for dark surfaces (footer) */
export const TURRIVA_LOGO_ON_DARK = "/brand/turriva/logo-lockup-white.png";
/** Gold monogram — favicon / watermark brilliance */
export const TURRIVA_MARK_GOLD = "/brand/turriva/mark-gold-on-black.png";
export const TURRIVA_MARK_GOLD_CLEAR = "/brand/turriva/mark-gold.png";
export const TURRIVA_MARK_BLACK = "/brand/turriva/mark-black.png";
export const TURRIVA_MARK_WHITE = "/brand/turriva/mark-white.png";

/** @deprecated Prefer TURRIVA_LOGO_ON_LIGHT / ON_DARK */
export const TURRIVA_LOGO_SRC = TURRIVA_LOGO_ON_LIGHT;

export const TURRIVA_LOGO_WIDTH = 1015;
export const TURRIVA_LOGO_HEIGHT = 451;

/** Header lockup — stacked mark + wordmark + tagline */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-[2.65rem] w-auto max-w-[7.25rem] sm:h-[2.9rem] sm:max-w-[8rem] md:h-[3.15rem] md:max-w-[8.75rem] lg:h-[3.4rem] lg:max-w-[9.5rem] xl:h-[3.65rem] xl:max-w-[10.25rem]";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
  /** light = black artwork; dark = white artwork */
  surface?: "light" | "dark";
  /** @deprecated */
  legacyRuwaqRaster?: boolean;
  /** @deprecated */
  raster?: boolean;
};

export function LuxuryBrandLogo({
  href = "/",
  className = LUXURY_HEADER_LOGO_CLASS,
  priority = false,
  surface = "light",
}: Props) {
  const src = surface === "dark" ? TURRIVA_LOGO_ON_DARK : TURRIVA_LOGO_ON_LIGHT;

  const logo = (
    <Image
      src={src}
      alt="توريفا، Turriva"
      width={TURRIVA_LOGO_WIDTH}
      height={TURRIVA_LOGO_HEIGHT}
      className={`lux-header-logo-img block w-auto object-contain object-start ${className}`}
      priority={priority}
      quality={100}
      unoptimized
      sizes="(max-width: 640px) 420px, (max-width: 1280px) 720px, 960px"
    />
  );

  if (!href) return logo;

  return (
    <Link
      href={href}
      className="lux-header-logo-link inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="توريفا، الصفحة الرئيسية"
    >
      {logo}
    </Link>
  );
}
