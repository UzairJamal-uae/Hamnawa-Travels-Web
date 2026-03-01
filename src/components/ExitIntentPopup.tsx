import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Sparkles } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const closePopup = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-nature-900/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-md bg-white rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border-4 border-nature-600"
          >
            <div className="p-10 text-center">
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 p-2 hover:bg-nature-50 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-earth-400" />
              </button>

              <div className="w-24 h-24 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <Gift className="w-12 h-12 text-nature-600" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                >
                  WAIT!
                </motion.div>
              </div>

              <h3 className="text-4xl font-serif font-bold text-nature-900 mb-4">Don't Leave Yet!</h3>
              <p className="text-earth-600 mb-8 text-lg">
                "The world is a book and those who do not travel read only one page."
              </p>
              
              <div className="bg-nature-50 p-6 rounded-3xl border-2 border-dashed border-nature-300 mb-8">
                <p className="text-nature-800 font-bold text-sm uppercase tracking-widest mb-2">Exclusive Offer</p>
                <div className="text-5xl font-serif font-black text-nature-600 mb-2">20% OFF</div>
                <p className="text-earth-500 text-sm">Instant discount if you book your trip in the next 24 hours!</p>
              </div>

              <button
                onClick={closePopup}
                className="w-full bg-nature-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-nature-700 transition-all shadow-xl shadow-nature-200 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-6 h-6" />
                Claim Discount Now
              </button>
              
              <button 
                onClick={closePopup}
                className="mt-6 text-earth-400 text-sm font-medium hover:text-earth-600 transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
            
            {/* Broken Paper Edge */}
            <div className="absolute top-0 left-0 w-full h-4 bg-nature-600 broken-paper-edge opacity-10"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
