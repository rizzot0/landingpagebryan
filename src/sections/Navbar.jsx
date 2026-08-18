import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoBrayan from '../assets/logo-brayan.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const close = () => setMenuOpen(false)

  // Navega al home y luego hace scroll a la sección
  const goHomeSection = (section) => {
    close()
    if (isHome) return // scroll lo maneja ScrollLink
    navigate('/')
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const linkClass = 'cursor-pointer text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm'
  const mobileLinkClass = 'cursor-pointer text-slate-600 hover:text-blue-600 transition-colors font-medium py-1'
  const routerActive = 'text-blue-600'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logoBrayan}
            alt="brayaneditavideos"
            className="h-12 w-auto object-contain sm:h-14"
          />
          <div>
            <span className="font-semibold text-slate-900 tracking-tight">brayaneditavideos</span>
            <span className="text-xs text-slate-500 block font-normal">Editor de Video - MEDIA BUYER</span>
          </div>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {/* Inicio — scroll en home, navigate en otras páginas */}
          {isHome ? (
            <ScrollLink to="hero" smooth duration={500} offset={-80} className={linkClass}>
              Inicio
            </ScrollLink>
          ) : (
            <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${routerActive}` : linkClass}>
              Inicio
            </NavLink>
          )}

          {/* Servicios → página /servicios */}
          <NavLink
            to="/servicios"
            className={({ isActive }) => isActive ? `${linkClass} ${routerActive}` : linkClass}
          >
            Servicios
          </NavLink>

          {/* Planes — scroll a #planes en home */}
          {isHome ? (
            <ScrollLink to="planes" smooth duration={500} offset={-80} className={linkClass}>
              Planes
            </ScrollLink>
          ) : (
            <span onClick={() => goHomeSection('planes')} className={linkClass}>
              Planes
            </span>
          )}

          {/* Blog → página /blog */}
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? `${linkClass} ${routerActive}` : linkClass}
          >
            Blog
          </NavLink>

          {/* Casos de Éxito → página /casos-de-exito */}
          <NavLink
            to="/casos-de-exito"
            className={({ isActive }) => isActive ? `${linkClass} ${routerActive}` : linkClass}
          >
            Casos de Éxito
          </NavLink>

          {/* Conversemos — scroll a contact */}
          {isHome ? (
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all text-sm"
            >
              Conversemos →
            </ScrollLink>
          ) : (
            <span
              onClick={() => goHomeSection('contact')}
              className="cursor-pointer inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all text-sm"
            >
              Conversemos →
            </span>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pb-4 pt-2 flex flex-col gap-3">
          {isHome ? (
            <ScrollLink to="hero" smooth duration={500} offset={-80} className={mobileLinkClass} onClick={close}>
              Inicio
            </ScrollLink>
          ) : (
            <NavLink to="/" className={mobileLinkClass} onClick={close}>Inicio</NavLink>
          )}

          <NavLink to="/servicios" className={mobileLinkClass} onClick={close}>Servicios</NavLink>

          {isHome ? (
            <ScrollLink to="planes" smooth duration={500} offset={-80} className={mobileLinkClass} onClick={close}>
              Planes
            </ScrollLink>
          ) : (
            <span className={mobileLinkClass} onClick={() => goHomeSection('planes')}>Planes</span>
          )}

          <NavLink to="/blog" className={mobileLinkClass} onClick={close}>Blog</NavLink>

          <NavLink to="/casos-de-exito" className={mobileLinkClass} onClick={close}>Casos de Éxito</NavLink>

          {isHome ? (
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer inline-flex justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
              onClick={close}
            >
              Conversemos →
            </ScrollLink>
          ) : (
            <span
              onClick={() => goHomeSection('contact')}
              className="cursor-pointer inline-flex justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
            >
              Conversemos →
            </span>
          )}
        </div>
      )}
    </nav>
  )
}
