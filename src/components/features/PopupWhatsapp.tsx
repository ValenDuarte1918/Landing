"use client";

import React, { useState, useEffect } from "react";
import { safeOpenUrl, isValidUrl } from "@/utils/security";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  // Mostrar el botón después de un pequeño delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const currentTime = Date.now();
    const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.link/lf75ot';
    const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Arenados y Blasting';
    
    // Rate limiting simple (máximo 5 clicks por minuto)
    if (currentTime - lastClickTime < 60000) {
      if (clickCount >= 5) {
        console.warn('Demasiados clicks en WhatsApp. Intenta más tarde.');
        return;
      }
      setClickCount(prev => prev + 1);
    } else {
      setClickCount(1);
      setLastClickTime(currentTime);
    }
    
    // Validar URL antes de abrir
    if (!isValidUrl(whatsappUrl)) {
      console.error('URL de WhatsApp no válida');
      return;
    }
    
    // Abrir URL de forma segura
    safeOpenUrl(whatsappUrl);
    
    // Analytics seguro (sin datos personales)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_button'
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 filter drop-shadow-lg drop-shadow-green-500/20">
      {/* Botón principal */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative group
          w-16 h-16 
          bg-gradient-to-br from-green-500 to-green-600 
          hover:from-green-400 hover:to-green-500
          rounded-full 
          shadow-lg shadow-green-500/40 hover:shadow-2xl hover:shadow-green-500/60
          transition-all duration-300 ease-out
          transform hover:scale-110 active:scale-95
          border-2 border-green-300/30 hover:border-green-300/50
          ${isVisible ? 'animate-bounce' : 'opacity-0 scale-0'}
        `}
        style={{
          animation: isVisible ? 'bounce 1s ease-out 0.5s forwards, pulse 2s infinite 2s' : undefined
        }}
      >
        {/* Onda de pulso de fondo */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:opacity-40"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-15 animation-delay-500"></div>
        
        {/* Icono de WhatsApp */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <svg 
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
          </svg>
        </div>

        {/* Efecto de brillo al hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-green-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full animation-delay-200"></div>
      </button>

      {/* Tooltip mejorado */}
      <div className={`
        absolute right-20 top-1/2 transform -translate-y-1/2
        bg-green-600/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg
        text-sm font-medium whitespace-nowrap
        border border-green-500/50 shadow-xl
        transition-all duration-300 ease-out
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
      `}>
        ¡Chatea con nosotros!
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-green-600 rotate-45 border-r border-b border-green-500/50"></div>
      </div>

      {/* Indicador de mensaje nuevo (opcional) */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center animate-pulse border-2 border-green-200 shadow-lg shadow-green-400/50">
        <span className="text-green-900 text-xs font-bold">1</span>
      </div>
    </div>
  );
};

export default FloatingButton;