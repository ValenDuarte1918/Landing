"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el evento de cierre dispare el evento de selección
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-4 md:grid-cols-6 max-w-4xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(card.className, "")}
          initial={{ opacity: 0, y: 20 }} // Animación inicial
          animate={{ opacity: 1, y: 0 }} // Animación al estar visible
          exit={{ opacity: 0, y: 20 }} // Animación al salir
          transition={{
            duration: 0.5,
            delay: 0.2 * i, // Retraso escalonado para cada tarjeta
            ease: "easeOut",
          }}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 w-full h-full m-auto z-50 flex justify-center items-center"
                : "rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} isSelected={selected?.id === card.id} />
            {selected?.id === card.id && (
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md z-50"
              >
                ✕
              </button>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const ImageComponent = ({
  card,
  isSelected,
}: {
  card: Card;
  isSelected: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-full h-full cursor-pointer overflow-hidden rounded-xl transition-opacity",
        !isSelected && "hover:opacity-40" // Solo aplica hover si no está seleccionada
      )}
      initial={{ scale: 0.95 }} // Animación inicial de escala
      animate={{ scale: 1 }} // Animación al estar visible
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Image
        src={card.thumbnail}
        layout="fill"
        objectFit="cover"
        priority={true}
        className="transition duration-100 rounded-xl"
        alt="thumbnail"
      />
    </motion.div>
  );
};

export default LayoutGrid;