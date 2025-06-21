import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming this path is correct

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about-project', text: 'About Project & AI' },
  { to: '/iot-basics', text: 'IoT & Smart Home Basics' },
  { to: '/zigbee-detail', text: 'ZigBee in Detail' },
  { to: '/system-implementation', text: 'System Implementation' },
  { to: '/discussion-results', text: 'Discussion & Results' },
  { to: '/abstract', text: 'Abstract' },
  // { to: '/contact', text: 'Contact' }, // Optional: Add if you have a contact page
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = "text-primary font-semibold border-b-2 border-primary";
  const inactiveLinkStyle = "text-foreground hover:text-primary transition-colors duration-300";

  return (
    <motion.header
      className={`bg-background/80 backdrop-blur-md w-full top-0 z-50 transition-all duration-300 ${isSticky ? 'sticky shadow-md' : 'relative'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-heading font-bold text-primary">
          IoT Smart Home Project
        </NavLink>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${isActive ? activeLinkStyle : inactiveLinkStyle} py-2`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden bg-background shadow-lg absolute w-full flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              className={({ isActive }) =>
                `w-full text-center py-2 ${isActive ? activeLinkStyle : inactiveLinkStyle}`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;