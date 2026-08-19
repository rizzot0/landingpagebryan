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
              Creador de contenido para redes sociales para potenciar tus ventas · META ADS
            </span>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Más que editar, logro que las{' '}
              <span className="text-blue-600">METAS</span> no puedan parar.
            </h1>

            {/* Subtitle */}
            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Estrategia, grabación, edición y Meta Ads. Todo en un solo lugar. Yo me encargo de producir y convertir tu contenido en ventas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-red-300 transition-all hover:bg-red-700 hover:shadow-xl"
              >
                Comenzar
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                Ver resultados reales
              </a>
            </div>

          </Motion.div>

          {/* Right — horizontal video */}
          <Motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/60">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                poster={HERO_POSTER_URL}
                playsInline
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
              </video>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
