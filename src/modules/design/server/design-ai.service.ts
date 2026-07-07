import type { SpaceType } from "../lib/styles";
import { getStyleById } from "../lib/styles";
import { loadImageBuffer } from "./design-image.utils";
import { trySaveDesignBuffer } from "./design-storage";
import { generateWithGeminiEdit } from "./design-gemini.service";
import { generateWithOpenAIEdit } from "./design-openai.service";
import { getDesignImageProvider, isDesignAIConfigured } from "@/shared/lib/env";

type GenerateInput = {
  beforeUrl: string;
  beforeBuffer?: Buffer;
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
  userId: string;
};

export type GenerateResult = {
  afterUrl: string;
  afterBuffer: Buffer;
  isMock: boolean;
  provider: "gemini" | "openai";
};

async function persistAfterUrl(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string> {
  const stored = await trySaveDesignBuffer(buffer, mime, prefix);
  if (stored) return stored;
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export async function generateDesignAfter(input: GenerateInput): Promise<GenerateResult> {
  const style = getStyleById(input.styleId);
  if (!style) throw new Error("INVALID_STYLE");

  const provider = getDesignImageProvider();
  if (!isDesignAIConfigured() || !provider) {
    throw new Error("AI_NOT_CONFIGURED");
  }

  const beforeBuffer = input.beforeBuffer ?? (await loadImageBuffer(input.beforeUrl));
  const promptInput = {
    styleId: input.styleId,
    spaceType: input.spaceType,
    roomType: input.roomType,
    locale: input.locale,
  };

  const editedBuffer =
    provider === "gemini"
      ? await generateWithGeminiEdit(beforeBuffer, promptInput)
      : await generateWithOpenAIEdit(beforeBuffer, promptInput);

  const mime = provider === "gemini" ? "image/png" : "image/png";
  const afterUrl = await persistAfterUrl(editedBuffer, mime, `${input.userId}-${provider}`);

  return { afterUrl, afterBuffer: editedBuffer, isMock: false, provider };
}
