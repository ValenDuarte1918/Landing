"use client";

import React from "react";

const FloatingButton = () => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.link/lf75ot`; // URL de WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-5 w-16 h-16"
    >
        <img
        src="/img/WhatsApp-logo.svg" // Ruta de la imagen
        alt="WhatsApp"
        className="w-full "
      />
    </button>
  );
};

export default FloatingButton;