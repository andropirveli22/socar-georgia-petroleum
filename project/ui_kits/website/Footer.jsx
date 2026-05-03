/* @jsx React.createElement */
function Footer() {
  const cols = [
    { h: 'Company', items: ['About', 'Sustainability', 'Careers', 'Press', 'Contact'] },
    { h: 'Services', items: ['Petrol', 'Diesel', 'LPG', 'EV Charging', 'WayMart'] },
    { h: 'For Business', items: ['Fuel Cards', 'Fleet Solutions', 'Wholesale', 'Bunkering'] },
    { h: 'Resources', items: ['Annual Report', 'Sustainability Report', 'Quality Standards'] },
  ];
  return (
    <footer style={footerStyles.wrap}>
      <div style={footerStyles.inner}>
        <div style={footerStyles.brand}>
          <img src="../../assets/logos/socar-flame.png" alt="SOCAR" style={{ height: 40 }} />
          <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: 1.2, color: '#fff', marginTop: 6 }}>SOCAR</span>
          <p style={footerStyles.tag}>European-grade fuel and energy services across Georgia. Established 2006.</p>
          <div style={footerStyles.contactRow}>
            <i data-lucide="phone" style={{ width: 16, height: 16, color: 'var(--ink-300)' }}></i>
            <span style={footerStyles.contact}>+995 32 224 7778</span>
          </div>
          <div style={footerStyles.contactRow}>
            <i data-lucide="map-pin" style={{ width: 16, height: 16, color: 'var(--ink-300)' }}></i>
            <span style={footerStyles.contact}>Kavtaradze 19, Tbilisi 0186</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={footerStyles.colH}>{c.h}</div>
            <ul style={footerStyles.list}>
              {c.items.map((i) => <li key={i} style={footerStyles.li}><a href="#" style={footerStyles.link}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={footerStyles.bottom}>
        <div style={footerStyles.bottomInner}>
          <div style={footerStyles.copy}>© 2026 SOCAR Georgia Petroleum LLC. A subsidiary of SOCAR Energy Georgia.</div>
          <div style={footerStyles.legal}>
            <a href="#" style={footerStyles.legalLink}>Privacy</a>
            <a href="#" style={footerStyles.legalLink}>Terms</a>
            <a href="#" style={footerStyles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyles = {
  wrap: { background: 'var(--ink-900)', color: '#fff' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '80px 32px 64px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 48 },
  brand: { display: 'flex', flexDirection: 'column', gap: 16 },
  tag: { fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-300)', maxWidth: 320, margin: 0 },
  contactRow: { display: 'flex', gap: 8, alignItems: 'center' },
  contact: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--ink-200)' },
  colH: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 },
  li: {},
  link: { fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--ink-300)', textDecoration: 'none' },
  bottom: { borderTop: '1px solid var(--ink-700)' },
  bottomInner: { maxWidth: 1280, margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copy: { fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--ink-400)' },
  legal: { display: 'flex', gap: 24 },
  legalLink: { fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--ink-400)', textDecoration: 'none' },
};

window.Footer = Footer;
