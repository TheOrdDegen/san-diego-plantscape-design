
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <span className="text-valderas-gold text-lg font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
              Second-Generation Plant and Landscape Expertise
            </h2>
            <p className="text-gray-700 mb-6">
              At Valderas Designs, we bring a lifetime of passion and expertise to every project. As a second-generation landscaper and plant enthusiast, we've built our business on deep knowledge, sustainable practices, and a genuine love for creating beautiful spaces.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-valderas-beige p-3 rounded-full">
                  <Leaf className="text-valderas-green-dark w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-valderas-green-dark">Expert Guidance</h3>
                  <p className="text-gray-700">Personalized plant selection for your unique space and needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-valderas-beige p-3 rounded-full">
                  <Award className="text-valderas-green-dark w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-valderas-green-dark">Sustainable Practices</h3>
                  <p className="text-gray-700">Eco-friendly approaches that honor our commitment to the environment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-valderas-beige p-3 rounded-full">
                  <Heart className="text-valderas-green-dark w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-valderas-green-dark">San Diego Expertise</h3>
                  <p className="text-gray-700">Local knowledge for plants that thrive in our unique climate</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Plant expert at work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
