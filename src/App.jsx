import Navbar from './sections/Navbar.jsx'
import HeroVSL from './sections/HeroVSL.jsx'
import PainSection from './sections/PainSection.jsx'
import BeforeAfter from './sections/BeforeAfter.jsx'
import ProcessSection from './sections/ProcessSection.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Testimonials from './sections/Testimonials.jsx'
import FreeResources from './sections/FreeResources.jsx'
import Booking from './sections/Booking.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <HeroVSL />
        <PainSection />
        <Testimonials />
        <Portfolio />
        <BeforeAfter />
        <ProcessSection />
        <FreeResources />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
