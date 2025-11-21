import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message')
    }
    setStatus('Wysyłanie...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Błąd podczas wysyłania')
      setStatus('Dziękujemy! Skontaktujemy się wkrótce.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Nie udało się wysłać. Spróbuj ponownie.')
    }
  }

  return (
    <section id="kontakt" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Skontaktuj się</h2>
          <p className="text-white/70 mt-4">Opowiedz nam o swoim wnętrzu. Przygotujemy propozycję oświetlenia dopasowaną do Twojej przestrzeni.</p>
          <div className="mt-8 space-y-2 text-white/70">
            <p>Studio: ul. Przykładowa 12, Warszawa</p>
            <p>Godziny: Pon–Pt 10:00–18:00</p>
            <p>Telefon: +48 500 000 000</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 gap-4">
            <input name="name" required placeholder="Imię i nazwisko" className="bg-black/30 text-white placeholder-white/40 px-4 py-3 rounded-lg ring-1 ring-white/10 focus:outline-none focus:ring-amber-400" />
            <input name="email" type="email" required placeholder="E-mail" className="bg-black/30 text-white placeholder-white/40 px-4 py-3 rounded-lg ring-1 ring-white/10 focus:outline-none focus:ring-amber-400" />
            <input name="phone" placeholder="Telefon (opcjonalnie)" className="bg-black/30 text-white placeholder-white/40 px-4 py-3 rounded-lg ring-1 ring-white/10 focus:outline-none focus:ring-amber-400" />
            <textarea name="message" required rows="4" placeholder="Wiadomość" className="bg-black/30 text-white placeholder-white/40 px-4 py-3 rounded-lg ring-1 ring-white/10 focus:outline-none focus:ring-amber-400" />
            <button className="mt-2 px-6 py-3 rounded-full bg-amber-400 text-black font-medium hover:bg-amber-300 transition-colors">Wyślij</button>
            {status && <p className="text-sm text-white/70">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
