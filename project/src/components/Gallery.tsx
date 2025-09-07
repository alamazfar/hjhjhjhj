import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Relaxing Spa Environment',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Full Body Massage',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/3865674/pexels-photo-3865674.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Aromatherapy Session',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Luxury Treatment Room',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Foot Massage Therapy',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Ayurvedic Treatment',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/3865677/pexels-photo-3865677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Head Massage',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/3865678/pexels-photo-3865678.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Hot Stone Therapy',
      category: 'Treatment'
    },
    {
      url: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Reception Area',
      category: 'Interior'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % images.length : 0);
  };

  const prevImage = () => {
    setSelectedImage(prev => prev !== null ? (prev - 1 + images.length) % images.length : 0);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our serene spa environment and premium treatment facilities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <h4 className="text-lg font-semibold mb-2">{image.title}</h4>
                  <span className="px-3 py-1 bg-emerald-600 rounded-full text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experience Our Spa Virtually
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Watch our virtual tour to get a feel of the tranquil atmosphere and premium facilities
            </p>
            <button className="group inline-flex items-center space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Watch Virtual Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h4 className="text-lg font-semibold">{images[selectedImage].title}</h4>
              <p className="text-sm opacity-80">{images[selectedImage].category}</p>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;