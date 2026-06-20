import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  showSubtitle?: boolean;
  subtitle?: string;
  variant?: "light" | "dark";
};

export function RuwaqLogo({
  href = "/",
  className = "h-9 w-auto",
  showSubtitle = false,
  subtitle,
  variant = "light",
}: Props) {
  const src =
    variant === "dark"
      ? "/brand/ruwaq/logo-on-dark.png"
      : "/brand/ruwaq/logo-on-light.png";

  const logo = (
    <Image
      src={src}
      alt="رواق"
      width={140}
      height={44}
      className={className}
      priority
    />
  );

  const content = (
    <div className="flex flex-col gap-0.5">
      {logo}
      {showSubtitle && subtitle ? (
        <span className="text-[10px] leading-tight text-gray-400">{subtitle}</span>
      ) : null}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}
