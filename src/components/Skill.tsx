import { skills, useIntersectionObserver } from "../utilities";

function SkillsSection() {
  const { isIntersecting, elementRef } = useIntersectionObserver();

  return (
    <section 
      id="skills" 
      ref={elementRef as never}
      className={`py-24 px-6 max-w-6xl mx-auto bg-gray-50/50 rounded-3xl transition-all duration-1000 transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-4">Habilidades Técnicas</h2>
        <p className="text-gray-500 font-light">Tecnologías con las que trabajo en mi día a día.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-1 group flex items-center gap-4"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-full flex items-center justify-center p-2.5 group-hover:bg-gray-100 transition-colors">
              <img 
                src={skill.iconUrl} 
                alt={`${skill.name} logo`} 
                className="w-full h-full object-contain filter group-hover:scale-110 transition-transform" 
              />
            </div>
            <div>
              <p className="font-medium text-black">{skill.name}</p>
              <p className="text-xs text-gray-400 mt-1">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection