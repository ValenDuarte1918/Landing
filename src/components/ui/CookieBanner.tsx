"use client";
import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4 z-50 animate-slide-up">
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