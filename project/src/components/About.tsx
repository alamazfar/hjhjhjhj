import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Serenity Spa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to bring traditional Ayurvedic wellness to modern life, 
            we've been serving Bardhaman with premium spa experiences since 2019.
          </p>
        </div>

        {/* Story & Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in the heart of Bardhaman, Serenity Spa was born from a passion 
              for holistic wellness. Our founder, trained in traditional Ayurvedic practices 
              and modern spa techniques, envisioned a sanctuary where ancient wisdom meets 
              contemporary comfort.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, our team of certified therapists brings years of expertise in massage therapy, 
              aromatherapy, and Ayurvedic treatments. We use only premium, natural products 
              sourced from trusted suppliers across India.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified</h4>
                  <p className="text-sm text-gray-600">Licensed Therapists</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Natural</h4>
                  <p className="text-sm text-gray-600">Organic Products</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Spa Interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Premium Experience</h4>
                  <p className="text-sm text-gray-600">Luxury meets wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
          <p className="text-lg text-gray-600">Professional therapists dedicated to your wellness journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priya Sharma',
              role: 'Senior Ayurvedic Therapist',
              experience: '8+ Years Experience',
              image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
            },
            {
              name: 'Anita Das',
              role: 'Aromatherapy Specialist',
              experience: '6+ Years Experience',
              image: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
            },
            {
              name: 'Meera Ghosh',
              role: 'Massage Therapist',
              experience: '7+ Years Experience',
              image: 'https://images.pexels.com/photos/3845531/pexels-photo-3845531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-emerald-600 font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;