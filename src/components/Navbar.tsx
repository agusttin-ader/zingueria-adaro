import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/empresa', label: 'Empresa' },
  // Agregar más secciones aquí cuando las implementes
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <div className="nav__brand">
          <Link href="/">Zinguería Adaro</Link>
        </div>
        <ul className="nav__links" aria-label="Secciones principales del sitio">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="nav__item">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
