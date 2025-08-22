# 🏭 Arenados y Blasting - Landing Page

<div align="center">
  <img src="public/img/logo2.webp" alt="Arenados y Blasting Logo" width="200"/>
  
  **Sitio web profesional para servicios de tratamiento de superficies metálicas**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![DaisyUI](https://img.shields.io/badge/DaisyUI-4-1AD1A5?style=flat-square)](https://daisyui.com/)
</div>

---

## 🎯 **Descripción del Proyecto**

Landing page moderna y responsive para **Arenados y Blasting**, empresa especializada en tratamientos de superficies metálicas. El sitio incluye información detallada sobre servicios de arenado, granallado, zincado y soldaduras especiales.

### ✨ **Características Principales**

- 🎨 **Diseño Moderno**: UI/UX contemporáneo con animaciones fluidas
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Construido con Next.js 14 y optimizaciones avanzadas
- 🔍 **SEO Optimizado**: Meta tags, structured data y performance optimizado
- 📞 **WhatsApp Integration**: Popup inteligente para contacto directo
- 🖼️ **Comparador Antes/Después**: Componente interactivo para mostrar resultados
- 🎭 **Animaciones Avanzadas**: Efectos visuales con Framer Motion

---

## 🚀 **Demo en Vivo**

🌐 **[Ver Sitio Web](https://arenadosyblasting.netlify.app/)**

---

## 📋 **Servicios Incluidos**

| Servicio | Descripción | Página |
|----------|-------------|---------|
| 🔥 **Arenado/Blasting** | Preparación de superficies con abrasivos | `/servicios/blasting` |
| ⚙️ **Granallado** | Limpieza y preparación con granalla de acero | `/servicios/granallado` |
| 🛡️ **Zincado** | Protección anticorrosiva galvanizada | `/servicios/zincado` |
| 🔧 **Soldaduras Especiales** | Soldaduras de aluminio para automovilismo | `/servicios/soldaduras` |

---

## 🛠️ **Stack Tecnológico**

### **Frontend**
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Heroicons](https://heroicons.com/)

### **Optimizaciones**
- **Imágenes**: Next.js Image Optimization
- **Fonts**: Google Fonts (Manrope)
- **Bundle**: Webpack 5 con optimizaciones automáticas
- **SEO**: Next.js Metadata API

---

## 🚀 **Instalación y Desarrollo**

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn
- Git

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/ValenDuarte1918/Landing.git
cd Landing
```

### **2. Instalar Dependencias**
```bash
npm install
# o
yarn install
```

### **3. Ejecutar en Desarrollo**
```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 **Estructura del Proyecto**

```
src/
├── app/                          # App Router (Next.js 14)
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página de inicio
│   └── servicios/               # Páginas de servicios
│       ├── blasting/
│       ├── granallado/
│       ├── soldaduras/
│       └── zincado/
├── components/                   # Componentes reutilizables
│   ├── features/                # Componentes de funcionalidades
│   │   ├── BeforeAfterComparison.tsx
│   │   ├── ServicesShowcase.tsx
│   │   └── ProcessVisualization.tsx
│   ├── layout/                  # Componentes de layout
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/                # Secciones de página
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   └── Testimonials.tsx
│   └── ui/                      # Componentes UI básicos
├── constants/                   # Constantes de la aplicación
├── data/                        # Datos estáticos
├── styles/                      # Estilos adicionales
├── types.ts                     # Definiciones de tipos
└── utils/                       # Utilidades y helpers
```
