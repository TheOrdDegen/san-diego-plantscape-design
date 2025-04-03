
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Sample gallery data - to be replaced with actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545165375-7c5efd28f661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "residential",
      alt: "Indoor plant arrangement in living room",
      description: "Custom plant arrangement for a modern living room, featuring a variety of textures and heights."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1493673272479-a20888bcee10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      category: "commercial",
      alt: "Office lobby with elegant plant design",
      description: "Professional plant installation for a corporate lobby, creating a welcoming and impressive entrance."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558603668-6570496b8f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      category: "residential",
      alt: "Outdoor garden design",
      description: "Sustainable garden design featuring drought-resistant plants native to Southern California."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1550091354-d347d5cf8032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      category: "commercial",
      alt: "Conference room with strategic plant placement",
      description: "Strategic plant placement to enhance acoustics and create a productive meeting environment."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1598226863630-2bbed840d862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      category: "residential",
      alt: "Kitchen herb garden setup",
      description: "Custom herb garden installation for a home kitchen, providing fresh herbs year-round."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1604762512526-b7068b14614a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "commercial",
      alt: "Restaurant with natural plant decor",
      description: "Restaurant plant design creating an intimate atmosphere while maintaining functionality."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1608304226307-c1bcb9da9b3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "residential",
      alt: "Home office with plants",
      description: "Productivity-boosting plant arrangement for a home office, improving air quality and focus."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1631892888688-699e8d3a015c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "commercial",
      alt: "Hotel lobby with tropical plants",
      description: "Luxurious tropical plant installation for a boutique hotel in San Diego."
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1623005329401-94059615f6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "residential",
      alt: "Residential entrance with plants",
      description: "Welcoming entrance design with architectural plants framing the doorway."
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "residential",
      alt: "Minimalist living room with statement plant",
      description: "Carefully selected statement plant to complement a minimalist interior design."
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "residential",
      alt: "Cozy reading nook with plants",
      description: "Cozy reading corner enhanced with oxygen-producing plants for relaxation."
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "commercial",
      alt: "Modern office with plant dividers",
      description: "Privacy-enhancing plant dividers for an open-concept office, improving acoustics and air quality."
    },
  ];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openImage = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="relative pt-32 pb-20 bg-valderas-green-dark">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-white/90 text-lg">
              Explore our portfolio of residential and commercial plant design and landscaping projects.
            </p>
          </div>
        </div>
      </div>
      
      {/* Gallery section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-md bg-valderas-beige">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'all' 
                    ? 'bg-valderas-green-dark text-white' 
                    : 'text-valderas-green-dark hover:bg-valderas-green-light/20'
                }`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('residential')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'residential' 
                    ? 'bg-valderas-green-dark text-white' 
                    : 'text-valderas-green-dark hover:bg-valderas-green-light/20'
                }`}
              >
                Residential
              </button>
              <button 
                onClick={() => setFilter('commercial')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'commercial' 
                    ? 'bg-valderas-green-dark text-white' 
                    : 'text-valderas-green-dark hover:bg-valderas-green-light/20'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <div 
                  className="aspect-w-4 aspect-h-3 overflow-hidden cursor-pointer"
                  onClick={() => openImage(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="object-cover w-full h-full transition-transform hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <span className="text-white font-medium bg-valderas-green-dark/80 px-4 py-2 rounded">
                      View Larger
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-valderas-green-dark mb-2">{image.alt}</h3>
                  <p className="text-gray-700 mb-3">{image.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-valderas-gold capitalize font-medium">
                      {image.category} Project
                    </span>
                    <button 
                      onClick={() => openImage(image.src)}
                      className="text-sm text-valderas-green-dark hover:text-valderas-green-mid font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state if no images match the filter */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
              <button 
                onClick={() => setFilter('all')}
                className="text-valderas-green-dark font-medium hover:text-valderas-green-mid mt-4"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Image lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none">
          <button 
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery preview" 
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </DialogContent>
      </Dialog>
      
      {/* Call to action */}
      <section className="py-16 bg-valderas-beige">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-valderas-green-dark">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how we can bring the beauty 
            of nature to your home or business with our custom plant designs.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
