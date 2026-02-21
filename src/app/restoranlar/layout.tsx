import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restoranlar İçin — Nyesem İşletme Paneli | Restoranınızı Kaydedin',
  description:
    'Nyesem ile restoranınızı binlerce gurme kullanıcıya tanıtın. Ücretsiz işletme paneli, detaylı analitik, AI menü entegrasyonu, etkinlik yönetimi ve daha fazlası.',
  keywords: [
    'restoran kayıt',
    'restoran yönetimi',
    'nyesem işletme',
    'restoran analitik',
    'menü yönetimi',
    'restoran pazarlama',
  ],
  alternates: {
    canonical: '/restoranlar',
  },
  openGraph: {
    title: 'Restoranlar İçin — Nyesem İşletme Paneli',
    description:
      'Restoranınızı binlerce gurme kullanıcıya tanıtın. Ücretsiz işletme paneli ile hemen başlayın.',
    url: 'https://nyesem.app/restoranlar',
    siteName: 'Nyesem',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restoranlar İçin — Nyesem İşletme Paneli',
    description:
      'Restoranınızı binlerce gurme kullanıcıya tanıtın. Ücretsiz işletme paneli ile hemen başlayın.',
  },
};

export default function RestoranlarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
