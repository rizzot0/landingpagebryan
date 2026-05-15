import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Check } from 'lucide-react'

const WHATSAPP_NUMBER = '56928683655'
const wsp = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

const categories = [
  {
    id: 'organico',
    num: 'CATEGORÍA 01',
    label: 'Contenido orgánico',
    title: 'Contenido orgánico — video para redes sociales',
    subtitle: 'TikTok · Instagram Reels · YouTube Shorts · Facebook',
    plans: [
      {
        badge: 'ENTRADA',
        name: 'Impulso Exprés',
        price: '$60.000',
        period: 'CLP / mes',
        features: [
          '3 videos editados',
          '2 videos por semana',
          'Grabación prof. o material del cliente',
          '1 propuesta de contenido basada en tendencias',
        ],
        msg: 'Hola! Me interesa el plan Impulso Exprés de $60.000 CLP/mes 🎬',
      },
      {
        badge: 'BÁSICO',
        name: 'Impulso Inicial',
        price: '$160.000',
        period: 'CLP / mes',
        features: [
          '8 videos editados',
          '2 videos por semana',
          'Grabación o material del cliente',
          '1 propuesta de contenido en tendencias',
          'Asesoría inicial incluida',
        ],
        msg: 'Hola! Me interesa el plan Impulso Inicial de $160.000 CLP/mes 🎬',
      },
      {
        badge: 'MÁS ELEGIDO',
        name: 'Crecimiento Constante',
        price: '$210.000',
        period: 'CLP / mes',
        popular: true,
        features: [
          '14 videos editados',
          '4–5 videos por semana',
          'Adaptado para TikTok, Reels y Facebook',
          'Propuesta basada en tendencias y estadísticas',
          'Asesoría estratégica mensual',
        ],
        msg: 'Hola! Quiero el plan Crecimiento Constante de $210.000 CLP/mes 🎬',
      },
      {
        badge: 'MÁXIMO',
        name: 'A Tope',
        price: '$400.000',
        period: 'CLP / mes',
        features: [
          '20 videos editados',
          '5–6 videos por semana',
          'Todo lo del plan Crecimiento +',
          '10 videos enfocados en Ads incluidos',
          'Reporte mensual con métricas y recomendaciones',
          'Reunión de cierre y planificación del mes siguiente',
        ],
        msg: 'Hola! Me interesa el plan A Tope de $400.000 CLP/mes 🎬',
      },
    ],
  },
  {
    id: 'ads-creativos',
    num: 'CATEGORÍA 02',
    label: 'Meta Ads creativos',
    title: 'Meta Ads — planificación de videos creativos',
    subtitle: 'Videos e imágenes para Facebook · Instagram · WhatsApp',
    plans: [
      {
        badge: 'PUNTUAL',
        name: 'Promo Ads',
        price: '$50.000',
        period: 'CLP · pago único',
        features: [
          'Investigación de mercado incluida',
          '3 videos y/o imágenes para promocionar',
          'Creativos evergreen (duran sin perder efectividad)',
          'Optimizado para conversión por mensaje (WhatsApp / DM)',
          'Optimizado también para website',
        ],
        msg: 'Hola! Me interesa el plan Promo Ads de $50.000 CLP 📣',
      },
      {
        badge: 'MÁS ELEGIDO',
        name: 'Ads Continuo',
        price: '$120.000',
        period: 'CLP / mes',
        popular: true,
        features: [
          'Investigación de mercado incluida',
          '8 videos y/o imágenes para ads',
          'Creativos evergreen para usar siempre',
          'Test A/B: tráfico frío + retargeting',
          'Optimizado para website y conversión por mensaje',
        ],
        msg: 'Hola! Quiero el plan Ads Continuo de $120.000 CLP/mes 📣',
      },
    ],
  },
  {
    id: 'gestion',
    num: 'CATEGORÍA 03',
    label: 'Gestión de campañas',
    title: 'Meta Ads — gestión completa de campañas',
    subtitle: 'Me encargo de todo: setup, audiencias, optimización y reportes',
    plans: [
      {
        badge: 'BÁSICO',
        name: 'Gestión Básica',
        price: '$150.000',
        period: 'CLP / mes · pauta $50K–$150K',
        features: [
          'Gestión de 1 campaña activa',
          '3 videos creativos al mes incluidos',
          'Optimización semanal de la campaña',
          'Reporte mensual de métricas',
        ],
        msg: 'Hola! Me interesa el plan Gestión Básica de $150.000 CLP/mes 📊',
      },
      {
        badge: 'MÁS ELEGIDO',
        name: 'Gestión Completa',
        price: '$250.000',
        period: 'CLP / mes · pauta +$280K',
        popular: true,
        features: [
          'Hasta 3 campañas activas simultáneas',
          '6 videos y/o imágenes al mes',
          'Test A/B cada 2 semanas',
          'Reporte semanal + reporte mensual',
        ],
        msg: 'Hola! Quiero el plan Gestión Completa de $250.000 CLP/mes 📊',
      },
      {
        badge: 'PREMIUM',
        name: 'Gestión Premium',
        price: '$400.000',
        period: 'CLP / mes · pauta +$500K',
        features: [
          'Campañas ilimitadas',
          '8 videos y/o imágenes al mes',
          'Embudo completo: frío → interés → conversión',
          'Reporte semanal incluido',
          'Consultoría de landing page',
        ],
        msg: 'Hola! Me interesa el plan Gestión Premium de $400.000 CLP/mes 📊',
      },
    ],
  },
  {
    id: 'combos',
    num: 'CATEGORÍA 04 · TODO EN UNO',
    label: 'Combos',
    title: 'Combos — creativos + gestión Meta Ads',
    subtitle: 'Empieza a vender y yo hago absolutamente todo',
    plans: [
      {
        badge: 'STARTER',
        name: 'Combo Ads Starter',
        price: '$199.000',
        period: 'CLP / mes',
        features: [
          '3 videos y/o imágenes para Meta Ads',
          'Setup completo de cuenta publicitaria',
          'Gestión de 1 o 2 campañas',
          'Audiencia configurada',
          'Reporte mensual de métricas',
        ],
        msg: 'Hola! Me interesa el Combo Ads Starter de $199.000 CLP/mes 🚀',
      },
      {
        badge: 'MÁS ELEGIDO',
        name: 'Combo Ads Pro',
        price: '$349.990',
        period: 'CLP / mes',
        popular: true,
        features: [
          '6 videos y/o imágenes para ads',
          'Estrategia de embudo mensual completa',
          'Gestión completa de campañas',
          'Test A/B activo permanentemente',
          'Reporte semanal incluido',
        ],
        msg: 'Hola! Quiero el Combo Ads Pro de $349.990 CLP/mes 🚀',
      },
      {
        badge: 'MÁXIMO',
        name: 'Combo Ads Max',
        price: '$549.990',
        period: 'CLP / mes',
        features: [
          '10 videos y/o imágenes para ads',
          'Gestión analítica de campañas',
          'Test A/B activo permanentemente',
          'Reporte semanal incluido',
        ],
        msg: 'Hola! Me interesa el Combo Ads Max de $549.990 CLP/mes 🚀',
      },
    ],
  },
  {
    id: 'puntuales',
    num: 'CATEGORÍA 05 · SERVICIOS PUNTUALES',
    label: 'Servicios puntuales',
    title: 'Servicios puntuales — pagos únicos sin mensualidad',
    subtitle: 'Para quienes necesitan algo específico sin comprometerse a un plan mensual',
    plans: [
      {
        badge: null,
        name: 'Auditoría Ads',
        price: '$50.000',
        period: 'CLP · pago único',
        features: [
          'Revisión completa de tu Ads Manager',
          'Análisis de creativos actuales',
          'Informe PDF con lo que está fallando',
          'Recomendaciones concretas para arreglarlo',
        ],
        msg: 'Hola! Me interesa la Auditoría Ads de $50.000 CLP 🔍',
      },
      {
        badge: null,
        name: 'Setup Campaña',
        price: '$90.000',
        period: 'CLP · pago único',
        features: [
          'Instalación de Pixel de Meta',
          'Configuración de cuenta publicitaria',
          '3 videos y/o imágenes incluidos',
          'Todo listo para que lances tu primer anuncio',
        ],
        msg: 'Hola! Me interesa el Setup Campaña de $90.000 CLP ⚙️',
      },
      {
        badge: null,
        name: 'Plan Estratégico Ads',
        price: '$75.000',
        period: 'CLP · pago único',
        features: [
          'Análisis de tu negocio y público objetivo',
          'Estructura del embudo completa',
          'Presupuesto sugerido en pauta',
          'Tipos de creativos a producir',
          'Entregado antes de gastar en pauta',
        ],
        msg: 'Hola! Me interesa el Plan Estratégico Ads de $75.000 CLP 📋',
      },
    ],
  },
  {
    id: 'viajes',
    num: 'CATEGORÍA 06 · VIAJES',
    label: 'Viajes',
    title: 'Viajes x el mundo — edición de videos de viaje',
    subtitle: 'Para agencias de turismo, influencers de viaje y marcas de experiencias',
    plans: [
      {
        badge: null,
        name: 'Chispa',
        price: '$54.000',
        period: 'CLP / mes',
        features: [
          '3 videos cortos editados',
          'Edición de videos de viaje',
          'Promoción de Ads también (evergreen)',
        ],
        msg: 'Hola! Me interesa el plan Chispa de $54.000 CLP/mes ✈️',
      },
      {
        badge: 'MÁS ELEGIDO',
        name: 'Arranque',
        price: '$99.000',
        period: 'CLP / mes',
        popular: true,
        features: [
          '6 videos editados',
          'Edición de videos de viaje',
          'Promoción de Ads también (evergreen)',
        ],
        msg: 'Hola! Quiero el plan Arranque de $99.000 CLP/mes ✈️',
      },
    ],
  },
]

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
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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

          {/* Plan cards */}
          <div className={`grid gap-6 ${
            cat.plans.length === 2 ? 'md:grid-cols-2 max-w-3xl' :
            cat.plans.length === 3 ? 'md:grid-cols-3' :
            'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {cat.plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
