import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero2.jpg";

export const Hero = () => {
  return (
    <>
    
    <Container className="flex flex-wrap w-full bg-hero-image bg-cover bg-center bg-no-repeat h-screen">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mx-24 ">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white ">
            Servicios de granallado y blasting
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Especializados en el tratamiento de superficies, granallado y blasting de todo tipo de piezas.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.link/lf75ot"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-btn rounded-md ">
                CONTACTENOS
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}