import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PopupWhatsapp, Navbar, Footer } from "@/components";
import { ToastProvider } from "@/components/ui";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const manrope = Manrope({ subsets: ["latin"] });

// Configuración dinámica de metadata usando variables de entorno
const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Arenados y Blasting";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arenadosyblasting.com";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@arenadosyblasting.com";

export const metadata: Metadata = {
  title: `${businessName} | Soluciones en tratamientos de superficies`,
  description: "Especialistas en preparación de superficies metálicas. Arenado y blasting para talleres, restauradores y mecánicos.",
  keywords: "arenado, blasting, granallado, zincado, tratamiento superficies, preparación metales, talleres, restauración",
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://arenadosyblasting.com",
    title: "Arenados y Blasting | Soluciones en tratamientos de superficies",
    description: "Especialistas en preparación de superficies metálicas. Calidad y detalle en cada proyecto.",
    siteName: "Arenados y Blasting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenados y Blasting | Tratamientos de Superficies",
    description: "Servicios profesionales de arenado, blasting y granallado.",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  other: {
    // Prevenir traducción automática
    'google': 'notranslate',
    // Información de contacto
    'contact': 'info@arenadosyblasting.com',
    // Información de derechos de autor
    'copyright': '© 2024 Arenados y Blasting. Todos los derechos reservados.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.className}`}>
        <ThemeProvider attribute="class">
          <ToastProvider>
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWhatsapp />
            <CookieBanner />
          </ToastProvider>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
