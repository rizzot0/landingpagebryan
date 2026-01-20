# Landing Page - Editor de Video Profesional

Landing page moderna y profesional para freelancer de edición de video, construida con React + Vite + Tailwind CSS.

## ✨ Características

- **Hero Section** con animaciones Framer Motion
- **Sobre Mí** con estadísticas y biografía personalizable
- **Portafolio** con grilla de videos (YouTube/Vimeo) con carga lazy
- **Agendamiento** preparado para integración Cal.com/Calendly
- **Formulario de Contacto** listo para EmailJS/Formspree
- **Navegación suave** con react-scroll
- **Diseño oscuro** optimizado para contenido visual
- **Responsive** 100% móvil-first

## 🚀 Inicio Rápido

### Desarrollo
```bash
npm install
npm run dev
```
Abre http://localhost:5173

### Producción
```bash
npm run build
npm run preview
```

## 📝 Personalización

### 1. Actualizar Videos del Portafolio
Edita `src/sections/Portfolio.jsx`:

```js
const DEMO_VIDEOS = [
  {
    id: 1,
    title: "Tu Video Título",
    url: "https://www.youtube.com/watch?v=TU_VIDEO_ID",
    thumbnail: null // Opcional: URL de miniatura personalizada
  },
  // Agrega más videos...
]
```

### 2. Configurar Calendario (Cal.com/Calendly)

**Opción A - Cal.com:**
1. Crea cuenta en [cal.com](https://cal.com)
2. Configura tu evento (ej: "Reunión 30min")
3. Copia el link de reserva
4. En `src/sections/Booking.jsx`, descomenta el iframe y actualiza:

```jsx
<iframe
  src="https://cal.com/TU-USUARIO/30min"
  width="100%"
  height="100%"
  frameBorder="0"
/>
```

**Opción B - Calendly:**
Similar proceso, usa tu link de Calendly.

### 3. Configurar Formulario de Contacto (EmailJS)

1. Crea cuenta en [emailjs.com](https://www.emailjs.com/)
2. Configura servicio de email y plantilla
3. Instala SDK:
```bash
npm install @emailjs/browser
```

4. En `src/sections/Contact.jsx`, actualiza:

```js
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  
  try {
    await emailjs.send(
      'TU_SERVICE_ID',
      'TU_TEMPLATE_ID',
      formData,
      'TU_PUBLIC_KEY'
    )
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  } catch (error) {
    setStatus('error')
  }
}
```

### 4. Personalizar Información Personal

**Sobre Mí** - `src/sections/AboutMe.jsx`:
- Reemplaza el placeholder de imagen con tu foto
- Actualiza biografía y estadísticas

**Contacto** - `src/sections/Contact.jsx`:
- Actualiza email de contacto
- Agrega tus redes sociales (Instagram, LinkedIn, etc.)

**Navbar** - `src/sections/Navbar.jsx`:
- Cambia "Bryan — Editor" por tu nombre/marca

### 5. Subir Foto de Perfil

Coloca tu foto en `src/assets/` y actualiza en `src/sections/AboutMe.jsx`:

```jsx
<div className="aspect-square rounded-2xl overflow-hidden">
  <img 
    src="/src/assets/tu-foto.jpg" 
    alt="Tu Nombre"
    className="w-full h-full object-cover"
  />
</div>
```

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
```bash
npm run build
# Arrastra carpeta /dist a netlify.app/drop
```

### Opción 3: cPanel/Hosting Compartido
```bash
npm run build
# Sube contenido de /dist a public_html/
```

## 📦 Stack Tecnológico

- **React 19** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS v4** - Estilos
- **Framer Motion** - Animaciones
- **react-scroll** - Navegación suave
- **Lucide React** - Iconos

## 📋 Checklist de Entrega

- [ ] Videos del portafolio actualizados con URLs reales
- [ ] Calendario integrado (Cal.com/Calendly)
- [ ] Formulario conectado a EmailJS/Formspree
- [ ] Foto de perfil agregada
- [ ] Biografía y estadísticas personalizadas
- [ ] Email y redes sociales actualizadas
- [ ] Probado en móvil y desktop
- [ ] Build de producción generado
- [ ] Subido al hosting

## 🛠️ Próximas Mejoras (Opcional)

- [ ] Blog/casos de estudio
- [ ] Testimonios de clientes
- [ ] Analytics (Google Analytics/Plausible)
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Modo claro/oscuro toggle
- [ ] Animaciones adicionales en scroll

## 📄 Licencia

Proyecto desarrollado por **Bastián** para Bryan - Editor de Video.

---

**Fecha:** Enero 2026  
**Versión:** 1.0.0
