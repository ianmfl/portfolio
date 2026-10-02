import {Suspense} from 'react';
// import { Mail, Github, Linkedin, Instagram, ExternalLink, Play, Pause, ChevronDown } from 'lucide-react';
import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import VideoSection from './components/VideSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div id="video" className="px-6">
           <Suspense fallback={<div className="w-full max-w-4xl mx-auto aspect-video bg-gray-100 animate-pulse rounded-lg mt-12 mb-24 flex items-center justify-center text-gray-400">Cargando presentación...</div>}>
            <VideoSection />
          </Suspense>
        </div>
      </main>
      
    </div>
  )
}

export default App
