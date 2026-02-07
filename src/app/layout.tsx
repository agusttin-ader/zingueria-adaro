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
          <small>© {new Date().getFullYear()} Zinguería Adaro. Todos los derechos reservados.</small>
        </footer>
      </body>
    </html>
  );
}
