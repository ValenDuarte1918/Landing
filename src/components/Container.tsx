import React from "react";

interface ContainerProps {
  id ?: string;
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      id={props.id}
      className={` p-auto mx-auto xl:px-0 animate-fade-right animate-once animate-duration-[1700ms]  ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

