import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

export async function DesignFooter() {
  const locale = await getLocale();
  const t = getDesignMessages(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <footer className="design-footer">
      <div className="design-container design-container--wide">
        <div className="design-footer-grid">
          <div className="design-footer-brand">
            <Image
              src="/brand/ruwaq/logo-on-light.png"
              alt={t.brand.name}
              width={1248}
              height={492}
              className="design-logo-img"
            />
            <p>{t.footer.about}</p>
          </div>

          <div className="design-footer-solutions">
            <h3>{t.footer.solutions}</h3>
            <Link
              href="/workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="design-footer-promo group"
            >
              <span className="design-footer-promo__badge">{t.footer.workspaceBadge}</span>
              <span className="design-footer-promo__icon" aria-hidden>
                <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <Image
                src="/brand/ruwaq/logo-on-light.png"
                alt=""
                width={1248}
                height={492}
                className="design-footer-promo__logo"
              />
              <p className="design-footer-promo__desc">{t.footer.workspaceDesc}</p>
              <span className="design-footer-promo__cta">
                {t.footer.workspaceCta}
                <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </span>
            </Link>
          </div>

          <div>
            <h3>{t.footer.product}</h3>
            <Link href="/#studio">{t.nav.generate}</Link>
            <Link href="/#gallery">{t.nav.styleGallery}</Link>
            <Link href="/pricing">{t.nav.pricing}</Link>
          </div>

          <div>
            <h3>{t.footer.company}</h3>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/our-work">{locale === "ar" ? "أعمالنا" : "Our work"}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </div>

          <div>
            <h3>{t.footer.support}</h3>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy">{t.footer.privacy}</Link>
            <Link href="/terms">{t.footer.terms}</Link>
          </div>
        </div>

        <div className="design-footer-bottom">
          <p>
            {t.footer.copyright}{" "}
            <span>·</span> {t.footer.poweredByPrefix}{" "}
            <a href={GRAPHICS_HOUSE_URL} target="_blank" rel="noopener noreferrer">
              {t.footer.poweredByLink}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
