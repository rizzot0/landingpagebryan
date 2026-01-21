import { motion } from 'framer-motion'
import { Video, MessageCircle, Users, Clock } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: Video,
      title: 'Estrategia Semanal',
      description: 'Llamadas semanales para optimizar tu contenido y alinearlo con tus objetivos',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Soporte Directo',
      description: 'Chat 24/7 para resolver tus dudas y ajustar los videos al instante',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Comunidad Exclusiva',
      description: 'Acceso a grupo privado con otros creadores que crecen al mismo tiempo',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Videos editados y listos en máximo 48 horas después de recibir el material',
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Cómo trabajamos contigo
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Un proceso diseñado para tu éxito, con apoyo constante en cada paso
          </p>
        </motion.div>

        {/* Single Large Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Intro Text */}
          <p className="text-center text-slate-700 text-lg mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            Nuestro enfoque combina <span className="text-blue-600 font-semibold">estrategia semanal, soporte directo 24/7, 
            comunidad exclusiva y entrega rápida</span> para garantizar que tu contenido no solo sea hermoso, sino que también venda.
          </p>

          {/* 4 Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="size-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-700 font-medium mb-4">
              ¿Listo para transformar tu contenido?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Comenzar Hoy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

