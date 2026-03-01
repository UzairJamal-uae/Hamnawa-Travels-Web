import React from 'react';
import { motion } from 'motion/react';
import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferBanner = () => {
  return (
    <section className="py-12 bg-nature-50">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/free-travel">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden bg-gradient-to-r from-nature-600 to-nature-800 rounded-3xl p-8 md:p-12 shadow-2xl group cursor-pointer"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-bold mb-6"
                >
                  <Gift className="w-4 h-4" />
                  HOT OFFER
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                  Travel All Over Pakistan <br />
                  <span className="text-nature-300">For Free of Cost!</span>
                </h2>
                <p className="text-nature-100 text-lg max-w-xl">
                  Yes, you read that right. Join our referral program and earn your dream trip to the northern areas without spending a single rupee.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-white text-nature-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl"
              >
                Claim Your Free Trip
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Broken Paper Effect Overlay */}
            <div className="absolute top-0 left-0 w-full h-4 bg-nature-50 broken-paper-edge-bottom opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-nature-50 broken-paper-edge opacity-50"></div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default OfferBanner;
