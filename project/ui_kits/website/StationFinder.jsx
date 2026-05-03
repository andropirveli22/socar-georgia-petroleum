/* @jsx React.createElement */
const { useState: useStateSF } = React;

function StationFinder() {
  const [query, setQuery] = useStateSF('Tbilisi');
  const stations = [
    { name: 'Saburtalo · Tamarashvili 17', dist: '2.4 km', services: ['Petrol', 'Diesel', 'EV', 'WayMart'], open: true },
    { name: 'Vake · Chavchavadze 49', dist: '3.1 km', services: ['Petrol', 'Diesel', 'WayMart'], open: true },
    { name: 'Didube · V. Bagrationi', dist: '5.8 km', services: ['Petrol', 'Diesel', 'LPG'], open: false },
    { name: 'Gldani · Guramishvili 84', dist: '7.2 km', services: ['Petrol', 'Diesel', 'LPG', 'EV', 'WayMart'], open: true },
  ];
  return (
    <section style={sfStyles.wrap}>
      <div style={sfStyles.inner}>
        <div style={sfStyles.head}>
          <div style={sfStyles.eyebrow}>Network</div>
          <h2 style={sfStyles.h2}>Find your nearest station.</h2>
        </div>
        <div style={sfStyles.grid}>
          <div style={sfStyles.list}>
            <div style={sfStyles.search}>
              <i data-lucide="search" style={{ width: 16, height: 16, color: 'var(--ink-500)' }}></i>
              <input value={query} onChange={(e) => setQuery(e.target.value)} style={sfStyles.input} placeholder="City or address" />
            </div>
            {stations.map((s) => (
              <div key={s.name} style={sfStyles.item}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={sfStyles.name}>{s.name}</div>
                  <div style={sfStyles.dist}>{s.dist}</div>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                  {s.services.map((sv) => (
                    <span key={sv} style={sfStyles.chip}>{sv}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontFamily: 'Inter, sans-serif', fontSize: 12, color: s.open ? 'var(--socar-green)' : 'var(--ink-500)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: s.open ? 'var(--socar-green)' : 'var(--ink-400)' }}></span>
                  {s.open ? 'Open · 24/7' : 'Closed for maintenance'}
                </div>
              </div>
            ))}
          </div>
          <div style={sfStyles.map}>
            <div style={sfStyles.mapInner}>
              {/* Stylized map */}
              <svg width="100%" height="100%" viewBox="0 0 480 480" style={{ display: 'block' }}>
                <rect width="480" height="480" fill="#F5F6F7"/>
                {Array.from({length: 12}).map((_, i) => (
                  <line key={'h'+i} x1="0" x2="480" y1={i*40} y2={i*40} stroke="#E5E7E9" strokeWidth="1"/>
                ))}
                {Array.from({length: 12}).map((_, i) => (
                  <line key={'v'+i} x1={i*40} x2={i*40} y1="0" y2="480" stroke="#E5E7E9" strokeWidth="1"/>
                ))}
                <path d="M40 200 Q 200 100, 360 220 T 440 380" stroke="#CACDD1" strokeWidth="6" fill="none"/>
                <path d="M80 360 Q 200 320, 320 360 T 440 320" stroke="#CACDD1" strokeWidth="6" fill="none"/>
                {[[140,180],[220,240],[300,160],[180,340],[340,300]].map(([x,y], i) => (
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
      </div>
    </section>
  );
}

const sfStyles = {
  wrap: { background: '#fff' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '96px 32px' },
  head: { marginBottom: 40 },
  eyebrow: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--socar-red)', marginBottom: 12 },
  h2: { fontFamily: "'Inter Tight', sans-serif", fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--ink-900)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, alignItems: 'stretch' },
  list: { display: 'flex', flexDirection: 'column', gap: 8 },
  search: { display: 'flex', gap: 10, alignItems: 'center', padding: '12px 14px', border: '1px solid var(--ink-300)', borderRadius: 4, marginBottom: 8 },
  input: { border: 'none', outline: 'none', flex: 1, fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--ink-900)' },
  item: { padding: '14px 16px', border: '1px solid var(--ink-200)', borderRadius: 8, cursor: 'pointer', background: '#fff' },
  name: { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' },
  dist: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--ink-500)', fontVariantNumeric: 'tabular-nums' },
  chip: { fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 999, background: 'var(--ink-100)', color: 'var(--ink-700)' },
  map: { borderRadius: 8, overflow: 'hidden', border: '1px solid var(--ink-200)', minHeight: 480 },
  mapInner: { width: '100%', height: '100%', minHeight: 480 },
};

window.StationFinder = StationFinder;
