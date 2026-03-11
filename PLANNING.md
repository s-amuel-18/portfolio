# 📋 PLANNING — Samuel Graterol Portfolio 2026

> **Objetivo:** Portafolio web personal para Samuel David Graterol Lobo, Fullstack Developer especializado en Backend & Arquitectura de Software. Dirigido principalmente a reclutadores internacionales. Posicionamiento SEO por nombre propio y perfil técnico.

---

## 1. 🧱 Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework principal | [Astro 5](https://astro.build/) |
| Componentes interactivos | React 19 |
| Estilos | Tailwind CSS v4 |
| Librería de componentes UI | [Shadcn/ui](https://ui.shadcn.com/) |
| Lenguaje | TypeScript |
| Data source | JSON local (hardcoded) |
| Animaciones | Framer Motion |
| Iconos | Lucide React + Simple Icons (tech logos) |
| i18n (internacionalización) | Astro i18n nativo (`astro:i18n`) |
| Hosting | Vercel (recomendado) o Netlify |
| Control de versiones | Git + GitHub (`s-amuel-18`) |

### Setup & Configuración inicial

```bash
npm create astro@latest portfolio -- --template minimal
cd portfolio
npx astro add react tailwind
npx shadcn@latest init
npm install framer-motion lucide-react
```

- Tailwind v4 con `@tailwindcss/vite` plugin (NO usar el integration deprecado)
- Shadcn configurado con tema `dark` por defecto
- TypeScript strict mode activado
- Path aliases: `@/` → `src/`

---

## 2. 🎨 Diseño & Paleta de Colores

### Modo
- **Dark mode por defecto**, sin toggle (el portafolio es 100% dark)

### Paleta principal

```css
/* Fondo */
--bg-primary:    #0A0F1E   /* Azul oscuro profundo, casi negro */
--bg-secondary:  #0D1428   /* Cards y secciones alternas */
--bg-card:       #111827   /* Fondo de tarjetas */

/* Acento principal */
--blue-primary:  #3B82F6   /* Blue-500 Tailwind — vibrante */
--blue-light:    #60A5FA   /* Blue-400 — hover states */
--blue-glow:     #1D4ED8   /* Blue-700 — sombras/glows */

/* Gradientes */
--gradient-hero: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)  /* Blue → Indigo */
--gradient-card: linear-gradient(180deg, #1E3A5F 0%, #0A0F1E 100%)  /* Subtle card accent */
--gradient-text: linear-gradient(90deg, #60A5FA, #818CF8)            /* Para headings destacados */

/* Texto */
--text-primary:  #F8FAFC   /* Blanco suave */
--text-secondary:#94A3B8   /* Slate-400 — subtítulos */
--text-muted:    #475569   /* Slate-600 — metadata */

/* Bordes */
--border:        #1E293B   /* Slate-800 — bordes sutiles */
--border-accent: #3B82F6   /* Borde con acento azul en hover */
```

### Tipografía

| Uso | Fuente | Peso |
|-----|--------|------|
| Headings | [Inter](https://fonts.google.com/specimen/Inter) o [Geist](https://vercel.com/font) | 700 / 800 |
| Body | Inter | 400 / 500 |
| Código / Tech tags | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | 400 |

> **Recomendación:** Geist (de Vercel) da un look muy moderno y es performante. Combinarlo con JetBrains Mono para los tech badges refuerza la identidad de developer.

### Efectos visuales

- Glow sutil azul en elementos activos/hover
- Glassmorphism en cards (backdrop-blur + border semitransparente)
- Gradiente en texto del headline principal del Hero
- Partícula/grid de fondo muy sutil en el Hero (CSS puro, sin librerías pesadas)
- Animaciones de entrada con Framer Motion (fade + slide-up) al hacer scroll

---

## 3. 🏗️ Estructura de la Página

El portafolio es **one-page** con navegación por anclas (`#section`), más un scroll fluido.

### Orden de secciones

```
/
├── <Header />          — Navbar sticky con nav links + toggle idioma (EN/ES)
├── <Hero />            — Presentación principal
├── <About />           — Sobre mí + stats animados
├── <Experience />      — Experiencia laboral (cards timeline)
├── <Skills />          — Habilidades técnicas (cards por categoría)
├── <Projects />        — Proyectos seleccionados de GitHub
├── <Education />       — Formación académica + cursos
├── <Contact />         — Links de contacto + CV download
└── <Footer />          — Copyright + redes
```

---

### 3.1 Header / Navbar

- Sticky top, con blur de fondo al hacer scroll (`backdrop-blur`)
- Logo: iniciales **"SG"** estilizadas o nombre completo
- Links: About · Experience · Skills · Projects · Contact
- Toggle de idioma: `EN / ES` (pill switch)
- Botón **"Download CV"** — outline style con acento azul
- Mobile: hamburger menu con drawer lateral

---

### 3.2 Hero

**El elemento más importante — primera impresión del reclutador.**

Layout: dos columnas (texto izquierda | foto derecha) en desktop, stacked en mobile.

**Contenido:**
- Badge superior: `"Available for work 🟢"` o `"Open to opportunities"`
- Saludo: `"Hi, I'm"` (pequeño, muted)
- Nombre: **"Samuel Graterol"** — heading gigante con gradiente de texto blue→indigo
- Título con typing effect: *"Fullstack Developer"* / *"Backend Specialist"* / *"Software Engineer"* (rotando)
- Tagline corta: *"Building scalable systems & automating processes since 2021"*
- CTAs: `[View Projects]` (filled) + `[Download CV]` (outline)
- Redes sociales: GitHub · LinkedIn iconos con hover glow

**Foto:**
- Foto circular con borde gradient azul animado (glow pulsante sutil)
- Fondo del hero: grid de puntos sutiles o líneas de código de fondo (muy bajo opacidad)

---

### 3.3 About

Layout: dos columnas — texto + stats/counters.

**Texto:** Párrafo profesional en primera persona basado en el perfil del CV. Resaltar: especialización backend, arquitectura, automatización, innovación.

**Stats animados (count-up al entrar en viewport):**
- `4+` Years of experience
- `8+` Projects completed
- `3` Companies worked
- `2` Countries (Colombia & Venezuela)

---

### 3.4 Experience

Cards compactas con línea timeline lateral izquierda (azul).

**Cada card incluye:**
- Empresa + logo (placeholder si no hay logo disponible)
- Cargo + fechas
- Descripción compacta (2-3 bullets de logros clave)
- Tech stack usado (badges/pills pequeñas)

**Empresas:**
1. **Avila Tek** — Software Engineer (May 2024 - Presente)
2. **Vilotechnologies** — Backend Developer (Feb 2022 - May 2024)
3. **Tecno Red Soluciones** — Backend Developer (Sep 2021 - Feb 2022)

---

### 3.5 Skills

Cards agrupadas por categoría, con icono de cada tecnología (Simple Icons).

**Categorías:**

| Categoría | Tecnologías |
|-----------|------------|
| **Backend** | Node.js, NestJS, TypeScript, PHP, Laravel |
| **Frontend** | React.js, HTML, CSS, JavaScript |
| **Databases** | MySQL, PostgreSQL, MongoDB |
| **Tools & DevOps** | Git, WordPress |

> **Recomendación:** Agregar una categoría **"Currently Learning"** con tecnologías en estudio (ej: Docker, AWS, etc.) — demuestra crecimiento continuo a reclutadores.

---

### 3.6 Projects

Grid de cards (2-3 columnas en desktop). Selección manual desde el JSON.

**Cada card incluye:**
- Nombre del proyecto
- Descripción corta (2-3 líneas)
- Stack de tecnologías (badges)
- Estadísticas del repo: ⭐ stars · 🍴 forks · lenguaje principal
- Links: `[GitHub]` + `[Live Demo]` (si aplica)
- Imagen de preview o placeholder con gradiente de color

**Fuente de datos:** `src/data/projects.json` — editado manualmente por Samuel.

```json
// Estructura de cada proyecto en projects.json
{
  "id": "project-slug",
  "title": "Project Name",
  "description": {
    "en": "English description",
    "es": "Descripción en español"
  },
  "tech": ["Node.js", "NestJS", "PostgreSQL"],
  "github": "https://github.com/s-amuel-18/repo-name",
  "demo": "https://demo-url.com",
  "stars": 12,
  "forks": 3,
  "language": "TypeScript",
  "featured": true
}
```

---

### 3.7 Education

Cards compactas (similar a Experience pero más simples).

1. **Técnico Superior Universitario** — Instituto Universitario "Jesús Obrero" (Nov 2020 - Mar 2022)
2. **Formación continua** — Platzi, Udemy (Mar 2020 - Presente)

> **Recomendación:** Listar los cursos/certificaciones más relevantes de Platzi/Udemy como sub-items en la card de formación continua. Agrega credibilidad y rellena bien la sección.

---

### 3.8 Contact

Sin formulario. Sección limpia con:

- Headline: *"Let's work together"* / *"¿Hablamos?"*
- Subtexto corto invitando al contacto
- Cards/botones grandes para cada canal:
  - 📧 **Email:** samueldeveloper20@gmail.com
  - 💼 **LinkedIn:** linkedin.com/in/samuel-graterol-lobo
  - 🐙 **GitHub:** github.com/s-amuel-18
- Botón **"Download CV"** prominente (versión ES + EN si hay dos versiones)

---

### 3.9 Footer

- Copyright `© 2026 Samuel Graterol`
- Links a redes (iconos pequeños)
- `"Built with Astro & ☕"` — toque personal

---

## 4. 🌍 Internacionalización (i18n)

- **Default:** Inglés (`/` o `/en/`)
- **Español:** `/es/`
- Implementado con `astro:i18n` nativo
- Todos los textos en archivos de traducción separados:

```
src/
└── i18n/
    ├── en.json
    └── es.json
```

- El JSON de data (`projects.json`, `experience.json`, etc.) tendrá campos `en` y `es` por separado
- El toggle EN/ES en el navbar cambia la URL y persiste preferencia en `localStorage`

---

## 5. 🔍 SEO

### Meta tags (por página/idioma)

```html
<title>Samuel Graterol — Fullstack Developer | Backend Specialist</title>
<meta name="description" content="Samuel David Graterol Lobo — Fullstack Developer specialized in backend and software architecture. 4+ years of experience with Node.js, NestJS, TypeScript.">
<meta name="keywords" content="Samuel Graterol, Samuel Graterol Lobo, Fullstack Developer, Backend Developer, Node.js, NestJS, TypeScript, Venezuela">
<link rel="canonical" href="https://samuelgraterol.dev/">
```

### Open Graph (LinkedIn / WhatsApp previews)

```html
<meta property="og:title" content="Samuel Graterol — Fullstack Developer">
<meta property="og:description" content="Backend specialist with 4+ years building scalable systems.">
<meta property="og:image" content="/og-image.png">  <!-- 1200x630px branded -->
<meta property="og:url" content="https://samuelgraterol.dev">
<meta property="og:type" content="website">
```

### Twitter/X Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Samuel Graterol — Fullstack Developer">
<meta name="twitter:image" content="/og-image.png">
```

### Schema Markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samuel David Graterol Lobo",
  "jobTitle": "Fullstack Developer",
  "url": "https://samuelgraterol.dev",
  "sameAs": [
    "https://linkedin.com/in/samuel-graterol-lobo",
    "https://github.com/s-amuel-18"
  ],
  "knowsAbout": ["Node.js", "NestJS", "TypeScript", "React", "PostgreSQL"]
}
```

### Técnico

- `sitemap.xml` generado automáticamente con `@astrojs/sitemap`
- `robots.txt` permitiendo indexación completa
- Lighthouse score objetivo: **95+** en Performance, SEO y Accessibility
- Imágenes optimizadas con `<Image />` de Astro
- Fonts auto-hosted (no Google Fonts directo) para mejor performance

### Dominio recomendado

`samuelgraterol.dev` — `.dev` refuerza la identidad de desarrollador y es indexado naturalmente cuando se busca el nombre.

---

## 6. 📁 Estructura del Proyecto

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # 1200x630 — Open Graph image
│   ├── cv/
│   │   ├── samuel-graterol-cv-en.pdf
│   │   └── samuel-graterol-cv-es.pdf
│   └── images/
│       └── profile.jpg       # Foto del hero
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Experience.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Education.astro
│   │   │   └── Contact.astro
│   │   └── ui/               # Shadcn components
│   ├── data/
│   │   ├── profile.json      # Info personal
│   │   ├── experience.json   # Experiencia laboral
│   │   ├── skills.json       # Habilidades por categoría
│   │   ├── projects.json     # Proyectos seleccionados
│   │   └── education.json    # Formación
│   ├── i18n/
│   │   ├── en.json
│   │   └── es.json
│   ├── layouts/
│   │   └── BaseLayout.astro  # Head, SEO meta tags, fonts
│   ├── pages/
│   │   ├── index.astro       # /en/ (default)
│   │   └── es/
│   │       └── index.astro   # /es/
│   └── styles/
│       └── global.css        # Tailwind imports + CSS vars
├── astro.config.ts
├── tailwind.config.ts        # (si se necesita para extend)
├── tsconfig.json
└── package.json
```

---

## 7. ✨ Recomendaciones Adicionales

Cosas que agregarían valor significativo al portafolio y están alineadas con tu perfil:

### 🟢 Alta prioridad (recomendado implementar)

- **"Currently Available" badge** en el Hero — señal directa para reclutadores de que estás buscando oportunidades
- **Tech stack visual en el Hero** — fila de iconos de tus tecnologías principales debajo del tagline, muy común en portfolios modernos
- **Smooth scroll + scroll progress bar** — barra fina en el top de la página que muestra el progreso de lectura
- **404 page personalizada** — pequeño detalle que dice mucho del cuidado al detalle

### 🟡 Media prioridad (considera en v2)

- **Blog / Artículos técnicos** — Astro soporta MDX nativamente. Escribir aunque sea 2-3 artículos técnicos mejora masivamente el SEO y posiciona tu expertise
- **Testimonios / Recomendaciones** — si tienes contactos de Avila Tek o Vilotechnologies dispuestos a dar una recomendación escrita, una sección Testimonials añade credibilidad
- **GitHub Activity Graph** — una visualización del contribution graph de GitHub (usando `github-readme-stats` como imagen) en la sección Projects

### 🔵 Extras creativos

- **Cursor personalizado** — un cursor custom con glow azul sutil en desktop
- **Easter egg de terminal** — al escribir cierta secuencia de teclas aparece un "terminal" con datos del perfil (muy popular en portfolios de devs backend)
- **Modo "Recruiter"** — botón que colapsa el portfolio a solo la info más relevante para reclutadores (una idea diferenciadora)

---

## 8. 📅 Fases de Desarrollo Sugeridas

| Fase | Contenido | Estimado |
|------|-----------|---------|
| **Fase 1 — Setup** | Inicializar proyecto, configurar Astro + React + Tailwind + Shadcn, estructura de carpetas, i18n base | 1-2 días |
| **Fase 2 — Data Layer** | Crear todos los JSONs con la data real, configurar tipos TypeScript | 1 día |
| **Fase 3 — Layout & Hero** | BaseLayout, SEO meta tags, Header/Footer, sección Hero completa | 2-3 días |
| **Fase 4 — Secciones core** | About, Experience, Skills, Projects, Education, Contact | 3-4 días |
| **Fase 5 — Animaciones** | Framer Motion en todas las secciones, typing effect, counters, scroll progress | 1-2 días |
| **Fase 6 — i18n** | Traducir todos los textos, configurar routing EN/ES | 1-2 días |
| **Fase 7 — SEO & Performance** | Meta tags, OG image, Schema markup, Sitemap, optimización | 1 día |
| **Fase 8 — Deploy** | Configurar Vercel, dominio, variables de entorno | 1 día |

**Total estimado: ~2-3 semanas** trabajando en ratos libres.

---

## 9. 🔗 Referencias & Recursos

- [Astro Docs](https://docs.astro.build)
- [Shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Simple Icons](https://simpleicons.org/) — iconos de tecnologías
- [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Vercel Deploy Guide for Astro](https://vercel.com/docs/frameworks/astro)

---

*Documento creado: Marzo 2026 | Versión 1.0*
