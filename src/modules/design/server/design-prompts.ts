import { getStyleById, getRoomLabel, type SpaceType } from "../lib/styles";

export type DesignGenerateInput = {
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
};

const STYLE_PROMPTS: Record<string, string> = {
  modern:
    "modern luxury design with clean lines, neutral stone and wood palette, designer lighting, and premium built-in finishes",
  neoclassic:
    "neoclassical luxury with elegant moldings, marble accents, refined gold details, and classic proportions",
  islamic:
    "contemporary Islamic luxury with geometric patterns, mashrabiya screens, warm stone, carved wood, and ambient lantern lighting",
  minimal:
    "minimalist serene luxury with natural light, calm textures, and understated high-end materials",
  luxury:
    "ultra-luxury Gulf design with bespoke furniture, rich textures, statement lighting, and museum-grade finishes",
  contemporary:
    "contemporary Saudi luxury with warm earth tones, sculptural decor, layered lighting, and architect-designed composition",
};

export function buildDesignEditPrompt(input: DesignGenerateInput): string {
  const style = getStyleById(input.styleId);
  const stylePrompt = STYLE_PROMPTS[input.styleId] ?? "luxury design";
  const room = getRoomLabel(input.spaceType, input.roomType, input.locale);

  const preserve =
    "Preserve the exact camera angle, room geometry, wall positions, windows, doors, columns, and overall perspective. Do not change the building structure.";

  if (input.spaceType === "booth") {
    return `You are a Saudi exhibition and retail design visualizer. Transform this ${room} photo into a premium ${stylePrompt} trade-show or brand activation space. Redesign booth structure, signage, lighting, flooring, product displays, and customer flow for a high-end Saudi exhibition. ${preserve} Photorealistic commercial visualization ready for client approval.`;
  }

  if (input.spaceType === "exterior") {
    return `You are a Saudi architecture and facade designer. Transform this ${room} exterior photo into ${stylePrompt}. Redesign cladding, entrances, window surrounds, landscape, lighting, and signage while keeping the same building massing. ${preserve} Photorealistic architectural visualization for a Gulf luxury decor and contracting company.`;
  }

  if (input.roomType === "empty_room") {
    return `You are a Saudi interior designer. This ${room} is empty or unfinished. Stage and furnish it in ${stylePrompt}: add flooring finish, wall treatments, ceiling details, lighting, furniture, textiles, and decor appropriate for the space. ${preserve} Photorealistic magazine-quality interior suitable for Ruwaq decor clients in Saudi Arabia.`;
  }

  if (input.roomType === "shop") {
    return `You are a Saudi retail interior designer. Transform this ${room} into ${stylePrompt} commercial retail design with premium merchandising displays, lighting, materials, and customer circulation. ${preserve} Photorealistic shop visualization for a luxury Saudi fit-out company.`;
  }

  return `You are a Saudi interior designer. Transform this ${room} interior photo into a stunning ${stylePrompt}. Redesign flooring, wall finishes, ceiling details, lighting fixtures, furniture, textiles, and decor. ${preserve} Photorealistic magazine-quality interior rendering for Ruwaq decor and contracting.`;
}
