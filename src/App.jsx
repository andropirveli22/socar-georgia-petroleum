import { useState } from 'react';
import Header from './components/website/Header';
import Hero from './components/website/Hero';
import StatsBar from './components/website/StatsBar';
import ServicesGrid from './components/website/ServicesGrid';
import StationFinder from './components/website/StationFinder';
import NewsRow from './components/website/NewsRow';
import Footer from './components/website/Footer';
import PriceBoard from './components/station/PriceBoard';
import PumpScreen from './components/station/PumpScreen';
import Wayfinding from './components/station/Wayfinding';

function StationSurfaces() {
  return (
    <div style={{ background: 'var(--bg-1)', minHeight: '100vh', padding: '64px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Station surfaces</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-600)', margin: '0 0 48px', maxWidth: '60ch' }}>
          Recreations of three core SOCAR Georgia Petroleum station surfaces — totem price board, pump-terminal screen, and canopy wayfinding.
        </p>
        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <PriceBoard />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-500)', marginTop: 16 }}>
              Totem · price board
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PumpScreen />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-500)', marginTop: 16 }}>
              Pump · live transaction
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Wayfinding />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-500)', marginTop: 16 }}>
              Highway · wayfinding
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState('website');
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <>
      {/* Dev view switcher */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100, display: 'flex', gap: 8, background: 'var(--ink-900)', borderRadius: 'var(--r-pill)', padding: '6px 8px', boxShadow: 'var(--shadow-3)' }}>
        <button
          onClick={() => setView('website')}
          style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 'var(--r-pill)', border: 'none', cursor: 'pointer', background: view === 'website' ? '#fff' : 'transparent', color: view === 'website' ? 'var(--ink-900)' : 'var(--ink-400)', transition: 'all var(--dur) var(--ease)' }}
        >
          Website
        </button>
        <button
          onClick={() => setView('station')}
          style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 'var(--r-pill)', border: 'none', cursor: 'pointer', background: view === 'station' ? '#fff' : 'transparent', color: view === 'station' ? 'var(--ink-900)' : 'var(--ink-400)', transition: 'all var(--dur) var(--ease)' }}
        >
          Station surfaces
        </button>
      </div>

      {view === 'website' ? (
        <>
          <Header active={activeNav} onNav={setActiveNav} />
          <Hero />
          <StatsBar />
          <ServicesGrid />
          <StationFinder />
          <NewsRow />
          <Footer />
        </>
      ) : (
        <StationSurfaces />
      )}
    </>
  );
}
