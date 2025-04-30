import { ChartBarSquareIcon,} from "@heroicons/react/24/solid";
import { FaLightbulb } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Mark from "../app/page";
import benefitOneImg from "../../public/img/Imagen.png";

const benefitOne = {
  title: "Soluciones a medida para cada desafío",
  desc: "En Arenados y Blasting ofrecemos servicios personalizados, adaptados a los requerimientos específicos de cada proyecto. Trabajamos piezas de todas las dimensiones y complejidades, garantizando resultados óptimos tanto para componentes individuales como para proyectos",
  image: benefitOneImg,
  bullets: [
    {
      title: "Transformamos Tus Ideas en Resultados Concretos",
      desc: "Contamos con un equipo capacitado y con experiencia, listo para ayudarte a materializar tus proyectos con precisión, eficiencia y compromiso.",
      icon: <FaLightbulb />,
    },
    {
      title: "Especialistas en Tratamiento de Superficies",
      desc: "Nos apoyamos en técnicas especializadas y herramientas adecuadas para lograr acabados de alta calidad, durabilidad y estética en todo tipo de piezas metálicas.",
      icon: <BsStars />,
    },
    {
      title: "Innovación y Calidad para Tu Negocio",
      desc: "Aplicamos procesos modernos y seguros, alineados con estándares de excelencia, para asegurar resultados confiables y superar las expectativas de nuestros clientes.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

export {benefitOne};
