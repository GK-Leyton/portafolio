# Heider Leyton — Portafolio

Portafolio personal de **Heider Sait Leyton Montiel**, desarrollador Full Stack basado en Bogotá, Colombia.

> Sitio construido con Next.js 16, TypeScript y Tailwind CSS v4. Diseño minimalista con dark/light mode, animaciones sutiles y formulario de contacto funcional.

---

## Stack técnico

- **Framework:** [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- **Lenguaje:** TypeScript
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com) con variante `light:` custom
- **Fuentes:** Geist Sans, Geist Mono, Instrument Serif (via `next/font`)
- **Iconos:** [Lucide React](https://lucide.dev) + SVGs inline para marcas
- **Email:** [Nodemailer](https://nodemailer.com) con Gmail SMTP

---

## Secciones

- **Hero** — Presentación con CodeCard estilo terminal y syntax highlighting
- **Sobre mí** — Bio, monograma, datos rápidos y formación
- **Proyectos** — Grid con filtros por categoría (Empresarial, Personal, Académico, Proyecto de grado)
- **Stack** — Tecnologías por categoría + marquee animado
- **Experiencia** — Timeline laboral
- **Contacto** — Formulario con validación cliente + envío vía Nodemailer
- **Dark/Light mode** — Persistido en localStorage

---

## Estructura

```
portafolio/
├── app/
│   ├── api/contact/route.ts    # Endpoint del formulario
│   ├── globals.css             # Estilos custom y animaciones
│   ├── layout.tsx              # Layout raíz con fuentes
│   ├── page.tsx                # Composición de secciones
│   └── theme-provider.tsx      # Context para dark/light
├── components/
│   ├── Nav.tsx                 # Navegación con scroll spy
│   ├── Hero.tsx                # Sección principal
│   ├── CodeCard.tsx            # Terminal con código tokenizado
│   ├── About.tsx
│   ├── Projects.tsx            # Con filtros por tag
│   ├── Stack.tsx               # + Marquee
│   ├── Experience.tsx          # Timeline
│   ├── Contact.tsx             # Form + info directa
│   ├── Footer.tsx
│   ├── Section.tsx             # Wrapper reutilizable
│   ├── Chip.tsx                # Tags de tecnologías
│   └── BrandIcons.tsx          # GitHub / LinkedIn SVG
└── lib/
    └── data.ts                 # Datos del portafolio (tipados)
```

---

## Desarrollo local

### Requisitos

- Node.js 18.18+ o 20+
- npm

### Instalación

```bash
git clone https://github.com/GK-Leyton/portafolio.git
cd portafolio
npm install
```

### Variables de entorno

Crea un archivo `.env.local` en la raíz:

```env
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASSWORD=tu_app_password_de_16_caracteres
```

> La contraseña debe ser una **App Password** de Google (con 2FA activado).
> Obtenerla en: https://myaccount.google.com/apppasswords

Si no configuras estas variables, el formulario funciona pero no envía correos (solo loguea en consola).

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` |
| `npm run dev:network` | Servidor accesible desde la red local |
| `npm run build` | Build de producción |
| `npm run start` | Ejecutar el build de producción |
| `npm run lint` | Análisis estático con ESLint |

---

## Personalización

Toda la información del portafolio vive en un solo archivo:

```
lib/data.ts
```

Allí están: nombre, contacto, pitch, stats, experiencias, proyectos, stack y formación. Editar este archivo actualiza todo el sitio.

---

## Deploy

El sitio está pensado para desplegar en [Vercel](https://vercel.com):

1. Importa el repo en Vercel.
2. Agrega las variables `EMAIL_USER` y `EMAIL_PASSWORD` en *Project Settings → Environment Variables*.
3. Deploy.

---

## Contacto

- **Email:** heiderleyton22@gmail.com
- **LinkedIn:** [heider-sait-leyton-montiel](https://linkedin.com/in/heider-sait-leyton-montiel)
- **GitHub:** [@GK-Leyton](https://github.com/GK-Leyton)

---

## Licencia

Código abierto bajo licencia MIT. Siéntete libre de usar la estructura como base — solo no copies los contenidos personales.
