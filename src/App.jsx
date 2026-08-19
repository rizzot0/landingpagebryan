import { Routes, Route } from 'react-router-dom'

import Navbar from './sections/Navbar.jsx'
import HeroVSL from './sections/HeroVSL.jsx'
import PainSection from './sections/PainSection.jsx'
import Servicios from './sections/Servicios.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Proceso from './sections/Proceso.jsx'
import Planes from './sections/Planes.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

import ServiciosPage from './pages/ServiciosPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import CasosDeExitoPage from './pages/CasosDeExitoPage.jsx'
import PlanDetailPage from './pages/PlanDetailPage.jsx'

function MainPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <HeroVSL />
        <PainSection />
        <Servicios />
        <Testimonials />
        <Portfolio />
        <Proceso />
        <Planes />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/casos-de-exito" element={<CasosDeExitoPage />} />
      <Route path="/planes/:slug" element={<PlanDetailPage />} />
    </Routes>
  )
}
