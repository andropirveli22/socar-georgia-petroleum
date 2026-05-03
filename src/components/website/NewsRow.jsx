import { ArrowRight } from 'lucide-react';

const NEWS = [
  {
    tag: 'Sustainability', date: 'Apr 18, 2026',
    title: 'Solar panels now generate 12% of station network electricity',
    body: 'Phase two of our rooftop-PV rollout is complete across 47 stations.',
  },
  {
    tag: 'Operations', date: 'Mar 02, 2026',
    title: 'New multifunctional complex opens on the western highway',
    body: 'Located in Urbnisi, including WayMart, family areas, and EV charging.',
  },
  {
    tag: 'Community', date: 'Feb 20, 2026',
    title: 'Sagarejo kindergarten opens, donated by SOCAR to the state',
    body: 'Designed and built at no cost to the municipality.',
  },
];

export default function NewsRow() {
  return (
    <section style={{ background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 12 }}>
              Newsroom
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1.1, letterSpacing: 'var(--tr-tight)', fontWeight: 800, color: 'var(--ink-900)', margin: 0 }}>
              Latest from SOCAR Georgia.
            </h2>
          </div>
          <a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ink-900)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, borderBottom: '1px solid var(--ink-900)', paddingBottom: 2 }}>
            View all news <ArrowRight size={14} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {NEWS.map((item, i) => (
            <article key={i} style={{ background: '#fff', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-3)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, #4A4F54, #9CA1A7)' }} />
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '20px 24px 0' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--socar-red)' }}>{item.tag}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-500)' }}>{item.date}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--ink-900)', margin: '8px 24px 0' }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-600)', margin: '8px 24px 24px' }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
