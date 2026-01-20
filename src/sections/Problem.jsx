import { XCircle, AlertTriangle, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'
import { BentoCard } from '../components/MagicUI'

export default function Problem() {
  const problems = [
    'Publican, pero no reciben mensajes.',
    'Tienen likes, pero no clientes.',
    'Invierten tiempo y no ven resultados.',
    'No saben qué contenido funciona.'
  ]

  return (
    <section id="problema" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-red-50/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 font-medium text-sm mb-4">
            <AlertTriangle className="size-4" />
            <span>El problema real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
            ¿Por qué tu contenido no convierte?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Lee esto en 5 segundos. Si te identificas, necesitas cambiar la estrategia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <BentoCard className="bg-white border border-red-100">
            <div className="space-y-4">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-red-50 border border-red-100 p-2">
                    <XCircle className="size-5 text-red-500" />
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-blue-50 border border-blue-100 p-2">
                  <HeartHandshake className="size-5 text-blue-600" />
                </div>
                <p className="text-slate-700">
                  El problema no es publicar: es publicar sin estrategia. Lo resolvemos con videos diseñados para clientes, no solo para likes.
                </p>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  )
}
