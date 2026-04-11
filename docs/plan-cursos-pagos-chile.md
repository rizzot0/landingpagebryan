# Plan No-Code para Cursos + Pagos (Chile)

## Objetivo
Agregar venta de cursos con portal de pagos y entrega de acceso, sin programar backend propio.

## Resumen ejecutivo
Para hacerlo rápido y con menos riesgo técnico, hay dos caminos:

1. Plataforma todo en uno (recomendado para empezar)
- Ejemplos: Hotmart, Kajabi, Thinkific, Teachable.
- Ventaja: pago, checkout, acceso al curso y automatizaciones en un solo lugar.
- Desventaja: comisión o costo mensual mayor.

2. Armar stack por piezas (más control)
- Landing actual + pasarela de pago + plataforma de cursos + automatización.
- Ventaja: mayor control y posibilidad de optimizar costos a futuro.
- Desventaja: más configuración y más puntos de falla.

## Opciones de cobro para Chile
### Opción A: Hotmart (fácil)
- Ideal si quieres vender cursos sin tocar código.
- Incluye checkout, afiliados, cupones, y acceso al contenido.
- Puedes enlazar desde tu landing con botones de compra.

### Opción B: Mercado Pago (muy local)
- Muy conocido en Chile y con buena conversión local.
- Lo puedes usar con links de pago o checkout de plataforma externa.
- Recomendado si quieres medios de pago locales y simplicidad operativa.

### Opción C: Flow o Webpay Plus (Transbank)
- Alternativas fuertes para comercio local en Chile.
- Más orientadas a tiendas y soluciones locales.
- Buenos para operación formal local y conciliación bancaria en Chile.

### Opción D: Stripe
- Puede ser opción si tu cuenta y país están habilitados para lo que necesitas.
- Revisa en tu dashboard disponibilidad de:
  - Creación de cuenta en Chile
  - Métodos de pago locales
  - Facturación y retiros
- Si todo está habilitado, funciona muy bien para suscripciones y pagos únicos.

## Recomendación para tu caso (sin programar)
Fase 1 (rápida):
- Usar plataforma todo en uno (Hotmart o similar).
- En la landing: botón Comprar curso que abre checkout.
- Entrega del curso y correos automáticos desde la plataforma.

Fase 2 (optimización):
- Evaluar migración a stack propio por piezas cuando ya tengas ventas recurrentes.

## Arquitectura no-code sugerida
1. Landing actual
- Botones CTA: Comprar ahora / Ver programa.

2. Checkout externo
- Link de pago o checkout embebido de la plataforma elegida.

3. Entrega de acceso
- Curso alojado en plataforma de cursos.
- Acceso automático tras pago.

4. Automatización
- Make o Zapier para:
  - Etiquetar comprador en CRM
  - Enviar correo de bienvenida
  - Avisar por WhatsApp al equipo

5. Soporte y retención
- Grupo privado (WhatsApp/Telegram/Discord) opcional.
- Página de preguntas frecuentes y política de reembolso.

## Qué pedirle al proveedor/plataforma
- URL de checkout público
- URL de portal de alumno (login)
- Confirmación de medios de pago habilitados en Chile
- Confirmación de moneda CLP o conversión
- Flujo de devolución/reembolso
- Integración de píxeles (Meta/Google) para medir conversiones

## Checklist de implementación (sin código)
1. Definir oferta
- Nombre del curso
- Precio
- Pago único o cuotas
- Garantía y política de reembolso

2. Configurar pasarela/checkout
- Activar métodos de pago
- Probar compra real de bajo monto o entorno de prueba

3. Configurar curso y acceso
- Módulos, lecciones, material descargable
- Email automático de acceso

4. Conectar con landing
- Reemplazar botón principal por URL de checkout
- Añadir botón secundario de WhatsApp para dudas

5. Medición
- Activar evento de compra en Meta Pixel y Google Ads
- Revisar tasa de conversión semanal

## Riesgos comunes y mitigación
- Riesgo: rechazo de pagos o fricción en checkout.
  - Mitigación: usar medios locales y checkout simple de 1 paso.

- Riesgo: usuarios no reciben acceso.
  - Mitigación: prueba end-to-end antes de publicar y correo de respaldo manual.

- Riesgo: confusión legal/comercial.
  - Mitigación: publicar términos, política de privacidad y reembolso claros.

## Plan recomendado en 7 días
Día 1-2:
- Elegir plataforma y crear producto.

Día 3:
- Configurar pagos y política de reembolso.

Día 4:
- Subir contenido inicial del curso.

Día 5:
- Conectar checkout en la landing.

Día 6:
- Pruebas completas: compra, correo, acceso, soporte.

Día 7:
- Lanzamiento y seguimiento de conversiones.

## Decisión rápida
Si quieres velocidad y cero código: Hotmart o plataforma equivalente.
Si quieres foco local Chile y simpleza de cobro: Mercado Pago, Flow o Webpay con links/checkout.
Si quieres escalar con control técnico más adelante: Stripe (si tu cuenta en Chile habilita lo necesario) + plataforma de cursos.
