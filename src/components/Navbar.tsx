"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia el estado si el usuario baja más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Inicio", id: "inicio" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Servicios", id: "servicios" },
    { name: "Trabajos", id: "trabajos" },
  ];

  return (
    <div
      className={`w-full fixed z-50 transition-colors duration-300 ${
        isScrolled ? "bg-customBlue bg-opacity-90" : "bg-customBlue bg-opacity-0"
      }`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-1 h-16">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium font-sans text-white">
            <span>
              <Image
                src="/img/foto-logo.png"
                width="100"
                alt="N"
                height="100"
                className="w-12 h-12 ml-6 rounded-full"
              />
            </span>
            <span>Arenados y Blasting</span>
          </span>
        </Link>

        {/* Botón de contacto */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.link/lf75ot"
              className="px-6 py-2 font-semibold font-sans text-white bg-btn rounded-md md:ml-5"
            >
              Presupuestos
            </Link>
          </div>
        </div>

        <Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button
        aria-label="Toggle Menu Mobile"
        className="lg:hidden focus:outline-none focus:ring-4 focus:ring-black rounded-lg p-2 transition-transform duration-300"
      >
        {open ? (
          // Ícono de "Cerrar" (Cruz genérica)
          <svg
            className="w-6 h-6 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          // Ícono personalizado de menú hamburguesa
          <img src="/img/hamburger-menu.svg" alt="Menu" className="w-6 h-6 text-white" />
        )}
      </Disclosure.Button>
      <Disclosure.Panel
        className={`lg:hidden absolute top-16 left-0 w-full bg-customBlue bg-opacity-90 transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navigation.map((menu, index) => (
            <Link
              key={index}
              href={`#${menu.id}`}
              className="block px-4 py-2 text-sm font-bold font-sans text-white bg-transparent rounded-lg hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
            >
              {menu.name}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="w-11/12 px-6 py-2 text-center text-white bg-indigo-600 rounded-md"
          >
            Contáctenos
          </Link>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

        {/* Menú */}
        <div className="hidden text-center lg:flex lg:items-center w-1/2 ">
          <ul className="items-center justify-around flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={`#${menu.id}`}
                  className="inline-block px-4 py-2 text-lg font-normal text-white no-underline  hover:text-indigo-500 focus:text-indigo-500 hover:border-b-2 hover:border-white focus:outline-none"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};