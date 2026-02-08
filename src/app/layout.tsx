import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import MobileHeader from '@/components/MobileHeader';
import ScrollRestoration from '@/components/ScrollRestoration';
import { ThemeProvider } from '@/components/ThemeProvider';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Zinguería Adaro | Zinguería en Buenos Aires',
  description: 'Zinguería Adaro: servicios profesionales de zinguería y soluciones en chapa para hogares y empresas.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'Zinguería Adaro | Zinguería en Buenos Aires',
    description: 'Servicios de zinguería, canaletas, techos y más para proyectos residenciales e industriales.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = window.localStorage.getItem('theme-preference');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (_) {
    // Ignorar errores de acceso a localStorage (por ejemplo, modo privado)
  }
})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollRestoration />
          <MobileHeader />
          <Navbar />
          <main className="site-main">{children}</main>
          <footer className="site-footer">
          <div className="site-footer__inner">
            <div className="site-footer__identity">
              <span className="site-footer__name">Zinguería Adaro</span>
              <span className="site-footer__tagline">Zinguería Adaro | Zinguería en Buenos Aires</span>
            </div>
            <div className="site-footer__legal">
              <small>© {new Date().getFullYear()} Zinguería Adaro. Todos los derechos reservados.</small>
            </div>
          </div>
          <div className="site-footer__social" aria-label="Redes sociales y contacto de Zinguería Adaro">
            <a
              href="https://www.instagram.com/zingueria_juan_adaro/"
              target="_blank"
              rel="noreferrer"
              className="site-footer__social-link"
              aria-label="Instagram de Zinguería Adaro"
            >
              <svg
                className="site-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" />
              </svg>
            </a>
            <a
              href="mailto:contacto@zingueriaadaro.com"
              className="site-footer__social-link"
              aria-label="Enviar correo a Zinguería Adaro"
            >
              <svg
                className="site-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="1.8" ry="1.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <polyline points="4,7.5 12,12.3 20,7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <a
              href="https://wa.me/5491169172539?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20de%20zinguer%C3%ADa.%0AEs%20para%20una%20vivienda/comercio%20en%20la%20zona%20de%20%0AQuedo%20atento/a,%20gracias."
              target="_blank"
              rel="noreferrer"
              className="site-footer__social-link"
              aria-label="WhatsApp de Zinguería Adaro"
            >
              <FaWhatsapp className="site-footer__social-icon" aria-hidden="true" />
            </a>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
