import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nyesem — Gastronomi Sosyal Platformu | Yemek Keşfet, Paylaş, Yaşa',
  description:
    'Nyesem ile restoranları keşfet, yemek deneyimlerini paylaş, gurme seviyeni yükselt, AI menü analizi yap ve arkadaşlarınla birlikte yemek planla. Gastronomi tutkunları için sosyal platform.',
  keywords: [
    'nyesem',
    'gastronomi',
    'restoran keşfet',
    'yemek uygulaması',
    'sosyal yemek platformu',
    'AI menü analizi',
    'gurme seviye',
    'co-dining',
    'yemek tarifi',
    'restoran değerlendirme',
  ],
  authors: [{ name: 'Nyesem Team' }],
  creator: 'Nyesem',
  metadataBase: new URL('https://nyesem.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Nyesem — Gastronomi Sosyal Platformu',
    description:
      'Restoranları keşfet, yemek deneyimlerini paylaş, gurme seviyeni yükselt. Gastronomi tutkunları için sosyal platform.',
    url: 'https://nyesem.app',
    siteName: 'Nyesem',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyesem — Gastronomi Sosyal Platformu',
    description:
      'Restoranları keşfet, yemek deneyimlerini paylaş, gurme seviyeni yükselt.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('nyesem-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
