function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_70%_0%,rgba(251,191,36,0.08),transparent)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-amber-300/90 text-xs mb-6">Salon lamp i żyrandoli</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Światło, które tworzy przestrzeń
          </h1>
          <p className="text-white/70 mt-6 text-lg max-w-prose">
            Rzemieślnicze oprawy, ręcznie wykańczane detale i nowoczesne źródła światła. Odkryj kolekcję, która zamienia wnętrza w dzieła sztuki.
          </p>
          <div className="mt-10 flex gap-4">
            <button onClick={onShopClick} className="px-6 py-3 rounded-full bg-amber-400 text-black font-medium hover:bg-amber-300 transition-colors">Zobacz kolekcję</button>
            <a href="#o-nas" className="px-6 py-3 rounded-full ring-1 ring-white/20 text-white hover:bg-white/10 transition-colors">Poznaj nas</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
            <span>• Gwarancja 5 lat</span>
            <span>• Produkcja w UE</span>
            <span>• Projekt na zamówienie</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-zinc-800 to-black">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" alt="Design chandelier" className="w-full h-full object-cover mix-blend-lighten opacity-90" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur rounded-2xl border border-white/10 p-4 text-white">
            <p className="text-sm">Limitowana seria 2025</p>
            <p className="text-xs text-white/60">Projekt: LUMINA Studio</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
