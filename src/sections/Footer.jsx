import { Instagram, Youtube } from 'lucide-react'

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M15.5 3c.63 1.8 2.09 3.26 3.89 3.89V10a7.43 7.43 0 0 1-3.89-1.1v6.23a5.13 5.13 0 1 1-5.13-5.13c.31 0 .61.03.9.08v3.15a2.02 2.02 0 1 0 1.12 1.8V3h3.11Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-slate-900 tracking-tight mb-2">brayaneditavideos — Editor de Video</h3>
            <p className="text-sm text-slate-600 font-normal">
              Transformando ideas en contenido visual impactante.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 tracking-tight mb-3">Enlaces</h4>
            <div className="space-y-2 text-sm">
              <a href="#hero" className="block text-slate-600 hover:text-blue-600 transition-colors font-normal">Inicio</a>
              <a href="#portfolio" className="block text-slate-600 hover:text-blue-600 transition-colors font-normal">Portafolio</a>
              <a href="#contact" className="block text-slate-600 hover:text-blue-600 transition-colors font-normal">Contacto</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-900 tracking-tight mb-3">Sígueme</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/brayaneditavideos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Instagram className="size-5 text-slate-600" />
              </a>
              <a 
                href="https://www.tiktok.com/@brayaneditavideos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <TikTokIcon className="size-5 text-slate-600" />
              </a>
              <a 
                href="https://www.youtube.com/@BrayhanGuerra/videos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Youtube className="size-5 text-slate-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} brayaneditavideos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
