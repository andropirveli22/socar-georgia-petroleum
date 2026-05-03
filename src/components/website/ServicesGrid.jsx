import { Fuel, Truck, Flame, Zap, ShoppingBag, CreditCard, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const SERVICES = [
  { Icon: Fuel,        title: 'Petrol',       body: 'Premium 95 and Super 98 imported from European refineries.',           color: 'var(--ink-900)' },
  { Icon: Truck,       title: 'Euro 5 Diesel', body: 'Imported from Azerbaijan, with or without nano-additive.',             color: 'var(--ink-900)' },
  { Icon: Flame,       title: 'LPG',           body: 'Liquefied petroleum gas at select stations nationwide.',               color: 'var(--socar-red)' },
  { Icon: Zap,         title: 'EV Charging',   body: 'DC fast charging across the highway corridor network.',                color: 'var(--socar-blue)' },
  { Icon: ShoppingBag, title: 'WayMart',       body: 'Convenience store and café at most stations, open 24/7.',             color: 'var(--ink-900)' },
  { Icon: CreditCard,  title: 'Fuel Cards',    body: 'Fleet management and corporate fuel accounts.',                        color: 'var(--ink-900)' },
];

const baseCardStyle = {
  background: '#fff', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-3)',
  padding: 28, display: 'flex', flexDirection: 'column', gap: 12,
  transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
  cursor: 'pointer',
};

function ServiceCard({ Icon, title, body, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...baseCardStyle,
        ...(hovered ? {
          transform: 'translateY(-4px)',
          boxShadow: 'var(--shadow-3)',
          borderColor: 'transparent',
        } : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={28} color={color} strokeWidth={2} />
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink-900)', marginTop: 8 }}>
        {title}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-600)' }}>
        {body}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
        Learn more <ArrowRight size={14} />
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section style={{ background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 12 }}>
            Services
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1.1, letterSpacing: 'var(--tr-tight)', fontWeight: 800, color: 'var(--ink-900)', margin: 0 }}>
            Everything for the road.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
