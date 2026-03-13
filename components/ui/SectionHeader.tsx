import { cn } from "@/core/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="ui-label mb-3 text-sm text-[color:var(--muted)]">{eyebrow}</p>
      ) : null}
      <h2 className="section-title text-3xl text-[color:var(--foreground)] sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base text-[color:var(--muted)] sm:text-lg">{subtitle}</p>
      ) : null}
      <div
        className={cn(
          "mt-5 h-px w-28 bg-[linear-gradient(90deg,var(--glow),transparent)]",
          isCenter && "mx-auto"
        )}
      />
    </header>
  );
}
