"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/empresa', label: 'Sobre Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      try {
        const menu = document.getElementById('mobile-menu-panel');
        const btn = document.getElementById('mobile-hamburger-button');
        const target = e.target as Node;
        if (menu && !menu.contains(target) && btn && !btn.contains(target)) {
          setMenuOpen(false);
        }
      } catch (err) {
        // ignore
      }
    };

    const timer = window.setTimeout(() => {
      document.addEventListener('mousedown', handleClick);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open (mobile only).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 768px)');

    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevWidth = document.body.style.width;

    let scrollY = 0;

    const lockScroll = () => {
      scrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    };

    const unlockScroll = () => {
      document.body.style.overflow = prevOverflow || '';
      document.body.style.position = prevPosition || '';
      document.body.style.top = prevTop || '';
      document.body.style.width = prevWidth || '';
      if (scrollY) {
        window.scrollTo(0, scrollY);
      }
      scrollY = 0;
    };

    const apply = () => {
      if (menuOpen && mql.matches) {
        lockScroll();
      } else {
        unlockScroll();
      }
    };

      apply();

      const handleMediaChange = (e: MediaQueryListEvent) => {
        if (!e.matches) {
          unlockScroll();
        } else if (menuOpen) {
          lockScroll();
        }
      };

      if (mql.addEventListener) {
        mql.addEventListener('change', handleMediaChange);
      } else {
        // Safari fallback
        // @ts-ignore
        mql.addListener(handleMediaChange);
      }

      return () => {
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handleMediaChange);
        } else {
          // @ts-ignore
          mql.removeListener(handleMediaChange);
        }
        unlockScroll();
      };
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
            <span className="mobile-header__text" aria-hidden="true">
              <span className="brand-first">J U A N</span>
              <span className="brand-last">A D A R O</span>
            </span>
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
    