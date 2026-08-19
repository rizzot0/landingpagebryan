import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="bg-white py-12 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Resultados reales</p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Casos de éxito</h1>
            <p className="mt-2 text-slate-600 max-w-xl">
              Marcas reales, resultados reales. Esto es lo que logramos juntos.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Próximamente
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Estamos documentando los resultados de nuestros clientes: métricas, campañas y aprendizajes
              reales. En cuanto esté listo, los verás publicados aquí.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
