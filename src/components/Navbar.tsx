import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Cast", target: "cast" },
    { name: "Trailer", target: "trailer" },
    { name: "Songs", target: "songs" },
    { name: "Tickets", target: "tickets" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-movie-red to-movie-black transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center px-4">
        <ul className="flex space-x-6 md:space-x-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.target}
                smooth={true}
                duration={800}
                offset={-80}
                className="text-white hover:text-white/80 font-medium cursor-pointer relative pb-1 group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
