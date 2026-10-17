/**
 * Estructura de posts del blog.
 *
 * Bloques soportados:
 * - paragraph | heading | image | youtube | list | quote | ctaWhatsApp
 */

import coverFreelancerVsAgencia from '../assets/blog/freelancer-vs-agencia.jpg'
import coverComoHacerAnuncios from '../assets/blog/como-hacer-anuncios-meta-ads.png'
import coverValeLaPenaFreelancer from '../assets/blog/vale-la-pena-ser-freelancer-chile.png'

export const blogPosts = [
  {
    slug: 'vale-la-pena-trabajar-como-freelancer-chile-2026',
    category: 'FREELANCE',
    title: '¿Vale la pena trabajar como freelancer en Chile en 2026?',
    excerpt:
      'Mi experiencia pasando de cobrar 3 dólares en Fiverr a vivir de hacer estrategias de Meta Ads para empresas en Chile.',
    readTime: '6 min de lectura',
    date: 'Octubre 2026',
    coverImage: coverValeLaPenaFreelancer,
    coverAlt: '¿Vale la pena trabajar como freelancer en Chile en 2026? - Guía Completa',
    blocks: [
      {
        type: 'paragraph',
        text: 'Por Brayhan Guerra, freelancer, editor de video y estratega de Meta Ads en Chile. Actualizado: octubre 2026.',
      },
      {
        type: 'youtube',
        videoId: 'Wy6Aoc4SHi0',
        title: '¿Vale la pena ser freelancer en Chile? Mi experiencia y consejos',
      },
      {
        type: 'heading',
        text: 'Mi opinión: ¿vale la pena ser freelancer en Chile?',
      },
      {
        type: 'paragraph',
        text: 'Sí, vale la pena ser freelancer en Chile, siempre que lo veas como un negocio y no como un trabajo suelto. Yo empecé editando videos por 3 dólares en Fiverr y hoy vivo de hacer estrategias de Meta Ads para empresas.',
      },
      {
        type: 'paragraph',
        text: 'No fue inmediato ni fácil. Pero el camino freelance me dio tres cosas que un empleo no me habría dado tan rápido: aprender habilidades reales, construir un portafolio propio y aprender a vender mi trabajo por redes sociales. Esta guía resume lo que hice, lo que haría distinto y lo que tienes que saber antes de empezar.',
      },
      {
        type: 'heading',
        text: '¿Cómo empecé como freelancer?',
      },
      {
        type: 'paragraph',
        text: 'Empecé como freelancer de edición de video en Fiverr, cobrando 3 dólares por video, sin experiencia previa y sin una cartera de clientes. Esa fue mi puerta de entrada al trabajo online.',
      },
      {
        type: 'paragraph',
        text: 'Fiverr es una plataforma donde ofreces servicios y los clientes te contratan desde cualquier parte del mundo. Para alguien que está partiendo, tiene una ventaja clara: no necesitas tener clientes propios, porque la plataforma ya tiene tráfico.',
      },
      {
        type: 'heading',
        text: '¿Qué pasos seguí para crecer como freelancer?',
      },
      {
        type: 'paragraph',
        text: 'Crecí siguiendo siete pasos: abrir un perfil, cumplir bien los primeros trabajos, crear un portafolio, estudiar edición, pasar a clientes mejor pagados, formalizarme en Chile y sumar nuevos servicios hasta llegar a Meta Ads.',
      },
      {
        type: 'list',
        items: [
          '1. Abrir mi perfil y hacerme conocido en la plataforma: Lo primero fue crear el perfil en Fiverr. Al comienzo nadie te conoce, así que el objetivo es simple: conseguir los primeros pedidos y reseñas.',
          '2. Hacer bien cada trabajo: Poco a poco fui entregando trabajos de buena calidad, y los clientes empezaron a contratarme de nuevo. En freelance, las reseñas y la recomendación valen más que cualquier publicidad.',
          '3. Especializarme en videos para e-commerce: Empecé a hacer videos para tiendas online, aun sin experiencia previa. Hoy sé que debí cobrar más por ese servicio, porque el e-commerce paga mejor cuando el video ayuda a vender.',
          '4. Crear contenido y armar mi portafolio en Behance: Un portafolio es la prueba de lo que sabes hacer. Armé el mío en Behance y lo fui alimentando con mis mejores trabajos.',
          '5. Estudiar edición y mejorar constantemente: Mientras trabajaba, seguí estudiando edición y todo lo relacionado. Mejorar la habilidad es lo que te permite subir los precios con el tiempo.',
          '6. Pasar a clientes en Chile y profesionalizarme: Al comienzo la mayoría de mis clientes eran internacionales. Luego quise formalizar lo mío en mi país, porque buscaba profesionalizarme y porque, entre comisiones e impuestos, el dinero que llegaba a mi cuenta era poco.',
          '7. Ampliar el servicio: de editar a producir, crear estrategia y hacer Meta Ads: Con el tiempo me di cuenta de que podía hacer más que editar: producir los videos y crear una estrategia con objetivos. Después estudié todo sobre Meta Ads. Ahí mejoré mi capacidad de vender por redes sociales, y mi negocio creció. Hoy vivo de hacer estrategias con publicidad pagada para empresas.',
        ],
      },
      {
        type: 'heading',
        text: '¿Cuáles son las ventajas de ser freelancer en Chile?',
      },
      {
        type: 'paragraph',
        text: 'Las principales ventajas de ser freelancer en Chile son la libertad de horarios, la posibilidad de trabajar con clientes de cualquier país, el control sobre tus precios y un crecimiento de ingresos que depende de tus habilidades.',
      },
      {
        type: 'list',
        items: [
          'Libertad: trabajas desde donde quieras y organizas tu tiempo.',
          'Mercado global: puedes vender tus servicios a clientes internacionales.',
          'Tú pones el precio: a medida que mejoras, puedes cobrar más.',
          'Aprendizaje rápido: cada cliente te obliga a resolver problemas nuevos.',
          'Escalabilidad: puedes pasar de un servicio simple a una estrategia completa.',
        ],
      },
      {
        type: 'heading',
        text: '¿Cuáles son las desventajas y riesgos de ser freelancer?',
      },
      {
        type: 'paragraph',
        text: 'Las desventajas del freelance son los ingresos irregulares, el trabajo constante de conseguir clientes, la falta de beneficios laborales automáticos y la responsabilidad de ordenar tus propios impuestos y cotizaciones.',
      },
      {
        type: 'list',
        items: [
          'Ingresos variables: hay meses buenos y meses lentos.',
          'Tú buscas a los clientes: nadie te asigna trabajo.',
          'Sin beneficios de un contrato: gestionas tú tu previsión y tu salud.',
          'Subcobrar al comienzo: es un error común, yo también lo cometí.',
        ],
      },
      {
        type: 'heading',
        text: '¿Cuánto pagan de impuestos los freelancers en Chile en 2026?',
      },
      {
        type: 'paragraph',
        text: 'En 2026, la retención sobre las boletas de honorarios en Chile es de 15,25%. El Servicio de Impuestos Internos (SII) la aplica sobre el monto bruto cada vez que se emite una boleta, y sube de forma gradual hasta llegar a 17% en 2028.',
      },
      {
        type: 'paragraph',
        text: 'Ejemplo: si emites una boleta por $100.000, la retención es de $15.250. Esa retención no se pierde por completo: se usa como anticipo de impuestos y para tus cotizaciones previsionales y de salud al hacer la Operación Renta.',
      },
      {
        type: 'paragraph',
        text: 'Esto es lo que descubrí cuando trabajé con plataformas internacionales: entre comisiones, conversión de moneda y trámites, el dinero final era menor al esperado. Por eso formalizarme y trabajar con clientes en Chile fue un punto de quiebre para mí.',
      },
      {
        type: 'quote',
        text: 'Para temas tributarios específicos de tu caso, consulta con un contador o revisa el sitio oficial del SII (sii.cl).',
      },
      {
        type: 'heading',
        text: '¿Es mejor trabajar en plataformas como Fiverr o con clientes propios?',
      },
      {
        type: 'paragraph',
        text: 'Las plataformas como Fiverr sirven para empezar y conseguir los primeros clientes, pero los clientes propios dan más control, mejores precios y relaciones a largo plazo.',
      },
      {
        type: 'table',
        headers: ['Criterio', 'Plataformas (Fiverr)', 'Clientes propios'],
        rows: [
          ['Cómo llegan los clientes', 'La plataforma los trae', 'Los consigues tú (redes, web, ads)'],
          ['Comisión', 'La plataforma cobra un porcentaje', 'Sin intermediario'],
          ['Precios', 'Más competencia, precios bajos', 'Tú defines tu tarifa'],
          ['Relación con el cliente', 'Limitada por la plataforma', 'Directa y de largo plazo'],
          ['Ideal para', 'Partir y validar tu servicio', 'Crecer y escalar'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Mi recomendación: usa una plataforma para partir, pero construye en paralelo tu portafolio, tus redes y tu web para que los clientes lleguen a ti directo.',
      },
      {
        type: 'heading',
        text: '¿Qué habilidades necesito para ser freelancer de marketing digital en Chile?',
      },
      {
        type: 'paragraph',
        text: 'Las habilidades clave son dominar un servicio concreto (como edición de video), saber vender por redes sociales, entender de estrategia y aprender a medir resultados con herramientas como Meta Ads.',
      },
      {
        type: 'quote',
        text: 'Lo que más me impulsó fue aprender Meta Ads. Entender cómo funciona la publicidad paga me permitió pasar de "editar videos" a "ayudar a las empresas a conseguir clientes", que es un servicio mucho más valioso.',
      },
      {
        type: 'heading',
        text: '¿Qué haría distinto si empezara hoy?',
      },
      {
        type: 'paragraph',
        text: 'Si empezara hoy, cobraría más desde el inicio, definiría un nicho antes (por ejemplo, e-commerce), armaría mi portafolio desde el primer día y aprendería publicidad pagada mucho antes.',
      },
      {
        type: 'list',
        items: [
          '1. Cobrar mejor desde el comienzo: Si el video ayuda a vender, vale más que 3 dólares.',
          '2. Elegir un nicho: Es más fácil venderle a un tipo de cliente que a todos.',
          '3. Portafolio desde el día uno: Es lo que cierra ventas.',
          '4. Aprender Meta Ads antes: Cambió mi negocio por completo.',
        ],
      },
      {
        type: 'heading',
        text: 'Preguntas frecuentes',
      },
      {
        type: 'list',
        items: [
          '¿Se puede vivir de ser freelancer en Chile? Sí, es posible. Depende de tu servicio, tus precios y tu capacidad de conseguir clientes de forma constante. En mi caso, hoy vivo de hacer estrategias de Meta Ads.',
          '¿Es necesario tener experiencia para empezar? No. Yo empecé sin experiencia previa en e-commerce. Lo importante es empezar, cumplir bien y seguir aprendiendo.',
          '¿Conviene trabajar con clientes internacionales o chilenos? Los clientes internacionales son una buena forma de partir. Los clientes en Chile facilitan la formalización y simplifican el cobro e impuestos.',
          '¿Cuánto debería cobrar al empezar? Evita partir demasiado bajo. Cobrar muy poco atrae clientes que no valoran el trabajo y cuesta subir los precios después.',
          '¿Qué servicio conviene ofrecer como freelancer de marketing digital? Uno concreto y fácil de explicar, como edición de video, producción de contenido o gestión de Meta Ads, y luego ampliar según avanzas.',
        ],
      },
      {
        type: 'quote',
        text: 'Soy Brayhan Guerra, edito video, produzco contenido y gestiono Meta Ads para empresas en Chile. Si quieres trabajar conmigo, escríbeme por WhatsApp y armamos tu estrategia.',
      },
      {
        type: 'ctaWhatsApp',
        label: 'Conversar por WhatsApp con Brayhan',
        message:
          'Hola Brayhan, leí tu artículo sobre trabajar como freelancer en Chile y quiero conversar sobre mi proyecto.',
      },
    ],
  },
  {
    slug: 'como-hacer-anuncios-meta-ads-chile-2026',
    category: 'META ADS',
    title: '¿Cómo hacer anuncios en Meta Ads? Guía paso a paso para empresas en Chile (2026)',
    excerpt:
      'Aprende el método de testeo con bajo presupuesto en Meta Ads para validar qué anuncios en imagen y video funcionan antes de invertir más.',
    readTime: '7 min de lectura',
    date: 'Octubre 2026',
    coverImage: coverComoHacerAnuncios,
    coverAlt: 'Cómo hacer anuncios ganadores en Meta Ads - Guía Completa',
    blocks: [
      {
        type: 'paragraph',
        text: 'Por Brayhan Guerra, creador de contenido, editor de video y estratega de Meta Ads en Chile. Actualizado: octubre 2026.',
      },
      {
        type: 'youtube',
        videoId: 'daKLOSlrjEY',
        title: 'Cómo hacer anuncios ganadores en Meta Ads: tutorial paso a paso',
      },
      {
        type: 'heading',
        text: '¿Cómo hacer anuncios en Meta Ads?',
      },
      {
        type: 'paragraph',
        text: 'Para hacer anuncios en Meta Ads, debes crear una campaña en el Administrador de anuncios, elegir un objetivo, configurar un conjunto de anuncios con tu región y presupuesto, y subir entre 4 y 5 anuncios en imagen y video para testear cuál funciona mejor.',
      },
      {
        type: 'paragraph',
        text: 'Meta Ads es la plataforma de publicidad paga de Meta. Permite mostrar anuncios en Instagram, Facebook, Messenger y WhatsApp. Esta guía explica el método de testeo que uso con empresas y negocios en Chile y todo el país.',
      },
      {
        type: 'heading',
        text: '¿Qué es un testeo en Meta Ads y por qué conviene empezar así?',
      },
      {
        type: 'paragraph',
        text: 'Un testeo en Meta Ads es una campaña de bajo presupuesto cuyo objetivo es validar qué mensaje, formato y creativo funciona antes de invertir más dinero. Se prueba el mercado con poco riesgo.',
      },
      {
        type: 'paragraph',
        text: 'Empezar con un testeo evita el error más común: invertir un presupuesto grande en un anuncio que nunca se probó. El testeo responde tres preguntas clave:',
      },
      {
        type: 'list',
        items: [
          '¿Al público le interesa lo que ofrezco?',
          '¿Qué mensaje genera más respuesta?',
          '¿Qué formato funciona mejor, imagen o video?',
        ],
      },
      {
        type: 'heading',
        text: '¿Cuánto presupuesto necesito para empezar en Meta Ads en Chile?',
      },
      {
        type: 'paragraph',
        text: 'Para un testeo en Chile, el presupuesto diario recomendado va de $1.700 a $2.500 CLP. Es un monto bajo, suficiente para validar el mercado sin arriesgar una inversión grande.',
      },
      {
        type: 'paragraph',
        text: 'Con ese presupuesto no buscas ventas masivas. Buscas datos: qué anuncio recibe más interacción, a qué costo y con qué tipo de mensaje. Cuando identificas lo que funciona, recién ahí subes la inversión.',
      },
      {
        type: 'heading',
        text: '¿A qué público debo dirigir mis anuncios al comenzar?',
      },
      {
        type: 'paragraph',
        text: 'Al comenzar, conviene dirigir los anuncios a un público frío: personas que no te conocen, pero que tienen el problema que tu producto o servicio resuelve.',
      },
      {
        type: 'paragraph',
        text: 'Un público frío es el más grande y el más honesto para testear. Si un anuncio funciona con gente que nunca ha oído de ti, funcionará aún mejor cuando después lo muestres a personas que ya te conocen.',
      },
      {
        type: 'quote',
        text: 'La clave del mensaje es hablarle al problema, no a la marca. Por ejemplo: en vez de "somos una agencia de contenido", un anuncio dice "¿Publicas en Instagram y no consigues clientes?".',
      },
      {
        type: 'heading',
        text: '¿Cuántos anuncios debo crear para testear?',
      },
      {
        type: 'paragraph',
        text: 'Para un testeo conviene crear entre 4 y 5 anuncios distintos, combinando formato de imagen y video, cada uno con un enfoque o mensaje diferente.',
      },
      {
        type: 'paragraph',
        text: 'Crear un solo anuncio es un error frecuente, porque no permite comparar. Con 4 o 5 versiones, Meta distribuye la inversión y te muestra cuáles generan mejores resultados.',
      },
      {
        type: 'paragraph',
        text: 'Una distribución simple y efectiva:',
      },
      {
        type: 'list',
        items: [
          '2 o 3 videos, cada uno con un gancho distinto',
          '2 imágenes tipo flyer, cada una con un mensaje directo',
        ],
      },
      {
        type: 'heading',
        text: '¿Cómo debe ser un video para anuncios en Meta Ads?',
      },
      {
        type: 'paragraph',
        text: 'Un video para Meta Ads debe durar máximo 45 segundos, tener un gancho en los primeros segundos y un mensaje directo con un llamado a la acción claro.',
      },
      {
        type: 'paragraph',
        text: 'Ya que la mayor parte de la publicidad en Meta se consume en el celular, conviene grabar en formato vertical (9:16).',
      },
      {
        type: 'heading',
        text: 'Estructura básica de un guion conceptual:',
      },
      {
        type: 'list',
        items: [
          'Gancho: una pregunta o afirmación que detiene el scroll en los primeros segundos.',
          'Problema: el dolor o la necesidad que vive tu cliente.',
          'Solución: cómo tu servicio o producto lo resuelve, explicado de forma simple.',
          'Llamado a la acción: qué debe hacer la persona (escribir por WhatsApp, enviar un mensaje, visitar la web).',
        ],
      },
      {
        type: 'heading',
        text: 'Detalles de producción que marcan la diferencia:',
      },
      {
        type: 'list',
        items: [
          'Audio claro: un audio malo hace que la gente abandone el anuncio, aunque la imagen sea buena. Usa un micrófono de calidad.',
          'Cámara profesional: si tienes acceso a una, úsala. La calidad de imagen transmite confianza.',
          'Subtítulos: la gran mayoría de las personas ven los anuncios sin sonido en redes sociales.',
        ],
      },
      {
        type: 'heading',
        text: '¿Cómo debe ser una imagen para anuncios en Meta Ads?',
      },
      {
        type: 'paragraph',
        text: 'Una imagen para Meta Ads debe ser tipo flyer: directa, con un mensaje claro y poco texto, que se entienda en menos de tres segundos.',
      },
      {
        type: 'paragraph',
        text: 'Un buen flyer publicitario incluye:',
      },
      {
        type: 'list',
        items: [
          'Un titular directo con el beneficio principal',
          'Una imagen o elemento visual relevante',
          'Un llamado a la acción visible',
        ],
      },
      {
        type: 'paragraph',
        text: 'Evita las frases poéticas o abstractas. Un anuncio efectivo dice exactamente qué ofreces y para quién, por ejemplo: "Edición de video y Meta Ads para empresas en Chile".',
      },
      {
        type: 'heading',
        text: '¿Cómo crear la campaña en el Administrador de anuncios de Meta?',
      },
      {
        type: 'paragraph',
        text: 'La campaña se crea en el Administrador de anuncios de Meta (Meta Ads Manager), no desde el botón "Promocionar" de Instagram, porque el Administrador ofrece más control y opciones avanzadas.',
      },
      {
        type: 'paragraph',
        text: 'Los anuncios se organizan en tres niveles: campaña, conjunto de anuncios y anuncio.',
      },
      {
        type: 'list',
        items: [
          'Paso 1 – Campaña: Haz clic en "Crear" y elige el objetivo. Para este testeo se recomienda el objetivo de interacción (engagement), ya que permite medir qué anuncio genera más respuesta de un público frío.',
          'Paso 2 – Conjunto de anuncios: Aquí defines presupuesto, ubicación y público. Configura un presupuesto diario de $1.700 a $2.500 CLP, tu región o el país, y deja que la inteligencia artificial de Meta (Advantage+) trabaje.',
          'Paso 3 – Anuncios: Sube tus 4 o 5 anuncios, agrega el texto principal, el titular y el botón de acción (por ejemplo, "Enviar mensaje").',
        ],
      },
      {
        type: 'heading',
        text: '¿Debo segmentar manualmente el público o dejar que Meta lo haga?',
      },
      {
        type: 'paragraph',
        text: 'Para un testeo, lo recomendable es dejar que la inteligencia artificial de Meta haga la segmentación, usando Advantage+ público, y limitar solo la ubicación geográfica.',
      },
      {
        type: 'paragraph',
        text: 'Meta cuenta con herramientas de automatización (Advantage+) que buscan por sí solas a las personas con más probabilidad de interactuar. Una segmentación demasiado cerrada puede limitar las impresiones y los resultados.',
      },
      {
        type: 'paragraph',
        text: 'La excepción es la región: se define para que los anuncios se muestren solo donde operas.',
      },
      {
        type: 'heading',
        text: '¿Cuánto tiempo debo dejar corriendo el testeo?',
      },
      {
        type: 'paragraph',
        text: 'Conviene dejar el testeo corriendo entre 4 y 7 días sin hacer cambios, para que Meta termine su fase de aprendizaje y entregue datos confiables.',
      },
      {
        type: 'quote',
        text: 'Pausar o editar los anuncios cada día reinicia el aprendizaje del algoritmo y distorsiona los resultados.',
      },
      {
        type: 'heading',
        text: '¿Cómo saber qué anuncio funciona y cuál no?',
      },
      {
        type: 'paragraph',
        text: 'Un anuncio funciona cuando logra un menor costo por resultado y más interacciones que los demás con el mismo presupuesto. Se compara dentro del Administrador de anuncios.',
      },
      {
        type: 'heading',
        text: 'Métricas a revisar:',
      },
      {
        type: 'list',
        items: [
          'Costo por resultado: cuánto cuesta cada interacción o mensaje.',
          'Alcance: a cuántas personas llegó.',
          'Interacciones: reacciones, comentarios, mensajes y clics.',
          'CTR (porcentaje de clics): cuántos hicieron clic de quienes lo vieron.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Con los datos, apagas los anuncios con peor rendimiento y escalas los mejores: subes presupuesto y creas nuevas variantes del anuncio ganador.',
      },
      {
        type: 'heading',
        text: '¿Cuáles son los errores más comunes al hacer anuncios en Meta Ads?',
      },
      {
        type: 'list',
        items: [
          'Invertir un presupuesto alto sin testear antes',
          'Mensajes poéticos que no explican qué se vende',
          'Videos de más de 45 segundos sin gancho inicial',
          'Mala calidad de audio',
          'Pausar o editar anuncios cada día',
        ],
      },
      {
        type: 'heading',
        text: 'Preguntas frecuentes',
      },
      {
        type: 'list',
        items: [
          '¿Cuánto cuesta hacer anuncios en Meta Ads en Chile? Se puede empezar con un testeo de $1.700 a $2.500 CLP diarios. El monto final depende de tu objetivo y de lo que arroje el testeo.',
          '¿Qué objetivo de campaña elijo para empezar? Para testear con público frío, el objetivo de interacción permite comparar qué anuncios generan más respuesta.',
          '¿Es mejor usar imagen o video en Meta Ads? Lo recomendable es probar ambos. El testeo muestra cuál responde mejor para tu negocio.',
          '¿Necesito una cámara profesional para hacer anuncios? No es obligatorio, pero ayuda. Lo más importante es un audio claro y un mensaje directo.',
          '¿Puedo hacer anuncios en Meta Ads sin agencia? Sí. Con el método de testeo puedes lanzar tu primera campaña por tu cuenta. Si prefieres delegarlo, puedes contratar un freelancer o una agencia.',
        ],
      },
      {
        type: 'quote',
        text: '¿Necesitas videos y campañas de Meta Ads para tu negocio? Soy Brayhan Guerra, edito video, produzco anuncios y gestiono Meta Ads para empresas en Chile. Escríbeme por WhatsApp y armamos tu estrategia de testeo.',
      },
      {
        type: 'ctaWhatsApp',
        label: 'Conversar por WhatsApp sobre Meta Ads',
        message:
          'Hola Brayhan, leí tu guía sobre cómo hacer anuncios en Meta Ads y quiero armar una estrategia de testeo para mi negocio.',
      },
    ],
  },
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
          'Hola Brayhan, leí tu blog sobre freelancer vs agencia y quiero conversar sobre mi proyecto.',
      },
    ],
  },
]

export const blogPostsBySlug = blogPosts.reduce((acc, post) => {
  acc[post.slug] = post
  return acc
}, {})
