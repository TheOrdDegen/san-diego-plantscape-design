
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Building2, Plant, Recycle, Tool, Award, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash links for scrolling to specific sections
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="relative pt-32 pb-20 bg-valderas-green-dark">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Our Services
            </h1>
            <p className="text-white/90 text-lg">
              Discover our comprehensive range of indoor plant design and landscaping services 
              for homes, offices, and commercial spaces.
            </p>
          </div>
        </div>
      </div>
      
      {/* For Home Services */}
      <section className="section-padding bg-white" id="home">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-valderas-beige p-3 rounded-full">
                  <Home className="text-valderas-green-dark w-6 h-6" />
                </div>
                <span className="text-valderas-gold text-lg font-medium">For Home</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
                Residential Plant Design & Landscaping
              </h2>
              
              <p className="text-gray-700 mb-6">
                Transform your home into a natural sanctuary with our custom plant designs and landscaping 
                services. We create beautiful, sustainable plant solutions for indoor and outdoor spaces.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-valderas-beige p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Indoor Plant Design</h3>
                  <p className="text-gray-700 mb-4">
                    Custom plant arrangements to enhance your living spaces, from statement plants
                    to comprehensive green designs for your entire home.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Custom potted arrangements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Hanging plant installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Indoor plant styling</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-valderas-beige p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Outdoor Landscaping</h3>
                  <p className="text-gray-700 mb-4">
                    Beautiful, sustainable landscape designs for your yard, patio, or garden
                    that complement San Diego's climate and your personal style.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Drought-resistant garden design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Patio and container gardens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Ornamental landscaping</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-valderas-beige p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Plant Care & Maintenance</h3>
                  <p className="text-gray-700 mb-4">
                    Ongoing care services to keep your plants healthy and thriving, plus expert 
                    advice for plant enthusiasts who prefer DIY care.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Weekly/bi-weekly maintenance visits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Seasonal care and replanting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Plant health consultations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary">
                Request a Home Consultation
              </Link>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Home plant arrangement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Indoor plants styling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Garden landscaping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1561659531-8c0a2ec19f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Plant maintenance" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Business Services */}
      <section className="section-padding bg-valderas-beige" id="business">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1631282715445-6e939e6caa2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Office plant design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Commercial plant installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Restaurant plant decor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Office plant maintenance" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-full">
                  <Building2 className="text-valderas-green-dark w-6 h-6" />
                </div>
                <span className="text-valderas-gold text-lg font-medium">For Business</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
                Commercial Plant & Landscaping Solutions
              </h2>
              
              <p className="text-gray-700 mb-6">
                Enhance your workspace environment with professional plant design that boosts employee 
                productivity, wellness, and creates an impressive aesthetic for clients and visitors.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Office Plant Design</h3>
                  <p className="text-gray-700 mb-4">
                    Transform your workplace with custom plant installations that improve air quality,
                    reduce stress, and enhance your company's image.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Reception and common area designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Office divider plants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Executive office greenery</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Commercial Landscaping</h3>
                  <p className="text-gray-700 mb-4">
                    Create impressive outdoor spaces that welcome customers and clients while 
                    showcasing your commitment to quality and attention to detail.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Entrance and exterior landscaping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Patio and outdoor seating areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Commercial property enhancement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">Maintenance Programs</h3>
                  <p className="text-gray-700 mb-4">
                    Hassle-free care plans to keep your business plants healthy and vibrant 
                    with minimal disruption to your operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Regular scheduled maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Plant health monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plant className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Seasonal rotations and replacement</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary">
                Request a Business Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-valderas-gold text-lg font-medium">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
              Our Approach & Additional Services
            </h2>
            <p className="text-gray-700">
              Beyond our core offerings, we provide specialized services and a unique approach 
              that sets us apart in the San Diego area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-valderas-beige p-8 rounded-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-valderas-green-dark">Expert Guidance</h3>
              <p className="text-gray-700 mb-4">
                Our team provides comprehensive plant education and advice, helping you understand 
                how to get the most from your green investments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Plant selection consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Care workshops and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Custom care guides</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-valderas-beige p-8 rounded-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Recycle className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-valderas-green-dark">Sustainable Practices</h3>
              <p className="text-gray-700 mb-4">
                From water conservation to organic pest management, we prioritize eco-friendly 
                methods that protect both your plants and the environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Drought-resistant designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Organic care products</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Water-efficient systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-valderas-beige p-8 rounded-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Tool className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-valderas-green-dark">Maintenance Options</h3>
              <p className="text-gray-700 mb-4">
                Our flexible maintenance plans are designed to fit your schedule and budget, 
                ensuring your plants remain healthy with minimal effort on your part.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Weekly service plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Bi-weekly options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-valderas-green-mid w-5 h-5 mt-1 flex-shrink-0" />
                  <span>As-needed services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-valderas-green-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how our plant design and 
            landscaping services can enhance your home or business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/gallery" className="btn-outline text-white border-white hover:bg-white hover:text-valderas-green-dark">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
