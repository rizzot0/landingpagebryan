import { motion as Motion } from 'framer-motion'
import { AlertCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import { GridPattern } from '../components/MagicUI'
import antesImage from '../assets/antes (1).png'
import despuesImage from '../assets/antes (2).png'

export default function PainSection() {
  const [activeImage, setActiveImage] = useState(null)

  const beforeBullets = [
    'Publican, pero no reciben mensajes.',
    'Tienen likes, pero no clientes.',
    'Invierten tiempo y no ven resultados.',
    'No saben qué contenido funciona.'
  ]

  const afterBullets = [
    'Publican con estrategia y reciben mensajes.',
    'Convierten vistas en clientes reales.',
    'Su contenido retiene y genera confianza.',
    'Saben exactamente qué formato sí vende.'
  ]

  const topBullets = beforeBullets.slice(0, 2)
  const bottomBullets = afterBullets.slice(0, 2)

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <GridPattern className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 z-20">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-8">
            <AlertCircle className="size-4 text-red-600" />
            <span className="text-sm text-red-700 font-medium">El Problema</span>
          </div>

          {/* Pain Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Esto es lo que está frenando tus ventas
          </h2>
        </Motion.div>

        {/* Storyboard 2x2: imagen + texto / texto + imagen */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Top Left: ANTES */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <div className="relative overflow-hidden rounded-[28px] border-2 border-red-200 bg-white min-h-[420px] lg:min-h-[520px] shadow-lg">
              <div className="absolute top-4 left-4 z-10 inline-flex px-3 py-1 rounded-full bg-red-600">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">ANTES</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage({ src: antesImage, alt: 'Resultado antes de aplicar estrategia de contenido' })}
                className="group relative flex h-full w-full items-center justify-center p-4 sm:p-6"
                aria-label="Ampliar imagen ANTES"
              >
                <img
                  src={antesImage}
                  alt="Resultado antes de aplicar estrategia de contenido"
                  className="h-auto w-auto max-h-[540px] max-w-full object-contain object-center"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
                <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Clic para ampliar
                </span>
              </button>
            </div>
          </Motion.div>

          {/* Top Right: Pain Points (Parte 1) */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="order-2"
          >
            <div className="h-full rounded-[28px] border-2 border-red-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="space-y-4">
                {topBullets.map((item, idx) => (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200"
                  >
                    <span className="mt-0.5 flex-shrink-0">
                      <XCircle className="size-6 text-red-500" />
                    </span>
                    <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
                      {item}
                    </p>
                  </Motion.div>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Bottom Left: Pain Points (Parte 2) + solución */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="order-3"
          >
            <div className="h-full rounded-[28px] border-2 border-blue-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="space-y-4">
                {bottomBullets.map((item, idx) => (
                <Motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200"
                >
                  <span className="mt-0.5 flex-shrink-0">
                    <AlertCircle className="size-6 text-green-600" />
                  </span>
                  <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
                    {item}
                  </p>
                </Motion.div>
              ))}
              </div>

              <div className="mt-6 p-5 sm:p-6 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
                  <span className="text-green-700 font-bold">La diferencia está en la estrategia.</span> Cuando el video se edita con intención, <span className="font-bold">la audiencia se queda, confía y compra.</span>
                </p>
              </div>
            </div>
          </Motion.div>

          {/* Bottom Right: DESPUES */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="order-4"
          >
            <div className="relative overflow-hidden rounded-[28px] border-2 border-green-200 bg-white min-h-[420px] lg:min-h-[520px] shadow-lg">
              <div className="absolute top-4 left-4 z-10 inline-flex px-3 py-1 rounded-full bg-green-600">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">DESPUES</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage({ src: despuesImage, alt: 'Resultado después de aplicar estrategia de contenido' })}
                className="group relative flex h-full w-full items-center justify-center p-4 sm:p-6"
                aria-label="Ampliar imagen DESPUES"
              >
                <img
                  src={despuesImage}
                  alt="Resultado después de aplicar estrategia de contenido"
                  className="h-auto w-auto max-h-[540px] max-w-full object-contain object-center"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
                <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
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