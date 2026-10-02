import { useIntersectionObserver } from '../utilities';
import presentationVideo from '../assets/Sample 2.mp4'

function VideoSection() {
  const { isIntersecting, elementRef } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="video" 
      ref={elementRef as never}
      className={`py-24 px-6 max-w-5xl mx-auto transition-all duration-1000 transform ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Presentación</p>
        {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mt-2">Conóceme un poco más</h2> */}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-xl aspect-video">
        <video 
          src={presentationVideo}
          autoPlay
        controls
          playsInline
          preload="metadata"
        className="w-full h-full object-cover"
        
        >
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </section>
  );
};

export default VideoSection