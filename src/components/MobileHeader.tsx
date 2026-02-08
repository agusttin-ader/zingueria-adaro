"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contacto', label: 'Contacto' },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    // Attach click-outside handler while menu is open
    const handleClick = (e: MouseEvent) => {
      try {
        const menu = document.getElementById('mobile-menu-panel');
        const btn = document.getElementById('mobile-hamburger-button');
        const target = e.target as Node;
        // diagnostic log
        // eslint-disable-next-line no-console
        console.log('[MobileHeader] document.mousedown target=', (e.target as Element).tagName, 'insideMenu=', menu?.contains(target), 'insideBtn=', btn?.contains(target));
        if (menu && !menu.contains(target) && btn && !btn.contains(target)) {
          setMenuOpen(false);
        }
      } catch (err) {
        // ignore
      }
    };
    // Attach document handler on next tick to avoid catching the same click that opened the menu
    // This prevents the open click from immediately closing the menu.
    const timer = window.setTimeout(() => {
      document.addEventListener('mousedown', handleClick);
    }, 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menuOpen]);

  // Diagnostic: log menuOpen changes for debugging hydration/state issues
  useEffect(() => {
    try {
      // eslint-disable-next-line no-console
      console.log('[MobileHeader] menuOpen ->', menuOpen);
    } catch (e) {
      // ignore
    }
  }, [menuOpen]);
  return (
    <header className="mobile-header">
      <div className="mobile-header__inner">
        <Link href="/" className="mobile-header__brand" aria-label="Ir al inicio de Zinguería Adaro">
          <Image
            src="/images/logo-black.png"
            alt="Zinguería Adaro"
            width={44}
            height={44}
            className="mobile-header__logo mobile-header__logo--light"
            priority
            style={{ objectFit: 'contain', borderRadius: '0.2rem' }}
          />
          <Image
            src="/images/logo-white.png"
            alt="Zinguería Adaro"
            width={44}
            height={44}
            className="mobile-header__logo mobile-header__logo--dark"
            priority
            style={{ objectFit: 'contain', borderRadius: '0.2rem' }}
          />
          <span className="mobile-header__text" aria-hidden="true">A D A R O</span>
        </Link>
        <button
          id="mobile-hamburger-button"
          className={`mobile-header__hamburger${menuOpen ? ' mobile-header__hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span className={`mobile-header__hamburger-bar${menuOpen ? ' mobile-header__hamburger-bar--top' : ''}`} />
          <span className={`mobile-header__hamburger-bar${menuOpen ? ' mobile-header__hamburger-bar--middle' : ''}`} />
          <span className={`mobile-header__hamburger-bar${menuOpen ? ' mobile-header__hamburger-bar--bottom' : ''}`} />
        </button>
      </div>
      {/* Panel de menú hamburguesa, debajo del header, nunca cubre la marca */}
      <div
        id="mobile-menu-panel"
        className={`mobile-header__menu-panel${menuOpen ? ' mobile-header__menu-panel--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-header__menu-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="mobile-header__menu-item" onClick={() => setMenuOpen(false)}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
