# ARGenteIA Web Presentation

Esta es la presentación web (Landing Page) para el proyecto **ARGenteIA**, desarrollada con tecnología moderna y un diseño visual premium que respeta la estética del proyecto original (modo oscuro, acentos azules con brillo, tipografías "Outfit" e "JetBrains Mono").

## Tecnologías Utilizadas

- **Core**: React 18 con TypeScript
- **Entorno de Construcción**: Vite
- **Enrutamiento**: React Router v6
- **Estilos**: CSS Nativo (con variables y un sistema de diseño propio basado en Next.js-like architecture)
- **Iconos**: Lucide React

## Estructura del Proyecto

El proyecto sigue una estructura limpia y escalable:

```text
src/
├── components/          # Componentes reutilizables de UI
│   ├── Features/        # Sección de Características (Agentes, RAG, etc.)
│   ├── Footer/          # Pie de página y enlaces
│   ├── Hero/            # Sección principal de bienvenida
│   └── Navbar/          # Navegación superior estilo glassmorphism
├── pages/               # Vistas principales (ej. Home.tsx)
├── styles/              # Archivos de estilos globales y variables CSS
│   ├── base.css         # Reset, fuentes y variables de color (Theme)
│   └── index.css        # Punto de entrada de estilos
├── App.tsx              # Componente raíz con el sistema de rutas
└── main.tsx             # Punto de entrada para React/Vite
```

## Características de Diseño (UI/UX)

1. **Estética Premium**: Paleta de colores curada (`#08090d` para fondos oscuros, `#4f8cff` para acentos).
2. **Glassmorphism**: Efectos de desenfoque (`backdrop-filter: blur(12px)`) usados en componentes flotantes como la Navbar.
3. **Micro-animaciones**: Transiciones suaves al hacer hover en botones y tarjetas (transformaciones y reflejos brillantes).
4. **Diseño Responsivo**: Totalmente adaptado a distintos dispositivos móviles y de escritorio.

## scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la app en el modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) en el navegador para ver los resultados. La página se recargará si haces cambios.

### `npm run build`

Construye la app para usarse en producción en la carpeta `dist`.

## Instalación y Configuración (Para Desarrolladores)

Si acabas de clonar el repositorio:

1. Ingresa a la carpeta del proyecto web:
   ```bash
   cd "ARGenteIA Web"
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Levanta el servidor:
   ```bash
   npm run dev
   ```

---
*Desarrollado para el Ecosistema ARGenteIA.*
