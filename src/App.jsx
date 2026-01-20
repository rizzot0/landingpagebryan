import Navbar from './sections/Navbar.jsx'
import HeroVSL from './sections/HeroVSL.jsx'
import PainSection from './sections/PainSection.jsx'
import BeforeAfter from './sections/BeforeAfter.jsx'
import AuthoritySection from './sections/AuthoritySection.jsx'
import ProcessSection from './sections/ProcessSection.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Testimonials from './sections/Testimonials.jsx'
import FreeResources from './sections/FreeResources.jsx'
import Booking from './sections/Booking.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="overflow-hidden">
        {/* VSL Funnel Structure */}
        <HeroVSL />
        <PainSection />
        <BeforeAfter />
        <AuthoritySection />
        <ProcessSection />
        
        {/* Portfolio (Secondary Validation) */}
        <Portfolio />
        
        {/* Social Proof */}
        <Testimonials />
        
        {/* Lead Magnet */}
        <FreeResources />
        
        {/* Booking & CTA */}
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
