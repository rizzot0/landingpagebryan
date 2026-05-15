import { motion as Motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/56928683655'
const HERO_VIDEO_URL = '/videos/videopresentacion.mp4'
const HERO_POSTER_URL = '/videos/videopresentacion-poster.jpg'

const stats = [
  { value: '+197K', label: 'vistas en 1 video' },
  { value: '+6', label: 'marcas trabajadas' },
  { value: '+15%', label: 'seguidores promedio' },
]

export default function HeroVSL() {
  return (
    <section id="hero" className="relative min-h-screen bg-white flex items-center pt-20 pb-16 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left — copy */}
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-7"
          >
            {/* Badge */}
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-700 font-medium tracking-wide">
              Creador de contenido · Meta Ads · Coquimbo, Chile
            </span>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Videos que hacen{' '}
              <span className="text-blue-600">vender.</span>{' '}
              Marketing digital para negocios reales en Chile.
            </h1>

            {/* Subtitle */}
            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Creo contenido de video estratégico y gestiono campañas de Meta Ads para que emprendedores y marcas locales crezcan y vendan más.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-200 transition-all hover:bg-green-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero que me contacten
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                Ver resultados reales
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className="text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          {/* Right — vertical video */}
          <Motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/60">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                poster={HERO_POSTER_URL}
                playsInline
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
              </video>
              <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-slate-500">
                Ejemplo de video viral
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
