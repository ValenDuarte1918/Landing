import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

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
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
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
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
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
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
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




