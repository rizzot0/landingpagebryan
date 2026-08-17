import { motion as Motion } from 'framer-motion'
import { useState } from 'react'
import estrategiaImage from '../assets/estrategia.png'

export default function Servicios() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="servicios" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="group relative block w-full overflow-hidden bg-white"
            aria-label="Ampliar imagen de estrategia"
          >
            <img
              src={estrategiaImage}
              alt="Proceso de trabajo: estrategia, grabación, edición y gestión para lograr resultados en Meta Ads"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-80 transition-opacity group-hover:opacity-100 sm:bottom-4 sm:right-4">
              Clic para ampliar
            </span>
          </button>
        </Motion.div>
      </div>

      {expanded ? (
        <div
          className="fixed inset-0 z-[120] bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setExpanded(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/40 px-3 py-2 text-sm font-semibold text-white"
            onClick={() => setExpanded(false)}
            aria-label="Cerrar imagen ampliada"
          >
            Cerrar
          </button>
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={estrategiaImage}
              alt="Proceso de trabajo: estrategia, grabación, edición y gestión para lograr resultados en Meta Ads"
              className="max-h-full max-w-full rounded-xl border border-white/20 bg-white object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
