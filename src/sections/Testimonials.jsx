import { Star, Quote } from 'lucide-react';
import { Marquee } from '../components/MagicUI';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'YouTuber de Fitness',
      company: '@FitLifeCarlos',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Bryan transformó completamente mi canal. Mis videos pasaron de 5k a 50k vistas en promedio. Su edición es puro fuego 🔥',
      metric: '+900% Vistas'
    },
    {
      name: 'Ana García',
      role: 'Creadora de Contenido',
      company: 'Digital Creator',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Profesional, rápido y creativo. Entrega antes de tiempo y siempre entiende la visión. Mi mejor inversión del año.',
      metric: 'Top 1% Creator'
    },
    {
      name: 'Miguel Torres',
      role: 'CEO',
      company: '@TorresBrand',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'La calidad de Bryan es de otro nivel. Cada video que edita supera mis expectativas. Lo recomiendo 100%.',
      metric: '10/10 Calidad'
    },
    {
      name: 'Laura Sánchez',
      role: 'Fundadora',
      company: 'EmprendeDigital',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Mi tasa de retención subió 40% desde que trabajo con Bryan. Sus efectos y ritmo son perfectos para mi audiencia.',
      metric: '+40% Retención'
    },
    {
      name: 'David Ruiz',
      role: 'Coach Online',
      company: '@CoachDavidR',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'Llevo 2 años trabajando con Bryan y nunca me ha decepcionado. Es mi editor de confianza para todos mis lanzamientos.',
      metric: '2+ Años Juntos'
    },
    {
      name: 'Sofia Martinez',
      role: 'Influencer',
      company: '@SofiStyle',
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

          {/* Google Certified */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-slate-700 text-sm font-medium">Google Certified</span>
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
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
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
