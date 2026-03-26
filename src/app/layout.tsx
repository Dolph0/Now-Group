import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Now Group | Asesoría Legal para la Administración Pública',
  description:
    'Now Group es un despacho jurídico especializado en derecho público. Ofrecemos servicios de licitaciones, compliance público, derecho administrativo y contratación pública para la Administración.',
  keywords: [
    'Now Group',
    'despacho legal',
    'derecho público',
    'licitaciones públicas',
    'compliance',
    'derecho administrativo',
    'contratación pública',
    'administración pública',
    'asesoría jurídica',
  ],
  authors: [{ name: 'Now Group' }],
  openGraph: {
    title: 'Now Group | Asesoría Legal para la Administración Pública',
    description:
      'Despacho jurídico especializado en el sector público. Compromiso, experiencia y resultados.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Now Group',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Now Group',
  description:
    'Despacho jurídico especializado en derecho público y asesoría legal para la Administración Pública en España.',
  url: 'https://nowgroup.es',
  areaServed: {
    '@type': 'Country',
    name: 'Spain',
  },
  serviceType: [
    'Licitaciones Públicas',
    'Compliance Público',
    'Derecho Administrativo',
    'Contratación Pública',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
