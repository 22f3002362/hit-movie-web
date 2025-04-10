import {useRef} from "react";
import {motion, useInView} from "framer-motion";

const TrailerSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {once: false, amount: 0.6});

  // YouTube video ID - replace with your actual trailer ID
  const youtubeVideoId = "4ydZgW5M4Wk";

  return (
    <section id="trailer" className="py-24 bg-movie-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
        >
          Official Teaser
        </motion.h2>

        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.2}}
          viewport={{once: true}}
          className="text-xl text-center max-w-2xl mx-auto mb-12 text-gray-300"
        >
          Witness the beginning of the end. The case that will change
          everything.
        </motion.p>

        <motion.div
          ref={containerRef}
          initial={{opacity: 0, scale: 0.95}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="relative rounded-lg overflow-hidden shadow-[0_0_40px_rgba(234,56,76,0.3)] w-full max-w-6xl mx-auto"
        >
          {/* YouTube embed with responsive container */}
          <div className="relative w-full" style={{paddingTop: "56.25%"}}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=${
                isInView ? 1 : 0
              }&mute=1&rel=0&modestbranding=1&showinfo=1`}
              title="HIT: The Third Case Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute top-4 right-4 bg-movie-red px-4 py-2 rounded-full text-white font-bold text-sm">
            NEW
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{once: true}}
          className="flex justify-center mt-8"
        >
          <a
            href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-movie-red hover:text-red-400 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Watch on YouTube
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default TrailerSection;
