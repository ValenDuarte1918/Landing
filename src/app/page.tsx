import Image from "next/image";
import React, {Suspense} from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

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
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 ">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-11 rounded-2xl py-14 dark:bg-trueGray-800">
            <h1 className="text-2xl leading-normal text-center">
              Granallado 
            </h1>
            <p className="text-2xl leading-normal">
              El <Mark>Granallado</Mark> es un <Mark>proceso de limpieza y preparación de superficies</Mark> que consiste en 
              proyectar a alta velocidad un chorro de partículas abrasivas sobre la superficie a tratar.
              Es ideal para la <Mark>eliminación de óxidos, pinturas, grasas, etc</Mark>.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-11 rounded-2xl py-14 dark:bg-trueGray-800">
          <h1 className="text-2xl leading-normal text-center">
              Blasting
            </h1>
            <p className="text-2xl leading-normal ">
              El <Mark>Blasting</Mark> es un proceso de <Mark>terminación de superficies</Mark> que consiste en proyectar a alta velocidad 
              microesferas de vidrio sobre la superficie. Es ideal para cuando se busca un <Mark>acabado de calidad y
              durabilidad.</Mark>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-11 rounded-2xl py-14 dark:bg-trueGray-800">
          <h1 className="text-2xl leading-normal text-center">
              Zincado
            </h1>
            <p className="text-2xl leading-normal ">
              El <Mark>Zincado</Mark> es un proceso de <Mark>protección de superficies metálicas</Mark> que consiste en recubrir la superficie
              con una <Mark>capa de zinc.</Mark> Es ideal para la protección de piezas metálicas que estén en <Mark>contacto con la intemperie.</Mark>
            </p>
          </div>
        </div>
      </div>
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
      <SectionTitle preTitle="FAQ" title="Preguntas Frecuentes">
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




