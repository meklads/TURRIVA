import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  variant?: "light" | "dark";
  priority?: boolean;
  /**
   * Full PNG lockup (رواق / RUWAQ master from `/brand/ruwaq/`).
   * Use on footers when you want the classic raster wordmark.
   */
  legacyRuwaqRaster?: boolean;
  /** Full PNG lockup (motif + TURRIVA English). */
  raster?: boolean;
};

const MOTIF_SRC = {
  light: "/brand/turriva/motif-gold.png",
  dark: "/brand/turriva/motif-gold-on-dark.png",
} as const;

const TURRIVA_RASTER_SRC = {
  light: "/brand/turriva/turriva-logo.png",
  dark: "/brand/turriva/turriva-logo.png",
} as const;

const RUWQ_LEGACY_RASTER_SRC = {
  light: "/brand/ruwaq/logo-on-light.png",
  dark: "/brand/ruwaq/logo-on-dark.png",
} as const;

const MOTIF_WIDTH = 520;
const MOTIF_HEIGHT = 887;
const RASTER_WIDTH = 1536;
const RASTER_HEIGHT = 1024;

/** Shared site chrome logo — header & footer match. */
export const SITE_LOGO_SIZE_CLASS = "h-16 w-auto sm:h-[4.5rem] lg:h-20 xl:h-[5.25rem]";

/** Design marketing header — 3× previous ~1.65rem shell size */
export const DESIGN_LOGO_SIZE_CLASS = "h-20 w-auto sm:h-[5.25rem]";

export function RuwaqLogo({
  href = "/",
  className = SITE_LOGO_SIZE_CLASS,
  variant = "light",
  priority = false,
  legacyRuwaqRaster = false,
  raster = false,
}: Props) {
  const rasterSrc = legacyRuwaqRaster
    ? RUWQ_LEGACY_RASTER_SRC[variant]
    : TURRIVA_RASTER_SRC[variant];

  const rasterAlt = legacyRuwaqRaster
    ? "رواق RUWAQ"
    : "توريفا العقارية Turriva Real Estate";

  const logo =
    legacyRuwaqRaster || raster ? (
      <Image
        src={rasterSrc}
        alt={rasterAlt}
        width={RASTER_WIDTH}
        height={RASTER_HEIGHT}
        className={`ruwaq-logo-img block w-auto ${className}`}
        priority={priority}
        quality={100}
        sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
      />
    ) : (
      <span
        className={`turriva-brand-lockup ${variant === "dark" ? "turriva-brand-lockup--dark" : ""} ${className}`}
      >
        <Image
          src={MOTIF_SRC[variant]}
          alt=""
          width={MOTIF_WIDTH}
          height={MOTIF_HEIGHT}
          className="turriva-brand-motif"
          priority={priority}
          quality={100}
          aria-hidden
          sizes="80px"
        />
        <span className="turriva-brand-wordmark">
          <span className="turriva-brand-ar">توريفا العقارية</span>
          <span className="turriva-brand-en">TURRIVA</span>
        </span>
      </span>
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
