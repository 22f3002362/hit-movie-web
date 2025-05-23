import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef, useState, useEffect} from "react";

const TicketsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.3});

  // State to store countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 327, // Adjust these values as needed
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    // Set your movie release date - using a future date to ensure positive values
    const releaseDate = new Date("May 1, 2025 00:00:00").getTime();

    // Update the countdown every second
    const timer = setInterval(() => {
      try {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the time remaining between now and the release date
        const distance = releaseDate - now;

        // If the release date has passed, clear the timer and set all values to 0
        if (distance < 0) {
          clearInterval(timer);
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
          return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update state with new values
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } catch (error) {
        console.error("Error in countdown timer:", error);
        // Fallback to static values if there's an error
        setTimeLeft({
          days: 327,
          hours: 12,
          minutes: 45,
          seconds: 30,
        });
      }
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Helper function to format numbers with leading zeros
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <section
      id="tickets"
      className="py-24 text-movie-black relative"
      style={{
        backgroundImage: "url('/red2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
          transition={{duration: 0.6}}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title text-center mb-4 text-white">
            Get Your Tickets
          </h2>
          <p className="text-xl mb-8 text-white">
            Be among the first to witness the thrilling conclusion. Tickets
            available now.
          </p>

          <motion.div
            initial={{scale: 0.9, opacity: 0}}
            animate={
              isInView ? {scale: 1, opacity: 1} : {scale: 0.9, opacity: 0}
            }
            transition={{delay: 0.3, duration: 0.6}}
            className="mb-12 p-6 rounded-2xl bg-white bg-opacity-90 border border-gray-200 shadow-lg"
          >
            <div className="text-5xl font-bold mb-2 text-movie-red">
              MAY 1, 2025
            </div>
            <div className="text-2xl font-medium text-movie-darkGray">
              Nationwide Release
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-movie-red countdown-value">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </motion.div>

          <motion.a
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            href="https://in.bookmyshow.com/patna/movies/hit-the-third-case/ET00410905?type=coming-soon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-movie-red hover:bg-red-600 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transition-colors duration-300"
          >
            Book on BookMyShow
          </motion.a>

          <p className="text-sm text-white mt-4">
            Redirects to BookMyShow booking portal for HIT: The Third Case
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          animate={isInView ? {opacity: 1} : {opacity: 0}}
          transition={{delay: 0.6, duration: 0.8}}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-movie-red">100+</div>
            <div className="text-white">Screens</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-movie-red">20+</div>
            <div className="text-white">Cities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-movie-red">4K</div>
            <div className="text-white">Ultra HD</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-movie-red">Dolby</div>
            <div className="text-white">Atmos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TicketsSection;
