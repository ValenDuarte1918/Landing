import React from "react";
import { Container } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

export default function ZincadoPage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Elementos animados de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-lg animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl animate-ping-slow"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-green-500/30 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-500/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-green-500/20 rounded-full animate-float-slow"></div>
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
            <h1 className="text-xl font-semibold text-white animate-slide-in-right">Servicio de Zincado</h1>
          </div>
        </Container>
      </div>

      <Container className="py-16 relative z-10">
        {/* Hero Section con animaciones 3D */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-full mb-6 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-green-500/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 font-medium text-sm tracking-wide">Zincado Protectivo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-up">
            Zincado de{" "}
            <span className="text-green-500 font-bold">Máxima Protección</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Recubrimiento protector especializado que garantiza resistencia superior 
            contra la corrosión y el desgaste en el tiempo.
          </p>
        </div>

        {/* Imagen principal con efecto 3D */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 group animate-slide-in-up transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src="/img/1.jpg"
            alt="Proceso de Zincado"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent group-hover:from-gray-900/40 transition-all duration-500"></div>
          
          {/* Elementos decorativos 3D */}
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-green-500/30 rounded-full animate-spin-slow opacity-70"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border border-emerald-500/30 rounded-lg rotate-45 animate-pulse"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">¿Qué es el Zincado?</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                El zincado es un proceso de recubrimiento especializado que aplica 
                una capa protectora de zinc sobre superficies metálicas. Este tratamiento 
                crea una barrera efectiva contra la corrosión, oxidación y otros agentes 
                externos que pueden dañar el metal base.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ideal para estructuras expuestas al ambiente, piezas industriales y 
                componentes mecánicos que requieren protección duradera y confiable. 
                El zincado extiende significativamente la vida útil de tus materiales.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Beneficios del Zincado</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Protección superior contra la corrosión</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Resistencia a productos químicos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Extensión significativa de vida útil</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Excelente relación costo-beneficio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tipos de zincado */}
        <div className="bg-gray-800/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tipos de Zincado</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Zincado Electrolítico</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Proceso que utiliza electricidad para depositar una capa uniforme de zinc. 
                Ideal para piezas pequeñas y medianas que requieren acabado preciso y control 
                del espesor de la capa protectora.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Zincado por Inmersión</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Método que sumerge las piezas en zinc fundido, creando una capa más gruesa 
                y resistente. Perfecto para estructuras grandes y elementos que estarán 
                expuestos a condiciones ambientales severas.
              </p>
            </div>
          </div>
        </div>

        {/* Aplicaciones comunes */}
        <div className="bg-gray-800/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Aplicaciones Comunes</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Torres y Estructuras</h4>
              <p className="text-gray-300 text-sm">Protección de estructuras metálicas exteriores</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Componentes Mecánicos</h4>
              <p className="text-gray-300 text-sm">Piezas de maquinaria y equipos industriales</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Herrajes</h4>
              <p className="text-gray-300 text-sm">Tornillos, tuercas y elementos de fijación</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Tuberías</h4>
              <p className="text-gray-300 text-sm">Sistemas de conducción y distribución</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            ¿Necesitas protección duradera para tus materiales?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            El zincado es la solución ideal para garantizar la longevidad de tus estructuras 
            y componentes metálicos. Consulta con nuestros especialistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/lf75ot"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center btn text-white font-medium text-base px-8 py-3 bg-green-500 hover:bg-green-600 border border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
              </svg>
              Solicitar cotización
            </a>
            <Link
              href="/"
              className="btn text-green-500 font-medium text-base px-8 py-3 bg-gray-700/50 hover:bg-gray-700 border border-green-500/30 hover:border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
