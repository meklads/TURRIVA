import Link from "next/link";
import Image from "next/image";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";

export async function DesignHeader() {
  const locale = await getLocale();
  const t = getDesignMessages(locale);

  const links = [
    { href: "/#studio", label: t.nav.generate },
    { href: "/#styles", label: t.nav.styles },
    { href: "/#how-it-works", label: t.nav.howItWorks },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="design-header">
      <div className="design-container">
        <div className="design-header-bar">
          <Link href="/" className="design-logo">
            <Image
              src="/brand/ruwaq/logo-on-light.png"
              alt={t.brand.name}
              width={1248}
              height={492}
              priority
            />
          </Link>

          <nav className="design-nav" aria-label="Main">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="design-header-actions">
            <LocaleSwitcher />
            <Link href="/login?callbackUrl=/" className="design-btn design-btn-primary">
              {t.nav.signIn}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
