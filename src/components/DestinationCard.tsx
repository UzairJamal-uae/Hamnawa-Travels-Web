import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Destination } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Simple auto-slide on hover
  React.useEffect(() => {
    let interval: any;
    if (isHovered && destination.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
      }, 2500);
    } else {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, destination.images.length]);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-[3rem] overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 border border-nature-100/50 flex flex-col h-full"
    >
      <div className="relative h-[500px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={destination.images[currentImageIndex]}
            alt={destination.name}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Progress Indicators */}
        {isHovered && destination.images.length > 1 && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {destination.images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        
        <div className="absolute top-8 left-8">
          <div className="bg-nature-500/90 backdrop-blur-md px-5 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2 shadow-xl border border-white/20">
            <MapPin className="w-4 h-4" />
            {destination.location}
          </div>
        </div>

        <div className="absolute bottom-10 left-10 right-10">
          <motion.div
            animate={{ y: isHovered ? -15 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">{destination.name}</h3>
            <div className="flex items-center justify-between text-nature-200 text-sm font-medium">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                {destination.duration}
              </span>
              <span className="text-white font-bold text-2xl drop-shadow-md">{destination.price}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <p className="text-earth-600 text-lg leading-relaxed mb-10 flex-grow italic">
          "{destination.description}"
        </p>
        
        <Link 
          to={`/destinations/${destination.id}`}
          className="w-full flex items-center justify-center gap-3 bg-nature-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-nature-500 transition-all duration-500 group/btn shadow-xl hover:shadow-nature-500/40"
        >
          View Details
          <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
      
      {/* Broken Paper Edge Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-nature-500 broken-paper-edge opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default DestinationCard;
