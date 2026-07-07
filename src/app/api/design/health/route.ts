import { NextResponse } from "next/server";
import { db } from "@/shared/lib/db";
import { isOpenAIConfigured } from "@/shared/lib/env";
import { isCloudStorageConfigured } from "@/shared/lib/storage";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const tables = await db.$queryRawUnsafe<{ table_name: string }[]>(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
         AND table_name IN ('DesignCreditAccount', 'DesignGeneration')`
    );
    const names = new Set(tables.map((t) => t.table_name));

    const openaiConfigured = isOpenAIConfigured();

    return NextResponse.json({
      ok:
        names.has("DesignCreditAccount") &&
        names.has("DesignGeneration") &&
        openaiConfigured,
      tables: {
        designCreditAccount: names.has("DesignCreditAccount"),
        designGeneration: names.has("DesignGeneration"),
      },
      cloudStorage: isCloudStorageConfigured(),
      openaiConfigured,
      imageModel: process.env.OPENAI_IMAGE_MODEL?.trim() || "gpt-image-1.5",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
