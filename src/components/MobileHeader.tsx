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

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu-panel');
      if (menu && !menu.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header className="mobile-header">
      <div className="mobile-header__inner">
        <Link href="/" className="mobile-header__brand" aria-label="Ir al inicio de Zinguería Adaro">
          <Image
            src="/images/logo-black.png"
            alt="Zinguería Adaro"
            width={48}
            height={48}
            className="mobile-header__logo"
            priority
            style={{ objectFit: 'contain', borderRadius: '0.2rem' }}
          />
          <span className="mobile-header__text" aria-hidden="true">A D A R O</span>
        </Link>
        <button
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
      {/* Panel de menú hamburguesa */}
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
