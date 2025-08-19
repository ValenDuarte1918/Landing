"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Throttle scroll para mejor performance
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.navbar-start') && !target.closest('[data-menu-overlay]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Cerrar menú al hacer click en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  const navigation = [
    { name: "Inicio", id: "inicio" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Servicios", id: "servicios" },
    { name: "Trabajos", id: "trabajos" },
  ];

  return (
    <>
      <div
        className={`navbar fixed top-0 w-full z-50 h-20 will-change-transform transition-all duration-300 ease-out ${
          isScrolled 
            ? "bg-customBlue/30 backdrop-blur-md shadow-lg border-b border-white/20 transform translate3d(0,0,0)" 
            : "bg-customBlue/20 backdrop-blur-sm transform translate3d(0,0,0)"
        }`}
        style={{ contain: 'layout style paint' }}
      >
      {/* Menú hamburguesa - solo móvil, izquierda */}
      <div className="navbar-start lg:navbar-start">
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost text-white hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200 will-change-transform hover:scale-105"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
              />
            </svg>
          </button>
        </div>
        
        {/* Logo en desktop - izquierda */}
        <Link href="/" className=" hover:bg-transparent p-2 hidden lg:flex transition-transform duration-200 hover:scale-105 will-change-transform">
          <Image
            src="/img/logo2.webp"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </Link>
      </div>

      {/* Logo en móvil - centro */}
      <div className="navbar-center lg:hidden">
        <Link href="/" className=" hover:bg-transparent p-2 transition-transform duration-200 hover:scale-105 will-change-transform">
          <Image
            src="/img/logo2.webp"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </Link>
      </div>

      {/* Navbar Center - Menú desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">
          {navigation.map((menu, index) => (
            <li key={index}>
              <Link
                href={`#${menu.id}`}
                className="text-white hover:text-white hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200 ease-out text-lg font-medium px-4 py-2 rounded-lg will-change-transform hover:scale-105 hover:shadow-md"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End - Botón de contacto */}
      <div className="navbar-end">
        <Link
          href="https://wa.link/lf75ot"
          className="btn hidden lg:flex text-white font-semibold text-base px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-200 ease-out will-change-transform hover:scale-105"
        >
          Presupuestos
        </Link>
      </div>
      </div>

      {/* Overlay Menu para móvil */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[99] bg-black/30 backdrop-blur-sm"
          onClick={closeMenu}
          data-menu-overlay
        >
          <div 
            className="fixed top-20 left-4 right-4 bg-customBlue/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <nav>
                <ul className="space-y-4">
                  {navigation.map((menu, index) => (
                    <li key={index}>
                      <Link 
                        href={`#${menu.id}`} 
                        onClick={closeMenu}
                        className="block text-white hover:text-white hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200 ease-out text-lg font-medium py-4 px-4 rounded-lg will-change-transform hover:scale-105 hover:shadow-md"
                      >
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <Link
                    href="https://wa.link/lf75ot"
                    onClick={closeMenu}
                    className="btn w-full text-white font-semibold text-lg py-4 bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-200 hover:scale-105 will-change-transform hover:shadow-lg"
                  >
                    Presupuestos
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};