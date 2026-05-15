import { motion as Motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Film, Megaphone, BarChart3 } from 'lucide-react'

const services = [
  {
    num: '01',
    Icon: Film,
    title: 'Edición de video',
    description: 'TikTok, Reels y YouTube Shorts con gancho, subtítulos y música estratégica que retiene y convierte.',
    cta: 'Ver planes de edición →',
  },
  {
    num: '02',
    Icon: Megaphone,
    title: 'Meta Ads — creativos',
    description: 'Videos e imágenes diseñados específicamente para convertir en Facebook, Instagram y WhatsApp.',
    cta: 'Ver planes de Ads →',
    popular: true,
  },
  {
    num: '03',
    Icon: BarChart3,
    title: 'Meta Ads — gestión completa',
    description: 'Me encargo de todo: setup, audiencias, campañas, optimización semanal y reporte mensual.',
    cta: 'Ver planes de gestión →',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Lo que hago</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Tres formas de hacer crecer tu negocio
          </h2>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ num, Icon, title, description, cta, popular }, i) => (
            <Motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                popular
                  ? 'border-blue-500 shadow-lg shadow-blue-100'
                  : 'border-slate-200'
              } bg-white`}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  Popular
                </span>
              )}

              <span className="text-4xl font-bold text-blue-200 select-none mb-4">{num}</span>

              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50">
                <Icon className="size-5 text-blue-600" />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

              <RouterLink
                to="/servicios"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {cta}
              </RouterLink>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
