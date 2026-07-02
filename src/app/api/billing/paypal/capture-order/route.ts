import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { capturePremiumTemplatesOrder } from "@/modules/billing/server/paypal.service";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const orderId = typeof body.orderId === "string" ? body.orderId : null;
    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    const result = await capturePremiumTemplatesOrder(session.user.id, orderId);
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("[paypal] capture-order error:", error);
    return NextResponse.json(
      { error: "Payment could not be confirmed. If you were charged, contact hello@ruwaq.co." },
      { status: 500 }
    );
  }
}
