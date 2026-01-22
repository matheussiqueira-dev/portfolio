"use client";

type Props = {
  label?: string;
};

export default function PrintButton({ label = "Baixar CV (PDF)" }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-outline mt-4 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 print:hidden"
    >
      {label}
    </button>
  );
}
