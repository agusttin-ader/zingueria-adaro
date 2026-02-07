import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

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
    <html lang="es">
      <body>
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
              href="https://www.instagram.com/zingueriaadaro"
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
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noreferrer"
              className="site-footer__social-link"
              aria-label="WhatsApp de Zinguería Adaro"
            >
              <svg
                className="site-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 4.1c-3.44 0-6.23 2.72-6.23 6.08 0 1.35.44 2.51 1.32 3.57L6 19.9l2.29-.74a6.7 6.7 0 0 0 3.71 1.08c3.44 0 6.23-2.72 6.23-6.08C18.23 6.82 15.44 4.1 12 4.1Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M9.9 9.3c-.08-.18-.17-.18-.25-.18h-.2c-.08 0-.2.03-.31.15-.11.12-.4.39-.4.95 0 .56.41 1.1.47 1.18.06.08.79 1.24 1.95 1.7.96.38 1.34.34 1.58.3.24-.04.78-.32.89-.62.11-.3.11-.56.08-.62-.03-.06-.12-.09-.25-.15-.13-.06-.78-.38-.9-.42-.12-.05-.21-.08-.3.08-.09.15-.34.42-.42.5-.08.09-.16.1-.29.04-.13-.06-.54-.2-1.03-.62-.38-.33-.63-.74-.7-.86-.07-.12-.01-.19.05-.25.06-.06.13-.15.19-.23.06-.08.08-.14.12-.23.04-.09.02-.17-.01-.23-.03-.06-.27-.68-.39-.94Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
