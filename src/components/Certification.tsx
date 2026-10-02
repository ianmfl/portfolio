import { ExternalLink } from "lucide-react";
import { certifications, useIntersectionObserver } from "../utilities";

function CertificationsSection () {
  const { isIntersecting, elementRef } = useIntersectionObserver();

  return (
    <section 
      id="certifications" 
      ref={elementRef as never}
      className={`py-24 px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="mb-12 border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-4">Certificaciones</h2>
        <p className="text-gray-500 font-light">Respaldando mi conocimiento con instituciones reconocidas.</p>
      </div>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <a 
            key={index} 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl border border-gray-200 hover:border-black transition-colors"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-black group-hover:underline underline-offset-4">{cert.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
              </div>
              <ExternalLink size={20} className="text-gray-400 group-hover:text-black transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection