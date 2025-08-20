// === COLORES DEL TEMA ===
export const THEME_COLORS = {
  primary: '#3b82f6',     // btn
  secondary: '#1e40af',   // customBlue
  accent: '#10b981',      // green-500 (para zincado)
  neutral: '#1f2937',     // gray-800
  base: '#111827',        // gray-900
} as const;

// === CONFIGURACIONES DE ANIMACIÓN ===
export const ANIMATION_DURATION = {
  fast: '200ms',
  normal: '300ms',
  slow: '500ms',
  extraSlow: '700ms',
} as const;

// === BREAKPOINTS ===
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// === SERVICIOS ===
export const SERVICES = [
  {
    id: 'granallado',
    name: 'Granallado',
    path: '/servicios/granallado',
    color: 'btn',
    description: 'Proceso de limpieza y preparación de superficies metálicas'
  },
  {
    id: 'blasting',
    name: 'Blasting',
    path: '/servicios/blasting',
    color: 'customBlue',
    description: 'Tratamiento con micro esferas de vidrio para auto/moto'
  },
  {
    id: 'zincado',
    name: 'Zincado',
    path: '/servicios/zincado',
    color: 'green',
    description: 'Protección anticorrosiva de alta durabilidad'
  }
] as const;

// === INFORMACIÓN DE CONTACTO ===
export const CONTACT_INFO = {
  phone: '11-57491731',
  email: 'Procesosmet@hotmail.com',
  address: 'Salta 241, Bella Vista, Buenos Aires',
  whatsapp: 'https://wa.link/lf75ot',
  instagram: 'https://www.instagram.com/arenados_y_blasting/',
  facebook: 'https://www.facebook.com/share/1EVY87cVeg/'
} as const;
