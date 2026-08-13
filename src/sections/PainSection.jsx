import { motion as Motion } from 'framer-motion'
import { AlertCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import { GridPattern } from '../components/MagicUI'
import antesImage from '../assets/antes (1).png'
import despuesImage from '../assets/antes (2).png'

export default function PainSection() {
  const [activeImage, setActiveImage] = useState(null)

  const beforeBullets = [
    'Publicas, pero nadie compra.',
    'Falta de tiempo para cumplir metas.',
    'Inviertes mucho dinero y no hay resultados.',
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20" id="problema">
      <div className="absolute inset-0 pointer-events-none">
        <GridPattern className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-7xl px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2">
            <AlertCircle className="size-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">El Problema</span>
          </div>

          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Mejora tu contenido con la mejor edición del mercado.
          </h2>
        </Motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-red-200 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)] lg:min-h-[520px]">
              <div className="absolute left-4 top-4 z-10 inline-flex rounded-full bg-red-600 px-3 py-1">
                <span className="text-xs font-bold tracking-wide text-white sm:text-sm">ANTES</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveImage({ src: antesImage, alt: 'Resultado antes de aplicar estrategia de contenido para video-turismo-chile' })}
                className="group relative flex h-full w-full items-center justify-center p-1.5 sm:p-2"
                aria-label="Ampliar imagen ANTES"
              >
                <img
                  src={antesImage}
                  alt="Resultado antes de aplicar estrategia de contenido para video-turismo-chile"
                  className="h-full w-full object-contain object-center"
                  loading="lazy"
                />
                <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-80 transition-opacity group-hover:opacity-100">
                  Clic para ampliar
                </span>
              </button>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="order-3 md:col-span-2 xl:order-2 xl:col-span-1"
          >
            <div className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(2,6,23,0.08)] sm:p-6">
              <div className="space-y-4">
                {beforeBullets.map((item, idx) => (
                  <Motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/30 p-4"
                  >
                    <span className="mt-0.5 flex-shrink-0">
                      <XCircle className="size-5 text-red-500" />
                    </span>
                    <p className="text-base font-semibold leading-snug text-slate-800 sm:text-lg">
                      {item}
                    </p>
                  </Motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5 sm:mt-6 sm:p-6">
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  <span className="font-bold text-blue-700">El problema no es publicar.</span> Es publicar <span className="font-bold">sin estrategia</span>. Corregimos eso con videos que retienen y convierten.
                </p>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="order-2 xl:order-3"
          >
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-green-200 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)] lg:min-h-[520px]">
              <div className="absolute left-4 top-4 z-10 inline-flex rounded-full bg-green-600 px-3 py-1">
                <span className="text-xs font-bold tracking-wide text-white sm:text-sm">DESPUÉS</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveImage({ src: despuesImage, alt: 'Resultado después de aplicar estrategia de produccion-audiovisual-valle-del-elqui' })}
                className="group relative flex h-full w-full items-center justify-center p-1.5 sm:p-2"
                aria-label="Ampliar imagen DESPUES"
              >
                <img
                  src={despuesImage}
                  alt="Resultado después de aplicar estrategia de produccion-audiovisual-valle-del-elqui"
                  className="h-full w-full object-contain object-center"
                  loading="lazy"
                />
                <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-80 transition-opacity group-hover:opacity-100">
                  Clic para ampliar
                </span>
              </button>
            </div>
          </Motion.div>
        </div>

        {activeImage ? (
          <div
            className="fixed inset-0 z-[120] bg-black/85 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/40 px-3 py-2 text-sm font-semibold text-white"
              onClick={() => setActiveImage(null)}
              aria-label="Cerrar imagen ampliada"
            >
              Cerrar
            </button>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-full max-w-full rounded-xl border border-white/20 bg-white object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
