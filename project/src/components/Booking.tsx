import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CreditCard } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    paymentMethod: 'online'
  });

  const services = [
    { name: 'Foot Massage', price: 1200 },
    { name: 'Full Body Massage', price: 2800 },
    { name: 'Head & Shoulder Massage', price: 1800 },
    { name: 'Aromatherapy Massage', price: 2400 },
    { name: 'Ayurvedic Massage', price: 3200 },
    { name: 'Hot Stone Therapy', price: 2600 }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking request submitted! We will confirm your appointment within 30 minutes.');
  };

  const selectedService = services.find(s => s.name === formData.service);

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your preferred service, date, and time. We'll confirm your booking within 30 minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Booking Form */}
              <div className="md:w-2/3 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name} - ₹{service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Select Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Select Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      >
                        <option value="">Choose time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <CreditCard className="w-4 h-4 inline mr-2" />
                      Payment Method
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={handleInputChange}
                          className="mr-3 text-emerald-600"
                        />
                        Pay Online (UPI/Card/Net Banking)
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="spa"
                          checked={formData.paymentMethod === 'spa'}
                          onChange={handleInputChange}
                          className="mr-3 text-emerald-600"
                        />
                        Pay at Spa
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    {formData.paymentMethod === 'online' ? 'Book & Pay Now' : 'Book Appointment'}
                  </button>
                </form>
              </div>

              {/* Booking Summary */}
              <div className="md:w-1/3 bg-emerald-50 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>
                
                {selectedService && (
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-semibold">{selectedService.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold">₹{selectedService.price}</span>
                    </div>
                    {formData.date && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-semibold">{formData.date}</span>
                      </div>
                    )}
                    {formData.time && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-semibold">{formData.time}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="border-t border-emerald-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-emerald-600">
                      ₹{selectedService ? selectedService.price : 0}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 text-sm text-gray-600">
                  <h4 className="font-semibold mb-2">Booking Policy:</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Free cancellation up to 2 hours before</li>
                    <li>• Confirmation via WhatsApp & Email</li>
                    <li>• Arrive 10 minutes early</li>
                    <li>• All equipment sanitized</li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Need help?</p>
                  <a
                    href="tel:+918001234567"
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    Call: +91 80012 34567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;