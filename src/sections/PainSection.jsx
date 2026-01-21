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
      
      <div className="relative mx-auto max-w-2xl px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
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

          {/* Pain Bullets */}
          <div className="space-y-4 text-left max-w-xl mx-auto">
            {bullets.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-red-100 shadow-sm">
                <span className="mt-0.5">
                  <XCircle className="size-6 text-red-500" />
                </span>
                <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-slate-800 text-base sm:text-lg leading-relaxed">
              El problema no es publicar. Es publicar <span className="font-semibold text-slate-900">sin estrategia</span>. Corregimos eso con videos que retienen y convierten.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
