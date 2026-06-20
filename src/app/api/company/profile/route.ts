import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";
import { getSession } from "@/modules/auth/server/session";

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

    const body = await req.json();
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
    };

    const profile = await db.companyProfile.upsert({
      where: { userId: session.user.id },
      update: data,
      create: { userId: session.user.id, ...data },
    });

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("Company profile error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
