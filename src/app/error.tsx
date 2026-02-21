'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center text-4xl mx-auto mb-6">
          😔
        </div>
        <h1 className="text-3xl font-display font-extrabold text-white mb-4">
          Bir şeyler ters gitti
        </h1>
        <p className="text-dark-300 mb-8">
          Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-brand-400 to-amber-500 text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
