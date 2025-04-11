import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.3});

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.6},
    },
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
            <p className="text-lg text-justify text-movie-darkGray mb-6">
              "HIT: The Third Case" is an upcoming Indian Telugu-language crime
              thriller film written and directed by Sailesh Kolanu. Produced by
              Prashanti Tipirneni and Nani, under Wall Poster Cinema and
              Unanimous Productions. The third installment in the HIT Universe
              and the sequel to HIT: The Second Case (2022), the film stars Nani
              and Srinidhi Shetty in the lead roles, alongside Adil Pala, Rao
              Ramesh, Brahmaji, and Maganti Srinath.
            </p>
            <p className="text-lg text-justify text-movie-darkGray mb-6">
              Arjun Sarkaar, an SP in HIT at Visakhapatnam, gets assigned to a
              high priority case for the HIT in Jammu and Kashmir to catch a
              group of serial killers responsible for the gruesome murders of
              several people.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-movie-red">
                  Director
                </span>
                <span className="text-lg text-movie-darkGray">
                  Sailesh Kolanu
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-movie-red">Genre</span>
                <span className="text-lg text-movie-darkGray">
                  Crime, Thriller
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-movie-red">
                  Duration
                </span>
                <span className="text-lg text-movie-darkGray">2h 15m</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/ppp.jpg"
                alt="HIT: The Third Case Movie Poster"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-lg bg-movie-red z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
