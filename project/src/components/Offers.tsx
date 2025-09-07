import React from 'react';
import { Gift, Clock, Crown, Heart } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      title: 'Wellness Package',
      subtitle: 'Buy 5 Sessions, Get 1 Free',
      description: 'Perfect for regular wellness maintenance. Choose any combination of our premium services.',
      originalPrice: 12000,
      discountedPrice: 10000,
      validity: '6 months',
      icon: Gift,
      color: 'emerald',
      features: ['6 Sessions Total', 'Mix & Match Services', '6 Month Validity', 'Priority Booking']
    },
    {
      title: 'Couples Retreat',
      subtitle: 'Romantic Spa Experience',
      description: 'Enjoy a blissful couples massage session in our private treatment room.',
      originalPrice: 6000,
      discountedPrice: 4800,
      validity: '3 months',
      icon: Heart,
      color: 'pink',
      features: ['2 Full Body Massages', 'Private Room', 'Complimentary Tea', 'Aromatherapy Add-on']
    },
    {
      title: 'Monthly Membership',
      subtitle: 'Unlimited Relaxation',
      description: 'Unlimited access to all our services with exclusive member pricing.',
      originalPrice: 8000,
      discountedPrice: 5999,
      validity: '1 month',
      icon: Crown,
      color: 'amber',
      features: ['Unlimited Services', '20% Extra Discount', 'Priority Booking', 'Birthday Special']
    },
    {
      title: 'Express Package',
      subtitle: 'Quick Rejuvenation',
      description: 'Perfect for busy schedules. Quick yet effective stress relief sessions.',
      originalPrice: 4000,
      discountedPrice: 3200,
      validity: '2 months',
      icon: Clock,
      color: 'blue',
      features: ['3 Express Sessions', 'Under 45 Minutes', 'Any Service', 'Flexible Timings']
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200' };
      case 'pink': return { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-200' };
      case 'amber': return { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' };
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' };
      default: return { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200' };
    }
  };

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Special Offers & Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take advantage of our exclusive deals and membership packages designed to make wellness more affordable
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {offers.map((offer, index) => {
            const colors = getColorClasses(offer.color);
            const IconComponent = offer.icon;
            const discount = Math.round(((offer.originalPrice - offer.discountedPrice) / offer.originalPrice) * 100);
            
            return (
              <div key={index} className={`relative bg-white border-2 ${colors.border} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                {/* Discount Badge */}
                <div className={`absolute top-4 right-4 ${colors.bg} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {discount}% OFF
                </div>
                
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 ${colors.bg} text-white rounded-full`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{offer.title}</h3>
                      <p className={`${colors.text} font-semibold`}>{offer.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{offer.description}</p>

                  {/* Price */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-3xl font-bold text-gray-900">₹{offer.discountedPrice.toLocaleString()}</div>
                    <div className="text-lg text-gray-500 line-through">₹{offer.originalPrice.toLocaleString()}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Validity and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Valid for {offer.validity}
                    </div>
                    <a
                      href="#booking"
                      className={`px-6 py-3 ${colors.bg} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Announcement */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Limited Time Offer!
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            New customers get 25% off on their first visit. Valid until the end of this month.
            Book now and experience luxury wellness at unbeatable prices!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Claim 25% Off
            </a>
            <a
              href="tel:+918001234567"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Call for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;