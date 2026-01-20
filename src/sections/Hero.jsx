import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { GridPattern } from '../components/MagicUI'
import { Video, Sparkles, Play, X } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  
  // TODO: Reemplazar con la URL del video de presentación real
  const PRESENTATION_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"
  // TODO: Reemplazar con la URL del video de fondo (puede ser de YouTube, Vimeo o archivo local)
  const BACKGROUND_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0"

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <iframe
          src={BACKGROUND_VIDEO_URL}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ 
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transform: 'scale(1.5)'
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-10">
        <GridPattern
          width={50}
          height={50}
          className="stroke-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 z-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 mb-8"
          >
            <Sparkles className="size-4 text-blue-300" />
            <span className="text-sm text-white font-medium">Editor de Video Profesional</span>
          </motion.div>

          {/* Main Heading - Minimalista */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6"
          >
            <span className="text-white">
              Ayudo a crecer tu empresa con
            </span>
            <br />
            <span className="text-blue-400">
              videos para redes sociales
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Transformo tu contenido en herramientas de alto impacto, 
            diseñadas para rentabilidad y crecimiento orgánico. Edición cinematográfica diseñada para 
            retención y conversión.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button
              onClick={() => setShowVideoModal(true)}
              className="group cursor-pointer relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
            >
              <Play className="size-4" />
              <span>Ver Video Presentación</span>
            </button>
            
            <Link
              to="portfolio"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all"
            >
              <Video className="size-4" />
              <span>Ver Portafolio</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: 'Proyectos', value: '100+' },
              { label: 'Clientes', value: '50+' },
              { label: 'Años Exp.', value: '5+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-semibold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300 mt-1 font-normal">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
            >
              <X className="size-6 text-white" />
            </button>

            {/* Video Iframe */}
            <iframe
              src={PRESENTATION_VIDEO_URL}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video de Presentación"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
