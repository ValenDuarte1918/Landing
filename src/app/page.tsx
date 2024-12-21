import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        id = "nosotros"
        preTitle="Sobre Nosotros"
        title=" Enfocados en la calidad y el servicio"
      >
        Somos una empresa familiar que cuenta con mas de 10 años de experiencia en el rubro 
        brindando servicios de excelente calidad y con la mejor atencion al cliente.

      </SectionTitle>

      <Benefits data={benefitOne} />

      <SectionTitle
        id = "servicios"
        preTitle="Servicios"
        title="titulo de servicios"
      >
         descripcion de los servicios que ofrecemos
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        id = "trabajos"
        preTitle="Trabajos"
        title="titulo de trabajos"
      >
        descripcion de los trabajos realizados
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Preguntas Frecuentes">
        descripcion de las preguntas frecuentes
      </SectionTitle>

      <Faq />
    </Container>
  );
}
