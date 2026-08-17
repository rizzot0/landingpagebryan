/**
 * Estructura de posts del blog.
 *
 * Cada post puede incluir bloques de estos tipos:
 * - paragraph: texto normal
 * - heading: subtítulo dentro del artículo
 * - image: imagen (ruta local o URL)
 * - youtube: video de YouTube / Shorts (solo el ID del video)
 * - list: lista con viñetas
 * - quote: cita destacada
 *
 * Cuando Brayan pase el contenido, se pega aquí (o se agrega un post nuevo)
 * respetando estos bloques.
 */

export const blogPosts = [
  {
    slug: 'ejemplo-estructura-blog',
    category: 'EJEMPLO / ESTRUCTURA',
    title: 'Ejemplo de artículo: qué se puede publicar en el blog',
    excerpt:
      'Post de prueba para mostrar la estructura. Incluye texto, subtítulos, imagen, video de YouTube y lista. Úsalo de referencia cuando armes los blogs reales.',
    readTime: '3 min de lectura',
    date: 'Agosto 2026',
    coverImage: '/videos/elqui-sup-poster.jpg',
    coverAlt: 'Ejemplo de portada del blog',
    blocks: [
      {
        type: 'paragraph',
        text: 'Este es un artículo de prueba. Sirve para revisar cómo se ve un blog real en la página y qué elementos se pueden mezclar. Cuando tengas el contenido definitivo, lo pegamos con esta misma estructura.',
      },
      {
        type: 'heading',
        text: '1. Texto e ideas clave',
      },
      {
        type: 'paragraph',
        text: 'Puedes escribir párrafos normales, explicar una estrategia, contar un caso de éxito o dar tips prácticos. El texto se lee cómodo en celular y escritorio.',
      },
      {
        type: 'quote',
        text: 'Ejemplo de cita destacada: “Los videos que venden no son solo bonitos: tienen gancho, claridad y un llamado a la acción.”',
      },
      {
        type: 'heading',
        text: '2. Imágenes',
      },
      {
        type: 'paragraph',
        text: 'Se pueden insertar imágenes del proyecto (capturas, resultados, detrás de cámaras, logos, etc.). El tamaño se puede controlar: no tienen que ocupar toda la pantalla. Abajo va un ejemplo más compacto para que no haya tanto scroll.',
      },
      {
        type: 'image',
        src: '/videos/arca-de-lucy-poster.jpg',
        alt: 'Ejemplo de imagen dentro de un artículo del blog',
        caption: 'Ejemplo de imagen dentro del artículo (puede ser foto, captura o gráfico).',
      },
      {
        type: 'heading',
        text: '3. Video de YouTube o Shorts',
      },
      {
        type: 'paragraph',
        text: 'Sí se puede embeber un video de YouTube o un Short. Solo necesitamos el link (o el ID). El visitante lo reproduce sin salir de la página.',
      },
      {
        type: 'youtube',
        videoId: 'nOVpz0wVQDo',
        title: 'Ejemplo de video embebido (YouTube Short)',
      },
      {
        type: 'heading',
        text: '4. Listas y pasos',
      },
      {
        type: 'paragraph',
        text: 'También se pueden armar listas para guías paso a paso. Ejemplo real de cómo quedaría:',
      },
      {
        type: 'heading',
        text: 'Cómo lanzar tu primer anuncio en Meta Ads (ejemplo)',
      },
      {
        type: 'list',
        items: [
          'Define el objetivo: mensajes a WhatsApp, visitas al perfil o ventas.',
          'Elige 1 oferta clara (no 5 cosas a la vez).',
          'Prepara 2 o 3 videos cortos con gancho en los primeros 3 segundos.',
          'Configura la audiencia: zona, edad e intereses de tu cliente ideal.',
          'Lanza con presupuesto diario controlado y revisa resultados a los 3–5 días.',
          'Pausa lo que no convierte y escala el creativo que sí genera mensajes.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Cuando envíes los blogs reales, con texto + links de YouTube + imágenes (si hay), los montamos en esta misma estructura.',
      },
    ],
  },
]

export const blogPostsBySlug = blogPosts.reduce((acc, post) => {
  acc[post.slug] = post
  return acc
}, {})
