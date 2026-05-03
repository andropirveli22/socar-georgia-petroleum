/* @jsx React.createElement */
function Wayfinding() {
  const tiles = [
    { icon: 'fuel', label: 'Fuel', color: '#E2231A' },
    { icon: 'zap', label: 'EV', color: '#0099D8' },
    { icon: 'shopping-bag', label: 'WayMart', color: '#0A0A0A' },
    { icon: 'coffee', label: 'Café', color: '#0A0A0A' },
    { icon: 'wrench', label: 'Service', color: '#0A0A0A' },
    { icon: 'wind', label: 'Car wash', color: '#0099D8' },
  ];
  return (
    <div style={wf.wrap}>
      <div style={wf.head}>
        <img src="../../assets/logos/socar-flame.png" alt="SOCAR" style={{ height: 32 }} />
        <span style={wf.km}>EXIT 24 · 800 m</span>
      </div>
      <div style={wf.grid}>
        {tiles.map((t) => (
          <div key={t.label} style={wf.tile}>
            <i data-lucide={t.icon} style={{ width: 28, height: 28, color: t.color, strokeWidth: 2 }}></i>
            <div style={wf.label}>{t.label}</div>
          </div>
        ))}
      </div>
      <div style={wf.foot}>OPEN 24/7 · NEXT STATION 38 KM</div>
    </div>
  );
}

const wf = {
  wrap: { width: 480, background: '#fff', borderRadius: 8, border: '1px solid var(--ink-200)', overflow: 'hidden', fontFamily: "'Inter Tight', sans-serif", boxShadow: '0 12px 40px rgba(10,10,10,.08)' },
  head: { background: '#fff', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--ink-200)' },
  km: { fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--ink-500)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink-200)' },
  tile: { padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, borderRight: '1px solid var(--ink-200)', borderBottom: '1px solid var(--ink-200)', background: '#fff' },
  label: { fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--ink-900)' },
  foot: { background: '#0A0A0A', padding: '14px 20px', textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#fff' },
};

window.Wayfinding = Wayfinding;
