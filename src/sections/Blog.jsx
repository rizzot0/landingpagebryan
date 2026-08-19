import { motion as Motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    category: 'META ADS',
    title: 'Cómo hacer crecer tu restaurante con Meta Ads en Chile',
    readTime: '5 min de lectura',
    date: 'Mayo 2025',
  },
  {
    category: 'VIDEO MARKETING',
    title: 'Por qué tus videos no tienen vistas (y cómo arreglarlo)',
    readTime: '4 min de lectura',
    date: 'Mayo 2025',
  },
  {
    category: 'GUÍA PRÁCTICA',
    title: '¿Cuánto cuesta publicidad en Facebook en Chile? Guía 2025',
    readTime: '6 min de lectura',
    date: 'Abril 2025',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Blog y consejos</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Aprende marketing digital gratis
          </h2>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(({ category, title, readTime, date }, i) => (
            <Motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
            >
              <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 tracking-wide">
                {category}
              </span>
              <h3 className="mb-4 flex-1 text-base font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{readTime} · {date}</span>
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
