import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Check } from 'lucide-react'
import { categories, wsp } from '../lib/planesData'

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 ${
        plan.popular
          ? 'border-blue-500 shadow-xl shadow-blue-100'
          : 'border-slate-200'
      } bg-white h-full`}
    >
      {plan.popular && plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
          {plan.badge}
        </span>
      )}
      {!plan.popular && plan.badge && (
        <span className="mb-3 inline-block rounded-full border border-slate-300 px-3 py-0.5 text-xs font-semibold text-slate-500">
          {plan.badge}
        </span>
      )}

      <h3 className="mb-1 text-lg font-bold text-slate-900">{plan.name}</h3>
      <p className="mb-1 text-3xl font-extrabold text-blue-600">{plan.price}</p>
      <p className="mb-5 text-xs text-slate-500">{plan.period}</p>

      <ul className="mb-6 flex-1 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 size-4 flex-shrink-0 text-blue-500" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        {/* Saber más */}
        <RouterLink
          to={`/planes/${plan.slug}`}
          className="block rounded-xl border border-blue-200 py-2.5 text-center text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50"
        >
          Saber más sobre este plan
        </RouterLink>

        {/* CTA WhatsApp */}
        <a
          href={wsp(plan.msg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
            plan.popular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          {plan.popular ? 'Quiero este plan →' : 'Me interesa →'}
        </a>
      </div>
    </div>
  )
}

export default function Planes() {
  const [active, setActive] = useState(0)
  const cat = categories[active]

  return (
    <section id="planes" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Planes y precios</h2>
          <p className="mt-2 text-slate-600">Selecciona la categoría que mejor se adapta a tu negocio</p>
        </Motion.div>

        {/* Tabs */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Category header */}
        <Motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">{cat.num}</p>
          <h3 className="mb-1 text-2xl font-bold text-slate-900">{cat.title}</h3>
          <p className="mb-8 text-sm text-slate-500">{cat.subtitle}</p>

          <div className={`grid gap-6 ${
            cat.plans.length === 2 ? 'md:grid-cols-2 max-w-3xl' :
            cat.plans.length === 3 ? 'md:grid-cols-3' :
            'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {cat.plans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
