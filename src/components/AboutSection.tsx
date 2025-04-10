
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">About The Film</h2>
            <p className="text-lg text-movie-darkGray mb-6">
              "HIT: The Third Case" is the thrilling conclusion to the HIT franchise, bringing together the most intense crime investigation yet. Agent Vikram and his team face their greatest challenge as they race against time to solve a series of connected murders that threaten to expose corruption at the highest levels.
            </p>
            <p className="text-lg text-movie-darkGray mb-6">
              Set against the backdrop of a city in panic, this nail-biting thriller explores themes of justice, revenge, and the human capacity for both good and evil.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-movie-red">Director</span>
                <span className="text-lg text-movie-darkGray">Sailesh Kolanu</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-movie-red">Genre</span>
                <span className="text-lg text-movie-darkGray">Crime, Thriller</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-movie-red">Duration</span>
                <span className="text-lg text-movie-darkGray">2h 15m</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-2xl text-gray-400">
                Film Still
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-lg bg-movie-red z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
