import { motion } from 'framer-motion'
import { TrendingUp, Play } from 'lucide-react'
import { useState } from 'react'
import { GridPattern } from '../components/MagicUI'

const BEFORE_AFTER_VIDEOS = {
  before: {
    title: 'Video sin editar',
    sources: {
      hq: '/videos/before-qf561ul5sew-hq.mp4',
      lq: '/videos/before-qf561ul5sew-lq.mp4'
    },
    poster: '/videos/before-qf561ul5sew-poster.jpg'
  },
  after: {
    title: 'Video editado',
    sources: {
      hq: '/videos/after-4rntsyww8do-hq.mp4',
      lq: '/videos/after-4rntsyww8do-lq.mp4'
    },
    poster: '/videos/after-4rntsyww8do-poster.jpg'
  }
}

const getPreferredVideoSource = (videoConfig) => {
  if (typeof navigator === 'undefined') {
    return videoConfig.sources.hq || videoConfig.sources.lq
  }

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const effectiveType = connection?.effectiveType || ''
  const isSlowNetwork = connection?.saveData || ['slow-2g', '2g', '3g'].includes(effectiveType)

  return isSlowNetwork ? videoConfig.sources.lq || videoConfig.sources.hq : videoConfig.sources.hq || videoConfig.sources.lq
}

function ComparisonVideoCard({ videoConfig, labelClassName, borderClassName, titleClassName }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`aspect-video rounded-xl overflow-hidden border-4 relative shadow-xl ${borderClassName}`}>
      {!isLoaded ? (
        <button
          type="button"
          className="relative w-full h-full group"
          onClick={() => setIsLoaded(true)}
          aria-label={`Reproducir ${videoConfig.title}`}
        >
          <img
            src={videoConfig.poster}
            alt={videoConfig.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`rounded-full p-4 transition-transform group-hover:scale-110 ${labelClassName}`}>
              <Play className="size-7 text-white" fill="white" />
            </div>
          </div>
          <p className={`absolute bottom-4 left-4 text-lg font-bold ${titleClassName}`}>{videoConfig.title}</p>
        </button>
      ) : (
        <video
          src={getPreferredVideoSource(videoConfig)}
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          playsInline
          preload="none"
          poster={videoConfig.poster}
        />
      )}
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <GridPattern className="opacity-15" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
            <TrendingUp className="size-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">Resultados</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            De Amateurista a Profesional
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Mira la diferencia que hace un video editado profesionalmente
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-20 h-20 bg-white border-4 border-blue-600 rounded-full shadow-2xl">
            <span className="text-2xl font-black text-blue-600">VS</span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -top-4 left-4 inline-block px-3 py-1 bg-red-600 rounded-full">
                <span className="text-white text-sm font-bold">ANTES</span>
              </div>

              <ComparisonVideoCard
                videoConfig={BEFORE_AFTER_VIDEOS.before}
                labelClassName="bg-red-600"
                borderClassName="border-red-500"
                titleClassName="text-white"
              />
            </div>

            <div className="mt-8 p-6 bg-red-50 border-2 border-red-300 rounded-lg shadow-md">
              <p className="text-red-700 font-bold text-base flex items-center gap-3">
                <span className="text-2xl">❌</span>
                <span>Bajo engagement · Abandono rápido · Cero conversiones</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -top-4 left-4 inline-block px-3 py-1 bg-green-600 rounded-full">
                <span className="text-white text-sm font-bold">DESPUÉS</span>
              </div>

              <ComparisonVideoCard
                videoConfig={BEFORE_AFTER_VIDEOS.after}
                labelClassName="bg-green-600"
                borderClassName="border-green-500"
                titleClassName="text-white"
              />
            </div>

            <div className="mt-8 p-6 bg-green-50 border-2 border-green-300 rounded-lg shadow-md">
              <p className="text-green-700 font-bold text-base flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Alto engagement · Visualización completa · Conversiones aseguradas</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-slate-50 border-2 border-slate-200 rounded-xl text-center hover:border-slate-300 transition-all shadow-md"
          >
            <p className="text-slate-600 text-sm font-medium mb-3">Retención Promedio</p>
            <p className="text-4xl font-black text-slate-900 mb-2">32%</p>
            <p className="text-sm text-slate-500">Sin edición profesional</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-3 border-green-400 rounded-xl text-center shadow-lg shadow-green-200"
          >
            <p className="text-green-700 text-sm font-bold mb-3">✨ CON NUESTRO SERVICIO</p>
            <p className="text-5xl font-black text-green-600 mb-2">89%</p>
            <p className="text-sm font-bold text-green-700">+175% de mejora</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-slate-50 border-2 border-slate-200 rounded-xl text-center hover:border-slate-300 transition-all shadow-md"
          >
            <p className="text-slate-600 text-sm font-medium mb-3">Tiempo de Engagement</p>
            <p className="text-4xl font-black text-slate-900 mb-2">7+ min</p>
            <p className="text-sm text-slate-500">En lugar de 18 segundos</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
