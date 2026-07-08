import type { SpaceType } from "./styles";

export type ConversionSpacePreset = {
  id: string;
  spaceType: SpaceType;
  roomType: string;
};

export const CONVERSION_SPACE_PRESETS: ConversionSpacePreset[] = [
  { id: "living", spaceType: "interior", roomType: "living" },
  { id: "bedroom", spaceType: "interior", roomType: "bedroom" },
  { id: "kitchen", spaceType: "interior", roomType: "kitchen" },
  { id: "bathroom", spaceType: "interior", roomType: "bathroom" },
  { id: "majlis", spaceType: "interior", roomType: "majlis" },
  { id: "exterior", spaceType: "exterior", roomType: "villa" },
];

/** Styles shown in the simplified conversion flow */
export const CONVERSION_STYLE_IDS = [
  "modern",
  "luxury",
  "minimal",
  "neoclassic",
  "contemporary",
] as const;
