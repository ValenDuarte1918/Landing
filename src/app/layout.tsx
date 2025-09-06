import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PopupWhatsapp, Navbar, Footer } from "@/components";
import { ToastProvider } from "@/components/ui";
import SkipLinks from "@/components/ui/SkipLinks";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const manrope = Manrope({ subsets: ["latin"] });

// Configuración dinámica de metadata usando variables de entorno
const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Arenados y Blasting";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arenadosyblasting.com";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@arenadosyblasting.com";

export const metadata: Metadata = {
  title: `${businessName} | Soluciones en tratamientos de superficies`,
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
    "Argentina"
  ].join(", "),
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  category: "Servicios Industriales",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://arenadosyblasting.com",
    title: "Arenados y Blasting | Soluciones en tratamientos de superficies",
    description: "Especialistas en preparación de superficies metálicas con más de 15 años de experiencia. Calidad y detalle en cada proyecto.",
    siteName: "Arenados y Blasting",
    images: [
      {
        url: `${siteUrl}/img/logo-redes.png`,
        width: 1200,
        height: 630,
        alt: "Arenados y Blasting - Especialistas en tratamientos de superficies",
        type: "image/png"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenados y Blasting | Tratamientos de Superficies",
    description: "Servicios profesionales de arenado, blasting y granallado con más de 15 años de experiencia.",
    images: [`${siteUrl}/img/logo-redes.png`],
  },
  alternates: {
    canonical: "https://arenadosyblasting.com",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  other: {
    // Prevenir traducción automática
    'google': 'notranslate',
    // Información de contacto estructurada
    'contact': contactEmail,
    'business:contact_data:street_address': 'Bella Vista, Buenos Aires',
    'business:contact_data:locality': 'Buenos Aires',
    'business:contact_data:region': 'Buenos Aires',
    'business:contact_data:country_name': 'Argentina',
    // Información de derechos de autor
    'copyright': '© 2024 Arenados y Blasting. Todos los derechos reservados.',
    // Schema.org markup
    'article:author': businessName,
    'article:publisher': businessName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth bg-snow"  suppressHydrationWarning>
        <head>
        <link rel="icon" href="/icon-page.svg" />
        
        {/* Preconnects críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload de imagen crítica del hero */}
        <link rel="preload" as="image" href="/img/hero3.webp" />
        
        {/* DNS prefetch para servicios externos */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        <style>{`
          /* Critical CSS inline para evitar bloqueo de renderizado */
          html, body { 
            scroll-behavior: smooth; 
            margin: 0; 
            padding: 0; 
            background-color: #001211;
            color: white;
            font-family: system-ui, -apple-system, sans-serif;
          }
          .font-loading { font-display: swap; }
          
          /* CSS crítico del hero */
          .min-h-screen { min-height: 100vh; }
          .relative { position: relative; }
          .absolute { position: absolute; }
          .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
          .z-10 { z-index: 10; }
          .z-20 { z-index: 20; }
          .flex { display: flex; }
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
          
          /* Evitar FOUC en navegación */
          nav { background-color: rgba(0, 18, 17, 0.95); }
          
          /* Loading states */
          .loading-skeleton {
            background: linear-gradient(90deg, #2B2B2B 25%, #404040 50%, #2B2B2B 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </head>
      <body className={`${manrope.className}`}>
        <SkipLinks />
        <ThemeProvider attribute="class">
          <ToastProvider>
            <Navbar />
            <main id="main-content" role="main">
              <div>{children}</div>
            </main>
            <Footer />
            <PopupWhatsapp />
            <CookieBanner />
          </ToastProvider>
        </ThemeProvider>
        <GoogleAnalytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Load fonts asynchronously to prevent render blocking
              (function() {
                const fontLinks = [
                  'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap',
                  'https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap'
                ];
                
                // Use requestIdleCallback for better performance
                const loadFonts = () => {
                  fontLinks.forEach(href => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    link.media = 'print';
                    link.onload = function() { 
                      this.media = 'all'; 
                    };
                    // Fallback for older browsers
                    link.onerror = function() {
                      this.media = 'all';
                    };
                    document.head.appendChild(link);
                  });
                };
                
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(loadFonts);
                } else {
                  setTimeout(loadFonts, 100);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
