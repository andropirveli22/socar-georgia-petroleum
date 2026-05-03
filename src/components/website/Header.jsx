import { useState } from 'react';
import socarFlame from '../../assets/logos/socar-flame.png';

const styles = {
  bar: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(255,255,255,.92)',
    backdropFilter: 'blur(12px) saturate(120%)',
    WebkitBackdropFilter: 'blur(12px) saturate(120%)',
    borderBottom: '1px solid var(--border-hairline)',
  },
  inner: {
    maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px',
    height: 'var(--nav-h)', display: 'flex', alignItems: 'center',
    gap: 32, justifyContent: 'space-between',
  },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
  wordmark: { display: 'flex', flexDirection: 'column', gap: 0, lineHeight: 1 },
  wordmarkTop: {
    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
    letterSpacing: 1, color: 'var(--ink-900)',
  },
  wordmarkSub: {
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 8.5,
    letterSpacing: 1.6, color: 'var(--ink-500)', marginTop: 2,
  },
  nav: { display: 'flex', gap: 24, flex: 1, justifyContent: 'center' },
  link: {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    color: 'var(--ink-700)', textDecoration: 'none',
    padding: '6px 2px', borderBottom: '2px solid transparent',
    transition: 'color var(--dur) var(--ease)',
  },
  linkActive: { color: 'var(--ink-900)', borderBottomColor: 'var(--socar-red)', fontWeight: 600 },
  right: { display: 'flex', gap: 12, alignItems: 'center' },
  lang: {
    background: 'transparent', border: '1px solid var(--ink-200)', borderRadius: 'var(--r-2)',
    padding: '6px 10px', fontFamily: 'var(--font-body)', fontSize: 12,
    fontWeight: 600, color: 'var(--ink-700)', cursor: 'pointer',
  },
  cta: {
    background: 'var(--socar-red)', color: '#fff', border: 'none',
    borderRadius: 'var(--r-2)', padding: '10px 16px',
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, cursor: 'pointer',
    transition: 'background var(--dur) var(--ease)',
  },
};

const NAV_ITEMS = ['Home', 'Company', 'Services', 'For Business', 'News', 'Sustainability'];

export default function Header({ active = 'Home', onNav }) {
  return (
    <header style={styles.bar}>
      <div style={styles.inner}>
        <a href="#" style={styles.brand} onClick={(e) => { e.preventDefault(); onNav?.('Home'); }}>
          <img src={socarFlame} alt="SOCAR" style={{ height: 36 }} />
          <div style={styles.wordmark}>
            <span style={styles.wordmarkTop}>SOCAR</span>
            <span style={styles.wordmarkSub}>GEORGIA&nbsp; PETROLEUM</span>
          </div>
        </a>
        <nav style={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => { e.preventDefault(); onNav?.(item); }}
              style={{ ...styles.link, ...(active === item ? styles.linkActive : {}) }}
            >
              {item}
            </a>
          ))}
        </nav>
        <div style={styles.right}>
          <button style={styles.lang}>EN / ქა</button>
          <button style={styles.cta}>Find a Station</button>
        </div>
      </div>
    </header>
  );
}
