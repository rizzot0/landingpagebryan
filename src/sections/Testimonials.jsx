import { Star, Quote } from 'lucide-react';
import { Marquee } from '../components/MagicUI';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'YouTuber de Fitness',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Bryan transformó completamente mi canal. Mis videos pasaron de 5k a 50k vistas en promedio. Su edición es puro fuego 🔥',
      metric: '+900% Vistas'
    },
    {
      name: 'Ana García',
      role: 'Creadora de Contenido',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Profesional, rápido y creativo. Entrega antes de tiempo y siempre entiende la visión. Mi mejor inversión del año.',
      metric: 'Top 1% Creator'
    },
    {
      name: 'Miguel Torres',
      role: 'Marca Personal',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'La calidad de Bryan es de otro nivel. Cada video que edita supera mis expectativas. Lo recomiendo 100%.',
      metric: '10/10 Calidad'
    },
    {
      name: 'Laura Sánchez',
      role: 'Emprendedora Digital',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Mi tasa de retención subió 40% desde que trabajo con Bryan. Sus efectos y ritmo son perfectos para mi audiencia.',
      metric: '+40% Retención'
    },
    {
      name: 'David Ruiz',
      role: 'Coach Online',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'Llevo 2 años trabajando con Bryan y nunca me ha decepcionado. Es mi editor de confianza para todos mis lanzamientos.',
      metric: '2+ Años Juntos'
    },
    {
      name: 'Sofia Martinez',
      role: 'Influencer de Moda',
      avatar: '👩‍🎤',
      rating: 5,
      text: 'Bryan entiende las tendencias y sabe exactamente qué funciona en cada plataforma. Mis reels ahora viralizan constantemente.',
      metric: '5M+ Vistas'
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

        {/* Social Proof Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
            <div className="flex items-center gap-2">
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
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <span className="text-slate-700 text-sm font-medium">Top Rated Seller</span>
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
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 tracking-tight">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 font-normal">{testimonial.role}</p>
                  </div>
                  <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                    <span className="text-xs font-medium text-blue-700">{testimonial.metric}</span>
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
