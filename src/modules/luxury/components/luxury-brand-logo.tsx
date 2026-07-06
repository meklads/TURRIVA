import Image from "next/image";
import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

const MARK_SRC = "/brand/luxury/ruwaq-mandala-hq.png";

type Props = {
  href?: string;
  markClassName?: string;
  priority?: boolean;
};

/** Coded luxury lockup — HQ mandala mark + serif wordmark (no bitmap header crop). */
export async function LuxuryBrandLogo({
  href = "/",
  markClassName = "h-[3.1rem] w-[3.1rem] sm:h-[3.35rem] sm:w-[3.35rem]",
  priority = false,
}: Props) {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const lockup = (
    <span className="lux-brand-lockup">
      <span className={`lux-brand-mark ${markClassName}`}>
        <Image
          src={MARK_SRC}
          alt=""
          width={512}
          height={512}
          className="h-full w-full object-contain"
          priority={priority}
          quality={100}
          sizes="54px"
        />
      </span>
      <span className="lux-brand-type">
        <span className="lux-brand-name">{t.brand.name}</span>
        <span className="lux-brand-tagline">{t.brand.tagline}</span>
      </span>
    </span>
  );

  if (!href) return lockup;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center bg-transparent p-0 leading-none"
      aria-label={
        locale === "ar"
          ? "رواق — الصفحة الرئيسية"
          : "Ruwaq — Home"
      }
    >
      {lockup}
    </Link>
  );
}
