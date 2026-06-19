import { NextResponse } from "next/server";
import { db } from "@/shared/lib/db";

export const dynamic = "force-dynamic";

/** Liveness probe — always 200 so Coolify does not 502 when DB is misconfigured */
export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({
      ok: true,
      app: true,
      db: false,
      tables: false,
      error: "DATABASE_URL is not set",
      timestamp: new Date().toISOString(),
    });
  }

  try {
    await db.$queryRaw`SELECT 1`;
    const tables = await db.$queryRawUnsafe<{ table_name: string }[]>(
      `SELECT table_name FROM information_schema.tables 
       WHERE table_schema = 'public' AND table_name = 'Proposal'`
    );
    const hasProposalTable = tables.length > 0;

    return NextResponse.json({
      ok: true,
      app: true,
      db: true,
      tables: hasProposalTable,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Database connection failed";
    console.error("[health] DB check failed:", message);
    return NextResponse.json({
      ok: true,
      app: true,
      db: false,
      tables: false,
      error: message,
      timestamp: new Date().toISOString(),
    });
  }
}
