import { ChartBarSquareIcon,} from "@heroicons/react/24/solid";
import { FaLightbulb } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import benefitOneImg from "../../public/img/Imagen.png";

const benefitOne = {
  title: "Soluciones a medida para cada desafío",
  desc: "En Arenados y Blasting ofrecemos servicios personalizados, adaptados a los requerimientos específicos de cada proyecto. Trabajamos piezas de todas las dimensiones y complejidades, garantizando resultados óptimos tanto para componentes individuales como para proyectos",
  image: benefitOneImg,
  bullets: [
    {
      title: " Transformamos tus ideas en resultados reales",
      desc: 
      "Nuestro equipo está preparado para asesorarte desde el primer momento. Escuchamos tus necesidades y las convertimos en soluciones concretas, eficientes y funcionales.",
      icon: <FaLightbulb />,
    },
    {
      title: "Especialistas en tratamiento de superficies",
      desc: "Contamos con el conocimiento, las herramientas y la experiencia para lograr acabados de excelente calidad, resistentes y duraderos.",
      icon: <BsStars />,
    },
    {
      title: "Compromiso con la innovación y la mejora continua",
      desc: "Trabajamos con procesos actualizados, priorizando la seguridad, la calidad y el cumplimiento de plazos para acompañar el crecimiento de tu negocio.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

export {benefitOne};
