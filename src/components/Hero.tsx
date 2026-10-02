import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "../utilities";

const HeroSection = () => {
  const { isIntersecting, elementRef } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={elementRef as never}
      className={`pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col items-start min-h-[80vh] justify-center transition-all duration-1000 transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Portafolio</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight">
          Desarrollador <br className="hidden md:block"/> Full Stack.
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mt-6">
          Hola, soy <strong className="font-semibold text-black">Ian Flores</strong>. Tengo 21 años y me especializo en crear experiencias web y móviles excepcionales con un enfoque minimalista y funcional.
        </p>
      </div>
      
      <div className="mt-12 flex gap-4">
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
        >
          Contáctame
        </a>
        <a 
          href="#video" 
          onClick={(e) => scrollToSection(e, 'video')}
          className="px-8 py-3 bg-white text-black border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          Ver Presentación <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection