import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/brand/luxury/logo-mark-mockup.png";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
};

/** Logo extracted from the luxury mockup — mandala mark + RUWAQ + tagline. */
export function LuxuryBrandLogo({
  href = "/",
  className = "h-[3.25rem] w-auto sm:h-14 lg:h-[3.75rem]",
  priority = false,
}: Props) {
  const logo = (
    <Image
      src={LOGO_SRC}
      alt="Ruwaq — Interior • Construction"
      width={490}
      height={122}
      className={`block w-auto ${className}`}
      priority={priority}
      quality={100}
      sizes="(max-width: 640px) 180px, 240px"
    />
  );

  if (!href) return logo;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="Ruwaq — Home"
    >
      {logo}
    </Link>
  );
}
