import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";

const CastSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});

  const castMembers = [
    {
      name: "Nani",
      character: "Arjun Sarkaar",
      image: "/Nani.jpg",
      profileUrl: "https://www.instagram.com/nameisnani/",
    },
    {
      name: "Shrinidhi Shetty",
      character: "Mrudula",
      image: "/srinidhi.jpeg",
      profileUrl: "https://www.instagram.com/srinidhi_shetty/",
    },
    // {
    //   name: "Prateik Babbar",
    //   character: "Not revealed yet",
    //   image: "/prateik.jpg",
    //   profileUrl: "https://www.instagram.com/_prat/",
    // },
    // {
    //   name: "Samuthirakani",
    //   character: "Not revealed yet",
    //   image: "/Samuthirakani.jpeg",
    //   profileUrl: "https://en.wikipedia.org/wiki/P._Samuthirakani/",
    // },
  ];

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.2},
    },
  };

  const itemVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.6, ease: "easeOut"},
    },
  };

  return (
    <section
      id="cast"
      className="py-24 relative"
      style={{
        backgroundImage: "url('/red1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="section-container relative z-10">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
          transition={{duration: 0.6}}
          className="section-title text-center mb-16 text-white"
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
                <img
                  src={member.image}
                  alt={`${member.name} as ${member.character}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-movie-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-movie-red font-medium">
                as {member.character}
              </p>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="bg-movie-red text-white py-2 px-4 rounded-full"
                >
                  View Profile
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CastSection;
