import Image from "next/image";
import { Container } from "@/components/Container";

const HeroHeader = () => (
  <h1 className="text-2xl font-bold font-sans leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
    ¿Necesitas superficies impecables y listas para cualquier proyecto?
  </h1>
);

const HeroDescription = () => (
  <p className="py-5 text-xl font-light font-sans leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300">
    Somos expertos en granallado y blasting para resultados perfectos.
  </p>
);

const HeroButton = () => (
  <a
    href="https://wa.link/lf75ot"
    target="_blank"
    rel="noopener"
    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
  >
    Contáctanos
  </a>
);

export const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/img/hero3.webp"
        alt="Hero Background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        className="object-cover"
      />
      <Container className="flex flex-wrap h-full relative justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
        <div className="relative z-20 flex flex-col items-center w-full lg:w-1/2 animate-fade-up animate-once">
          <div className="max-w-7xl text-center">
            <HeroHeader />
            <HeroDescription />
            <div className="flex justify-center w-full mt-5">
              <HeroButton />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};