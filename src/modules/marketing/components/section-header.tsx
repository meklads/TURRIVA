type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  dark?: boolean;
};

/** Shared landing section heading — consistent rhythm. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <header className={alignClass}>
      <p className={dark ? "ruwaq-eyebrow-dark" : "ruwaq-eyebrow"}>{eyebrow}</p>
      <h2
        className={`ruwaq-section-title mt-2 ${dark ? "text-white" : ""} ${align === "center" ? "max-w-3xl" : ""}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`ruwaq-section-lead mt-3 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"} ${dark ? "text-white/65" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
