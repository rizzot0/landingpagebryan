import { useEffect, useRef, useState } from 'react';
import { Eye, TrendingUp, Users, Award } from 'lucide-react';
import CountUp from 'react-countup';
import { BentoCard } from '../components/MagicUI';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const metrics = [
    {
      icon: Eye,
      value: 50,
      suffix: 'M+',
      label: 'Vistas Generadas',
      description: 'En contenido editado para clientes',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      value: 85,
      suffix: '%',
      label: 'Aumento de Retención',
      description: 'Promedio en videos editados',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Clientes Satisfechos',
      description: 'De 15 países diferentes',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: 100,
      suffix: '+',
      label: 'Proyectos Completados',
      description: 'En los últimos 5 años',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="metricas" className="relative py-24 bg-white overflow-hidden" ref={sectionRef}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-blue-50/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-blue-50 border border-blue-100 rounded-full text-blue-700">
            Resultados Comprobados
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900 tracking-tight">
            Impacto Real en Números
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-normal">
            Estas métricas reflejan el valor que he generado para mis clientes a través de edición de video de alta calidad
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <BentoCard key={idx} className="relative overflow-hidden group bg-white border border-slate-200">
                <div className="relative z-10 p-6">
                  {/* Icon with blue background */}
                  <div className="inline-flex p-3 rounded-xl bg-blue-50 border border-blue-100 mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Animated Counter */}
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                      {isVisible ? (
                        <CountUp
                          end={metric.value}
                          duration={2.5}
                          suffix={metric.suffix}
                          enableScrollSpy={false}
                        />
                      ) : (
                        `0${metric.suffix}`
                      )}
                    </span>
                  </div>

                  {/* Label and Description */}
                  <h3 className="text-lg font-medium text-slate-900 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal">
                    {metric.description}
                  </p>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </BentoCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4 font-normal">
            ¿Listo para generar resultados similares en tu contenido?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Agenda una Consulta Gratuita
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
