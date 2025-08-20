import Image from "next/image";
import React from "react";
import { Container } from "@/components/layout";
import { SectionTitle, Video } from "@/components/ui";

export const Testimonials = () => {
  return (
    <Container>
      <Video 
        videoSrc="/img/Video-1.mp4"
        title="Transformación Completa"
        description="Mira el increíble antes y después de nuestros trabajos. Desde superficies deterioradas hasta acabados profesionales que superan las expectativas."
      />
    </Container>
  );
};
