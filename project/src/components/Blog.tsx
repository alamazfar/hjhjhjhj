import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Benefits of Foot Massage: More Than Just Relaxation',
      excerpt: 'Discover how regular foot massage can improve circulation, reduce stress, and boost overall health. Learn about pressure points and traditional techniques.',
      image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Dr. Priya Sharma',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Health Benefits'
    },
    {
      title: 'How Massage Reduces Stress: The Science Behind Relaxation',
      excerpt: 'Understanding the physiological and psychological effects of massage therapy on stress hormones and mental well-being.',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Anita Das',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Wellness'
    },
    {
      title: 'Ancient Ayurvedic Massage Techniques in Modern Spa',
      excerpt: 'Explore how traditional Ayurvedic healing practices are being integrated into contemporary spa treatments for holistic wellness.',
      image: 'https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Meera Ghosh',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Traditional Medicine'
    },
    {
      title: 'The Power of Aromatherapy: Essential Oils for Mind and Body',
      excerpt: 'Learn about the therapeutic properties of essential oils and how aromatherapy massage can enhance your physical and emotional well-being.',
      image: 'https://images.pexels.com/photos/3865674/pexels-photo-3865674.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Dr. Rajesh Kumar',
      date: 'February 28, 2024',
      readTime: '8 min read',
      category: 'Aromatherapy'
    },
    {
      title: 'Hot Stone Therapy: Ancient Healing for Modern Stress',
      excerpt: 'Discover the origins and benefits of hot stone massage, and why this ancient practice is perfect for today\'s stressful lifestyle.',
      image: 'https://images.pexels.com/photos/3865678/pexels-photo-3865678.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Sunil Roy',
      date: 'February 20, 2024',
      readTime: '5 min read',
      category: 'Specialty Treatments'
    },
    {
      title: 'Post-Massage Care: Maximizing Your Spa Experience',
      excerpt: 'Essential tips for what to do after your massage session to maximize the benefits and maintain that relaxed feeling longer.',
      image: 'https://images.pexels.com/photos/3865677/pexels-photo-3865677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Anita Das',
      date: 'February 15, 2024',
      readTime: '4 min read',
      category: 'Self Care'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health Benefits': return 'bg-emerald-100 text-emerald-600';
      case 'Wellness': return 'bg-blue-100 text-blue-600';
      case 'Traditional Medicine': return 'bg-amber-100 text-amber-600';
      case 'Aromatherapy': return 'bg-purple-100 text-purple-600';
      case 'Specialty Treatments': return 'bg-pink-100 text-pink-600';
      case 'Self Care': return 'bg-teal-100 text-teal-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wellness Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, wellness tips, and everything you need to know about spa treatments and holistic health
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(blogPosts[0].category)}`}>
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(blogPosts[0].category)}`}>
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <button className="group flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="group flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Wellness Tips
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest wellness articles, spa tips, and exclusive offers
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;