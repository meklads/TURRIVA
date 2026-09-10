import Image from "next/image";
import Link from "next/link";

/** Final black lockup (1200dpi master) for light surfaces */
export const TURRIVA_LOGO_ON_LIGHT = "/brand/turriva/logo-lockup-black.png";
/** Final white lockup for dark surfaces (footer) */
export const TURRIVA_LOGO_ON_DARK = "/brand/turriva/logo-lockup-white.png";
/** Header: mark + wordmark only; tagline rendered centered below */
export const TURRIVA_LOGO_HEADER = "/brand/turriva/logo-header-black.png";
/** Icon mark cropped from above TURRIVA — favicon / watermark */
export const TURRIVA_MARK_GOLD = "/brand/turriva/mark-gold-on-black.png";
export const TURRIVA_MARK_GOLD_CLEAR = "/brand/turriva/mark-gold.png";
export const TURRIVA_MARK_BLACK = "/brand/turriva/mark-black.png";
export const TURRIVA_MARK_WHITE = "/brand/turriva/mark-white.png";

/** @deprecated Prefer TURRIVA_LOGO_ON_LIGHT / ON_DARK */
export const TURRIVA_LOGO_SRC = TURRIVA_LOGO_ON_LIGHT;

export const TURRIVA_LOGO_WIDTH = 1600;
export const TURRIVA_LOGO_HEIGHT = 964;

export const TURRIVA_HEADER_LOGO_WIDTH = 1586;
export const TURRIVA_HEADER_LOGO_HEIGHT = 814;

/** Header mark+wordmark */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-[3.2rem] w-auto max-w-[10.65rem] sm:h-[3.5rem] sm:max-w-[11.75rem] md:h-[3.75rem] md:max-w-[12.9rem] lg:h-[4.05rem] lg:max-w-[14rem] xl:h-[4.3rem] xl:max-w-[15.1rem]";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
  surface?: "light" | "dark";
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
