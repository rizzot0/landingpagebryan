import { useEffect, useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Clapperboard, ImageIcon, MapPinned, Play, BarChart3 } from 'lucide-react'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { casosDeExito } from '../lib/casosData'
import { wsp } from '../lib/planesData'

function SectionEyebrow({ children }) {
  return (
    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
      {children}
    </p>
  )
}

function MediaPlaceholder({ icon: Icon, label, tone = 'slate' }) {
  const tones = {
    slate: 'border-slate-200 bg-slate-50 text-slate-500',
    blue: 'border-blue-200 bg-blue-50/60 text-blue-700',
    green: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  }

  return (
    <div
      className={`flex min-h-[160px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed px-4 py-8 text-center ${tones[tone]}`}
    >
      {Icon ? <Icon className="size-8 opacity-70" strokeWidth={1.5} /> : null}
      <p className="max-w-xs text-sm font-medium leading-relaxed">{label}</p>
    </div>
  )
}

function CaseVideo({
  src,
  poster,
  label,
  className = '',
  tall = false,
  autoPlayOnView = false,
}) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [nearView, setNearView] = useState(false)
  const [activated, setActivated] = useState(false)
  const [playing, setPlaying] = useState(false)

  // Cargar el archivo solo cuando el bloque se acerca al viewport.
  useEffect(() => {
    const node = containerRef.current
    if (!node || !src) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true)
          return
        }

        if (autoPlayOnView) {
          const el = videoRef.current
          if (el) {
            el.pause()
            el.removeAttribute('src')
            el.load()
          }
          setPlaying(false)
          setActivated(false)
          setNearView(false)
        }
      },
      { rootMargin: autoPlayOnView ? '200px 0px' : '80px 0px', threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [src, autoPlayOnView])

  // Autoplay cuando ya está cerca y el src está montado.
  useEffect(() => {
    if (!autoPlayOnView || !nearView || !src) return undefined
    setActivated(true)

    const id = window.setTimeout(() => {
      const el = videoRef.current
      if (!el) return
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    }, 50)

    return () => window.clearTimeout(id)
  }, [autoPlayOnView, nearView, src])

  const shouldMountSrc = autoPlayOnView ? nearView || activated : activated

  const startPlayback = () => {
    setActivated(true)
    window.setTimeout(() => {
      const el = videoRef.current
      if (!el) return
      el.play()
        .then(() => setPlaying(true))
        .catch(() => {})
    }, 50)
  }

  const toggle = () => {
    if (!activated) {
      startPlayback()
      return
    }
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => {})
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  if (!src) {
    return <MediaPlaceholder icon={Play} label={label || 'Video destacado'} tone="blue" />
  }

  const showPosterOverlay = !autoPlayOnView && !playing

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-black ${className}`}
    >
      <div className={`relative bg-black ${tall ? 'aspect-[9/16] max-h-[420px]' : 'aspect-video'}`}>
        {shouldMountSrc ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster || undefined}
            className="h-full w-full object-cover"
            playsInline
            muted={autoPlayOnView}
            loop={autoPlayOnView}
            preload="none"
            controls={!autoPlayOnView && playing}
            onEnded={() => {
              if (!autoPlayOnView) setPlaying(false)
            }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        ) : poster ? (
          <img
            src={poster}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-full w-full bg-slate-900" />
        )}

        {showPosterOverlay ? (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-0 flex items-center justify-center bg-slate-950/35 transition hover:bg-slate-950/45"
            aria-label="Reproducir video"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg sm:size-16">
              <Play className="ml-1 size-6 fill-current sm:size-7" />
            </span>
          </button>
        ) : null}
      </div>
      {label ? <p className="bg-white px-4 py-3 text-sm text-slate-600">{label}</p> : null}
    </div>
  )
}

function CasoStudy({ caso, index }) {
  return (
    <article className="border-b border-slate-100 last:border-b-0">
      {/* Header del caso */}
      <div className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center gap-4">
            {caso.clientLogo ? (
              <img
                src={caso.clientLogo}
                alt={caso.client}
                className="h-14 w-14 rounded-xl object-cover ring-1 ring-slate-200"
              />
            ) : null}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Caso {String(index + 1).padStart(2, '0')} · {caso.category}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{caso.client}</h2>
              <p className="text-sm text-slate-500">{caso.region}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gancho */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <h3 className="px-5 pt-6 text-center text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:px-8 sm:pt-8 sm:text-3xl lg:text-4xl">
              {caso.hook.headline}
            </h3>
            <div className="mt-5 w-full sm:mt-6">
              <CaseVideo
                src={caso.hook.video?.src}
                poster={caso.hook.video?.poster || undefined}
                autoPlayOnView
                className="rounded-none border-0 border-t border-slate-200"
              />
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Contexto */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>El contexto</SectionEyebrow>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {caso.context.title}
          </h3>
          <p className="mt-2 max-w-2xl text-base text-slate-600 sm:text-lg">{caso.context.subtitle}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[caso.context.startingPoint, caso.context.challenge].map((block) => (
              <Motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-lg font-bold text-slate-900">{block.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {block.text}
                </p>
                <div className="mt-5">
                  {block.media?.src ? (
                    <img
                      src={block.media.src}
                      alt={block.media.placeholder || block.title}
                      className="mx-auto h-auto max-h-[420px] w-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <MediaPlaceholder
                      icon={block.title.toLowerCase().includes('desaf') ? MapPinned : ImageIcon}
                      label={block.media?.placeholder || 'Imagen opcional'}
                    />
                  )}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rol */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>El trabajo</SectionEyebrow>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {caso.role.title}
          </h3>
          <p className="mt-2 max-w-2xl text-base text-slate-600 sm:text-lg">{caso.role.subtitle}</p>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <ul className="divide-y divide-slate-100">
              {caso.role.items.map((item, i) => (
                <li
                  key={item.title}
                  className="flex gap-4 px-5 py-5 transition-colors hover:bg-slate-50/80 sm:gap-5 sm:px-8 sm:py-6"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-200 sm:size-10 sm:text-base">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>El proceso</SectionEyebrow>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {caso.process.title}
          </h3>
          <p className="mt-2 max-w-2xl text-base text-slate-600 sm:text-lg">{caso.process.subtitle}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caso.process.items.map((item, i) => (
              <Motion.div
                key={`${item.src || item.label}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >
                {item.type === 'video' && item.src ? (
                  <CaseVideo
                    src={item.src}
                    poster={item.poster}
                    tall
                    className="rounded-2xl border-0"
                  />
                ) : item.type === 'image' && item.src ? (
                  <img
                    src={item.src}
                    alt={item.label || 'Detrás de cámara'}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-[3/4] flex-col items-center justify-center gap-3 px-4 text-center text-slate-500">
                    {item.type === 'video' ? (
                      <Play className="size-8 text-blue-600" strokeWidth={1.5} />
                    ) : (
                      <Clapperboard className="size-8" strokeWidth={1.5} />
                    )}
                  </div>
                )}
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Los resultados</SectionEyebrow>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {caso.results.title}
          </h3>
          <p className="mt-2 max-w-2xl text-base text-slate-600 sm:text-lg">{caso.results.subtitle}</p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {caso.results.metrics.map((metric, i) => (
              <Motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-6 text-center"
              >
                <p className="text-2xl font-extrabold tracking-tight text-emerald-800 sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{metric.label}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-4 space-y-4">
            {caso.results.chart?.src ? (
              <img
                src={caso.results.chart.src}
                alt="Resultados en Meta Ads"
                className="w-full rounded-2xl border border-emerald-200 bg-white object-contain"
                loading="lazy"
              />
            ) : (
              <MediaPlaceholder
                icon={BarChart3}
                label={caso.results.chart?.placeholder || 'Gráfico de resultados'}
                tone="green"
              />
            )}

            {caso.results.extraCharts?.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {caso.results.extraCharts.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Gráfico de conversaciones"
                    className="w-full rounded-2xl border border-emerald-200 bg-white object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : null}

            {caso.results.conversations?.length ? (
              <div className="pt-4">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
                  Conversaciones reales generadas
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {caso.results.conversations.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt="Captura de conversación con cliente"
                      className="h-auto w-full rounded-xl border border-slate-200 object-cover shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-blue-600 px-6 py-10 text-center sm:px-12 sm:py-14"
          >
            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-white sm:text-xl">
              “{caso.closing.quote}”
            </p>
            <a
              href={wsp(caso.closing.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
            >
              {caso.closing.ctaLabel}
            </a>
          </Motion.div>
        </div>
      </section>
    </article>
  )
}

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="border-b border-slate-100 bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Resultados reales
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Casos de éxito</h1>
            <p className="mt-2 max-w-xl text-slate-600">
              Marcas reales, resultados reales. Estrategia, contenido y Meta Ads con impacto medible.
            </p>
          </div>
        </div>

        {casosDeExito.map((caso, index) => (
          <CasoStudy key={caso.slug} caso={caso} index={index} />
        ))}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
