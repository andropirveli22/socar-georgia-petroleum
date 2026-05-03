const styles = {
  wrap: { background: '#fff', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' },
  inner: {
    maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 32px',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
  },
  cell: { padding: '0 32px' },
  num: {
    fontFamily: 'var(--font-display)', fontSize: 80, lineHeight: 0.95,
    letterSpacing: '-0.03em', fontWeight: 800, color: 'var(--ink-900)',
    fontVariantNumeric: 'tabular-nums',
  },
  lab: {
    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
    letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase',
    color: 'var(--ink-500)', marginTop: 12,
  },
};

const STATS = [
  { num: '100+', label: 'Filling stations' },
  { num: '1,500', label: 'Employees' },
  { num: '13', label: 'Countries' },
  { num: '2006', label: 'Established' },
];

export default function StatsBar() {
  return (
    <section style={styles.wrap}>
      <div style={styles.inner}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ ...styles.cell, borderLeft: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
            <div style={styles.num}>{s.num}</div>
            <div style={styles.lab}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
