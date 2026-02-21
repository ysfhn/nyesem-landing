import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Features from '@/components/Features';

// Lazy load below-fold components for better performance
const FeatureShowcase = dynamic(() => import('@/components/FeatureShowcase'));
const TravelShowcase = dynamic(() => import('@/components/TravelShowcase'));
const EventsShowcase = dynamic(() => import('@/components/EventsShowcase'));
const RestaurantBusiness = dynamic(() => import('@/components/RestaurantBusiness'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const Screenshots = dynamic(() => import('@/components/Screenshots'));
const Stats = dynamic(() => import('@/components/Stats'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

// FAQ Structured Data for SEO rich snippets
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Nyesem nedir ve nasıl çalışır?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nyesem, gastronomi tutkunları için tasarlanmış bir sosyal platformdur. Restoranları keşfeder, AI ile menüleri analiz eder, yemek deneyimlerini paylaşır ve gurme seviyeni yükseltirsin.',
      },
    },
    {
      '@type': 'Question',
      name: 'AI menü analizi nasıl çalışıyor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Restoran menüsünün fotoğrafını çektiğinde, yapay zeka modeli yemekleri otomatik olarak tanımlar. Her yemek için açıklama, malzeme listesi, alerjen uyarıları ve farklı dillerde çeviriler sunar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Uygulama ücretsiz mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nyesem'in temel özellikleri tamamen ücretsizdir. Restoran keşfi, değerlendirme, sosyal özellikler ve gurme seviye sistemi dahil olmak üzere çoğu özelliği ücretsiz kullanabilirsin.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hangi ülkelerde kullanabilirim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nyesem şu anda Türkiye başta olmak üzere 20'den fazla ülkede kullanılabilir. Almanya, İngiltere, Fransa, İtalya, İspanya, Hollanda, ABD, Japonya, BAE ve daha birçok ülkede restoran verilerine erişebilirsin.",
      },
    },
    {
      '@type': 'Question',
      name: 'Gurme seviye sistemi nasıl işler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Her restoran ziyareti, değerlendirme ve sosyal etkileşim sana XP kazandırır. 5 seviye vardır: Yeni Başlayan, Kaşif, Uzman, Usta ve Efsane. Her seviyede özel rozetler ve ayrıcalıklar kazanırsın.",
      },
    },
    {
      '@type': 'Question',
      name: 'Co-Dining odaları nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Co-Dining, arkadaşlarınla birlikte yemek planlamak için oluşturabileceğin sanal odalardır. Restoran önerileri, anketler ve grup sohbeti ile en iyi seçeneği belirleyebilirsin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verilerim güvende mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, tüm veriler Firebase altyapısı üzerinde güvenli bir şekilde saklanır. Kişisel bilgilerin şifrelenir ve üçüncü taraflarla paylaşılmaz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Uygulama hangi platformlarda mevcut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nyesem şu anda iOS ve Android platformları için geliştirilmektedir. App Store ve Google Play'de yakında yayınlanacak.",
      },
    },
  ],
};

// WebSite structured data
const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nyesem',
  url: 'https://nyesem.app',
  description: 'Gastronomi tutkunları için sosyal platform. Restoranları keşfet, yemek deneyimlerini paylaş.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://nyesem.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

// SoftwareApplication structured data
const appStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nyesem',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
  description: 'Gastronomi tutkunları için sosyal platform. AI menü analizi, gurme seviye sistemi, co-dining.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'TRY',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appStructuredData) }}
      />
      <main className="min-h-screen bg-dark-900">
        <Navbar />
        <Hero />
        <LogoBar />
        <Features />
        <FeatureShowcase />
        <TravelShowcase />
        <EventsShowcase />
        <RestaurantBusiness />
        <HowItWorks />
        <Screenshots />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
