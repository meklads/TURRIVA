import Image from "next/image";
import Link from "next/link";

/** Official Turriva lockup, `public/brand/turriva/turriva logo 2.png` */
export const TURRIVA_LOGO_SRC = "/brand/turriva/turriva-logo.png";

export const TURRIVA_LOGO_WIDTH = 1254;
export const TURRIVA_LOGO_HEIGHT = 249;

const LOGO_WIDTH = TURRIVA_LOGO_WIDTH;
const LOGO_HEIGHT = TURRIVA_LOGO_HEIGHT;

/** Header lockup, in-flow display scale */
export const LUXURY_HEADER_LOGO_CLASS =
  "h-[2.25rem] w-auto max-w-[6.75rem] sm:h-[2.5rem] sm:max-w-[7.25rem] md:h-[2.75rem] md:max-w-[8rem] lg:h-[3rem] lg:max-w-[9rem] xl:h-[3.35rem] xl:max-w-[10.25rem] 2xl:h-[3.75rem] 2xl:max-w-[11.5rem]";

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
      alt="توريفا، Turriva"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
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
