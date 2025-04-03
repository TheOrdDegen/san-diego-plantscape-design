
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={cn(
        "fixed w-full z-30 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-playfair font-bold text-valderas-green-dark">
              Valderas Designs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-valderas-green-dark hover:text-valderas-green-mid font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-valderas-green-dark hover:text-valderas-green-mid font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-valderas-green-dark hover:text-valderas-green-mid font-medium transition-colors"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/services#home" className="block px-4 py-2 text-valderas-green-dark hover:bg-valderas-beige">
                  For Home
                </Link>
                <Link to="/services#business" className="block px-4 py-2 text-valderas-green-dark hover:bg-valderas-beige">
                  For Business
                </Link>
                <Link to="/services" className="block px-4 py-2 text-valderas-green-dark hover:bg-valderas-beige">
                  All Services
                </Link>
              </div>
            </div>
            <Link to="/gallery" className="text-valderas-green-dark hover:text-valderas-green-mid font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-valderas-green-dark hover:text-valderas-green-mid font-medium transition-colors">
              Contact
            </Link>
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-valderas-green-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden bg-white absolute w-full left-0 right-0 shadow-md transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen py-5" : "max-h-0"
        )}
      >
        <div className="container-custom flex flex-col gap-4">
          <Link to="/" onClick={closeMenu} className="text-valderas-green-dark py-2 border-b border-gray-100">
            Home
          </Link>
          <Link to="/about" onClick={closeMenu} className="text-valderas-green-dark py-2 border-b border-gray-100">
            About
          </Link>
          <div>
            <button 
              className="flex items-center justify-between w-full text-valderas-green-dark py-2 border-b border-gray-100"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Services <ChevronDown size={16} className={servicesDropdownOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            {servicesDropdownOpen && (
              <div className="pl-4 mt-2 mb-2 flex flex-col gap-2">
                <Link to="/services#home" onClick={closeMenu} className="text-valderas-green-dark py-1">
                  For Home
                </Link>
                <Link to="/services#business" onClick={closeMenu} className="text-valderas-green-dark py-1">
                  For Business
                </Link>
                <Link to="/services" onClick={closeMenu} className="text-valderas-green-dark py-1">
                  All Services
                </Link>
              </div>
            )}
          </div>
          <Link to="/gallery" onClick={closeMenu} className="text-valderas-green-dark py-2 border-b border-gray-100">
            Gallery
          </Link>
          <Link to="/contact" onClick={closeMenu} className="text-valderas-green-dark py-2 border-b border-gray-100">
            Contact
          </Link>
          <Link to="/contact" onClick={closeMenu} className="btn-primary text-center mt-2">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
