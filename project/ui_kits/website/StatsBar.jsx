/* @jsx React.createElement */
function StatsBar() {
  const stats = [
    { num: '100+', label: 'Filling stations' },
    { num: '1,500', label: 'Employees' },
    { num: '13', label: 'Countries' },
    { num: '2006', label: 'Established' },
  ];
  return (
    <section style={statsStyles.wrap}>
      <div style={statsStyles.inner}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ ...statsStyles.cell, borderLeft: i === 0 ? 'none' : '1px solid var(--ink-200)' }}>
            <div style={statsStyles.num}>{s.num}</div>
            <div style={statsStyles.lab}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const statsStyles = {
  wrap: { background: '#fff', borderTop: '1px solid var(--ink-200)', borderBottom: '1px solid var(--ink-200)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '64px 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' },
  cell: { padding: '0 32px' },
  num: { fontFamily: "'Inter Tight', sans-serif", fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.03em', fontWeight: 800, color: 'var(--ink-900)', fontVariantNumeric: 'tabular-nums' },
  lab: { fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)', marginTop: 12 },
};

window.StatsBar = StatsBar;
