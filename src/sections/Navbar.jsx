import { Link } from 'react-scroll'
import { Video, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600">
            <Video className="size-5 text-white" />
          </div>
          <div>
            <span className="font-semibold text-slate-900 tracking-tight">Bryan</span>
            <span className="text-xs text-slate-500 block font-normal">Editor de Video</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="hero" smooth duration={500} offset={-80} className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors font-medium">Inicio</Link>
          <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors font-medium">Sobre Mí</Link>
          <Link to="portfolio" smooth duration={500} offset={-80} className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors font-medium">Portafolio</Link>
          <Link to="booking" smooth duration={500} offset={-80} className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors font-medium">Agendar</Link>
          <Link to="contact" smooth duration={500} offset={-80} className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all">
            <Sparkles className="size-3.5" />
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}
