import Image from "next/image";
import React, {Suspense} from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Video } from "@/components/Video";
import AppleCardsCarouselDemo from "@/components/card";
import Link from "next/link";

import { benefitOne } from "@/components/data";
import  LayoutGridDemo from "@/components/cardsData";


export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        id = "nosotros"
        preTitle="Sobre Nosotros"
        title={
          <>
            Enfocados en la <Mark>calidad y el servicio</Mark>
          </>
        }
        className="text-center font-light font-sans py-16 bg-snow w-full"
        
      >
        Somos una empresa familiar que cuenta con mas de 10 años de experiencia en el rubro 
        brindando servicios de excelente calidad y con la mejor atencion al cliente.

      </SectionTitle>

      <Benefits data={benefitOne} />

      <SectionTitle
        id = "servicios"
        preTitle="Servicios"
        title="Nuestros Servicios"
        className="bg-snow2 w-full font-light font-sans"
      >
         Brindamos soluciones integrales para el tratamiento y cuidado de superficies metálicas. 
         Ofrecemos una amplia gama de servicios diseñados 
         para satisfacer las necesidades de diversos proyectos, desde limpieza profunda hasta acabados mas detallado 
         de alta calidad. 
      </SectionTitle>
      
      <Container>
      <AppleCardsCarouselDemo />
      </Container>
      
      <SectionTitle
        id = "trabajos"
        preTitle="Trabajos"
        title="Nuestros Trabajos"
        className="bg-snow font-light font-sans"
      >
      Descubra algunos de los proyectos que hemos realizado con precisión y dedicación. Cada trabajo refleja 
      nuestro compromiso con la calidad y el detalle, garantizando resultados que superan las expectativas de 
      nuestros clientes.
      </SectionTitle>

      <LayoutGridDemo />
      <Testimonials />

      <div className="flex flex-col items-start justify-center w-full h-screen p-4 font-light font-sans md:flex-row md:p-24 bg-hero-image2 bg-cover bg-center bg-fixed">
        <div className="flex flex-col items-start justify-center w-full h-full bg-white bg-opacity-70 rounded-lg p-4 md:flex-row md:p-8">
          <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-4">
            <SectionTitle
              id="ubicacion"
              preTitle="¿En que podemos ayudarte?"
              title="Si tienes alguna consulta o inquietud, no dudes en contactarnos."
            >
              Horarios de atención:
              Lunes a viernes de 9 a 18:00
            </SectionTitle>
            <div className="mt-4 md:mt-8 flex justify-center w-full font-bold font-sans">
              <Link href="https://wa.link/lf75ot" className="px-6 py-2 text-white bg-btn rounded-md hover:animate-jump animate-once">
                Contactenos
              </Link>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.35591504147695!2d-58.66728186614326!3d-34.561286108999916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd75b953ab7f%3A0x3da2356c1cd88ef4!2sArenados%20y%20blasting!5e0!3m2!1ses-419!2sar!4v1735069880782!5m2!1ses-419!2sar"
            className="w-full h-64 md:w-1/2 md:h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
       <SectionTitle 
      id= "faq"
      preTitle="FAQ" 
      title="Preguntas Frecuentes"
      className="font-light font-sans">
      Estas son algunas de las preguntas frecuentes que recibimos de nuestros clientes. 
      Si tienes alguna otra pregunta, no dudes en contactarnos! 
      </SectionTitle>

      <Faq />
    </Container>
  );
};

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}