/** @type {import('next').NextConfig} */
const nextConfig = {
  // Variables de entorno públicas expuestas al cliente
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevenir XSS
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevenir clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Protección XSS del navegador
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=()',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://wa.link https://www.instagram.com https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data: https: blob: https://maps.googleapis.com https://maps.gstatic.com https://www.google.com https://www.google-analytics.com https://ssl.gstatic.com;
              connect-src 'self' https://wa.link https://api.whatsapp.com https://maps.googleapis.com https://maps.gstatic.com https://www.google.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com;
              frame-src 'self' https://www.instagram.com https://wa.link https://www.google.com https://maps.google.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self' https://wa.link;
              upgrade-insecure-requests;
            `.replace(/\s+/g, ' ').trim(),
          },
        ],
      },
    ];
  },

  // Configuración adicional de seguridad
  poweredByHeader: false,
  compress: true,
  
  // Variables de entorno seguras
  env: {
    WHATSAPP_URL: process.env.WHATSAPP_URL || 'https://wa.link/lf75ot',
    INSTAGRAM_URL: process.env.INSTAGRAM_URL || 'https://www.instagram.com/arenados_y_blasting/',
  },
};

module.exports = nextConfig;