import { motion as Motion } from 'framer-motion'
import { Meteors, GridPattern } from '../components/MagicUI'

export default function HeroVSL() {
  const HERO_VIDEO_URL = '/videos/videopresentacion.mp4'
  const HERO_POSTER_URL = '/videos/videopresentacion-poster.jpg'
  const CALENDAR_URL = import.meta.env.VITE_GOOGLE_CALENDAR_URL || 'https://calendar.app.google/waBp78cxKbWBGf7e8'

  return (
    <section id="hero" className="relative pt-28 pb-16 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern className="opacity-30" />
        <Meteors number={30} />
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Creador de contenido y edición de video para tu negocio turístico:{' '}
                <span className="font-semibold text-slate-900">más reservas y ventas</span>{' '}
                <span className="font-semibold text-slate-900">desde el primer día</span>
              </h1>

              <p className="text-2xl font-semibold leading-snug text-slate-700">
                Solución estratégica para hoteles, cabañas, hostales y experiencias turísticas en Chile.
              </p>

              <p className="max-w-xl text-xl leading-relaxed text-slate-600">
                Creamos videos orientados a conversión para Instagram y TikTok, con enfoque en atracción local
                para la IV Región y la RM. No es solo contenido bonito: es contenido que llena agendas.
              </p>

              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-red-300 transition-all hover:bg-red-700 hover:shadow-xl"
              >
                Comenzar
              </a>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster={HERO_POSTER_URL}
                  playsInline
                >
                  <source src={HERO_VIDEO_URL} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
