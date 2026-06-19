import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, companyName, crNumber, vatNumber, phone, email, website } =
      body;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await db.companyProfile.upsert({
      where: { userId },
      update: { companyName, crNumber, vatNumber, phone, email, website },
      create: { userId, companyName, crNumber, vatNumber, phone, email, website },
    });

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("Company profile error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
