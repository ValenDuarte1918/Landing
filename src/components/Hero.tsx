import Image from "next/image";
import { Container } from "@/components/Container";


export const Hero = () => {
  return (
    <>
    
    <div className="relative h-screen w-full">
  <Container className="flex flex-wrap bg-hero-image bg-cover bg-center bg-no-repeat h-full relative justify-center items-center">
    <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
    <div className="relative z-20 flex flex-col items-center w-full lg:w-1/2 animate-fade-up animate-once">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          Servicios de granallado y blasting
        </h1>
        <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300">
          Especializados en el tratamiento de superficies, granallado y blasting de todo tipo de piezas.
        </p>
        <div className="flex justify-center w-full mt-5">
          <a
            href="https://wa.link/lf75ot"
            target="_blank"
            rel="noopener"
            className="px-4 py-4 text-lg font-medium text-center text-white bg-btn rounded-md hover:bg-btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out">
            CONTACTENOS
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
    </>
  );
}