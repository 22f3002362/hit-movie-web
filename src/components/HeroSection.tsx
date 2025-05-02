import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";

const HeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("/hero-desktop.png");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Notification messages that will scroll
  const notifications = ["Hit: The Third Case is now all yours.."];

  // Current notification index
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Set background image based on screen size
      if (width < 640) {
        setBackgroundImage("/phone.png");
        setIsMobileScreen(true);
        setIsSmallScreen(true);
      } else if (width < 1024) {
        setBackgroundImage("/tablet (1).png");
        setIsMobileScreen(false);
        setIsSmallScreen(true);
      } else {
        setBackgroundImage("/hero.png");
        setIsMobileScreen(false);
        setIsSmallScreen(false);
      }
    };

    // Set initial image and screen states
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to cycle through notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 5000); // Change notification every 5 seconds

    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center pt-20"
        style={{backgroundImage: `url('${backgroundImage}')`}}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex ${
              isSmallScreen
                ? "flex-col items-center text-center"
                : "flex-row items-start"
            }`}
          >
            <motion.div
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className={`${
                isSmallScreen ? "w-full" : "lg:w-1/2"
              } p-4 sm:p-6 md:p-8`}
            >
              <img
                src="/case.PNG"
                alt="HIT: The Third Case Logo"
                className={`${isSmallScreen ? "mx-auto" : ""} w-full max-w-md`}
              />
              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.8}}
                className={`mt-5 max-w-lg text-lg ${
                  isSmallScreen ? "mx-auto" : "mx-auto"
                } ${isMobileScreen ? "hidden" : "text-[#843333]"} sm:mt-6`}
              >
                <b>Get Ready for the Ultimate Showdown! Join the Battle!</b>
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Release date tag - improved positioning */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 1}}
          className={`absolute ${
            isMobileScreen
              ? "bottom-32 left-1/3 -translate-x-1/2"
              : isSmallScreen
              ? "absolute top-40 right-10 -translate-x-1/2"
              : "bottom-32 right-40"
          } z-10 rounded-lg bg-movie-red p-3 px-5 text-white shadow-lg`}
        >
          <span className="font-bold">May 1, 2025</span>
        </motion.div>

        {/* Improved scroll indicator - positioned above notification panel */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: [0, 1, 0]}}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatDelay: 1,
          }}
          className={`absolute ${
            isMobileScreen ? "bottom-16" : "bottom-16"
          } left-1/2 -translate-x-1/2 z-10`}
        >
          <div className="flex flex-col items-center text-movie-red">
            <span className="mb-1 block text-sm sm:mb-2 sm:text-base">
              Scroll Down
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Fixed Notification Panel - optimized for mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="bg-gradient-to-r from-movie-red to-movie-black py-3 px-4 shadow-lg">
          <div className="container mx-auto flex items-center">
            <div className="bg-white text-movie-red rounded-full px-2 py-1 mr-3 flex-shrink-0 font-bold text-xs">
              NEW
            </div>
            <div className="overflow-hidden relative flex-1 h-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotification}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -20}}
                  transition={{duration: 0.5}}
                  className="text-white font-medium text-sm sm:text-base pb-0.5"
                >
                  {notifications[currentNotification]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Safe area padding for notched phones */}
        <div className="h-safe-area-bottom bg-movie-black"></div>
      </div>
    </>
  );
};

export default HeroSection;
