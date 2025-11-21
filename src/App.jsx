import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import './index.css'

function App() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCollection = () => {
    document.getElementById('kolekcja')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onContactClick={scrollToContact} />
      <main>
        <Hero onShopClick={scrollToCollection} />
        <Features />
        <section id="o-nas" className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose prose-invert">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">O nas</h2>
              <p className="text-white/70 mt-4">Jesteśmy studiem projektowym specjalizującym się w oświetleniu. Łączymy tradycyjne rzemiosło z nowoczesnymi technologiami, aby tworzyć ponadczasowe oprawy, które nadają wnętrzom charakteru.</p>
              <p className="text-white/70">Każdy projekt powstaje w dialogu z architektami i właścicielami przestrzeni – od pierwszej koncepcji po montaż.</p>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <Contact ref={contactRef} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} LUMINA Studio — Wszystkie prawa zastrzeżone
      </footer>
    </div>
  )
}

export default App
