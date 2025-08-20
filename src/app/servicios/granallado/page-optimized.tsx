import React from "react";
import { 
  ServicePageLayout, 
  BenefitsList, 
  ProcessSection 
} from "@/components";

export default function GranalladoPage() {
  const benefits = [
    "Eliminación completa de óxido y contaminantes",
    "Preparación óptima para nuevos recubrimientos",
    "Mejora significativa de la adherencia",
    "Acabado uniforme y profesional",
    "Incremento notable de la durabilidad"
  ];

  const processSteps = [
    {
      number: 1,
      title: "Evaluación",
      description: "Análisis detallado de la superficie y selección del abrasivo adecuado"
    },
    {
      number: 2,
      title: "Preparación",
      description: "Acondicionamiento del área de trabajo y protección del entorno"
    },
    {
      number: 3,
      title: "Granallado",
      description: "Aplicación controlada del abrasivo con equipos de alta precisión"
    },
    {
      number: 4,
      title: "Inspección",
      description: "Verificación de calidad y acabado según estándares internacionales"
    }
  ];

  return (
    <ServicePageLayout
      title="Servicio de Granallado"
      subtitle="Granallado de Alta Precisión"
      description="Proceso especializado para la limpieza y preparación de superficies metálicas con los más altos estándares de calidad."
      badgeText="Tratamiento de Granallado"
      mainImageSrc="/img/imgGranallado.jpg"
      mainImageAlt="Proceso de Granallado"
      accentColor="btn"
    >
      {/* Beneficios usando el componente reutilizable */}
      <BenefitsList benefits={benefits} />

      {/* Proceso usando el componente reutilizable */}
      <ProcessSection steps={processSteps} />

      {/* Aplicaciones específicas - contenido único de esta página */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Aplicaciones Comunes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Estructuras Metálicas</h3>
            <p className="text-gray-300 text-sm">Vigas, columnas y marcos estructurales</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Maquinaria Industrial</h3>
            <p className="text-gray-300 text-sm">Equipos y componentes industriales</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-btn rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Superficies Especiales</h3>
            <p className="text-gray-300 text-sm">Tratamiento de superficies complejas</p>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
