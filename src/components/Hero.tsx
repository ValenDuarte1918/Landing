import Image from "next/image";
import { Container } from "@/components/Container";


export const Hero = () => {
  return (
    <>
    
    <div className="relative h-screen w-full">
    <Image
  src="/img/hero3.webp" // Ruta de la imagen
  alt="Hero Background"
  fill // Hace que la imagen ocupe todo el contenedor
  className="z-0"
  priority // Prioriza la carga de esta imagen
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Ajusta según el tamaño del viewport
  style={{ objectFit: "cover" }} // Simula `background-size: cover`
/>
  <Container className="flex flex-wrap h-full relative justify-center items-center">
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
            className="px-4 py-4 text-lg font-bold font-sans text-center text-white bg-btn rounded-md hover:bg-btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
    </>
  );
}