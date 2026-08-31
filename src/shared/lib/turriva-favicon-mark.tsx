type Props = {
  size: number;
};

/** Shared mark for app/icon and app/apple-icon (ImageResponse). */
export function TurrivaFaviconMark({ size }: Props) {
  const fontSize = Math.round(size * 0.56);
  const radius = Math.round(size * 0.22);
  const border = Math.max(1, Math.round(size / 40));

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#121212",
        borderRadius: radius,
        border: `${border}px solid #b3864b`,
      }}
    >
      <div
        style={{
          color: "#bb8e4a",
          fontSize,
          fontWeight: 600,
          fontFamily: 'Georgia, "Times New Roman", serif',
          lineHeight: 1,
          marginTop: -Math.round(size * 0.03),
        }}
      >
        T
      </div>
    </div>
  );
}
