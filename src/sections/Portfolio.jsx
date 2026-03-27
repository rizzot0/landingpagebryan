import { motion } from 'framer-motion'
import { BentoCard } from '../components/MagicUI'
import { Play, Award, Zap, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const getPreferredVideoSource = (video) => {
  if (!video?.sources) return video?.url

  if (typeof navigator === 'undefined') {
    return video.sources.hq || video.sources.lq || video.url
  }

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const effectiveType = connection?.effectiveType || ''
  const isSlowNetwork = connection?.saveData || ['slow-2g', '2g', '3g'].includes(effectiveType)

  return isSlowNetwork
    ? (video.sources.lq || video.sources.hq || video.url)
    : (video.sources.hq || video.sources.lq || video.url)
}

const DEMO_VIDEOS = [
  {
    id: 1,
    title: "Video ELQUI SUP",
    url: "/videos/elqui-sup-hq.mp4",
    sources: {
      hq: "/videos/elqui-sup-hq.mp4",
      lq: "/videos/elqui-sup-lq.mp4"
    },
    type: "mp4",
    thumbnail: "/videos/elqui-sup-poster.jpg",
    featured: true,
    category: "Comercial",
    badge: "Cliente Real",
    cliente: "Felipe Zarate",
    empresa: "ELQUI SUP",
    description: "Contenido para marca deportiva con enfoque en presencia y posicionamiento.",
    date: "Verano 2026"
  },
  {
    id: 2,
    title: "Video ARCA DE LUCY",
    url: "/videos/arca-de-lucy-hq.mp4",
    sources: {
      hq: "/videos/arca-de-lucy-hq.mp4",
      lq: "/videos/arca-de-lucy-lq.mp4"
    },
    type: "mp4",
    thumbnail: "/videos/arca-de-lucy-poster.jpg",
    featured: false,
    category: "Marca",
    badge: "Cliente Real",
    cliente: "Arca de Lucy",
    empresa: "Productos Vegetarianos",
    description: "Pieza de contenido para negocio gastronómico con edición dinámica.",
    date: "Verano 2026"
  },
  {
    id: 3,
    title: "Video Marca Personal",
    url: "/videos/marca-personal-1-hq.mp4",
    sources: {
      hq: "/videos/marca-personal-1-hq.mp4",
      lq: "/videos/marca-personal-1-lq.mp4"
    },
    type: "mp4",
    thumbnail: "/videos/marca-personal-1-poster.jpg",
    featured: false,
    category: "Social Media",
    badge: "Marca Personal",
    cliente: "brayaneditavideos",
    empresa: "Marca Personal",
    description: "Short para posicionamiento personal y alcance orgánico en redes.",
    date: "Verano 2026"
  },
  {
    id: 4,
    title: "Video Briza Tours",
    url: "/videos/briza-tours-hq.mp4",
    sources: {
      hq: "/videos/briza-tours-hq.mp4",
      lq: "/videos/briza-tours-lq.mp4"
    },
    type: "mp4",
    thumbnail: "/videos/briza-tours-poster.jpg",
    featured: false,
    category: "Turismo",
    badge: "Cliente Real",
    cliente: "Briza Tours",
    empresa: "Tours & Experiences",
    description: "Video promocional para servicios turísticos con ritmo y estética comercial.",
    date: "Verano 2026"
  },
  {
    id: 5,
    title: "Video Marca Personal 2",
    url: "/videos/marca-personal-2-hq.mp4",
    sources: {
      hq: "/videos/marca-personal-2-hq.mp4",
      lq: "/videos/marca-personal-2-lq.mp4"
    },
    type: "mp4",
    thumbnail: "/videos/marca-personal-2-poster.jpg",
    featured: false,
    category: "Social Media",
    badge: "Marca Personal",
    cliente: "brayaneditavideos",
    empresa: "Marca Personal",
    description: "Contenido vertical optimizado para retención y autoridad en redes.",
    date: "Verano 2026"
  },
  {
    id: 6,
    title: "Video de Federico",
    url: "/videos/federico-ecolab-hq.mp4",
    sources: {
      hq: "/videos/federico-ecolab-hq.mp4",
      lq: "/videos/federico-ecolab-lq.mp4"
    },
    type: "mp4",
    thumbnail: "/videos/federico-ecolab-poster.jpg",
    featured: false,
    category: "Negocios",
    badge: "Cliente Real",
    cliente: "Federico",
    empresa: "ECOLAB",
    description: "Video de marca y contenido comercial para negocio local.",
    date: "Verano 2026"
  }
]

const PORTFOLIO_EXTERNAL_URL = import.meta.env.VITE_PORTFOLIO_EXTERNAL_URL || 'https://instagram.com/brayaneditavideos'

function VideoCard({ video, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const preferredSource = getPreferredVideoSource(video)
  const isDirectVideo = video.type === 'mp4' || /(\.mp4|\.webm|\.ogg)(\?|$)/i.test(preferredSource || '')

  const getYouTubeId = (url) => {
    try {
      const parsedUrl = new URL(url)

      if (parsedUrl.hostname.includes('youtu.be')) {
        return parsedUrl.pathname.split('/').filter(Boolean)[0] || null
      }

      if (parsedUrl.hostname.includes('youtube.com')) {
        if (parsedUrl.pathname.startsWith('/shorts/')) {
          return parsedUrl.pathname.split('/')[2] || null
        }

        if (parsedUrl.pathname.startsWith('/embed/')) {
          return parsedUrl.pathname.split('/')[2] || null
        }

        return parsedUrl.searchParams.get('v')
      }
    } catch {
      return null
    }

    return null
  }

  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = getYouTubeId(url)
      if (!videoId) return url
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop()
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1`
    }
    return url
  }

  const getThumbnail = (url) => {
    if (video.thumbnail) {
      return video.thumbnail
    }

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = getYouTubeId(url)
      if (!videoId) return null
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }
    return null
  }

  return (
    <BentoCard className={className}>
      <div className="flex flex-col h-full bg-white overflow-hidden">
        {/* Video Section */}
        <div className="relative flex-1 min-h-[280px]">
          {!isLoaded && (
            <div 
              className="relative w-full h-full cursor-pointer group/video"
              onClick={() => setIsLoaded(true)}
            >
              {getThumbnail(video.url) ? (
                <img 
                  src={getThumbnail(video.url)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Time Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 text-xs font-bold text-slate-700">
                1.00
              </div>
              
              {/* Badge Badge */}
              {video.badge && (
                <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-xs font-semibold text-slate-700">
                  {video.badge}
                </div>
              )}
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-blue-600 p-4 group-hover/video:bg-blue-700 group-hover/video:scale-110 transition-all">
                  <Play className="size-6 text-white" fill="white" />
                </div>
              </div>
            </div>
          )}
          
          {isLoaded && (
            <div className="w-full h-full overflow-hidden">
              {isDirectVideo ? (
                <video
                  src={preferredSource}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                  poster={video.thumbnail}
                />
              ) : (
                <iframe
                  src={getEmbedUrl(video.url)}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="p-4 sm:p-5 flex flex-col gap-3 bg-white border-t border-slate-100">
          {/* Cliente y Empresa */}
          <div>
            {video.cliente && (
              <p className="text-xs text-slate-600 font-medium">{video.cliente}</p>
            )}
            {video.empresa && (
              <p className="text-xs text-slate-500 font-medium">{video.empresa}</p>
            )}
          </div>

          {/* Descripción */}
          {video.description && (
            <p className="text-sm text-slate-700 line-clamp-2 leading-snug">
              {video.description}
            </p>
          )}

          {/* Fecha */}
          {video.date && (
            <p className="text-xs text-slate-500 font-medium">
              {video.date}
            </p>
          )}

          {/* CTA Button */}
          <button className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-800 font-bold text-sm rounded-lg hover:shadow-lg transition-all hover:scale-[1.02]">
            Ver Video
          </button>
        </div>
      </div>
    </BentoCard>
  )
}

export default function Portfolio() {
  return (
    <>
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Award className="size-4 text-blue-600" />
          <span className="text-sm text-blue-700 font-medium">Trabajos Destacados</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
          Portafolio
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-normal">
          Creación de contenido y edición estratégica para redes sociales
        </p>
      </motion.div>

      {/* Grid Layout - Videos con Info a la Izquierda */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {DEMO_VIDEOS.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <VideoCard video={video} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href={PORTFOLIO_EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
        >
          Ver más
          <ExternalLink className="size-5" />
        </a>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
        {[
          {
            icon: <Zap className="size-6" />,
            title: "Edición Rápida",
            desc: "Entrega profesional en tiempo récord"
          },
          {
            icon: <Award className="size-6" />,
            title: "Estrategia de Contenido",
            desc: "Cada video se planifica para atraer y convertir"
          },
          {
            icon: <Play className="size-6" />,
            title: "Proceso Colaborativo",
            desc: "Ajustes claros por etapas para llegar al resultado ideal"
          }
        ].map((service, idx) => (
          <BentoCard key={idx} className="text-center">
            <div className="inline-flex p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 mb-4">
              {service.icon}
            </div>
            <h3 className="font-semibold text-slate-900 tracking-tight mb-2">{service.title}</h3>
            <p className="text-sm text-slate-600 font-normal">{service.desc}</p>
          </BentoCard>
        ))}
      </motion.div>
    </section>
    </>
  )
}
