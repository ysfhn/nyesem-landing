import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-400/20 to-amber-500/10 flex items-center justify-center text-4xl mx-auto mb-6">
          🔍
        </div>
        <h1 className="text-6xl font-display font-extrabold text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-display font-bold text-dark-200 mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-dark-300 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-400 to-amber-500 text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          ← Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
