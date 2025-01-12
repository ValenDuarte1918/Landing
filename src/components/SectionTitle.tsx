import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  id ?: string;
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      id = {props.id}
      className={`flex  flex-col ml-24 ${
        props.align === "left" ? "" : props.id === "faq" ? "items-center justify-center text-center p-2" : "items-start justify-center text-start p-2"

      }`}>
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-btn uppercase underline decoration-thick">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

