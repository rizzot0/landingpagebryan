import { motion } from 'framer-motion'
import { BentoCard, GridPattern } from '../components/MagicUI'
import { Mail, Instagram, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // TODO: Integrar con EmailJS o Formspree
    // Ejemplo con EmailJS:
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
    
    // Simulación temporal
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', instagram: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-30">
        <GridPattern width={40} height={40} className="stroke-slate-200" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Send className="size-4 text-blue-600" />
          <span className="text-sm text-blue-700 font-medium">Hablemos</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
          Contacto
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-normal">
          ¿Tienes un proyecto en mente? Envíame un mensaje y trabajemos juntos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BentoCard>
            <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Envía un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Tu Instagram o Sitio Web
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="@tuusuario o https://"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'sending' ? 'Enviando...' : status === 'success' ? '¡Enviado!' : 'Enviar Mensaje'}
              </button>
            </form>
          </BentoCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-3">
                <Mail className="size-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 tracking-tight">Email</h4>
                <p className="mt-1 text-slate-600 font-normal">contacto@bryan.com</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <h4 className="font-medium text-slate-900 tracking-tight mb-4">Redes Sociales</h4>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-50 border border-slate-200 p-3 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Instagram className="size-5 text-slate-600" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-50 border border-slate-200 p-3 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Linkedin className="size-5 text-slate-600" />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-50 border border-slate-200 p-3 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <Github className="size-5 text-slate-600" />
              </a>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  )
}
