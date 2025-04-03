
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Award, Heart, TreeDeciduous, Recycle, Check } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="relative pt-32 pb-20 bg-valderas-green-dark">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              About Valderas Designs
            </h1>
            <p className="text-white/90 text-lg">
              Learn about our story, our passion for plants, and our commitment to creating 
              beautiful, sustainable spaces in San Diego.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our story section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-valderas-gold text-lg font-medium">Our Story</span>
              <h2 className="text-3xl font-bold mb-6 text-valderas-green-dark">
                Second-Generation Expertise
              </h2>
              <p className="text-gray-700 mb-4">
                Valderas Designs was born from a lifelong passion for plants and landscaping. As a second-generation landscaper, our founder learned the art of creating beautiful outdoor spaces from an early age, working alongside family to master the craft.
              </p>
              <p className="text-gray-700 mb-4">
                This foundation of knowledge was enhanced through formal education in horticulture and sustainable landscape design, creating a unique blend of traditional wisdom and modern techniques.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we bring this rich background to every project, whether we're designing an elegant office plant display or creating a drought-resistant landscape for a San Diego home.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558603668-9636afccfe8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" 
                alt="Landscape designer at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and values */}
      <section className="section-padding bg-valderas-beige">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-valderas-gold text-lg font-medium">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
              Our Mission and Values
            </h2>
            <p className="text-gray-700">
              At Valderas Designs, we're guided by core principles that inform everything we do,
              from plant selection to customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-valderas-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-valderas-green-dark">Quality First</h3>
              <p className="text-gray-700">
                We never compromise on the health and beauty of our plants. Each one is carefully selected
                to ensure it thrives in its intended environment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-valderas-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Recycle className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-valderas-green-dark">Sustainability</h3>
              <p className="text-gray-700">
                We prioritize eco-friendly practices, from water-wise plant selection to organic care methods,
                reducing environmental impact while creating beautiful spaces.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-valderas-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-valderas-green-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-valderas-green-dark">Client Satisfaction</h3>
              <p className="text-gray-700">
                Your vision is our priority. We work closely with each client to understand their needs and
                exceed their expectations with personalized plant solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why choose us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558603668-9a5b01dd655b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional plant installation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <span className="text-valderas-gold text-lg font-medium">Why Choose Us</span>
              <h2 className="text-3xl font-bold mb-6 text-valderas-green-dark">
                The Valderas Difference
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-2 rounded-full flex-shrink-0">
                    <Check className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-valderas-green-dark">Local Expertise</h3>
                    <p className="text-gray-700">Deep knowledge of San Diego's climate and growing conditions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-2 rounded-full flex-shrink-0">
                    <Check className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-valderas-green-dark">Personalized Approach</h3>
                    <p className="text-gray-700">Customized solutions that match your specific space and needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-2 rounded-full flex-shrink-0">
                    <Check className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-valderas-green-dark">Ongoing Support</h3>
                    <p className="text-gray-700">Maintenance plans and plant care advice to ensure lasting beauty</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-2 rounded-full flex-shrink-0">
                    <Check className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-valderas-green-dark">Sustainable Practices</h3>
                    <p className="text-gray-700">Eco-friendly methods that conserve resources and protect the environment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-2 rounded-full flex-shrink-0">
                    <Check className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-valderas-green-dark">Competitive Pricing</h3>
                    <p className="text-gray-700">Quality plant design and landscaping at fair, transparent prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our team section - simplified version */}
      <section className="section-padding bg-valderas-beige">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-valderas-gold text-lg font-medium">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
              Meet the Experts
            </h2>
            <p className="text-gray-700">
              Our experienced team brings together expertise in horticulture, design, and sustainable
              landscaping to create beautiful, thriving plant environments.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-valderas-green-dark mb-8">
              Our dedicated team of professionals is committed to bringing the beauty of nature to your spaces.
              With backgrounds in horticulture, landscaping, and design, we have the expertise to handle projects
              of any size, from small residential plant arrangements to large commercial landscapes.
            </p>
            
            <p className="text-valderas-green-dark font-medium">
              Contact us today to talk with a plant expert and start your project!
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
