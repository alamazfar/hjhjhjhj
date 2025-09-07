import React from 'react';
import { Clock, IndianRupee, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'Foot Massage',
      description: 'Relaxing pressure point massage for tired feet with aromatic oils',
      duration: '45 mins',
      price: 1200,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Full Body Massage',
      description: 'Complete body relaxation with Swedish and deep tissue techniques',
      duration: '90 mins',
      price: 2800,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Head & Shoulder Massage',
      description: 'Stress-relief focused massage for neck, shoulders, and scalp',
      duration: '60 mins',
      price: 1800,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3865677/pexels-photo-3865677.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Therapeutic massage using essential oils for mind-body wellness',
      duration: '75 mins',
      price: 2400,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3865674/pexels-photo-3865674.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Ayurvedic Massage',
      description: 'Traditional Indian healing massage with herbal oils and techniques',
      duration: '90 mins',
      price: 3200,
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Hot Stone Therapy',
      description: 'Warming stone massage to relieve muscle tension and stress',
      duration: '80 mins',
      price: 2600,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3865678/pexels-photo-3865678.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated wellness treatments designed to restore your body and mind
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-gray-900">{service.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <IndianRupee className="w-5 h-5 text-emerald-600" />
                    <span className="text-2xl font-bold text-emerald-600">{service.price}</span>
                  </div>
                </div>
                
                <a
                  href="#booking"
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:bg-emerald-700 transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not sure which service to choose?
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you find the perfect treatment for your needs. 
              Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+918001234567"
                className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call for Consultation
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;