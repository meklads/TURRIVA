import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";

export async function DesignHeader() {
  const locale = await getLocale();
  const t = getDesignMessages(locale);

  const links = [
    { href: "/#studio", label: t.nav.designTypes },
    { href: "/#gallery", label: t.nav.styleGallery },
    { href: "/#how-it-works", label: locale === "ar" ? "المدونة" : "Blog", external: false },
    { href: "/pricing", label: t.nav.pricing },
  ];

  return (
    <header className="design-header">
      <div className="design-container design-container--wide">
        <div className="design-header-bar">
          <Link href="/" className="design-logo">
            <Image
              src="/brand/ruwaq/logo-on-light.png"
              alt={t.brand.name}
              width={1248}
              height={492}
              priority
              className="design-logo-img"
            />
          </Link>

          <nav className="design-nav" aria-label="Main">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="design-nav-link">
                {link.label}
                {link.href.includes("studio") && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
              </Link>
            ))}
          </nav>

          <div className="design-header-actions">
            <LocaleSwitcher />
            <Link
              href="/workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="design-btn design-btn-ghost hidden md:inline-flex"
            >
              {t.nav.workspace}
            </Link>
            <Link href="/#studio" className="design-btn design-btn-ghost hidden sm:inline-flex">
              {t.nav.generate}
            </Link>
            <Link href="/login?callbackUrl=/" className="design-btn design-btn-primary">
              {t.nav.signIn}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
