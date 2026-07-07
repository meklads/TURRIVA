import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { getCreditBalance, isDesignCreditsUnlimited } from "@/modules/design/server/design-credits.service";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    if (!session?.user?.id) {
      return NextResponse.json({
        signedIn: false,
        balance: 0,
        freeCredits: 3,
      });
    }

    const balance = await getCreditBalance(session.user.id);
    const unlimited = isDesignCreditsUnlimited();
    return NextResponse.json({
      signedIn: true,
      balance,
      unlimited,
      freeCredits: 3,
    });
  } catch (error) {
    logServerError("design credits", error);
    return NextResponse.json({ error: "Failed to load credits" }, { status: 500 });
  }
}
