"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Cómo puede el granallado ayudar a eliminar la corrosión de mis piezas?",
    answer: "El granallado es un proceso eficaz para remover óxido, corrosión y otros contaminantes de las superficies metálicas, dejando la pieza limpia y lista para ser tratada o pintada.",
  },
  {
    question: "¿Por qué es importante preparar la superficie antes de aplicar pintura o recubrimientos?",
    answer: "La preparación de la superficie mediante granallado garantiza una mejor adhesión de la pintura o recubrimiento, aumentando su durabilidad y resistencia.",
  },
  {
    question: "¿Qué significa “volver a darle valor a mi pieza”?",
    answer:
      "Mediante el proceso de granallado o blasting, tus piezas recuperan su apariencia original, mejorando su funcionalidad y estética, lo que prolonga su vida útil.",
  },
  {
    question: "¿Cómo el blasting puede mejorar la presentación de mis trabajos?",
    answer:
      "El blasting permite obtener una superficie uniforme y limpia, ideal para proyectos que requieren acabados profesionales y de alta calidad.",
  },
];
