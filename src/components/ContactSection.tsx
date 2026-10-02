import { Mail,GitBranch, Camera } from 'lucide-react';
import { useIntersectionObserver } from "../utilities";

function ContactSection () {
  const { isIntersecting, elementRef } = useIntersectionObserver();

  return (
    <section 
      id="contact" 
      ref={elementRef as never}
      className={`py-24 px-6 bg-black text-white mt-12 transition-all duration-1000 transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Trabajemos juntos.</h2>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o buscas un desarrollador Full Stack comprometido? Me encantaría escuchar de ti.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
          <a href="mailto:contacto@ianflores.me" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 font-medium">
            <Mail size={20} />
            Envíame un correo
          </a>
          <div className="flex gap-4">
            {/* <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-110 active:scale-95 text-white" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a> */}
            <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-110 active:scale-95 text-white" aria-label="GitHub">
              <GitBranch size={24} />
            </a>
            <a href="https://www.instagram.com/ianm_0407/" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-110 active:scale-95 text-white" aria-label="Instagram">
              <Camera size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection