import { NextResponse, type NextRequest } from "next/server";
import { HEADER_FOOTER_STYLES, type HeaderFooterStyleId } from "@/modules/proposal/export/header-footer-styles";

export const HEADER_FOOTER_PREF_COOKIE = "ruwaq_hf_pref";

/**
 * Bridges the public, read-only header/footer showcase to the real,
 * account-bound picker in Company Settings. A visitor clicking a style on
 * `/templates/sample` has nowhere to *save* that choice yet (no account),
 * so we remember it in a cookie and send them straight to Settings — where
 * it's already pre-selected the moment they sign in.
 */
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const isValid = Object.prototype.hasOwnProperty.call(HEADER_FOOTER_STYLES, id);
  const target = isValid ? (id as HeaderFooterStyleId) : "gold_classic";

  const res = NextResponse.redirect(new URL("/settings/company", _req.url));
  res.cookies.set(HEADER_FOOTER_PREF_COOKIE, target, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
  return res;
}
