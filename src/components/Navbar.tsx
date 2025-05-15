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
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-1 h-24">
        {/* Logo e íconos */}
        <div className="flex items-center space-x-2">
          {/* Botón de menú hamburguesa */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu Mobile"
                  className="lg:hidden rounded-lg flex items-center justify-center w-10 h-10 z-50"
                >
                  {open ? (
                    // Ícono de "Cerrar" (Cruz genérica)
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    // Ícono personalizado de menú hamburguesa
                    <img
                      src="/img/menu-hamburguesa.svg"
                      alt="Menu"
                      className="w-6 h-6"
                    />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`lg:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-customBlue bg-opacity-90 backdrop-blur-md shadow-2xl transition-all duration-500 z-50 ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                  } flex flex-col`}
                >
                  <div className="relative flex flex-col items-center justify-center h-full space-y-8 px-8">
                    {/* Botón de cerrar arriba a la derecha */}
                    <div className="absolute top-4 right-6">
                      <Disclosure.Button aria-label="Cerrar menú" className="p-2 rounded-full hover:bg-blue-700 transition">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Disclosure.Button>
                    </div>
                    {navigation.map((menu, index) => (
                      <Disclosure.Button
                        as={Link}
                        key={index}
                        href={`#${menu.id}`}
                        className="w-full text-center px-4 py-4 text-xl font-bold text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition"
                      >
                        {menu.name}
                      </Disclosure.Button>
                    ))}
                    <div className="w-2/3 border-t-2 border-blue-300 my-4"></div>
                    <Disclosure.Button
                      as={Link}
                      href="https://wa.link/lf75ot"
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition"
                    >
                      Presupuestos
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Logo */}
          <Link href="/">
            <span>
              <Image
                src="/img/logo2.webp"
                width={140}
                height={140}
                alt="logo"
                className="max-h-20 w-auto"
              />
            </span>
          </Link>
        </div>

        {/* Botón de contacto */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.link/lf75ot"
              className="inline-flex items-center justify-center px-3 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
            >
              Presupuestos
            </Link>
          </div>
        </div>

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