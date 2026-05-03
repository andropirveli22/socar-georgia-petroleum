import { Fuel, Zap, ShoppingBag, Coffee, Wrench, Wind } from 'lucide-react';
import socarFlame from '../../assets/logos/socar-flame.png';

const TILES = [
  { Icon: Fuel,        label: 'Fuel',     color: '#E2231A' },
  { Icon: Zap,         label: 'EV',       color: '#0099D8' },
  { Icon: ShoppingBag, label: 'WayMart',  color: '#0A0A0A' },
  { Icon: Coffee,      label: 'Café',     color: '#0A0A0A' },
  { Icon: Wrench,      label: 'Service',  color: '#0A0A0A' },
  { Icon: Wind,        label: 'Car wash', color: '#0099D8' },
];

export default function Wayfinding() {
  return (
    <div style={{ width: 480, background: '#fff', borderRadius: 8, border: '1px solid var(--border-hairline)', overflow: 'hidden', fontFamily: "'Inter Tight', sans-serif", boxShadow: '0 12px 40px rgba(10,10,10,.08)' }}>
      <div style={{ background: '#fff', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)' }}>
        <img src={socarFlame} alt="SOCAR" style={{ height: 32 }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--ink-500)' }}>EXIT 24 · 800 m</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border-hairline)' }}>
        {TILES.map(({ Icon, label, color }) => (
          <div key={label} style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, borderRight: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)', background: '#fff' }}>
            <Icon size={28} color={color} strokeWidth={2} />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--ink-900)' }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#0A0A0A', padding: '14px 20px', textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#fff' }}>
        OPEN 24/7 · NEXT STATION 38 KM
      </div>
    </div>
  );
}
