import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Meteors, GridPattern } from '../components/MagicUI'

export default function HeroVSL() {
  const HERO_VIDEO_URL = '/videos/videopresentacion.mp4'
  const HERO_POSTER_URL = '/videos/videopresentacion-poster.jpg'

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern className="opacity-30" />
        <Meteors number={30} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 z-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6 text-slate-900"
          >
            Haz crecer tu empresa con videos que venden
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-normal leading-relaxed"
          >
            Descubre cómo convertir tu contenido en una máquina de conversiones
          </motion.p>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 bg-slate-100 flex items-center justify-center border border-blue-200">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                preload="metadata"
                poster={HERO_POSTER_URL}
                playsInline
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/15 via-transparent to-slate-900/25 pointer-events-none" />
            </div>
          </motion.div>


          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Quiero mejorar mi contenido
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
