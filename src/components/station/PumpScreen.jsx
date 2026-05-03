import { useState, useEffect } from 'react';
import socarFlame from '../../assets/logos/socar-flame.png';

const PRICE_PER_LITER = 3.15;
const MAX_LITERS = 45;
const TICK_RATE_MS = 80;
const LITERS_PER_TICK = 0.27;

export default function PumpScreen() {
  const [liters, setLiters] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLiters((l) => Math.min(MAX_LITERS, +(l + LITERS_PER_TICK).toFixed(2)));
    }, TICK_RATE_MS);
    return () => clearInterval(id);
  }, [running]);

  const total = (liters * PRICE_PER_LITER).toFixed(2);
  const fillPct = (liters / MAX_LITERS) * 100;

  return (
    <div style={{ width: 360, background: '#0A0A0A', borderRadius: 12, color: '#fff', fontFamily: "'Inter Tight', sans-serif", boxShadow: '0 16px 48px rgba(10,10,10,.4)', overflow: 'hidden', border: '4px solid #18191B' }}>
      <div style={{ background: '#18191B', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={socarFlame} alt="SOCAR" style={{ height: 28 }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#9CA1A7' }}>PUMP 04</span>
      </div>

      <div style={{ padding: 22 }}>
        <div style={{ display: 'inline-block', background: '#E2231A', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', padding: '6px 12px', borderRadius: 4, marginBottom: 18 }}>
          EURO 5 DIESEL
        </div>

        <div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: '#9CA1A7' }}>TOTAL</div>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 4, fontVariantNumeric: 'tabular-nums', color: '#fff' }}>
            <span style={{ fontSize: 36, color: '#E2231A', marginRight: 6, fontWeight: 700 }}>₾</span>
            {total}
          </div>
        </div>

        <div style={{ height: 1, background: '#2E3236', margin: '20px 0' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', color: '#9CA1A7' }}>Liters</div>
            <div style={{ fontSize: 24, fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{liters.toFixed(2)}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', color: '#9CA1A7' }}>Price / L</div>
            <div style={{ fontSize: 24, fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{PRICE_PER_LITER.toFixed(2)}</div>
          </div>
        </div>

        <div style={{ height: 6, background: '#2E3236', borderRadius: 999, overflow: 'hidden', marginBottom: 18 }}>
          <div style={{ height: '100%', background: 'linear-gradient(90deg, #E2231A, #00A551)', width: `${fillPct}%`, transition: 'width 80ms linear' }} />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => setRunning(false)} style={{ flex: 1, background: 'transparent', border: '1px solid #4A4F54', color: '#fff', borderRadius: 6, padding: '14px 0', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer' }}>
            STOP
          </button>
          <button onClick={() => setRunning(false)} style={{ flex: 1, background: '#E2231A', border: 'none', color: '#fff', borderRadius: 6, padding: '14px 0', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer' }}>
            PAY &amp; END
          </button>
        </div>
      </div>

      <div style={{ background: '#18191B', padding: '12px 18px', fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', color: '#6B7177', textAlign: 'center' }}>
        SOCAR FUEL CARD ACCEPTED · INSERT CARD WHEN DONE
      </div>
    </div>
  );
}
