/* @jsx React.createElement */
function ServicesGrid() {
  const items = [
    { icon: 'fuel', title: 'Petrol', body: 'Premium 95 and Super 98 imported from European refineries.', color: 'var(--ink-900)' },
    { icon: 'truck', title: 'Euro 5 Diesel', body: 'Imported from Azerbaijan, with or without nano-additive.', color: 'var(--ink-900)' },
    { icon: 'flame', title: 'LPG', body: 'Liquefied petroleum gas at select stations nationwide.', color: 'var(--socar-red)' },
    { icon: 'zap', title: 'EV Charging', body: 'DC fast charging across the highway corridor network.', color: 'var(--socar-blue)' },
    { icon: 'shopping-bag', title: 'WayMart', body: 'Convenience store and café at most stations, open 24/7.', color: 'var(--ink-900)' },
    { icon: 'credit-card', title: 'Fuel Cards', body: 'Fleet management and corporate fuel accounts.', color: 'var(--ink-900)' },
  ];
  return (
    <section style={svcStyles.wrap}>
      <div style={svcStyles.inner}>
        <div style={svcStyles.head}>
          <div style={svcStyles.eyebrow}>Services</div>
          <h2 style={svcStyles.h2}>Everything for the road.</h2>
        </div>
        <div style={svcStyles.grid}>
          {items.map((it) => (
            <div key={it.title} style={svcStyles.card} className="svc-card">
              <i data-lucide={it.icon} style={{ width: 28, height: 28, color: it.color, strokeWidth: 2 }}></i>
              <div style={svcStyles.title}>{it.title}</div>
              <div style={svcStyles.body}>{it.body}</div>
              <div style={svcStyles.more}>Learn more <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const svcStyles = {
  wrap: { background: 'var(--bg-1)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '96px 32px' },
  head: { marginBottom: 48 },
  eyebrow: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 12 },
  h2: { fontFamily: "'Inter Tight', sans-serif", fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--ink-900)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  card: { background: '#fff', border: '1px solid var(--ink-200)', borderRadius: 8, padding: 28, display: 'flex', flexDirection: 'column', gap: 12, transition: 'all 200ms cubic-bezier(.2,.6,.2,1)', cursor: 'pointer' },
  title: { fontFamily: "'Inter Tight', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink-900)', marginTop: 8 },
  body: { fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-600)' },
  more: { fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8 },
};

window.ServicesGrid = ServicesGrid;
