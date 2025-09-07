import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Offers from './components/Offers';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <Reviews />
      <Offers />
      <Blog />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;