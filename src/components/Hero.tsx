import Image from "next/image";
import { Container } from "@/components/Container";


export const Hero = () => {
  return (
    <>
    
    <div className="relative h-screen w-full">
  <Container className="flex flex-wrap bg-hero-image bg-cover bg-center bg-no-repeat h-full relative justify-center items-center">
    <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
    <div className="relative z-20 flex flex-col items-center w-full lg:w-1/2 animate-fade-up animate-once">
      <div className="max-w-7xl text-center">
        <h1 className="text-2xl font-bold font-sans leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
        ¿Necesitas superficies impecables y listas para cualquier proyecto?
        </h1>
        <p className="py-5 text-xl font-light font-sans leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300">
        Somos expertos en granallado y blasting para resultados perfectos.
        </p>
        <div className="flex justify-center w-full mt-5">
          <a
            href="https://wa.link/lf75ot"
            target="_blank"
            rel="noopener"
            className="px-4 py-4 text-lg font-bold font-sans text-center text-white bg-btn rounded-md hover:bg-btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out">
            Contáctano
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
    </>
  );
}