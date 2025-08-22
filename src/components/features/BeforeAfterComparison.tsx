"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterComparison({
  beforeImage,
  afterImage,
  title,
  description,
  beforeLabel = "Antes",
  afterLabel = "Después"
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 font-industrial">{title}</h3>
        <p className="text-gray-300 mb-6 font-professional">{description}</p>
        
        <div 
          className="relative h-96 overflow-hidden rounded-xl cursor-ew-resize select-none touch-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Imagen "Después" (fondo) */}
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* Imagen "Antes" (con máscara) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Línea divisoria */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Handle del slider */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
              <div className="w-1 h-4 bg-gray-400"></div>
              <div className="w-1 h-4 bg-gray-400 ml-1"></div>
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {beforeLabel}
          </div>
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {afterLabel}
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-400 font-professional">
          <span className="hidden sm:inline">Arrastra el control para comparar el antes y después</span>
          <span className="sm:hidden">Toca y arrastra para comparar el antes y después</span>
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterComparison;
