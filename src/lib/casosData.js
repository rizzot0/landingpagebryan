import tecnollavesLogo from '../assets/testimonials/tecnollaves.png'

const BASE = '/casos/tecnollaves'

/**
 * Casos de éxito — narrativa pública orientada a conversión.
 */
export const casosDeExito = [
  {
    slug: 'tecnollaves',
    client: 'Tecnollaves',
    clientLogo: tecnollavesLogo,
    region: 'Región de Coquimbo',
    category: 'Meta Ads · Retail',
    hook: {
      headline:
        'De cero estrategia a 60 conversaciones reales de clientes, en 3 sucursales de la Región de Coquimbo.',
      video: {
        src: `${BASE}/gancho-compilacion.mp4`,
        poster: null,
      },
    },
    context: {
      title: 'Punto de partida & Desafío',
      subtitle: 'Cómo estaba el negocio antes y cuál era el reto real.',
      startingPoint: {
        title: 'Punto de partida',
        text: 'Tecnollaves — venta de accesorios para celulares y revisión técnica. Tenía Instagram con seguidores, pero sin estrategia de contenido ni publicidad paga. Nunca habían corrido un Meta Ads.',
        media: {
          type: 'image',
          src: `${BASE}/ig-antes-0-follow.jpg`,
          placeholder: 'Captura del Instagram “antes”',
        },
      },
      challenge: {
        title: 'El desafío',
        text: 'Dar visibilidad real a 3 sucursales distintas en la Región de Coquimbo, y pasar de “likes” a mensajes de clientes interesados en comprar o cotizar servicio técnico.',
        media: {
          type: 'image',
          src: `${BASE}/ig-despues-sucursales.png`,
          placeholder: 'Perfil con sucursales visibles',
        },
      },
    },
    role: {
      title: 'Lo que hicimos',
      subtitle: 'Estrategia completa: grabación, edición y Meta Ads. No solo videos sueltos.',
      items: [
        {
          title: 'Diagnostiqué el problema real detrás de los seguidores',
          text: 'Tecnollaves tenía comunidad en Instagram, pero cero conversión — el problema no era “falta de contenido”, era falta de estrategia paga. Fui el primero en proponerles Meta Ads.',
        },
        {
          title: 'Diseñé una estrategia de cobertura para 3 sucursales',
          text: 'Santa Isabel La Cantera, Tottus Tierras Blancas y Unimarc Waldo Alcalde a la vez, sin dispersar presupuesto ni perder foco en ninguna.',
        },
        {
          title: 'Grabé pensando en conversión, no en likes',
          text: 'Cada pieza apuntó a un producto o servicio específico — cargadores, servicio técnico, láminas de vidrio, audífonos — no contenido genérico “de marca”.',
        },
        {
          title: 'Edité cada video para el objetivo de la campaña',
          text: 'Formato y ritmo pensados para generar mensajes directos, no solo reproducciones.',
        },
        {
          title: 'Gestioné la campaña de punta a punta',
          text: 'Configuración, segmentación por ubicación, control de presupuesto diario y ajustes según resultados — no “subí el anuncio y esperé”.',
        },
        {
          title: 'Leí las métricas para seguir optimizando',
          text: 'No solo para reportarlas — la diferencia entre alguien que sube contenido y alguien que gestiona resultados.',
        },
      ],
    },
    process: {
      title: 'Detrás de cámara',
      subtitle: 'El proceso real en sucursales: cómo se construyó la campaña paso a paso.',
      items: [
        { type: 'video', src: `${BASE}/bts/bts-1.mp4` },
        { type: 'video', src: `${BASE}/bts/bts-2.mp4` },
        { type: 'video', src: `${BASE}/bts/bts-3.mp4` },
        { type: 'video', src: `${BASE}/bts/bts-4.mp4` },
      ],
    },
    results: {
      title: 'Los números reales',
      subtitle: 'Métricas concretas de la campaña, sacadas directo de Meta Ads.',
      metrics: [
        { value: '60', label: 'conversaciones iniciadas' },
        { value: '19', label: 'anuncios activos' },
        { value: '4', label: 'conjuntos de campaña' },
        { value: '$64.428', label: 'invertidos' },
      ],
      chart: {
        src: `${BASE}/resultados-meta-ads.webp`,
        placeholder: 'Captura de resultados en Meta Ads',
      },
      extraCharts: [
        `${BASE}/grafico-conversaciones.webp`,
        `${BASE}/grafico-conversaciones-2.webp`,
      ],
      conversations: [
        `${BASE}/shots/dm-1.jpg`,
        `${BASE}/shots/dm-2.jpg`,
        `${BASE}/shots/dm-3.jpg`,
        `${BASE}/shots/dm-4.jpg`,
      ],
    },
    closing: {
      quote:
        'Este fue el primer paso de Tecnollaves hacia la publicidad digital. Si tu negocio tampoco ha corrido su primera campaña, puedo ayudarte a hacerlo bien desde el día uno.',
      ctaLabel: 'Quiero mi caso de éxito →',
      ctaMessage:
        'Hola Brayan! Vi el caso de éxito de Tecnollaves y quiero conversar sobre un caso similar para mi negocio.',
    },
  },
]

export const casosBySlug = casosDeExito.reduce((acc, caso) => {
  acc[caso.slug] = caso
  return acc
}, {})
