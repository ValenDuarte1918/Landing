// Hook personalizado para manejar variables de entorno de forma centralizada
export const useEnvVars = () => {
  return {
    // Analytics
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
    gaDebug: process.env.NEXT_PUBLIC_GA_DEBUG === 'true',
    analyticsEnabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    
    // Contacto y redes sociales
    whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.link/lf75ot',
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/arenados_y_blasting/',
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@arenadosyblasting.com',
    phone: process.env.NEXT_PUBLIC_PHONE || '+54-XXX-XXX-XXXX',
    address: process.env.NEXT_PUBLIC_ADDRESS || 'Salta 241, Bella Vista, Buenos Aires',
    
    // Información del negocio
    businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Arenados y Blasting',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://arenadosyblasting.com',
    
    // Feature flags
    cookiesBannerEnabled: process.env.NEXT_PUBLIC_ENABLE_COOKIES_BANNER === 'true',
    whatsappPopupEnabled: process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_POPUP === 'true',
    
    // Configuración del entorno
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  };
};

// Función helper para validar variables de entorno críticas
export const validateEnvVars = () => {
  const requiredVars = [
    'NEXT_PUBLIC_WHATSAPP_URL',
    'NEXT_PUBLIC_CONTACT_EMAIL',
    'NEXT_PUBLIC_BUSINESS_NAME'
  ];
  
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn('Variables de entorno faltantes:', missing);
  }
  
  return missing.length === 0;
};

// Configuración de SEO basada en variables de entorno
export const getSEOConfig = () => {
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Arenados y Blasting';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arenadosyblasting.com';
  
  return {
    title: `${businessName} | Soluciones en tratamientos de superficies`,
    description: 'Especialistas en preparación de superficies metálicas. Arenado y blasting para talleres, restauradores y mecánicos.',
    url: siteUrl,
    siteName: businessName,
    images: [
      {
        url: `${siteUrl}/img/logo2.webp`,
        width: 1200,
        height: 630,
        alt: businessName,
      }
    ],
    locale: 'es_AR',
    type: 'website',
  };
};
