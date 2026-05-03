import { Phone, MapPin } from 'lucide-react';
import socarFlame from '../../assets/logos/socar-flame.png';

const COLS = [
  { h: 'Company',     items: ['About', 'Sustainability', 'Careers', 'Press', 'Contact'] },
  { h: 'Services',    items: ['Petrol', 'Diesel', 'LPG', 'EV Charging', 'WayMart'] },
  { h: 'For Business', items: ['Fuel Cards', 'Fleet Solutions', 'Wholesale', 'Bunkering'] },
  { h: 'Resources',   items: ['Annual Report', 'Sustainability Report', 'Quality Standards'] },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink-900)', color: '#fff' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '80px 32px 64px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <img src={socarFlame} alt="SOCAR" style={{ height: 40, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: 1.2, color: '#fff' }}>SOCAR</span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-300)', maxWidth: 320, margin: 0 }}>
            European-grade fuel and energy services across Georgia. Established 2006.
          </p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Phone size={16} color="var(--ink-300)" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-200)' }}>+995 32 224 7778</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <MapPin size={16} color="var(--ink-300)" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-200)' }}>Kavtaradze 19, Tbilisi 0186</span>
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.h}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              {col.h}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-300)', textDecoration: 'none' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--ink-700)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-400)' }}>
            © 2026 SOCAR Georgia Petroleum LLC. A subsidiary of SOCAR Energy Georgia.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <a key={l} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-400)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
