import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Star, ShieldCheck, Camera, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, CASE_STUDIES, REVIEWS } from '../constants';
import DestinationCard from '../components/DestinationCard';
import OfferBanner from '../components/OfferBanner';
import ScrollReveal from '../components/ScrollReveal';
import BookingModal from '../components/BookingModal';

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-nature-50 overflow-x-hidden">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Hero Section - Inspired by Image 1 & 2 */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=1920" 
            alt="Pakistan Mountains" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-nature-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif font-bold text-white leading-[0.9] mb-8">
              <span className="text-nature-400 italic font-normal">Unseen</span> Beauty <br />
              <span className="text-white">of Pakistan</span>
            </h1>
            <p className="text-lg md:text-2xl text-nature-100 mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
              From the majestic peaks of Hunza to the serene valleys of Swat. We manage your journey, you create the memories.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-nature-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-nature-400 transition-all shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95"
              >
                Book Your Trip
              </button>
              <Link to="/destinations" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3">
                Explore More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Broken Paper Edge Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      {/* Featured Destinations - Popular Tours Section */}
      <section className="py-32 bg-nature-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-nature-600 uppercase tracking-[0.3em] mb-4">Popular Tours</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-nature-900">Choose Your Adventure</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {DESTINATIONS.slice(0, 3).map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 0.1}>
                <DestinationCard destination={dest} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <ScrollReveal>
        <OfferBanner />
      </ScrollReveal>

      {/* Discover Section - Inspired by Image 2 */}
      <section className="py-32 bg-nature-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-nature-50 broken-paper-edge-bottom z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="space-y-10">
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  Discover the <br />
                  <span className="text-nature-400">World in a New Way</span>
                </h2>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-nature-900 transition-all duration-500">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <span className="text-xl font-bold tracking-widest uppercase">Watch the Video</span>
                </div>
                <p className="text-nature-300 text-lg leading-relaxed max-w-lg">
                  Experience Pakistan like never before. Our expert guides take you beyond the tourist trails to discover the true heart of our beautiful country.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.pexels.com/photos/542608/pexels-photo-542608.jpeg?_gl=1*1fv8u8x*_ga*MTU0NzM4MjIyMy4xNzcyMzc2OTAy*_ga_8JE65Q40S6*czE3NzIzNzY5MDEkbzEkZzEkdDE3NzIzNzczMjQkajQyJGwwJGgw" alt="Landscape 1" className="rounded-3xl shadow-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                  <img src="https://cdn.pixabay.com/photo/2025/05/21/15/34/snow-mountain-9614087_1280.jpg" alt="Landscape 2" className="rounded-3xl shadow-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=400" alt="Landscape 3" className="rounded-3xl shadow-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=400" alt="Landscape 4" className="rounded-3xl shadow-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-nature-600 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-nature-900">Our Success Stories</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {CASE_STUDIES.map((study, i) => (
              <ScrollReveal key={study.id} delay={i * 0.2} direction={i % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[3rem] aspect-[16/10] shadow-2xl"
                >
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                    <span className="text-nature-400 font-bold text-sm mb-2 tracking-widest uppercase">{study.stats}</span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-earth-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {study.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-900 text-center mb-20">Voices of Travelers</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 0.2}>
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-nature-100/50 hover:shadow-2xl transition-all duration-500">
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-earth-700 text-xl italic mb-8 leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-nature-100 flex items-center justify-center font-bold text-nature-700 text-xl shadow-inner">
                      {review.user[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-nature-900 text-lg">{review.user}</h4>
                      <p className="text-sm text-earth-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
