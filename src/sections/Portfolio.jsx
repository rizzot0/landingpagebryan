import { motion } from 'framer-motion'
import { BentoCard } from '../components/MagicUI'
import { Play, Award, Zap, X } from 'lucide-react'
import { useState } from 'react'

// TODO: Reemplazar con los videos reales del cliente
const DEMO_VIDEOS = [
  {
    id: 1,
    title: "Video Promocional Premium",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: true,
    category: "Comercial",
    badge: "🔥 Viral",
    cliente: "Carlos Martínez",
    empresa: "FitLife Studio",
    description: "Edición de video profesional para campaña de marketing digital con efectos visuales de alto impacto.",
    date: "January 20, 2026"
  },
  {
    id: 2,
    title: "Contenido Corporativo",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Empresarial",
    badge: "👁️ +50k Vistas",
    cliente: "Ana García",
    empresa: "TechStart Inc",
    description: "Video corporativo de presentación de empresa con transiciones dinámicas y motion graphics.",
    date: "January 19, 2026"
  },
  {
    id: 3,
    title: "Reel Creativo",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Social Media",
    badge: "🚀 +200% Retención",
    cliente: "Pedro López",
    empresa: "Social Media Pro",
    description: "Contenido viral para redes sociales con edición rápida y efectos atractivos.",
    date: "January 18, 2026"
  },
  {
    id: 4,
    title: "Documental Corto",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Narrativa",
    badge: "🏆 Caso de Éxito",
    cliente: "María Rodríguez",
    empresa: "Creative Studio",
    description: "Documental corto con narrativa envolvente y cinematografía de calidad profesional.",
    date: "January 17, 2026"
  },
  {
    id: 5,
    title: "Motion Graphics",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: false,
    category: "Animación",
    badge: "🎯 Conversiones",
    cliente: "Juan Pérez",
    empresa: "Digital Agency",
    description: "Animaciones personalizadas y motion graphics para explicar conceptos complejos.",
    date: "January 16, 2026"
  }
]

// Proyectos adicionales para el modal
const ADDITIONAL_VIDEOS = [
  {
    id: 6,
    title: "Tutorial Educativo",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Educación",
    badge: "📚 Top Educativo",
    cliente: "Laura Sánchez",
    empresa: "EduOnline",
    description: "Video tutorial con animaciones explicativas y gráficos interactivos.",
    date: "January 15, 2026"
  },
  {
    id: 7,
    title: "Evento Corporativo",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Eventos",
    badge: "🎉 Destacado",
    cliente: "Roberto Gómez",
    empresa: "Events Corp",
    description: "Cobertura profesional de evento con múltiples cámaras y edición dinámica.",
    date: "January 14, 2026"
  },
  {
    id: 8,
    title: "Campaña Publicitaria",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Publicidad",
    badge: "💎 Premium",
    cliente: "Sofia Martín",
    empresa: "Brand Studio",
    description: "Spot publicitario con color grading profesional y efectos visuales.",
    date: "January 13, 2026"
  },
  {
    id: 9,
    title: "Testimonial Cliente",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Testimonios",
    badge: "⭐ Impacto",
    cliente: "Miguel Torres",
    empresa: "Success Stories",
    description: "Video testimonial con iluminación profesional y audio optimizado.",
    date: "January 12, 2026"
  },
  {
    id: 10,
    title: "Producto Launch",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Producto",
    badge: "🚀 Lanzamiento",
    cliente: "Carmen Díaz",
    empresa: "Tech Launch",
    description: "Video de lanzamiento de producto con animaciones 3D y renders.",
    date: "January 11, 2026"
  },
  {
    id: 11,
    title: "Behind The Scenes",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "BTS",
    badge: "🎬 Exclusivo",
    cliente: "Daniel Ruiz",
    empresa: "Film Production",
    description: "Detrás de cámaras con edición documental y narrativa envolvente.",
    date: "January 10, 2026"
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
      <div className="flex flex-col h-full bg-white overflow-hidden">
        {/* Video Section */}
        <div className="relative flex-1 min-h-[280px]">
          {!isLoaded && (
            <div 
              className="relative w-full h-full cursor-pointer group/video"
              onClick={() => setIsLoaded(true)}
            >
              <img 
                src={getThumbnail(video.url)}
                alt={video.title}
                className="w-full h-full object-cover"
              />
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
              <iframe
                src={getEmbedUrl(video.url)}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
  const [isModalOpen, setIsModalOpen] = useState(false)

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

      {/* Ver Más Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
        >
          Ver más proyectos
          <Award className="size-5" />
        </button>
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

    {/* Modal de Proyectos Adicionales */}
    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header del Modal */}
          <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Más Proyectos</h3>
              <p className="text-sm text-slate-600 mt-1">Explora nuestra colección completa de trabajos</p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="size-6 text-slate-600" />
            </button>
          </div>

          {/* Contenido del Modal */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {ADDITIONAL_VIDEOS.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )}
    </>
  )
}
