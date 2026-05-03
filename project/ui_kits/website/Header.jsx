/* @jsx React.createElement */
const { useState } = React;

function Header({ active = 'Home', onNav }) {
  const items = ['Home', 'Company', 'Services', 'For Business', 'News', 'Sustainability'];
  return (
    <header style={headerStyles.bar}>
      <div style={headerStyles.inner}>
        <a href="#" style={headerStyles.brand} onClick={(e) => { e.preventDefault(); onNav?.('Home'); }}>
          <img src="../../assets/logos/socar-flame.png" alt="SOCAR" style={{ height: 36 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, lineHeight: 1 }}>
            <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: 1, color: '#0A0A0A' }}>SOCAR</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 8.5, letterSpacing: 1.6, color: '#6B7177', marginTop: 2 }}>GEORGIA  PETROLEUM</span>
          </div>
        </a>
        <nav style={headerStyles.nav}>
          {items.map((it) => (
            <a key={it} href="#" onClick={(e) => { e.preventDefault(); onNav?.(it); }}
               style={{ ...headerStyles.link, ...(active === it ? headerStyles.linkActive : {}) }}>
              {it}
            </a>
          ))}
        </nav>
        <div style={headerStyles.right}>
          <button style={headerStyles.lang}>EN / ქა</button>
          <button style={headerStyles.cta}>Find a Station</button>
        </div>
      </div>
    </header>
  );
}

const headerStyles = {
  bar: { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(12px) saturate(120%)', WebkitBackdropFilter: 'blur(12px) saturate(120%)', borderBottom: '1px solid var(--border-hairline)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'space-between' },
  brand: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  nav: { display: 'flex', gap: 24, flex: 1, justifyContent: 'center' },
  link: { fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: 'var(--ink-700)', textDecoration: 'none', padding: '6px 2px', borderBottom: '2px solid transparent' },
  linkActive: { color: 'var(--ink-900)', borderBottomColor: 'var(--socar-red)', fontWeight: 600 },
  right: { display: 'flex', gap: 12, alignItems: 'center' },
  lang: { background: 'transparent', border: '1px solid var(--ink-200)', borderRadius: 4, padding: '6px 10px', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--ink-700)', cursor: 'pointer' },
  cta: { background: 'var(--socar-red)', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 16px', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer' },
};

window.Header = Header;
