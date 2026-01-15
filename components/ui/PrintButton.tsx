"use client";

type Props = {
  label?: string;
};

export default function PrintButton({ label = "Baixar CV (PDF)" }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="mt-4 px-4 py-2 rounded border border-white/20 w-fit text-sm text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 print:hidden"
    >
      {label}
    </button>
  );
}
