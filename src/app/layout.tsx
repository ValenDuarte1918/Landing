import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PopupWhatsapp, Navbar, Footer } from "@/components";
import { ToastProvider } from "@/components/ui";



const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arenados y Blasting | Tratamientos de Superficies",
  description: "Ofrecemos servicios de arenado y blasting para el tratamiento de superficies metálicas con más de 15 años de experiencia.",
  keywords: "arenado, blasting, granallado, zincado, tratamiento superficies, preparación metales",
  authors: [{ name: "Arenados y Blasting" }],
  creator: "Arenados y Blasting",
  publisher: "Arenados y Blasting",
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
    title: "Arenados y Blasting | Tratamientos de Superficies",
    description: "Servicios profesionales de arenado, blasting y granallado con más de 15 años de experiencia.",
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
      </head>
      <body className={`${manrope.className}`}>
        <ThemeProvider attribute="class">
          <ToastProvider>
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWhatsapp />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
