export const DESIGN_CITIES = ["jeddah", "makkah", "other"] as const;
export type DesignCity = (typeof DESIGN_CITIES)[number];

export function isDesignCity(value: string): value is DesignCity {
  return (DESIGN_CITIES as readonly string[]).includes(value);
}

export function citySupportsExecution(city: DesignCity): boolean {
  return city === "jeddah" || city === "makkah";
}
