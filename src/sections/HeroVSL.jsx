import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { trackEvent } from '../lib/analytics'

const WHATSAPP_URL = 'https://wa.me/56928683655?text=Hola%20Bryan!%20Quiero%20aprovechar%20la%20promo%20Cyber%20con%2025%25%20de%20descuento%20en%20tus%20servicios.'

// ============================================================================
// CYBERDAY / CYBERMONDAY 2026 CONFIGURATION
// Promoción válida durante todo el mes de octubre:
// Término: Sábado 31 de Octubre de 2026 a las 23:59:59 hrs (UTC-3).
//
// El Hero original está respaldado en: src/sections/HeroVSL.backup.jsx
// ============================================================================
const CYBER_END_DATE = new Date('2026-10-31T23:59:59-03:00')

function calculateTimeLeft() {
  const difference = CYBER_END_DATE.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', isEnded: true }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    isEnded: false,
  }
}

export default function HeroVSL() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCtaClick = () => {
    trackEvent('cyber_hero_cta_click', {
      promo: 'cyberday2026',
      discount: '25%',
    })
  }

  return (
    <section id="hero" className="relative min-h-[92vh] bg-white flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          
          {/* ================= LEFT COLUMN ================= */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-start space-y-5 sm:space-y-6"
          >
            {/* Cyber Day 3D Badge */}
            <Motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative -ml-2 sm:-ml-4 cursor-pointer group"
            >
              <img
                src="/cyber-day-badge.png"
                alt="Cyber Day Promoción"
                className="w-60 sm:w-72 md:w-84 lg:w-[370px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Motion.div>

            {/* Headline with 25% discount ribbon */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Ahora con
              </h1>

              {/* Red Coupon Tag Ribbon */}
              <div className="flex items-center pt-1 pb-1">
                <div className="inline-flex items-stretch shadow-xl shadow-red-500/25 rounded-l-full group transition-transform hover:scale-[1.02]">
                  {/* Left rounded pill body */}
                  <div className="bg-[#E11D2A] text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] pl-5 sm:pl-7 pr-2 py-2 sm:py-2.5 rounded-l-full flex items-center whitespace-nowrap tracking-wide leading-none">
                    25% DE DESCUENTO
                  </div>
                  {/* Right pointed coupon tag tip with hole */}
                  <svg
                    viewBox="0 0 36 60"
                    className="h-auto w-7 sm:w-9 md:w-10 text-[#E11D2A] fill-current flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 0 L18 0 L36 30 L18 60 L0 60 Z" />
                    <circle cx="20" cy="30" r="4.5" fill="white" />
                  </svg>
                </div>

                {/* 3 red accent dashes radiating from tag tip */}
                <div className="flex flex-col justify-center gap-1.5 pl-2 select-none">
                  <span className="w-2.5 h-1 bg-red-500 rounded-full rotate-45 transform origin-left" />
                  <span className="w-3.5 h-1 bg-red-500 rounded-full" />
                  <span className="w-2.5 h-1 bg-red-500 rounded-full -rotate-45 transform origin-left" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                en todos mis servicios
              </h2>
            </div>

            {/* Subtext: Services highlighted in blue */}
            <p className="text-sm sm:text-base lg:text-lg font-black tracking-wider text-blue-600 uppercase pt-1">
              ESTRATEGIA + GRABACIÓN + EDICIÓN + META ADS
            </p>

            {/* Validity badge: Válido durante todo Octubre */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm sm:text-base font-semibold text-blue-700 shadow-sm">
                <Calendar className="size-4 sm:size-5 text-blue-600" />
                <span>Válido durante todo Octubre</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-500 px-8 sm:px-10 py-4 text-lg sm:text-xl font-bold text-white shadow-xl shadow-red-500/40 hover:from-red-700 hover:to-red-600 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <span>¡Aprovecha ahora!</span>
                <ArrowRight className="size-5 sm:size-6 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col items-center w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Top Warning Badge with alarm clock and speed lines */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              {/* Left speed lines */}
              <div className="flex gap-1 items-center">
                <span className="w-2.5 h-1 bg-red-500 rounded-full -rotate-45" />
                <span className="w-3.5 h-1 bg-red-500 rounded-full" />
                <span className="w-2.5 h-1 bg-red-500 rounded-full rotate-45" />
              </div>

              {/* Red Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-5 sm:px-6 py-2 text-xs sm:text-sm font-black text-white uppercase tracking-wider shadow-lg shadow-red-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 sm:size-5 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2 2" />
                  <path d="M5 3 2 6" />
                  <path d="m22 6-3-3" />
                  <path d="M6.38 18.7 4 21" />
                  <path d="M17.64 18.67 20 21" />
                </svg>
                <span>SOLO POR TIEMPO LIMITADO</span>
              </div>

              {/* Right speed lines */}
              <div className="flex gap-1 items-center">
                <span className="w-2.5 h-1 bg-red-500 rounded-full rotate-45" />
                <span className="w-3.5 h-1 bg-red-500 rounded-full" />
                <span className="w-2.5 h-1 bg-red-500 rounded-full -rotate-45" />
              </div>
            </div>

            {/* Countdown Container Card */}
            <div className="relative w-full max-w-md sm:max-w-lg bg-[#070D18] rounded-3xl p-4 sm:p-6 border-2 border-blue-900/60 shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
              {/* Glowing cyan/blue subtle inner background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

              {/* 4 Countdown Boxes */}
              <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-3.5">
                {/* DÍAS */}
                <div className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 border-blue-500 bg-[#0A1424] p-2.5 sm:p-4 text-center shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-transform hover:scale-105">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase mt-1 sm:mt-1.5">
                    DÍAS
                  </span>
                </div>

                {/* HORAS */}
                <div className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 border-blue-500 bg-[#0A1424] p-2.5 sm:p-4 text-center shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-transform hover:scale-105">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase mt-1 sm:mt-1.5">
                    HORAS
                  </span>
                </div>

                {/* MINUTOS */}
                <div className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 border-blue-500 bg-[#0A1424] p-2.5 sm:p-4 text-center shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-transform hover:scale-105">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase mt-1 sm:mt-1.5">
                    MINUTOS
                  </span>
                </div>

                {/* SEGUNDOS */}
                <div className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 border-blue-500 bg-[#0A1424] p-2.5 sm:p-4 text-center shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-transform hover:scale-105">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight leading-none">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase mt-1 sm:mt-1.5">
                    SEGUNDOS
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Yellow Ribbon: ¡NO LO DEJES PASAR! */}
            <div className="relative -mt-4 z-20 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 px-6 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-black text-slate-950 shadow-lg shadow-yellow-400/40 transform -rotate-1 border border-yellow-200 hover:rotate-0 transition-transform">
                <span className="text-base sm:text-lg">🔥</span>
                <span>¡NO LO DEJES PASAR!</span>
              </div>
            </div>

            {/* 3D Laptop Showcase with Meta logo and sales growth badge */}
            <Motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="relative w-full max-w-lg mt-2 sm:mt-4 flex justify-center"
            >
              <img
                src="/cyber-laptop.png"
                alt="Edición de video profesional y Meta Ads para ventas"
                className="w-full h-auto object-contain max-h-[360px]"
              />
            </Motion.div>
          </Motion.div>

        </div>
      </div>
    </section>
  )
}
