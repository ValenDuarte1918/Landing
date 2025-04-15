"use client";
import React, { useState, useRef, useEffect } from "react";
import  LayoutGrid  from "@/components/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full ">
      <LayoutGrid cards={cards} />
    </div>
  );
}



const cards = [
  {
    id: 1,
    className: "md:col-span-2  ",
    thumbnail:
      "/img/prueba-6.jpg",
  },
  {
    id: 2,
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default LayoutGridDemo;

