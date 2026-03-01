import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS, CASE_STUDIES } from '../constants';
import { Star, Award, Users, Globe } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className="bg-nature-50 overflow-x-hidden">
      {/* Hero */}
      <section className="bg-nature-900 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
                Our Journey of <br /><span className="text-nature-400 italic font-normal">200+ Adventures</span>
              </h1>
              <p className="text-nature-200 text-xl leading-relaxed mb-12 max-w-xl">
                Hamnawa Travels was founded 2 years ago by Uzair & Umer with a simple mission: to make the breathtaking beauty of Pakistan accessible to everyone. 
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-5xl font-serif font-bold text-nature-400">200+</h4>
                  <p className="text-nature-300 text-sm uppercase tracking-widest mt-2">Successful Trips</p>
                </div>
                <div>
                  <h4 className="text-5xl font-serif font-bold text-nature-400">2 Years</h4>
                  <p className="text-nature-300 text-sm uppercase tracking-widest mt-2">In Industry</p>
                </div>
              </div>
            </motion.div>
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-6 bg-nature-800 rounded-[3rem] rotate-3"></div>
                <img 
                  src="https://pakrism.pk/wp-content/uploads/2024/05/Group-tour-3-min.jpeg" 
                  alt="Hamnawa Experience" 
                  className="relative z-10 rounded-[3rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      {/* Achievements */}
      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Award, title: 'Quality Service', desc: 'Consistently rated 5-stars by our diverse range of clients.' },
              { icon: Users, title: 'Community Focused', desc: 'Building a community of travelers who love Pakistan.' },
              { icon: Globe, title: 'All Over Pakistan', desc: 'From the southern coast to the northern peaks.' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-10 rounded-[3rem] bg-white border border-nature-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-20 h-20 bg-nature-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-nature-500 transition-colors duration-500">
                    <item.icon className="w-10 h-10 text-nature-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-nature-900">{item.title}</h3>
                  <p className="text-earth-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-nature-900 text-center mb-24">Hamnawa Portfolio</h2>
          </ScrollReveal>
          <div className="space-y-32">
            {CASE_STUDIES.map((study, i) => (
              <div key={study.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <ScrollReveal className="flex-1 w-full" direction={i % 2 === 0 ? 'right' : 'left'}>
                  <img src={study.image} alt={study.title} className="rounded-[3rem] shadow-2xl w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                </ScrollReveal>
                <ScrollReveal className="flex-1 space-y-8" direction={i % 2 === 0 ? 'left' : 'right'}>
                  <span className="text-nature-600 font-bold tracking-[0.3em] uppercase text-sm">{study.stats}</span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-nature-900 leading-tight">{study.title}</h3>
                  <p className="text-earth-700 text-xl leading-relaxed">{study.description}</p>
                  <div className="p-8 bg-nature-50 rounded-[2rem] border-l-4 border-nature-500 italic text-earth-600 text-lg">
                    "The attention to detail was remarkable. Every aspect of the trip was perfectly managed."
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-nature-900 text-center mb-24">Traveler Experiences</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[3rem] border border-nature-100 shadow-xl">
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-earth-700 text-lg italic mb-8 leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-nature-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
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

export default About;
