import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    { name: "Inicio", id: "inicio" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Servicios", id: "servicios" },
    { name: "Trabajos", id: "trabajos" },
  ];
  const legal = ["Terminios y condiciones", "Privacidad", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
          <Link href="/">
            <span>
              <Image
                src="/img/logo2.webp"
                width={200}
                height={10}
                alt="logo"
                className="max-h-20 w-auto"
              />
            </span>
          </Link>
            </div>

            <div className="max-w-md mt-4 text-white dark:text-gray-400">
            Somos una empresa familiar que cuenta con mas de 10 años de experiencia en el rubro 
            brindando servicios de excelente calidad y con la mejor atencion al cliente.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  className="w-full px-4 py-2 text-white rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
          <div>
            <div className="text-white dark:text-gray-400">
              <h3 className="text-lg font-medium">Contáctanos</h3>
              <p className="mt-2">Teléfono: 11-57491731</p>
              <p>Email: Procesosmet@hotmail.com </p>
              <p>Dirección: Salta 241, Bella Vista, Buenos Aires</p>
            </div>
</div>
          </div>
          <div className="">
            <div>Redes Sociales</div>
            <div className="flex mt-5 space-x-5 text-white dark:text-gray-500">
              
              <a
                href="https://www.facebook.com/share/1EVY87cVeg/"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/arenados_y_blasting/?hl=es"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-white dark:text-gray-400">
            Copyright © {new Date().getFullYear()}. Made by{" "}
            <a
              href="https://www.linkedin.com/in/valentin-duarte-426945265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              Valentin Duarte
            </a>
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);



