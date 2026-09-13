export type UnitStatus = "available" | "reserved" | "sold";
export type UnitType = "penthouse" | "duplex" | "villa" | "apartment";

export type GalleryUnit = {
  id: string;
  code: string;
  floor: number;
  type: UnitType;
  status: UnitStatus;
  areaM2: number;
  priceSar: number;
  beds: number;
};

/** Demo inventory for the InteractiveUnitViewer3D showcase (not live CRM). */
export const DEMO_UNITS: readonly GalleryUnit[] = [
  { id: "u-12a", code: "12A", floor: 12, type: "apartment", status: "available", areaM2: 148, priceSar: 2_150_000, beds: 3 },
  { id: "u-12b", code: "12B", floor: 12, type: "apartment", status: "reserved", areaM2: 132, priceSar: 1_980_000, beds: 2 },
  { id: "u-15a", code: "15A", floor: 15, type: "duplex", status: "available", areaM2: 286, priceSar: 4_250_000, beds: 4 },
  { id: "u-18p", code: "18P", floor: 18, type: "penthouse", status: "available", areaM2: 420, priceSar: 8_900_000, beds: 5 },
  { id: "u-08v", code: "V08", floor: 1, type: "villa", status: "sold", areaM2: 510, priceSar: 6_400_000, beds: 5 },
  { id: "u-09v", code: "V09", floor: 1, type: "villa", status: "available", areaM2: 495, priceSar: 6_150_000, beds: 4 },
  { id: "u-07a", code: "07A", floor: 7, type: "apartment", status: "sold", areaM2: 118, priceSar: 1_650_000, beds: 2 },
  { id: "u-10a", code: "10A", floor: 10, type: "apartment", status: "available", areaM2: 155, priceSar: 2_280_000, beds: 3 },
  { id: "u-14d", code: "14D", floor: 14, type: "duplex", status: "reserved", areaM2: 310, priceSar: 4_800_000, beds: 4 },
  { id: "u-16a", code: "16A", floor: 16, type: "apartment", status: "available", areaM2: 168, priceSar: 2_520_000, beds: 3 },
] as const;

export const UNIT_FLOORS = [1, 7, 10, 12, 14, 15, 16, 18] as const;

export function statusColor(status: UnitStatus): string {
  if (status === "available") return "#2f9e6b";
  if (status === "reserved") return "#c9a227";
  return "#8a6a5a";
}
