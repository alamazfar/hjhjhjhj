import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Foot Massage',
    'Full Body Massage',
    'Head & Shoulder Massage',
    'Aromatherapy',
    'Ayurvedic Massage',
    'Hot Stone Therapy'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'Admin Dashboard', href: '/admin' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Serenity Spa</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the ultimate wellness journey at Bardhaman's premier spa. 
              Where traditional Ayurvedic treatments meet modern luxury.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/serenityspa"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/serenityspa"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/serenityspa"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Wellness Street</p>
                  <p>Bardhaman, West Bengal 713101</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+918001234567"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  +91 80012 34567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@serenityspa.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  info@serenityspa.com
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6">
              <h5 className="font-semibold text-emerald-400 mb-2">Operating Hours</h5>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
                <p>Sat - Sun: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for wellness tips, special offers, and spa updates
            </p>
            <div className="max-w-sm mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
              />
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Serenity Spa Bardhaman. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;