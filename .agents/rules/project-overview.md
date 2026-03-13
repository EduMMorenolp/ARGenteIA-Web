---
activation: always
---

# ARGenteIA Web (Landing Page) — Reglas del Agente

## Contexto del Proyecto
ARGenteIA Web es la **landing page pública** del ecosistema ARGenteIA. Es un sitio estático construido con React 19 + Vite, desplegado en GitHub Pages.

## Stack
- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Routing**: React Router v6
- **Estilos**: CSS nativo (Variables CSS, SIN Tailwind)
- **Iconos**: Lucide React
- **Deploy**: GitHub Pages via `gh-pages` (`npm run deploy`)

## Identidad Visual (NO CAMBIAR sin motivo)
- **Paleta**: Fondo `#08090d`, acentos `#4f8cff` (azul brillante)
- **Tipografías**: Google Fonts — `Outfit` (UI), `JetBrains Mono` (código/monospace)
- **Estilo**: Dark mode premium, Glassmorphism, micro-animaciones en hover
- **Variables CSS**: Centralizadas en `src/styles/base.css` — **siempre usar variables**, nunca valores hardcodeados

## Estructura
```
src/
├── components/
│   ├── Features/   # Sección de características del producto
│   ├── Footer/     # Pie de página
│   ├── Hero/       # Sección principal/bienvenida
│   └── Navbar/     # Navegación glassmorphism fija
├── pages/          # Vistas (Home.tsx, etc.)
├── styles/
│   ├── base.css    # Variables y reset global (source of truth)
│   └── index.css   # Entry point de estilos
├── App.tsx
└── main.tsx
```

## Reglas de Diseño
- **Coherencia**: Todos los componentes nuevos deben seguir la paleta y sistema de variables existente.
- **Responsive**: Siempre diseñar mobile-first. Verificar en 375px, 768px y 1440px.
- **Animaciones**: Solo `transition` y `transform` CSS — no JS animations pesadas.
- **Imágenes**: Optimizar antes de agregar (WebP preferido). No agregar imágenes >200KB sin motivo.
- **Sin dependencias pesadas**: El bundle debe mantenerse ligero. Evaluar cada nueva librería.

## Deploy
```bash
npm run build   # Build producción
npm run deploy  # Deploy a GitHub Pages (requiere permisos)
```
> El deploy va a la rama `gh-pages` automáticamente.

## SEO
- Mantener `<title>` y meta description actualizados en `index.html`.
- Usar heading hierarchy correcta (`h1` solo en Hero, `h2` para secciones).
- Alt text en todas las imágenes.
