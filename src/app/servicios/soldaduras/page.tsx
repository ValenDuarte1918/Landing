import React from "react";
import { Container } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

export default function SoldadurasPage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Elementos animados de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-500/10 rounded-full blur-lg animate-bounce slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl animate-ping slow"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-orange-500 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-500 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-yellow-500/50 rounded-full animate-float-slow"></div>
      </div>

      {/* Header con navegación mejorado */}
      <div className="bg-gray-800/80 backdrop-blur-sm py-4 border-b border-gray-700/50 relative z-10">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-all duration-300 transform hover:-translate-x-1">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="text-xl font-semibold text-white animate-slide-in-right">Servicio de Soldaduras Especiales</h1>
          </div>
        </Container>
      </div>

      <Container className="py-16 relative z-10">
        {/* Hero Section con animaciones mejoradas */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 rounded-full mb-6 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-orange-500/50">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-500 font-medium text-sm tracking-wide">Soldaduras Especializadas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-up">
            Soldaduras{" "}
            <span className="text-orange-500 font-bold">
              Especiales
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Servicios especializados de soldadura para reparación, refuerzo y fabricación 
            de piezas con la más alta calidad y precisión.
          </p>
        </div>

        {/* Imagen principal con efecto 3D */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 group animate-slide-in-up transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src="/img/img-soldadura.jpg"
            alt="Proceso de Soldadura Especial"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent group-hover:from-gray-900/40 transition-all duration-500"></div>
          
          {/* Elementos decorativos 3D */}
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-orange-500/30 rounded-full animate-spin-slow opacity-70"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border border-red-500/30 rounded-lg rotate-45 animate-pulse"></div>
        </div>

        {/* Contenido principal con mejor espaciado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-up hover-3d">
            <h2 className="text-3xl font-bold text-white mb-6">Soldaduras Especiales en Aluminio Automotriz</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                Nos especializamos en soldaduras especiales para autos y motos, 
                en particular <span className="text-orange-500 font-semibold">soldaduras de aluminio</span> 
                para tapas de cilindro, culatas, blocks de motor y reconstrucción de piezas medianas y chicas 
                que requieren soldadura TIG.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Realizamos <span className="text-red-500 font-semibold">reconstrucción completa de piezas</span> 
                como tapas de cilindro fisuradas, reparación de roscas dañadas, soldadura de cárteres 
                agrietados y restauración de componentes críticos del motor que han sufrido desgaste o roturas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nuestro enfoque en <span className="text-yellow-500 font-semibold">piezas pequeñas y medianas</span> 
                incluye soldadura TIG especializada en aluminio, mecanizado post-soldadura y acabados 
                que devuelven a las piezas sus especificaciones originales de fábrica.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Especialidades Automotrices</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Soldadura de tapas de cilindro en aluminio</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Reconstrucción de culatas y blocks de motores</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Reparación de cárteres y piezas de motor</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Reconstrucción de piezas pequeñas y medianas</span>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Tipos de soldadura */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gray-800/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Técnicas Especializadas en Aluminio</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Soldadura TIG en Aluminio</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Técnica especializada para reparación de componentes de aluminio automotriz.
                Utilizamos gas argón puro y electrodo de tungsteno para garantizar soldaduras limpias
                sin contaminación en aluminio.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Reparación de tapas de cilindro</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Proceso especializado para reparar fisuras, grietas y deformaciones en 
                tapas de cilindro. Incluye preparación de superficie, soldadura de precisión 
                y acabado que mantiene las propiedades estructurales originales de la tapa.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            ¿Necesitas soldaduras especializadas de alta calidad?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos para evaluar tu proyecto. Ofrecemos soldaduras TIG, MIG y técnicas 
            especiales con certificación de calidad garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/lf75ot"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center btn text-white font-medium text-base px-8 py-3 bg-orange-500 hover:bg-orange-600 border border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
              </svg>
              Solicitar presupuesto
            </a>
            <Link
              href="/"
              className="btn text-orange-500 font-medium text-base px-8 py-3 bg-gray-700/50 hover:bg-gray-700 border border-orange-500/30 hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
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
