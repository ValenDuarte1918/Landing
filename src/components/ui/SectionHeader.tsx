import React from "react";
import { Container } from "@/components/layout";

interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  description?: string;
  highlightWord?: string; // Palabra a resaltar en el título
  centered?: boolean;
  className?: string;
  animate?: boolean;
}

export function SectionHeader({
  preTitle,
  title,
  description,
  highlightWord,
  centered = true,
  className = "",
  animate = true
}: SectionHeaderProps) {
  
  // Función para resaltar palabras específicas en el título
  const renderTitle = () => {
    if (!highlightWord) {
      return title;
    }
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-btn">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  const baseClasses = centered ? "text-center" : "text-left";
  const animationClasses = animate ? "animate-fade-in-up" : "";

  return (
    <div className={`${baseClasses} mb-16 ${animationClasses} ${className}`}>
      <div className={`relative ${centered ? "max-w-4xl mx-auto" : ""}`}>
        {/* Fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
        
        <div className="relative p-8">
          {/* PreTitle */}
          {preTitle && (
            <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6 animate-fade-in animation-delay-300">
              {preTitle}
            </div>
          )}

          {/* Título principal */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6 animate-fade-in animation-delay-500">
            {renderTitle()}
          </h2>

          {/* Línea decorativa */}
          {centered && (
            <div className="w-24 h-1 bg-btn rounded-full mx-auto mb-8 animate-fade-in animation-delay-700"></div>
          )}

          {/* Descripción */}
          {description && (
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-1000">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

interface PageSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  backgroundColor?: "gray-900" | "gray-800" | "gradient";
  withContainer?: boolean;
}

export function PageSection({ 
  id, 
  className = "", 
  children, 
  backgroundColor = "gray-900",
  withContainer = true 
}: PageSectionProps) {
  const bgClasses = {
    "gray-900": "bg-gray-900",
    "gray-800": "bg-gray-800", 
    "gradient": "bg-gradient-to-b from-gray-900 to-gray-800"
  };

  const sectionClasses = `relative py-20 ${bgClasses[backgroundColor]} ${className}`;

  if (withContainer) {
    return (
      <section id={id} className={sectionClasses}>
        <Container className="relative z-10">
          {children}
        </Container>
      </section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
}
