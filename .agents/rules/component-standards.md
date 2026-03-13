---
activation: glob
glob: "src/components/**/*"
---

# Component Development Standards — ARGenteIA Web

## Estructura de un Componente
```
src/components/MyComponent/
├── MyComponent.tsx      # Lógica y JSX
└── MyComponent.css      # Estilos específicos del componente
```

## Template de Componente
```tsx
import React from 'react';
import './MyComponent.css';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <section className="my-component">
      <h2 className="my-component__title">{title}</h2>
      {description && <p className="my-component__desc">{description}</p>}
    </section>
  );
};

export default MyComponent;
```

## CSS: BEM + Variables
```css
/* Usar variables del design system */
.my-component {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.my-component__title {
  color: var(--color-text-primary);
  font-family: var(--font-primary);
}

/* Glassmorphism (cuando corresponda) */
.my-component--glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Hover animations */
.my-component:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
```

## Reglas
- **BEM naming**: `.block__element--modifier`
- **Siempre usar variables CSS** de `base.css`, nunca valores hardcodeados
- **No inline styles** salvo casos muy específicos (valores dinámicos)
- Componentes funcionales con hooks — no class components
- Props opcionales con `?` y valores por defecto cuando aplique
