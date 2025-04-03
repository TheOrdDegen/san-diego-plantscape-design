
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-valderas-green-dark text-white">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-playfair font-bold mb-4">Valderas Designs</h2>
            <p className="mb-6 text-white/70">
              Transforming spaces with expert plant design and landscaping services in San Diego.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#home" className="text-white/70 hover:text-white transition-colors">
                  Residential Plant Design
                </Link>
              </li>
              <li>
                <Link to="/services#business" className="text-white/70 hover:text-white transition-colors">
                  Commercial Landscaping
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Plant Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Sustainable Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Plant Consultations
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-valderas-gold" />
                <span>760-420-2273</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-valderas-gold" />
                <span>info@valderasdesigns.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-valderas-gold" />
                <span>Serving the greater San Diego area</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} Valderas Designs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
