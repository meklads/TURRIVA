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

/** Intrinsic dimensions — PNG source is 1774×887 for crisp retina scaling. */
const LOGO_WIDTH = 1774;
const LOGO_HEIGHT = 887;

export function RuwaqLogo({
  href = "/",
  className = "h-14 w-auto sm:h-16 lg:h-[4.25rem]",
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
      sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
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
