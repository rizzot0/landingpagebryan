export const WHATSAPP_NUMBER = '56928683655'
export const wsp = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

export const categories = [
  {
    id: 'creacion-contenido',
    num: 'CATEGORÍA 01',
    label: 'Creación de contenido redes sociales',
    title: 'Creación de contenido para redes sociales',
    subtitle: 'Planificación y producción de videos para TikTok · Reels · YouTube Shorts · Facebook',
    showMetaPromo: false,
    plans: [
      {
        slug: 'impulso-expres',
        badge: 'ENTRADA',
        name: 'Impulso Exprés',
        price: '$95.000',
        period: 'CLP / mes',
        description:
          'Para negocios que quieren empezar a publicar videos estratégicos con grabación o material propio, y propuestas basadas en tendencias.',
        forWho:
          'Emprendedores que quieren probar el video marketing con una inversión accesible y resultados medibles desde el primer mes.',
        features: [
          '4 videos (1 por semana)',
          'Grabación profesional o material del cliente',
          '4 propuestas de contenido basadas en tendencias',
          'Edición en cada video',
        ],
        msg: 'Hola! Me interesa el plan Impulso Exprés de $95.000 CLP/mes 🎬',
      },
      {
        slug: 'impulso-inicial',
        badge: 'BÁSICO',
        name: 'Impulso Inicial',
        price: '$170.000',
        period: 'CLP / mes',
        description:
          'Ideal para marcas que necesitan más volumen de contenido con propuestas claras y edición profesional en cada pieza.',
        forWho:
          'Negocios con presencia en redes que quieren consolidar una base sólida de contenido constante.',
        features: [
          '8 videos (2 por semana)',
          'Grabación profesional o material del cliente',
          '8 propuestas de contenido basadas en tendencias',
          'Edición en cada video',
        ],
        msg: 'Hola! Me interesa el plan Impulso Inicial de $170.000 CLP/mes 🎬',
      },
      {
        slug: 'crecimiento-constante',
        badge: 'MÁS ELEGIDO',
        name: 'Crecimiento Constante',
        price: '$250.000',
        period: 'CLP / mes',
        popular: true,
        description:
          'El plan perfecto para crecer y destacar en redes con inversión inteligente, asesoría Meta Ads y análisis mensual.',
        forWho:
          'Marcas que quieren presencia constante, estrategia clara y seguimiento de resultados mes a mes.',
        features: [
          '12 videos (3 por semana)',
          'Grabación profesional o material del cliente',
          '12 propuestas basadas en análisis de tendencias',
          '1 asesoría estratégica para Meta Ads',
          'Análisis de estadísticas a fin de mes',
        ],
        msg: 'Hola! Quiero el plan Crecimiento Constante de $250.000 CLP/mes 🎬',
      },
    ],
  },
  {
    id: 'meta-ads',
    num: 'CATEGORÍA 02',
    label: 'Meta Ads',
    title: 'Meta Ads — creativos + gestión',
    subtitle: 'WhatsApp · Instagram · Facebook. Empieza a vender y yo hago todo.',
    showMetaPromo: true,
    plans: [
      {
        slug: 'plan-starter',
        badge: 'STARTER',
        name: 'Plan Starter',
        price: '$400.000',
        period: 'CLP / mes',
        description:
          'Setup completo para empezar a vender con Meta Ads: creativos, campañas y audiencia configurada.',
        forWho:
          'Negocios que quieren lanzar o reactivar anuncios con acompañamiento completo sin complicarse.',
        features: [
          'Setup completo de cuenta',
          '3–5 videos y/o imágenes para Meta Ads',
          'Gestión de 1 o 2 campañas',
          'Audiencia configurada',
          'Respuesta de DMs con objetivo de agendar o derivar a ejecutivo',
        ],
        bonuses: ['+2 Anuncios Meta Ads GRATIS', 'Revisión de tu Ads Manager'],
        msg: 'Hola! Quiero el Plan Starter de Meta Ads ($400.000 CLP/mes) 🚀',
      },
      {
        slug: 'plan-crecimiento',
        badge: 'MÁS ELEGIDO',
        name: 'Plan Crecimiento',
        price: '$500.000',
        period: 'CLP / mes',
        popular: true,
        description:
          'Estrategia de embudo mensual con más creativos, gestión completa y test A/B activo para escalar resultados.',
        forWho:
          'Marcas que ya invierten en pauta y quieren crecer con optimización constante y reportes semanales.',
        features: [
          'Estrategia de embudo mensual',
          '6–10 videos y/o imágenes para ads',
          'Gestión completa de campañas',
          'Test A/B activo',
          'Reporte semanal',
        ],
        bonuses: ['+2 Anuncios Meta Ads GRATIS', 'Revisión de tu Ads Manager'],
        msg: 'Hola! Quiero el Plan Crecimiento de Meta Ads ($500.000 CLP/mes) 🚀',
      },
      {
        slug: 'plan-dominacion',
        badge: 'PREMIUM',
        name: 'Plan Dominación',
        price: '$750.000',
        period: 'CLP / mes',
        description:
          'Máximo nivel: creativos ilimitados, gestión analítica de campañas y optimización permanente.',
        forWho:
          'Negocios que quieren dominar su mercado con volumen alto de creativos y control total de la pauta.',
        features: [
          'Gestión analítica de campañas',
          'Videos y/o imágenes ilimitados para ads',
          'Test A/B activo',
          'Reporte semanal',
          'Empieza a vender y yo hago todo',
        ],
        bonuses: ['+2 Anuncios Meta Ads GRATIS', 'Revisión de tu Ads Manager'],
        msg: 'Hola! Quiero el Plan Dominación de Meta Ads ($750.000 CLP/mes) 🚀',
      },
    ],
  },
  {
    id: 'edicion-video',
    num: 'CATEGORÍA 03',
    label: 'Edición de video',
    title: 'Edición de video',
    subtitle: 'Llega y sube con un estilo predeterminado y profesional',
    showMetaPromo: false,
    plans: [
      {
        slug: 'edicion-1-video',
        badge: null,
        name: 'Edición 1 video',
        price: '$18.000',
        period: 'CLP · pago único',
        description:
          'Un video editado con estilo profesional, listo para publicar.',
        forWho:
          'Quienes necesitan una pieza puntual con calidad profesional sin contratar un plan mensual.',
        features: ['1 video editado', 'Estilo profesional predeterminado'],
        msg: 'Hola! Me interesa la edición de 1 video por $18.000 CLP 🎬',
      },
      {
        slug: 'pack-basico',
        badge: 'BÁSICO',
        name: 'Pack Básico',
        price: '$60.000',
        period: 'CLP · pago único',
        description: '4 videos editados a un valor conveniente por unidad.',
        forWho: 'Marcas o creadores que necesitan un pack corto de videos listos para subir.',
        features: ['4 videos editados', '$15.000 c/u'],
        msg: 'Hola! Me interesa el Pack Básico de edición ($60.000 CLP) 🎬',
      },
      {
        slug: 'pack-conveniente',
        badge: 'MÁS ELEGIDO',
        name: 'Pack Conveniente',
        price: '$95.000',
        period: 'CLP · pago único',
        popular: true,
        description: 'Más volumen de edición con mejor precio por video.',
        forWho: 'Quienes publican seguido y quieren optimizar el costo por video.',
        features: ['8 videos editados', '$12.000 c/u'],
        msg: 'Hola! Quiero el Pack Conveniente de edición ($95.000 CLP) 🎬',
      },
      {
        slug: 'pack-premium',
        badge: 'PREMIUM',
        name: 'Pack Premium',
        price: '$150.000',
        period: 'CLP · pago único',
        description: 'El pack con mayor volumen y el mejor valor por video.',
        forWho: 'Marcas con alta demanda de contenido editado profesional.',
        features: ['15 videos editados', '$10.000 c/u'],
        msg: 'Hola! Me interesa el Pack Premium de edición ($150.000 CLP) 🎬',
      },
    ],
  },
]

export const plansBySlug = categories.reduce((acc, cat) => {
  cat.plans.forEach((plan) => {
    acc[plan.slug] = { ...plan, categoryTitle: cat.title, categoryNum: cat.num }
  })
  return acc
}, {})
