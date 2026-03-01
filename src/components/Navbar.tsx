import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Info, Phone, Briefcase, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'Destinations', path: '/destinations', icon: Compass },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 pointer-events-none">
      <motion.nav
        layout
        initial={false}
        className={`
          pointer-events-auto
          relative flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-3
          bg-nature-900/80 backdrop-blur-2xl border border-white/10
          rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          transition-all duration-500
        `}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
  whileHover={{ rotate: 10, scale: 1.1 }}
  className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
>
  <img src={logo} alt="Hamnawa Travels Logo" className="w-full h-full object-cover" />
</motion.div>
          <span className="text-white font-serif font-bold text-xl tracking-tight hidden sm:block">
            Hamnawa
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${location.pathname === link.path 
                  ? 'bg-white text-nature-900 shadow-lg' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/work-with-us"
            className="hidden sm:flex items-center gap-2 bg-nature-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-nature-400 transition-all shadow-lg shadow-nature-500/20"
          >
            <Briefcase className="w-4 h-4" />
            Join Us
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 bg-nature-900/95 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-6 flex flex-col gap-3 shadow-2xl overflow-hidden md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsExpanded(false)}
                  className={`
                    flex items-center gap-4 p-4 rounded-2xl text-lg font-medium transition-all
                    ${location.pathname === link.path 
                      ? 'bg-white text-nature-900' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'}
                  `}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
              <Link
                to="/work-with-us"
                onClick={() => setIsExpanded(false)}
                className="flex items-center justify-center gap-3 bg-nature-500 text-white p-4 rounded-2xl font-bold text-lg mt-2"
              >
                <Briefcase className="w-5 h-5" />
                Work With Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
