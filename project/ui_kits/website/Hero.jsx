/* @jsx React.createElement */
function Hero() {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.photo} />
      <div style={heroStyles.gradient} />
      <div style={heroStyles.content}>
        <div style={heroStyles.eyebrow}>SOCAR Georgia Petroleum</div>
        <h1 style={heroStyles.h1}>Powering Georgia.<br/>Building infrastructure.</h1>
        <p style={heroStyles.lede}>European-grade fuel, gas, and energy services across a nationwide network of more than 100 stations.</p>
        <div style={heroStyles.ctas}>
          <button style={heroStyles.primary}>Find a Station <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i></button>
          <button style={heroStyles.secondary}>For Business</button>
        </div>
      </div>
    </section>
  );
}

const heroStyles = {
  wrap: { position: 'relative', height: 640, overflow: 'hidden', background: '#0A0A0A' },
  photo: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2E3236 0%, #6B7177 40%, #9CA1A7 100%)', backgroundBlendMode: 'multiply' },
  gradient: { position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,.85) 0%, rgba(10,10,10,.55) 50%, rgba(10,10,10,.2) 100%)' },
  content: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '120px 32px', color: '#fff' },
  eyebrow: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 16 },
  h1: { fontFamily: "'Inter Tight', sans-serif", fontSize: 80, lineHeight: 1.02, letterSpacing: '-0.02em', fontWeight: 800, margin: 0, maxWidth: 800 },
  lede: { fontFamily: 'Inter, sans-serif', fontSize: 20, lineHeight: 1.5, color: '#CACDD1', marginTop: 24, maxWidth: 560 },
  ctas: { display: 'flex', gap: 12, marginTop: 40 },
  primary: { background: 'var(--socar-red)', color: '#fff', border: 'none', borderRadius: 4, padding: '14px 22px', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 },
  secondary: { background: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: 4, padding: '14px 22px', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, cursor: 'pointer' },
};

window.Hero = Hero;
