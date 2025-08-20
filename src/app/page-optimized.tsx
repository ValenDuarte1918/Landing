import { 
  Container, 
  Hero, 
  SectionHeader, 
  PageSection,
  Testimonials, 
  AppleCardsCarouselDemo, 
  LayoutGridDemo, 
  Benefits 
} from "@/components";
import { data } from "@/data";

export default function HomeOptimized() {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo reutilizables */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-btn/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-customBlue/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-btn/30 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-customBlue/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-customBlue/20 rounded-full animate-float-slow"></div>
      </div>

      <Container className="relative z-10">
        <Hero />
        
        {/* Sección Sobre Nosotros usando componentes optimizados */}
        <PageSection id="nosotros" backgroundColor="gray-900">
          <SectionHeader
            preTitle="Nuestra Historia"
            title="Sobre Nosotros"
            highlightWord="Nosotros"
            description="Empresa familiar con más de 15 años de experiencia en el tratamiento y protección de superficies metálicas. Nos especializamos en brindar soluciones de alta calidad."
          />
          
          {/* Contenido específico de la sección */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ofrecer servicios especializados en el tratamiento de superficies metálicas, 
                  garantizando la máxima calidad y durabilidad en cada proyecto.
                </p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser reconocidos como líderes en la industria del tratamiento de superficies 
                  metálicas, innovando constantemente en técnicas y tecnologías.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Benefits imgPos="right" data={data} />
            </div>
          </div>
        </PageSection>

        {/* Sección Servicios */}
        <PageSection id="servicios" backgroundColor="gray-800">
          <SectionHeader
            preTitle="Lo que ofrecemos"
            title="Nuestros Servicios"
            highlightWord="Servicios"
            description="Soluciones especializadas para el tratamiento y protección de superficies metálicas con tecnología de vanguardia."
          />
          
          {/* Grid de servicios simplificado */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Los servicios se renderizan aquí */}
          </div>
        </PageSection>

        {/* Sección Trabajos */}
        <PageSection id="trabajos" backgroundColor="gray-900">
          <SectionHeader
            preTitle="Portfolio"
            title="Nuestros Trabajos Realizados"
            highlightWord="Trabajos Realizados"
            description="Descubre algunos de los proyectos que hemos realizado con precisión y dedicación."
          />
          
          {/* Componentes de trabajos */}
          <AppleCardsCarouselDemo />
          <LayoutGridDemo />
        </PageSection>
      </Container>

      <Testimonials />

      {/* Otras secciones... */}
    </div>
  );
}
