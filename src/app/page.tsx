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
        title="Learn how to fullfil your needs"
      >
         hola This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        id = "trabajos"
        preTitle="Trabajos"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Preguntas Frecuentes">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
    </Container>
  );
}
