/** @type {import('next').NextConfig} */
const nextConfig = {
  // Variables de entorno públicas expuestas al cliente
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Configuración de compresión
  compress: true,
  
  // Optimizaciones de rendimiento mejoradas
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
    gzipSize: true,
    optimizeServerReact: true,
    serverComponentsExternalPackages: ['sharp'],
  },
  
  // Webpack optimizations más agresivas
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones solo para producción
    if (!dev) {
      // Optimizaciones de splitting más agresivas
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            maxSize: 200000,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 10,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 5,
          },
          nextThemes: {
            test: /[\\/]node_modules[\\/]next-themes[\\/]/,
            name: 'next-themes',
            chunks: 'all',
            priority: 5,
          },
          ui: {
            test: /[\\/]src[\\/]components[\\/]ui[\\/]/,
            name: 'ui-components',
            chunks: 'all',
            priority: 6,
          },
        },
      };
      
      // Optimizaciones adicionales para client-side
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          tls: false,
        };
      }
    }
    
    // Optimizaciones de módulos
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Optimización para CSS - evitar syntax errors
    if (!dev) {
      config.optimization.minimizer = config.optimization.minimizer || [];
      
      // Configuración específica para CSS
      const cssMinimizer = config.optimization.minimizer.find(
        minimizer => minimizer.constructor.name === 'CssMinimizerPlugin'
      );
      
      if (cssMinimizer) {
        cssMinimizer.options = {
          ...cssMinimizer.options,
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeCharset: false,
                // Evitar minificación agresiva que pueda causar syntax errors
                mergeLonghand: false,
                mergeRules: false,
              },
            ],
          },
        };
      }
    }
    
    return config;
  },
  
  // Configuración de imágenes optimizada
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 horas
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers de seguridad y cache
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*\\.(?:woff2|woff|eot|ttf|otf))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          // Cache optimizado para páginas
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
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