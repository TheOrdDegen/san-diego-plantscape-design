
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Recycle, Plant, Leaf } from 'lucide-react';

const Services = () => {
  return (
    <section className="section-padding bg-valderas-beige" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-valderas-gold text-lg font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
            Custom Plant Design & Landscaping Solutions
          </h2>
          <p className="text-gray-700">
            Whether you're looking to enhance your home, office, or commercial space, 
            we offer tailored services to bring nature's beauty to any environment.
          </p>
        </div>
        
        {/* Services cards - 2 main categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* For Home */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]">
            <div className="p-8">
              <div className="bg-valderas-beige rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Home className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-valderas-green-dark">For Home</h3>
              <p className="text-gray-700 mb-6">
                Transform your living spaces with custom indoor plant arrangements, 
                outdoor landscaping, and personalized plant care plans.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Custom indoor plant arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Outdoor landscaping and garden design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Residential plant care and maintenance</span>
                </li>
              </ul>
              <Link to="/services#home" className="btn-outline">
                Explore Home Services
              </Link>
            </div>
          </div>
          
          {/* For Business */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]">
            <div className="p-8">
              <div className="bg-valderas-beige rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-valderas-green-dark">For Business</h3>
              <p className="text-gray-700 mb-6">
                Enhance your workplace environment with professional plant designs 
                that increase productivity, wellness, and aesthetic appeal.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Office plant design and installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Commercial landscaping solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Regular maintenance plans for businesses</span>
                </li>
              </ul>
              <Link to="/services#business" className="btn-outline">
                Explore Business Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Additional features */}
        <div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sustainable practices */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-valderas-beige rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Recycle className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Sustainable Practices</h3>
              <p className="text-gray-700">Eco-friendly approaches and sustainable solutions for all our plant services.</p>
            </div>
            
            {/* Expert Guidance */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-valderas-beige rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Expert Guidance</h3>
              <p className="text-gray-700">Personalized advice from second-generation plant and landscaping experts.</p>
            </div>
            
            {/* Affordable Maintenance */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-valderas-beige rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Plant className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Affordable Maintenance</h3>
              <p className="text-gray-700">Weekly and bi-weekly care plans to keep your plants thriving year-round.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
