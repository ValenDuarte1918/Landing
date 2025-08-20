import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    { name: "Inicio", id: "inicio" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Servicios", id: "servicios" },
    { name: "Trabajos", id: "trabajos" },
    { name: "Ubicación", id: "ubicacion" },
  ];

  const services = [
    { name: "Granallado", href: "/servicios/granallado" },
    { name: "Blasting", href: "/servicios/blasting" },
    { name: "Zincado", href: "/servicios/zincado" },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-btn/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-customBlue/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          
          {/* Columna 1 - Logo y contacto básico */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/img/logo2.webp"
                width={100}
                height={100}
                alt="Arenados y Blasting"
                className="h-28 w-28"
              />
            </Link>
                      
            <p className="text-gray-400 text-sm">
              Empresa familiar con más de{" "}
              <span className="text-btn font-medium">15 años de experiencia</span>
              <span className="text-gray-400"> especializada en el tratamiento de superficies metálicas.</span>
            </p>

            {/* Contacto compacto */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">11-57491731</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-customBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">Procesosmet@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-btn transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-gray-300 hover:text-btn transition-colors duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 3 - Redes sociales y ubicación */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1EVY87cVeg/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Facebook size={18} className="text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/arenados_y_blasting/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              >
                <Instagram size={18} className="text-gray-400 hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="https://wa.link/lf75ot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-gray-400 hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                </svg>
              </a>
            </div>
            
            <div className="flex items-start gap-2 text-sm">
              <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-300 leading-tight">Salta 241, Bella Vista, Buenos Aires</span>
            </div>
          </div>
        </div>

        {/* Footer inferior compacto */}
        <div className="border-t border-gray-800 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Arenados y Blasting. Todos los derechos reservados.
          </div>
          
          <div className="text-gray-400">
            Desarrollado por{" "}
            <a
              href="https://www.linkedin.com/in/valentin-duarte-426945265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-btn hover:text-btn/80 transition-colors duration-300"
            >
              Valentín Duarte
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

const Facebook = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Instagram = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);