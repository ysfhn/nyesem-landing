export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-amber-500 flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse">
          🍽️
        </div>
        <p className="text-dark-300 text-sm">Yükleniyor...</p>
      </div>
    </div>
  );
}
