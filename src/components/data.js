import { ChartBarSquareIcon,} from "@heroicons/react/24/solid";
import { FaLightbulb } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Mark from "../app/page";
import benefitOneImg from "../../public/img/Imagen.png";

const benefitOne = {
  title: "Soluciones a medida para cada desafío",
  desc: "En Arenados y Blasting, somos expertos en soluciones personalizadas para cada desafío. Nos especializamos en el tratamiento de piezas de todas las dimensiones y complejidades, desde componentes pequeños hasta grandes estructuras",
  image: benefitOneImg,
  bullets: [
    {
      title: "Transformamos Tus Ideas en Resultados Concretos",
      desc: "Nuestro equipo de profesionales altamente capacitados y con amplia experiencia en el rubro, se encargará de brindarte la solución que necesitas para tu proyecto.",
      icon: <FaLightbulb />,
    },
    {
      title: "Especialistas en Tratamiento de Superficies",
      desc: " Contamos con la tecnología y los conocimientos necesarios para brindarte un servicio de calidad y a la altura de tus expectativas.",
      icon: <BsStars />,
    },
    {
      title: "Innovación y Calidad para Tu Negocio",
      desc: " En Arenados y Blasting, trabajamos con los más altos estándares de calidad y seguridad para garantizar la satisfacción de nuestros clientes.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};
function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
export {benefitOne};
