import { motion } from 'framer-motion'
import { BentoCard } from '../components/MagicUI'
import { Award, Film, Users, Sparkles, TrendingUp, CheckCircle, Video, Palette, Zap, Layers } from 'lucide-react'

export default function AboutMe() {
  const skillsCategories = [
    {
      category: "Edición",
      icon: <Video className="size-5" />,
      items: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"]
    },
    {
      category: "Post-Producción",
      icon: <Layers className="size-5" />,
      items: ["After Effects", "Motion Graphics", "VFX"]
    },
    {
      category: "Color & Audio",
      icon: <Palette className="size-5" />,
      items: ["Color Grading", "Sound Design", "Audio Mixing"]
    }
  ]

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Sparkles className="size-4 text-blue-600" />
          <span className="text-sm text-blue-700 font-medium">Conóceme</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
          Sobre Mí
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BentoCard className="h-full bg-white border border-slate-200">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Film className="size-16 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-2">
                  <CheckCircle className="size-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Bryan</h3>
                <p className="text-blue-600 font-medium mb-4">Editor de Video Profesional</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Editor con pasión por transformar historias en experiencias visuales memorables. 
                  Especializado en crear contenido que conecta emocionalmente con la audiencia.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                Mi enfoque combina <span className="text-slate-900 font-medium">técnica cinematográfica</span>, 
                narrativa visual y comprensión profunda del mensaje que tu marca necesita transmitir.
              </p>
            </div>
          </BentoCard>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: <Award className="size-8" />, value: "5+", label: "Años de Experiencia", color: "bg-blue-50 border-blue-100 text-blue-600" },
            { icon: <Film className="size-8" />, value: "100+", label: "Proyectos Completados", color: "bg-blue-50 border-blue-100 text-blue-600" },
            { icon: <Users className="size-8" />, value: "50+", label: "Clientes Satisfechos", color: "bg-blue-50 border-blue-100 text-blue-600" },
            { icon: <TrendingUp className="size-8" />, value: "98%", label: "Tasa de Satisfacción", color: "bg-blue-50 border-blue-100 text-blue-600" }
          ].map((stat, idx) => (
            <BentoCard key={idx} className="text-center bg-white border border-slate-200">
              <div className={`inline-flex p-3 rounded-xl ${stat.color} border mb-3`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">{stat.value}</div>
              <div className="text-xs text-slate-600 font-normal">{stat.label}</div>
            </BentoCard>
          ))}
        </motion.div>
      </div>

      {/* Skills - Improved Version */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {skillsCategories.map((category, categoryIdx) => (
          <BentoCard key={categoryIdx} className="bg-white border border-slate-200">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                {category.category}
              </h3>
            </div>
            <div className="space-y-2">
              {category.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIdx * 0.1 + idx * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-slate-700 font-normal">{skill}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>
        ))}
      </motion.div>
    </section>
  )
}
