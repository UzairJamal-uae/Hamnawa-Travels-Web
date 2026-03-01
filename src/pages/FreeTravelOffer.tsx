import React from 'react';
import { motion } from 'motion/react';
import { Gift, Users, Plane, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const FreeTravelOffer = () => {
  const quotes = [
    "The world is a book and those who do not travel read only one page.",
    "Travel is the only thing you buy that makes you richer.",
    "Adventure is worthwhile in itself."
  ];

  return (
    <div className="bg-nature-50 overflow-x-hidden">
      <section className="bg-nature-900 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block p-6 bg-white/10 backdrop-blur-xl rounded-[2.5rem] mb-10 border border-white/20 shadow-2xl"
          >
            <Gift className="w-16 h-16 text-nature-400" />
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
            Travel <span className="text-nature-400 italic font-normal">For Free!</span>
          </h1>
          <p className="text-nature-200 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            Our most exclusive offer. Turn your network into your next adventure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-900 mb-8">How It Works?</h2>
                <p className="text-earth-700 text-xl md:text-2xl leading-relaxed">
                  At Hamnawa Travels, we believe in sharing the joy of travel. Our referral program is designed for those who love to explore and want to bring their friends along.
                </p>
              </ScrollReveal>
              
              <div className="space-y-8">
                {[
                  { icon: Users, title: 'Refer 5 Friends', desc: 'Get 5 people to book a trip with us using your unique referral code.' },
                  { icon: CheckCircle2, title: 'Instant Verification', desc: 'Once their bookings are confirmed, your reward is unlocked.' },
                  { icon: Plane, title: 'Pack Your Bags', desc: 'Get a free slot on any of our upcoming group trips instantly!' }
                ].map((step, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex gap-8 p-8 bg-white rounded-[2.5rem] border border-nature-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <div className="w-16 h-16 rounded-2xl bg-nature-50 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-nature-500 transition-colors duration-500">
                        <step.icon className="w-8 h-8 text-nature-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-nature-900 mb-2">{step.title}</h4>
                        <p className="text-earth-600 text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="p-10 md:p-16 bg-nature-900 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-white/10" />
                  <p className="text-2xl md:text-3xl italic font-serif mb-6 leading-relaxed">"{quotes[Math.floor(Math.random() * quotes.length)]}"</p>
                  <p className="text-nature-400 text-lg font-bold uppercase tracking-widest">— Travel Inspiration</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="relative">
              <ScrollReveal>
                <div className="relative group">
                  <img 
                    src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?_gl=1*1bhsq1e*_ga*MTU0NzM4MjIyMy4xNzcyMzc2OTAy*_ga_8JE65Q40S6*czE3NzIzNzY5MDEkbzEkZzEkdDE3NzIzNzY5MjkkajMyJGwwJGgw" 
                    alt="Free Travel" 
                    className="rounded-[4rem] shadow-2xl w-full object-cover aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-10 md:p-12 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-nature-100 max-w-sm">
                  <h4 className="text-3xl font-serif font-bold text-nature-900 mb-4">Ready to Start?</h4>
                  <p className="text-earth-600 text-lg mb-8 leading-relaxed">Contact us now to get your unique referral code and start your journey for free.</p>
                  <Link to="/contact" className="block w-full text-center bg-nature-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-nature-700 transition-all shadow-xl shadow-nature-200 hover:scale-[1.02] active:scale-[0.98]">
                    Get My Code
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTravelOffer;
