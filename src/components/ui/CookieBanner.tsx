"use client";
import React, { useState, useEffect } from 'react';
import { trackEvents } from '../analytics/trackEvents';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Para asegurar que funcione, esperamos un poco después del montaje
    const timer = setTimeout(() => {
      const cookieAccepted = localStorage.getItem('cookiesAccepted');
      if (!cookieAccepted || cookieAccepted === 'false') {
        setIsVisible(true);
      }
    }, 1000); // Esperamos 1 segundo para que la página cargue completamente

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    trackEvents.cookiesAccepted();
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    trackEvents.cookiesRejected();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-2 border-btn p-4 z-[9999] animate-slide-up shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-300 text-sm">
            🍪 Este sitio web utiliza cookies para mejorar tu experiencia de navegación. 
            Al continuar navegando, aceptas nuestro uso de cookies.
            {" "}
            <a 
              href="/politica-de-privacidad" 
              className="text-btn hover:text-btn/80 underline transition-colors"
            >
              Más información
            </a>
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 rounded-lg transition-all duration-300 hover:border-gray-500"
          >
            Rechazar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-btn hover:bg-btn/90 text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;