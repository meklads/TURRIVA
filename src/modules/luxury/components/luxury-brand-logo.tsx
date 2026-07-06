import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

const LUXURY_LOGO_CLASS = "h-11 w-auto sm:h-12 lg:h-[3.65rem]";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
};

/** Original Ruwaq bilingual lockup (رواق + RUWAQ). */
export function LuxuryBrandLogo({
  href = "/",
  className = LUXURY_LOGO_CLASS,
  priority = false,
}: Props) {
  return (
    <RuwaqLogo
      href={href}
      className={className}
      variant="light"
      priority={priority}
    />
  );
}
