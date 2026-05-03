/* @jsx React.createElement */
function PriceBoard() {
  const rows = [
    { name: 'EURO REGULAR', sub: 'Premium 95', price: '3.05' },
    { name: 'EURO PREMIUM', sub: 'Super 98', price: '3.29' },
    { name: 'EURO DIESEL', sub: 'with nano additive', price: '3.15' },
    { name: 'LPG', sub: '', price: '1.79' },
  ];
  return (
    <div style={pbStyles.board}>
      <div style={pbStyles.head}>
        <img src="../../assets/logos/socar-flame.png" alt="SOCAR" style={{ height: 36 }} />
        <div style={pbStyles.fuelLabel}>FUEL · 24/7</div>
      </div>
      <div style={pbStyles.list}>
        {rows.map((r) => (
          <div key={r.name} style={pbStyles.row}>
            <div>
              <div style={pbStyles.name}>{r.name}</div>
              {r.sub && <div style={pbStyles.sub}>{r.sub}</div>}
            </div>
            <div style={pbStyles.price}>
              <span style={pbStyles.priceNum}>{r.price}</span>
              <span style={pbStyles.unit}>₾/L</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pbStyles = {
  board: { width: 360, background: '#0A0A0A', borderRadius: 8, padding: '20px 22px', color: '#fff', boxShadow: '0 12px 40px rgba(10,10,10,.3)', fontFamily: "'Inter Tight', sans-serif" },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2E3236', paddingBottom: 14, marginBottom: 14 },
  fuelLabel: { fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#E2231A' },
  list: { display: 'flex', flexDirection: 'column', gap: 14 },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px dashed #2E3236' },
  name: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', color: '#fff' },
  sub: { fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#9CA1A7', marginTop: 2 },
  price: { display: 'flex', alignItems: 'baseline', gap: 4, fontVariantNumeric: 'tabular-nums' },
  priceNum: { fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: '#E2231A' },
  unit: { fontSize: 12, fontWeight: 600, color: '#9CA1A7' },
};

window.PriceBoard = PriceBoard;
