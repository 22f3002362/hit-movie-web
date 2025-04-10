
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TicketsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="tickets" className="py-24 bg-white text-movie-black">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Get Your Tickets</h2>
          <p className="text-xl mb-8 text-movie-darkGray">
            Be among the first to witness the thrilling conclusion. Tickets available now.
          </p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12 p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-lg"
          >
            <div className="text-5xl font-bold mb-2 text-movie-red">MAY 1, 2025</div>
            <div className="text-2xl font-medium text-movie-darkGray">Nationwide Release</div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">00</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">00</div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">00</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">00</div>
                <div className="text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </motion.div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://in.bookmyshow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-movie-red hover:bg-red-600 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transition-colors duration-300"
          >
            Book on BookMyShow
          </motion.a>
          
          <p className="text-sm text-gray-500 mt-4">
            Redirects to BookMyShow booking portal for HIT: The Third Case
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-movie-red">100+</div>
            <div className="text-movie-darkGray">Screens</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-movie-red">20+</div>
            <div className="text-movie-darkGray">Cities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-movie-red">4K</div>
            <div className="text-movie-darkGray">Ultra HD</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-movie-red">Dolby</div>
            <div className="text-movie-darkGray">Atmos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TicketsSection;
