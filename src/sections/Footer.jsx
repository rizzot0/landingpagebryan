import { Heart, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-slate-900 tracking-tight mb-2">Bryan — Editor de Video</h3>
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Instagram className="size-5 text-slate-600" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Linkedin className="size-5 text-slate-600" />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Github className="size-5 text-slate-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Bryan. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 font-normal">
            Hecho con <Heart className="size-4 text-blue-600 fill-blue-600" /> por Bastián
          </p>
        </div>
      </div>
    </footer>
  )
}
