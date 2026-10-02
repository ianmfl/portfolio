import { useEffect, useRef, useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  link: string;
}

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Other';
  iconUrl: string;
}

export const certifications: Certification[] = [
  {
    title: 'CS50\'s Introduction to Computer Science', // Placeholder para tu cert real
    issuer: 'HarvardX',
    link: '#', // Reemplazar con el link real
  },
  {
    title: 'CS50\'s Web Programming with Python and JavaScript', // Placeholder
    issuer: 'HarvardX',
    link: '#', // Reemplazar con el link real
  },
  {
    title: 'EF SET English Certificate - C1 Advanced', // Placeholder
    issuer: 'EF Standard English Test',
    link: '#', // Reemplazar con el link real
  }
];

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'React Native', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'NextJS', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'CSS', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'NodeJs', category: 'Backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', category: 'Backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Testing', category: 'Other', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
];


export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Si el elemento es visible, actualizamos el estado
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Opcional: dejar de observar una vez que ya apareció
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, { threshold: 0.1, ...options }); // Umbral: se activa cuando el 10% del elemento es visible

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return { isIntersecting, elementRef };
}
