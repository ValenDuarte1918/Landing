"use client";
import React, { useState, useRef, useEffect } from "react";
import  LayoutGrid  from "@/components/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen p-12">
      <LayoutGrid cards={cards} />
    </div>
  );
}



const cards = [
  {
    id: 1,
    className: "col-span-2",
    thumbnail:
      "/img/prueba-6.jpg",
  },
  {
    id: 2,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos1.jpg",
  },
  {
    id: 3,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos2.jpg",
  },
  {
    id: 4,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos3.jpg",
  },
  {
    id: 5,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos4.jpg",
  },
  {
    id: 6,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos5.jpg",
  },
  {
    id: 7,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos6.jpg",
  },
  {
    id: 8,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos7.jpg",
  },
  {
    id: 9,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos8.jpg",
  },
  {
    id: 10,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos9.jpg",
  },
  {
    id: 11,
    className: "col-span-2",
    thumbnail:
      "/img/imgTrabajos10.jpg",
  },
];

export default LayoutGridDemo;

