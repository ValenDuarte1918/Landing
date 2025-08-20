import React, {Suspense} from "react";
import { Container, Hero, SectionTitle, Testimonials } from "@/components";
import { ScrollAnimation } from "@/components/ui";
import AppleCardsCarouselDemo from "@/components/features/card";
import Link from "next/link";
import  LayoutGridDemo from "@/components/features/cardsData";


export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Elementos animados de fondo */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-customBlue/5 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-btn/5 rounded-full blur-lg animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-customBlue/3 rounded-full blur-2xl animate-ping-slow"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-customBlue/30 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-btn/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-customBlue/20 rounded-full animate-float-slow"></div>
      </div>

      <Container className="relative z-10">
        <Hero />
        
        {/* Sección Sobre Nosotros Renovada con animaciones */}
        <section id="nosotros" className="relative py-20 bg-gray-900 animate-fade-in-up">
          <Container className="relative z-10">
            {/* Header de la sección - Diseño consistente */}
            <div className="text-center mb-16 animate-slide-in-up">
            <div className="relative max-w-4xl mx-auto hover-3d">
              {/* Fondo sutil consistente */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative p-8 glass-effect rounded-3xl border border-gray-700/30">
                {/* PreTitle consistente */}
                <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6 animate-fade-in-delayed">
                  Sobre Nosotros
                </div>

                {/* Título principal con el estilo de la página */}
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6 animate-slide-in-up">
                  Enfocados en la{" "}
                  <span className="text-btn">calidad y el servicio</span>
                </h2>

                {/* Línea decorativa simple */}
                <div className="w-24 h-1 bg-gradient-to-r from-btn to-customBlue rounded-full mx-auto mb-8 animate-fade-in-delayed"></div>

                {/* Descripción con estilo consistente */}
                <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto animate-fade-in-delayed">
                  Somos una empresa familiar con más de{" "}
                  <span className="font-medium text-gray-100">15 años de trayectoria</span>, 
                  especializada en el tratamiento de superficies metálicas.
                </p>
              </div>
            </div>
          </div>

          {/* Grid principal */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Lado izquierdo - Historia y valores */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-btn/30 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-btn rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Nuestra Misión</h3>
                    <p className="text-gray-300 leading-relaxed font-light">
                      Brindar soluciones eficientes con altos estándares de calidad y una atención 
                      cercana que prioriza las necesidades de cada cliente. Transformamos superficies 
                      con precisión técnica y compromiso profesional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-btn/30 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-customBlue rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Nuestro Compromiso</h3>
                    <p className="text-gray-300 leading-relaxed font-light">
                      Cada proyecto refleja nuestro compromiso con la excelencia, utilizando 
                      técnicas avanzadas y equipamiento de última generación. Tu éxito es nuestro objetivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado derecho - Imagen destacada */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 h-full">
                <div className="relative h-64 lg:h-full min-h-[300px] rounded-xl overflow-hidden">
                  <img 
                    src="/img/img-sobreNosotros.jpg" 
                    alt="Equipo profesional trabajando"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/18 rounded-xl p-2">
                      <p className="text-white font-medium text-sm leading-relaxed">
                        Calidad y detalle en cada proyecto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas destacadas */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-16">
            <h3 className="text-xl font-semibold text-white mb-8 text-center font-sans">Números que nos respaldan</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600/30">
                <div className="text-3xl font-bold text-btn mb-2 font-sans">+500</div>
                <div className="text-gray-300 font-medium text-sm">Proyectos completados</div>
              </div>
              <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600/30">
                <div className="text-3xl font-bold text-customBlue mb-2 font-sans">15+</div>
                <div className="text-gray-300 font-medium text-sm">Años de experiencia</div>
              </div>
              <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600/30">
                <div className="text-3xl font-bold text-green-400 mb-2 font-sans">100%</div>
                <div className="text-gray-300 font-medium text-sm">Satisfacción garantizada</div>
              </div>
              <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600/30">
                <div className="text-3xl font-bold text-orange-400 mb-2 font-sans">50+</div>
                <div className="text-gray-300 font-medium text-sm">Clientes satisfechos</div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">
              ¿Listo para transformar tu proyecto?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Contáctanos hoy y descubre por qué somos la elección preferida para proyectos de granallado y blasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.link/lf75ot"
                target="_blank"
                rel="noopener"
                className="btn text-white font-medium text-base px-8 py-3 bg-btn hover:bg-btn/90 border border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                Solicitar consulta
              </a>
              <a
                href="#servicios"
                className="btn text-btn font-medium text-base px-8 py-3 bg-gray-700/50 hover:bg-gray-700 border border-btn/30 hover:border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                Ver nuestros servicios
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Sección Servicios Rediseñada */}
      <section id="servicios" className="relative py-20 bg-gray-800">
        <Container className="relative z-10">
          {/* Header de la sección - Diseño consistente */}
          <div className="text-center mb-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Fondo sutil consistente */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative p-8">
                {/* PreTitle consistente */}
                <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6">
                  Servicios
                </div>

                {/* Título principal con el estilo de la página */}
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
                  Nuestros{" "}
                  <span className="text-btn">Servicios Especializados</span>
                </h2>

                {/* Línea decorativa simple */}
                <div className="w-24 h-1 bg-btn rounded-full mx-auto mb-8"></div>

                {/* Descripción con estilo consistente */}
                <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
                  Brindamos soluciones integrales para el tratamiento y cuidado de superficies metálicas. 
                  Cada servicio está diseñado para satisfacer las necesidades específicas de tu proyecto.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Servicio 1 - Granallado */}
            <Link href="/servicios/granallado" className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500 block">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgGranallado.jpg" 
                  alt="Servicio de Granallado"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-btn rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 font-sans">Granallado</h3>
                <p className="text-gray-300 leading-relaxed font-light mb-6">
                  Proceso esencial para la limpieza y preparación de superficies metálicas. 
                  Eliminamos óxido, pintura vieja e impurezas, dejando la superficie perfecta para tratamientos posteriores.
                </p>
                <div className="flex items-center text-btn font-medium text-sm">
                  <span>Ver detalles</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Servicio 2 - Blasting */}
            <Link href="/servicios/blasting" className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500 block">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgTrabajos4.webp" 
                  alt="Servicio de Blasting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-customBlue rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 font-sans">Blasting</h3>
                <p className="text-gray-300 leading-relaxed font-light mb-6">
                  Técnica avanzada de limpieza con abrasivos especializados. 
                  Ideal para remover recubrimientos resistentes y preparar superficies para acabados de alta calidad.
                </p>
                <div className="flex items-center text-btn font-medium text-sm">
                  <span>Ver detalles</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Servicio 3 - Zincado */}
            <Link href="/servicios/zincado" className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500 block">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/1.jpg" 
                  alt="Servicio de Zincado"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 font-sans">Zincado</h3>
                <p className="text-gray-300 leading-relaxed font-light mb-6">
                  Recubrimiento protector que garantiza resistencia contra la corrosión. 
                  Perfecto para estructuras expuestas y componentes que requieren máxima durabilidad.
                </p>
                <div className="flex items-center text-btn font-medium text-sm">
                  <span>Ver detalles</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA section */}
          <div className="text-center bg-gray-900/50 rounded-2xl p-10 border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Cada proyecto es único. Contáctanos para una consulta gratuita y encontraremos la solución perfecta para tus necesidades.
            </p>
            <a
              href="https://wa.link/lf75ot"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center btn text-white font-medium text-base px-8 py-3 bg-btn hover:bg-btn/90 border border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
              </svg>
              Consulta gratuita por WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Sección Trabajos Rediseñada */}
      <section id="trabajos" className="relative py-20 bg-gray-900">
        <Container className="relative z-10">
          {/* Header de la sección - Diseño consistente */}
          <div className="text-center mb-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Fondo sutil consistente */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative p-8">
                {/* PreTitle consistente */}
                <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6">
                  Portfolio
                </div>

                {/* Título principal con el estilo de la página */}
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
                  Nuestros{" "}
                  <span className="text-btn">Trabajos Realizados</span>
                </h2>

                {/* Línea decorativa simple */}
                <div className="w-24 h-1 bg-btn rounded-full mx-auto mb-8"></div>

                {/* Descripción con estilo consistente */}
                <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
                  Descubre algunos de los proyectos que hemos realizado con precisión y dedicación. 
                  Cada trabajo refleja nuestro compromiso con la calidad y el detalle.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de trabajos mejorado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Trabajo 1 */}
            <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/prueba-6.webp" 
                  alt="Proyecto de Granallado Industrial"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">Blasting motor armado</h3>
                    <p className="text-gray-200 text-sm">Tratamiento de blasting a motor armado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trabajo 2 */}
            <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgTrabajos1.jpg" 
                  alt="Blasting de Estructuras"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">Arenado de embragues</h3>
                    <p className="text-gray-200 text-sm">Limpieza para embragues. Ideal para la preparación de superficies antes del pintado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trabajo 3 */}
            <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgTrabajos2.jpg" 
                  alt="Zincado Protectivo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">Blasting a piezas de motos</h3>
                    <p className="text-gray-200 text-sm">Aplicación de blasting a piezas de motos para volver a dejar las piezas como nuevas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trabajo 4 */}
            <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgTrabajos3.jpg" 
                  alt="Restauración de Maquinaria"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">Restauración de carburadores</h3>
                    <p className="text-gray-200 text-sm">Recuperación completa de carburadores para un rendimiento óptimo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trabajo 5 */}
            <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgTrabajos4.webp" 
                  alt="Preparación de Tanques"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">Preparacion de motores desarmados</h3>
                    <p className="text-gray-200 text-sm">Tratamiento especializado de blasting para motores desarmados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trabajo 6 */}
            <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/imgTrabajos5.jpg" 
                  alt="Acabados Especializados"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">Acabados Especializados</h3>
                    <p className="text-gray-200 text-sm">Aplicación de recubrimientos de zincado de alta calidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Únete a nuestros clientes satisfechos. Contáctanos para discutir tu proyecto 
              y recibir una cotización personalizada.
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
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="btn text-btn font-medium text-base px-8 py-3 bg-gray-700/50 hover:bg-gray-700 border border-btn/30 hover:border-btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Testimonials />

      {/* Sección de Ubicación y Contacto - Estructura Mejorada */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-btn/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-customBlue/10 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          {/* Header de la sección - Consistente con el diseño general */}
          <div className="text-center mb-20">
            <div className="relative max-w-4xl mx-auto">
              {/* Fondo sutil consistente con otras secciones */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative p-8">
                {/* PreTitle consistente */}
                <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6">
                  Encuéntranos
                </div>

                {/* Título principal con el estilo de la página */}
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
                  Nuestra Ubicación
                </h2>

                {/* Línea decorativa simple */}
                <div className="w-24 h-1 bg-btn rounded-full mx-auto mb-8"></div>

                {/* Descripción con estilo consistente */}
                <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
                  Ponete en contacto con nosotros. 
                  Estamos listos para atender tus proyectos.
                </p>
              </div>
            </div>
          </div>

          {/* Grid principal - Diseño mejorado */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            
            {/* Mapa - Ocupa más espacio con diseño atractivo */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="relative group">
                {/* Decoración antes del mapa */}
                <div className="absolute -inset-4 bg-gradient-to-r from-btn/20 to-customBlue/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
                
                <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-700/30 shadow-2xl group-hover:shadow-btn/20 transition-all duration-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.35591504147695!2d-58.66728186614326!3d-34.561286108999916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd75b953ab7f%3A0x3da2356c1cd88ef4!2sArenados%20y%20blasting!5e0!3m2!1ses-419!2sar!4v1735069880782!5m2!1ses-419!2sar"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  
                  {/* Badge animado sobre el mapa */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-btn to-btn/80 rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-sm">Estamos Aquí</span>
                    </div>
                  </div>

                  {/* Indicador de dirección */}
                  <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-white text-xs font-medium">Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Información lateral - Diseño vertical atractivo */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
              
              {/* Header de información */}
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Información de Contacto</h3>
                <div className="w-16 h-1 bg-btn rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Horarios - Diseño mejorado */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-btn/20 to-transparent rounded-xl blur-xl group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-btn/20 rounded-xl group-hover:bg-btn/30 transition-colors duration-300">
                      <svg className="w-6 h-6 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg tracking-wide">Horarios</h4>
                      <div className="w-8 h-0.5 bg-btn rounded-full mt-1"></div>
                    </div>
                  </div>
                  <div className="space-y-3 font-medium pl-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lunes a Viernes</span>
                      <span className="text-btn font-bold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sábados</span>
                      <span className="text-btn font-bold">9:00 - 13:00</span>
                    </div>
                    <div className="text-sm text-gray-400 pt-2 border-t border-gray-700/50">
                    </div>
                  </div>
                </div>
              </div>

              {/* Ubicación - Diseño mejorado */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-customBlue/20 to-transparent rounded-xl blur-xl group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-customBlue/20 rounded-xl group-hover:bg-customBlue/30 transition-colors duration-300">
                      <svg className="w-6 h-6 text-customBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg tracking-wide">Ubicación</h4>
                      <div className="w-8 h-0.5 bg-customBlue rounded-full mt-1"></div>
                    </div>
                  </div>
                  <div className="space-y-3 font-medium pl-2">
                    <div>
                      <span className="text-gray-300 block">Bella Vista, Buenos Aires</span>
                      <span className="text-customBlue font-bold text-lg">Argentina</span>
                    </div>
                    <div className="text-sm text-gray-400 pt-2 border-t border-gray-700/50 space-y-1">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Botón de contacto con diseño especial */}
          <div className="text-center relative">
            {/* Decoración del botón */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-64 h-20 bg-btn/20 rounded-full blur-2xl"></div>
            
            <Link 
              href="https://wa.link/lf75ot" 
              className="relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-btn via-btn to-btn/80 hover:from-btn/90 hover:via-btn hover:to-btn/70 text-white font-bold text-xl tracking-wide rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-btn/30 transform hover:scale-105 border border-btn/30 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              <span className="relative">Contáctanos Ahora</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </Container>
      </section>
      

      
    </Container>
    </div>
  );
};

 function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}