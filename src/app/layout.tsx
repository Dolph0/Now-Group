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
  title: 'NowNexus Group | Firma Consultora y Asesoría Legal Corporativa',
  description:
    'NowNexus Group es una firma consultora y legal multidisciplinar. Ofrecemos servicios corporativos, compliance, derecho público y privado para empresas y administraciones.',
  keywords: [
    'NowNexus Group',
    'firma consultora',
    'derecho público y privado',
    'licitaciones y contratos',
    'compliance',
    'derecho administrativo',
    'abogados corporativos',
    'consultoría legal',
    'asesoría jurídica',
  ],
  authors: [{ name: 'NowNexus Group' }],
  openGraph: {
    title: 'NowNexus Group | Firma Consultora y Asesoría Legal',
    description:
      'Firma consultora y legal especializada en el sector público y privado. Compromiso, experiencia y resultados.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'NowNexus Group',
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
  name: 'NowNexus Group',
  description:
    'Firma consultora multidisciplinar y asesoría legal para empresas y administraciones en España.',
  url: 'https://nowgroup.es',
  areaServed: {
    '@type': 'Country',
    name: 'Spain',
  },
  serviceType: [
    'Licitaciones y Contratos',
    'Compliance y Normativa',
    'Derecho Administrativo',
    'Contratación Corporativa',
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
