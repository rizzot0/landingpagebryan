import { motion } from 'framer-motion'
import { BentoCard, GridPattern } from '../components/MagicUI'
import { Mail, Instagram, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [hasProfileImageError, setHasProfileImageError] = useState(false)
  const PROFILE_IMAGE_URL = import.meta.env.VITE_PROFILE_IMAGE_URL || '/profile-brayhan.png'
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
  const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || '56928683655').replace(/\D/g, '')

  const buildWhatsAppUrl = (payload) => {
    const text = [
      'Hola Brayhan, quiero mas informacion sobre tus servicios.',
      '',
      `Nombre: ${payload.name}`,
      `Email: ${payload.email}`,
      `Instagram/Sitio: ${payload.instagram || '-'}`,
      '',
      `Mensaje: ${payload.message}`
    ].join('\n')

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            instagram: formData.instagram,
            message: formData.message,
            source: 'landing-contact-form'
          })
        })

        if (!response.ok) {
          throw new Error('No se pudo enviar el formulario.')
        }

        setStatus('success')
      } else {
        window.open(buildWhatsAppUrl(formData), '_blank', 'noopener,noreferrer')
        setStatus('redirected')
      }

      setFormData({ name: '', email: '', instagram: '', message: '' })
      setTimeout(() => setStatus(''), 3500)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Ocurrio un error al enviar.')
    }
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
                {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado con exito' : status === 'redirected' ? 'Abriendo WhatsApp...' : status === 'error' ? 'Reintentar envio' : 'Enviar Mensaje'}
              </button>

              <p className="text-xs text-slate-500">
                {FORMSPREE_ENDPOINT
                  ? 'Este formulario envia el mensaje directo al correo configurado.'
                  : 'Modo rapido activo: al enviar se abrira WhatsApp con tus datos completos.'}
              </p>

              {status === 'error' && errorMessage ? (
                <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
              ) : null}
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
          {/* About Creator Card */}
          <BentoCard className="bg-white border border-slate-200">
            <div className="text-center">
              {/* Profile Photo */}
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  {!hasProfileImageError ? (
                    <img
                      src={PROFILE_IMAGE_URL}
                      alt="Brayhan Guerra"
                      className="w-32 h-32 rounded-full object-cover border border-blue-100"
                      loading="lazy"
                      onError={() => setHasProfileImageError(true)}
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-5xl">
                      🎥
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Brayhan Guerra | Creador de Contenido &amp; Editor de Video</h3>

              {/* Bio */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Mi objetivo es claro: transformar la atencion de tu audiencia en ventas reales. Con 2 anos de experiencia en el mundo audiovisual, me especializo en crear contenido de formato corto (TikTok, Reels, Ads) disenado estrategicamente para convertir.
              </p>

              <div className="text-left space-y-2 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-700 font-semibold">No solo edito videos, diseno herramientas de marketing.</p>
                <p className="text-sm text-slate-700">+80 proyectos entregados con exito.</p>
                <p className="text-sm text-slate-700">+15 clientes que han escalado su presencia digital.</p>
                <p className="text-sm text-slate-700">Especialista en conversion y retencion.</p>
              </div>
            </div>
          </BentoCard>

          {/* Contact Info Cards */}
          <BentoCard className="bg-white border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-3">
                <Mail className="size-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 tracking-tight">Email</h4>
                <p className="mt-1 text-slate-600 font-normal">brayhanguerratrabajo@gmail.com</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="bg-white border border-slate-200">
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
