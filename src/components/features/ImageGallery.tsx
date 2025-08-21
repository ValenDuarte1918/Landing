"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImageModal } from "@/components/ui";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/img/imgTrabajos1.jpg",
    alt: "Blasting de estructuras metálicas",
    category: "Blasting",
    title: "Estructuras Metálicas",
    description: "Tratamiento completo de blasting para estructuras industriales"
  },
  {
    id: 2,
    src: "/img/imgTrabajos2.jpg",
    alt: "Granallado de piezas automotrices",
    category: "Granallado",
    title: "Piezas Automotrices",
    description: "Granallado de alta precisión para componentes de motor"
  },
  {
    id: 3,
    src: "/img/imgTrabajos3.jpg",
    alt: "Blasting de componentes mecánicos",
    category: "Blasting",
    title: "Componentes Mecánicos",
    description: "Acabado perfecto en piezas mecánicas de precisión"
  },
  {
    id: 4,
    src: "/img/imgTrabajos4.webp",
    alt: "Tratamiento de superficies con micro esferas",
    category: "Micro Esferas",
    title: "Micro Esferas de Vidrio",
    description: "Acabado brillante con micro esferas para piezas especiales"
  },
  {
    id: 5,
    src: "/img/imgTrabajos5.jpg",
    alt: "Granallado de herramientas industriales",
    category: "Granallado",
    title: "Herramientas Industriales",
    description: "Preparación de herramientas para recubrimientos especiales"
  },
  {
    id: 6,
    src: "/img/imgTrabajos6.webp",
    alt: "Blasting de piezas de maquinaria",
    category: "Blasting",
    title: "Maquinaria Industrial",
    description: "Restauración de componentes de maquinaria pesada"
  },
  {
    id: 7,
    src: "/img/imgTrabajos7.jpg",
    alt: "Tratamiento de piezas automotrices",
    category: "Automotriz",
    title: "Sector Automotriz",
    description: "Preparación de piezas para el sector automotriz"
  },
  {
    id: 8,
    src: "/img/imgTrabajos8.webp",
    alt: "Granallado de estructuras metálicas",
    category: "Granallado",
    title: "Estructuras Complejas",
    description: "Tratamiento de estructuras metálicas complejas"
  },
  {
    id: 9,
    src: "/img/imgTrabajos9.webp",
    alt: "Blasting de componentes especiales",
    category: "Blasting",
    title: "Componentes Especiales",
    description: "Acabados especiales para aplicaciones específicas"
  },
  {
    id: 10,
    src: "/img/imgTrabajos10.webp",
    alt: "Tratamiento integral de piezas",
    category: "Integral",
    title: "Tratamiento Integral",
    description: "Proceso completo de preparación y acabado"
  },
];

const categories = ["Todos", "Blasting", "Granallado", "Micro Esferas", "Automotriz", "Integral"];

interface ImageGalleryProps {
  showTitle?: boolean;
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
  showModal?: boolean;
}

export function ImageGallery({ 
  showTitle = true, 
  showFilters = true, 
  columns = 3,
  showModal = true 
}: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  return (
    <section className="relative py-16">
      {showTitle && (
        <div className="text-center mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative p-8">
              <div className="text-sm font-bold tracking-wider text-btn uppercase mb-6 animate-fade-in">
                Galería de Trabajos
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6 animate-fade-in font-industrial">
                Nuestros{" "}
                <span className="text-btn">Proyectos Realizados</span>
              </h2>
              <div className="w-24 h-1 bg-btn rounded-full mx-auto mb-8 animate-fade-in"></div>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto font-professional">
                Explora nuestra galería completa de trabajos realizados con los más altos estándares de calidad.
              </p>
            </div>
          </div>
        </div>
      )}

      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-btn text-white shadow-lg shadow-btn/30 font-professional"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-btn/30 font-professional"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className={`grid ${gridCols[columns]} gap-6 max-w-7xl mx-auto px-4`}>
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-btn/20"
              onClick={() => showModal && setSelectedImage(image)}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-btn/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {image.category}
                </div>
                
                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-2 font-industrial">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-professional">
                    {image.description}
                  </p>
                </div>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal para imagen ampliada */}
      {showModal && selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </section>
  );
}

export default ImageGallery;
