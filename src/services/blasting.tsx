import React from "react";
import Image from "next/image";

const Blasting = () => {
  return (
    <div className="p-8 md:p-14">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Blasting</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        El blasting con microesferas de vidrio es la técnica ideal para lograr terminaciones de alta calidad en superficies metálicas. Este proceso, suave pero efectivo, realza el aspecto estético al brindar un acabado uniforme y satinado, perfecto para piezas de acero inoxidable, aluminio y otros materiales delicados.
      </p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

export default Blasting;