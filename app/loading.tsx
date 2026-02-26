/**
 * Boot screen - Tron style
 * Displayed during initial page load and transitions
 */
export default function Loading() {
  return (
    <div className="boot-screen">
      <div className="boot-content">
        <h1 className="boot-title">INICIALIZANDO SISTEMA</h1>
        <div className="boot-bar">
          <div className="boot-progress" />
        </div>
      </div>
    </div>
  )
}
