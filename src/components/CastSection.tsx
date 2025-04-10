
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CastSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const castMembers = [
    { 
      name: "Actor Name 1", 
      character: "Agent Vikram", 
      image: "/placeholder.svg" 
    },
    { 
      name: "Actor Name 2", 
      character: "Inspector Neha", 
      image: "/placeholder.svg" 
    },
    { 
      name: "Actor Name 3", 
      character: "Commissioner Sharma", 
      image: "/placeholder.svg" 
    },
    { 
      name: "Actor Name 4", 
      character: "Arjun Reddy", 
      image: "/placeholder.svg" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="cast" className="py-24 bg-gray-50">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Meet the Cast
        </motion.h2>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {castMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-200 mb-4">
                <div className="absolute inset-0 flex items-center justify-center text-xl text-gray-400">
                  Actor Photo
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-movie-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-movie-darkGray">{member.name}</h3>
              <p className="text-movie-red font-medium">as {member.character}</p>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-movie-red text-white py-2 px-4 rounded-full"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CastSection;
