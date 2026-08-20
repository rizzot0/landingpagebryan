/**
 * Estructura de posts del blog.
 *
 * Bloques:
 * - paragraph | heading | image | youtube | list | quote | ctaWhatsApp
 */

import coverFreelancerVsAgencia from '../assets/blog/freelancer-vs-agencia.jpg'

export const blogPosts = [
  {
    slug: 'freelancer-vs-agencia-marketing-digital-chile',
    category: 'MARKETING DIGITAL',
    title: 'Freelancer vs agencia de marketing digital: ¿cuál conviene para una pyme en Chile?',
    excerpt:
      'Si estás por invertir en contenido y redes, esta comparación te ayuda a decidir sin gastar de más ni perder tiempo.',
    readTime: '5 min de lectura',
    date: 'Agosto 2026',
    coverImage: coverFreelancerVsAgencia,
    coverAlt: 'Freelancer trabajando en su escritorio con laptop y cuaderno',
    blocks: [
      {
        type: 'paragraph',
        text: 'Si tienes un negocio y estás pensando en invertir en contenido y redes sociales, en algún momento te vas a topar con esta duda: ¿contrato una agencia o busco un freelancer? No hay una respuesta única, pero sí hay diferencias claras que te pueden ahorrar plata, tiempo y dolores de cabeza si las entiendes antes de decidir.',
      },
      {
        type: 'heading',
        text: 'Qué obtienes con una agencia',
      },
      {
        type: 'paragraph',
        text: 'Las agencias suelen tener equipos más grandes: un community manager, un editor, un diseñador, alguien de estrategia. Eso significa más capacidad para manejar cuentas grandes o proyectos con muchas piezas de contenido en paralelo.',
      },
      {
        type: 'paragraph',
        text: 'La otra cara de la moneda: normalmente trabajan con varios clientes a la vez, los precios son más altos, y tú como cliente casi nunca hablas directo con la persona que edita tu video o piensa tu estrategia — hablas con un ejecutivo de cuenta que después traspasa la información al equipo.',
      },
      {
        type: 'heading',
        text: 'Qué obtienes con un freelancer',
      },
      {
        type: 'paragraph',
        text: 'Con un freelancer, hablas directo con la persona que hace el trabajo. Eso cambia todo: menos vueltas, decisiones más rápidas, y alguien que realmente conoce tu marca al detalle porque la trabaja de principio a fin, no la reparte entre distintas personas.',
      },
      {
        type: 'paragraph',
        text: 'La diferencia de precio también es real. Un freelancer no tiene los costos fijos de una agencia (oficina, equipo de varias personas, procesos administrativos), así que puede ofrecer tarifas más accesibles sin necesariamente bajar la calidad.',
      },
      {
        type: 'paragraph',
        text: 'Lo que sí hay que preguntar: ¿tiene el equipo y la experiencia para manejar todo el proceso solo, o vas a terminar contratando distintas personas para distintas partes (uno que graba, otro que edita, otro que hace ads)? Ahí es donde algunos freelancers no dan abasto.',
      },
      {
        type: 'heading',
        text: 'Entonces, ¿cuál conviene?',
      },
      {
        type: 'paragraph',
        text: 'Depende del tamaño de lo que necesitas:',
      },
      {
        type: 'heading',
        text: 'Te conviene una agencia si:',
      },
      {
        type: 'list',
        items: [
          'Manejas varias marcas o cuentas al mismo tiempo',
          'Necesitas un volumen alto de contenido semanal',
          'Tu presupuesto permite pagar por la estructura, no solo por el resultado',
        ],
      },
      {
        type: 'heading',
        text: 'Te conviene un freelancer si:',
      },
      {
        type: 'list',
        items: [
          'Eres una pyme y necesitas presencia digital sólida sin gastar como una empresa grande',
          'Prefieres trabajar directo con la persona que produce tu contenido',
          'Buscas flexibilidad y rapidez en los cambios, sin procesos largos de aprobación interna',
        ],
      },
      {
        type: 'heading',
        text: 'Si quieres ser freelancer, este video te puede ayudar',
      },
      {
        type: 'youtube',
        videoId: '5A71YyJ5SWw',
        title: 'Video recomendado para quienes quieren emprender como freelancer',
      },
      {
        type: 'heading',
        text: 'La pregunta que realmente importa',
      },
      {
        type: 'paragraph',
        text: 'Más que “freelancer o agencia”, la pregunta que te va a ahorrar más dolores de cabeza es: ¿esta persona o equipo tiene el proceso, la experiencia y el equipo técnico para hacer el trabajo completo, de principio a fin? Un freelancer con equipo propio, estrategia clara y casos de éxito reales puede darte el mismo nivel de resultado que una agencia — a veces con más atención y mejor precio.',
      },
      {
        type: 'quote',
        text: '¿Quieres ver cómo trabajamos paso a paso? Escríbeme por WhatsApp y conversamos sobre tu proyecto.',
      },
      {
        type: 'ctaWhatsApp',
        label: 'Enviar mensaje por WhatsApp',
        message:
          'Hola Brayan, leí tu blog sobre freelancer vs agencia y quiero conversar sobre mi proyecto.',
      },
    ],
  },
]

export const blogPostsBySlug = blogPosts.reduce((acc, post) => {
  acc[post.slug] = post
  return acc
}, {})
