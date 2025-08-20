import Image from "next/image";
import { Container } from "@/components/Container";

const HeroHeader = () => (
  <div className="mb-6">
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight drop-shadow-2xl">
      Superficies como nuevas,
    </h1>
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight drop-shadow-2xl mt-2">
      <span className="text-blue-300">rendimiento asegurado</span>
    </h1>
  </div>
);

const HeroDescription = () => (
  <div className="mb-8">
    <p className="text-xl font-normal leading-relaxed text-white/85 lg:text-2xl xl:text-3xl drop-shadow-lg max-w-4xl mx-auto">
      Calidad y detalle en cada proyecto.
    </p>
    <p className="text-base font-light leading-relaxed text-white/70 lg:text-lg xl:text-xl max-w-3xl mx-auto mt-3">
      Especialistas en blasting y preparación de superficies.
    </p>
  </div>
);

const HeroStats = () => (
  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 text-blue-200">
    <div className="flex items-center justify-center gap-2">
      <div className="w-2 h-2 bg-btn/70 rounded-full"></div>
      <span className="text-sm lg:text-base font-medium">+15 años de experiencia</span>
    </div>
    <div className="flex items-center justify-center gap-2">
      <div className="w-2 h-2 bg-btn/70 rounded-full"></div>
      <span className="text-sm lg:text-base font-medium">+500 proyectos completados</span>
    </div>
    <div className="flex items-center justify-center gap-2">
      <div className="w-2 h-2 bg-btn/70 rounded-full"></div>
      <span className="text-sm lg:text-base font-medium">Resultados garantizados</span>
    </div>
  </div>
);

const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full pt-4 px-4 sm:px-0">
    <a
      href="https://wa.link/lf75ot"
      target="_blank"
      rel="noopener"
      className="btn text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-btn/25 hover:bg-btn/40 border border-btn/40 hover:border-btn/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 ease-out will-change-transform hover:scale-105 rounded-xl"
    >
      Solicitar presupuesto
    </a>
    <a
      href="https://www.instagram.com/arenados_y_blasting/"
      className="btn btn-ghost text-white font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border border-btn/30 hover:bg-btn/15 hover:border-btn/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 ease-out will-change-transform hover:scale-105 rounded-xl"
    >
      Ver nuestros trabajos
    </a>
  </div>
);

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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
      
      <Container className="flex flex-wrap h-full relative justify-center items-center z-20 px-4">
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