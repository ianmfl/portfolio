import {Suspense} from 'react';
// import { Mail, Github, Linkedin, Instagram, ExternalLink, Play, Pause, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import VideoSection from './components/VideSection';
import SkillsSection from './components/Skill';
import CertificationSection from './components/Certification';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      <main>
        <div id="video" className="px-2">
           <Suspense fallback={<div className="w-full max-w-4xl mx-auto aspect-video bg-gray-100 animate-pulse rounded-lg mt-12 mb-24 flex items-center justify-center text-gray-400">Cargando presentación...</div>}>
            <VideoSection />
          </Suspense>
        </div>
        <SkillsSection />
        <CertificationSection />
      </main>
      <ContactSection />
    </div>
  )
}

export default App
