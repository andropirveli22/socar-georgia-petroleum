import socarFlame from '../../assets/logos/socar-flame.png';

const FUEL_ROWS = [
  { name: 'EURO REGULAR', sub: 'Premium 95', price: '3.05' },
  { name: 'EURO PREMIUM', sub: 'Super 98',   price: '3.29' },
  { name: 'EURO DIESEL',  sub: 'with nano additive', price: '3.15' },
  { name: 'LPG',          sub: '',           price: '1.79' },
];

export default function PriceBoard() {
  return (
    <div style={{ width: 360, background: '#0A0A0A', borderRadius: 8, padding: '20px 22px', color: '#fff', boxShadow: '0 12px 40px rgba(10,10,10,.3)', fontFamily: "'Inter Tight', sans-serif" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2E3236', paddingBottom: 14, marginBottom: 14 }}>
        <img src={socarFlame} alt="SOCAR" style={{ height: 36 }} />
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#E2231A' }}>FUEL · 24/7</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {FUEL_ROWS.map((r) => (
          <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px dashed #2E3236' }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', color: '#fff' }}>{r.name}</div>
              {r.sub && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#9CA1A7', marginTop: 2 }}>{r.sub}</div>}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, fontVariantNumeric: 'tabular-nums' }}>
              <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: '#E2231A' }}>{r.price}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#9CA1A7' }}>₾/L</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
