import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  
  // TODO: Reemplazar con el número de WhatsApp real (formato: 521234567890)
  const WHATSAPP_NUMBER = "56928683655"
  const WHATSAPP_MESSAGE = "Hola! Quiero información sobre tus servicios de edición de video 🎬"
  
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      {/* Botón Principal */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="relative">
          {/* Badge de notificación */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 size-3 bg-red-500 rounded-full border-2 border-white"
          />
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="size-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl flex items-center justify-center text-white hover:shadow-green-500/50 transition-all"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="size-7" fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mensaje emergente */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]"
          >
            {/* Burbuja de chat */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4 flex items-center gap-3">
                <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                  <MessageCircle className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">Servicio al Cliente</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="size-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/90 text-xs">En línea</span>
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl rounded-tl-sm p-4 border border-blue-100">
                      <p className="text-slate-800 text-sm leading-relaxed">
                        ¡Hola! 👋
                      </p>
                      <p className="text-slate-700 text-sm leading-relaxed mt-2">
                        ¿Tienes alguna pregunta sobre nuestros servicios de edición?
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">
                        ¡Comunícate conmigo ahora y te responderé enseguida! 🚀
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block pl-2">
                      {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>

                {/* Botón de acción */}
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="size-5" fill="currentColor" />
                    Abrir Chat en WhatsApp
                  </motion.button>
                </a>

                <p className="text-center text-xs text-slate-500">
                  Tiempo de respuesta: <span className="font-semibold text-green-600">~2 minutos</span>
                </p>
              </div>

              {/* Indicador de escritura */}
              <div className="px-5 pb-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                      className="size-1.5 bg-slate-400 rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                      className="size-1.5 bg-slate-400 rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                      className="size-1.5 bg-slate-400 rounded-full"
                    />
                  </div>
                  <span>Escribiendo...</span>
                </div>
              </div>

              {/* Flecha del bocadillo */}
              <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
