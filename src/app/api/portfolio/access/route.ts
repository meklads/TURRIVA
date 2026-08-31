import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  createPortfolioAccessToken,
  PORTFOLIO_COOKIE,
  portfolioCookieOptions,
} from "@/modules/luxury/server/portfolio-access";
import { classifyCompanyEmail } from "@/shared/lib/company-email";
import { db } from "@/shared/lib/db";
import { sendLeadNotification } from "@/shared/lib/email/send-lead-notification";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().min(2).max(200),
  email: z.string().email().max(200),
  locale: z.enum(["ar", "en"]).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "invalid_input" }, { status: 400 });
    }

    const { name, company, email, locale } = parsed.data;
    const emailIssue = classifyCompanyEmail(email);
    if (emailIssue === "invalid") {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }
    if (emailIssue === "personal") {
      return NextResponse.json({ error: "personal_email" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const message = [`Company: ${company}`, `Work email: ${normalizedEmail}`, "Portfolio: Turriva Folio 2026"].join("\n");

    await db.consultationLead.create({
      data: {
        name,
        phone: normalizedEmail,
        message,
        source: "portfolio_folio_2026",
        locale: locale ?? "ar",
        interest: "bespoke",
        projectType: "portfolio_access",
      },
    });

    await sendLeadNotification({
      name,
      phone: normalizedEmail,
      email: normalizedEmail,
      message,
      locale,
      source: "portfolio_folio_2026",
      projectType: company,
      interest: "bespoke",
    }).catch((err) => {
      logServerError("portfolio lead notification email", err);
      return false;
    });

    const token = createPortfolioAccessToken(normalizedEmail);
    const res = NextResponse.json({ success: true });
    res.cookies.set(PORTFOLIO_COOKIE, token, portfolioCookieOptions());
    return res;
  } catch (error) {
    logServerError("portfolio access", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
