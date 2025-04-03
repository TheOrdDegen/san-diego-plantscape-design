
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'residential',
      message: ''
    });
  };

  // FAQ data
  const faqs = [
    {
      question: "What areas do you service in San Diego?",
      answer: "We service the entire San Diego county, including La Jolla, Del Mar, Carlsbad, Encinitas, Oceanside, and Chula Vista."
    },
    {
      question: "Do you offer ongoing maintenance services?",
      answer: "Yes, we offer weekly, bi-weekly, and monthly maintenance plans for both residential and commercial clients to ensure your plants stay healthy and beautiful."
    },
    {
      question: "How do I know which plants are right for my space?",
      answer: "We provide expert consultations to evaluate your space's light conditions, humidity, and other factors to recommend the perfect plants that will thrive in your specific environment."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on project scope, plant selection, and ongoing maintenance needs. We provide detailed quotes after an initial consultation so you know exactly what to expect."
    },
    {
      question: "Are your plants and practices eco-friendly?",
      answer: "Absolutely! We prioritize sustainable practices, including water conservation techniques, organic fertilizers, and locally-sourced plants whenever possible."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="relative pt-32 pb-20 bg-valderas-green-dark">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg">
              Reach out to discuss your plant design and landscaping needs. We're here to help transform your space.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact information section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Contact cards */}
            <div className="bg-valderas-beige p-8 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-valderas-green-dark">Phone</h3>
              <p className="text-gray-700 mb-3">We're available during business hours</p>
              <a href="tel:7604202273" className="text-valderas-green-dark hover:text-valderas-green-mid font-bold text-lg">
                760-420-2273
              </a>
            </div>
            
            <div className="bg-valderas-beige p-8 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-valderas-green-dark">Email</h3>
              <p className="text-gray-700 mb-3">We'll respond within 24 hours</p>
              <a href="mailto:info@valderasdesigns.com" className="text-valderas-green-dark hover:text-valderas-green-mid font-bold">
                info@valderasdesigns.com
              </a>
            </div>
            
            <div className="bg-valderas-beige p-8 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-valderas-green-dark">Service Area</h3>
              <p className="text-gray-700 mb-3">Proudly serving all of San Diego</p>
              <p className="text-valderas-green-dark font-bold">
                San Diego County, CA
              </p>
            </div>
            
            <div className="bg-valderas-beige p-8 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-valderas-green-dark w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-valderas-green-dark">Hours</h3>
              <div className="text-gray-700 space-y-1">
                <p>Monday - Friday: 8AM - 6PM</p>
                <p>Saturday: 9AM - 4PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact form section */}
      <section className="py-16 bg-valderas-beige">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-valderas-green-dark">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below to inquire about our services or request a quote. 
                We'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-valderas-green-dark focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-valderas-green-dark focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-valderas-green-dark focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-valderas-green-dark focus:border-transparent"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="consultation">Consultation Only</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-valderas-green-dark focus:border-transparent"
                    placeholder="Tell us about your project, space, or questions..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* FAQ section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-valderas-green-dark">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 mb-8">
                Find quick answers to common questions about our services, process, and expertise.
              </p>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-3 text-valderas-green-dark">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-4">Have more questions? We're here to help!</p>
                <a href="tel:7604202273" className="text-valderas-green-dark font-bold hover:text-valderas-green-mid flex items-center justify-center gap-2">
                  Call us directly <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-valderas-green-dark">
              Our Service Area
            </h2>
            <p className="text-gray-700">
              We provide plant design and landscaping services throughout San Diego County. 
              From La Jolla to Chula Vista, from the coast to inland communities, we're 
              ready to transform your space.
            </p>
          </div>
          
          <div className="bg-valderas-beige p-4 rounded-lg shadow-md">
            {/* Placeholder for map - would typically be replaced with Google Maps or similar */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">San Diego County Map</p>
              {/* In a real implementation, you would add a Google Map or other mapping service here */}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
