export type CommandActionVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "chip"
  | "icon";

const BASE =
  "command-action inline-flex items-center gap-2 rounded-[0.95rem] border text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60";

const VARIANTS: Record<CommandActionVariant, string> = {
  primary: `${BASE} command-action--primary px-4 py-2.5`,
  secondary: `${BASE} command-action--secondary px-4 py-2.5`,
  ghost: `${BASE} command-action--ghost px-4 py-2.5`,
  chip: `${BASE} command-action--chip px-3 py-1.5 text-xs uppercase tracking-[0.18em]`,
  icon: `${BASE} command-action--ghost h-11 w-11 justify-center p-0`,
};

export const commandActionClass = (
  variant: CommandActionVariant = "secondary",
  extraClassName?: string
) => [VARIANTS[variant], extraClassName].filter(Boolean).join(" ");
