import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  variant?: "light" | "dark";
  priority?: boolean;
};

const LOGO_SRC = {
  light: "/brand/ruwaq/logo-on-light.png",
  dark: "/brand/ruwaq/logo-on-dark.png",
} as const;

/** Intrinsic dimensions — upscaled from brand master for crisp retina. */
const LOGO_WIDTH = 1248;
const LOGO_HEIGHT = 492;

/** Shared site chrome logo — header & footer match. */
export const SITE_LOGO_SIZE_CLASS = "h-16 w-auto sm:h-[4.5rem] lg:h-20 xl:h-[5.25rem]";

export function RuwaqLogo({
  href = "/",
  className = SITE_LOGO_SIZE_CLASS,
  variant = "light",
  priority = false,
}: Props) {
  const logo = (
    <Image
      src={LOGO_SRC[variant]}
      alt="رواق Ruwaq"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`ruwaq-logo-img block w-auto ${className}`}
      priority={priority}
      quality={100}
      sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
    />
  );

  if (!href) return logo;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="رواق — الصفحة الرئيسية"
    >
      {logo}
    </Link>
  );
}
