import { ArrowRight } from 'lucide-react';

const styles = {
  wrap: { position: 'relative', height: 640, overflow: 'hidden', background: '#0A0A0A' },
  photo: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, #2E3236 0%, #6B7177 40%, #9CA1A7 100%)',
  },
  gradient: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to right, rgba(10,10,10,.85) 0%, rgba(10,10,10,.55) 50%, rgba(10,10,10,.2) 100%)',
  },
  content: { position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '120px 32px', color: '#fff' },
  eyebrow: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
    letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase',
    color: 'var(--socar-red)', marginBottom: 16,
  },
  h1: {
    fontFamily: 'var(--font-display)', fontSize: 80, lineHeight: 1.02,
    letterSpacing: 'var(--tr-tight)', fontWeight: 800, margin: 0, maxWidth: 800,
  },
  lede: {
    fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.5,
    color: 'var(--ink-300)', marginTop: 24, maxWidth: 560,
  },
  ctas: { display: 'flex', gap: 12, marginTop: 40 },
  primary: {
    background: 'var(--socar-red)', color: '#fff', border: 'none',
    borderRadius: 'var(--r-2)', padding: '14px 22px',
    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'background var(--dur) var(--ease)',
  },
  secondary: {
    background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.6)',
    borderRadius: 'var(--r-2)', padding: '14px 22px',
    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, cursor: 'pointer',
  },
};

export default function Hero() {
  return (
    <section style={styles.wrap}>
      <div style={styles.photo} />
      <div style={styles.gradient} />
      <div style={styles.content}>
        <div style={styles.eyebrow}>SOCAR Georgia Petroleum</div>
        <h1 style={styles.h1}>Powering Georgia.<br />Building infrastructure.</h1>
        <p style={styles.lede}>
          European-grade fuel, gas, and energy services across a nationwide network of more than 100 stations.
        </p>
        <div style={styles.ctas}>
          <button style={styles.primary}>
            Find a Station <ArrowRight size={16} />
          </button>
          <button style={styles.secondary}>For Business</button>
        </div>
      </div>
    </section>
  );
}
