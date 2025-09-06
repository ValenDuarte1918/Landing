"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  lazy?: boolean;
  aspectRatio?: "square" | "video" | "auto";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

// Función para generar blur data URL simple
const generateBlurDataURL = (width = 8, height = 8) => {
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect width="100%" height="100%" fill="url(#grad)" opacity="0.3"/>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e5e7eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d1d5db;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>`
  )}`;
};

export const OptimizedImage = ({ 
  src, 
  alt, 
  width = 600, 
  height = 400, 
  className = "", 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  fill = false,
  placeholder = "blur",
  blurDataURL,
  lazy = true,
  aspectRatio = "auto",
  objectFit = "cover"
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!lazy || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Cargar imagen 50px antes de que sea visible
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Generar aspect ratio classes
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-video";
      default: return "";
    }
  };

  const fallbackBlurDataURL = blurDataURL || generateBlurDataURL(width, height);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm min-h-[100px] ${getAspectRatioClass()} ${className}`}
        role="img" 
        aria-label={`Error al cargar: ${alt}`}
      >
        <div className="text-center p-4">
          <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Error al cargar imagen</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${getAspectRatioClass()} ${className}`}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={`transition-all duration-500 ease-out ${
            isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={fallbackBlurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            objectFit: fill ? objectFit : undefined,
          }}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      
      {/* Loading skeleton mejorado */}
      {isLoading && (isInView || priority) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Placeholder cuando no está en vista */}
      {!isInView && !priority && (
        <div className={`absolute inset-0 bg-gray-200 ${getAspectRatioClass()}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
        </div>
      )}
    </div>
  );
};
