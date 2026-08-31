import Link from "next/link";
import "@/app/luxury.css";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

export default async function NotFound() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const homeHref = localizePath("/", locale);

  return (
    <div className="lux-shell flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="lux-eyebrow">{locale === "ar" ? "404" : "404"}</p>
      <h1 className="lux-display mt-4 text-2xl sm:text-3xl">{t.errors.notFoundTitle}</h1>
      <p className="lux-body mt-3 max-w-md text-lux-ink-soft">{t.errors.notFoundMessage}</p>
      <Link href={homeHref} className="lux-btn-primary mt-8 inline-flex">
        {t.errors.home}
      </Link>
    </div>
  );
}
