"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout";

interface VideoProps {
  videoSrc?: string;
  title?: string;
  description?: string;
}

export function Video({ 
  videoSrc = "/img/Video-1.mp4", 
  title = "Nuestro Trabajo en Acción",
  description = "Mira cómo transformamos superficies metálicas con tecnología de vanguardia"
}: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Container>
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden lg:mb-20 animate-fade-up animate-once animate-duration-[1500ms]">
        {/* Header del video */}
        <div className="text-center mb-8 animate-fade-in animation-delay-300">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-200 to-btn bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in animation-delay-500">
            {description}
          </p>
        </div>

        {/* Video Container con glassmorphism mejorado */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-lg border border-white/10 shadow-2xl transform-gpu transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-3xl hover:shadow-btn/20 group animate-fade-in animation-delay-700">
          
          {/* Efectos de fondo animados */}
          <div className="absolute inset-0 bg-gradient-to-br from-btn/5 to-customBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-btn/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-customBlue/10 to-transparent rounded-full blur-3xl animate-float animation-delay-1000"></div>
          
          {!playVideo ? (
            // Thumbnail con preview mejorado
            <div className="relative w-full h-full group cursor-pointer transform-gpu transition-all duration-500 hover:scale-[1.01]" onClick={() => setPlayVideo(true)}>
              <video 
                className="w-full h-full object-contain bg-gray-900 rounded-3xl"
                muted
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              
              {/* Overlay mejorado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 group-hover:from-black/40 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-500 rounded-3xl"></div>
              
              {/* Play Button mejorado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-btn to-customBlue backdrop-blur-lg rounded-full p-6 lg:p-8 group-hover:scale-125 transform-gpu transition-all duration-500 shadow-2xl shadow-btn/25 relative overflow-hidden animate-pulse group-hover:animate-none">
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 lg:w-16 lg:h-16 text-white ml-1 relative z-10 drop-shadow-lg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Badge "Ver Video" mejorado */}
              <div className="absolute top-6 left-6 animate-fade-in animation-delay-1000">
                <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl border border-white/25 rounded-full px-5 py-3 flex items-center gap-3 shadow-lg transform-gpu transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse shadow-lg shadow-red-500/25"></div>
                  <span className="text-white font-medium text-sm tracking-wide">Ver Video</span>
                </div>
              </div>

              {/* Partículas flotantes */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-btn/40 rounded-full animate-ping animation-delay-500"></div>
              <div className="absolute bottom-20 left-16 w-1 h-1 bg-customBlue/60 rounded-full animate-ping animation-delay-1500"></div>
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          ) : (
            // Video Player mejorado
            <div className="relative w-full h-full animate-fade-in">
              <video 
                className="w-full h-full object-contain bg-gray-900 rounded-3xl shadow-inner"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Close button mejorado */}
              <button
                onClick={() => setPlayVideo(false)}
                className="absolute top-6 right-6 bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-lg rounded-full p-3 text-white hover:bg-gradient-to-br hover:from-black/80 hover:to-gray-900/80 transition-all duration-300 shadow-lg border border-white/10 transform-gpu hover:scale-110 hover:rotate-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
