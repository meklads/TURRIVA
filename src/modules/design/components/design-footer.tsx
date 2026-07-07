import Link from "next/link";
import Image from "next/image";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

export async function DesignFooter() {
  const locale = await getLocale();
  const t = getDesignMessages(locale);

  return (
    <footer className="design-footer">
      <div className="design-container">
        <div className="design-footer-grid">
          <div>
            <Image
              src="/brand/ruwaq/logo-on-light.png"
              alt={t.brand.name}
              width={1248}
              height={492}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">{t.footer.about}</p>
          </div>

          <div>
            <h3>{t.footer.product}</h3>
            <Link href="/#studio">{t.nav.generate}</Link>
            <Link href="/#styles">{t.nav.styles}</Link>
            <Link href="/workspace">{locale === "ar" ? "منصة العروض" : "Proposals platform"}</Link>
          </div>

          <div>
            <h3>{t.footer.company}</h3>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/our-work">{locale === "ar" ? "أعمالنا" : "Our work"}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </div>

          <div>
            <h3>{t.footer.support}</h3>
            <Link href="/privacy">{t.footer.privacy}</Link>
            <Link href="/terms">{t.footer.terms}</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className="design-footer-bottom">
          <p>
            {t.footer.copyright}{" "}
            <span className="text-gray-400">·</span> {t.footer.poweredByPrefix}{" "}
            <a
              href={GRAPHICS_HOUSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t.footer.poweredByLink}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
