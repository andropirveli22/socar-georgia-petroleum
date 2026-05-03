import { useState } from 'react';
import { Search } from 'lucide-react';

const STATIONS = [
  { name: 'Saburtalo · Tamarashvili 17', dist: '2.4 km', services: ['Petrol', 'Diesel', 'EV', 'WayMart'], open: true },
  { name: 'Vake · Chavchavadze 49',       dist: '3.1 km', services: ['Petrol', 'Diesel', 'WayMart'],          open: true },
  { name: 'Didube · V. Bagrationi',        dist: '5.8 km', services: ['Petrol', 'Diesel', 'LPG'],              open: false },
  { name: 'Gldani · Guramishvili 84',      dist: '7.2 km', services: ['Petrol', 'Diesel', 'LPG', 'EV', 'WayMart'], open: true },
];

const MAP_PINS = [[140,180],[220,240],[300,160],[180,340],[340,300]];

export default function StationFinder() {
  const [query, setQuery] = useState('Tbilisi');

  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 12 }}>
            Network
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1.1, letterSpacing: 'var(--tr-tight)', fontWeight: 800, color: 'var(--ink-900)', margin: 0 }}>
            Find your nearest station.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, alignItems: 'stretch' }}>
          {/* Station list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '12px 14px', border: '1px solid var(--ink-300)', borderRadius: 'var(--r-2)', marginBottom: 8 }}>
              <Search size={16} color="var(--ink-500)" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="City or address"
                style={{ border: 'none', outline: 'none', flex: 1, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-900)', background: 'transparent' }}
              />
            </div>
            {STATIONS.map((s) => (
              <div key={s.name} style={{ padding: '14px 16px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-3)', cursor: 'pointer', background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' }}>{s.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--ink-500)', fontVariantNumeric: 'tabular-nums' }}>{s.dist}</div>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                  {s.services.map((sv) => (
                    <span key={sv} style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 'var(--r-pill)', background: 'var(--ink-100)', color: 'var(--ink-700)' }}>
                      {sv}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontFamily: 'var(--font-body)', fontSize: 12, color: s.open ? 'var(--socar-green)' : 'var(--ink-500)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.open ? 'var(--socar-green)' : 'var(--ink-400)', display: 'inline-block' }} />
                  {s.open ? 'Open · 24/7' : 'Closed for maintenance'}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ borderRadius: 'var(--r-3)', overflow: 'hidden', border: '1px solid var(--border-hairline)', minHeight: 480 }}>
            <svg width="100%" height="100%" viewBox="0 0 480 480" style={{ display: 'block', minHeight: 480 }}>
              <rect width="480" height="480" fill="#F5F6F7"/>
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h${i}`} x1="0" x2="480" y1={i*40} y2={i*40} stroke="#E5E7E9" strokeWidth="1"/>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`v${i}`} x1={i*40} x2={i*40} y1="0" y2="480" stroke="#E5E7E9" strokeWidth="1"/>
              ))}
              <path d="M40 200 Q 200 100, 360 220 T 440 380" stroke="#CACDD1" strokeWidth="6" fill="none"/>
              <path d="M80 360 Q 200 320, 320 360 T 440 320" stroke="#CACDD1" strokeWidth="6" fill="none"/>
              {MAP_PINS.map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="14" fill="#E2231A" opacity="0.2"/>
                  <circle cx={x} cy={y} r="6" fill="#E2231A"/>
                </g>
              ))}
              <g transform="translate(220, 240)">
                <circle r="22" fill="#E2231A" opacity="0.25"/>
                <circle r="9" fill="#E2231A" stroke="#fff" strokeWidth="3"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
