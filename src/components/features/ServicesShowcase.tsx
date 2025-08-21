'use client';

import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { Settings, Zap, Shield, Flame } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const ServiceCard = ({ icon, title, description, features, href }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' 
      : '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
    config: { mass: 1, tension: 300, friction: 30 },
  });

  const contentSpring = useSpring({
    opacity: isHovered ? 1 : 0.8,
    transform: isHovered ? 'translateX(0px)' : 'translateX(-5px)',
    config: { mass: 1, tension: 300, friction: 30 },
  });

  const iconSpring = useSpring({
    transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
    color: isHovered ? '#3b82f6' : '#60a5fa',
    config: { mass: 1, tension: 300, friction: 30 },
  });

  return (
    <animated.div
      style={cardSpring}
      className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 cursor-pointer overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(href, '_blank')}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-btn/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <animated.div style={iconSpring} className="mb-6">
        <div className="w-16 h-16 bg-btn/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </animated.div>

      {/* Content */}
      <animated.div style={contentSpring}>
        <h3 className="text-2xl font-bold text-white mb-4 font-industrial">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 font-professional leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400 text-sm">
              <div className="w-1.5 h-1.5 bg-btn rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center text-btn hover:text-blue-400 transition-colors duration-300">
          <span className="font-medium">Conocer más</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </animated.div>
    </animated.div>
  );
};

const ServicesShowcase = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Granallado Industrial',
      description: 'Limpieza profunda y preparación de superficies metálicas con tecnología de granalla.',
      features: [
        'Eliminación de óxido y pintura',
        'Preparación para recubrimientos',
        'Acabado uniforme y profesional',
        'Equipos de última generación'
      ],
      href: '/servicios/granallado'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Blasting Especializado',
      description: 'Técnicas avanzadas de arenado para restauración y mantenimiento industrial.',
      features: [
        'Arenado de precisión',
        'Restauración de piezas',
        'Diversos abrasivos disponibles',
        'Control de calidad riguroso'
      ],
      href: '/servicios/blasting'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Zincado Protectivo',
      description: 'Recubrimientos galvánicos para máxima protección contra la corrosión.',
      features: [
        'Protección anticorrosiva',
        'Acabados duraderos',
        'Procesos certificados',
        'Garantía de calidad'
      ],
      href: '/servicios/zincado'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Soldaduras Especiales',
      description: 'Servicios especializados de soldadura para reparación y refuerzo de piezas industriales.',
      features: [
        'Soldadura TIG y MIG',
        'Reparación de piezas críticas',
        'Soldaduras de alta resistencia',
        'Certificación de calidad'
      ],
      href: '#contacto'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-industrial">
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-professional">
            Soluciones integrales en tratamiento de superficies con la más alta calidad y tecnología
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
