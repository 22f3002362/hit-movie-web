
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TrailerSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.6 });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (!hasPlayed && videoRef.current) {
        videoRef.current.play().catch((e) => {
          console.error("Autoplay failed:", e);
        });
        setHasPlayed(true);
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isInView, hasPlayed]);

  return (
    <section id="trailer" className="py-24 bg-movie-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
        >
          Official Trailer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center max-w-2xl mx-auto mb-12 text-gray-300"
        >
          Witness the beginning of the end. The case that will change everything.
        </motion.p>
        
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden shadow-[0_0_40px_rgba(234,56,76,0.3)] max-w-4xl mx-auto"
        >
          {/* This is a placeholder for the video. In a real application, you would use an actual video file */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-700">
            <div className="flex items-center justify-center h-full text-2xl text-gray-400">
              Trailer Video (Autoplays when in view)
            </div>
          </div>
          
          {/* Uncomment and use this when you have an actual video */}
          {/* <video 
            ref={videoRef}
            className="w-full"
            poster="/placeholder.svg"
            controls
            muted
          >
            <source src="/trailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          
          <div className="absolute bottom-4 right-4 bg-movie-red px-4 py-2 rounded-full text-white font-bold text-sm">
            NEW
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button className="flex items-center gap-2 text-movie-red hover:text-red-400 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download HD Trailer
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default TrailerSection;
