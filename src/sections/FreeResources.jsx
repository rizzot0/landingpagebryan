import { motion as Motion } from 'framer-motion'
import { Gift, Check } from 'lucide-react'
import { useState } from 'react'
import { Meteors, GridPattern } from '../components/MagicUI'

export default function FreeResources() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const FORMSPREE_ENDPOINT =
    import.meta.env.VITE_FORMSPREE_RESOURCES_ENDPOINT ||
    import.meta.env.VITE_FORMSPREE_ENDPOINT ||
    'https://formspree.io/f/xzdkllyw'
  const FREE_RESOURCE_PDF_URL = import.meta.env.VITE_FREE_RESOURCE_PDF_URL || '/resources/pdfrecursos.pdf'

  const triggerLocalDownload = () => {
    const link = document.createElement('a')
    link.href = FREE_RESOURCE_PDF_URL
    link.download = ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage('Falta configurar VITE_FORMSPREE_RESOURCES_ENDPOINT (o VITE_FORMSPREE_ENDPOINT).')
      return
    }

    try {
      setIsSubmitting(true)
      setErrorMessage('')

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: 'Nueva solicitud desde Recursos Gratis',
          correo: email,
          origen_formulario: 'seccion-recursos-gratis',
          tipo_solicitud: 'descarga-pdf-recursos'
        })
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el correo. Intenta nuevamente.')
      }

      setIsSubmitted(true)
      triggerLocalDownload()

      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      setErrorMessage(error.message || 'Ocurrio un error al enviar el formulario.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resources = [
    {
      title: 'Guía de Edición para Redes Sociales',
      description: 'Los 5 cortes y efectos que SIEMPRE retienen audiencia',
      icon: '🎬'
    },
    {
      title: 'Plantilla de Brief Perfecto',
      description: 'Cómo comunicar exactamente lo que necesitas editado',
      icon: '📋'
    },
    {
      title: 'Checklist de Calidad',
      description: 'Garantiza que cada video sea cinematográfico',
      icon: '✅'
    }
  ]

  return (
    <section className="relative py-20 bg-blue-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <GridPattern className="opacity-20" />
        <Meteors number={20} />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 z-20">
        {/* Main Content */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-300 mb-6">
            <Gift className="size-4 text-yellow-700" />
            <span className="text-sm text-yellow-700 font-bold">RECURSOS GRATIS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-md">¿Aún no estás listo para contratar?</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Descarga nuestros recursos gratis y empieza a mejorar tus videos desde hoy
          </p>
        </Motion.div>

        {/* Form Container */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border-2 border-blue-300 rounded-2xl p-8 sm:p-12 mb-12 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="size-4" /> Enviado
                  </span>
                ) : (
                  'Descargar Recursos'
                )}
              </button>
            </div>
            <p className="text-slate-500 text-xs">
              ✓ Sin spam. Desuscribirse en cualquier momento.
            </p>
            {errorMessage ? (
              <p className="text-red-600 text-xs font-medium">{errorMessage}</p>
            ) : null}
          </form>
        </Motion.div>

        {/* Resources Preview */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-slate-600 text-sm mb-6 font-medium">DENTRO DE LOS RECURSOS RECIBIRÁS:</p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="p-4 bg-white border border-blue-200 rounded-lg hover:border-blue-400 transition-colors group"
              >
                <div className="text-3xl mb-3">{resource.icon}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">
                  {resource.title}
                </h4>
                <p className="text-slate-600 text-xs">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
