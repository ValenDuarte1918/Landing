"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

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
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden lg:mb-20">
        {/* Header del video */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Video Container con glassmorphism */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
          {!playVideo ? (
            // Thumbnail con preview
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setPlayVideo(true)}>
              <video 
                className="w-full h-full object-contain bg-gray-900"
                muted
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-btn/90 backdrop-blur-sm rounded-full p-6 lg:p-8 group-hover:bg-btn transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 lg:w-16 lg:h-16 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Badge "Ver Video" */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-sm">Ver Video</span>
                </div>
              </div>
            </div>
          ) : (
            // Video Player
            <div className="relative w-full h-full">
              <video 
                className="w-full h-full object-contain bg-gray-900"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Close button */}
              <button
                onClick={() => setPlayVideo(false)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
