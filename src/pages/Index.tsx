import {useEffect} from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CastSection from "@/components/CastSection";
import TrailerSection from "@/components/TrailerSection";
import TicketsSection from "@/components/TicketsSection";
import SongsSection from "@/components/SongsSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "HIT: The Third Case | Official Movie Website";

    // Implement countdown timer for release date
    const countdownElements = document.querySelectorAll(".countdown-value");
    if (countdownElements.length) {
      const releaseDate = new Date("May 1, 2025").getTime();

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = releaseDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElements[0].textContent = days.toString().padStart(2, "0");
        countdownElements[1].textContent = hours.toString().padStart(2, "0");
        countdownElements[2].textContent = minutes.toString().padStart(2, "0");
        countdownElements[3].textContent = seconds.toString().padStart(2, "0");
      };

      updateCountdown(); // Initial update
      setInterval(updateCountdown, 1000); // Update every second
    }
  }, []);

  return (
    <div className="bg-white relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CastSection />
      <TrailerSection />
      <SongsSection />
      <TicketsSection />
      <Footer />
    </div>
  );
};

export default Index;
