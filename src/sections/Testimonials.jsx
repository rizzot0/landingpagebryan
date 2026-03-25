import { Star, Quote } from 'lucide-react';
import { Marquee } from '../components/MagicUI';
import felipeZarateImg from '../assets/testimonials/felipe-zarate.png';
import gabrielSotoImg from '../assets/testimonials/gabriel-soto.png';
import arcaDeLucyImg from '../assets/testimonials/arca-de-lucy.png';
import federicoEcolabImg from '../assets/testimonials/federico-ecolab.png';
import michaelValdezImg from '../assets/testimonials/michael-valdez.png';
import lucasAlvaradoImg from '../assets/testimonials/lucas-alvarado.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Felipe Zarate',
      role: 'Fundador',
      company: 'Elqui Sup',
      avatar: felipeZarateImg,
      rating: 5,
      text: 'Brayan no solo graba, trae un plan real. Vino al sector, capto todo rapido y entrego los videos editados justo a tiempo. Excelente!'
    },
    {
      name: 'Gabriel Soto',
      role: 'Gestion en Marketing Digital',
      company: '24games',
      avatar: gabrielSotoImg,
      rating: 5,
      text: 'Puntualidad y claridad. Nos guio con el guion y en pocos dias ya teniamos contenido de alta calidad listo para subir. Muy profesional.'
    },
    {
      name: 'Arca de Lucy',
      role: 'Productos Vegetarianos',
      company: 'Marca',
      avatar: arcaDeLucyImg,
      rating: 5,
      text: 'Increible ojo para el contenido. Organizo la jornada de grabacion de forma muy eficiente y cumplio todos los plazos acordados, ademas de siempre grabar los detalles para asi tener contenido para el futuro.'
    },
    {
      name: 'Federico',
      role: 'Fundador',
      company: 'ECOLAB',
      avatar: federicoEcolabImg,
      rating: 5,
      text: 'Logro darle ese toque profesional que buscaba. Su edicion es dinamica, engancha a la audiencia y optimiza mi flujo de trabajo.'
    },
    {
      name: 'Michael Valdez',
      role: 'Creador de Contenido',
      company: 'Brasil - Futbol',
      avatar: michaelValdezImg,
      rating: 5,
      text: 'Delegamos la edicion con Brayan y los resultados son brutales. Hace que videos simples parezcan grandes producciones. Un partner clave.'
    },
    {
      name: 'Lucas Alvarado',
      role: 'Creador de Contenido',
      company: 'IV Region',
      avatar: lucasAlvaradoImg,
      rating: 5,
      text: 'Mis videos cambiaron totalmente; ahora se ven fluidos y pro. Es muy rapido captando el estilo y entregando el material final.'
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonios" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-blue-50/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-blue-50 border border-blue-100 rounded-full text-blue-700">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900 tracking-tight">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-normal">
            Más de 50 clientes satisfechos en todo el mundo confían en mi trabajo
          </p>
        </div>

        {/* Social Proof Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Fiverr */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" 
              alt="Fiverr" 
              className="w-16 h-6 object-contain"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <span className="text-slate-900 font-semibold">5.0</span>
            <div className="w-px h-6 bg-slate-300" />
            <span className="text-slate-700 text-sm font-medium">Top Rated</span>
          </div>

          {/* Upwork */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#14a800"/>
              <text x="20" y="28" font-size="20" font-weight="bold" fill="white" text-anchor="middle">up</text>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
              ))}
            </div>
            <span className="text-slate-900 font-semibold">5.0</span>
          </div>

        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:40s]">
            {allTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative w-[400px] mx-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 transition-all duration-300 group hover:shadow-md"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 mb-6 leading-relaxed font-normal">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="flex-shrink-0 w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 tracking-tight">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 font-normal">{testimonial.role}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/30 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4 font-normal">
            Únete a la lista de clientes satisfechos
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Comienza Tu Proyecto Ahora
            <Star className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
