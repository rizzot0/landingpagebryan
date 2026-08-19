import Navbar from '../sections/Navbar.jsx'
import Servicios from '../sections/Servicios.jsx'
import Planes from '../sections/Planes.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function ServiciosPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <Servicios />
        <Planes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
