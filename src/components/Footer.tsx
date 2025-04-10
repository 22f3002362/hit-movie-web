import {motion} from "framer-motion";
import {Facebook, Instagram, Twitter, Youtube, Linkedin} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {icon: <Facebook size={24} />, url: "https://facebook.com/theakarsh.gupta"},
    {
      icon: <Instagram size={24} />,
      url: "https://instagram.com/the_akarshgupta",
    },
    {icon: <Twitter size={24} />, url: "https://twitter.com/_akarshgupta"},
    {
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/theakarshgupta",
    },
  ];

  return (
    <footer className="relative pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 red-gradient"></div>

      <div className="relative z-10 section-container text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">HIT: The Third Case</h3>
            <p className="mb-6 text-white/80">
              The thrilling conclusion to the hit franchise. Experience the
              suspense, action, and mystery in theaters nationwide starting May
              1, 2025.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Movie Details</h3>
            <ul className="space-y-3 text-white/80">
              <li>Director: Sailesh Kolanu</li>
              <li>Cast: Nani, Srinidhi Shetty, Prateik Babbar</li>
              <li>Genre: Crime, Thriller, Mystery</li>
              <li>Duration: 2h 15m</li>
              <li>Language: Hindi, Telugu, Tamil, Malayalam</li>
              <li>Release Date: May 1, 2025</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About the Film
                </a>
              </li>
              <li>
                <a
                  href="#cast"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cast & Crew
                </a>
              </li>
              <li>
                <a
                  href="#trailer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Watch Trailer
                </a>
              </li>
              <li>
                <a
                  href="#tickets"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Book Tickets
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Akarsh Gupta. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
