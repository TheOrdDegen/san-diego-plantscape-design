
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Valderas Designs transformed our office space with beautiful plants that perfectly match our aesthetic. Our employees love the new environment!",
      name: "Michael Rodriguez",
      title: "Office Manager",
      type: "commercial"
    },
    {
      id: 2,
      quote: "The custom plant arrangement they created for our home is absolutely stunning. Their knowledge about which plants would thrive in our space was impressive.",
      name: "Sarah Johnson",
      title: "Homeowner",
      type: "residential"
    },
    {
      id: 3,
      quote: "Their sustainable approach to landscaping was exactly what we were looking for. The outdoor space they designed for us is both beautiful and eco-friendly.",
      name: "David Thompson",
      title: "Residential Client",
      type: "residential"
    },
  ];

  return (
    <section className="section-padding bg-valderas-green-dark text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-valderas-gold text-lg font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-white/80">
            Don't just take our word for it - hear from our satisfied clients about their 
            experiences with Valderas Designs.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-valderas-green-mid rounded-lg p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-valderas-green-dark/20 w-12 h-12" />
              <p className="text-white/90 mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-white/70 text-sm">{testimonial.title}</p>
                <span className="inline-block mt-2 text-xs uppercase tracking-wider bg-valderas-gold text-valderas-green-dark px-3 py-1 rounded-full">
                  {testimonial.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
