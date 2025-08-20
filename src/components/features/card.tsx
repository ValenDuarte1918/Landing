"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/features/cards-carousel";

 function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full  items-center justify-center text-center bg-snow2">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              El granallado es un proceso esencial para la limpieza y preparación de 
              superficies metálicas.
              </span>{" "}
              A través de la proyección de partículas abrasivas, 
              eliminamos óxido, pintura vieja e impurezas, dejando la superficie lista para 
              cualquier tratamiento posterior, como pintura o recubrimientos protectores.
            </p>
            <Image
              src="/img/imgTrabajos1.jpg"
              alt="Granallado"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const BlastingContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              El blasting con microesferas de vidrio es la técnica ideal para lograr 
              terminaciones de alta calidad en superficies metálicas.
              </span>{" "}
              Este proceso, suave pero efectivo, realza el aspecto estético al brindar un acabado uniforme y satinado, perfecto para piezas de acero inoxidable, aluminio y otros materiales delicados.
              Es la opción preferida para acabados finales que combinan funcionalidad y 
              estética sin comprometer la integridad del material.
            </p>
            <Image
              src="/img/imgTrabajos8.webp"
              alt="Blasting"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const ZincadoContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              El zincado es un proceso de recubrimiento diseñado para proteger 
              superficies metálicas contra la corrosión y el desgaste.
              </span>{" "}
              Al aplicar 
              una capa de zinc, se asegura una protección duradera frente a agentes externos 
              como humedad, oxidación y productos químicos.
              Ideal para estructuras expuestas al ambiente, piezas industriales y 
              componentes mecánicos, nuestro servicio de zincado garantiza calidad y 
              resistencia, extendiendo la vida útil de tus materiales.
            </p>
            <Image
              src="/img/imgTrabajos5.jpg"
              alt="Zincado"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: " ",
    title: "Granallado",
    src: "/img/imgGranallado.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Blasting",
    src: "/img/imgTrabajos4.webp",
    content: <BlastingContent />,
  },
  {
    category: "",
    title: "Zincado",
    src: "/img/1.jpg",
    content: <ZincadoContent />,
  },
];

export default AppleCardsCarouselDemo;
