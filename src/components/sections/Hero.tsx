import Image from "next/image";
import { Container } from "@/components/layout";

const HeroHeader = () => (
  <div className="mb-4 sm:mb-6 animate-fade-in-up">
    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight drop-shadow-2xl animate-slide-in-up">
      Superficies como nuevas,
    </h1>
    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight drop-shadow-2xl mt-1 sm:mt-2 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
      <span className="text-blue-300 hover:text-blue-200 transition-colors duration-300">rendimiento asegurado</span>
    </h1>
  </div>
);

const HeroDescription = () => (
  <div className="mb-6 sm:mb-8 animate-fade-in-delayed">
    <p className="text-lg sm:text-xl font-normal leading-relaxed text-white/85 lg:text-2xl xl:text-3xl drop-shadow-lg max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.4s'}}>
      Calidad y detalle en cada proyecto.
    </p>
    <p className="text-sm sm:text-base font-light leading-relaxed text-white/70 lg:text-lg xl:text-xl max-w-3xl mx-auto mt-2 sm:mt-3 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
      Especialistas en blasting y preparación de superficies.
    </p>
  </div>
);

const HeroStats = () => (
  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 mb-6 sm:mb-8 text-blue-200 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
    <div className="flex items-center justify-center gap-2 group hover:scale-105 transition-transform duration-300">
      <div className="w-2 h-2 bg-btn/70 rounded-full group-hover:bg-btn animate-pulse"></div>
      <span className="text-xs sm:text-sm lg:text-base font-medium group-hover:text-white transition-colors duration-300">+15 años de experiencia</span>
    </div>
    <div className="flex items-center justify-center gap-2 group hover:scale-105 transition-transform duration-300">
      <div className="w-2 h-2 bg-btn/70 rounded-full group-hover:bg-btn animate-pulse" style={{animationDelay: '0.2s'}}></div>
      <span className="text-xs sm:text-sm lg:text-base font-medium group-hover:text-white transition-colors duration-300">+500 proyectos completados</span>
    </div>
    <div className="flex items-center justify-center gap-2 group hover:scale-105 transition-transform duration-300">
      <div className="w-2 h-2 bg-btn/70 rounded-full group-hover:bg-btn animate-pulse" style={{animationDelay: '0.4s'}}></div>
      <span className="text-xs sm:text-sm lg:text-base font-medium group-hover:text-white transition-colors duration-300">Resultados garantizados</span>
    </div>
  </div>
);

const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full pt-4 px-4 sm:px-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
    <a
      href="https://wa.link/lf75ot"
      target="_blank"
      rel="noopener"
      className="btn text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-btn/25 hover:bg-btn/40 border border-btn/40 hover:border-btn/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 ease-out will-change-transform hover:scale-105 rounded-xl group relative overflow-hidden hover:-translate-y-1"
    >
      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
      </svg>
      Solicitar presupuesto
      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
    </a>
    <a
      href="https://www.instagram.com/arenados_y_blasting/"
      className="btn btn-ghost text-white font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border border-btn/30 hover:bg-btn/15 hover:border-btn/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-500 ease-out will-change-transform hover:scale-105 rounded-xl group relative overflow-hidden hover:-translate-y-1"
    >
      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
      </svg>
      Ver nuestros trabajos
      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
    </a>
  </div>
);

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-16 sm:pt-20">
      <Image
        src="/img/hero3.webp"
        alt="Hero Background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        className="object-cover"
      />
      {/* Overlay mejorado con gradiente */}
      <div className="absolute inset-0 bg-black/75 z-10"></div>
      
      <Container className="flex flex-wrap min-h-screen relative justify-center items-center z-20 px-4 -mt-16 sm:-mt-20">
        <div className="flex flex-col items-center w-full lg:w-4/5 xl:w-3/4 animate-fade-up animate-once animate-duration-1000 animate-delay-300">
          <div className="max-w-6xl text-center">
            <HeroHeader />
            <HeroDescription />
            <HeroStats />
            <HeroButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};