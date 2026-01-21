import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Play, Sparkles } from 'lucide-react'
import { Meteors, GridPattern } from '../components/MagicUI'

export default function HeroVSL() {
  const POSTER_URL = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80'

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
              {/* Placeholder Poster */}
              <img
                src={POSTER_URL}
                alt="Video de presentación"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/70" />
              
              {/* Play Button */}
              <button className="relative z-10 group">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                  <Play className="size-10 text-white ml-1" fill="white" />
                </div>
              </button>

              {/* Placeholder Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-slate-400 text-sm mb-4">VIDEO PRINCIPAL AQUÍ</p>
                  <p className="text-slate-500 text-xs">[Reemplazar con URL real]</p>
                </div>
              </div>
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
