"use client";
import { useEffect, useState } from "react";

const SkipLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const skipLinks = [
    { href: "#main-content", text: "Ir al contenido principal" },
    { href: "#navigation", text: "Ir a la navegación" },
    { href: "#servicios", text: "Ir a servicios" },
    { href: "#contacto", text: "Ir a contacto" },
    { href: "#footer", text: "Ir al pie de página" }
  ];

  const handleSkipClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Enfocar el elemento para lectores de pantalla
      (element as HTMLElement).focus();
    }
  };

  return (
    <nav 
      role="navigation" 
      aria-label="Enlaces de accesibilidad"
      className={`fixed top-0 left-0 z-[9999] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="flex flex-wrap gap-1 p-2 bg-blue-900 shadow-lg">
        {skipLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleSkipClick(link.href);
              }}
              className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 transition-all duration-200 transform hover:scale-105"
              onFocus={() => setIsVisible(true)}
              onBlur={(e) => {
                // Solo ocultar si el foco sale de todos los skip links
                if (!e.currentTarget.parentElement?.parentElement?.contains(e.relatedTarget as Node)) {
                  setIsVisible(false);
                }
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SkipLinks;
