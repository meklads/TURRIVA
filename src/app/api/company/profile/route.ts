import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";
import { getSession } from "@/modules/auth/server/session";
import { isBillingEnabled } from "@/shared/lib/env";
import {
  parseExportTemplateId,
  resolveEntitledExportTemplateId,
} from "@/modules/company/lib/export-template-ids";

function str(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed || null;
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existing = await db.companyProfile.findUnique({
      where: { userId: session.user.id },
      select: { isPaid: true },
    });
    // During the free trial (BILLING_ENABLED=false) everyone is treated as
    // entitled — no template is locked. Flip the env var when ready to charge.
    const isPaid = (existing?.isPaid ?? false) || !isBillingEnabled();

    const body = await req.json();
    const requestedTemplateId = parseExportTemplateId(body.exportTemplateId);
    const entitledTemplateId = resolveEntitledExportTemplateId(
      requestedTemplateId,
      isPaid
    );

    const data = {
      companyName: typeof body.companyName === "string" ? body.companyName : "",
      logoUrl: str(body.logoUrl),
      address: str(body.address),
      about: str(body.about),
      crNumber: str(body.crNumber),
      vatNumber: str(body.vatNumber),
      phone: str(body.phone),
      email: str(body.email),
      website: str(body.website),
      portfolioUrl: str(body.portfolioUrl),
      catalogUrl: str(body.catalogUrl),
      exportTemplateId: entitledTemplateId,
    };

    const profile = await db.companyProfile.upsert({
      where: { userId: session.user.id },
      update: data,
      create: { userId: session.user.id, ...data },
    });

    return NextResponse.json({
      success: true,
      profile,
      downgraded: entitledTemplateId !== requestedTemplateId,
    });
  } catch (error) {
    console.error("Company profile error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
