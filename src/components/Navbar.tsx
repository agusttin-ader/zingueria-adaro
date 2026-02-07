"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setThemePreference } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="nav__brand">
          <Link href="/" aria-label="Ir al inicio de Zinguería Adaro">
            {isMounted ? (
              <>
                <Image
                  src="/images/logo-black.png"
                  alt="Zinguería Adaro"
                  width={160}
                  height={40}
                  priority
                  unoptimized
                  className="nav__logo nav__logo--light"
                />
                <Image
                  src="/images/logo-white.png"
                  alt="Zinguería Adaro"
                  width={160}
                  height={40}
                  priority
                  unoptimized
                  className="nav__logo nav__logo--dark"
                />
              </>
            ) : (
              <Image
                src="/images/logo-black.png"
                alt="Zinguería Adaro"
                width={160}
                height={40}
                priority
                unoptimized
                className="nav__logo nav__logo--light"
              />
            )}
            <span className="nav__logo-text" aria-hidden="true">
              ADARO
            </span>
          </Link>
        </div>
        <ul className="nav__links" aria-label="Secciones principales del sitio">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                key={item.href}
                className={`nav__item${isActive ? ' nav__item--active' : ''}`}
              >
                <Link href={item.href} aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="nav__item nav__item--theme">
            <button
              type="button"
              className="theme-switch"
              onClick={() => setThemePreference(resolvedTheme === 'dark' ? 'light' : 'dark')}
              role="switch"
              aria-checked={resolvedTheme === 'dark'}
              aria-label="Cambiar entre tema claro y oscuro"
            >
              <span className="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">
                ☀
              </span>
              <span className="theme-switch__track">
                <span className="theme-switch__thumb" />
              </span>
              <span className="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">
                ☾
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
