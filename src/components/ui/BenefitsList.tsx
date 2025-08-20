import React from "react";

interface BenefitItemProps {
  text: string;
  delay?: number;
}

interface BenefitsListProps {
  benefits: string[];
  title?: string;
  accentColor?: string;
}

export function BenefitItem({ text, delay = 0 }: BenefitItemProps) {
  return (
    <li 
      className="flex items-start gap-3 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-6 h-6 bg-btn rounded-full flex items-center justify-center mt-1 flex-shrink-0">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

export function BenefitsList({ benefits, title = "Beneficios Clave", accentColor = "btn" }: BenefitsListProps) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 mb-16 hover:bg-gray-800/40 transition-all duration-300 animate-fade-in-up">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitItem 
            key={index}
            text={benefit}
            delay={index * 100 + 300}
          />
        ))}
      </ul>
    </div>
  );
}
