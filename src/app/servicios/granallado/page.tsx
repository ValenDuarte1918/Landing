import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export default function GranalladoPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header con navegación */}
      <div className="bg-gray-800 py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-btn hover:text-btn/80 transition-colors">
              ← Volver al inicio
            </Link>
            <h1 className="text-xl font-semibold text-white">Servicio de Granallado</h1>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-btn/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-btn rounded-full"></div>
            <span className="text-btn font-medium text-sm tracking-wide">Granallado Profesional</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Granallado de{" "}
            <span className="text-btn">Alta Precisión</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proceso especializado para la limpieza y preparación de superficies metálicas 
            con los más altos estándares de calidad.
          </p>
        </div>

        {/* Imagen principal */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <Image
            src="/img/imgGranallado.jpg"
            alt="Proceso de Granallado"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">¿Qué es el Granallado?</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                El granallado es un proceso esencial para la limpieza y preparación de 
                superficies metálicas. A través de la proyección controlada de partículas 
                abrasivas, eliminamos óxido, pintura vieja, incrustaciones y cualquier tipo 
                de impureza que pueda afectar la calidad del acabado final.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Este proceso no solo limpia la superficie, sino que también crea el perfil 
                de rugosidad ideal para una adhesión óptima de pinturas, recubrimientos 
                protectores y otros tratamientos posteriores.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Beneficios del Granallado</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-btn rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Eliminación completa de óxido y corrosión</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-btn rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Preparación óptima para nuevos recubrimientos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-btn rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Mejora significativa de la adherencia</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-btn rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Acabado uniforme y profesional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Proceso paso a paso */}
        <div className="bg-gray-800/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Evaluación</h3>
              <p className="text-gray-300 text-sm">Análisis detallado de la superficie y selección del abrasivo adecuado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Preparación</h3>
              <p className="text-gray-300 text-sm">Protección del área de trabajo y configuración del equipo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Granallado</h3>
              <p className="text-gray-300 text-sm">Aplicación controlada del proceso con supervisión constante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Control de Calidad</h3>
              <p className="text-gray-300 text-sm">Inspección final y verificación de estándares</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            ¿Necesitas un presupuesto para granallado?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos para una evaluación gratuita de tu proyecto. Te brindaremos 
            un presupuesto detallado y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/lf75ot"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center btn text-white font-medium text-base px-8 py-3 bg-btn hover:bg-btn/90 border border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
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
      </Container>
    </div>
  );
}
