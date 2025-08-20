import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  id ?: string;
  preTitle?: string;
  title?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
    id={props.id}
    className={`flex flex-col ${  //alargar el texto
      props.id === "nosotros" ? "font-bold font-sans items-center justify-start text-start py-16 px-4 bg-gradient-custom1 " : "items-center justify-center text-center py-16 px-4"
    } ${props.className}`} // Añadir props.className aquí
  >
  {props.preTitle && (
    <div className="text-sm font-bold tracking-wider text-btn uppercase underline decoration-thick">
      {props.preTitle}
    </div>
  )}

  {props.title && (
    <h2
      className={`${
        props.id === "ubicacion"
          ? "max-w-sm mt-8 text-2xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-3xl"
          : "max-w-3xl mt-4 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl w-2xl "
      }`}
    >
      {props.title}
    </h2>
  )}

  {props.children && (
    <p
      className={`${
        props.id === "ubicacion"
          ? "max-w-xs p-4 text-base leading-normal text-gray-300 lg:text-lg xl:text-lg"
          : "max-w-3xl py-4 text-lg leading-normal text-white lg:text-xl xl:text-xl dark:text-gray-300"
      }`}
    >
      {props.children}
    </p>
  )}
</Container>
  );
}

