import { motion } from 'framer-motion'
import { Eye, TrendingUp, Users, Award } from 'lucide-react'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'

export default function AuthoritySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const metrics = [
    {
      icon: Eye,
      value: 50,
      suffix: 'M+',
      label: 'Vistas Generadas',
      description: 'En contenido editado para clientes',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      value: 85,
      suffix: '%',
      label: 'Aumento de Retención',
      description: 'Promedio en videos editados',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Clientes Satisfechos',
      description: 'De 15 países diferentes',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: 100,
      suffix: '+',
      label: 'Proyectos Completados',
      description: 'En los últimos 5 años',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ]

  return (
    <section ref={sectionRef} id="authority" className="py-20 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Números que hablan por sí solos
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            Resultados comprobados en miles de videos
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-400/60 transition-colors shadow-lg shadow-blue-900/30">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-4 text-white`}>
                    <Icon className="size-6" />
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-3xl sm:text-4xl font-bold text-white">
                      {isVisible && (
                        <CountUp
                          end={metric.value}
                          duration={2.5}
                          suffix={metric.suffix}
                        />
                      )}
                    </p>
                  </div>
                  
                  <p className="text-white font-semibold text-sm mb-1">
                    {metric.label}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
