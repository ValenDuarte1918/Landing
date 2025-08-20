"use client";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuItemType {
  name: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  trigger: string;
  items: MenuItemType[];
  className?: string;
}

export function DropdownMenu({ trigger, items, className = "" }: DropdownMenuProps) {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors duration-200">
          {trigger}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`${
                      active 
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                        : 'text-gray-700 dark:text-gray-300'
                    } group flex items-start px-4 py-3 text-sm transition-colors duration-150`}
                  >
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.description && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {item.description}
                        </span>
                      )}
                    </motion.div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

// Menú específico para servicios
export function ServicesMenu() {
  const services = [
    {
      name: 'Granallado',
      href: '/servicios/granallado',
      description: 'Preparación de superficies con granalla de acero'
    },
    {
      name: 'Blasting',
      href: '/servicios/blasting',
      description: 'Limpieza abrasiva especializada'
    },
    {
      name: 'Zincado',
      href: '/servicios/zincado',
      description: 'Protección anticorrosiva galvanizada'
    }
  ];

  return <DropdownMenu trigger="Servicios" items={services} />;
}
