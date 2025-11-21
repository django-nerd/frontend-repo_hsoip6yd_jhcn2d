function Features() {
  const items = [
    {
      title: 'Żyrandole artystyczne',
      desc: 'Imponujące kompozycje z mosiądzu, szkła i porcelany, tworzone w krótkich seriach.',
      img: 'https://images.unsplash.com/photo-1519710884009-79689c55528b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Lampy stojące',
      desc: 'Rzeźbiarskie formy, które dodają charakteru salonowi i strefie wypoczynku.',
      img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Oświetlenie nad stołem',
      desc: 'Precyzyjne światło do jadalni – idealna atmosfera podczas spotkań.',
      img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section id="kolekcja" className="relative mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">Kolekcja</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <img src={it.img} alt={it.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="p-5">
              <h3 className="text-white font-medium">{it.title}</h3>
              <p className="text-white/70 text-sm mt-2">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
