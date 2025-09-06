import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PopupWhatsapp, Navbar, Footer } from "@/components";
import { ToastProvider } from "@/components/ui";
import SkipLinks from "@/components/ui/SkipLinks";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const manrope = Manrope({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-manrope',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
});

// Configuración dinámica de metadata usando variables de entorno
const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Arenados y Blasting";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arenadosyblasting.com";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@arenadosyblasting.com";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#39D7D7' },
    { media: '(prefers-color-scheme: dark)', color: '#001211' }
  ],
  colorScheme: 'dark light',
  viewportFit: 'cover'
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessName} | Soluciones en tratamientos de superficies`,
    template: `%s | ${businessName}`
  },
  description: "Especialistas en preparación de superficies metálicas con más de 15 años de experiencia. Servicios de arenado, blasting, granallado y zincado en Buenos Aires. Calidad garantizada para talleres y restauradores.",
  keywords: [
    "arenado",
    "blasting", 
    "granallado",
    "zincado",
    "tratamiento superficies",
    "preparación metales",
    "talleres",
    "restauración",
    "limpieza superficies",
    "Buenos Aires",
    "Argentina",
    "sandblasting",
    "anticorrosivo",
    "pintura industrial"
  ],
  authors: [{ name: businessName, url: siteUrl }],
  creator: businessName,
  publisher: businessName,
  category: "Servicios Industriales",
  classification: "Industrial Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["es_ES", "es"],
    url: siteUrl,
    title: `${businessName} | Soluciones en tratamientos de superficies`,
    description: "Especialistas en preparación de superficies metálicas con más de 15 años de experiencia. Calidad y detalle en cada proyecto.",
    siteName: businessName,
    images: [
      {
        url: `${siteUrl}/img/logo-redes.png`,
        width: 1200,
        height: 630,
        alt: `${businessName} - Especialistas en tratamientos de superficies`,
        type: "image/png"
      },
      {
        url: `${siteUrl}/img/hero3.webp`,
        width: 1920,
        height: 1080,
        alt: "Servicios profesionales de tratamiento de superficies metálicas",
        type: "image/webp"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessName} | Tratamientos de Superficies`,
    description: "Servicios profesionales de arenado, blasting y granallado con más de 15 años de experiencia.",
    images: [`${siteUrl}/img/logo-redes.png`],
    creator: "@arenadosblasting",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'es-AR': siteUrl,
      'es': siteUrl,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  manifest: "/manifest.json",
  other: {
    // Prevenir traducción automática
    'google': 'notranslate',
    // Información de contacto estructurada
    'contact': contactEmail,
    'business:contact_data:street_address': 'Salta 241, Bella Vista, Buenos Aires',
    'business:contact_data:locality': 'Buenos Aires',
    'business:contact_data:region': 'Buenos Aires',
    'business:contact_data:postal_code': '1661',
    'business:contact_data:country_name': 'Argentina',
    'business:contact_data:phone_number': '+54 11 5749-1731',
    'business:contact_data:email': contactEmail,
    // Información de derechos de autor
    'copyright': `© ${new Date().getFullYear()} ${businessName}. Todos los derechos reservados.`,
    // Schema.org markup
    'article:author': businessName,
    'article:publisher': businessName,
    // PWA metadata
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': businessName,
    'application-name': businessName,
    'msapplication-TileColor': '#001211',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`!scroll-smooth bg-snow ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Favicon y iconos */}
        <link rel="icon" href="/icon-page.svg" type="image/svg+xml" />
        <link rel="icon" href="/img/logo2.webp" type="image/webp" sizes="any" />
        <link rel="apple-touch-icon" href="/img/logo2.webp" />
        
        {/* Preconnects críticos - mejorado */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        
        {/* DNS prefetch para servicios externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteUrl}/#business`,
              "name": businessName,
              "description": "Especialistas en preparación de superficies metálicas con más de 15 años de experiencia",
              "url": siteUrl,
              "logo": `${siteUrl}/img/logo2.webp`,
              "image": [
                `${siteUrl}/img/hero3.webp`,
                `${siteUrl}/img/logo-redes.png`
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Salta 241",
                "addressLocality": "Bella Vista",
                "addressRegion": "Buenos Aires",
                "postalCode": "1661",
                "addressCountry": "AR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-11-5749-1731",
                "contactType": "customer service",
                "email": contactEmail,
                "availableLanguage": "Spanish"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.5619,
                "longitude": -58.6671
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "seriesAggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "47"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -34.5619,
                  "longitude": -58.6671
                },
                "geoRadius": "100000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Tratamiento de Superficies",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Granallado",
                      "description": "Limpieza de superficies mediante granalla de acero"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Blasting",
                      "description": "Preparación de superficies mediante chorro abrasivo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Soldaduras",
                      "description": "Soldaduras especializadas para piezas metálicas"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Zincado",
                      "description": "Protección anticorrosiva mediante zincado"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        <style suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `
          /* Critical CSS inline para evitar bloqueo de renderizado */
          :root {
            --font-manrope: '__Manrope_73ee6c', '__Manrope_Fallback_73ee6c', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
          }
          
          html, body { 
            scroll-behavior: smooth; 
            margin: 0; 
            padding: 0; 
            background-color: #001211;
            color: white;
            font-family: var(--font-manrope), system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }
          
          /* CSS crítico del hero y layout principal */
          .min-h-screen { min-height: 100vh; min-height: 100dvh; }
          .relative { position: relative; }
          .absolute { position: absolute; }
          .fixed { position: fixed; }
          .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
          .z-10 { z-index: 10; }
          .z-20 { z-index: 20; }
          .flex { display: flex; }
          .grid { display: grid; }
          .items-center { align-items: center; }
          .justify-center { justify-content: center; }
          .text-center { text-align: center; }
          .text-white { color: white; }
          .bg-black\\/75 { background-color: rgba(0, 0, 0, 0.75); }
          .overflow-hidden { overflow: hidden; }
          .w-full { width: 100%; }
          .h-full { height: 100%; }
          .object-cover { object-fit: cover; }
          .pt-16 { padding-top: 4rem; }
          
          /* Tailwind base crítico */
          *, ::before, ::after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb;
          }
          
          /* Loading states mejorados */
          .loading-skeleton {
            background: linear-gradient(90deg, #2B2B2B 25%, #404040 50%, #2B2B2B 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          
          /* Animaciones de foco mejoradas para accesibilidad */
          .focus-visible:focus {
            outline: 2px solid #39D7D7;
            outline-offset: 2px;
            border-radius: 0.375rem;
          }
          
          /* Optimización para reduced motion */
          @media (prefers-reduced-motion: reduce) {
            *, ::before, ::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
            
            html {
              scroll-behavior: auto;
            }
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          
          /* Mejoras para navegación con teclado */
          .skip-link:focus {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999;
            padding: 0.5rem 1rem;
            background: #1e40af;
            color: white;
            text-decoration: none;
            border-radius: 0 0 0.5rem 0;
          }
        `}} />
      </head>
      <body className={`${manrope.className} font-sans`}>
        <SkipLinks />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ToastProvider>
            <Navbar />
            <main id="main-content" role="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <PopupWhatsapp />
            <CookieBanner />
          </ToastProvider>
        </ThemeProvider>
        <GoogleAnalytics />
        
        {/* Optimización de carga de fuentes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker registration para PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
              // Optimización de carga de recursos no críticos
              (function() {
                // Cargar fuentes adicionales de forma asíncrona
                const loadNonCriticalResources = () => {
                  const fontLinks = [
                    'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap',
                    'https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap'
                  ];
                  
                  fontLinks.forEach(href => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    link.media = 'print';
                    link.onload = function() { 
                      this.media = 'all'; 
                    };
                    link.onerror = function() {
                      this.media = 'all';
                    };
                    document.head.appendChild(link);
                  });
                };
                
                // Usar requestIdleCallback si está disponible
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(loadNonCriticalResources, { timeout: 2000 });
                } else {
                  setTimeout(loadNonCriticalResources, 100);
                }
                
                // Prefetch de páginas importantes
                const prefetchPages = ['/servicios/granallado', '/servicios/blasting'];
                
                const handleIntersection = (entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      prefetchPages.forEach(page => {
                        const link = document.createElement('link');
                        link.rel = 'prefetch';
                        link.href = page;
                        document.head.appendChild(link);
                      });
                      observer.disconnect();
                    }
                  });
                };
                
                // Iniciar prefetch cuando el usuario llegue al final de la página
                const observer = new IntersectionObserver(handleIntersection, {
                  rootMargin: '200px',
                  threshold: 0.1
                });
                
                window.addEventListener('load', () => {
                  const footer = document.querySelector('footer');
                  if (footer) observer.observe(footer);
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
