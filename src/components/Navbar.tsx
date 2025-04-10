
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
    { name: "Tickets", target: "tickets" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`floating-navbar glass-effect transition-all duration-300 ${
        scrolled ? "px-6 py-3" : "px-4 py-2"
      }`}
    >
      <div className="flex justify-center items-center">
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
