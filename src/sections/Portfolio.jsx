import { motion } from 'framer-motion'
import { BentoCard } from '../components/MagicUI'
import { Play, Award, Zap } from 'lucide-react'
import { useState } from 'react'

// TODO: Reemplazar con los videos reales del cliente
const DEMO_VIDEOS = [
  {
    id: 1,
    title: "Video Promocional Premium",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: true,
    category: "Comercial",
    badge: "🔥 Viral"
  },
  {
    id: 2,
    title: "Contenido Corporativo",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Empresarial",
    badge: "👁️ +50k Vistas"
  },
  {
    id: 3,
    title: "Reel Creativo",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Social Media",
    badge: "🚀 +200% Retención"
  },
  {
    id: 4,
    title: "Documental Corto",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Narrativa",
    badge: "🏆 Caso de Éxito"
  },
  {
    id: 5,
    title: "Motion Graphics",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Animación",
    badge: "🎯 Conversiones"
  }
]

function VideoCard({ video, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false)

  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('/').pop()
        : new URL(url).searchParams.get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop()
      return `https://player.vimeo.com/video/${videoId}`
    }
    return url
  }

  const getThumbnail = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('/').pop()
        : new URL(url).searchParams.get('v')
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }
    return null
  }

  return (
    <BentoCard className={className}>
      {!isLoaded && (
        <div 
          className="relative aspect-[9/16] cursor-pointer group/video"
          onClick={() => setIsLoaded(true)}
        >
          <img 
            src={getThumbnail(video.url)}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          {video.badge && (
            <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-white text-xs font-semibold">
              {video.badge}
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-blue-600 p-5 group-hover/video:bg-blue-700 group-hover/video:scale-110 transition-all">
              <Play className="size-8 text-white" fill="white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-600 text-white mb-2 font-medium">
              {video.category}
            </span>
            <h3 className="font-semibold text-white tracking-tight">{video.title}</h3>
          </div>
        </div>
      )}
      
      {isLoaded && (
        <div className="aspect-[9/16] rounded-lg overflow-hidden">
          <iframe
            src={getEmbedUrl(video.url)}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </BentoCard>
  )
}

export default function Portfolio() {
  return (
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
          Explora proyectos que combinan creatividad, técnica y narrativa visual impactante
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Featured Large Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 lg:row-span-2"
        >
          <VideoCard video={DEMO_VIDEOS[0]} className="h-full" />
        </motion.div>

        {/* Grid Items */}
        {DEMO_VIDEOS.slice(1).map((video, idx) => (
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
            title: "Calidad Premium",
            desc: "Equipos y técnicas de nivel Hollywood"
          },
          {
            icon: <Play className="size-6" />,
            title: "Revisiones Ilimitadas",
            desc: "Hasta que quedes 100% satisfecho"
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
  )
}
