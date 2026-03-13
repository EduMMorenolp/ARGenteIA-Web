---
name: web-seo-guide
description: Use this skill when the user wants to add new pages or sections to the ARGenteIA-Web landing page, to ensure SEO best practices are followed.
---

# Skill: Add SEO to Web Pages

## Overview
ARGenteIA-Web is a static React site for public marketing. SEO is critical.

## Steps to Ensure SEO

### 1. Update Document Head
Every new public route should dynamically update the document `<title>` and `<meta name="description">`.

```typescript
import { useEffect } from 'react';

export function usePageSEO(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | ARGenteIA`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [title, description]);
}
```

### 2. Semantic HTML
- Ensure exactly ONE `<h1>` per page (usually in the Hero component).
- Use `<h2>` for main sections (e.g., Features, Architecture).
- Use `<main>`, `<section>`, `<article>`, `<nav>` instead of just `<div>`.

### 3. Image Optimization
- All `<img>` tags MUST have an `alt` attribute describing the image.
- Add `loading="lazy"` to images below the fold.

### 4. Accessibility (A11y)
- Buttons and links without text must use `aria-label` (e.g., icon-only buttons).
- Ensure sufficient color contrast.

## Checklist
- [ ] Added `usePageSEO` or `Helmet` equivalent
- [ ] Checked for single `<h1>`
- [ ] Semantic HTML tags used
- [ ] `alt` text on images
- [ ] `aria-labels` on icon buttons
