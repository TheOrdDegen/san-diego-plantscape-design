
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Sample gallery data - to be replaced with actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545165375-7c5efd28f661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "residential",
      alt: "Indoor plant arrangement in living room"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1493673272479-a20888bcee10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      category: "commercial",
      alt: "Office lobby with elegant plant design"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558603668-6570496b8f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      category: "residential",
      alt: "Outdoor garden design"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1550091354-d347d5cf8032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      category: "commercial",
      alt: "Conference room with strategic plant placement"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1598226863630-2bbed840d862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      category: "residential",
      alt: "Kitchen herb garden setup"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1604762512526-b7068b14614a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "commercial",
      alt: "Restaurant with natural plant decor"
    },
  ];

  const openImage = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  return (
    <section className="section-padding bg-white" id="gallery">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-valderas-gold text-lg font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-valderas-green-dark">
            Gallery of Plant Designs
          </h2>
          <p className="text-gray-700">
            Explore our portfolio of residential and commercial projects. Each design 
            is crafted with care and precision to bring natural beauty to any space.
          </p>
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openImage(image.src)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                  <span className="text-white font-medium bg-valderas-green-dark/80 px-4 py-2 rounded">
                    View
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-valderas-green-dark font-medium">{image.alt}</p>
                <p className="text-sm text-gray-600 capitalize">
                  {image.category} Project
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
        
        {/* Image lightbox */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            <button 
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery preview" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
