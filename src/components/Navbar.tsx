import type React from "react";

const Navbar = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Calculamos la posición del elemento menos el alto del navbar (aprox 80px)
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold tracking-tighter text-black hover:opacity-70 transition-all active:scale-95 inline-block"
        >
          IAN FLORES
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-black transition-all hover:scale-105 active:scale-95 hidden sm:inline-block">Habilidades</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="hover:text-black transition-all hover:scale-105 active:scale-95 hidden sm:inline-block">Certificaciones</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-black transition-all hover:scale-105 active:scale-95">Contacto</a>
          {/* Bandera de Panamá Minimalista */}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-4 ml-2" title="Panamá">
            <span className="text-xl leading-none" role="img" aria-label="Panama Flag">🇵🇦</span>
            <span className="text-xs text-gray-400 hidden sm:block">PAN</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar