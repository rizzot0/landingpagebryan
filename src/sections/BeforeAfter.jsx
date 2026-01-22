import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { GridPattern } from '../components/MagicUI'

export default function BeforeAfter() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <GridPattern className="opacity-15" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
            <TrendingUp className="size-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">Resultados</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            De Amateurista a Profesional
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Mira la diferencia que hace un video editado profesionalmente
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* VS Badge in the middle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-20 h-20 bg-white border-4 border-blue-600 rounded-full shadow-2xl">
            <span className="text-2xl font-black text-blue-600">VS</span>
          </div>

          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -top-4 left-4 inline-block px-3 py-1 bg-red-600 rounded-full">
                <span className="text-white text-sm font-bold">ANTES</span>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center border-4 border-red-500 relative shadow-xl">
                {/* Simulación de video sin editar - aspecto amateur */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-gray-100 opacity-60" />
                
                {/* Líneas de distorsión / ruido */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent" />
                  <div className="absolute top-1/3 w-full h-px bg-red-300/30" />
                  <div className="absolute top-2/3 w-full h-px bg-red-300/30" />
                  <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent" />
                </div>

                {/* Contenido - ícono de video crudo */}
                <div className="relative z-10 text-center px-8">
                  <p className="text-slate-700 text-lg font-bold mb-3">Video sin editar</p>
                </div>

                {/* Esquinas oscuras para efecto de baja calidad */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-black/20 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-black/20 rounded-tl-full" />
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-red-50 border-2 border-red-300 rounded-lg shadow-md">
              <p className="text-red-700 font-bold text-base flex items-center gap-3">
                <span className="text-2xl">❌</span>
                <span>Bajo engagement · Abandono rápido · Cero conversiones</span>
              </p>
            </div>
          </motion.div>

          {/* DESPUÉS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -top-4 left-4 inline-block px-3 py-1 bg-green-600 rounded-full">
                <span className="text-white text-sm font-bold">DESPUÉS</span>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center border-4 border-green-500 relative shadow-2xl shadow-green-500/30">
                {/* Simulación de video profesional - cinematográfico */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black opacity-80" />
                
                {/* Efecto de luz cinematográfica */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                </div>

                {/* Líneas de corte (editing lines) */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                  <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                </div>

                {/* Contenido - ícono de video profesional */}
                <div className="relative z-10 text-center px-8">
                  <p className="text-green-300 text-lg font-bold mb-3">Video editado</p>
                </div>

                {/* Brillo/glow effect */}
                <div className="absolute inset-0 rounded-xl pointer-events-none border-4 border-transparent bg-gradient-to-r from-green-400/0 via-green-400/10 to-cyan-400/0 rounded-xl" />
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-green-50 border-2 border-green-300 rounded-lg shadow-md">
              <p className="text-green-700 font-bold text-base flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Alto engagement · Visualización completa · Conversiones aseguradas</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-slate-50 border-2 border-slate-200 rounded-xl text-center hover:border-slate-300 transition-all shadow-md"
          >
            <p className="text-slate-600 text-sm font-medium mb-3">Retención Promedio</p>
            <p className="text-4xl font-black text-slate-900 mb-2">32%</p>
            <p className="text-sm text-slate-500">Sin edición profesional</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-3 border-green-400 rounded-xl text-center shadow-lg shadow-green-200"
          >
            <p className="text-green-700 text-sm font-bold mb-3">✨ CON NUESTRO SERVICIO</p>
            <p className="text-5xl font-black text-green-600 mb-2">89%</p>
            <p className="text-sm font-bold text-green-700">+175% de mejora</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-slate-50 border-2 border-slate-200 rounded-xl text-center hover:border-slate-300 transition-all shadow-md"
          >
            <p className="text-slate-600 text-sm font-medium mb-3">Tiempo de Engagement</p>
            <p className="text-4xl font-black text-slate-900 mb-2">7+ min</p>
            <p className="text-sm text-slate-500">En lugar de 18 segundos</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
