import React from "react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  steps: ProcessStep[];
  accentColor?: string;
}

export function ProcessSection({ 
  title = "Nuestro Proceso", 
  steps, 
  accentColor = "btn" 
}: ProcessSectionProps) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 mb-16 animate-fade-in-up">
      <h2 className="text-3xl font-bold text-white mb-8 text-center font-industrial">{title}</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className="text-center group animate-fade-in"
            style={{ animationDelay: `${index * 200 + 500}ms` }}
          >
            <div className={`w-16 h-16 bg-${accentColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-${accentColor}/25`}>
              <span className="text-white font-bold text-xl">{step.number}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-btn transition-colors duration-300 font-industrial">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 font-professional">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
