import Image from "next/image";
import React from "react";
import { Container }  from "@/components/layout";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string | JSX.Element;
    image: any;
    secondImage: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 mb-20 font-light font-sans lg:gap-10 lg:flex-nowrap animate-fade-up animate-once animate-duration-[1700ms] rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/10">
        <div
          className={`flex items-center justify-center w-full m-4 lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          } group perspective-1000`}>
          <div className="relative flex items-center justify-center w-full h-full lg:h-full transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-1 hover:-translate-y-2">
            {/* Efectos de fondo 3D */}
            <div className="absolute inset-0 bg-gradient-to-br from-btn/20 to-customBlue/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl transform scale-125 animate-pulse"></div>
            
            <Image
              src={data.image}
              width={1000}
              height={1000}
              alt="Benefits"
              className="object-cover object-center w-full h-full rounded-2xl shadow-2xl relative z-10 transform-gpu transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-btn/25"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
            
            {/* Overlay con efecto glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          } bg-gradient-to-br from-gray-800/90 to-slate-900/90 rounded-2xl p-8 lg:shadow-2xl backdrop-blur-lg border border-white/10 transform-gpu transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1 group`}>
          
          {/* Efectos de fondo animados */}
          <div className="absolute inset-0 bg-gradient-to-br from-btn/5 to-customBlue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-btn/20 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-customBlue/20 to-transparent rounded-full blur-3xl animate-float animation-delay-1000"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in animation-delay-300 font-industrial">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-300 lg:text-xl xl:text-xl animate-fade-in animation-delay-500 font-professional">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon} index={index}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className={`flex items-start mt-8 space-x-3 group transform-gpu transition-all duration-500 hover:translate-x-2 hover:-translate-y-1 animate-fade-in`} 
           style={{animationDelay: `${(props.index || 0) * 200 + 700}ms`}}>
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-gradient-to-br from-customBlue to-btn rounded-xl w-12 h-12 shadow-lg transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-customBlue/25 relative overflow-hidden">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-white relative z-10 transform-gpu transition-transform duration-300 group-hover:scale-110",
          })}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-medium text-white group-hover:text-btn transition-colors duration-300 font-industrial">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-300 text-opacity-90 group-hover:text-white transition-colors duration-300 font-professional">
            {props.children}
          </p>
        </div>
      </div>
  );
}
