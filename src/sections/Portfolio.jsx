import { motion } from 'framer-motion'
import { Play, Instagram } from 'lucide-react'
import { useMemo, useState } from 'react'
import { trackEvent } from '../lib/analytics'

const FILTERS = [
  { id: 'todos', label: 'TODOS' },
  { id: 'salud', label: 'SALUD' },
  { id: 'turismo', label: 'TURISMO' },
  { id: 'ventas-al-por-menor', label: 'VENTAS AL POR MENOR' },
  { id: 'inmobiliaria', label: 'INMOBILIARIA' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/brayaneditavideos/'

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

const LEGACY_VIDEOS = [
  {
    id: 'legacy-1',
    title: 'ELQUI SUP',
    label: 'SERVICIOS DEPORTIVOS',
    section: null,
    url: '/videos/elqui-sup-hq.mp4',
    sources: {
      hq: '/videos/elqui-sup-hq.mp4',
      lq: '/videos/elqui-sup-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/elqui-sup-poster.jpg',
    duration: '00:32',
  },
  {
    id: 'legacy-2',
    title: 'Arca de Lucy',
    label: 'VENTAS AL POR MENOR',
    section: null,
    url: '/videos/arca-de-lucy-hq.mp4',
    sources: {
      hq: '/videos/arca-de-lucy-hq.mp4',
      lq: '/videos/arca-de-lucy-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/arca-de-lucy-poster.jpg',
    duration: '00:28',
  },
  {
    id: 'legacy-3',
    title: 'Marca personal',
    label: 'VENTAS AL POR MENOR',
    section: null,
    url: '/videos/marca-personal-1-hq.mp4',
    sources: {
      hq: '/videos/marca-personal-1-hq.mp4',
      lq: '/videos/marca-personal-1-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/marca-personal-1-poster.jpg',
    duration: '00:24',
  },
  {
    id: 'legacy-4',
    title: 'Briza Tours',
    label: 'TURISMO',
    section: null,
    url: '/videos/briza-tours-hq.mp4',
    sources: {
      hq: '/videos/briza-tours-hq.mp4',
      lq: '/videos/briza-tours-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/briza-tours-poster.jpg',
    duration: '00:30',
  },
  {
    id: 'legacy-5',
    title: 'Marca personal 2',
    label: 'VENTAS AL POR MENOR',
    section: null,
    url: '/videos/marca-personal-2-hq.mp4',
    sources: {
      hq: '/videos/marca-personal-2-hq.mp4',
      lq: '/videos/marca-personal-2-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/marca-personal-2-poster.jpg',
    duration: '00:22',
  },
  {
    id: 'legacy-6',
    title: 'ECOLAB',
    label: 'VENTAS AL POR MENOR',
    section: null,
    url: '/videos/federico-ecolab-hq.mp4',
    sources: {
      hq: '/videos/federico-ecolab-hq.mp4',
      lq: '/videos/federico-ecolab-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/federico-ecolab-poster.jpg',
    duration: '00:26',
  },
]

const SECTION_VIDEOS = [
  {
    id: 'salud-1',
    title: 'Macademy Podología Clínica',
    label: 'SALUD',
    section: 'salud',
    url: '/videos/salud-novpz0wvqdo-hq.mp4',
    sources: {
      hq: '/videos/salud-novpz0wvqdo-hq.mp4',
      lq: '/videos/salud-novpz0wvqdo-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/salud-novpz0wvqdo-poster.webp',
    duration: '00:34',
  },
  {
    id: 'salud-2',
    title: 'Macademy — Uñas enterradas',
    label: 'SALUD',
    section: 'salud',
    url: '/videos/salud-r2oro4ijp5g-hq.mp4',
    sources: {
      hq: '/videos/salud-r2oro4ijp5g-hq.mp4',
      lq: '/videos/salud-r2oro4ijp5g-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/salud-r2oro4ijp5g-poster.webp',
    duration: '00:32',
  },
  {
    id: 'salud-3',
    title: 'Macademy — Antes y después',
    label: 'SALUD',
    section: 'salud',
    url: '/videos/salud-nawst61dhzc-hq.mp4',
    sources: {
      hq: '/videos/salud-nawst61dhzc-hq.mp4',
      lq: '/videos/salud-nawst61dhzc-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/salud-nawst61dhzc-poster.webp',
    duration: '00:45',
  },
  {
    id: 'turismo-1',
    title: 'Elqui Sup — Experiencia Molokai',
    label: 'TURISMO',
    section: 'turismo',
    url: '/videos/turismo-f4ollbhk2hk-hq.mp4',
    sources: {
      hq: '/videos/turismo-f4ollbhk2hk-hq.mp4',
      lq: '/videos/turismo-f4ollbhk2hk-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/turismo-f4ollbhk2hk-poster.webp',
    duration: '00:38',
  },
  {
    id: 'turismo-2',
    title: 'Gaviota Aventura',
    label: 'TURISMO',
    section: 'turismo',
    url: '/videos/turismo-uyugd6p9pe4-hq.mp4',
    sources: {
      hq: '/videos/turismo-uyugd6p9pe4-hq.mp4',
      lq: '/videos/turismo-uyugd6p9pe4-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/turismo-uyugd6p9pe4-poster.webp',
    duration: '00:50',
  },
  {
    id: 'turismo-3',
    title: 'Liga de la Herradura',
    label: 'TURISMO',
    section: 'turismo',
    url: '/videos/turismo-cgnst325jqg-hq.mp4',
    sources: {
      hq: '/videos/turismo-cgnst325jqg-hq.mp4',
      lq: '/videos/turismo-cgnst325jqg-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/turismo-cgnst325jqg-poster.webp',
    duration: '00:25',
  },
  {
    id: 'inmobiliaria-1',
    title: 'Asesorías Vivi — Crédito hipotecario',
    label: 'INMOBILIARIA',
    section: 'inmobiliaria',
    url: '/videos/inmobiliaria-qmjam-nixcq-hq.mp4',
    sources: {
      hq: '/videos/inmobiliaria-qmjam-nixcq-hq.mp4',
      lq: '/videos/inmobiliaria-qmjam-nixcq-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/inmobiliaria-qmjam-nixcq-poster.webp',
    duration: '00:28',
  },
  {
    id: 'inmobiliaria-2',
    title: 'Asesorías Vivi — Inversión Coquimbo',
    label: 'INMOBILIARIA',
    section: 'inmobiliaria',
    url: '/videos/inmobiliaria-susislniyc-hq.mp4',
    sources: {
      hq: '/videos/inmobiliaria-susislniyc-hq.mp4',
      lq: '/videos/inmobiliaria-susislniyc-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/inmobiliaria-susislniyc-poster.webp',
    duration: '00:38',
  },
  {
    id: 'inmobiliaria-3',
    title: 'Asesorías Vivi — Evaluación hipotecaria',
    label: 'INMOBILIARIA',
    section: 'inmobiliaria',
    url: '/videos/inmobiliaria-zi7cdga9gts-hq.mp4',
    sources: {
      hq: '/videos/inmobiliaria-zi7cdga9gts-hq.mp4',
      lq: '/videos/inmobiliaria-zi7cdga9gts-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/inmobiliaria-zi7cdga9gts-poster.webp',
    duration: '00:19',
  },
  {
    id: 'ventas-1',
    title: 'Tecnollaves',
    label: 'VENTAS AL POR MENOR',
    section: 'ventas-al-por-menor',
    url: '/videos/ventas-0judkwtzu78-hq.mp4',
    sources: {
      hq: '/videos/ventas-0judkwtzu78-hq.mp4',
      lq: '/videos/ventas-0judkwtzu78-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/ventas-0judkwtzu78-poster.webp',
    duration: '00:39',
  },
  {
    id: 'ventas-2',
    title: 'Arca de Lucy',
    label: 'VENTAS AL POR MENOR',
    section: 'ventas-al-por-menor',
    url: '/videos/ventas-cumfdv-h-cg-hq.mp4',
    sources: {
      hq: '/videos/ventas-cumfdv-h-cg-hq.mp4',
      lq: '/videos/ventas-cumfdv-h-cg-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/ventas-cumfdv-h-cg-poster.webp',
    duration: '00:20',
  },
  {
    id: 'ventas-3',
    title: 'Pisco Trashumante',
    label: 'VENTAS AL POR MENOR',
    section: 'ventas-al-por-menor',
    url: '/videos/ventas-ueksls2njdy-hq.mp4',
    sources: {
      hq: '/videos/ventas-ueksls2njdy-hq.mp4',
      lq: '/videos/ventas-ueksls2njdy-lq.mp4',
    },
    type: 'mp4',
    thumbnail: '/videos/ventas-ueksls2njdy-poster.webp',
    duration: '00:55',
  },
]

const ALL_VIDEOS = [...SECTION_VIDEOS, ...LEGACY_VIDEOS]

function VideoCard({ video }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const preferredSource = getPreferredVideoSource(video)
  const isDirectVideo =
    video.type === 'mp4' || /(\.mp4|\.webm|\.ogg)(\?|$)/i.test(preferredSource || '')

  const openVideo = () => {
    if (!isLoaded) {
      trackEvent('portfolio_video_open', {
        video_title: video.title,
        location: 'portfolio_grid',
        section: video.section || 'todos',
      })
    }
    setIsLoaded(true)
  }

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        {!isLoaded ? (
          <button
            type="button"
            onClick={openVideo}
            className="relative h-full w-full"
            aria-label={`Reproducir ${video.title}`}
          >
            {video.thumbnail ? (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-slate-200 to-blue-100" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

            {video.duration ? (
              <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700">
                {video.duration}
              </span>
            ) : null}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-blue-600 p-3.5 shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-5 text-white" fill="white" />
              </div>
            </div>
          </button>
        ) : (
          <div className="h-full w-full overflow-hidden">
            {isDirectVideo ? (
              <video
                src={preferredSource}
                className="h-full w-full object-cover"
                controls
                autoPlay
                muted
                playsInline
                preload="none"
                poster={video.thumbnail}
              />
            ) : (
              <iframe
                src={video.url}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        )}
      </div>

      <div className="mt-3 px-0.5">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{video.label}</p>
        <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">{video.title}</h3>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filteredVideos = useMemo(() => {
    if (activeFilter === 'todos') return ALL_VIDEOS
    return SECTION_VIDEOS.filter((video) => video.section === activeFilter)
  }, [activeFilter])

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Portafolio
          </p>
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Empresas que han aumentado un 15 a{' '}
            <span className="whitespace-nowrap">20%</span>{' '}
            sus ventas mediante anuncios para{' '}
            <span className="text-blue-600">META ADS</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 flex gap-2 overflow-x-auto pb-2"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all sm:text-sm ${
                  isActive
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </motion.div>

        {filteredVideos.length > 0 ? (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <p className="text-slate-600">
              Pronto agregaremos videos de esta categoría.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-blue-50"
            onClick={() =>
              trackEvent('social_click', {
                platform: 'instagram',
                location: 'portfolio_section',
              })
            }
          >
            Ver más
            <Instagram className="size-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
