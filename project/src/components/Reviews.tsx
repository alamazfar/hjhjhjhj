import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Anita Sharma',
      rating: 5,
      review: 'Absolutely amazing experience! The Ayurvedic massage was incredibly relaxing and the therapist was very professional. The ambiance is perfect for unwinding after a stressful week.',
      service: 'Ayurvedic Massage',
      date: '2 weeks ago',
      avatar: 'https://images.pexels.com/photos/3845531/pexels-photo-3845531.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      review: 'Best spa in Bardhaman! I regularly come here for full body massage and every time the service exceeds my expectations. Staff is courteous and the facilities are top-notch.',
      service: 'Full Body Massage',
      date: '1 month ago',
      avatar: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Priya Das',
      rating: 5,
      review: 'The aromatherapy session was divine! I felt completely rejuvenated. The use of natural oils and the peaceful environment made it a perfect escape from city life.',
      service: 'Aromatherapy',
      date: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Sunil Roy',
      rating: 4,
      review: 'Great foot massage service! After long hours at work, this was exactly what I needed. The pressure points technique really helped with my foot pain.',
      service: 'Foot Massage',
      date: '1 week ago',
      avatar: 'https://images.pexels.com/photos/3845458/pexels-photo-3845458.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Meera Ghosh',
      rating: 5,
      review: 'Exceptional service and beautiful interiors. The head and shoulder massage relieved all my tension. I\'ve already booked my next appointment!',
      service: 'Head & Shoulder Massage',
      date: '5 days ago',
      avatar: 'https://images.pexels.com/photos/3845459/pexels-photo-3845459.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Amit Banerjee',
      rating: 5,
      review: 'Hot stone therapy was a new experience for me and it was fantastic! The warmth and the massage technique were perfect. Highly recommend this place.',
      service: 'Hot Stone Therapy',
      date: '2 months ago',
      avatar: 'https://images.pexels.com/photos/3845460/pexels-photo-3845460.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const overallRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it - read what our valued customers have to say about their spa experience
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(overallRating) 
                      ? 'fill-amber-400 text-amber-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">{overallRating.toFixed(1)}/5</div>
            <div className="text-gray-600">({reviews.length}+ Reviews)</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? 'fill-amber-400 text-amber-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium">{review.service}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute top-0 left-0 w-6 h-6 text-emerald-200 -mt-2 -ml-2" />
                <p className="text-gray-600 leading-relaxed pl-4">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Leave Us a Review
            </h3>
            <p className="text-gray-600 mb-6">
              Had a great experience? Share it with others on Google Reviews and help us serve you better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://g.page/r/your-google-business-id/review"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Review on Google</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
              >
                Send Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;