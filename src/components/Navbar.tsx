"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="nav__brand">
          <Link href="/">Zinguería Adaro</Link>
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
        </ul>
      </nav>
    </header>
  );
}
