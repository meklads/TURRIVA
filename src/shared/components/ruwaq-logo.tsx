import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  variant?: "light" | "dark";
};

export function RuwaqLogo({
  href = "/",
  className = "h-14 w-auto lg:h-16",
  variant = "light",
}: Props) {
  const src =
    variant === "dark"
      ? "/brand/ruwaq/logo-on-dark.png"
      : "/brand/ruwaq/logo-transparent.png";

  const logo = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="رواق Ruwaq"
      className={`ruwaq-logo-img block ${className}`}
      decoding="async"
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
