export default function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="background-grid">
      <div className="background-grid__mesh" />
      <div className="background-grid__pulse" />
      <div className="background-grid__scan" />
    </div>
  );
}
