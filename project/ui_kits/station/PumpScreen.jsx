/* @jsx React.createElement */
const { useState: usePS, useEffect: useEPS } = React;

function PumpScreen() {
  const [liters, setLiters] = usePS(0);
  const [running, setRunning] = usePS(true);
  const price = 3.15;
  useEPS(() => {
    if (!running) return;
    const id = setInterval(() => setLiters((l) => Math.min(45, +(l + 0.27).toFixed(2))), 80);
    return () => clearInterval(id);
  }, [running]);
  const total = (liters * price).toFixed(2);

  return (
    <div style={ps.frame}>
      <div style={ps.header}>
        <img src="../../assets/logos/socar-flame.png" alt="SOCAR" style={{ height: 28 }} />
        <span style={ps.pumpId}>PUMP 04</span>
      </div>
      <div style={ps.body}>
        <div style={ps.fuelChip}>EURO 5 DIESEL</div>
        <div style={ps.totalRow}>
          <div style={ps.totalLabel}>TOTAL</div>
          <div style={ps.totalValue}><span style={ps.currency}>₾</span>{total}</div>
        </div>
        <div style={ps.divider}></div>
        <div style={ps.gridRow}>
          <div>
            <div style={ps.smallLabel}>Liters</div>
            <div style={ps.smallValue}>{liters.toFixed(2)}</div>
          </div>
          <div>
            <div style={ps.smallLabel}>Price / L</div>
            <div style={ps.smallValue}>{price.toFixed(2)}</div>
          </div>
        </div>
        <div style={ps.barOuter}><div style={{ ...ps.barInner, width: `${(liters/45)*100}%` }}></div></div>
        <div style={ps.actions}>
          <button style={ps.stopBtn} onClick={() => setRunning(false)}>STOP</button>
          <button style={ps.payBtn} onClick={() => { setRunning(false); }}>PAY ENDS</button>
        </div>
      </div>
      <div style={ps.foot}>SOCAR FUEL CARD ACCEPTED · INSERT CARD WHEN DONE</div>
    </div>
  );
}

const ps = {
  frame: { width: 360, background: '#0A0A0A', borderRadius: 12, color: '#fff', fontFamily: "'Inter Tight', sans-serif", boxShadow: '0 16px 48px rgba(10,10,10,.4)', overflow: 'hidden', border: '4px solid #18191B' },
  header: { background: '#18191B', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  pumpId: { fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#9CA1A7' },
  body: { padding: 22 },
  fuelChip: { display: 'inline-block', background: '#E2231A', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', padding: '6px 12px', borderRadius: 4, marginBottom: 18 },
  totalRow: {},
  totalLabel: { fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: '#9CA1A7' },
  totalValue: { fontSize: 72, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 4, fontVariantNumeric: 'tabular-nums', color: '#fff' },
  currency: { fontSize: 36, color: '#E2231A', marginRight: 6, fontWeight: 700 },
  divider: { height: 1, background: '#2E3236', margin: '20px 0' },
  gridRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 },
  smallLabel: { fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', color: '#9CA1A7' },
  smallValue: { fontSize: 24, fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums' },
  barOuter: { height: 6, background: '#2E3236', borderRadius: 999, overflow: 'hidden', marginBottom: 18 },
  barInner: { height: '100%', background: 'linear-gradient(90deg, #E2231A, #00A551)', transition: 'width 80ms linear' },
  actions: { display: 'flex', gap: 10 },
  stopBtn: { flex: 1, background: 'transparent', border: '1px solid #4A4F54', color: '#fff', borderRadius: 6, padding: '14px 0', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer' },
  payBtn: { flex: 1, background: '#E2231A', border: 'none', color: '#fff', borderRadius: 6, padding: '14px 0', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer' },
  foot: { background: '#18191B', padding: '12px 18px', fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', color: '#6B7177', textAlign: 'center' },
};

window.PumpScreen = PumpScreen;
