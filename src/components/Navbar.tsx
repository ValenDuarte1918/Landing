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
    { name: "Ubicación", id: "ubicacion" },
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
          <span className="flex items-center space-x-2 text-2xl font-medium text-white">
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
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2 hover:animate-jump animate-once">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.link/lf75ot"
              className="px-6 py-2 text-white bg-btn rounded-md md:ml-5"
            >
              Contactenos
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="lg:hidden focus:outline-none"
              >
                <svg
                  className="w-6 h-6 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="lg:hidden">
                <>
                  {navigation.map((menu, index) => (
                    <Link
                      key={index}
                      href={`#${menu.id}`}
                      className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                    >
                      {menu.name}
                    </Link>
                  ))}
                  <Link
                    href="#get-started"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    Contactenos
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>npm 

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