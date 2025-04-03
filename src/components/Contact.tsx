
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
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

  return (
    <section className="section-padding bg-valderas-beige" id="contact">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-valderas-gold text-lg font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
            Get In Touch
          </h2>
          <p className="text-gray-700">
            Ready to transform your space with beautiful plants? Reach out to us for a consultation 
            or to request a quote for your project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-valderas-green-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-3 rounded-full">
                    <Phone className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-valderas-green-dark">Phone</h4>
                    <p className="text-gray-700">760-420-2273</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-3 rounded-full">
                    <Mail className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-valderas-green-dark">Email</h4>
                    <p className="text-gray-700">info@valderasdesigns.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-valderas-beige p-3 rounded-full">
                    <MapPin className="text-valderas-green-dark w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-valderas-green-dark">Service Area</h4>
                    <p className="text-gray-700">San Diego, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-valderas-green-dark mb-4">Service Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-valderas-green-dark">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
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
                      Email Address
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
                
                <div className="grid md:grid-cols-2 gap-6">
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
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
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
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-valderas-green-dark focus:border-transparent"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
