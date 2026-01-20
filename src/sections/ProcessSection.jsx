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
      <div className="mx-auto max-w-7xl px-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative p-6 bg-white border border-blue-100 rounded-xl hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4`}>
                    <Icon className="size-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (visible on md and above) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
