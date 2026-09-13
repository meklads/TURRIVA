"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";
import { UNIT_FLOORS, statusColor, type GalleryUnit, type UnitStatus } from "../lib/demo-units";

type Props = {
  floorHighlight: Map<number, UnitStatus | "mixed">;
  units: readonly GalleryUnit[];
  onSelectFloor: (floor: number) => void;
};

function FloorSlab({
  floor,
  y,
  highlight,
  onSelect,
}: {
  floor: number;
  y: number;
  highlight?: UnitStatus | "mixed";
  onSelect: (floor: number) => void;
}) {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const color =
    highlight === "mixed"
      ? "#b08d57"
      : highlight
        ? statusColor(highlight)
        : hovered
          ? "#c4b49a"
          : "#d9cbb4";

  return (
    <mesh
      ref={mesh}
      position={[0, y, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(floor);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      scale={hovered ? [1.04, 1, 1.04] : [1, 1, 1]}
    >
      <boxGeometry args={[2.4, 0.42, 2.4]} />
      <meshStandardMaterial color={color} roughness={0.55} metalness={0.08} />
    </mesh>
  );
}

export function UnitTowerScene({ floorHighlight, onSelectFloor }: Props) {
  const group = useRef<Group>(null);
  const floors = useMemo(() => [...UNIT_FLOORS], []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[6, 10, 4]} intensity={1.15} />
      <directionalLight position={[-4, 3, -6]} intensity={0.35} />
      <group ref={group} position={[0, -2.2, 0]}>
        <mesh position={[0, 0.15, 0]} receiveShadow>
          <cylinderGeometry args={[3.2, 3.4, 0.18, 48]} />
          <meshStandardMaterial color="#ebe4d6" roughness={0.9} />
        </mesh>
        {floors.map((floor, i) => (
          <FloorSlab
            key={floor}
            floor={floor}
            y={0.55 + i * 0.55}
            highlight={floorHighlight.get(floor)}
            onSelect={onSelectFloor}
          />
        ))}
        <mesh position={[0, 0.55 + floors.length * 0.55, 0]}>
          <coneGeometry args={[1.15, 0.7, 4]} />
          <meshStandardMaterial color="#9a7b4f" metalness={0.2} roughness={0.4} />
        </mesh>
      </group>
    </>
  );
}
