import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function BlogPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="border-b border-slate-100 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Blog y consejos
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Aprende marketing digital gratis
            </h1>
            <p className="mt-2 max-w-xl text-slate-600">
              Tips, guías y casos reales de marketing digital para emprendedores y negocios en Chile.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Próximamente
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Estamos preparando artículos y guías prácticas. En cuanto estén listos, los verás
              publicados aquí.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
