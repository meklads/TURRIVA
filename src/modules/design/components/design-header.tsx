import Link from "next/link";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

export async function DesignHeader() {
  const locale = await getLocale();
  const t = getDesignMessages(locale);

  return (
    <header className="design-header design-header--tool">
      <div className="design-container design-container--wide">
        <div className="design-header-bar">
          <RuwaqLogo priority className="h-9 w-auto sm:h-10" />

          <div className="design-header-actions">
            <LocaleSwitcher />
            <Link
              href="/workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="design-header-link hidden sm:inline-flex"
            >
              {t.nav.workspace}
            </Link>
            <Link href="/login?callbackUrl=/" className="design-btn design-btn-primary">
              {locale === "ar" ? "ابدأ مجاناً" : "Get started free"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
