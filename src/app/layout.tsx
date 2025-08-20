import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import  PopupWhatsapp  from "@/components/PopupWhatsapp";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";



const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arenados y Blasting | Tratamientos de Superficies",
  description: "Ofrecemos servicios de arenado y blasting para el tratamiento de superficies.",
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
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWhatsapp />
        </ThemeProvider>
      </body>
    </html>
  );
}
