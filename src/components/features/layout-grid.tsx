"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils";
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
    e.stopPropagation();
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-4 md:grid-cols-6 max-w-4xl mx-auto gap-4 relative perspective-1000">
      {/* Overlay con backdrop blur cuando se selecciona una tarjeta */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl z-40"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(card.className, "group transform-gpu")}
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: 30, rotateX: 15 }}
          transition={{
            duration: 0.6,
            delay: 0.1 * i,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden transform-gpu transition-all duration-700",
              selected?.id === card.id
                ? "rounded-2xl cursor-pointer absolute inset-0 w-full h-full m-auto z-50 flex justify-center items-center scale-110"
                : "rounded-2xl h-full w-full hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl hover:shadow-btn/20"
            )}
            layoutId={`card-${card.id}`}
            whileHover={{ 
              scale: selected?.id === card.id ? 1.1 : 1.05,
              rotateY: selected?.id === card.id ? 0 : 5,
              rotateX: selected?.id === card.id ? 0 : -2,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Efectos de fondo 3D */}
            {!selected && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-btn/10 to-customBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-btn/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </>
            )}

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-btn/30 transition-colors duration-500"></div>

            <ImageComponent card={card} isSelected={selected?.id === card.id} />
            
            {selected?.id === card.id && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2 }}
                onClick={handleClose}
                className="absolute top-4 right-4 bg-gradient-to-br from-red-500/90 to-red-600/90 hover:from-red-500 hover:to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-50 backdrop-blur-sm border border-white/20 transform hover:scale-110 hover:rotate-90 transition-all duration-300"
              >
                ✕
              </motion.button>
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
        "relative w-full h-full cursor-pointer overflow-hidden rounded-2xl transform-gpu transition-all duration-700 group",
        !isSelected && "hover:scale-105"
      )}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={!isSelected ? { 
        scale: 1.05,
        rotateY: 2,
        rotateX: -1,
      } : {}}
    >
      {/* Efecto de brillo que cruza la imagen */}
      {!isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>
      )}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <Image
        src={card.thumbnail}
        fill
        style={{ objectFit: "cover" }}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          "transition-all duration-700 rounded-2xl transform-gpu",
          !isSelected && "group-hover:scale-110",
          isSelected && "scale-105"
        )}
        alt={`Card ${card.id}`}
      />
      
      {/* Partículas flotantes en hover */}
      {!isSelected && (
        <>
          <div className="absolute top-2 right-2 w-1 h-1 bg-btn/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-customBlue/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700 animation-delay-300"></div>
        </>
      )}
    </motion.div>
  );
};

export default LayoutGrid;