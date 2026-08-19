import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Check } from 'lucide-react'
import { categories, wsp } from '../lib/planesData'

function MetaPromoBanner() {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl bg-red-600 px-5 py-6 text-white shadow-lg shadow-red-200 sm:px-8 sm:py-7">
      <p className="text-lg font-extrabold tracking-tight sm:text-xl">
        🔥 PROMO EXCLUSIVA DE LANZAMIENTO
      </p>
      <p className="mt-2 text-sm font-medium text-red-50 sm:text-base">
        Contrata cualquier plan hoy y llévate GRATIS:
      </p>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed sm:text-base">
        <li>
          <span className="font-bold">2 Creativos Extra para Meta Ads</span>{' '}
          <span className="italic text-red-100">diseñados para testear y vender</span>{' '}
          <span className="font-semibold">(Valor real: $60.000 CLP → $0)</span>
        </li>
        <li>
          <span className="font-bold">Auditoría de tu Administrador de Anuncios:</span>{' '}
          <span className="italic text-red-100">
            Analizo tus métricas clave (CTR, retención y ganchos) para decirte exactamente qué
            video te genera más ventas sin costo extra.
          </span>
        </li>
      </ul>
    </div>
  )
}

function PlanCard({ plan, isMetaAds }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 ${
        plan.popular
          ? 'border-blue-500 shadow-xl shadow-blue-100'
          : 'border-slate-200'
      } bg-white`}
    >
      {plan.popular && plan.badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
          {plan.badge}
        </span>
      ) : null}
      {!plan.popular && plan.badge ? (
        <span className="mb-3 inline-block rounded-full border border-slate-300 px-3 py-0.5 text-xs font-semibold text-slate-500">
          {plan.badge}
        </span>
      ) : null}

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

      {isMetaAds && plan.bonuses?.length ? (
        <div className="mb-5 rounded-xl border border-red-500 bg-red-600 px-4 py-4 text-white">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide">
            🎁 Bonos incluidos:
          </p>
          <ul className="space-y-2 text-sm">
            {plan.bonuses.map((bonus) => (
              <li key={bonus} className="flex items-start gap-2">
                <span className="mt-1 size-2.5 shrink-0 rounded-full bg-red-200" />
                <span className="font-semibold leading-snug">{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <RouterLink
          to={`/planes/${plan.slug}`}
          className="block rounded-xl border border-blue-200 py-2.5 text-center text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50"
        >
          Saber más sobre este plan
        </RouterLink>

        <a
          href={wsp(plan.msg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
            plan.popular || isMetaAds
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Quiero empezar
        </a>
      </div>
    </div>
  )
}

export default function Planes() {
  const [active, setActive] = useState(0)
  const cat = categories[active]
  const isMetaAds = Boolean(cat.showMetaPromo)

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

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(i)}
              className={`flex-shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <Motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">{cat.num}</p>
          <h3 className="mb-1 text-2xl font-bold text-slate-900">{cat.title}</h3>
          <p className="mb-6 text-sm text-slate-500">{cat.subtitle}</p>

          {isMetaAds ? <MetaPromoBanner /> : null}

          <div
            className={`grid gap-6 ${
              cat.plans.length === 2
                ? 'max-w-3xl md:grid-cols-2'
                : cat.plans.length === 3
                  ? 'md:grid-cols-3'
                  : 'md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {cat.plans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} isMetaAds={isMetaAds} />
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
