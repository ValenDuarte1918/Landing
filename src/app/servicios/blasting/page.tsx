import React from "react";
import { Container } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

export default function BlastingPage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Elementos animados de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-customBlue/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-btn/10 rounded-full blur-lg animate-bounce slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-customBlue/5 rounded-full blur-2xl animate-ping slow"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-customBlue rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-btn rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-customBlue/50 rounded-full animate-float-slow"></div>
      </div>

      {/* Header con navegación mejorado */}
      <div className="bg-gray-800/80 backdrop-blur-sm py-4 border-b border-gray-700/50 relative z-10">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2 text-btn hover:text-btn/80 transition-all duration-300 transform hover:-translate-x-1">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="text-xl font-semibold text-white animate-slide-in-right">Servicio de Blasting</h1>
          </div>
        </Container>
      </div>

      <Container className="py-16 relative z-10">
        {/* Hero Section con animaciones 3D */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-customBlue/30 rounded-full mb-6 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-customBlue/50">
            <div className="w-2 h-2 bg-customBlue rounded-full animate-pulse"></div>
            <span className="text-customBlue font-medium text-sm tracking-wide">Tratamiento de Blasting</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-up">
            Blasting con{" "}
            <span className="text-customBlue font-bold">
              Micro Esferas de vidrio
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Proceso de terminación especializado con micro esferas de vidrio que 
            logra el brillo perfecto en piezas de auto y moto partes.
          </p>
        </div>

        {/* Imagen principal con efecto 3D */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 group animate-slide-in-up transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-customBlue/20">
          <div className="absolute inset-0 bg-gradient-to-r from-customBlue/20 to-btn/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src="/img/imgTrabajos4.webp"
            alt="Proceso de Blasting"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent group-hover:from-gray-900/40 transition-all duration-500"></div>
          
          {/* Elementos decorativos 3D */}
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-customBlue/30 rounded-full animate-spin-slow opacity-70"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border border-btn/30 rounded-lg rotate-45 animate-pulse"></div>
        </div>

        {/* Contenido principal con mejores márgenes y espaciado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-up hover-3d">
            <h2 className="text-3xl font-bold text-white mb-6">¿Qué es el Blasting con Micro Esferas?</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                El blasting con micro esferas de vidrio es un proceso de terminación 
                especializado que busca lograr el brillo perfecto en las piezas. 
                Utilizamos micro esferas de vidrio que, al impactar sobre la superficie, 
                crean un acabado uniforme y brillante.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nuestro foco principal está en <span className="text-btn font-semibold">piezas de auto y moto partes</span>, 
                aunque este proceso también se puede aplicar exitosamente en otros materiales metálicos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nos especializamos en el tratamiento de <span className="text-customBlue font-semibold">piezas medianas y chicas</span>, 
                garantizando un acabado de alta calidad y el brillo deseado en cada proyecto.
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 border border-gray-700/50 hover-3d card-hover animate-fade-in-delayed">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-customBlue to-blue-400 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Ventajas del Blasting con Micro Esferas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Acabado brillante y uniforme perfecto</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Eliminación de imperfecciones menores</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Textura suave y consistente en toda la pieza</span>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Aplicaciones con efectos 3D */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="glass-effect rounded-2xl p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-in-up">
            Aplicaciones Principales
            <div className="w-20 h-1 bg-gradient-to-r from-customBlue to-btn mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl hover-3d card-hover group animate-fade-in-up transition-all duration-500 hover:bg-gray-700/50 border border-gray-700/30 hover:border-customBlue/30">
              <div className="w-16 h-16 bg-gradient-to-r from-customBlue to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-customBlue/50">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-customBlue transition-colors duration-300">Piezas de Auto</h3>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Rines, espejos, manijas, emblemas y accesorios automotrices</p>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl hover-3d card-hover group animate-fade-in-up transition-all duration-500 hover:bg-gray-700/50 border border-gray-700/30 hover:border-btn/30 relative overflow-hidden" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-btn to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-btn/50">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-btn transition-colors duration-300">Piezas de Moto</h3>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Rines, tanques, guardabarros, accesorios y partes cromadas</p>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl hover-3d card-hover group animate-fade-in-up transition-all duration-500 hover:bg-gray-700/50 border border-gray-700/30 hover:border-purple-500/30 relative overflow-hidden" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Otros Materiales</h3>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Piezas metálicas medianas y chicas de diversos materiales</p>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </div>
          </div>
        </div>
        </div>

        {/* CTA Final con efectos 3D */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center glass-effect rounded-2xl p-10 border border-gray-700/50 hover-3d card-hover animate-fade-in-up relative overflow-hidden group">
          {/* Elementos decorativos animados */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-customBlue/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border border-btn/30 rounded-lg rotate-45 animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-customBlue/50 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-0 w-1 h-1 bg-btn/50 rounded-full animate-float-delayed"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-slide-in-up">
              ¿Tu pieza necesita un acabado{" "}
              <span className="text-customBlue font-bold animate-shimmer">
                brillante perfecto
              </span>?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
              Especialistas en blasting con micro esferas para piezas de auto y moto. 
              Contáctanos para darle el brillo que tu pieza merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.link/lf75ot"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center btn text-white font-medium text-base px-8 py-4 bg-gradient-to-r from-customBlue to-btn hover:from-customBlue/90 hover:to-btn/90 border border-customBlue shadow-lg hover:shadow-2xl hover:shadow-customBlue/25 transition-all duration-500 rounded-xl group/button transform hover:scale-105 hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2 group-hover/button:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
                </svg>
                Consultar proyecto
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700 rounded-xl"></div>
              </a>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center btn text-customBlue font-medium text-base px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 border border-customBlue/30 hover:border-customBlue shadow-lg hover:shadow-xl hover:shadow-customBlue/10 transition-all duration-500 rounded-xl group/button transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <svg className="w-4 h-4 mr-2 group-hover/button:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al inicio
                <div className="absolute inset-0 bg-gradient-to-r from-customBlue/0 via-customBlue/10 to-customBlue/0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700 rounded-xl"></div>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}
