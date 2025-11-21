import { useState } from 'react'

function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.8)]" />
          <span className="text-white font-semibold tracking-wide">LUMINA Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#kolekcja" className="text-white/80 hover:text-white">Kolekcja</a>
          <a href="#o-nas" className="text-white/80 hover:text-white">O nas</a>
          <button onClick={onContactClick} className="text-white/90 hover:text-white">Kontakt</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">Menu</button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-black/60">
          <a href="#kolekcja" className="block text-white/80">Kolekcja</a>
          <a href="#o-nas" className="block text-white/80">O nas</a>
          <button onClick={onContactClick} className="block text-left w-full text-white/90">Kontakt</button>
        </div>
      )}
    </header>
  )
}

export default Navbar
