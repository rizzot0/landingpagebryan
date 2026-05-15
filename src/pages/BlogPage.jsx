import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    category: 'META ADS',
    title: 'Cómo hacer crecer tu restaurante con Meta Ads en Chile',
    excerpt: 'Aprende cómo los negocios de gastronomía en Chile están usando Meta Ads para llenar sus mesas y aumentar ventas sin gastar fortunas en pauta.',
    readTime: '5 min de lectura',
    date: 'Mayo 2025',
  },
  {
    category: 'VIDEO MARKETING',
    title: 'Por qué tus videos no tienen vistas (y cómo arreglarlo)',
    excerpt: 'El 90% de los videos que no funcionan tienen el mismo problema: no enganchan en los primeros 3 segundos. Te explico cómo solucionarlo.',
    readTime: '4 min de lectura',
    date: 'Mayo 2025',
  },
  {
    category: 'GUÍA PRÁCTICA',
    title: '¿Cuánto cuesta publicidad en Facebook en Chile? Guía 2025',
    excerpt: 'Todo lo que necesitas saber sobre presupuesto, costos por resultado y cómo optimizar tu inversión en Meta Ads si eres emprendedor en Chile.',
    readTime: '6 min de lectura',
    date: 'Abril 2025',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="bg-white py-12 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Blog y consejos</p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Aprende marketing digital gratis</h1>
            <p className="mt-2 text-slate-600 max-w-xl">
              Tips, guías y casos reales de marketing digital para emprendedores y negocios en Chile.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ category, title, excerpt, readTime, date }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
              >
                {/* Placeholder imagen */}
                <div className="h-44 bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                  <span className="text-4xl">📹</span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 tracking-wide w-fit">
                    {category}
                  </span>
                  <h2 className="mb-3 flex-1 text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{readTime} · {date}</span>
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
