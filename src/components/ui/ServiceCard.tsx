"use client";
import Link from "next/link";
import { OptimizedImage } from "./OptimizedImage";

interface ServiceCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  onClick?: () => void;
}

export const ServiceCard = ({ 
  href, 
  imageSrc, 
  imageAlt, 
  icon, 
  title, 
  description, 
  iconBgColor,
  onClick 
}: ServiceCardProps) => {
  return (
    <Link 
      href={href}
      className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-btn/30 transition-all duration-500 block"
      onClick={onClick}
      aria-label={`Ver detalles del servicio ${title}`}
    >
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage 
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
            {icon}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 font-sans">{title}</h3>
        <p className="text-gray-300 leading-relaxed font-light mb-4 text-sm">
          {description}
        </p>
        <div className="flex items-center text-btn font-medium text-sm group">
          <span>Ver detalles</span>
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
