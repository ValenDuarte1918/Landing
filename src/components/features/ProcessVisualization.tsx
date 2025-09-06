"use client";
import React from "react";
import Image from "next/image";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Evaluación Inicial",
    description: "Analizamos las piezas y determinamos el mejor tratamiento según material y requerimientos.",
    image: "/img/img-motor-perfil-antes.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Preparación",
    description: "Preparamos las piezas y configuramos el equipo con los parámetros óptimos para cada trabajo.",
    image: "/img/img-preparacion.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Tratamiento",
    description: "Aplicamos el proceso de granallado, blasting o micro esferas según las especificaciones del proyecto.",
    image: "/img/img-garnet.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Control de Calidad",
    description: "Verificamos el acabado y la calidad del tratamiento para garantizar resultados excepcionales.",
    image: "/img/img-motor-perfil.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export function ProcessVisualization() {
  return (
    <section className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative p-8">
              <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6 animate-fade-in">
                Nuestro Proceso
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6 animate-fade-in font-industrial">
                Cómo trabajamos{" "}
                <span className="text-btn">paso a paso</span>
              </h2>
              <div className="w-24 h-1 bg-btn rounded-full mx-auto mb-8 animate-fade-in"></div>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto font-professional">
                Cada proyecto sigue un proceso riguroso que garantiza resultados de máxima calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-btn via-customBlue to-btn transform -translate-x-1/2"></div>
          
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative mb-16 lg:mb-24 ${
                index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:text-right'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Contenido */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  {/* Número del paso */}
                  <div className={`flex items-center gap-4 ${
                    index % 2 === 0 ? '' : 'lg:justify-end'
                  }`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-btn to-customBlue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-btn/30">
                      {step.id}
                    </div>
                    <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-btn border border-gray-700/50">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-industrial">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg font-professional">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Imagen */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    
                    {/* Overlay con número */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-btn/90 rounded-full flex items-center justify-center text-white font-bold text-sm backdrop-blur-sm">
                      {step.id}
                    </div>
                    
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Punto conector en la línea */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-btn rounded-full border-4 border-gray-900 shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessVisualization;
