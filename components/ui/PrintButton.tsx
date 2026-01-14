"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="mt-4 px-4 py-2 border rounded w-fit text-sm print:hidden"
    >
      Baixar CV (PDF)
    </button>
  );
}
