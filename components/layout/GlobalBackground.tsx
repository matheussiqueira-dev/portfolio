export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#030303]" />

      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="absolute -bottom-44 -right-36 h-[520px] w-[520px] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="absolute inset-0 bg-[radial-gradient(58%_42%_at_50%_-12%,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_12%_85%,rgba(76,29,149,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,3,0)_0%,#030303_100%)]" />
    </div>
  );
}
