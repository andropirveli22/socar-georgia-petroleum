/* @jsx React.createElement */
function NewsRow() {
  const items = [
    { tag: 'Sustainability', date: 'Apr 18, 2026', title: 'Solar panels now generate 12% of station network electricity', body: 'Phase two of our rooftop-PV rollout is complete across 47 stations.' },
    { tag: 'Operations', date: 'Mar 02, 2026', title: 'New multifunctional complex opens on the western highway', body: 'Located in Urbnisi, including WayMart, family areas, and EV charging.' },
    { tag: 'Community', date: 'Feb 20, 2026', title: 'Sagarejo kindergarten opens, donated by SOCAR to the state', body: 'Designed and built at no cost to the municipality.' },
  ];
  return (
    <section style={newsStyles.wrap}>
      <div style={newsStyles.inner}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={newsStyles.eyebrow}>Newsroom</div>
            <h2 style={newsStyles.h2}>Latest from SOCAR Georgia.</h2>
          </div>
          <a href="#" style={newsStyles.viewAll}>View all news <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i></a>
        </div>
        <div style={newsStyles.grid}>
          {items.map((it, i) => (
            <article key={i} style={newsStyles.card}>
              <div style={newsStyles.photo}></div>
              <div style={newsStyles.meta}>
                <span style={newsStyles.tag}>{it.tag}</span>
                <span style={newsStyles.date}>{it.date}</span>
              </div>
              <h3 style={newsStyles.title}>{it.title}</h3>
              <p style={newsStyles.body}>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const newsStyles = {
  wrap: { background: 'var(--bg-1)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '96px 32px' },
  eyebrow: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 12 },
  h2: { fontFamily: "'Inter Tight', sans-serif", fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--ink-900)', margin: 0 },
  viewAll: { fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--ink-900)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, borderBottom: '1px solid var(--ink-900)', paddingBottom: 2 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  card: { background: '#fff', border: '1px solid var(--ink-200)', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  photo: { aspectRatio: '16/10', background: 'linear-gradient(135deg, #4A4F54, #9CA1A7)' },
  meta: { display: 'flex', gap: 10, alignItems: 'center', padding: '20px 24px 0' },
  tag: { fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--socar-red)' },
  date: { fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--ink-500)' },
  title: { fontFamily: "'Inter Tight', sans-serif", fontSize: 20, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--ink-900)', margin: '8px 24px 0' },
  body: { fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-600)', margin: '8px 24px 24px' },
};

window.NewsRow = NewsRow;
