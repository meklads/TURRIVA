import Image from "next/image";

type Props = {
  href?: string;
  className?: string;
  /** Prefer full wordmark on light/dark backgrounds. "mark" is dark-bg only (black plate). */
  variant?: "light" | "dark" | "mark";
  priority?: boolean;
};

const LOGO_SRC = {
  light: "/brand/graphics-house/logo-on-light.png",
  dark: "/brand/graphics-house/logo-on-dark.png",
  mark: "/brand/graphics-house/logo-mark.png",
} as const;

const LOGO_DIMS = {
  light: { width: 900, height: 417 },
  dark: { width: 900, height: 422 },
  mark: { width: 900, height: 200 },
} as const;

export const GRAPHICS_HOUSE_LOGO_CLASS = "h-9 w-auto max-w-[200px] sm:h-10 sm:max-w-[240px]";

export function GraphicsHouseLogo({
  href = "https://3dgraphicshouse.com",
  className = GRAPHICS_HOUSE_LOGO_CLASS,
  variant = "light",
  priority = false,
}: Props) {
  const resolvedVariant = variant === "mark" ? "light" : variant;
  const { width, height } = LOGO_DIMS[resolvedVariant];

  const logo = (
    <Image
      src={LOGO_SRC[resolvedVariant]}
      alt="Graphics House"
      width={width}
      height={height}
      className={`block w-auto object-contain object-left ${className}`}
      priority={priority}
      quality={95}
      sizes="(max-width: 640px) 160px, 240px"
    />
  );

  if (!href) return logo;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label="Graphics House, 3dgraphicshouse.com"
    >
      {logo}
    </a>
  );
}
