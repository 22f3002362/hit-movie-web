
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-white min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8"
        >
          <img 
            src="/placeholder.svg" 
            alt="HIT: The Third Case Logo" 
            className="w-full max-w-md"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-movie-black text-lg mt-6 max-w-lg"
          >
            The thrilling conclusion to the HIT franchise arrives May 1, 2025
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 p-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="w-full h-[500px] bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400">
                Movie Poster
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-movie-red p-3 rounded-lg shadow-lg text-white font-bold">
              May 1, 2025
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          repeatDelay: 1
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-movie-red flex flex-col items-center">
          <span className="block mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
