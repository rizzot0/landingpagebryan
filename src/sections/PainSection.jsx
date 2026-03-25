import { motion as Motion } from 'framer-motion'
import { AlertCircle, XCircle } from 'lucide-react'
import { GridPattern } from '../components/MagicUI'
import antesImage from '../assets/antes (1).png'
import despuesImage from '../assets/antes (2).png'

export default function PainSection() {
  const bullets = [
    'Publican, pero no reciben mensajes.',
    'Tienen likes, pero no clientes.',
    'Invierten tiempo y no ven resultados.',
    'No saben qué contenido funciona.'
  ]

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

        {/* 3 Column Layout: Image Before | Content | Image After */}
        <div className="grid md:grid-cols-3 xl:grid-cols-[1.3fr_0.9fr_1.3fr] gap-6 lg:gap-8 items-start md:items-stretch">
          {/* Left: Gráfico/Stats ANTES */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 h-full min-h-[420px] md:min-h-[620px] xl:min-h-[700px]"
          >
            <div className="relative h-full overflow-hidden rounded-[28px] bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
              <img
                src={antesImage}
                alt="Resultado antes de aplicar estrategia de contenido"
                className="w-full h-full object-contain object-center"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/25" />
            </div>
          </Motion.div>

          {/* Center: Pain Points */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:col-span-1"
          >
            {/* Pain Bullets */}
            <div className="space-y-4">
              {bullets.map((item, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-red-100 shadow-sm hover:shadow-md transition-all"
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

            {/* Solution Text */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl"
            >
              <p className="text-slate-700 font-semibold leading-relaxed">
                <span className="text-blue-600 font-bold">El problema no es publicar.</span> Es publicar <span className="font-bold">sin estrategia.</span> Corregimos eso con videos que retienen y convierten.
              </p>
            </Motion.div>
          </Motion.div>

          {/* Right: Foto derecha */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-3 h-full min-h-[420px] md:min-h-[620px] xl:min-h-[700px]"
          >
            <div className="relative h-full overflow-hidden rounded-[28px] bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
              <img
                src={despuesImage}
                alt="Resultado después de aplicar estrategia de contenido"
                className="w-full h-full object-contain object-center"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/25" />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}