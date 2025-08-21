import React from "react";
import { Container } from "./Container";
import Link from "next/link";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  accentColor?: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  badgeText,
  accentColor = "btn", // Color por defecto
  children
}: ServicePageLayoutProps) {
  
  // Determinar colores según el tipo de servicio
  const getAccentColors = () => {
    switch (accentColor) {
      case "green":
        return {
          primary: "green-500",
          secondary: "emerald-500",
          primaryOpacity: "green-500/10",
          secondaryOpacity: "emerald-500/10",
          primaryBorder: "green-500/30",
          primaryHover: "green-500/50"
        };
      case "blue":
        return {
          primary: "customBlue",
          secondary: "btn",
          primaryOpacity: "customBlue/10",
          secondaryOpacity: "btn/10",
          primaryBorder: "customBlue/30",
          primaryHover: "customBlue/50"
        };
      default: // btn
        return {
          primary: "btn",
          secondary: "customBlue",
          primaryOpacity: "btn/10",
          secondaryOpacity: "customBlue/10",
          primaryBorder: "btn/30",
          primaryHover: "btn/50"
        };
    }
  };

  const colors = getAccentColors();

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Elementos animados de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 bg-${colors.primaryOpacity} rounded-full blur-xl animate-pulse-slow`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 bg-${colors.secondaryOpacity} rounded-full blur-lg animate-bounce-slow`}></div>
        <div className={`absolute bottom-32 left-1/4 w-40 h-40 bg-${colors.primaryOpacity} rounded-full blur-2xl animate-ping-slow`}></div>
        
        {/* Partículas flotantes */}
        <div className={`absolute top-1/3 left-1/5 w-2 h-2 bg-${colors.primary}/30 rounded-full animate-float`}></div>
        <div className={`absolute top-1/2 right-1/3 w-1 h-1 bg-${colors.secondary}/30 rounded-full animate-float-delayed`}></div>
        <div className={`absolute bottom-1/3 left-2/3 w-3 h-3 bg-${colors.primary}/20 rounded-full animate-float-slow`}></div>
      </div>

      {/* Header con navegación */}
      <div className="bg-gray-800/80 backdrop-blur-sm py-4 border-b border-gray-700/50 relative z-10">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2 text-btn hover:text-btn/80 transition-all duration-300 transform hover:-translate-x-1">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="text-xl font-semibold text-white animate-slide-in-right font-industrial">{title}</h1>
          </div>
        </Container>
      </div>

      <Container className="py-16 relative z-10">
        {/* Hero Section con animaciones 3D */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 border border-${colors.primaryBorder} rounded-full mb-6 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-${colors.primaryHover}`}>
            <div className={`w-2 h-2 bg-${colors.primary} rounded-full animate-pulse`}></div>
            <span className={`text-${colors.primary} font-medium text-sm tracking-wide`}>{badgeText}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-up font-industrial">
            {subtitle.split(' ').map((word, index) => {
              // Resaltar la última palabra o palabras específicas
              if (index === subtitle.split(' ').length - 1 || word.includes('Precisión') || word.includes('Vidrio') || word.includes('Protección')) {
                return <span key={index} className={`text-${colors.primary} font-bold`}>{word} </span>;
              }
              return <span key={index}>{word} </span>;
            })}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed font-professional">
            {description}
          </p>
        </div>

        {/* Contenido dinámico */}
        {children}

        {/* CTA Section - Reutilizable */}
        <div className="text-center glass-effect rounded-2xl p-10 border border-gray-700/50 hover-3d card-hover animate-fade-in-up relative overflow-hidden group">
          {/* Elementos decorativos animados */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className={`absolute top-4 right-4 w-8 h-8 border-2 border-${colors.primary}/30 rounded-full animate-spin-slow`}></div>
            <div className={`absolute bottom-4 left-4 w-6 h-6 border border-${colors.secondary}/30 rounded-lg rotate-45 animate-pulse`}></div>
            <div className={`absolute top-1/2 left-0 w-2 h-2 bg-${colors.primary}/50 rounded-full animate-float`}></div>
            <div className={`absolute top-1/3 right-0 w-1 h-1 bg-${colors.secondary}/50 rounded-full animate-float-delayed`}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-industrial">
              ¿Necesitas este servicio?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light font-professional">
              Contáctanos para una consulta gratuita y obtén el mejor tratamiento para tus materiales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.link/lf75ot"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center btn text-white font-medium text-base px-8 py-3 bg-btn hover:bg-btn/90 border border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group/button"
              >
                <svg className="w-5 h-5 mr-2 group-hover/button:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                </svg>
                Solicitar presupuesto
              </a>
              <Link
                href="/"
                className="btn text-btn font-medium text-base px-8 py-3 bg-gray-700/50 hover:bg-gray-700 border border-btn/30 hover:border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
