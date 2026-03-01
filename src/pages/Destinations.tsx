import React from 'react';
import { motion } from 'motion/react';
import { DESTINATIONS } from '../constants';
import DestinationCard from '../components/DestinationCard';
import OfferBanner from '../components/OfferBanner';
import ScrollReveal from '../components/ScrollReveal';

const Destinations = () => {
  return (
    <div className="bg-nature-50 overflow-x-hidden">
      {/* Header */}
      <section className="bg-nature-900 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Explore <span className="text-nature-400 italic font-normal">Pakistan</span>
            </h1>
            <p className="text-nature-200 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              From the highest peaks of Gilgit-Baltistan to the lush green valleys of Swat and Kashmir. 
              Find your perfect destination.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nature-800 rounded-full -mr-48 -mt-48 blur-[150px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nature-700 rounded-full -ml-32 -mb-32 blur-[120px] opacity-20"></div>
        
        {/* Broken Paper Edge Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      {/* Destinations Grid */}
      <section className="py-32 bg-nature-50 relative">
        {/* Decorative background text */}
        <div className="absolute top-40 left-10 text-[15vw] font-serif font-black text-nature-900/5 select-none pointer-events-none uppercase leading-none">
          Journeys
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-900 mb-4">Our Destinations</h2>
              <p className="text-earth-600 text-lg md:text-xl max-w-xl">Carefully selected locations that offer the most authentic and breathtaking experiences in Pakistan.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white px-6 py-3 rounded-full border border-nature-200 text-nature-600 font-bold shadow-sm">
                {DESTINATIONS.length} Locations Available
              </div>
            </div>
          </div>

          {DESTINATIONS.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              {DESTINATIONS.map((dest, i) => (
                <ScrollReveal key={dest.id} delay={i * 0.1}>
                  <DestinationCard destination={dest} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-nature-300">
              <p className="text-earth-500 text-xl">No destinations found. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      <ScrollReveal>
        <OfferBanner />
      </ScrollReveal>
    </div>
  );
};

export default Destinations;
