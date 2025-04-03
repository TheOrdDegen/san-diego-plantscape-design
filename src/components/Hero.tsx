
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
              Transform Your Space with Stunning Plants
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Elevate your home or business with our expert indoor plant design and landscaping services in San Diego.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services#home" className="btn-primary">
                For Home
              </Link>
              <Link to="/services#business" className="btn-secondary">
                For Business
              </Link>
              <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-valderas-green-dark">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
