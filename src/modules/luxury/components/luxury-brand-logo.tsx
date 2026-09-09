import Image from "next/image";
import Link from "next/link";

/** Black lockup for light surfaces (footer / sections) */
export const TURRIVA_LOGO_ON_LIGHT = "/brand/turriva/logo-lockup-black.png";
/** White lockup for dark surfaces (footer) */
export const TURRIVA_LOGO_ON_DARK = "/brand/turriva/logo-lockup-white.png";
/** Header: mark + wordmark only (left-aligned), tagline rendered separately centered below */
export const TURRIVA_LOGO_HEADER = "/brand/turriva/logo-header-black.png";
/** Gold monogram — favicon / watermark brilliance */
export const TURRIVA_MARK_GOLD = "/brand/turriva/mark-gold-on-black.png";
export const TURRIVA_MARK_GOLD_CLEAR = "/brand/turriva/mark-gold.png";
export const TURRIVA_MARK_BLACK = "/brand/turriva/mark-black.png";
export const TURRIVA_MARK_WHITE = "/brand/turriva/mark-white.png";

/** @deprecated Prefer TURRIVA_LOGO_ON_LIGHT / ON_DARK */
export const TURRIVA_LOGO_SRC = TURRIVA_LOGO_ON_LIGHT;

export const TURRIVA_LOGO_WIDTH = 1015;
export const TURRIVA_LOGO_HEIGHT = 451;

export const TURRIVA_HEADER_LOGO_WIDTH = 975;
export const TURRIVA_HEADER_LOGO_HEIGHT = 326;

/** Header mark+wordmark (+20% vs original stacked scale) */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-[2.85rem] w-auto max-w-[9.5rem] sm:h-[3.1rem] sm:max-w-[10.5rem] md:h-[3.35rem] md:max-w-[11.5rem] lg:h-[3.6rem] lg:max-w-[12.5rem] xl:h-[3.85rem] xl:max-w-[13.5rem]";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
  /** light = black artwork; dark = white artwork — full lockup (e.g. footer) */
  surface?: "light" | "dark";
  /**
   * Header composition: left-aligned mark+wordmark, centered tagline under it.
   * Footer should keep the full lockup PNG.
   */
  layout?: "header" | "lockup";
  tagline?: string;
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
  layout = "header",
  tagline,
}: Props) {
  if (layout === "lockup") {
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

  const mark = (
    <span className="lux-header-brand-lockup">
      <Image
        src={TURRIVA_LOGO_HEADER}
        alt="توريفا، Turriva"
        width={TURRIVA_HEADER_LOGO_WIDTH}
        height={TURRIVA_HEADER_LOGO_HEIGHT}
        className={`lux-header-logo-img block w-auto object-contain object-left ${className}`}
        priority={priority}
        quality={100}
        unoptimized
        sizes="(max-width: 640px) 420px, (max-width: 1280px) 720px, 960px"
      />
      {tagline ? <span className="lux-header-tagline">{tagline}</span> : null}
    </span>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      className="lux-header-logo-link inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="توريفا، الصفحة الرئيسية"
    >
      {mark}
    </Link>
  );
}
