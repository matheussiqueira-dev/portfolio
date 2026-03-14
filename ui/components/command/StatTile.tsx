type Props = {
  label: string;
  value: string;
  detail?: string;
  tone?: "default" | "accent";
};

export function StatTile({ label, value, detail, tone = "default" }: Props) {
  return (
    <div className={`stat-tile ${tone === "accent" ? "stat-tile--accent" : ""}`}>
      <p className="stat-tile__label">{label}</p>
      <p className="stat-tile__value">{value}</p>
      {detail ? <p className="stat-tile__detail">{detail}</p> : null}
    </div>
  );
}
