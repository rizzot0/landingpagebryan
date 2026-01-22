import { motion } from 'framer-motion'
import { AlertCircle, XCircle } from 'lucide-react'
import { GridPattern } from '../components/MagicUI'

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
        <motion.div
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
        </motion.div>

        {/* 3 Column Layout: Image Before | Content | Image After */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left: Gráfico/Stats ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center border-2 border-slate-300 shadow-lg">
              <p className="text-slate-400 text-sm font-medium">[Foto izquierda]</p>
            </div>
          </motion.div>

          {/* Center: Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            {/* Pain Bullets */}
            <div className="space-y-4">
              {bullets.map((item, idx) => (
                <motion.div
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
                </motion.div>
              ))}
            </div>

            {/* Solution Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl"
            >
              <p className="text-slate-700 font-semibold leading-relaxed">
                <span className="text-blue-600 font-bold">El problema no es publicar.</span> Es publicar <span className="font-bold">sin estrategia.</span> Corregimos eso con videos que retienen y convierten.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Foto derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center border-2 border-slate-300 shadow-lg">
              <p className="text-slate-400 text-sm font-medium">[Foto derecha]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}