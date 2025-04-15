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
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-6 max-w-7xl mx-auto gap-2 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 w-full h-full m-auto z-50 flex justify-center items-center"
                : " rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
            {selected?.id === card.id && (
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md z-50"
              >
                ✕
              </button>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div className="relative w-full h-full">
      <Image
        src={card.thumbnail}
        layout="fill"
        objectFit= "contain"
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="transition duration-100 rounded-xl"
        alt="thumbnail"
      />
    </motion.div>
  );
};

export default LayoutGrid;