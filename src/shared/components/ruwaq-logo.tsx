import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  variant?: "light" | "dark";
  priority?: boolean;
};

const LOGO_SRC = {
  /** 1774×887 master — sharper than legacy 1248×492 on-light export */
  light: "/brand/ruwaq/logo-transparent.png",
  dark: "/brand/ruwaq/logo-on-dark.png",
} as const;

/** Intrinsic dimensions — master PNG for crisp retina. */
const LOGO_WIDTH = 1774;
const LOGO_HEIGHT = 887;

/** Shared site chrome logo — header & footer match. */
export const SITE_LOGO_SIZE_CLASS = "h-16 w-auto sm:h-[4.5rem] lg:h-20 xl:h-[5.25rem]";

/** Design marketing header — 3× previous ~1.65rem shell size */
export const DESIGN_LOGO_SIZE_CLASS = "h-20 w-auto sm:h-[5.25rem]";

export function RuwaqLogo({
  href = "/",
  className = SITE_LOGO_SIZE_CLASS,
  variant = "light",
  priority = false,
}: Props) {
  const logo = (
    <Image
      src={LOGO_SRC[variant]}
      alt="توريفا العقارية Turriva Real Estate"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`ruwaq-logo-img block w-auto ${className}`}
      priority={priority}
      quality={100}
      sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
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
