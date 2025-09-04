/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para deployment estático en Hostinger
  output: 'export',
  trailingSlash: true,
  
  // Configuración de imágenes para export estático
  images: {
    unoptimized: true, // Necesario para export estático
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  
  // Configuración adicional
  poweredByHeader: false,
  
  // Variables de entorno
  env: {
    WHATSAPP_URL: process.env.WHATSAPP_URL || 'https://wa.link/lf75ot',
    INSTAGRAM_URL: process.env.INSTAGRAM_URL || 'https://www.instagram.com/arenados_y_blasting/',
  },
};

module.exports = nextConfig;