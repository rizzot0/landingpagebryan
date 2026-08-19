import { useParams, Link as RouterLink } from 'react-router-dom'
import { Check, ArrowLeft } from 'lucide-react'
import { plansBySlug, wsp } from '../lib/planesData'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function PlanDetailPage() {
  const { slug } = useParams()
  const plan = plansBySlug[slug]

  if (!plan) {
    return (
      <div className="min-h-dvh bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Plan no encontrado</h1>
            <p className="text-slate-500 mb-6">El plan que buscas no existe o fue removido.</p>
            <RouterLink
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
            >
              <ArrowLeft className="size-4" /> Volver al inicio
            </RouterLink>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4">
          {/* Back */}
          <RouterLink
            to="/#planes"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="size-4" /> Ver todos los planes
          </RouterLink>

          {/* Category label */}
          <p className="mt-4 mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            {plan.categoryNum}
          </p>

          {/* Plan name + badge */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{plan.name}</h1>
            {plan.badge && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  plan.popular
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-300 text-slate-500'
                }`}
              >
                {plan.badge}
              </span>
            )}
          </div>

          {/* Price */}
          <p className="text-4xl font-extrabold text-blue-600 mb-1">{plan.price}</p>
          <p className="text-sm text-slate-500 mb-8">{plan.period}</p>

          {/* Description */}
          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 mb-6">
            <h2 className="text-base font-bold text-slate-800 mb-2">¿De qué se trata?</h2>
            <p className="text-slate-600 leading-relaxed">{plan.description}</p>
          </div>

          {/* For who */}
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 mb-6">
            <h2 className="text-base font-bold text-slate-800 mb-2">¿Para quién es este plan?</h2>
            <p className="text-slate-600 leading-relaxed">{plan.forWho}</p>
          </div>

          {/* Features */}
          <div className="rounded-2xl border border-slate-200 p-6 mb-10">
            <h2 className="text-base font-bold text-slate-800 mb-4">¿Qué incluye?</h2>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-0.5 size-5 flex-shrink-0 text-blue-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={wsp(plan.msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-green-500 py-4 text-center text-base font-bold text-white shadow-lg shadow-green-200 hover:bg-green-600 transition-all"
          >
            Quiero empezar
          </a>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
