import Image from "next/image";
import React, {Suspense} from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import AppleCardsCarouselDemo from "@/components/card";

import { benefitOne } from "@/components/data";


export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        id = "nosotros"
        preTitle="Sobre Nosotros"
        title=" Enfocados en la calidad y el servicio"
      >
        Somos una empresa familiar que cuenta con mas de 10 años de experiencia en el rubro 
        brindando servicios de excelente calidad y con la mejor atencion al cliente.

      </SectionTitle>

      <Benefits data={benefitOne} />

      <SectionTitle
        id = "servicios"
        preTitle="Servicios"
        title="Nuestros Servicios"
      >
         Ofrecemos una amplia gama de servicios como: 
      </SectionTitle>
      
      <Container>
      <AppleCardsCarouselDemo />
      </Container>
      
      <SectionTitle
        id = "trabajos"
        preTitle="Trabajos"
        title="Nuestros Trabajos"
      >
      Te mostramos algunos de nuestros trabajos y proyectos realizados con el mayor cuidado y dedicación.
      </SectionTitle>

      <Testimonials />

      <SectionTitle
        id = "ubicacion"
        preTitle="Ubicación"
        title="Donde Estamos"
      >
      Estamos ubicados en la ciudad de Buenos Aires, Argentina.
      </SectionTitle>
      <div className="flex flex-col items-center justify-center w-full h-full">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.35591504147695!2d-58.66728186614326!3d-34.561286108999916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd75b953ab7f%3A0x3da2356c1cd88ef4!2sArenados%20y%20blasting!5e0!3m2!1ses-419!2sar!4v1735069880782!5m2!1ses-419!2sar"
          width="90%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <SectionTitle 
      id= "faq"
      preTitle="FAQ" 
      title="Preguntas Frecuentes">
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




