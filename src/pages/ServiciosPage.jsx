import Navbar from '../sections/Navbar.jsx'
import Planes from '../sections/Planes.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function ServiciosPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="bg-white py-12 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Servicios</p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Planes y precios</h1>
            <p className="mt-2 text-slate-600 max-w-xl">
              Elige el plan que mejor se adapta a tu negocio. Todos los planes incluyen estrategia de contenido y soporte directo.
            </p>
          </div>
        </div>
        <Planes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
