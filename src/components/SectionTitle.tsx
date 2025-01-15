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
    className={`flex flex-col ${
      props.id === "nosotros" ? "items-start justify-start text-start py-8 ml-16" : "items-center justify-center text-center py-2"
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
          ? "max-w-sm mt-8 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl"
          : "max-w-2xl mt-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
      }`}
    >
      {props.title}
    </h2>
  )}

  {props.children && (
    <p
      className={`${
        props.id === "ubicacion"
          ? "max-w-xs p-4 text-base leading-normal text-gray-500 lg:text-lg xl:text-lg"
          : "max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
      }`}
    >
      {props.children}
    </p>
  )}
</Container>
  );
}

