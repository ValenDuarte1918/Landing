import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export default function BlastingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header con navegación */}
      <div className="bg-gray-800 py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-btn hover:text-btn/80 transition-colors">
              ← Volver al inicio
            </Link>
            <h1 className="text-xl font-semibold text-white">Servicio de Blasting</h1>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-customBlue/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-customBlue rounded-full"></div>
            <span className="text-customBlue font-medium text-sm tracking-wide">Blasting Especializado</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Blasting de{" "}
            <span className="text-customBlue">Máxima Potencia</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Técnica avanzada de limpieza con abrasivos especializados para 
            los trabajos más exigentes y superficies más resistentes.
          </p>
        </div>

        {/* Imagen principal */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <Image
            src="/img/imgTrabajos4.webp"
            alt="Proceso de Blasting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">¿Qué es el Blasting?</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                El blasting es una técnica avanzada de limpieza que utiliza abrasivos 
                especializados proyectados a alta presión para remover recubrimientos 
                resistentes, óxido severo y contaminantes difíciles de eliminar con 
                métodos convencionales.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Este proceso es ideal para estructuras industriales, tanques, puentes 
                y cualquier superficie que requiera una preparación de máximo nivel 
                para acabados de alta calidad y larga duración.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Ventajas del Blasting</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Remoción de recubrimientos más resistentes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Mayor eficiencia en proyectos grandes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Preparación superior para recubrimientos especiales</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-customBlue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Resultados en tiempo récord</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Aplicaciones */}
        <div className="bg-gray-800/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Aplicaciones Principales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl">
              <div className="w-16 h-16 bg-customBlue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Estructuras Industriales</h3>
              <p className="text-gray-300 text-sm">Tanques, silos, estructuras metálicas de gran envergadura</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl">
              <div className="w-16 h-16 bg-customBlue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Puentes y Viaductos</h3>
              <p className="text-gray-300 text-sm">Preparación para mantenimiento de infraestructura vial</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl">
              <div className="w-16 h-16 bg-customBlue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Maquinaria Pesada</h3>
              <p className="text-gray-300 text-sm">Equipos industriales, maquinaria de construcción</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            ¿Tu proyecto requiere blasting especializado?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos para evaluar tu proyecto. Nuestro equipo especializado te 
            brindará la mejor solución para tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/lf75ot"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center btn text-white font-medium text-base px-8 py-3 bg-customBlue hover:bg-customBlue/90 border border-customBlue shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
              </svg>
              Consultar proyecto
            </a>
            <Link
              href="/"
              className="btn text-customBlue font-medium text-base px-8 py-3 bg-gray-700/50 hover:bg-gray-700 border border-customBlue/30 hover:border-customBlue shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
