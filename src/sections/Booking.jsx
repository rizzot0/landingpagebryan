import { motion as Motion } from 'framer-motion'
import { BentoCard, GridPattern } from '../components/MagicUI'
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react'
import { trackEvent } from '../lib/analytics'

export default function Booking() {
  // Scheduling configuration (Google Calendar)
  // VITE_GOOGLE_CALENDAR_URL: enlace publico de Google Appointment Schedule
  // VITE_BOOKING_OWNER_EMAIL: correo que recibira las reservas
  // VITE_SESSION_DURATION: por ejemplo "30 minutos"
  const CALENDAR_URL = import.meta.env.VITE_GOOGLE_CALENDAR_URL || 'https://calendar.app.google/waBp78cxKbWBGf7e8'
  const BOOKING_OWNER_EMAIL = import.meta.env.VITE_BOOKING_OWNER_EMAIL || import.meta.env.VITE_CONTACT_EMAIL || 'brayhanguerratrabajo@gmail.com'
  const SESSION_DURATION = import.meta.env.VITE_SESSION_DURATION || '30 minutos'

  const benefits = [
    { icon: <Video className="size-5" />, text: 'Google Meet' },
    { icon: <Clock className="size-5" />, text: `Sesion de ${SESSION_DURATION}` },
    { icon: <CheckCircle className="size-5" />, text: 'Confirmacion y recordatorios automaticos' }
  ]

  return (
    <section id="booking" className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-20">
        <GridPattern width={40} height={40} className="stroke-blue-200" />
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
          <Calendar className="size-4 text-blue-600" />
          <span className="text-sm text-blue-700 font-medium">Agendar Reunión</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Conversemos sobre tu proyecto
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
          Agenda una reunion de {SESSION_DURATION} en Google Calendar. El cliente elige horario disponible y ambos reciben confirmacion automatica.
        </p>
      </Motion.div>

      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {/* Benefits Sidebar */}
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {benefits.map((benefit, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <BentoCard className="hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 border border-blue-200 text-blue-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-slate-700 font-medium">{benefit.text}</span>
                </div>
              </BentoCard>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Calendar Embed */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <BentoCard className="p-0 overflow-hidden min-h-[600px] bg-gradient-to-br from-blue-50 to-white">
            {/* Placeholder para embed de Calendly/Cal */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-8 p-6 rounded-full bg-blue-100">
                <Calendar className="size-12 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Elige tu horario
              </h3>
              <p className="text-slate-600 max-w-xs mb-8">
                Haz click en Abrir Google Calendar y agenda una reunion de {SESSION_DURATION} con {BOOKING_OWNER_EMAIL}.
              </p>
              
              <a 
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl text-lg"
                onClick={() =>
                  trackEvent('booking_calendar_click', {
                    location: 'booking_section',
                    session_duration: SESSION_DURATION,
                  })
                }
              >
                <Calendar className="size-5" />
                Abrir Google Calendar
              </a>
            </div>

            {/* 
              INSTRUCCIONES DE INTEGRACION (GOOGLE CALENDAR):

              1. En Google Calendar crea un "Appointment schedule".
              2. Configura disponibilidad, duracion y Google Meet.
              3. Copia el enlace publico de reserva.
              4. Pegalo en VITE_GOOGLE_CALENDAR_URL.
              5. Define el correo que recibira reservas en VITE_BOOKING_OWNER_EMAIL.
            */}
          </BentoCard>
        </Motion.div>
      </div>

      {/* Extra info */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl text-center relative z-10"
      >
        <p className="text-slate-700 font-medium">
          ✓ <span className="text-blue-600 font-bold">Confirmación automática</span> por email · 
          <span className="text-green-600 font-bold"> Recordatorio 24h antes</span> · 
          <span className="text-purple-600 font-bold"> Link de Google Meet incluido</span>
        </p>
      </Motion.div>
    </section>
  )
}
