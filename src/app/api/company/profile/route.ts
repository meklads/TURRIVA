import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";
import { getSession } from "@/modules/auth/server/session";

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { companyName, crNumber, vatNumber, phone, email, website } = body;

    const profile = await db.companyProfile.upsert({
      where: { userId: session.user.id },
      update: { companyName, crNumber, vatNumber, phone, email, website },
      create: {
        userId: session.user.id,
        companyName: companyName ?? "",
        crNumber,
        vatNumber,
        phone,
        email,
        website,
      },
    });

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("Company profile error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
