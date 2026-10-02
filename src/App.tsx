import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { Mail, Github, Linkedin, Instagram, ExternalLink, Play, Pause, ChevronDown } from 'lucide-react';
import './App.css'


function useIntersectionObserver(options = {}) {
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

function App() {


  return (
    <>
      
    </>
  )
}

export default App
